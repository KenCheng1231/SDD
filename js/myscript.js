window.onload = function () {
    //ABLUM_LIST
    var ablum_list = [
        "Jay",
        "范特西",
        "八度空間",
        "葉惠美",
        "尋找周傑倫",
        "七里香",
        "魔傑座",
        "我很忙",
        "十一月的蕭邦",
        "跨時代",
        "十二新作",
        "驚嘆號",
        "周傑倫的床邊故事",
        "哎喲，不錯哦",
        "不能說的秘密",
        "最偉大的作品"
    ]
    var ablum_link = [
        "https://www.youtube.com/watch?v=87VUC4J_0Ps&list=OLAK5uy_nMVPcc7a_c7Iwozg4WYENxIXLCV7LrfvE",
        "https://www.youtube.com/watch?v=5XK2C9w6oVk&list=OLAK5uy_mDg6UnKSFUOFlz_X04x8rOO0lVSxPL2Qw",
        "https://www.youtube.com/watch?v=3I27c6t-0No&list=OLAK5uy_kGEa9nU1gt6Mia9JsJNxIprs8qSxgS-Qk",
        "https://www.youtube.com/watch?v=9q7JOQfcJQM&list=OLAK5uy_luGzxd76PlO-rZN-Nh_MRoD81ukS_D7os",
        "https://www.youtube.com/watch?v=SdBwt6pyNwE&list=OLAK5uy_mx8up3W6qwciVdSP3QbQlaFYgdWxLewT8",
        "https://www.youtube.com/watch?v=RJerfq6MqY0&list=OLAK5uy_lDnRqJEdbfd2Ia5GEkr3Q8D0eZIF7_ceg",
        "https://www.youtube.com/watch?v=6VRioN8euIs&list=OLAK5uy_l_60CwRDvsgW76rZFfFZBEyESvu9wQ5ag",
        "https://www.youtube.com/watch?v=9o20U91aJdg&list=OLAK5uy_mPlQCSbi757gq-_nZ2vJ96j07yZGj8PRk",
        "https://www.youtube.com/watch?v=6Q0Pd53mojY&list=OLAK5uy_mXjtXOV2DmOWz7qCDxhE93IeKi2BI4EiI",
        "https://www.youtube.com/watch?v=-WkecBaA4z8&list=OLAK5uy_nkAPNK4Ejm7M1O4KvwHX8DoGxf1VSBYHQ",
        "https://www.youtube.com/watch?v=fbejUVfCpLU&list=OLAK5uy_mLby-v90tThlT15pwj3WDF3J8s-xkQf4s",
        "https://www.youtube.com/watch?v=JNS-KT_iwmg&list=OLAK5uy_k9owLBU5HKARpIPsqU_czfDcaNddFdWog",
        "https://www.youtube.com/watch?v=-7r6VqSllNg&list=OLAK5uy_nx5m5O-enzVoclJmkLw7d9Qaaibp8xR4A",
        "https://www.youtube.com/watch?v=BZlFlBnwfOQ&list=OLAK5uy_nlhIjtTnySFolp-iTEbzmMh03-5boIbFk",
        "https://www.youtube.com/watch?v=D0OhWUNKIgg&list=OLAK5uy_m-qS0QaKsf6wLx-VzuaM8vIA4KLoQknHw",
        "https://www.youtube.com/watch?v=NPAOEoSbATU&list=OLAK5uy_lZxWtIuUI6p414KDXD33tPrDyCwoyNlDo"
    ]

    //HISTORY LIST
    var year = [
        "1997.9",
        "1998",
        "1999.12",
        "2000.11",
        "2001",
        "2002",
        "2003.2",
        "2004.1",
        "2005.1",
        "2006.1",
        "2007.2",
        "2008.1",
        "2008",
        "2009.6",
        "2009",
        "2010.5",
        "2011",
        "2012.5",
        "2013.5",
        "2014.12",
        "2015",
        "2016.1",
        "2017.1",
        "2018.1",
        "2019.2",
        "2020.2",
        "2021.1",
        "2022.5",
        "2023.3"
    ]
    var content = [
        "周杰倫在母親的鼓勵下報名參加了台北星光電視台的娛樂節目《超級新人王》，並在節目中邀請人演唱了自己創作的歌曲《夢有翅膀》。 當主持人吳宗憲看到這首歌的曲譜後，就邀請周杰倫到阿爾發音樂公司擔任音樂助理。",
        "咻比嘟嘩餐廳駐唱。",
        "吳宗憲與周杰倫約定十天時間，如果能寫出50首歌，幫他從中選出10首發行唱片。 周杰倫馬上創作，十天時間，周杰倫拿出了五十首歌，每一首都寫得漂漂亮亮，譜得工工整整。",
        "發行首張個人專輯《Jay》，並包辦全部歌曲的作曲、和聲編寫以及監製工作。 其中主打歌曲《星晴》獲得第24屆十大中文金曲優秀國語歌曲金獎。",
        "發行專輯《范特西》，逐步奠定周杰倫華語樂壇領軍地位。",
        "曾參與個人首部電視劇《星情花園》；7月，發行專輯《八度空間》，除了包辦專輯中所有歌曲的作曲外，他還擔任專輯的製作人；同年，獲得第1屆MTV日本音樂錄影帶大獎亞洲最傑出藝人獎、第2屆全球華語歌曲排行榜最受歡迎創作歌手、第9屆新加坡金曲獎亞太最受推崇男歌手等獎項。2002年4月，個人歐洲版EP－《雙截棍（歐版EP）》在歐洲發行。",
        "成為美國《時代雜誌》亞洲版的封面人物”，該雜誌讚許他為“新一代的亞洲音樂天王”。周杰倫是繼王菲、張惠妹之後，第3位出現在著名的《時代》 雜誌封面的華人歌手，也是唯一的一位華人男歌手。；7月16日，周杰倫專輯《葉惠美》中的主打歌曲《以父之名》在超過50家電台首播，並有8億人收聽 ，而主打歌首播的當日也被這些電台定為“周杰倫日”；7月31日，發行專輯《葉惠美》，他不僅包辦了所有歌曲的作曲，還擔任專輯的製作人和造型師，該 專輯於隔年獲得第15屆金曲獎最佳流行音樂演唱專輯獎、第4屆全球華語歌曲排行榜頒獎典禮年度最受歡迎專輯等獎項。專輯主打歌曲《東風破》是周傑倫具有代表性的中國風 作品之一，而他亦憑藉這首歌曲獲得第四屆華語音樂傳媒大獎最佳作曲人獎。",
        "首次登上央視春晚舞台，並演唱歌曲《龍拳》；3月，在第4屆音樂風雲榜中，獲得台灣地區最受歡迎男歌手、年度風雲大獎、年度港台 及海外華人最佳製作人等獎項；8月，發行融合Hip-hop、R&B、古典音樂等曲風的專輯《七里香》，周杰倫也憑藉這張專輯獲得第16屆世界音樂大獎中國區最暢銷藝人 獎，而專輯同名主打歌《七里香》則獲得第27屆十大中文金曲優秀流行國歌獎金獎、第5屆全球華語歌曲排行榜年度25大金曲等獎項；同年，根據世界最權威的國際唱片 行業協會(IFPI)數據，周杰倫唱片年度銷售世界排名42，成為21世紀唯一進入世界前50名的華人歌手。 周杰倫也首次獲得世界音樂大獎大中華區最暢銷藝人。",
        "在第11屆全球華語榜中榜頒獎盛典中，獲得港台最佳男歌手、港台最受歡迎男歌手、港台最佳創作歌手等獎項；4月，憑藉專輯 《七里香》入圍第16屆台灣金曲獎最佳作曲人獎、最佳國語男演唱人獎、最佳流行音樂演唱專輯獎；6月23日，首次擔任男主角的電影《頭文字D》上映， 並憑藉該片獲得第42屆台灣電影金馬獎最佳新演員獎、第25屆香港電影金像獎最佳新人獎；11月，發行專輯《十一月的蕭邦》，並包辦了專輯中所有 歌曲的作曲以及專輯的造型設計。",
        "發行EP《霍元甲》，主打歌《霍元甲》是李連傑主演的同名電影的主題曲；9月，發行專輯《依然范特西》，該專輯延續了 周杰倫以往的音樂風格，並融合了中國風、RAP等曲風，其中與費玉清合唱的中國風歌曲《千里之外》獲得第13屆全球華語音樂榜中榜年度最佳歌曲獎、第29屆十 大中文金曲全國最受歡迎中文歌曲獎等獎項； 該專輯發行後以5.34%的銷售份額位列台灣五大唱片排行榜第一位，並獲得中華音樂人交流協會年度十大優良專輯、IFPI香港唱片 銷量大獎最高銷售國語唱片等獎項；12月，發行EP《黃金甲》；12月14日，周杰倫主演的古裝動作片《滿城盡帶黃金甲》在中國內地上映，並憑藉該片獲得第16 屆上海影評人獎最佳男主角；同年，獲得世界音樂大獎中國區最暢銷藝人獎。",
        "首度擔任導演並自導自演愛情片《不能說的秘密》，該片上映後獲得第44屆台灣電影金馬獎年度台灣傑出電影、第27屆香港電影金像獎最佳亞洲 電影提名等獎項；4月，成立傑威爾音樂有限公司；6月，以單曲《霍元甲》獲得第18屆台灣金曲獎最佳單曲製作人獎；11月2日，發行專輯《 我很忙》，並在專輯中首次嘗試美式鄉村風格；而周傑倫也於次年憑藉專輯中的中國風歌曲《青花瓷》獲得第19屆台灣金曲獎最佳作曲人獎以及最佳年度歌曲獎； 同年，周杰倫完成「THEONE」、「無與倫比」兩次世界巡迴演唱會，先後在美國康州、內華達州、加拿大、日本東京、新加坡、馬來西亞、泰國、香港、台灣、大陸各地區舉辦多場個人演唱會。",
        "周杰倫自導自演的愛情文藝片《不能說的秘密》在韓國上映；2月16日，在日本武道館連開兩場演唱會，成為繼鄧麗君、王菲之後第三位 在武道館開唱的華人歌手；7月，憑藉專輯《不能說的秘密電影原聲帶》獲得第19屆金曲獎演奏類最佳專輯製作人獎；10月15日，發行專輯《魔傑座》， 這張專輯融合了嘻哈、民謠等曲風，發行一周在亞洲的銷量突破100萬張；11月，憑藉專輯《我很忙》第四次獲得世界音樂大獎中國區最暢銷藝人獎，並成為首位 連續三屆獲得此獎項的華人歌手；同年，主演愛情喜劇《大灌籃》。 並於當年，成為了繼藝人王力宏、張惠妹、金城武、F4後，美國新聞網第5位CNNTalkAsia訪談的對象。",
        "5·12汶川地震，周杰倫捐款總額超過4200萬人民幣，全台灣藝人最多，並將個人演唱會改為趙災演唱會，親自彈奏《蝸牛》等勵志歌曲，高喊「汶川加油！」； 同年，美國《FastCompany》雜誌評選“全球百大創意人”，他與LadyGaga、jay-z成為“唯三”入榜歌手，同時也是唯一亞洲歌手。",
        "在第20屆台灣金曲獎頒獎典禮上獲得年度最佳歌曲獎、年度最佳音樂錄影帶、年度最佳國語男歌手三個獎項；7月，周杰倫澳大利亞巡演，悉尼演唱會票房 空降美國公告牌（Billboard）第二，力壓世界R＆B天后碧昂絲，成為當年全球單場演唱會票房收入第二的好成績，也打破了華人在澳洲開唱票房最高紀錄；同年，美國CNN 選出亞洲最有影響力的25位人物，周杰倫入圍並被形容為「非凡藝人」；",
        "周杰倫完成第三次“2007—2009世界巡迴演唱會”，先後在美國洛杉磯、拉斯維加斯、康涅狄格州、加拿大多倫多、溫哥華、澳大利亞、日本東京、新加坡、馬來西亞、泰國、香港 、澳門、台灣、大陸各地區舉辦多場個人演唱會。",
        "發行專輯《跨時代》，並包辦專輯中全部歌曲的作曲和製作；該專輯於次年獲得第22屆台灣金曲獎最佳國語專輯獎、中國原創音樂流行榜最優秀 專輯等獎項，而周傑倫也憑藉該專輯獲得金曲獎最佳國語男歌手獎；6月，入選美國雜誌《Fast Company》評出的“全球百大創意人物”，並且成為首位入榜的華人男歌手 ；8月，在一項名為「全球歌曲下載量最高歌手」（2008年年初至2010年8月10日）的調查中，周杰倫的歌曲下載量排名全球第三；12月，編號為257248的 小行星被命名為“周杰倫星”，而周傑倫也創作了以這顆小行星為題材的歌曲《愛的飛行日記》；12月30日，美國古柏第奴(Cupertino)市長黃少雄，為紀念 周杰倫對華人音樂的貢獻， 將訂本世紀第一個十年最後一天為古柏蒂奴市的“周杰倫日”；同年，執導科幻劇《熊貓人》，並為該劇創作了《熊貓人》 、《愛情引力》等歌曲。",
        "周杰倫以《青蜂俠》進軍好萊塢，美國知名電影網站「screencrave」選出十大最值得期待的新秀演員。 將以《青蜂俠》進軍海外市場的周傑倫，成為西方媒體眼中的“潛力股”，不僅順利躋身十強，還成為榜單上唯一一名亞洲演員代表。 2月，周杰倫與NBA籃球巨星科比代言雪碧廣告，周杰倫創作主題曲《天地一斗》與科比合拍MV，於2011年2月21日 在美國加州洛杉磯首發。 歌曲的下載收入將全數捐給中國希望工程（已籌得超過200萬善款）。 4月21日，美國《時代雜誌》評選了“全球年度最具影響力人物100強”，周杰倫位列第二名；5月13日，入圍第22屆台灣金曲獎最佳專輯製作人獎、 最佳年度歌曲、最佳作曲人獎等獎項；11月11日，發行專輯《驚嘆號！ 》；這張專輯融合了重金屬搖滾、嘻哈、R&B、jazz等音樂風格，並首次引入電子舞曲。",
        "位列福布斯中國名人榜第一名；9月22日，在新加坡F1賽道舉辦演唱會，成為首位在F1演出的華人歌手；12月28日，發行專輯《十二新作》 ，專輯包括了中國風、RAP、藍調、R&B、Jazz等曲風，主打歌曲《紅塵客棧》獲得第13屆全球華語歌曲排行榜二十大金曲、第36屆香港十大中文金曲優秀流行國語 歌曲銀獎等獎項；同年，周杰倫親自前往他所捐助的湖南省汨羅市智峰鄉希望小學考察善款落實情況，與孩子們互動，親自彈奏《稻香》勵志歌曲，和同學們一起打籃球 。",
        "「魔天倫」世界巡迴演唱會在上海賓士文化中心啟動。 6月1日周杰倫配音《十萬個冷笑話》第9、10集太乙真人；7月11日，周杰倫信主後首部自導自演的新片《天台》首映。 週導所屬的台北新生命小組教會Jesus Fashion舞團於7月10日 在《天台》首映會上演“天台歌武秀”，吸引媒體與民眾注意。 該片也受大陸名導張藝謀好評。",
        "發行首張個人數位音樂專輯《哎呦，不錯哦》，成為首位發行數位音樂專輯的華人歌手；該專輯發行後獲得第二屆QQ音樂年度盛典“年度暢銷數字專輯” 獎，專輯中的歌曲《鞋子特大號》獲得第5屆全球流行音樂金榜年度二十大金曲獎。",
        "加盟第四季《中國好聲音》擔任導師。",
        "與派偉俊合唱《功夫熊貓3》電影全球主題曲；5月，周杰倫發行演唱會專輯《周杰倫魔天倫世界巡迴演唱會》；6月1日，為電影《驚天魔 盜團2》創作的主題曲《Now You See Me》發行；6月24日，發行融合古典、搖滾、嘻哈等曲風的數位專輯《周杰倫的床邊故事》；同日，參演的好萊塢電影《 驚天魔盜團2》在中國內地上映；同年，舉行「地表最強」世界巡迴演唱會；7月15日起，擔任浙江衛視音樂評論節目《中國新歌聲》的導師；12月23日起， 由周傑倫自編自導的文藝片《不能說的秘密》而改編的同名音樂劇在北京天橋藝術中心舉行全球首演，該音樂劇的作曲、作詞、原著故事均由周傑倫完成。",
        "周杰倫監製的愛情電影《一萬公里的約定》在中國內地上映；1月13日，在江蘇衛視推出的科學類真人秀節目《最強大腦第四季》中擔任嘉賓 ；6月4日，獲得Hito年度最佳男歌手；隨後，加入原創專業音樂節目《中國新歌聲第二季》。 8月9日，其專輯《周杰倫的床邊故事》獲得「2017華語金曲獎」頒發的「年度最佳國語專輯」獎。",
        "在新加坡舉行「地表最強2世界巡迴演唱會」的首場演出；1月18日，發行其個人作詞、作曲的單曲《等你下課》，該曲由周傑倫與 楊瑞代共同演唱；2月15日，在中央電視台春節聯歡晚會上，周杰倫與蔡威澤表演魔術與歌曲《告白氣球》。 該節目在2018年央視春晚節目收視率TOP10榜單中排名第一位。",
        "在美國拉斯維加斯舉行個人演唱會；7月24日，宣布「嘉年華」世界巡迴演唱會於10月啟動，該演唱會是周傑倫慶祝出道20週年的演唱會； 9月16日晚11點，發行單曲《說好不哭》，由方文山作詞，周杰倫、陳信宏共同演唱；10月17日，在上海舉行「嘉年華」世界巡迴演唱會的首場演出； 11月1日，發行「地表最強」世界巡迴演唱會Live專輯。 12月11日，周杰倫為電影《天火》獻唱主題曲《我如此相信》。",
        "由周傑倫作曲、方文山作詞、張學友演唱的抗擊疫情公益歌曲《等風雨經過》發布；3月21日，在浙江衛視全球戶外生活文化實境秀節目《週遊記》中 擔任發起人。 5月11日，參與由人民日報客戶端、國家人文歷史等共同發起的「致敬白衣天使」線上音樂會。 6月，發行單曲《Mojito》。",
        "獲得中國歌曲TOP排行榜最佳男歌手獎；2月12日，以「雲錄製」形式在2021年中央廣播電視總台春節聯歡晚會演唱歌曲《Mojito》；5月12 日，以單曲《Mojito》入圍第32屆台灣金曲獎最佳單曲製作人獎。",
        "周杰倫「奇蹟現場重映計畫」線上視訊演唱會（魔天倫演唱會、地表最強演唱會）在QQ音樂、酷狗音樂、酷我音樂、微信視訊號 等平台播出。 6月19日晚，周杰倫新專輯前導紀錄片發布，官宣新專輯將於7月15日發行。 7月1日，周杰倫在INS宣布，他的最新專輯《最偉大的作品》將於7月6日中午12點首播。",
        "IFPI發行了2022年全球暢銷專輯榜，周杰倫以專輯《最偉大的作品》獲得全球暢銷專輯榜冠軍。 11月25日，參加的節目《週遊記2》在浙江衛視播出。 12月22日，發行單曲《12月的小品》。"
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
            document.getElementById("ablum-list").innerHTML += '<a href = "' + ablum_link[i] + '"><div class="ablum_data"><div class="ablum_img"></div><p class="ablum_name"></p></div></a>'
            var ablum_image = document.getElementsByClassName("ablum_img")[i]
            var ablum_name = document.getElementsByClassName("ablum_name")[i]
            ablum_image.style.backgroundImage = "url(./img/ABLUM/Ablum_Cover/" + ablum_list[i] + ".jpg)"
            ablum_name.innerHTML = ablum_list[i]
        }

        //放入標簽並從Array獲取數據
        for (k = year.length - 1; k >= year.length - 6; k--) {
            document.getElementById("time_line").innerHTML += "<tr><td class='htime'>" + year[k] + "</td><td>" + content[k] + "</td></tr>"
        }


    } else if (filename == "ablum") { //當在ablum.html瀏覽時執行

        for (l = 0; l < ablum_list.length; l++) {
            document.getElementById("ablum-list").innerHTML += '<a href = "' + ablum_link[l] + '"><div class="ablum_data"><div class="ablum_img"></div><p class="ablum_name"></p></div></a>'
            var ablum_image = document.getElementsByClassName("ablum_img")[l]
            var ablum_name = document.getElementsByClassName("ablum_name")[l]
            ablum_image.style.backgroundImage = "url(../img/ABLUM/Ablum_Cover/" + ablum_list[l] + ".jpg)"
            ablum_name.innerHTML = ablum_list[l]
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


