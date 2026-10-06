$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(1350, 400, 50, 50, "red");
    createPlatform(1050, 520, 50, 60, "purple");
    createPlatform(950, 615, 50, 60, "blue");
    createPlatform(90, 400, 80, 20, "pink");
    createPlatform(700, 475, 265, 35);
    createPlatform(300, 415, 200, 20, "yellow", 200, 500, 1, 20, 790, 0);
    createPlatform(250, 470, 100, 40, "orange")
    // TODO 3 - Create Collectables

    createCollectable("max", 900, 500);
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("grace", 100, 350);
    // TODO 4 - Create Cannons
    createCannon("right", 300, 550);
    createCannon("bottom", 1200, 100);
    createCannon("left", 115, 550);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
