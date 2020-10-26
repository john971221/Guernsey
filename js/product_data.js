$.ajax({

    type: 'GET',
    url: '../data.json', //이동할 부분(데이터 얻어올 곳) //Spring에서는 controller로 연결
    datatype: 'json',
    success: function (json) { //data
        //alert("ajax success"); //꼭 확인해야 한다. 

        //alert("json[0] version : " +json[0].version); //json에 있는 data 를 가져오는 것. 제일 첫 번째 데이터
        // alert("json[0] codename : " +json[0].codename);//키 값으로 값을 불러 오는 것!!!! version , codename 은 key값이다.

        //p태그에 올리기
        //    $("#demo").text(json[0].version + "  ");
        //    $("#demo").append(json[0].codename + "<br><br>");
        var content = '';
        var n = -1;
        //for문으로 전체 출력
        for(i=0; i<json.items.length; i++){
                        
            content += "<li class='product'>";
            content += "<img class='imgD' src='"+ json.items[i].src +"'>";
            content += "<h3 class='name'>"+ json.items[i].name +"</h3>";
            content += "<p class='price'>"+ json.items[i].price +"</p>";
            content += "</li>";
            
            if((i%5==0 && i != 0) || i == json.items.length-1){
                $('#Shop').append('<div class=Content_box><ul>'+content+'</ul></div>');
                content = '';
            }; 
            
        };
        
    },
    error: function () {
        alert("ajax error");
    }


});
