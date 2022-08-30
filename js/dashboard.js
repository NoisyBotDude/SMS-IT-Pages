var dashboardButton = document.getElementsByClassName("dashboard-navbaar--links--button");
var dashboardContent = document.getElementsByClassName("dashboard-content-info");

$(dashboardButton).click(function(e){
    e.preventDefault();
    $(this).parent().find('button.active').removeClass('active');
    $(this).addClass("active");
    $(dashboardContent).parent().find('div.dashboard-content-info').addClass("hide");
    var buttonId = $(this).attr('id')
    $('.' + buttonId).removeClass("hide");
});