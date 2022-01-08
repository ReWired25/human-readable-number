module.exports = function toReadable (number) {
    let arrTeen = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    let arrTens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']

    if (number < 20) {
	    return arrTeen[number];
        }
    if (number < 100) {
	    let str = number.toString();
	    let finalStr = arrTens[Number(str[0]) - 2];
	    if (str[1] === '0') {
		    return finalStr
	    } else {
            finalStr += ' ' + arrTeen[Number(str[1])];
        }
        return finalStr;
    }
    if (number < 1000) {
        let str = number.toString();
        let finalStr = arrTeen[Number(str[0])] + ' ' + 'hundred';
        if (Number(str[1] + str[2]) < 20 && Number(str[1] + str[2]) > 0) {
            finalStr += ' ' + arrTeen[Number(str[1] + str[2])];
            return finalStr;
        }
        if (str[1] !== '0') {
            finalStr += ' ' + arrTens[Number(str[1]) - 2];
        };
        if (str[2] !== '0') {
            finalStr += ' ' + arrTeen[Number(str[2])];
            return finalStr;
        }
        return finalStr;
    }
}