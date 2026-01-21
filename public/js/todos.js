const cardMainText = document.querySelector(".card-content");


const todos = JSON.parse(document.body.dataset.todos);
let currentTodoIndex = 0; // by default (server default)


function redirectToTodoAddSite() {
    window.location.href = "/new";
}

function onAddBtnClick() {
    redirectToTodoAddSite();
}

async function onDoneBtnClick() {
    // get id of current top todo
    const todoId = todos[currentTodoIndex].id;
    
    // delete top todo
    await fetch(`/api/todos/${todoId}`, {
        method: "DELETE"
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


// register central click event handler
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
