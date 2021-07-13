/* GENERAL */
/* SMOOTH HREF */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/* LANGUAGE */
const mainES = document.querySelector(".es");
const mainEN = document.querySelector(".en");

function switchLanguage() {
  mainES.classList.toggle("active");
  mainEN.classList.toggle("active");
}

/* NAV */
const menuES = document.querySelector("#mobile-menu-es");
const menuEN = document.querySelector("#mobile-menu-en");
const menuLinksES = document.querySelector(".nav-menu-es");
const menuLinksEN = document.querySelector(".nav-menu-en");
const navContainerES = document.querySelector(".nav-container-es");
const navContainerEN = document.querySelector(".nav-container-en");

menuES.addEventListener("click", function () {
  menuES.classList.toggle("is-active");
  menuLinksES.classList.toggle("active");
  navContainerES.classList.toggle("active");
});

menuEN.addEventListener("click", function () {
  menuEN.classList.toggle("is-active");
  menuLinksEN.classList.toggle("active");
  navContainerEN.classList.toggle("active");
});

/* GALLERY */

/* const viewerES = document.getElementById("imageViewerES");
const btnPrevES = document.getElementById("btnPrevES");
const btnNextES = document.getElementById("btnNextES");
const viewerEN = document.getElementById("imageViewerEN");
const btnPrevEN = document.getElementById("btnPrevEN");
const btnNextEN = document.getElementById("btnNextEN");

var selectedImg = 1,
  actualImg;

btnPrevES.addEventListener("click", function () {
  prevImg();
});

btnNextES.addEventListener("click", function () {
  nextImg();
});

btnPrevEN.addEventListener("click", function () {
  prevImg();
});

btnNextEN.addEventListener("click", function () {
  nextImg();
});

function prevImg() {
  selectedImg--;
  if (selectedImg < 1) selectedImg = 9;
  changeImg(selectedImg);
}

function nextImg() {
  actualImg = selectedImg;
  selectedImg++;
  if (selectedImg > 9) selectedImg = 1;
  changeImg(selectedImg);
}

function changeImg(fileName) {
  clearSelected();
  viewerES.style.backgroundImage = "url('img/" + fileName.toString() + ".jpg')";
  viewerEN.style.backgroundImage = "url('img/" + fileName.toString() + ".jpg')";
  selectedImg = fileName;
  switchSelected();
}

function clearSelected() {
  if (document.querySelector("#img1ES").classList.contains("active"))
    document.querySelector("#img1ES").classList.toggle("active");
  if (document.querySelector("#img2ES").classList.contains("active"))
    document.querySelector("#img2ES").classList.toggle("active");
  if (document.querySelector("#img3ES").classList.contains("active"))
    document.querySelector("#img3ES").classList.toggle("active");
  if (document.querySelector("#img4ES").classList.contains("active"))
    document.querySelector("#img4ES").classList.toggle("active");
  if (document.querySelector("#img5ES").classList.contains("active"))
    document.querySelector("#img5ES").classList.toggle("active");
  if (document.querySelector("#img6ES").classList.contains("active"))
    document.querySelector("#img6ES").classList.toggle("active");
  if (document.querySelector("#img7ES").classList.contains("active"))
    document.querySelector("#img7ES").classList.toggle("active");
  if (document.querySelector("#img8ES").classList.contains("active"))
    document.querySelector("#img8ES").classList.toggle("active");
  if (document.querySelector("#img9ES").classList.contains("active"))
    document.querySelector("#img9ES").classList.toggle("active");

  if (document.querySelector("#img1EN").classList.contains("active"))
    document.querySelector("#img1EN").classList.toggle("active");
  if (document.querySelector("#img2EN").classList.contains("active"))
    document.querySelector("#img2EN").classList.toggle("active");
  if (document.querySelector("#img3EN").classList.contains("active"))
    document.querySelector("#img3EN").classList.toggle("active");
  if (document.querySelector("#img4EN").classList.contains("active"))
    document.querySelector("#img4EN").classList.toggle("active");
  if (document.querySelector("#img5EN").classList.contains("active"))
    document.querySelector("#img5EN").classList.toggle("active");
  if (document.querySelector("#img6EN").classList.contains("active"))
    document.querySelector("#img6EN").classList.toggle("active");
  if (document.querySelector("#img7EN").classList.contains("active"))
    document.querySelector("#img7EN").classList.toggle("active");
  if (document.querySelector("#img8EN").classList.contains("active"))
    document.querySelector("#img8EN").classList.toggle("active");
  if (document.querySelector("#img9EN").classList.contains("active"))
    document.querySelector("#img9EN").classList.toggle("active");
}

function switchSelected() {
  switch (selectedImg) {
    case 1:
      if (document.querySelector("#img9ES").classList.contains("active"))
        document.querySelector("#img9ES").classList.toggle("active");
      if (document.querySelector("#img2ES").classList.contains("active"))
        document.querySelector("#img2ES").classList.toggle("active");
      if (document.querySelector("#img9EN").classList.contains("active"))
        document.querySelector("#img9EN").classList.toggle("active");
      if (document.querySelector("#img2EN").classList.contains("active"))
        document.querySelector("#img2EN").classList.toggle("active");
      document
        .querySelector("#img" + selectedImg + "ES")
        .classList.toggle("active");
      document
        .querySelector("#img" + selectedImg + "EN")
        .classList.toggle("active");
      break;
    case 2:
      if (document.querySelector("#img1ES").classList.contains("active"))
        document.querySelector("#img1ES").classList.toggle("active");
      if (document.querySelector("#img3ES").classList.contains("active"))
        document.querySelector("#img3ES").classList.toggle("active");
      if (document.querySelector("#img1EN").classList.contains("active"))
        document.querySelector("#img1EN").classList.toggle("active");
      if (document.querySelector("#img3EN").classList.contains("active"))
        document.querySelector("#img3EN").classList.toggle("active");
      document
        .querySelector("#img" + selectedImg + "ES")
        .classList.toggle("active");
      document
        .querySelector("#img" + selectedImg + "EN")
        .classList.toggle("active");
      break;
    case 3:
      if (document.querySelector("#img2ES").classList.contains("active"))
        document.querySelector("#img2ES").classList.toggle("active");
      if (document.querySelector("#img4ES").classList.contains("active"))
        document.querySelector("#img4ES").classList.toggle("active");
      if (document.querySelector("#img2EN").classList.contains("active"))
        document.querySelector("#img2EN").classList.toggle("active");
      if (document.querySelector("#img4EN").classList.contains("active"))
        document.querySelector("#img4EN").classList.toggle("active");
      document
        .querySelector("#img" + selectedImg + "ES")
        .classList.toggle("active");
      document
        .querySelector("#img" + selectedImg + "EN")
        .classList.toggle("active");
      break;
    case 4:
      if (document.querySelector("#img3ES").classList.contains("active"))
        document.querySelector("#img3ES").classList.toggle("active");
      if (document.querySelector("#img5ES").classList.contains("active"))
        document.querySelector("#img5ES").classList.toggle("active");
      if (document.querySelector("#img3EN").classList.contains("active"))
        document.querySelector("#img3EN").classList.toggle("active");
      if (document.querySelector("#img5EN").classList.contains("active"))
        document.querySelector("#img5EN").classList.toggle("active");
      document
        .querySelector("#img" + selectedImg + "ES")
        .classList.toggle("active");
      document
        .querySelector("#img" + selectedImg + "EN")
        .classList.toggle("active");
      break;
    case 5:
      if (document.querySelector("#img4ES").classList.contains("active"))
        document.querySelector("#img4ES").classList.toggle("active");
      if (document.querySelector("#img6ES").classList.contains("active"))
        document.querySelector("#img6ES").classList.toggle("active");
      if (document.querySelector("#img4EN").classList.contains("active"))
        document.querySelector("#img4EN").classList.toggle("active");
      if (document.querySelector("#img6EN").classList.contains("active"))
        document.querySelector("#img6EN").classList.toggle("active");
      document
        .querySelector("#img" + selectedImg + "ES")
        .classList.toggle("active");
      document
        .querySelector("#img" + selectedImg + "EN")
        .classList.toggle("active");
      break;
    case 6:
      if (document.querySelector("#img5ES").classList.contains("active"))
        document.querySelector("#img5ES").classList.toggle("active");
      if (document.querySelector("#img7ES").classList.contains("active"))
        document.querySelector("#img7ES").classList.toggle("active");
      if (document.querySelector("#img5EN").classList.contains("active"))
        document.querySelector("#img5EN").classList.toggle("active");
      if (document.querySelector("#img7EN").classList.contains("active"))
        document.querySelector("#img7EN").classList.toggle("active");
      document
        .querySelector("#img" + selectedImg + "ES")
        .classList.toggle("active");
      document
        .querySelector("#img" + selectedImg + "EN")
        .classList.toggle("active");
      break;
    case 7:
      if (document.querySelector("#img6ES").classList.contains("active"))
        document.querySelector("#img6ES").classList.toggle("active");
      if (document.querySelector("#img8ES").classList.contains("active"))
        document.querySelector("#img8ES").classList.toggle("active");
      if (document.querySelector("#img6EN").classList.contains("active"))
        document.querySelector("#img6EN").classList.toggle("active");
      if (document.querySelector("#img8EN").classList.contains("active"))
        document.querySelector("#img8EN").classList.toggle("active");
      document
        .querySelector("#img" + selectedImg + "ES")
        .classList.toggle("active");
      document
        .querySelector("#img" + selectedImg + "EN")
        .classList.toggle("active");
      break;
    case 8:
      if (document.querySelector("#img7ES").classList.contains("active"))
        document.querySelector("#img7ES").classList.toggle("active");
      if (document.querySelector("#img9ES").classList.contains("active"))
        document.querySelector("#img9ES").classList.toggle("active");
      if (document.querySelector("#img7EN").classList.contains("active"))
        document.querySelector("#img7EN").classList.toggle("active");
      if (document.querySelector("#img9EN").classList.contains("active"))
        document.querySelector("#img9EN").classList.toggle("active");
      document
        .querySelector("#img" + selectedImg + "ES")
        .classList.toggle("active");
      document
        .querySelector("#img" + selectedImg + "EN")
        .classList.toggle("active");
      break;
    case 9:
      if (document.querySelector("#img8ES").classList.contains("active"))
        document.querySelector("#img8ES").classList.toggle("active");
      if (document.querySelector("#img1ES").classList.contains("active"))
        document.querySelector("#img1ES").classList.toggle("active");
      if (document.querySelector("#img8EN").classList.contains("active"))
        document.querySelector("#img8EN").classList.toggle("active");
      if (document.querySelector("#img1EN").classList.contains("active"))
        document.querySelector("#img1EN").classList.toggle("active");
      document
        .querySelector("#img" + selectedImg + "ES")
        .classList.toggle("active");
      document
        .querySelector("#img" + selectedImg + "EN")
        .classList.toggle("active");
      break;
  }
} */

/* CONTACT */

/* EMAIL SENDER */

$(function () {
  var formES = $("#formCBES");
  var formEN = $("#formCBEN");

  $(formES).submit(function (e) {
    e.preventDefault();

    var formData = $(formES).serialize();

    /* if (grecaptcha.getResponse(recaptchaForm)) { */
    $.ajax({
      type: "POST",
      url: $(formES).attr("action"),
      data: formData,
    })
      .done(function (response) {
        if (response == "Done") {
          /* $("#captcha").css("display", "none"); */
          $("#errorES").css("display", "none");
          $("#successES").css("display", "block");

          $("#formNameES").val("");
          $("#formEmailES").val("");
          $("#formMessageES").val("");

          /* grecaptcha.reset(recaptchaForm); */
        } else {
          /* $("#captcha").css("display", "none"); */
          $("#successES").css("display", "none");
          $("#errorES").css("display", "block");

          /* grecaptcha.reset(recaptchaForm); */
        }
      })
      .fail(function (error) {
        /* $("#captcha").css("display", "none"); */
        $("#successES").css("display", "none");
        $("#errorES").css("display", "block");
        /* grecaptcha.reset(recaptchaForm); */
      });
    /* } else {
            $("#error").css("display", "none");
            $("#success").css("display", "none");
            $("#captcha").css("display", "block");
        } */
  });
  $(formEN).submit(function (e) {
    e.preventDefault();

    var formData = $(formEN).serialize();

    /* if (grecaptcha.getResponse(recaptchaForm)) { */
    $.ajax({
      type: "POST",
      url: $(formEN).attr("action"),
      data: formData,
    })
      .done(function (response) {
        if (response == "Done") {
          /* $("#captcha").css("display", "none"); */
          $("#errorEN").css("display", "none");
          $("#successEN").css("display", "block");

          $("#formNameEN").val("");
          $("#formEmailEN").val("");
          $("#formMessageEN").val("");

          /* grecaptcha.reset(recaptchaForm); */
        } else {
          /* $("#captcha").css("display", "none"); */
          $("#successEN").css("display", "none");
          $("#errorEN").css("display", "block");

          /* grecaptcha.reset(recaptchaForm); */
        }
      })
      .fail(function (error) {
        /* $("#captcha").css("display", "none"); */
        $("#successEN").css("display", "none");
        $("#errorEN").css("display", "block");

        /* grecaptcha.reset(recaptchaForm); */
      });
    /* } else {
            $("#error").css("display", "none");
            $("#success").css("display", "none");
            $("#captcha").css("display", "block");
        } */
  });
});

(function () {
  new WOW().init();
  /* setInterval(function () {
    nextImg();
  }, 5000); */
})();
