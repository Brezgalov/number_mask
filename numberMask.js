function numberMask(text, decimals = null)
{
    text = text.replace(/[^0-9.,]/g, '');
    text = text.replace(/[,]/g, '.');

    let match = text.match(/[0-9]+|\./g);

    if (match === null || !match.length) {
        return 0;
    }

    if (match.length === 1) {
        let number = Number(match[0]);
        return isNaN(number) ? 0 : number;
    }

    let toJoin = [];
    let point = false;

    for (let i = 0; i < match.length; i++) {
        if (match[i] === '.') {
            if (point) {
                break;
            }
            point = true;
        }

        let numberPart = Number(match[i]);
        if (isNaN(numberPart)) {
            toJoin.push(match[i]);
            continue;
        }

        if (point && decimals) {
            numberPart = String(numberPart).substr(0, decimals);
        }

        toJoin.push(numberPart);
    }

    return toJoin.join('');
}
