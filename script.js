const copyButton = document.querySelector(".copy-button");

copyButton?.addEventListener("click", async () => {
  const value = copyButton.dataset.copy;
  const feedback = document.querySelector(".copy-feedback");
  try {
    await navigator.clipboard.writeText(value);
    copyButton.textContent = "Copiado";
    feedback.textContent = "Comando copiado para a área de transferência.";
  } catch {
    feedback.textContent = value;
  }
  window.setTimeout(() => {
    copyButton.textContent = "Copiar";
    feedback.textContent = "";
  }, 2600);
});
