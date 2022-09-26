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
    command.push(document.getElementById("options").value);
    document.getElementById("options").value = "";
    if(command?.length === 5){
      command.filter((co,index)=>{
        return index !== 2 && co
      })
    }
    command?.map(co=>{
      document.getElementById("container-commands").innerHTML +=" <p class='command'>>>"+co+"</p>"
    })
    console.log(command)
  }
}
