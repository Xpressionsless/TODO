var item = "";
$(document).ready(function(){
    $("#todo-form").submit(function(event){ 
        item = $("#todo-list-item").val();
        listingFunction(item)
        this.reset();
        event.preventDefault()
    })
})

function listingFunction(item) {
    $("#todo-items").append(appendToList(item));
}

function appendToList(item) {
    // var $input = $("<input/>").attr({type: 'checkbox', name:'check'}).addClass('checkbox')
    // var $link = $("<a>").attr({value: 'X', type: 'button', name: 'del'}).addClass('remove')
    var inputItem = "";
    if ( item === '') {
        window.alert("Your must enter something")
        return false
    }
    else {
        inputItem = "<li id='listItemID'><input id='label' type='checkbox'>" + item + "<a type='link' id='remove'>X</a>"
    }
    return inputItem;
}

function remove(item) {

    $(this).closest(item).remove();
}