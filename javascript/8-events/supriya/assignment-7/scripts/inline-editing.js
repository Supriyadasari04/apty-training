"use strict";

const editableDiv = document.getElementById("editable");

const observer = new MutationObserver(() => {
  const textarea = document.querySelector("textarea");
  if (textarea) {
    textarea.addEventListener("blur", () => {
      editableDiv.innerHTML = textarea.value + ' <span class="icon">✏️</span>';
    });
  } else {
    editableDiv.addEventListener("click", () => {
      const currentText = editableDiv.textContent.replace("✏️", "").trim();
      editableDiv.innerHTML = `<textarea>${currentText}</textarea>`;
      document.querySelector("textarea").focus();
    });
  }
});

observer.observe(editableDiv, { childList: true });
