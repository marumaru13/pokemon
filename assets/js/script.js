$(function(){
    $('button').on("click",function(){

    })

    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/",  //アクセスするURL
        type: 'get',　　 //post or get
        cache: false,        //cacheを使うか使わないかを設定
        dataType:'json',     //data type script・xmlDocument・jsonなど
    })
    .done(function(response) { 
        //通信成功時の処理
        //成功したとき実行したいスクリプトを記載
     })
     .fail(function(xhr) {  
　　　　　 //通信失敗時の処理
        //失敗したときに実行したいスクリプトを記載
     })
     .always(function(xhr, msg) { 
　　　　　//通信完了時の処理
       //結果に関わらず実行したいスクリプトを記載
  });   

});