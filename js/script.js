document.addEventListener('DOMContentLoaded', () => {
  const inputBox = document.querySelector('input[name="input-box"]');
  const sendButton = document.querySelector('button[name="send-button"]');
  const messageArea = document.querySelector('.message-area');

  sendButton.addEventListener('click', async () => {
    const message = inputBox.value.trim();
    if (!message) return;

    // Add user message to the chat
    const userMsg = document.createElement('div');
    userMsg.className = 'user-message';
    userMsg.textContent = message;
    messageArea.appendChild(userMsg);
    inputBox.value = '';

    // Send message to backend
    try {
      const response = await fetch('http://localhost:3000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message })
      });

      const data = await response.json();

      // Add bot reply to chat
      const botMsg = document.createElement('p');
      botMsg.className = 'bot-message';
      botMsg.textContent = data.botReply || "Sorry, something went wrong.";
      messageArea.appendChild(botMsg);

      // Scroll to bottom
      messageArea.scrollTop = messageArea.scrollHeight;

    } catch (err) {
      console.error('Fetch error:', err);
    }
  });
});