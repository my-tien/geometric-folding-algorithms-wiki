const indexObj = await fetch('/~toffi-fee/gfalop-wiki/wiki-index.json')
    .then((response) => { return response.json(); });
const wiki = await fetch('/~toffi-fee/gfalop-wiki/wiki.json')
    .then((response) => { return response.json(); });

const searchIndex = Fuse.parseIndex(indexObj);

const options = {
    includeScore: true,
    minMatchCharLength: 3,
    ignoreLocation: true,
    keys: [
        {
            name: 'titles',
            weight: 0.6
        },
        {
            name: 'subtitles',
            weight: 0.3
        },
        {
            name: 'body',
            weight: 0.1
        }
    ]
}
const fuse = new Fuse(wiki, options, searchIndex);

const searchResultDiv = document.getElementById("SearchResults");

addEventListener("input", (event) => {
    const searchText = event.target.value;
    if (searchText.length === 0) {
        searchResultDiv.hidden = true;
    }
    if (searchText.length > 2) {
        searchResultDiv.innerHTML = "";

        const results = fuse.search(searchText);

        if (results.length > 0) {
            for (const result of results) {
                const resultLink = document.createElement("a");
                resultLink.href = `${window.location.origin}/~toffi-fee/gfalop-wiki/${result.item.path}`;
                resultLink.className = 'search-result'
                
                const resultText = document.createElement("div");
                resultText.innerHTML = result.item.title;
                resultLink.appendChild(resultText);
                
                searchResultDiv.appendChild(resultLink);
            }
            searchResultDiv.hidden = false;
        }
    }
});
