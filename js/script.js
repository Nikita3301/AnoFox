const submit = document.getElementById("validate");

submit.addEventListener("click", () => {
  let fullname = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let phonenumber = document.getElementById("telphone").value;
  if (!fullname) {
    error_style("fullname");
  }
  if (!email) {
    error_style("email");
  }
  if (!phonenumber) {
    error_style("telphone");
  }
  if (fullname && email && phonenumber) {
    formValidation(fullname, email, phonenumber);
  }
});

submit.addEventListener("mouseover", () => {
  document.getElementById("validate").style.border = "2px solid #feb54c";
});
submit.addEventListener("mouseout", () => {
  document.getElementById("validate").style.border = "2px solid #8F8F8F";
});

window.addEventListener("load", () => {
  document.getElementById("text_logo").style.animationName = "appear";
  document.getElementById("text_logo").style.animationDuration = "2s";
});

text.addEventListener("mouseover", () => {
  document.getElementsByClassName("text1")[0].style.width = "60%";
  document.getElementsByClassName("image1")[0].style.width = "40%";
  document.getElementsByClassName("text1")[0].style.transition = "2s";
  document.getElementsByClassName("image1")[0].style.transition = "2s";
});

img11.addEventListener("mousedown", () => {
  img11.style.transform = "scale(1.1)";
  img11.style.transition = "0.7s";
});
img11.addEventListener("mouseup", () => {
  img11.style.transform = "scale(1)";
});

img12.addEventListener("mousedown", () => {
  img12.style.transform = "scale(1.1)";
  img12.style.transition = "0.7s";
});
img12.addEventListener("mouseup", () => {
  img12.style.transform = "scale(1)";
});

img13.addEventListener("mousedown", () => {
  img13.style.transform = "scale(1.1)";
  img13.style.transition = "0.7s";
});
img13.addEventListener("mouseup", () => {
  img13.style.transform = "scale(1)";
});







// 
function validateFullName(fullname) {
  const field = "fullname";
  if (fullname.length <= 10 || fullname.length >= 200 || fullname === null) {
    error_style(field);
    return false;
  }
  for (var i = 0; i < fullname.length; i++) {
    if (
      (fullname[i] >= "a" && fullname[i] <= "z") ||
      (fullname[i] >= "A" && fullname[i] <= "Z") ||
      fullname[i] == " " ||
      fullname[i] == "-"
    ) {
      success_style(field);
    } else {
      error_style(field);
      return false;
    }
  }
  return true;
}
function validateEmailAddress(email) {
  var count = 0;
  const field = "email";
  if (email.length <= 4 || email.length >= 70) {
    error_style(field);
    return false;
  } else {
    for (var i = 0; i < email.length; i++) {
      if (email[i] === "@") {
        count = 1;
      }
    }
    if (count == 1) {
      success_style(field);
    } else {
      error_style(field);
      return false;
    }
  }
  return true;
}
function validatePhoneNumber(phonenumber) {
  const field = "telphone";

  if (
    phonenumber.length < 10 ||
    phonenumber.length >= 38 ||
    phonenumber === null
  ) {
    error_style(field);
    return false;
  }
  for (var i = 0; i < phonenumber.length; i++) {
    if (
      (phonenumber[i] >= "0" && phonenumber[i] <= "9") ||
      phonenumber[i] == " " ||
      phonenumber[i] == "-" ||
      phonenumber[0] == "+"
    ) {
      success_style(field);
    } else {
      error_style(field);
      return false;
    }
  }
  return true;
}

function error_style(field) {
  document.getElementById(field).style.background =
    "url(images/warning.png) 98% 60% no-repeat";
  document.getElementById(field).style.backgroundSize = "25px";
  document.getElementById(field).style.backgroundColor = "white";
  document.getElementById(field).style.border = "2px solid #f26522";
  // document.getElementById(error).style.display = "inherit";
  // document.getElementById(error).style.color = "#f26522";
}
function success_style(field) {
  document.getElementById(field).style.background = "none";
  document.getElementById(field).style.border = "1px solid #ccc";
  // document.getElementById(error).style.display = "none";
}

// eslint-disable-next-line no-unused-vars
function formValidation(fullname, email, phonenumber) {
  let validName = validateFullName(fullname);
  let validEmail = validateEmailAddress(email);
  let validPhone = validatePhoneNumber(phonenumber);

  if (validName && validEmail && validPhone) {
    return true;
  } else {
    return false;
  }
}










//
function checked() {
  checkbox_label.style.background = "url('images/night-mode.png')";
  checkbox_label.style.height = "32px";
  checkbox_label.style.width = "32px";
  checkbox_label.style.position = "absolute";
  checkbox_label.style.left = "210px";
  checkbox_label.style.top = "27px";
}

function unchecked() {
  checkbox_label.style.background = "url('images/brightness.png')";
  checkbox_label.style.height = "32px";
  checkbox_label.style.width = "32px";
  checkbox_label.style.position = "absolute";
  checkbox_label.style.left = "10px";
  checkbox_label.style.top = "27px";
}

function dark_theme() {
  document.getElementsByTagName("header")[0].style.backgroundColor = "#141111";
  document.getElementsByTagName("header")[0].style.borderBottom =
    "1px solid #feb54c";
  document.getElementsByTagName("body")[0].style.backgroundColor = "#141111";
  document
    .getElementsByTagName("h2")[0]
    .getElementsByTagName("span")[0].style.color = "white";
  var x = document.querySelectorAll("a");
  for (let i = 0; i < x.length; i++) {
    x[i].style.color = "white";
  }
  var x1 = document.querySelectorAll("h2");
  for (let i = 0; i < x1.length; i++) {
    x1[i].style.color = "#eaae46";
  }
  var x2 = document.querySelectorAll("p");
  for (let i = 0; i < x2.length; i++) {
    x2[i].style.color = "#c6c6c6";
  }
  var x3 = document.getElementById("form");
  var y = x3.getElementsByTagName("label");
  for (let i = 0; i < y.length; i++) {
    y[i].style.color = "#c6c6c6";
  }
  document.getElementsByClassName("copyright")[0].style.color = "#eaae46";
  document.getElementsByClassName("copyright")[0].style.backgroundColor = "#141111";
  document.getElementById("tg_img").style.content="url(images/telegram1.png)";
  document.getElementById("inst_img").style.content="url(images/instagram1.png)";
  document.getElementById("fox_img").style.content="url(images/fox1.png)";
}

function white_theme() {
  document.getElementsByTagName("header")[0].style.backgroundColor = "#ffff";
  document.getElementsByTagName("header")[0].style.borderBottom =
    "1px solid #d6d3d1";
  document.getElementsByTagName("body")[0].style.backgroundColor = "#ffff";
  document
    .getElementsByTagName("h2")[0]
    .getElementsByTagName("span")[0].style.color = "#565656";
  var x = document.querySelectorAll("a");
  for (let i = 0; i < x.length; i++) {
    x[i].style.color = "#565656";
  }
  var x1 = document.querySelectorAll("h2");
  for (let i = 0; i < x1.length; i++) {
    x1[i].style.color = "black";
  }
  var x2 = document.querySelectorAll("p");
  for (let i = 0; i < x2.length; i++) {
    x2[i].style.color = "#565656";
  }
  var x3 = document.getElementById("form");
  var y = x3.getElementsByTagName("label");
  for (let i = 0; i < y.length; i++) {
    y[i].style.color = "black";
  }
  document.getElementsByClassName("copyright")[0].style.color = "black";
  document.getElementsByClassName("copyright")[0].style.backgroundColor = "#ececec";
  document.getElementById("tg_img").style.content="url(images/telegram.png)";
  document.getElementById("inst_img").style.content="url(images/instagram.png)";
  document.getElementById("fox_img").style.content="url(images/foxy.png)";
}
unchecked();
function checkBox() {
  var checkbox = document.getElementById("checkbox");
  if (checkbox.checked == true) {
    checked();
    dark_theme();
  } else if (checkbox.checked == false) {
    unchecked();
    white_theme();
  }
}
