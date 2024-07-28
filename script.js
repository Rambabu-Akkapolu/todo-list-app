document.addEventListener("DOMContentLoaded", function () {
  const addItemBtn = document.getElementById("add-btn");
  const searchBtn = document.getElementById("search-btn");
  const newItemInput = document.getElementById("new-item");
  const searchInput = document.getElementById("search");
  const todoList = document.getElementById("todo-list");

  addItemBtn.addEventListener("click", addItem);
  searchBtn.addEventListener("click", searchItem);

  function addItem() {
    const itemText = newItemInput.value.trim();
    if (itemText === "") return;

    const li = document.createElement("li");
    const label = document.createElement("label");
    label.textContent = itemText;
    const actions = document.createElement("div");
    actions.className = "todo-actions";
    const editBtn = document.createElement("button");
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "✖";

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(label);
    li.appendChild(actions);
    todoList.appendChild(li);

    newItemInput.value = "";

    editBtn.addEventListener("click", () => editItem(label));
    deleteBtn.addEventListener("click", () => deleteItem(li));
  }

  function searchItem() {
    const searchText = searchInput.value.toLowerCase();
    const items = todoList.getElementsByTagName("li");
    Array.from(items).forEach((item) => {
      const itemText = item.firstChild.textContent.toLowerCase();
      item.style.display = itemText.includes(searchText) ? "flex" : "none";
    });
  }

  function editItem(label) {
    const newText = prompt("Edit item:", label.textContent);
    if (newText !== null) {
      label.textContent = newText;
    }
  }

  function deleteItem(li) {
    todoList.removeChild(li);
  }
});
