const copyButton = document.querySelector("[data-copy-phone]");

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const phoneNumber = "0552 004 21 90";

    try {
      await navigator.clipboard.writeText(phoneNumber);
      copyButton.textContent = "Numara kopyalandı";
      copyButton.disabled = true;

      window.setTimeout(() => {
        copyButton.textContent = "Numaramızı Kopyala";
        copyButton.disabled = false;
      }, 1800);
    } catch {
      copyButton.textContent = phoneNumber;
    }
  });
}
