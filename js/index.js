window.onload = async () => {
  console.log("ahora si");
  document.getElementById("options").focus();
};

const preventFocus = (event) => {
  event.preventDefault();
  document.getElementById("options").focus();
};
