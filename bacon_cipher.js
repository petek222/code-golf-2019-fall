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
        console.log(sub);
        console.log(ref[sub]);
        answer += ref[sub];
    }

    console.log(answer);

}

baconCipher("thE QUicK broWn FOx JuMPs OVEr ThE LazY DOgS, gaMbOlINg in TH");