var members=[{
    name: "傅仰耿",
    id: "Nirvana",
    qq: 1871535,
    belong: "1",
    say: "",
    //photo: "fyg.jpg",
    //wechat: "13844055086",
},{
    name: "余镐",
    id: "August",
    qq: 625838044,
    belong: "2022",
    say: "起风了",
    //photo: "",
},{
    name: "廖智炫",
    id: "JustinRochester",
    qq: 923489297,
    belong: "2023",
    say: "",
    //photo: "",
},{
    name: "叶林忠",
    id: "ylzzz",
    qq: 2236641687,
    belong: "2023",
    say: "酱紫",
    photo: "",
    //school: "东北师范大学附属中学",
},{
    name: "潘泓岳",
    id: "reallyFans",
    qq: 394116068,
    belong: "2023",
    say: "苟",
    photo: "",
    //school: "东北师范大学附属中学",
},{
    name: "陈昊旸",
    id: "Stump",
    qq: 939979190,
    belong: "2024",
    say: "你的女朋友，我也很喜欢",
    //photo: "dyf.jpg",
    //wechat: "",
    //bilibili: "",
    //zhihu: "",
    //blog: "",
    //twitter: "",
    //github: "",
    //music_163: "",
},{
    name: "邓宇凡",
    id: "Joky_02",
    qq: 1030322750,
    belong: "2024",
    say: "你的女朋友，我也很喜欢",
    photo: "dyf.jpg",
    //wechat: "",
    //bilibili: "",
    //zhihu: "",
    //blog: "",
    //twitter: "",
    //github: "",
    //music_163: "",
},{
    name: "王奕然",
    id: "everlasting",
    qq: 851627835,
    belong: "2024",
    say: "",
    //photo: "",
},{
    name: "杨赫",
    id: "kernel．bin",
    qq: 1160386205,
    belong: "2024",
    say: "你的女朋友，我也很喜欢",
    //photo: "dyf.jpg",
    //wechat: "",
    //bilibili: "",
    //zhihu: "",
    //blog: "",
    //twitter: "",
    github: "kernelbin",
    //music_163: "",
},{
    name: "丁凌烁",
    id: "cuking",
    qq: 1604089411,
    belong: "2025",
    say: "你复杂度都不对！",
    //photo: "",
}
/* ,{
    name: "",
    id: "",
    belong: "",
    say: "",
    qq: ,
} */];

for(var i=0; i<members.length; i++){
    var div=document.getElementById("infomation");
    var addHTML="";
    addHTML+="<div class=\"filtr-item w3l-button\" data-category=\""+members[i].belong+"\">";
    addHTML+="<a href=\"#\" data-toggle=\"modal\" data-target=\"#"+members[i].id+"\">";
    addHTML+="<figure class=\"w3ls-gallery\">";
    addHTML+="<img src=\"http://q.qlogo.cn/headimg_dl?bs=qq&dst_uin="+members[i].qq+"&src_uin=www.jlwz.cn&fid=blog&spec=4\" alt=\" \" />";
    addHTML+="<span class=\"text\">"+members[i].name+"</span>";
    addHTML+="<hr>";
    addHTML+="<span class=\"text\">"+members[i].id+"</span>";
    addHTML+="</figure>";
    addHTML+="</a>";
    addHTML+="</div>";
    div.innerHTML+=addHTML;
    
    div=document.getElementById("cards");
    addHTML="<div class=\"modal about-modal fade\" id=\""+members[i].id+"\" tabindex=\"-1\" role=\"dialog\">";
    addHTML+="<div class=\"modal-dialog\" role=\"document\">";
    addHTML+="<div class=\"modal-content\"><div class=\"modal-header\">";
    addHTML+="<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>";
    addHTML+="<h4 class=\"modal-title\">"+members[i].id+"</h4>";
    addHTML+="</div>";
    addHTML+="<div class=\"modal-body\"><div class=\"about\">";
    addHTML+="<div class=\"col-md-4 col-sm-4  col-xs-4 about-left \">";
    if(members[i].photo)addHTML+="<img src=\"photo/"+members[i].photo+"\" class=\"img-responsive\" alt=\"\"/>";
    else addHTML+="<img src=\"photo/empty.jpg\" class=\"img-responsive\" alt=\"\"/>";
    addHTML+="</div>";
    addHTML+="<div class=\"col-md-8 col-sm-8 col-xs-8 about-right wthree\">";
    addHTML+="<h3>"+members[i].name+"</h3>";
    addHTML+="<h4>"+members[i].say+"</h4>";
    addHTML+="<ul class=\"address\">";
    
    addHTML+="<li><ul class=\"agileits-address-text \"><li><b>QQ</b></li><li>"+members[i].qq+"</li></ul></li>";
    if(members[i].wechat)addHTML+="<li><ul class=\"agileits-address-text \"><li><b>微信</b></li><li>"+members[i].wechat+"</li></ul></li>";
    if(members[i].bilibili)addHTML+="<li><ul class=\"agileits-address-text\"><li><b>B站uid</b></li><li><a href=\"https://space.bilibili.com/"+members[i].bilibili+"\" target=\"_blank\"> "+members[i].bilibili+"</a></li></ul></li>";
    if(members[i].zhihu)addHTML+="<li><ul class=\"agileits-address-text\"><li><b>知乎</b></li><li><a href=\"http://www.zhihu.com/people/"+members[i].zhihu+"\" target=\"_blank\"> "+members[i].zhihu+"</a></li></ul></li>";
    if(members[i].blog)addHTML+="<li><ul class=\"agileits-address-text\"><li><b>博客</b></li><li><a href=\""+members[i].blog+"\" target=\"_blank\"> "+members[i].blog+"</a></li></ul></li>";
    if(members[i].twitter)addHTML+="<li><ul class=\"agileits-address-text\"><li><b>推特</b></li><li><a href=\"https://twitter.com/"+members[i].twitter+"\" target=\"_blank\"> "+members[i].twitter+"</a></li></ul></li>";
    if(members[i].github)addHTML+="<li><ul class=\"agileits-address-text\"><li><b>github</b></li><li><a href=\"https://github.com/"+members[i].github+"\" target=\"_blank\"> "+members[i].github+"</a></li></ul></li>";
    if(members[i].music_163)addHTML+="<li><ul class=\"agileits-address-text\"><li><b>网易云</b></li><li><a href=\"https://music.163.com/#/user/home?id="+members[i].music_163+"\" target=\"_blank\"> "+members[i].music_163+"</a></li></ul></li>";
    
    addHTML+="</ul>";
    addHTML+="</div>";
    addHTML+="<div class=\"clearfix\"> </div>";
    addHTML+="</div>";
    addHTML+="</div>";
    addHTML+="</div>";
    addHTML+="</div>";
    addHTML+="</div>";
    div.innerHTML+=addHTML;
}