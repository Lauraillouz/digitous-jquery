$(".btn").click(() => {
    if ($("input").val().length > 5) {
        $("input").addClass("is-valid")
    } else {
        $("input").addClass("is-invalid")
    }
})