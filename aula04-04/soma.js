function soma(n1, n2){
    if(typeof(n1) === 'number' && typeof(n2) === 'number'){
        const result = n1 + n2;
        return parseFloat(result.toPrecision(1));
    }
    return 'Só é possível somar com números';
}

module.exports = {soma};