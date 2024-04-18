document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-todo");
  const inputField = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  addButton.addEventListener("click", () => {
    const todoText = inputField.value.trim();
    if (todoText) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <span class="flex items-center p-2 bg-white border-b border-gray-200">
          ${todoText}
          <button class="ml-auto text-green-500 hover:text-green-700">
            <i class="fas fa-check"></i>
          </button>
          <button class="text-red-500 hover:text-red-700">
            <i class="fas fa-trash"></i>
          </button>
        </span>
      `;
      todoList.appendChild(listItem);
      inputField.value = ""; // Clear the input field
    }
  });

  // Additional logic for marking items as complete and deleting items will go here
});
