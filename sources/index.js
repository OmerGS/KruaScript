import { tokenize } from "../sources/lexer/jsLexer.js";

const code = `let x = 10; if (x > 5) { console.log("Hello World!"); }`;
const tokens = tokenize(code);

console.log(tokens)

