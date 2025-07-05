const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const userMessage = input.value.trim();
  if (!userMessage) return;

  // Append user's message and clear input
  appendMessage("user", userMessage);
  input.value = "";

  // Show a "thinking" message and get the element so we can update it later
  const botMessageElement = appendMessage("bot", "Thinking...");

  try {
    // Send the user's message to your backend API
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "An unknown error occurred.");
    }

    const data = await response.json();

    // Update the "thinking" message with the actual reply from Gemini
    botMessageElement.textContent = data.reply;
  } catch (error) {
    // Display any errors in the chat box
    console.error("Error fetching chat response:", error);
    botMessageElement.textContent = `Sorry, an error occurred: ${error.message}`;
  }
});

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
  return msg;
}
