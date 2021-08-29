let app = document.getElementById("app");

let typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("Hello World!")
  .pauseFor(2500)
  .deleteAll()
  .typeString("I am a Web developer and designer.")
  .pauseFor(2500)
  .start();
