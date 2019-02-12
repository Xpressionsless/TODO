var item = "";
$(document).ready(function(){
    $("#todo-form").submit(function(event){ 
        item = $("#todo-list-item").val();
        appendingFuntion(item)
        this.reset();
        event.preventDefault()
    })
    remove()
    checkbox()
})

function appendingFuntion(item) {
    $("#todo-items").append(appendToList(item));
}

function appendToList(item) {
    var inputItem = "";
    if ( item === '') {
        window.alert("You must enter something")
        return false
    }
    else {
        inputItem =  "<li class='completed'; id='select'><input id='label'; class='checkbox'; type='checkbox'>" + item + "<a href='javascript:void(0);' class='remove'>&times;</a></li>"
    }
    return inputItem;
}


function remove() {
   $(document).on("click", "a.remove" , function() {
    $(this).parent().remove();
});
}

function checkbox() {
    var liAddedClass = $("<li>").css(".completed")
    $(document).on("change", "#label", function () {
    $(this).parent().toggleClass(liAddedClass);
      });
}