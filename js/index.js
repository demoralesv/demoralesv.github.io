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

  loadFAQ();
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
    if (command?.length == 1) {
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
      document.getElementById("logo").style.display = "none";
      document.getElementById("page2").style.display = "block";
      document.getElementById("charla").style.display = "block";
      document.getElementById("taller").style.display = "none";
      document.getElementById("upper-sponsors").style.display = "flex";
      page = 1;
      tipo_evento = 1;
    }
    if (["F", "f"].includes(option)) {
      document.getElementById("page1").style.display = "none";
      document.getElementById("page3").style.display = "block";
      document.getElementById("upper-sponsors").style.display = "flex";
      page = 2;
    }

    if (["P", "p"].includes(option)) {
      document.getElementById("page1").style.display = "none";
      document.getElementById("page5").style.display = "block";
      document.getElementById("upper-sponsors").style.display = "none";
      
      /*document.getElementById("invitation").style.display = "flex";*/
      page = 4;
    }
    if(["exit","EXIT","Exit"].includes(option)){
      window.close();
    }
  }
  if (page === 1) {
    //tipo_evento 1 = Charla
    //tipo_evento 2 = Taller
    /*if (["N", "n"].includes(option) && tableTalk === 0) {
      document.getElementById("optionstable").innerHTML =
        "<p><-- [B]</p>" + "<p>D??a 2</p>" + "<p>[N] --></p>";
      tableTalk = 1;
    }
    if (["B", "b"].includes(option) && tableTalk === 1) {
      document.getElementById("optionstable").innerHTML =
        "<p><-- [B]</p>" + "<p>D??a 1</p>" + "<p>[N] --></p>";
      tableTalk = 0;
    }*/
    if (["T", "t"].includes(option)) {
      document.getElementById("charla").style.display = "none";
      document.getElementById("taller").style.display = "block";
      tipo_evento = 2;
    }
    if (["C", "c"].includes(option)) {
      document.getElementById("charla").style.display = "block";
      document.getElementById("taller").style.display = "none";
      tipo_evento = 1;
    }
    if (["B", "b"].includes(option) && tipo_evento === 1) {
      document.getElementById("ca").style.display = "none";
      document.getElementById("cb").style.display = "block";
    }
    if (["A", "a"].includes(option) && tipo_evento === 1) {
      document.getElementById("cb").style.display = "none";
      document.getElementById("ca").style.display = "block";
    }
    if (["B", "b"].includes(option) && tipo_evento === 2) {
      document.getElementById("ta").style.display = "none";
      document.getElementById("tb").style.display = "block";
    }
    if (["A", "a"].includes(option) && tipo_evento === 2) {
      document.getElementById("tb").style.display = "none";
      document.getElementById("ta").style.display = "block";
    }
  }
  if (["H", "h"].includes(option)) {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none"; 
    document.getElementById("page5").style.display = "none";
    document.getElementById("logo").style.display = "block";
    document.getElementById("page4").style.display = "block";
    document.getElementById("upper-sponsors").style.display = "flex";
    page = 3;
  }
  if (["M", "m"].includes(option)) {
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "none";
    document.getElementById("logo").style.display = "block";
    document.getElementById("page1").style.display = "block";
    document.getElementById("upper-sponsors").style.display = "flex";
    page = 0;
  }
};

const loadFAQ = () => {
  const faqs = [
    {
      question: "??Qu?? es PwnedCR?",
      answer:
        "PwnedCR es una conferencia enfocada en la aplicaci??n de la" +
        "seguridad inform??tica y ethical hacking, el evento re??ne a los" +
        "mejores profesionales dedicados a temas diversos relacionados" +
        "al resguardo de la informaci??n, el aseguramiento de las TICS y" +
        "el hacking desde un punto ??tico",
    },
    {
      question: "??Qui??n la organiza?",
      answer: "El evento es organizado por la comunidad tica DC11506, una comunidad de expertos y entusiastas en seguridad inform??tica, con un ??nico objetivo en com??n: de hacer del conocimiento colectivo el pilar del grupo y sus eventos.",
    },
    {
      question: "??Cu??l es el costo?",
      answer: "PwnedCR es un evento de la comunidad y para la comunidad, por lo que es 100% gratis! ",
    },
    {
      question: "??Ad??nde me registro?",
      answer: "Realizar el registro" + " <a href='https://www.eventbrite.com/e/pwnedcr-0x5-2022-costa-rica-tickets-461976071867' target='_blank'> aqu??</a> ",
    },
    {
      question: "??Ad??nde puedo obtener mas informaci??n? ",
      answer: "Puedes unirte a nuestro servidor de" + " <a href='https://discord.gg/caGKnVbx' target='_blank'> Discord</a> ",
    },
  ];
  document.getElementById("container-faq").innerHTML = "";
  faqs.forEach((faq) => {
    document.getElementById("container-faq").innerHTML +=
      "<div>" +
      "<a class='faq-question'>" +
      faq.question +
      " </a>" +
      "<p class='faq-answer'>" +
      faq.answer +
      "</p>" +
      "</div>";
  });
};
