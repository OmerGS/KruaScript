import { tokenize } from "../sources/lexer/jsLexer.js";
import { parse } from "../sources/parser/parser.js";

const code = `let y = 50;}`;
const tokens = tokenize(code);
const ast = parse(tokens);

//console.log(tokens)

console.log(JSON.stringify(ast, null, 2));
