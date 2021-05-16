function preload() {
}

function setup() {
         canvas = createCanvas(790, 600);
         canvas.position(240, 20);
         video = createCapture(VIDEO);
         video.hide();
}

function draw() {
         image(video, 180, 150, 260, 200);
         fill("green");
         stroke("green");
         circle(50, 50, 80);
         fill("red");
         stroke("red");
         rect(88, 35, 500, 30);

         fill("green");
         stroke("green");
         circle(600, 50, 80);
         fill("red");
         stroke("red");
         rect(35, 88, 30, 400);     
         
         fill("green");
         stroke("green");
         circle(600, 485, 80);
         fill("red");
         stroke("red");
         rect(35, 470, 526, 30);

         fill("green");
         stroke("green");
         circle(600, 485, 80);
         fill("red");
         stroke("red");
         rect(585, 87, 30, 360);

         fill("green");
         stroke("green");
         circle(50, 470, 80);
}

