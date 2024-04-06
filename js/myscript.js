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

    var video_list_name = [
        "ASMR Programming - Coding Pacman - No Talking",
        "ASMR Programming - Coding a Snake Game - No Talking",
        "Relaxing Train Ride in Japan 🇯🇵 Shinkansen Osaka to Tokyo",
        "[JAPAN TOKYO ASMR] 1 HOUR COMPLETE Yamanote Line 山手線 Train Ride - CAB VIEW 前面展望 - INNER LOOP | 4K",
        "[JAPAN TOKYO ASMR] Yurikamome Line 新交通ゆりかもめ線 Train Ride - CAB VIEW 前面展望 - 4K",
        "4k hdr japan travel 2024 | Walk in Harajuku（原宿）Tokyo japan | Relaxing Natural City ambience",
        "Seoul KOREA - Myeongdong Night Walk 2024",
        "Relaxing SOLO Camping with Rain Forest Mountain views [ gloomy weather, cosy shelter, rain ASMR ]",
        "ASMR Travel Vlog | A Road Trip Through Italy",
        "城市秘境，東京隱村的300年旅館 | 兜家旅館 | ASMR"
    ]

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

    var study_list_name = [
        "STUDY WITH ME 4hrs with breaks 🌙 50/10 pomodoro (no music)",
        "lofi hip hop radio 📚 - beats to relax/study to",
        "📚2.5小時實時學習(鋼琴輕音樂) ｜🚢 黃昏的橫濱港｜番茄工作法(25+5)｜自帶倒計時&鈴聲提醒｜Study with me",
        "40 Million Dollar Cash Count - Big Money Count - ASMR",
        "The Money Count - Over 15 Millions Dollars In Cash",
        "SHARPEST DETAIL | 12K HDR DOLBY VISION™ 120FPS",
        "The Alps 4K - Scenic Relaxation Film With Calming Music",
        "Minecraft FULL SOUNDTRACK",
        "JoJo's Rush Adventure"
    ]


    //當前開啓的HTML路徑
    var location = document.location.href
    //HTML路徑截取為HTML文件的名字
    var filename = location.substring(location.lastIndexOf("/") + 1, location.lastIndexOf("."))

    function limitText(text, maxLength) {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    }

    //Mobile Phone Menu Control
    var header = document.getElementById("menu")
    var btn_on = document.getElementById("menu-on")
    var btn_off = document.getElementById("menu-off")
    var screen_width = document.documentElement.clientWidth //獲取可見屏幕寬度
    var home_btn = document.getElementById("home-menubtn")
    var relax_btn = document.getElementById("relax-menubtn")
    var study_btn = document.getElementById("study-menubtn")
    var cat_dog_btn = document.getElementById("cat_dog-menubtn")
    var test_btn = document.getElementById("test-menubtn")
    var about_btn = document.getElementById("about-menubtn")

    if (filename == "index") { //當在index.html瀏覽時執行

        //滾動監聽，到達ID範圍就更改CSS值
        window.addEventListener('scroll', function () {
            var IdList = ["HOME", "RELAX", "STUDY", "CAT_DOG", "TEST", "ABOUT"]
            var menulist = ["home-btn", "relax-btn", "study-btn", "cat_dog-btn", "test-btn", "about-btn"]
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

        if (screen_width <= 720) {
            img_num = 2
        }
        else {
            img_num = 9
        }

        if (screen_width <= 720) {
            anm_img_num = 2
        }
        else {
            anm_img_num = 12
        }

        for (i = 0; i < img_num; i++) {
            document.getElementById("relax-list").innerHTML += '<a href = "https://www.youtube.com/watch?v=' + video_list[i] + '"><div class="relax_data"><div class="relax_img"></div><p class="relax_name"></p></div></a>'
            var relax_image = document.getElementsByClassName("relax_img")[i]
            var relax_name = document.getElementsByClassName("relax_name")[i]
            relax_image.style.backgroundImage = "url(./img/ASMR/" + video_list[i] + ".jpg)"
            relax_name.innerHTML = limitText(video_list_name[i], 40)
        }

        //放入標簽並從Array獲取
        for (k = 0; k < img_num; k++) {
            document.getElementById("study-list").innerHTML += '<a href = "https://www.youtube.com/watch?v=' + study_list[k] + '"><div class="study_data"><div class="study_img"></div><p class="study_name"></p></div></a>'
            var study_image = document.getElementsByClassName("study_img")[k]
            var study_name = document.getElementsByClassName("study_name")[k]
            study_image.style.backgroundImage = "url(./img/STUDY/" + study_list[k] + ".jpg)"
            study_name.innerHTML = limitText(study_list_name[k], 40)
        }

        //放入標簽並從Array獲取數據
        for (n = 0; n < anm_img_num; n++) {
            document.getElementById("cat_dog-list").innerHTML += '<a href = "./img/cat_dog/' + n + '.jpg"><div class="cat_dog_data"><div class="cat_dog_img"></div></div></a>'
            var cat_dog_image = document.getElementsByClassName("cat_dog_img")[n]
            cat_dog_image.style.backgroundImage = "url(./img/cat_dog/" + n + ".jpg)"
        }


    } else if (filename == "relax") { //當在relax.html瀏覽時執行

        for (l = 0; l < video_list.length; l++) {
            document.getElementById("relax-list").innerHTML += '<a href = "https://www.youtube.com/watch?v=' + video_list[l] + '"><div class="relax_data"><div class="relax_img"></div><p class="relax_name"></p></div></a>'
            var relax_image = document.getElementsByClassName("relax_img")[l]
            var relax_name = document.getElementsByClassName("relax_name")[l]
            relax_image.style.backgroundImage = "url(../img/ASMR/" + video_list[l] + ".jpg)"
            relax_name.innerHTML = limitText(video_list_name[l], 40)
        }

        document.getElementById("menu").style.display = "none";

    } else if (filename == "study") { //當在study.html瀏覽時執行

        for (m = 0; m < study_list.length; m++) {
            document.getElementById("study-list").innerHTML += '<a href = "https://www.youtube.com/watch?v=' + study_list[m] + '"><div class="study_data"><div class="study_img"></div><p class="study_name"></p></div></a>'
            var study_image = document.getElementsByClassName("study_img")[m]
            var study_name = document.getElementsByClassName("study_name")[m]
            study_image.style.backgroundImage = "url(../img/STUDY/" + study_list[m] + ".jpg)"
            study_name.innerHTML = limitText(study_list_name[m], 40)
        }

        document.getElementById("menu").style.display = "none";

    } else if (filename == "cat_dog") { //當在study.html瀏覽時執行

        for (o = 0; o < 14; o++) {
            document.getElementById("cat_dog-list").innerHTML += '<a href = "../img/cat_dog/' + o + '.jpg"><div class="cat_dog_data"><div class="cat_dog_img"></div></div></a>'
            var cat_dog_image = document.getElementsByClassName("cat_dog_img")[o]
            cat_dog_image.style.backgroundImage = "url(../img/cat_dog/" + o + ".jpg)"
        }

        document.getElementById("menu").style.display = "none";

    }

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
        cat_dog_btn.addEventListener("click", function () {
            header.style.display = "none";
            btn_on.style.display = "block";
            btn_off.style.display = "none";
        })
        test_btn.addEventListener("click", function () {
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


