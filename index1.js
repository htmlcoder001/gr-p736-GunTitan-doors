var resultWrapper = document.querySelector(".spin-result-wrapper")
  , wheel = document.querySelector(".wheel-img");

var closePopup = document.querySelector(".close-popup");
var time = 600;
function start_timer() {
    intr = setInterval(tick, 1e3);
}
function tick() {
    time -= 1;
    var e = Math.floor(time / 60),
        t = time - 60 * e;
    0 == e && 0 == t && clearInterval(intr), (t = t >= 10 ? t : "0" + t), $("#min").html("0" + e), $("#sec").html(t);
}

let doors = document.querySelectorAll(".door")
  , doorSales = document.querySelectorAll(".door__sales")
  , doorWrapper = document.querySelector(".door__wrapper")
  , spinResultWrapper = document.querySelector(".spin-result-wrapper")
  , spinResultBtn = document.querySelector(".pop-up-button")
  , orderBlock = document.querySelector(".order_block")
  , orderBlock2 = document.querySelector(".lead-form-box")
  , closedPopup = document.querySelector(".close-popup")
  , door1 = document.getElementById("door__1")
  , door2 = document.getElementById("door__2")
  , door3 = document.getElementById("door__3")
  , doorSale1 = document.getElementById("door__sales1")
  , doorSale2 = document.getElementById("door__sales2")
  , doorSale3 = document.getElementById("door__sales3");
for (let e = 0; e < doors.length; e++)
    doors[e].addEventListener("click", openDoor);
function openDoor(e) {
    e.currentTarget.classList.add("open"),
    setTimeout((function() {
        spinResultWrapper.style.display = "block"
    }
    ), 3500),
    spinResultBtn.onclick = function() {
        start_timer(),
        orderBlock.style.display = "block",
        orderBlock2.style.display = "block",
        doorWrapper.style.display = "none",
        spinResultWrapper.style.display ='none'
    }
    ,
    closedPopup.onclick = function() {
        start_timer(),
        orderBlock.style.display = "block",
        orderBlock2.style.display = "block",
        doorWrapper.style.display = "none",
        spinResultWrapper.style.display ='none'
    }
    ,
    door1.classList.contains("open") ? (doorSale1.innerHTML = "50%",
    doorSale1.style.left = "12px",
    doorSale2.innerHTML = "25%",
    doorSale2.style.left = "30px",
    doorSale3.innerHTML = "10%",
    doorSale3.style.left = "32px") : door2.classList.contains("open") ? (doorSale2.innerHTML = "50%",
    doorSale2.style.left = "12px",
    doorSale1.innerHTML = "10%",
    doorSale1.style.left = "32px",
    doorSale3.innerHTML = "25%",
    doorSale3.style.left = "30px") : door3.classList.contains("open") && (doorSale1.innerHTML = "10%",
    doorSale1.style.left = "30px",
    doorSale3.innerHTML = "50%",
    doorSale3.style.left = "12px",
    doorSale2.innerHTML = "25%",
    doorSale2.style.left = "32px");
    for (let e = 0; e < doors.length; e++)
        doors[e].classList.contains("open") || setTimeout((function() {
            doors[e].classList.add("open")
        }
        ), 1500);
    for (let e = 0; e < doors.length; e++)
        doors[e].removeEventListener("click", openDoor)
}
const months = ["януари", "февруари", "март", "април", "май", "юни", "юли", "август", "септември", "октомври", "ноември", "декември"]
  , monthMin = ["", "", "", "", "", "", "", "", "", "", "", ""]
  , days = ["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"]
  , daysMin = ["", "", "", "", "", "", ""]
  , seasons = ["зима", "пролет", "лято", "есен"];
function postDate(e, o, t, r, n) {
    for (let e = 0; e < 60; e++)
        l(e, "date-"),
        l(e, "date");
    function l(e, o) {
        let t;
        t = "date-" === o ? -e : e;
        const r = new Date(Date.now() + 864e5 * t)
          , n = r.getDate()
          , l = r.getMonth() + 1
          , d = r.getFullYear()
          , a = i(n)
          , c = a + "." + i(l) + "." + d
          , u = o + e
          , p = document.querySelectorAll("." + u);
        for (let e = 0; e < p.length; e++) {
            const o = p[e].dataset.format;
            p[e].innerHTML = void 0 !== o && "" !== o ? String(s(a, l, d, o, t)) : c
        }
    }
    function s(e, o, r, l, s) {
        let u = l;
        const p = ["dd", "mm", "yyyy", "monthFull", "season", "year"]
          , f = {
            dd: e,
            mm: i(o),
            yyyy: r,
            monthFull: d(o, t, !0),
            year: c(r, s),
            season: a(n, o, !1)
        };
        for (let e = 0; e < p.length; e++) {
            let o = p[e]
              , t = new RegExp(o);
            u = u.replace(t, f[o])
        }
        return u.split(" ").join(" ")
    }
    function d(e, o, t, r) {
        const n = r || 0;
        let l;
        return l = e + n > 12 ? n - (12 - e) : e + n,
        l = e + n <= 0 ? 12 + n + 1 : e + n,
        u(t, o[l - 1])
    }
    function a(e, o, t) {
        const r = 12 === o ? 0 : o;
        return u(t, e[r / 3 < 0 ? Math.ceil(r / 3) : Math.floor(r / 3)])
    }
    function c(e, o) {
        return e + o
    }
    function i(e) {
        return e < 10 ? "0" + e : e
    }
    function u(e, o) {
        return e && o && o.length > 0 ? o[0].toUpperCase() + o.slice(1) : o
    }
}
function validateNum(e) {
    var o = e || window.event
      , t = o.keyCode || o.which;
    t = String.fromCharCode(t);
    /[0-9\s]|\./.test(t) || (o.returnValue = !1,
    o.preventDefault && o.preventDefault())
}
function validateText(e) {
    var o = e || window.event
      , t = o.keyCode || o.which;
    t = String.fromCharCode(t);
    /[A-Za-zА-Яа-я\s]|\./.test(t) || (o.returnValue = !1,
    o.preventDefault && o.preventDefault())
}

