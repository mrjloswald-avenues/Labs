/* Lab 3

Pay attention to the order of the TODOs! For instance, TODO 1 is actually located on line 40.
*/

let ochre = "#D3AE6F"
let prisBlue = "#44C3D4"
// let size = 10

function setup() {
  createCanvas(600, 600);
  noStroke()
}

function draw() {
  background(220);
  // TODO 2: we want the size of the shape to increase over
  //   time. We can do this by storing a value in a variable
  //   and then updating that value every time draw runs.
  //   Uncomment line 10 and line 24, then update the call
  //   to myShape to use the size variable
  myShape(mouseX,mouseY,50)
  // size += 1
  // TODO 6: uncomment the line below and comment the call
  //   to myShape above. 
  // myShape(random(width), random(height), size)
  // TODO 7: think about how we could get the shape to appear
  //   in a single random location every time we run the sketch.
  //   Update the code to implement this change. 
  // TODO 8: update the code to move the shape randomly by a
  //   little bit (+/- one pixel?) every time in draw.
}

function myShape(x,y,r) {
  fill(ochre)
  circle(x,y,r)
  fill(prisBlue)
  // const s = r/sqrt(2)
  // const h_s = s/2  
  // TODO 1: notice that we are computing the size of the square
  //   three different times each time we draw the shape. We
  //   can reduce that to one by calculating the value once and 
  //   storing it in a variable. Uncomment the lines above and
  //   replace the appropriate values below. 
  square(x-r/sqrt(2)/2, y-r/sqrt(2)/2,r/sqrt(2))
  // TODO 2: we did increase the efficiency a lot, but there's a
  //   way to increase it a little bit more through calculating
  //   value once and storing it. Any thoughts as to how?
  // TODO 4: add another shape either inside the square or outside
  //   the circle with a different color whose value is stored 
  //   as a variable (like ochre and prisBlue)
  // TODO 5: update myShape so that the variable names are color1,
  //   color2, and color3 and assign three different colors to 
  //   those values.
}

/** 
Hex Codes for the Official Avenues Colors 

#ffffff (white)
#000000 (black)
#B7B09C (ash)
#D3AE6F (ochre)
#3D68B2 (indigo)
#267355 (moss)
#44C3D4 (pristine blue)
#9796C9 (violet)
#CAC3BC (nimbus)
#C5D982 (pistachio)
#8A916A (olive)
#C17E60 (terracotta)
#F5CD64 (gold)
#C3411E (clay)
#0D9A48 (grass)
#273879 (navy)
*/
