$(".btn").click(() => {
    let urlCountry = $("input").val();
    $.ajax({
        url: `https://restcountries.eu/rest/v2/name/${urlCountry}`,
        success: function (data, status, response) {
            $("#country").html(data[0].name);
            $("#capital").html(data[0].capital);
        }
    })
})