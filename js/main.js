// scroll sticky function start================
window.onscroll = function () {
    navbarFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function navbarFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
} // scroll sticky function end================


// navbar-toggler button function start===========
let btn = document.querySelector(".navbar-toggler");
let icon = btn.querySelector(".fa-bars");

btn.onclick = function () {
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-times");
    }
    else {
        icon.classList.replace("fa-times", "fa-bars");
    }
}

// navbar-toggler button function end===============


// Counter function start=======================

jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 1,
        time: 150
    });
});


// Counter function end =========================


// OTP countdown function start====================
let timerOn = true;

function timer(remaining) {
    var m = Math.floor(remaining / 60);
    var s = remaining % 60;

    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    document.getElementById('timer').innerHTML = m + ':' + s;
    remaining -= 1;

    if (remaining >= 0 && timerOn) {
        setTimeout(function () {
            timer(remaining);
        }, 1000);
        return;
    }

    if (!timerOn) {
        return;
    }
    alert('Timeout for otp, Please click resend OTP button');
}

timer(300);
// OTP countdown function end=====================


// submit button function start=====================
var button = document.getElementById('sub');
button.onclick = function () {
    document.getElementById("myForm").submit();
}

// submit button function end=====================
// birthday selector function start===================

// birthday selector function end=====================


