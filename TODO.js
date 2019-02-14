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
    checkbox()
})

class Todo {
    constructor(name) {
        this.checked = false
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
        var checkbox = todo.checked
        html += '<li class="completed";>' + '<input id="label"; class="checkbox"; type="checkbox"; name="checkbox-name">' + name 
        + '<a href="javascript:void(0)"; onClick="remove()"; class="remove">&times;</a></li>'
    }
    $("#todo-items").html(html)
}

// $(document).on('change', '#label', function () {
//     for (const i in todos) {
//         var todo = todos[i]
//         var name = todo.name
//         var checkbox = todo.checked
//     $(this).prop(['checked'], checkbox);
//     }
//     //saveTodos()
//    // listTodo()
// })

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

// Nedan två metoder har jag provat att kunna spara checkbox check i localStorage men ingen funkar perfekt
function checkbox() {
    //var liAddedClass = $("<li>").css(".completed")
    $('.checkbox').on('change', function () {
        var index = $('.checkbox').index(this)
        $(this).parent().toggleClass($("<li>").css(".completed"));
        var isChecked
        $(this).each(function () {
            if (this.checked) {
                isChecked = todos[index]['checked'] = this.checked
                console.log('Checkbox value is: ' + isChecked)
            } else {
                if(todos[index]['checked'] = true) {
                isChecked = todos[index]['checked'] = false
                console.log('Checkbox value is: ' + isChecked)
                }
            }
            //listTodo()
            saveTodos()
        })
    })
}

// $(document).on('change', "input[name='checkbox-name']", function (e) {
//     if ($(this).prop('checked')) {
//       $(this).attr('checked', 'checked');
//     } else {
//       $(this).removeAttr('checked');
//     }
    
//     var list = $("#todo-items").html();
//     localStorage.setItem('todes', list);
//     return false;
//   });