document.addEventListener("DOMContentLoaded", function () {
  // Getting references to the elements
  const addItemBtn = document.getElementById("add-btn");
  const searchBtn = document.getElementById("search-btn");
  const newItemInput = document.getElementById("new-item");
  const searchInput = document.getElementById("search");
  const todoList = document.getElementById("todo-list");
  // Adding event listeners for the buttons
  addItemBtn.addEventListener("click", addItem);
  searchBtn.addEventListener("click", searchItem);
  // Function to add a new item to the list
  function addItem() {
    const itemText = newItemInput.value.trim();
    if (itemText === "") return; // Don't add empty items
    // Creating new list item elements
    const li = document.createElement("li");
    const label = document.createElement("label");
    label.textContent = itemText;
    const actions = document.createElement("div");
    actions.className = "todo-actions";
    const editBtn = document.createElement("button");
    editBtn.innerHTML = '<i class="fas fa-edit"></i>'; // Edit button with icon
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "✖"; // Delete button with cross mark
    // Appending buttons to the actions div
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(label);
    li.appendChild(actions);
    todoList.appendChild(li); // Adding the new item to the list
    newItemInput.value = ""; // Clear the input field
    // Adding event listeners for the edit and delete buttons
    editBtn.addEventListener("click", () => editItem(label));
    deleteBtn.addEventListener("click", () => deleteItem(li));
  }
  // Function to search items in the list
  function searchItem() {
    const searchText = searchInput.value.toLowerCase();
    const items = todoList.getElementsByTagName("li");
    Array.from(items).forEach((item) => {
      const itemText = item.firstChild.textContent.toLowerCase();
      item.style.display = itemText.includes(searchText) ? "flex" : "none"; // Show/hide items based on search
    });
  }
  // Function to edit an item
  function editItem(label) {
    const newText = prompt("Edit item:", label.textContent);
    if (newText !== null) {
      label.textContent = newText; // Update the item text
    }
  }
  // Function to delete an item
  function deleteItem(li) {
    todoList.removeChild(li); // Remove the item from the list
  }
});
