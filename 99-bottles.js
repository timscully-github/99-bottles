var n = 100;
var plural;
var minusOne;

function beer() {
  while(n >= 1){

    n--;

    // change lyric for zero
    if (n === 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall");
    } else if (n === 1) {
        console.log("1 bottle of beer on the wall, 1 bottle of beer. Take 1 down, pass it around, no more bottles of beer on the wall");
    } else {
        console.log(n + " bottles of beer on the wall, bottles of beer. Take 1 down, pass it around, " + (n - 1) + " bottles of beer on the wall");
    }

  }
}

beer();
