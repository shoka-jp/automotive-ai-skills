// Progressive enhancement: the sample stays readable/copyable without JS.
for (const [buttonId, fieldId, statusId] of [
  ['copy-prompt', 'sample-prompt', 'copy-status'],
  ['copy-handover', 'sample-handover', 'handover-status'],
]) {
  const button = document.getElementById(buttonId);
  const field = document.getElementById(fieldId);
  const status = document.getElementById(statusId);
  if (!button || !field || !status) continue;
  button.hidden = false;
  button.addEventListener('click', async () => {
    button.disabled = true;
    status.textContent = '';
    try {
      await navigator.clipboard.writeText(field.value);
      status.textContent = button.dataset.success;
    } catch {
      field.focus();
      field.select();
      field.setSelectionRange(0, field.value.length);
      status.textContent = button.dataset.fallback;
    } finally {
      button.disabled = false;
    }
  });
}
