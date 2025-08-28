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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
       createPlatform(350,650,250,10,"purple")
       createPlatform(510,524,250,10,"grey")
       createPlatform(750,415,250,10,"black")
       createPlatform(1000,300,250,10,"orange");
       createPlatform(1150,200,250,10,"pink")



    // TODO 3 - Create Collectables
      createCollectable("diamond",1350,50);
      createCollectable("max",750,300,0.5,0.7);
      createCollectable("database",1015,210);

    
    // TODO 4 - Create Cannons
      createCannon("right",200,460);
      createCannon("bottom",600,400,200);
      createCannon("right",430,110);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
