function displayPoem(response) {
  console.log('poem generates');
  new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: '',
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector('#user-instructions');
  let apiKey = 'ce7c3ee7eo0a7079t0e5079cd0efcb43';
  let context =
    'You are a romantic poem expert and love to write short poems.  Your mission is to generate a 4 line poem in basic HTMl and seperate each line with a <br />.  Make sure to follow the user instructions. Do not incluse a title or ```html``` to the poem. Sign the poem with "Saffron\'s AI" inside a <strong> element';
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector('#poem');
  poemElement.classList.remove('hidden');
  poemElement.innerHTML = `<div class="generating">⏳ Generating the poem for you about ${instructionsInput.value}...</div>`;

  console.log('Generating poem');
  console.log(`prompt is ${prompt}`);
  console.log(`prompt: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector('#poem-generator-form');
poemFormElement.addEventListener('submit', generatePoem);
