var ONES = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var TENS = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
var HUNDREDS = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
var THOUSANDS = ['M', 'MM', 'MMM'];

function convertToRoman(num) {
    var ones = num % 10;
    var tens = Math.floor(num / 10) % 10;
    var hundreds = Math.floor(num / 100) % 10;
    var thousands = Math.floor(num / 1000) % 10;
    var largest = 1;
    var s = '';
    if (thousands > 0) {
        s += THOUSANDS[thousands - 1];
    }
    if (hundreds > 0) {
        s += HUNDREDS[hundreds - 1];
    }
    if (tens > 0) {
        s += TENS[tens - 1];
    }
    if (ones > 1) {
        s += ONES[ones - 1];
    }

    return s;
}

function onSubmit (e) {
    e.preventDefault();
    var val = document.querySelector('#number').value;
    val = parseInt (val);
    var result = '';
    if (isNaN(val)) {
        result = 'Não é um número.';
    } else if (val < 0) {
        result = 'Este não é válido (negativo). Tente novamente.';
    } else if (val == 0) {
        result = 'Não existe zero em número Romano.';
    } else if (val >= 4000) {
        result = 'São suportados números até 3999. Tente novamente.';
    } else {
        result = convertToRoman (val);
    }
    document.querySelector ('#result').innerHTML = result;
    return false;
}

document.addEventListener ('DOMContentLoaded', function() {
    document.querySelector('#number').addEventListener('input', onSubmit);
});
