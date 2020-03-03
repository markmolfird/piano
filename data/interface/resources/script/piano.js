piano.addEventListener("mouseover", function(e) {
  if (config.app.options.recongizeSequenceMove === true) {
    if (e.target.className === "anchor") e.target.className = "anchor active";
    var audio = config.app.engine.audio.manager.getAudio(e.target.getAttribute("data-note"));
    window.clearInterval(config.app.options.interval);
    audio.currentTime = 0;
    audio.volume = 1.0;
    audio.play();
  }
}, false);

piano.addEventListener("mouseout", function(e) {
  if (config.app.options.recongizeSequenceMove == true) {
    if (e.target.className == "anchor active") e.target.className = "anchor";
    var counter = 100;
    var audio = config.app.engine.audio.manager.getAudio(e.target.getAttribute("data-note"));
    config.app.options.interval = setInterval(function () {
      if (counter === 1) clearInterval(config.app.options.interval);
      else {
        counter = counter - 1;
        if (audio.volume > 0) audio.volume = audio.volume - 0.01;
      }
    }, 2);
  }
}, false);

piano.addEventListener("touchmove", function (e) {
  var touches = e.changedTouches;
  for (var i = 0; i < keyNodes.length; i++) keyNodes[i].className = "anchor";
  /*  */
  if (document.elementFromPoint(touches[0].pageX, touches[0].pageY).className === "anchor") {
    document.elementFromPoint(touches[0].pageX, touches[0].pageY).className = "anchor active";
    var audio = config.app.engine.audio.manager.getAudio(document.elementFromPoint(touches[0].pageX, touches[0].pageY).getAttribute("data-note"));
    window.clearInterval(config.app.options.interval);
    audio.currentTime = 0;
    audio.volume = 1.0;
    audio.play();
  }
}, false);

piano.addEventListener("mousedown", function (e) {
  if (e.target.className == "anchor") {
    config.app.options.recongizeSequenceMove = true;
    e.target.className = "anchor active";
  }
  /*  */
  if (e.target.className === "blackKey") e.target.firstChild.className = "blackKeyActive";
  if (config.app.engine.audio.sequencer.recording) config.app.engine.audio.sequencer.addNoteOn(e.target.getAttribute("data-note"));
  /*  */
  var audio = config.app.engine.audio.manager.getAudio(e.target.getAttribute("data-note"));
  window.clearInterval(config.app.options.interval);
  audio.currentTime = 0;
  audio.volume = 1.0;
  audio.play();
}, false);

piano.addEventListener("mouseup", function (e) {
  if (e.target.className === "anchor active") {
    e.target.className = "anchor";
    config.app.options.recongizeSequenceMove = false;
  }
  /*  */
  if (e.target.firstChild.className === "blackKeyActive") e.target.firstChild.className = '';
  if (config.app.engine.audio.sequencer.recording) config.app.engine.audio.sequencer.addNoteOff(e.target.getAttribute("data-note"));
  if (config.app.options.sustainFlag === false) {
    var counter = 100;
    var audio = config.app.engine.audio.manager.getAudio(e.target.getAttribute("data-note"));
    config.app.options.interval = setInterval(function () {
      if (counter === 1) clearInterval(config.app.options.interval);
      else {
        counter = counter - 1;
        if (audio.volume > 0) audio.volume = (audio.volume - 0.01 > 0) ? audio.volume - 0.01 : audio.volume;
      }
    }, 2);
  }
}, false);

piano.addEventListener("touchstart", function (e) {
  var audio = config.app.engine.audio.manager.getAudio(e.changedTouches[0].target.getAttribute("data-note"));
  window.clearInterval(config.app.options.interval);
  audio.currentTime = 0;
  audio.volume = 1.0;
  audio.play();
  /*  */
  if (config.app.engine.audio.sequencer.recording) {
    config.app.engine.audio.sequencer.addNoteOn(e.target.getAttribute("data-note"));
  }
  /*  */
  var touches = e.changedTouches;
  for (var i = 0; i < touches.length; i++) {
    if (touches[i].target.className == "anchor") {
      config.app.options.recongizeSequenceMove = true;
      touches[i].target.className = "anchor active";
    }
    if (touches[i].target.className == "blackKey") touches[i].target.firstChild.className = "blackKeyActive";
  }
  /*  */
  e.preventDefault();
}, false);

piano.addEventListener("touchend", function (e) {
  if (config.app.options.sustainFlag === false) {
    var audio = config.app.engine.audio.manager.getAudio(e.changedTouches[0].target.getAttribute("data-note"));
    var counter = 100;
    config.app.options.interval = setInterval(function () {
      if (counter === 1) {
        clearInterval(config.app.options.interval);
      } else {
        counter = counter - 1;
        if (audio.volume > 0) audio.volume = audio.volume - 0.01;
      }
    }, 2);
  }
  /*  */
  if (config.app.engine.audio.sequencer.recording) {
    config.app.engine.audio.sequencer.addNoteOff(e.target.getAttribute("data-note"));
  }
  /*  */
  var touches = event.changedTouches;
  if (touches[0].target.className === "anchor active") {
    touches[0].target.className = "anchor";
    config.app.options.recongizeSequenceMove = false;
  }
  /*  */
  if (touches[0].target.firstChild.className == "blackKeyActive")
    touches[0].target.firstChild.className = "";
  e.preventDefault();
}, false);
