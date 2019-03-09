var words = "hello its me\n ritik how are you\n its cold out today\n lets stay inside room only".split(/\s+/g);

var canvas = document.querySelector("canvas"),
    canvas2 = canvas.cloneNode(),
    context = canvas.getContext("2d"),
    context2 = canvas2.getContext("2d");
    width = canvas.width,
    height = canvas.height;

context.font = context2.font = "300px Helvetica Neue";
context.textAlign = context2.textAlign = "center";
context.lineJoin = context2.lineJoin = "round";

(function next() {
  var i = 0.5, text = words.shift();
  context.clearRect(0, 0, width, height);
  context.fillText(text, width / 2, height / 2 + 100);
  var timer = d3.timer(function() {
    if (++i > text.length * 20) return timer.stop(), next();
    context2.save();
    context2.clearRect(0, 0, width, height);
    context2.lineWidth = i & 1 ? i * 5 + 3 : i * 5;
    context2.strokeStyle = i & 1 ? "white" : "black";
    context2.strokeText(text, width / 2, height / 2 + 100);
    context2.restore();
    context2.drawImage(canvas, 0, 0);
    context.drawImage(canvas2, 0, 0);
  });
})();
