class AudioManager {
  constructor (path) {
    const audios = {};
    path = path||'';
    /*  */
    this.loadAudio = function () {
      let count = 0;
      let loaded = 0;
      let error = false;
      let all = document.querySelectorAll(".note");
      /*  */
      for (let i = 0; i < all.length; i++) {
        count++;
        let noteName = all[i].getAttribute("data-note");
        this.getAudio(noteName);
      }
    };
    /*  */
    this.getAudio = function (name, onloaded, onerror) {
      let audio = audios[name];
      if (!audio) {
        audio = CreateAudio(path, name, onloaded, onerror);
        audios[name] = audio;
      } else if (onloaded) {
        onloaded(audio);
      }
      /*  */
      return audio;
    };
  }
}

var CreateAudio = function (path, name, onloaded, onerror) {
  const audio = new Audio();
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
