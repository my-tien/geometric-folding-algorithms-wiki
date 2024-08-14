import {readFileSync, writeFileSync} from "fs";
import Fuse from "../static/js/fuse.basic.min.mjs";

const wiki = readFileSync('static/wiki.json');
const index = Fuse.createIndex(['titles', 'subtitles', 'body'], JSON.parse(wiki));

const indexStr = JSON.stringify(index.toJSON(), null, 4);

writeFileSync('static/wiki-index.json', indexStr);
