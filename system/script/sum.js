  function calcSum() {
    var max = document.getElementById("max").value;
    var total = 0;
    
//    for(var i = 1;i <= max;i++){
//        total += i;
//    }
    if(isNaN(max) === true || max < 1){
      //関数isNaN()は、引数が文字列ならtrue,数値ならfalseを返す
       document.getElementById("text").textContent = "1以上の数値を入力してください。";
       }
    else{
      var i = 1;
      while(i <= max){
        total += i;
        i++;
      }
      document.getElementById("text").textContent = "1から" + max + "までの合計は" + total + "です！";
    }
  }
