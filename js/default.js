$(document).ready(() => {
    $("#go").hide();
    $("#go").click(() => {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            $("#go").show("slow");
            $("#menu").css({
                "position": "fixed",
                "left": 0,
                "right": 0,
                "top": 0,
                "z-index": 99
            });
            $(".nav-links ul li a").css({
                "color": "	#FFD700",
                "text-decoration": "none",
                "font-size": "15px",
            });
            $(".buttonLogin").css({
                "padding": "6px 24px",
                "border": "3px solid 	#FFD700",
                "background": "transparent",
                "border-radius": "6px",
                "cursor": "pointer",
                "color": "	#FFD700",
                "font-size": "15px",
            });
           
                
            
        } 
        else
        {
            $("#go").hide("slow");
            $("#menu").css("position", "static");
            $(".nav-links ul li a").css({
                "color": "#fff",
                "text-decoration": "none",
                "font-size": "15px",
            });
            $(".buttonLogin").css({
                "padding": "6px 24px",
                "border": "2px solid #fff",
                "background": "transparent",
                "border-radius": "6px",
                "cursor": "pointer",
                "color": "#fff",
                "font-size": "15px",
            });
        } 
    })
})

var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

const showPopupBtn = document.querySelector(".buttonLogin");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
showPopupBtn.addEventListener("click",()=>{
    document.body.classList.toggle("show-popup")
});

hidePopupBtn.addEventListener("click",()=>showPopupBtn.click());
function login(e){
    event.preventDefault();
    var username = document.getElementById("ms").value;
    var userpw = document.getElementById("pw").value;
   var user = {
        username: 2,
        pw: 2,
    };
    var user1 = {
        username: 1,
        pw: 1,
    }; 
    if (username == user.username &&userpw==user.pw){
        alert("Bạn đã đăng nhập thành công");
        window.location.href = "registerCourse.html";
    }
    else if (username == user1.username &&userpw==user1.pw){
        alert("Bạn đã đăng nhập thành công");
        window.location.href = "scorestudent.html";
    }
    else    alert("Đăng nhập thất bại");
    }