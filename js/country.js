$(function () {
    $.getJSON('countryList.json', function (data) {
        countries = []

        $.each(data, function (country) {
            countryName = data[country]['name']
            countries.push(countryName)
        })

        $.each(countries, function (id, countryName) {
            $('#modal-body-country-select').append('<option value="">' + countryName + '</option>')
        })
    });
})