$(function(){
    $('button').on("click",function(){

    })

    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/",  //アクセスするURL
        type: 'get',　　 //post or get
        cache: false,        //cacheを使うか使わないかを設定
        dataType:'json',     //data type script・xmlDocument・jsonなど
    })

});