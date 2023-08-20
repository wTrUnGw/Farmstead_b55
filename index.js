var change = document.getElementById("change");

change.onclick = function () {
  //dom tới body để add class "dark"
  var body = document.getElementById("body");
  //gán class .dark cho body
  body.className = "dark";
};

// bấm vào nút light
var changee = document.getElementById("changee");
changee.onclick = function () {
  //dom tới body để xóa class dark
  var body = document.getElementById("body");
  //xóa class dark
  body.classList.remove("dark");
};
