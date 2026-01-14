const cardMainText = document.querySelector(".card-main-text");


const todos = JSON.parse(document.body.dataset.todos);
let currentTodoIndex = 0; // by default (server default)


function redirectToTodoAddSite() {
    window.location.href = "/new";
}

function onAddBtnClick() {
    redirectToTodoAddSite();
}

async function onDoneBtnClick() {
    await fetch("/api/todos/todo", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ todoId: todos[currentTodoIndex].id })
    });
    
    // reload site to show changes
    window.location.reload();
}

function onCardDivClick() {
    if (todos.length === 0) {
        redirectToTodoAddSite();
    }
    
    // increment index
    currentTodoIndex++;
    
    // bounds checks
    if (currentTodoIndex >= todos.length) {
        currentTodoIndex = 0;
    }
    
    // update card text
    cardMainText.textContent = todos[currentTodoIndex].text;
}

document.addEventListener("click", async (e) => {  
    if (!e.target) {
        return;
    }
    
    if (e.target.id === "addBtn") {
        onAddBtnClick();
        return;
    }
    
    if (e.target.id === "doneBtn") {
        await onDoneBtnClick();
        return;
    }
    
    if (e.target.id == "cardDiv") {
        onCardDivClick();
        return;
    }
});
