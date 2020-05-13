var n = 100;
var plural;

function beer() {
  while(n >= 1){
    n--;
    if (n === 1) {
      plural = "";
    } else {
      plural = "s"
    }
    if (n === 0) {
      n = "no"
    }
    console.log(n + " bottle" + plural + " of beer on the wall, " + n + " bottle" + plural + " of beer. Take 1 down, pass it around, " + (n - 1) + " bottle" + plural + " of beer on the wall");
  }
}

beer();
