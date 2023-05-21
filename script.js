const apiKey = "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";
const apiUrl = "https://api.openai.com/v1/chat/completions";

async function sendMessage(message) {
  const data = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: message }],
  };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  });

  const json = await response.json();
  return json.choices[0].message.content;
}

// Example usage

const input = document.getElementById("search");
const button = document.getElementById("button");
const para=document.getElementById('text');
button.addEventListener("click", async () => {
  const inputText = input.value;
  
//   const response=await sendMessage(
//     `According to the data till january 2021, tell the potential renewable energy source of ${inputText}  and how much is it produced till january 2021`
//   );
const response=await sendMessage(`ideal sources of renewable energy in ${inputText} and amount of it produced.`)
  para.innerText=response;
});
