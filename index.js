let app = document.getElementById("app");

let typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("I am a Web developer")
  .pauseFor(2500)
  .deleteAll()
  .typeString("and a designer")
  .pauseFor(2500)
  .start();
