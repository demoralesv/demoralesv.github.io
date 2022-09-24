window.onload = async () => {
  console.log("prueba");
};

const preventFocus = (event) => {
  event.preventDefault();
  event.relatedTarget.focus();
};
