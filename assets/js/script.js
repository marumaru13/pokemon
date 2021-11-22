$(function () {
    $('button').one("click", function () {
        let input = $('input').val();

        $.ajax({
            url: (`https://pokeapi.co/api/v2/pokemon/${input}`),  //アクセスするURL
            type: 'get',   //post or get
            cache: false,        //cacheを使うか使わないかを設定
            dataType: 'json',     //data type script・xmlDocument・jsonなど
        })
            .done(function (response) {

                $('#q8-btn').one('click', function () {
                    $('.a').append(response.moves[0].move['name']);
                    $('.b').append(response.moves[1].move['name']);
                    $('.c').append(response.moves[2].move['name']);
                    $('.d').append(response.moves[3].move['name']);
                    $(this).siblings().animate({
                      width: 'toggle'
                    })
                })

                // $('img').attr('src', response.sprites.back_default);
                $('.mon').attr('src',response.sprites['versions']['generation-v']['black-white'].animated['front_default']);
                $('.mon').css('width','300px');
                $('.mon').css('height','300px');


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

    $('.pokepoke').on("click", function () {
        let inputNum = $('.second').val();

        $.ajax({
            url: (`https://pokeapi.co/api/v2/pokemon/${inputNum}`),  //アクセスするURL
            type: 'get',   //post or get
            cache: false,        //cacheを使うか使わないかを設定
            dataType: 'json',     //data type script・xmlDocument・jsonなど
        })
            .done(function (response) {

                $('#q9-btn').one('click', function () {
                    $('.e').append(response.moves[0].move['name']);
                    $('.f').append(response.moves[1].move['name']);
                    $('.g').append(response.moves[2].move['name']);
                    $('.h').append(response.moves[3].move['name']);
                    $(this).siblings().animate({
                      width: 'toggle'
                    })
                })

                // $('img').attr('src', response.sprites.back_default);
                $('.poke').attr('src', response.sprites['versions']['generation-v']['black-white'].animated['back_default']);
                $('.poke').css('width','300px');
                $('.poke').css('height','300px');
        

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