var monthlySwitch = document.getElementById("filt-monthly"),
    yearlySwitch = document.getElementById("filt-hourly"),
    switcher = document.getElementById("switcher"),
    monthlyCard = document.getElementById("card-bill--monthly"),
    yearlyCard = document.getElementById("card-bill--yearly");

monthlySwitch.addEventListener("click", function () {
    switcher.checked = false;
    monthlySwitch.classList.add("toggler--is-active");
    yearlySwitch.classList.remove("toggler--is-active");
    monthlyCard.classList.remove("hide");
    yearlyCard.classList.add("hide");
});

yearlySwitch.addEventListener("click", function () {
    switcher.checked = true;
    yearlySwitch.classList.add("toggler--is-active");
    monthlySwitch.classList.remove("toggler--is-active");
    monthlyCard.classList.add("hide");
    yearlyCard.classList.remove("hide");

});

switcher.addEventListener("click", function () {
    yearlySwitch.classList.toggle("toggler--is-active");
    monthlySwitch.classList.toggle("toggler--is-active");
    monthlyCard.classList.toggle("hide");
    yearlyCard.classList.toggle("hide");
});

// For HomePage Subscribe Dropdown
var switchTitleMonthly = document.getElementById("toggle-switch-monthly"),
    switchTitleYearly = document.getElementById("toggle-switch-yearly"),
    dropdownSwitch = document.getElementById("toggle-dropdown-switch"),
    switchMonthlyInfo = document.getElementById("toggle-switch-monthly-info"),
    switchYearlyInfo = document.getElementById("toggle-switch-yearly-info");

switchTitleMonthly.addEventListener("click", function () {
    dropdownSwitch.checked = false;
    switchTitleMonthly.classList.add("toggle-title-dropdown--active");
    switchTitleYearly.classList.remove("toggle-title-dropdown--active");
    switchMonthlyInfo.classList.remove("hide");
    switchYearlyInfo.classList.add("hide");
})

switchTitleYearly.addEventListener("click", function () {
    dropdownSwitch.checked = true;
    switchTitleYearly.classList.add("toggle-title-dropdown--active");
    switchTitleMonthly.classList.remove("toggle-title-dropdown--active");
    switchMonthlyInfo.classList.add("hide");
    switchYearlyInfo.classList.remove("hide");
})

dropdownSwitch.addEventListener("click", function () {
    switchTitleMonthly.classList.toggle("toggle-title-dropdown--active")
    switchTitleYearly.classList.toggle("toggle-title-dropdown--active")
    switchMonthlyInfo.classList.toggle("hide")
    switchYearlyInfo.classList.toggle("hide")
})