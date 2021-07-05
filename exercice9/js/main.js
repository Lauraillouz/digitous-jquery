$(() => {
    $(".btn").click(() => {
        function magicalButton() {
            $("#text").css({
                "display": "contents"
            })
        }
        magicalButton();
    })
})