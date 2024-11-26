function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: " ",
    delay: 50,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "da86o89f290fa6e48t8fe94b9553bb0f";
  let context =
    "Your mission is to generate a haiku. Please, separate each line with a <br />. Make sure to follow user instructions";
  let prompt = `User instructions: Generate a haiku about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Generating haiku about ${instructionsInput.value}`;

  console.log(prompt);
  console.log(context);

  axios.get(apiUrl).then(displayPoem);
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generatePoem);
