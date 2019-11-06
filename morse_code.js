var decodeMorse = function(code) {
    var ref = {'.-':     'A', '-...':   'B', '-.-.':   'C', '-..':    'D', '.':      'E', '..-.':   'F', '--.':    'G', '....':   'H', '..':     'I', '.---':   'J', '-.-':    'K', '.-..':   'L', '--':     'M', '-.':     'N', '---':    'O', '.--.':   'P', '--.-':   'Q', '.-.':    'R', '...':    'S', '-':      'T', '..-':    'U', '...-':   'V', '.--':    'W', '-..-':   'X', '-.--':   'Y', '--..':   'Z', '.----':  '1', '..---':  '2', '...--':  '3', '....-':  '4', '.....':  '5', '-....':  '6', '--...':  '7', '---..':  '8', '----.':  '9', '-----':  '0', '': ' ' };
    return code.split('  ').map(
        a => a
          .split(' ')
          .map(
            b => ref[b]
          ).join('')
      ).join(' ');
}
let myTest = decodeMorse(".... . .-.. .-.. ---  .-- --- .-. .-.. -..");
console.log(myTest);
