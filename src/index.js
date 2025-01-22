function generatePoem(event) {
  event.preventDefault();

  new Typewriter('#poem', {
    strings: 'Were all stars to disappear or die',
    autoStart: true,
    delay: 1,
    cursor: '',
  });
}

let poemFormElement = document.querySelector('#poem-generator-form');
poemFormElement.addEventListener('submit', generatePoem);
