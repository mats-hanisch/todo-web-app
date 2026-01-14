const closeBtn = document.getElementById("closeBtn");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoInput = document.getElementById("todoInput");

// Close Button
closeBtn.addEventListener("click", () => {
    // Einfach zur Startseite oder zurück
    window.location.href = "/todos";
});

// Hinzufügen Button
addTodoBtn.addEventListener("click", async () => {
    const todoText = todoInput.value.trim();

    if (!todoText) {
        alert("Please enter todo text!");
        return;
    }
    
    const res = await fetch("api/todos/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: todoText })
    });
    
    if (res.ok) {
        window.location.href = "/todos";
    }
    
    todoInput.value = "";
});
