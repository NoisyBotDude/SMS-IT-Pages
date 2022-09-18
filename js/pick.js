var contactsRadio = document.getElementById("contacts");
var contactsMessage = document.getElementById("message-contacts");

var manualRadio = document.getElementById("manual");
var manualMessage = document.getElementById("message-manual");

var groupsRadio = document.getElementById("groups");
var groupsMessage = document.getElementById("message-groups");
console.log(groupsMessage);

contactsRadio.addEventListener("click", function() {
    contactsMessage.classList.remove("hide");
    manualMessage.classList.add("hide");
    groupsMessage.classList.add("hide");
})  

manualRadio.addEventListener("click", function() {
    contactsMessage.classList.add("hide");
    manualMessage.classList.remove("hide");
    groupsMessage.classList.add("hide");
})

groupsRadio.addEventListener("click", function() {
    contactsMessage.classList.add("hide");
    manualMessage.classList.add("hide");
    groupsMessage.classList.remove("hide");
})

function senderId() {
    var checkbox = document.getElementById("sender-id-checkbox");
    if(checkbox.checked == true){
        $('.sender-id-input').removeClass('hide');
    }else{
        $('.sender-id-input').addClass('hide');
    }
}

var numberPoolCheckbox = document.getElementById("number-pool-checkbox");
var numberPoolContents = document.getElementById("number-pool-contents");

numberPoolCheckbox.addEventListener("click", function() {
    numberPoolContents.classList.toggle("hide");
})