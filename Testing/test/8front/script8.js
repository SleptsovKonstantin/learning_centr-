let flag = false; 

window.onload = init = () => {
  const checkbox = document.getElementById("check");
  checkbox.onclick = () => {
    changeStatus()
  };
}

changeStatus = () => {
  flag = !flag;
  console.log(flag);
}
