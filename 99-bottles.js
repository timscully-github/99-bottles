var n = 100;
function beer() {
  while(n >= 2){
    n--
    console.log(n + " bottles of beer on the wall, " + n + " bottles of beer. Take 1 down, pass it around, " + (n - 1) + " bottles of beer on the wall");
  }
}

beer();
