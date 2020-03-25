function createItem(value) {
    let newItem = document.createElement("li");
    let itemText = document.createElement("p");
    itemText.innerText = value;

    let buttonDiv = document.createElement("div");
    buttonDiv.appendChild(addCheck());
    buttonDiv.appendChild(addDelete());

    newItem.appendChild(itemText);
    newItem.appendChild(buttonDiv);

    document.querySelector(".results > ul").appendChild(newItem);
    document.querySelector("input").value = "";
}

function addCheck() {
    let buttonCheck = document.createElement("button");
    buttonCheck.innerText = "check";
    buttonCheck.classList.add("check");
    return buttonCheck;
}

function addDelete() {
    let buttonDelete = document.createElement("button");
    buttonDelete.innerText = "delete";
    buttonDelete.classList.add("delete")
    return buttonDelete;
}

function setEvent() {
    document.addEventListener("submit", (event) => {
        event.preventDefault();
        if (document.querySelector("input") != "") {
            createItem(document.querySelector("input").value);
            document.querySelector("input").value = "";
        }
    });
    document.querySelector("ul").addEventListener("click", (event) => {
        if (event.target.matches(".check")) {
            if (event.target.parentNode.parentNode.classList.contains("checked")) {
                event.target.parentNode.parentNode.classList.remove("checked");
            } else {
                event.target.parentNode.parentNode.classList.add("checked");
            }
        } else if (event.target.matches(".delete")) {
            event.target.parentNode.parentNode.remove();
        }
    });
}

function init() {
    setEvent();
}

init();