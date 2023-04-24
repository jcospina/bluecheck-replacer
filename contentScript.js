const replaceTwitterCheckmark = (customEmoji) => {
  const checkmarkIcons = document.querySelectorAll('[data-testid="icon-verified"]');

  checkmarkIcons.forEach((icon) => {
    const parent = icon.parentNode;
    if (parent) {
      const emojiSpan = document.createElement('span');
      emojiSpan.innerText = ` ${customEmoji}`;
      parent.replaceChild(emojiSpan, icon);
    }
  });
};

const applyCustomEmoji = () => {
  chrome.storage.sync.get('customEmoji', (data) => {
    const emoji = data.customEmoji || '\uD83E\uDD21';
    replaceTwitterCheckmark(data.customEmoji);
  });
};

const observer = new MutationObserver(applyCustomEmoji);
observer.observe(document.body, { childList: true, subtree: true });

applyCustomEmoji();
