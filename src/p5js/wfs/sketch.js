
// ------------------------------------------------

M = 5.2; // mach number

var ox;
loc = 100;
ws = 5;
os = M*ws;

ss = [];

function setup() {
  can = createCanvas(600, 600);
  ox = width - loc;
  frameRate(5);
  createLoop({duration:7, framesPerSecond:5, gif:true});
}

function draw() {
  background(57);
  stroke(255);
  text("Mach = 5.2, Hyper-Sonic", 30, 30);
  text("- By XinYaanZyoy(心言自由)", width-180, height-30);
  strokeWeight(10);
  stroke(0);
  point(ox, height / 2);
  ss.push(new Bleeper(ox));
  ss.forEach(e => { e.bleep() });
  ox-=os;
}

class Bleeper {
  constructor(x){
      this.x = x;
      this.r = 10;
    }
  
  bleep(){
    noFill();
    stroke(100);
    strokeWeight(1);
    ellipse(this.x, height/2, this.r);
    this.r += 2*ws;
  }
}