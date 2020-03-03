document.addEventListener("click", function () {
  sidebar.style.right = "-305px";
  transparentShadow.style.display = "none";
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 191) e.preventDefault();
  /*  */
  if (e.ctrlKey) {
    if (e.keyCode === 39) config.app.methods.compute.handle.position(4);
    else if (e.keyCode === 37) config.app.methods.compute.handle.position(1);
  } else if (e.keyCode === 39) config.app.methods.compute.handle.position(3);
  else if (e.keyCode === 37) config.app.methods.compute.handle.position(2);
});

window.addEventListener("resize", function (e) {
  config.app.methods.reset.piano();
  config.app.load(true);
  /*  */
  if (config.resize.timeout) window.clearTimeout(config.resize.timeout);
  config.resize.timeout = window.setTimeout(function () {
    config.storage.write("width", window.innerWidth || window.outerWidth);
    config.storage.write("height", window.innerHeight || window.outerHeight);
  }, 1000);
});

window.addEventListener("load", config.load, false);
document.addEventListener("mouseup", config.app.methods.drag.stop, false);
document.addEventListener("mousemove", config.app.methods.drag.start, false);
