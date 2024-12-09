function tellJoke(response) {
  new Typewriter("#joke", {
    delay: 50,
    cursor: "",
  })
    .typeString(response.data.answer)
    .start();
}

function callJoke() {
  let key = "24f34fb24eae01907fa1460264toc5b2";
  let context =
    "Respond with a funny joke, that is short and family friendly. In your response, do not acknowledge the prompt, reply with the joke only. Each time provide a different joke.";
  let prompt = "Tell me a unique 'dad joke'!";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  axios.get(apiUrl).then(tellJoke);
}

let buttonElement = document.querySelector("#button");
buttonElement.addEventListener("click", callJoke);
