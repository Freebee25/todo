let todoName = document.getElementById("todo-name");
let btnsimpan = document.getElementById("btn-simpan");
btnsimpan.addEventListener("click", function () {
  if (todoName.value == "") {
    alert("todo must not be empty");
  } else {
    let todoContainer = document.querySelector(".list-group");
    let todoHTML = todoContainer.innerHTML;
    todoHTML += `<li class="list-group-item d-flex justify-content-between">
    <div>
    <input
      class="form-check-input me-1"
      type="checkbox"
      id="firstCheckbox"
    />
    <label class="form-check-label" for="firstCheckbox"
      ><span>${todoName.value}</span></label>
    </div>
    <button class="badge border-0 bg-danger btn-hapus">X</button>
  </li>`;
    todoContainer.innerHTML = todoHTML;
    todoName.value = "";
    todoName.focus();

    let checkTodo = document.querySelectorAll(".form-check-input");
    for (let i = 0; i < checkTodo.length; i++) {
      const input = checkTodo[i];
      input.addEventListener("change", function () {
        let todoSpan = input.nextElementSibling.querySelector("span");
        todoSpan.classList.toggle("text-decoration-line-through");
      });
    }
    let btnhapus = document.querySelectorAll(".btn-hapus");
    for (let x = 0; x < btnhapus.length; x++) {
      const hapus = btnhapus[x];
      hapus.addEventListener("click", function () {
        this.parentElement.remove();
      });
    }
  }
});
