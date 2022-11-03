const command = [];
let numberCommand = 0;
let page = 0;
let tableTalk = 0;

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
    if (command?.length == 3) {
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
    if (event.keyCode === 40) {
      numberCommand++;
      if (numberCommand > command?.length) {
        numberCommand = 1;
        document.getElementById("options").value = command[numberCommand - 1];
      } else {
        document.getElementById("options").value = command[numberCommand - 1];
      }
    }

    if (event.keyCode === 38) {
      numberCommand--;
      if (numberCommand < 0) {
        numberCommand = numberCommand - 1;
        document.getElementById("options").value = command[numberCommand - 1];
        return;
      } else {
        document.getElementById("options").value = command[numberCommand];
      }
    }
  }
};

/*
0 = menu
1 = agenda
2 = faq
3 = help
4 = patrocinadores
*/
const displayOptiontsMenu = (option) => {
  if (page === 0) {
    if (["A", "a"].includes(option)) {
      document.getElementById("page1").style.display = "none";
      document.getElementById("page2").style.display = "block";
      page = 1;
    }
    if (["F", "f"].includes(option)) {
      document.getElementById("page1").style.display = "none";
      document.getElementById("page3").style.display = "block";
      page = 2;
    }
    
    if (["P", "p"].includes(option)) {
      document.getElementById("page1").style.display = "none";
      document.getElementById("page5").style.display = "block";
      page = 4;
    }
  }
  if (page === 1) {
 
    if (["N", "n"].includes(option) && tableTalk === 0) {
      document.getElementById("optionstable").innerHTML =
        "<p><-- [B]</p>" + "<p>Día 2</p>" + "<p>[N] --></p>";
      tableTalk = 1;
    }
    if (["B", "b"].includes(option) && tableTalk === 1) {
      document.getElementById("optionstable").innerHTML =
        "<p><-- [B]</p>" + "<p>Día 1</p>" + "<p>[N] --></p>";
      tableTalk = 0;
    }
  }
  if (["H", "h"].includes(option)) {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none"; 
    document.getElementById("page4").style.display = "block";
    page = 3;
  }
  if (["M", "m"].includes(option)) {
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none"; 
    document.getElementById("page4").style.display = "none";
    document.getElementById("page1").style.display = "block";
    page = 0;
  }
};
