//BEGIN LIBRARY CODE
var x = 150;
var y = 150;
var tx = 290;
var ty = 152.5;
var wx = 285;
var wy = 150;
var dx = 2;
var dy = 4;
var WIDTH;
var HEIGHT;
var ctx;
var canvas = document.getElementById("myCanvas");
var st1 = new Component(x, y, 50, 100, 80, "red");
var st2 = new Component(tx, ty, 25, 50, 30, "blue");
//var st3 = new Component(wx, wy, , 40, 30, "orange");

function init() {
  ctx = canvas.getContext("2d");
  WIDTH = 700;
  HEIGHT = 500;
  return setInterval(draw, 10);
}

function circle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}
function Component(cx, cy, spikes, outerRadius, innerRadius, color) {
  this.cx = cx;
  this.cy = cy;
  //this.spikes = spikes;
  //this.outerRadius = outerRadius;
  //this.innerRadius = innerRadius;
  this.angle = 0;
  this.make = () => {
    var rot = (Math.PI / 2) * 3;
    var qx = cx;
    var qy = cy;
    var step = Math.PI / spikes;
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (var i = 0; i < spikes; i++) {
      qx = cx + Math.cos(rot) * outerRadius;
      qy = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(qx, qy);
      rot += step;

      qx = cx + Math.cos(rot) * innerRadius;
      qy = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(qx, qy);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
  };
  this.rotate = () => {
    ctx.save();
    ctx.translate(this.cx, this.cy);
    ctx.rotate(this.angle);
    ctx.translate(-this.cx, -this.cy);
    this.make();

    //ctx.fillStyle = color;
    //ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
    ctx.restore();
  };
}

function rect(x, y, w, h) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.closePath();
  ctx.fill();
}

function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

//END LIBRARY CODE

function draw() {
  clear();
  //drawStar(x, y, 10, 50, 10);
  st1.angle += (0.5 * Math.PI) / 180;
  st2.angle -= (1 * Math.PI) / 180;
  st1.rotate();
  st2.rotate();
  //circle(x, y, 5);
  //circle(tx, ty, 5);
  //Wctx.translate(-x, -y);

  //DrawStar(tx, ty, 10, 50, 10);
  //ctx.translate(tx, ty);
  //ctx.rotate((0.5 * Math.PI) / 180);
  //ctx.translate(-tx, -ty);

  //x += dx;
  //y += dy;
}

init();
