window.onload = init = () => {
  input = document.getElementById("task");
  input.addEventListener("change", updateValue);
}

const updateValue = (event) => {
  valueInput = event.target.value;
  console.log(valueInput);
};