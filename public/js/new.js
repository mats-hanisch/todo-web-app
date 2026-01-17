const closeBtn = document.getElementById("closeBtn");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoInput = document.getElementById("todoInput");


function redirectToTodosSite() {
    window.location.href = "/todos";
}


closeBtn.addEventListener("click", () => {
    // redirect to /todos
    redirectToTodosSite();
});

addTodoBtn.addEventListener("click", async () => {
    // get value from input
    const todoText = todoInput.value.trim();

    if (!todoText) {
        // no value, prompt user to enter some
        alert("Please enter todo text!");
        return;
    }
    
    // post todo
    const res = await fetch("api/todos/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: todoText })
    });
    
    if (res.ok) {
        // success, redirect to /todos
        redirectToTodosSite();
    }
    
    todoInput.value = "";
});
