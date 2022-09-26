const command = [];

window.onload = async () => {
  document.getElementById("options").focus();
  const form = document.getElementById("options");

  form.addEventListener("focusout", (event) => {
    document.getElementById("options").focus();
  });
};

const preventFocus = (event) => {
  event.preventDefault();
  document.getElementById("options").focus();
};

const enterCommand = (event) =>{
  if(e.keyCode === 13){
    e.preventDefault(); // Ensure it is only this code that runs

    alert("Enter was pressed was presses");
  }
}
