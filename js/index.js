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
  if(event.keyCode === 13){
    event.preventDefault(); // Ensure it is only this code that runs
    command.push(document.getElementById("options").value)
    //container-commands
    console.log(command)
  }
}
