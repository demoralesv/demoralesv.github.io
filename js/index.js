const command = [];
let numberCommand = 0;

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

const enterCommand = (event) => {
  console.log(event.keyCode)
  if (event.keyCode === 13) {
    event.preventDefault(); // Ensure it is only this code that runs
    command.push(document.getElementById("options").value);
    document.getElementById("options").value = "";
    if (command?.length == 5) {
      command.shift();
    }
    document.getElementById("container-commands").innerHTML = "";
    command?.map((co) => {
      document.getElementById("container-commands").innerHTML +=
        " <p class='command'>>>" + co + "</p>";
    });
    document.getElementById("container-commands").innerHTML +=
      '<p class="command">>><input type="text" id="options" class="input-options" onkeypress="enterCommand(event)"/></p>';
    document.getElementById("options").focus();
    numberCommand = 0;
  }

  if (event.keyCode === 24) {
    console.log("sube")
    numberCommand++;
    if (numberCommand == command?.length - 1) {
      numberCommand = 0;
      document.getElementById("options").value = command[0];
    } else {
      document.getElementById("options").value = command[numberCommand];
    }
  }

  if (event.keyCode === 25) {
    console.log("baja")
    numberCommand--;
    if (numberCommand === 0) {
      numberCommand = 4;
      document.getElementById("options").value = command[command.length - 1];
    } else {
      document.getElementById("options").value = command[numberCommand];
    }
  }
};
