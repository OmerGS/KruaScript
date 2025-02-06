import { TokenTypes } from "./tokenTypes.js";

const tokenDefinitions = [
    { type: "WHITESPACE", regex: /^\s+/ },
    { type: "KEYWORD", regex: /^(?:let|const|var|if|else|while|for|function|return)\b/ },
    { type: "NUMBER", regex: /^\d+/ },
    { type: "STRING", regex: /^"([^"]*)"|^'([^']*)'/ },
    { type: "IDENTIFIER", regex: /^[a-zA-Z_]\w*/ },
    { type: "OPERATOR", regex: /^[+\-*/=<>!&|]/ },
  
    { type: "PAREN_OPEN", regex: /^\(/ },
    { type: "PAREN_CLOSE", regex: /^\)/ },
    { type: "BRACE_OPEN", regex: /^\{/ },
    { type: "BRACE_CLOSE", regex: /^\}/ },
  
    { type: "SEMICOLON", regex: /^;/ }, 
    { type: "DOT", regex: /^\./ },        
    { type: "COMMA", regex: /^,/ },      
];
  
  
  

export function tokenize(input) {
  let tokens = [];
  let cursor = 0;

  while (cursor < input.length) {
    let matchFound = false;

    for (let { type, regex } of tokenDefinitions) {
      const match = input.slice(cursor).match(regex);
      if (match) {
        if (type !== TokenTypes.WHITESPACE) { 
          tokens.push({ type, value: match[0] });
        }
        cursor += match[0].length;
        matchFound = true;
        break;
      }
    }

    if (!matchFound) {
      throw new Error(`Token non reconnu près de: '${input.slice(cursor, cursor + 10)}'`);
    }
  }

  return tokens;
}
