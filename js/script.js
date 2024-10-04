document.addEventListener("DOMContentLoaded", function () {
  const colorPopup = document.getElementById("colorPopup");
  const confirmationMessage = document.getElementById("confirmationMessage");
  if (colorPopup) {
    colorPopup.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  const colorOptions = document.querySelectorAll(".colorOption");

  colorOptions.forEach(function (colorOption) {
    colorOption.addEventListener("click", function () {
      const selectedColor = this.dataset.color;
      updateColor(selectedColor);
      colorPopup.style.display = "none";
      document.body.style.overflow = "auto";
      showConfirmationMessage(selectedColor);
    });
  });

  function updateColor(color) {
    document.body.style.setProperty("--myColor", color);
  }
  function showConfirmationMessage(selectedColor) {
    const colorMessages = {
      "#00ff00": "Some kind of blue",
      "#3383FF": "Great choice!",
      "#FF0000": "Danger Mode!",
      "#f39c12": "Juicy Orange!",
      "#DFFF33": "The mangoO!",
      "#1abc9c": "Sky is the Limit!",
      "##bc8f8f": "Rosy Brown",
      "#d35400": "The Rusty Red!",
      "#27ae60": "Soft Green!",
      "#FFC0CB": "Soft Pink!",
      "#FF10F0": "Cyber Pink!",
      "#ffa07a": "Wah! You chose my favorite color!",
      "#90ee90": "Wah! light Green",
    };

    const message = colorMessages[selectedColor];

    confirmationMessage.textContent = message || "Good choice!";
    confirmationMessage.style.display = "block";

    setTimeout(function () {
      confirmationMessage.style.display = "none";
    }, 1500);
  }
});
