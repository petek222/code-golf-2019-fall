// ### 3. Morse Code
// #### Write a decoder for Morse Code messages. Letters are separated by one space and words are separated by two spaces. Only A-Z and 0-9 will be included.

// Example Input:
// ```
// .... . .-.. .-.. ---  .-- --- .-. .-.. -..
// ```

// Example Output:
// ```
// HELLO WORLD
// ```
var decodeMorse = function(code) {
    var ref = {'.-':     'A', '-...':   'B', '-.-.':   'C', '-..':    'D', '.':      'E', '..-.':   'F', '--.':    'G', '....':   'H', '..':     'I', '.---':   'J', '-.-':    'K', '.-..':   'L', '--':     'M', '-.':     'N', '---':    'O', '.--.':   'P', '--.-':   'Q', '.-.':    'R', '...':    'S', '-':      'T', '..-':    'U', '...-':   'V', '.--':    'W', '-..-':   'X', '-.--':   'Y', '--..':   'Z', '.----':  '1', '..---':  '2', '...--':  '3', '....-':  '4', '.....':  '5', '-....':  '6', '--...':  '7', '---..':  '8', '----.':  '9', '-----':  '0', '': ' ' };

    // RESTRUCTURE/CUT DOWN THIS PART
    return code.split('  ').map(
        a => a
          .split(' ')
          .map(
            b => ref[b]
          ).join('')
      ).join(' ');
}

// Test Code
let myTest = decodeMorse(".... . .-.. .-.. ---  .-- --- .-. .-.. -..");
console.log(myTest);
