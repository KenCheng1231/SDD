window.onload = function () {
    //video_list
    var video_list = [
        "GXlckaGr0Eo",
        "wM7eMJ26kc8",
        "XyGcUXDuXVY",
        "jKUBYGwoW3A",
        "NDgTwlQSzMM",
        "PQ99nu4cq1k",
        "tqrqiyPC14Q",
        "y0wXQ5EdW_0",
        "66GYEALFuDs",
        "uiq3NKEnqEg"
    ];

    var study_list = [
        "ZEbCz7B2-Eg",
        "jfKfPfyJRdk",
        "sUwD3GRPJos",
        "82Wx5Ou6KY8",
        "feTTjwiZE20",
        "DcvvWjExea4",
        "BTMjD7_evjE",
        "Dg0IjOzopYU",
        "9OPXTEORZZ8"
    ];


    //當前開啓的HTML路徑
    var location = document.location.href
    //HTML路徑截取為HTML文件的名字
    var filename = location.substring(location.lastIndexOf("/") + 1, location.lastIndexOf("."))

    if (filename == "index") { //當在index.html瀏覽時執行

        //滾動監聽，到達ID範圍就更改CSS值
        window.addEventListener('scroll', function () {
            var IdList = ["HOME", "RELAX", "STUDY", "ABOUT"]
            var menulist = ["home-btn", "relax-btn", "study-btn", "about-btn"]
            scroll_height = document.documentElement.scrollHeight //獲取整個網頁的高度
            scroll_top = document.documentElement.scrollTop //獲取已滾動的高度
            for (i = 0; i < IdList.length; i++) {
                var targetID = document.getElementById(IdList[i])
                var targetOffsetTop = targetID.offsetTop - 50 //獲取目標ID與網頁頂部之間的高度 - 25
                var targetOffsetTop2 = ""
                if (i >= IdList.length - 1) {
                    targetOffsetTop2 = scroll_height
                } else {
                    targetOffsetTop2 = document.getElementById(IdList[i + 1]).offsetTop - 50
                }
                if (scroll_top >= targetOffsetTop && scroll_top < targetOffsetTop2) {
                    document.getElementById(menulist[i]).style.backgroundColor = "white"
                    document.getElementById(menulist[i]).style.color = "black"
                } else {
                    document.getElementById(menulist[i]).style.backgroundColor = ""
                    document.getElementById(menulist[i]).style.color = ""
                }
            }
        })

        //放入標簽並從Array獲取專輯圖片
        for (i = 0; i < 9; i++) {
            document.getElementById("relax-list").innerHTML += '<a href = "https://www.youtube.com/watch?v=' + video_list[i] + '"><div class="relax_data"><div class="relax_img"></div><p class="relax_name"></p></div></a>'
            var relax_image = document.getElementsByClassName("relax_img")[i]
            var relax_name = document.getElementsByClassName("relax_name")[i]
            relax_image.style.backgroundImage = "url(./img/ASMR/" + video_list[i] + ".jpg)"
            relax_name.innerHTML = video_list[i]
        }

        //放入標簽並從Array獲取數據
        for (k = 0; k < 9; k++) {
            document.getElementById("study-list").innerHTML += '<a href = "https://www.youtube.com/watch?v=' + study_list[k] + '"><div class="study_data"><div class="study_img"></div><p class="study_name"></p></div></a>'
            var study_image = document.getElementsByClassName("study_img")[k]
            var study_name = document.getElementsByClassName("study_name")[k]
            study_image.style.backgroundImage = "url(./img/STUDY/" + study_list[k] + ".jpg)"
            study_name.innerHTML = study_list[k]
        }


    } else if (filename == "relax") { //當在relax.html瀏覽時執行

        for (l = 0; l < video_list.length; l++) {
            document.getElementById("relax-list").innerHTML += '<a href = "https://www.youtube.com/watch?v=' + video_list[l] + '"><div class="relax_data"><div class="relax_img"></div><p class="relax_name"></p></div></a>'
            var relax_image = document.getElementsByClassName("relax_img")[l]
            var relax_name = document.getElementsByClassName("relax_name")[l]
            relax_image.style.backgroundImage = "url(https://img.youtube.com/vi/" + video_list[l] + "/hqdefault.jpg)"
            relax_name.innerHTML = video_list[l]
        }

        document.getElementById("menu").style.display = "none";

    } else if (filename == "study") { //當在study.html瀏覽時執行

        for (m = 0; m < study_list.length; m++) {
            document.getElementById("study-list").innerHTML += '<a href = "https://www.youtube.com/watch?v=' + study_list[m] + '"><div class="study_data"><div class="study_img"></div><p class="study_name"></p></div></a>'
            var study_image = document.getElementsByClassName("study_img")[m]
            var study_name = document.getElementsByClassName("study_name")[m]
            study_image.style.backgroundImage = "url(https://img.youtube.com/vi/" + study_list[m] + "/hqdefault.jpg)"
            study_name.innerHTML = study_list[m]
        }

        document.getElementById("menu").style.display = "none";

    }

    //Mobile Phone Menu Control
    var header = document.getElementById("menu")
    var btn_on = document.getElementById("menu-on")
    var btn_off = document.getElementById("menu-off")
    var screen_width = document.documentElement.clientWidth //獲取可見屏幕寬度
    var home_btn = document.getElementById("home-menubtn")
    var relax_btn = document.getElementById("relax-menubtn")
    var study_btn = document.getElementById("study-menubtn")
    var about_btn = document.getElementById("about-menubtn")
    if (screen_width <= 720) {
        btn_on.addEventListener("click", function () { //點擊監聽執行function
            header.style.display = "block";
            btn_off.style.display = "block";
            btn_on.style.display = "none";
        })
        btn_off.addEventListener("click", function () {
            header.style.display = "none";
            btn_on.style.display = "block";
            btn_off.style.display = "none";
        })
        home_btn.addEventListener("click", function () {
            header.style.display = "none";
            btn_on.style.display = "block";
            btn_off.style.display = "none";
        })
        relax_btn.addEventListener("click", function () {
            header.style.display = "none";
            btn_on.style.display = "block";
            btn_off.style.display = "none";
        })
        study_btn.addEventListener("click", function () {
            header.style.display = "none";
            btn_on.style.display = "block";
            btn_off.style.display = "none";
        })
        about_btn.addEventListener("click", function () {
            header.style.display = "none";
            btn_on.style.display = "block";
            btn_off.style.display = "none";
        })
    }
}


