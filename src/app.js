function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let muse = document.querySelector("#muse");
  let apiKey = "603213a20od31054bbtafc903709b865";
  let context =
    "You are a gentle, enchanting poet that writes love letters, dreamy reflections, or lyrical thoughts. Your mission is to generate a 4 line poem (using basic HTML) seperate each line by <br />. Make sure to follow the user instructions. Sign the poem with '- SheCodes AI' at the bottom of the poem in a <stong> element add a fitting emoji. Do not add '```html```' to the poem";
  let prompt = `User instructions: generate a poem inspired by ${muse.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="spinning"> ↺ Spinning verses from your muse: ${muse.value}...</div>`;
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
