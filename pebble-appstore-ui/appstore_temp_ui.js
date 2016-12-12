$(document).ready(function () {
    var app_url = 'https://github.com/ygalanter/PebbleArchive/tree/master/PebbleAppStore/apps/C/O/CobbleStyle%202/57719ccc6c2104ad170001c8';

    var app_raw_url = app_url.replace("github.com", "raw.githubusercontent.com").replace("tree/", "");

    var app_url_parts = app_url.split("/");
    var arr_len = app_url_parts.length;

    var app_id = app_url_parts[arr_len - 1];
    var app_name = app_url_parts[arr_len - 2];

    //adding screenshots
    for (var i = 0; i <= 4; i++) {

        $("<img src='" + app_raw_url + "/" + app_id + "-screen-" + i + ".png' />").on("load", function () {
            $(this).addClass("screenshot").appendTo('#screenshots');
        })

    }

    // loading JSON with app info
    $.getJSON(app_raw_url + "/" + app_id + ".json", function (info) {
        $("#title").html(info.data[0].title);
        $("#author").html("By " + info.data[0].author);
        $("#description").html(info.data[0].description);

        //adding download link
        $("<a />", {
            href: app_raw_url + " / " + app_id + ".pbw",
            text: "GET",
            download: info.data[0].title + ".pbw"
        }).appendTo("#GET")


    })

    
  
})