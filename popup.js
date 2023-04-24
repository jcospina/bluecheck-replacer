document.getElementById('save-button').addEventListener('click', () => {
  const emojiInput = document.getElementById('emoji-input');
  const customEmoji = emojiInput.value;

  if (customEmoji) {
    chrome.storage.sync.set({ customEmoji }, () => {
      window.close();
    });
  }
});
