function setup() {
  createCanvas(500, 500);

  for(let column=0; column<5; column=column++){
    for(let row=0; row<5; row= row++){
      x=column * 100;
      y=row * 100;
      square(x,y,100)
    }
  }




}

function draw() {
  background(220);
}
