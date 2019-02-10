/*var cx = 200, // center x
  cy = 200, // center y
  notches = 7, // num. of notches
  radiusO = 100, // outer radius
  radiusI = 20, // inner radius
  taperO = 50, // outer taper %
  taperI = 35, // inner taper %
  // pre-calculate values for loop

  pi2 = 2 * Math.PI, // cache 2xPI (360deg)
  angle = pi2 / (notches * 2), // angle between notches
  taperAI = angle * taperI * 0.005, // inner taper offset (100% = half notch)
  taperAO = angle * taperO * 0.005, // outer taper offset
  a = angle, // iterator (angle)
  toggle = false; // notch radius level (i/o)

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(cx, cy, radiusO, 0, pi2);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.globalCompositeOperation = "destination-out";
//ctx.moveTo(cx - radiusO + radiusI, 225);
ctx.arc(cx - radiusO, cy, radiusI, 0, pi2);
ctx.rotate((45 * Math.PI) / 180);
ctx.fill();
ctx.stroke();*/

var canvas = document.getElementById("myCanvas");
//var ctx = canvas.getContext("2d");
var stagex = 100;
var stagey = 100;
var ctx;
var speedx = 5;
var speedy = 5;
var WIDTH;
var HEIGHT;

function init() {
  ctx = canvas.getContext("2d");
  WIDTH = canvas.WIDTH;
  HEIGHT = canvas.HEIGHT;
  return setInterval(draw(), 10);
}
//return setInterval(drawStar(stagex, stagey, 50, 110, 40), 10);

function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
  var rot = (Math.PI / 2) * 3;
  var x = cx;
  var y = cy;
  var step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (var i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  //ctx.lineWidth = 5;
  //ctx.strokeStyle = "blue";
  ctx.stroke();
  ctx.fillStyle = "black";
  ctx.fill();
  stagex += 1;
  stagey += 1;
}
function circle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}
function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function draw() {
  ctx.clear();
  //ctx.drawStar(stagex, stagey, 10, 100, 100);
  ctx.circle(stagex, stagey, 10);

  stagex += speedx;
  stagey += speedy;
}
init();
//ctx.rotate(0.5);
/*ctx.save(); // saves the coordinate system
ctx.translate(250, 50); // now the position (0,0) is found at (250,50)
ctx.rotate(0.3); // rotate around the start point of your line
ctx.moveTo(0, 0); // this will actually be (250,50) in relation to the upper left corner
ctx.lineTo(0, 200); // (250,250)
ctx.stroke();
ctx.restore(); // restores the coordinate system back to (0,0)



ctx.fillStyle = "#FF1C0A";
ctx.beginPath();
ctx.arc(250, 250, 5, 0, Math.PI * 2, true);
ctx.closePath();
ctx.fill();*/
