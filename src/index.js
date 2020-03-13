const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var words = [];

    for(let i = 0; i < expr.length; i +=10){
        words.push(expr.slice(i, i+10));
    }
    let coded = words.map(function(el){
        let char = '';
            for(let i = 0; i < el.length; i+=2){
                if(el[i] === '1'){
                    if(el[i + 1] === '0'){
                        char += '.';
                    } else {
                        char += '-';
                    }
                }  
            }
        return char;
    })
   
    let encoded = coded.map(function(el){
        if(el){
            return MORSE_TABLE[el];
        } else {
            return ' ';
    } 
    })
    return encoded.join('');
}

module.exports = {
    decode
}