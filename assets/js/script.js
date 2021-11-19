$(function () {
    $('button').on("click", function () {
        let input = $('input').val();



        $.ajax({
            url: (`https://pokeapi.co/api/v2/pokemon/${input}`),  //アクセスするURL
            type: 'get',　　 //post or get
            cache: false,        //cacheを使うか使わないかを設定
            dataType: 'json',     //data type script・xmlDocument・jsonなど
        })
            .done(function (response) {

                $('img').attr('src',response.sprites['versions']['generation-v']['black-white'].animated['front_default']);

                // $('img').attr('src', response.sprites.back_default);
                $('.poke').attr('src', response.sprites['versions']['generation-v']['black-white'].animated['back_default']);



            })
            .fail(function (xhr) {
                //通信失敗時の処理
                //失敗したときに実行したいスクリプトを記載
            })
            .always(function (xhr, msg) {
                //通信完了時の処理
                //結果に関わらず実行したいスクリプトを記載
            });

    })

});