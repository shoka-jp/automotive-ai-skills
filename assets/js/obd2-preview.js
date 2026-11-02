// Progressive enhancement: the sample stays readable/copyable without JS.
const button = document.querySelector('#copy-prompt');
const prompt = document.querySelector('#sample-prompt');
const status = document.querySelector('#copy-status');

if (button && prompt && status) {
  button.hidden = false;
  button.addEventListener('click', async () => {
    button.disabled = true;
    status.textContent = '';
    try {
      await navigator.clipboard.writeText(prompt.value);
      status.textContent = button.dataset.success;
    } catch {
      prompt.focus();
      prompt.select();
      prompt.setSelectionRange(0, prompt.value.length);
      status.textContent = button.dataset.fallback;
    } finally {
      button.disabled = false;
    }
  });
}
