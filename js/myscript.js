window.onload = function () {
    //video_list
    var video_list = [
        "QKO7ihQ4pqQ",
        "3clqk2U3T9Y",
        "vxo2o92Zc3o",
        "lHZ2azw5LCc",
        "NHHLCVom684",
        "v0vvD2bUNZ0",
        "yuFwErfsnTM",
        "ChKGbkLOokA",
        "pVsZ9ti6vdc",
        "uqlmazoOCmw",
        "9vak1ZGEUu8",
        "YAZOCtLMNmI",
    ]

    var study_list = [
        "mPZkdNFkNps",
        "jfKfPfyJRdk",
        "Ds7Gnig9TjA",
        "O6MDJZGtUUE",
        "mt87ltDUzVI"
    ]


    //當前開啓的HTML路徑
    var location = document.location.href
    //HTML路徑截取為HTML文件的名字
    var filename = location.substring(location.lastIndexOf("/") + 1, location.lastIndexOf("."))

    if (filename == "index") { //當在index.html瀏覽時執行

        //滾動監聽，到達ID範圍就更改CSS值
        window.addEventListener('scroll', function () {
            var IdList = ["HOME", "ABLUM", "HISTORY", "ABOUT"]
            var menulist = ["home-btn", "ablum-btn", "history-btn", "about-btn"]
            scroll_height = document.documentElement.scrollHeight //獲取整個網頁的高度
            scroll_top = document.documentElement.scrollTop //獲取已滾動的高度
            for (i = 0; i < IdList.length; i++) {
                var targetID = document.getElementById(IdList[i])
                var targetOffsetTop = targetID.offsetTop - 25 //獲取目標ID與網頁頂部之間的高度 - 25
                var targetOffsetTop2 = ""
                if (i >= IdList.length - 1) {
                    targetOffsetTop2 = scroll_height
                } else {
                    targetOffsetTop2 = document.getElementById(IdList[i + 1]).offsetTop - 25
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
        for (i = 0; i < 12; i++) {
            document.getElementById("ablum-list").innerHTML += '<a href = "https://www.youtube.com/watch?v=' + video_list[i] + '"><div class="ablum_data"><div class="ablum_img"></div><p class="ablum_name"></p></div></a>'
            var ablum_image = document.getElementsByClassName("ablum_img")[i]
            var ablum_name = document.getElementsByClassName("ablum_name")[i]
            ablum_image.style.backgroundImage = "url(https://img.youtube.com/vi/" + video_list[i] + "/hqdefault.jpg)"
            ablum_name.innerHTML = video_list[i]
        }

        //放入標簽並從Array獲取數據
        for (k = 0; k < 12; k++) {
            document.getElementById("study-list").innerHTML += '<a href = "https://www.youtube.com/watch?v=' + study_list[i] + '"><div class="study_data"><div class="study_img"></div><p class="study_name"></p></div></a>'
            var study_image = document.getElementsByClassName("study_img")[i]
            var study_name = document.getElementsByClassName("study_name")[i]
            study_image.style.backgroundImage = "url(https://img.youtube.com/vi/" + study_list[i] + "/hqdefault.jpg)"
            study_name.innerHTML = study_list[i]
        }


    } else if (filename == "ablum") { //當在ablum.html瀏覽時執行

        for (l = 0; l < video_list.length; l++) {
            document.getElementById("ablum-list").innerHTML += '<a href = "https://www.youtube.com/watch?v=' + video_list[l] + '"><div class="ablum_data"><div class="ablum_img"></div><p class="ablum_name"></p></div></a>'
            var ablum_image = document.getElementsByClassName("ablum_img")[l]
            var ablum_name = document.getElementsByClassName("ablum_name")[l]
            ablum_image.style.backgroundImage = "url(https://img.youtube.com/vi/" + video_list[l] + "/hqdefault.jpg)"
            ablum_name.innerHTML = video_list[l]
        }

        document.getElementById("menu").style.display = "none";

    } else if (filename == "history") { //當在history.html瀏覽時執行

        for (k = year.length - 1; k >= 0; k--) {
            document.getElementById("time_line").innerHTML += "<tr><td class='htime'>" + year[k] + "</td><td class='history-content'>" + content[k] + "</td></tr>"
        }

        document.getElementById("menu").style.display = "none";

    }

    //Mobile Phone Menu Control
    var header = document.getElementById("menu")
    var btn_on = document.getElementById("menu-on")
    var btn_off = document.getElementById("menu-off")
    var screen_width = document.documentElement.clientWidth //獲取可見屏幕寬度
    var home_btn = document.getElementById("home-menubtn")
    var ablum_btn = document.getElementById("ablum-menubtn")
    var history_btn = document.getElementById("history-menubtn")
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
        ablum_btn.addEventListener("click", function () {
            header.style.display = "none";
            btn_on.style.display = "block";
            btn_off.style.display = "none";
        })
        history_btn.addEventListener("click", function () {
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


