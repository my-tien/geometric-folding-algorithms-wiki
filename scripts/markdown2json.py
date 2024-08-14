import argparse
import json
from pathlib import Path
import re


def parse_into_doc(search_path: str, md_string: str):
    titles = []
    subtitles = []
    subtitle_regex = re.compile(r"^-+$")

    codeblock = False
    last_line = ""
    for line in md_string.split("\n"):
        if not codeblock:
            if subtitle_regex.match(line):
                subtitles.append(last_line)
            elif line.startswith("#"):
                titles.append(line.lstrip("# "))
            elif line.startswith("```"):
                codeblock = True

        elif line.startswith("```"):
            codeblock = False
        last_line = line
    
    return {
        "title": titles[0],
        "titles": titles,
        "subtitles": subtitles,
        "body": md_string,
        "path": search_path
    }


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("--input-directory", type=Path, default=Path("markdown/"))
    parser.add_argument("--output-file", type=Path, default=Path("static/wiki.json"))
    parser.add_argument("--indent", nargs=1, type=int)

    args = parser.parse_args()

    docs = []
    for md_path in args.input_directory.glob("**/*.md"):
        with open(md_path, encoding="utf8") as md_file:
            search_path = str(md_path.relative_to(args.input_directory)).rstrip(".md")
            docs.append(parse_into_doc(f"/{search_path}.html", md_file.read()))

    docs_json = json.dumps(docs, indent=args.indent, ensure_ascii=False)
    with open(args.output_file, "w", encoding="utf8") as f:
        f.write(docs_json)
