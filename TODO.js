var html = ""
var todos = []

$(document).ready(function () {
    $("#todo-form").submit(function (event) {
        event.preventDefault()
        item = $("#todo-list-item").val();
        addNewTodoWithName(item)
        listTodo()
        remove()
        checkbox()
        this.reset();
    })
    //  remove()
    //  checkbox()
})

class Todo {
    constructor(name) {
        //this.id = id
        this.name = name
    }
}
function addNewTodoWithName(name) {
    var inputItem = new Todo(name)
    if (name === "") {
        window.alert("You must enter something")
        return false
    }
    todos = todos || []
    todos.push(inputItem)
    saveTodos()
}
// REmove todo
function removeTodoAtIndex(index) {
    todos.splice(index, 1)
    saveTodos()
}
// Get Todo
function getTodoAtIndex(index) {
    return todos[index]
}
//Save data to localStorage
function saveTodos() {
    var str = JSON.stringify(todos)
    localStorage.setItem("todos", str)
}
// Get data from LocalStorage
function getTodos() {
    var str = localStorage.getItem("todos")
    if (!todos) {
        todos = []
    } else {
        todos = JSON.parse(str)
    }
}
getTodos()
listTodo()
// list Todos
function listTodo() {
    html = ""
    for (const i in todos) {
        var todo = todos[i]
        var name = todo.name
        html += "<li class='completed'; id='select'><input id='label'; onClick='checkbox()'; type='checkbox'>" + name + "<a href='javascript:void(0)'; onClick='remove()'; class='remove'>&times;</a></li>"
    }
    $("#todo-items").html(html)
}

function remove() {
    $("#todo-items").on("click", "a.remove", function () {
        var index = $(this).closest(".completed").index();
        if (index > -1) {
            todos.splice(index, 1)
        }
        listTodo()
        saveTodos()
    })
}

function checkbox() {
    //var isChecked = $("input#label").prop('checked')
    console.log($("input#label:checked").val());
    var liAddedClass = $("<li>").css(".completed")
    $(document).on("change", "#label", function () {
        $(this).parent().toggleClass(liAddedClass);
    })
}