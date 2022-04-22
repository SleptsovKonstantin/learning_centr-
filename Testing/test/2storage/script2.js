let allTask = JSON.parse(localStorage.getItem('tasks')) || [];
let valueInput = "";

window.onload = init = () => {
  input = document.getElementById("add-task");
  input.addEventListener("change", updateValue);
 };

const onClickButton = () => {
  allTask.push({
    text: valueInput
  });
  sessionStorage.setItem('tasks', JSON.stringify(allTask));
  valueInput = "";
  input.value = "";
};

const updateValue = (event) => {
  valueInput = event.target.value;
};

const deleteArr = () => {
  sessionStorage.clear('tasks', JSON.stringify(allTask));
} 