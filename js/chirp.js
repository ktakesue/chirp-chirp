function chirp(n){
  // FIX ME
//   if (n === 0){
//      return;
//   } 
//   return "chirp " + chirp(--n);
// }
  if(n === 1){
    return "chirp ";
  }
  return "chirp " + chirp(n - 1);
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});