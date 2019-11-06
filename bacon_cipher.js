// 4. Bacon's Cipher
// Bacon's Cipher tries to hide a word in another message, using the following encoding (B means a letter is capitalized, and A means it is lowercase) Write a decoder for Bacon's Ciper.

// Letter  Encoding:
// ```
// A       AAAAA			B       AAAAB		C       AAABA
// D       AAABB			E       AABAA		F       AABAB
// G       AABBA			H       AABBB		I       ABAAA
// J       ABAAB			K       ABABA		L       ABABB
// M       ABBAA			N       ABBAB		O       ABBBA
// P       ABBBB			Q       BAAAA		R       BAAAB
// S       BAABA			T       BAABB		U       BABAA
// V       BABAB			W       BABBA		X       BABBB
// Y       BBAAA			Z       BBAAB
// ```

// Example Input:
// ```
// thE QUicK broWn FOx JuMPs OVEr ThE LazY DOgS, gaMbOlINg in TH
// ```

// Example Output:
// ```
// HELLOWORLD
// ```

var baconCipher = function(msg) {
    var ref = {
        'AAAAA': 'A',
        'AAAAB' : 'B',
        'AAABA' : 'C',
        'AAABB': 'D',
        'AABAA': 'E',
        'AABAB': 'F',
        'AABBA': 'G',
        'AABBB': 'H',
        'ABAAA': 'I',
        'ABAAB': 'J',
        'ABABA': 'K',
        'ABABB': 'L',
        'ABBAA': 'M',
        'ABBAB': 'N',
        'ABBBA': 'O',
        'ABBBB': 'P',
        'BAAAA': 'Q',
        'BAAAB': 'R',
        'BAABA': 'S',
        'BAABB': 'T',
        'BABAA': 'U',
        'BABAB': 'V',
        'BABBA': 'W',
        'BABBB': 'X',
        'BBAAA': 'Y',
        'BBAAB': 'Z'
    };

    var res = msg.replace(/[.,\s]/g, '');
    let myString = "";
    let answer = "";    
    for (let i = 0; i < res.length; i++) {
        if (res[i] == res[i].toUpperCase()) myString += 'B';
        else myString += 'A'; 
    }
    for (let i = 0; i < myString.length - 5; i = i + 5) {
        let sub = myString.substring(i, i+5);
        answer += ref[sub];
    }

    console.log(answer);

}

baconCipher("thE QUicK broWn FOx JuMPs OVEr ThE LazY DOgS, gaMbOlINg in TH");