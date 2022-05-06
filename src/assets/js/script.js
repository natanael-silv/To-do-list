
const arrowbtn = document.querySelector(".arrow");
const text = document.querySelector(".text");
const plusbtn = document.querySelector(".plus-btn");

let taskarray = [];
let taskarray2 = [];
const createItem = (tasksvalues) => {
  const item = document.createElement("div");
  item.classList.add("task");
  item.innerHTML = `<span class="circle"></span>
    <p class="result">${
      tasksvalues.charAt(0).toUpperCase() + tasksvalues.slice(1)
    }</p>`;

  document.querySelector(".grid1").appendChild(item);
  completedtask(item);
};
const limparTarefas = () => {
  const todoList = document.querySelector(".grid1");

  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
};
const atualizarTela = () => {
  limparTarefas();

  taskarray.forEach((el) => createItem(el));
};

arrowbtn.addEventListener("click", () => {
  const tasksvalue = document.querySelector("#newtask");
  const grids = document.querySelector(".grid1 > .task");

  taskarray.push(tasksvalue.value);
  taskarray.sort();
  atualizarTela();

  console.log(taskarray);
});

const completedtask = (item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("checked");
    if (item.classList.contains("checked")) {
      const index = e.target;
      taskarray.indexOf(index);
      taskarray.pop(index);

      console.log(taskarray);
      document.querySelector(".text").style.visibility = "visible";
      item.classList.remove("task");
      item.classList.add("taskcomplete");
      const circle2 = document.querySelector(".taskcomplete > .circle");
      circle2.classList.remove("circle");
      circle2.classList.add("circle2");

      document.querySelector(".grid2").appendChild(item);
    } else {
      console.log(taskarray);
      item.classList.remove("taskcomplete");
      item.classList.add("task");
      const circle2 = document.querySelector(".task > .circle2");
      circle2.classList.remove("circle2");
      circle2.classList.add("circle");

      document.querySelector(".grid1").appendChild(item);
    }
  });
};

plusbtn.addEventListener('click', () => {
  const menu = document.querySelector('.menu')
  menu.classList.toggle('active')
  const inputwrap = document.querySelector('.inputwrapper')
  inputwrap.classList.toggle('active2')
  console.log("deu certo")
})

arrowbtn.addEventListener("click", () => {
  const menu2 = document.querySelector('.menu')
  menu2.classList.remove('active')
  const inputwrap2 = document.querySelector('.inputwrapper')
  inputwrap2.classList.remove('active2')
})

