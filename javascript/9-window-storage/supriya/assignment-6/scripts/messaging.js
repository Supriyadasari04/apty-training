"use strict";

const iframe = document.getElementById("iframe");
const messageInput = document.getElementById("message-input");
const sendMessageBtn = document.getElementById("send-message");
const receivedMessage = document.getElementById("received-message");

sendMessageBtn.addEventListener("click", () => {
  iframe.contentWindow.postMessage(messageInput.value, "*");
});

window.addEventListener("message", (e) => {
  receivedMessage.textContent = "Iframe says: " + e.data;
});
