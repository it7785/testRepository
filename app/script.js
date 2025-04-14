function get_calc(btn) {
    if(btn.value == "=") { // {}の中に、=が押された際の動きを記述
      document.calculator.display.value = eval(document.calculator.display.value);
    } else if (btn.value == "C") { // 「C」が押されたとき液晶表示をクリア
      document.calculator.display.value = "";
    } else {
      if (btn.value == "×") {
        btn.value = "*";
      } else if (btn.value == "÷") {
        btn.value = "/";
      }
      document.calculator.display.value += btn.value;
      document.calculator.multi_btn.value = "×";
      document.calculator.div_btn.value = "÷";
    }
  }  