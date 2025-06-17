function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "The flowers spoke in colours no voice could name.",
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
