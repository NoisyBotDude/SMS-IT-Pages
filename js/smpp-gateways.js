var smsGatewaySelect = document.getElementById('sms-gateway-select');

$(smsGatewaySelect).change(function() {
    var selectedGateway = $(this).find('option:selected').val();
    $(this).parent().parent().find('.modal-body-gateway-inputs').hide();
    $(this).parent().parent().find('#' + selectedGateway).removeClass('hide').show();
});