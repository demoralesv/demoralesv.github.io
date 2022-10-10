const command = [];
let numberCommand = 0;
let page = 0;

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
  if (event.keyCode === 13) {
    event.preventDefault();
    command.push(document.getElementById("options").value);
    displayOptiontsMenu(document.getElementById("options").value);
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
      '<p class="command">>><input type="text" id="options" class="input-options" onkeydown="enterCommand(event)"/></p>';
    document.getElementById("options").focus();
    numberCommand = 0;
  }

  if (command?.length > 0) {
    if (event.keyCode === 38) {
      console.log("sube");
      numberCommand++;
      if (numberCommand > command?.length) {
        numberCommand = 0;
        document.getElementById("options").value = command[0];
      } else {
        document.getElementById("options").value = command[numberCommand - 1];
      }
    }

    if (event.keyCode === 40) {
      console.log("baja");
      numberCommand--;
      if (numberCommand < 0) {
        numberCommand = command?.length;
        document.getElementById("options").value = "";
      } else {
        document.getElementById("options").value = command[numberCommand];
      }
    }
  }
};

/*
0 = menu
1 = agenda
2 = Contacto
3 = Galeria
4 = help
*/
const displayOptiontsMenu = (option) => {
  if (page === 0) {
    if ("A" === option) {
      document.getElementById("page1").style.display = "none";
      document.getElementById("page2").style.display = "block";
      page = 1;
    }
  }
  if (page === 1) {
    if ("M" === option) {
      document.getElementById("page2").style.display = "none";
      document.getElementById("page1").style.display = "block";
      page = 0;
    }
  }
};
