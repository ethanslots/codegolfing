/*-------------------------------------------------------------\
| For JavaScript minimizing: https://dean.edwards.name/packer/ |
| For JavaScript running: Chrome console (@ about:blank)       |
| For Stax running: https://staxlang.xyz                       |
| For APL running: https://tryapl.org                          |
| Yes, this is in JavaScript. But, it's also in JSON!          |
| Plot twist!                                                  |
\-------------------------------------------------------------*/
var codegolfU = {
	"beepboopbop": {
		"packedstax": "Ä⌂↑╕Ä_Wß╘rª╝≡ =┴",
		"unpackedstax": "`).U8ak8?1,`j:REPPP",
		"jsgolf": "var a='beep boop bop',b=a.split(' '),c=0;while(c<3){console.log(b[c]+' ');c++}",
    "aplgolf": false
	},
  "obfuscatedchicken": {
    "packedstax": "¬╠┘¢•█",
    "unpackedstax": "`%que!`",
    "jsgolf": false,
    "aplgolf": "⌽'nekcihc'"
  }
}
/* Old code I was trying to use to write all the things to the console, it doesn't work... oh well
You can try to debug it... but nobody will see this because this is another text file on GitHub, like millions of others that have pretty much no meaning to anyone but the single author who wrote it
var codegolf = JSON.parse(JSON.stringify(codegolfU));
var golfNames = ['beepboopbop', 'obfuscatedchicken'];
var golfAttributes = ['packedstax', 'unpackedstax', 'jsgolf', 'aplgolf'];
var counterOne = 0;
var counterTwo = 0;
var currentLoaded = 0;
function load() {
  if (counterTwo > golfAttributes.length) {
    counterTwo = 0;
    counterOne++;
  } else {
    currentLoaded = codegolf.golfNames[counterOne].golfAttributes[counterTwo];
  }
}
while (counterOne <= golfNames.length) {
  if (currentLoaded !== false) {
    console.log(currentLoaded);
    counterTwo++;
    load();
  } else {
    load();
  }
}
*/
