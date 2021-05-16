function showDate() {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1;
    var curr_year = d.getFullYear();
    document.write(curr_date + "-" + curr_month + "-" + curr_year);
  }

  function bigImg(x) {
    x.style.height="100px";
    x.style.width="100px";
  }

  function normalImg(x) {
    x.style.height = "50px";
    x.style.width="50px";
  }