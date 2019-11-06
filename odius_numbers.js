for (let i = 0; i <= 50; i++) { if (((i >>> 0).toString(2).split('').filter(x => x == '1').length) % 2 != 0) console.log(i);}
