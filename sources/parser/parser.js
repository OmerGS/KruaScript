export function parse(tokens) {
    let cursor = 0;

    function parseVariableDeclaration() {
        const letToken = tokens[cursor++];
        if (letToken.type !== 'KEYWORD' || letToken.value !== 'let') {
            throw new Error(`Expected 'let', found ${letToken.value}`);
        }

        const nameToken = tokens[cursor++];
        if (nameToken.type !== 'IDENTIFIER') {
            throw new Error(`Expected variable name, found ${nameToken.value}`);
        }

        const equalsToken = tokens[cursor++];
        if (equalsToken.type !== 'OPERATOR' || equalsToken.value !== '=') {
            throw new Error(`Expected '=', found ${equalsToken.value}`);
        }

        const valueToken = tokens[cursor++];
        if (valueToken.type !== 'NUMBER') {
            throw new Error(`Expected number, found ${valueToken.value}`);
        }

        const semicolonToken = tokens[cursor++];
        if (semicolonToken.type !== 'SEMICOLON') {
            throw new Error(`Expected ';', found ${semicolonToken.value}`);
        }

        return {
            type: 'VariableDeclaration',
            name: nameToken.value,
            value: Number(valueToken.value),
        };
    }

    return parseVariableDeclaration();
}