
var myForm = document.getElementById("myForm");
var myInput = document.getElementById("myInput");
var myItem = document.getElementById("myItem");

myForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (myInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    createItem(myInput.value);
});

function createItem(inputItems) {
    var items = `<li>${inputItems} 
        <button onclick="deleteElement(this)">Delete</button>
    </li>`;

    myItem.insertAdjacentHTML("beforeend", items);

    myInput.value = "";
    myInput.focus();
}

function deleteElement(ElementToDelete) {
    ElementToDelete.parentElement.remove();
}
