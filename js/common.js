window.onload = () => adaptPhone();
window.onresize = () => adaptPhone();

function adaptPhone() {
      //适配智能手机
      var h = document.querySelector("header");
      var m = document.querySelector("main");
      if (window.innerWidth < 600) {
          m.style.left = "1%";
          h.style.display = "none";
      }else{
          m.style.left = "20%";
          h.style.display = "block";
      }
}   

function onNavBtnClick() {
    var h = document.querySelector("header");
    var m = document.querySelector("main");
    if (h.style.display == "block") {
        m.style.left = "1%";
        h.style.display = "none";  
    } else {
        m.style.left = "20%";
        h.style.display = "block";
    }
}