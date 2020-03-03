var CreateAudio = function (path, name, onloaded, onerror) {
  var audio = new Audio();
  /*  */
  audio.addEventListener("canplaythrough", function () {
    if (onloaded) onloaded(audio);
  });
  /*  */
  audio.addEventListener("error", function () {
    if (onerror) onerror(audio);
    if (config.LOG) console.error(" > Error loading audio", audio.src);
  });
  /*  */
  if (name) audio.src = path + "/" + name + ".mp3";
  else if (config.LOG) console.error(" > Error src", name);
  /*  */
  return audio;
};

var AudioManager = function (path) {
  var audios = {};
  path = path || '';
  /*  */
  this.loadAudio = function () {
    var count = 0, loaded = 0, error = false;
    var all = document.querySelectorAll(".note");
    /*  */
    for (var i = 0; i < all.length; i++) {
      count++;
      var noteName = all[i].getAttribute("data-note");
      this.getAudio(noteName);
    }
  }
  /*  */
  this.getAudio = function (name, onloaded, onerror) {
    var audio = audios[name];
    if (!audio) {
      audio = CreateAudio(path, name, onloaded, onerror);
      audios[name] = audio;
    } else if (onloaded) onloaded(audio);
    /*  */
    return audio;
  };
};
