function showMessage() {
    const messageBox = document.getElementById("message-box");
    messageBox.classList.remove("hidden");
    setTimeout(() => {
      messageBox.style.opacity = "1";
    }, 50);
  }
  