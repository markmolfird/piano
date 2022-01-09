piano.addEventListener("mouseover", function (e) {
  if (config.app.options.recongizeSequenceMove === true) {
    if (e.target.className === "anchor") e.target.className = "anchor active";
    /*  */
    var audio = config.app.engine.audio.manager.getAudio(e.target.getAttribute("data-note"));
    if (audio) {
      window.clearInterval(config.app.options.interval);
      audio.currentTime = 0;
      audio.volume = 1.0;
      audio.play();
    }
  }
}, false);

piano.addEventListener("mousedown", function (e) {
  if (e.target.className === "anchor") {
    e.target.className = "anchor active";
    config.app.options.recongizeSequenceMove = true;
  };
  /*  */
  if (e.target.className === "blackKey") e.target.firstChild.className = "blackKeyActive";
  if (config.app.engine.audio.sequencer.recording) config.app.engine.audio.sequencer.addNoteOn(e.target.getAttribute("data-note"));
  /*  */
  var audio = config.app.engine.audio.manager.getAudio(e.target.getAttribute("data-note"));
  if (audio) {
    window.clearInterval(config.app.options.interval);
    audio.currentTime = 0;
    audio.volume = 1.0;
    audio.play();
  }
}, false);

piano.addEventListener("mouseout", function (e) {
  if (config.app.options.recongizeSequenceMove === true) {
    if (e.target.className === "anchor active") e.target.className = "anchor";
    /*  */
    var audio = config.app.engine.audio.manager.getAudio(e.target.getAttribute("data-note"));
    if (audio) {
      var counter = 100;
      config.app.options.interval = window.setInterval(function () {
        if (counter === 1) window.clearInterval(config.app.options.interval);
        else {
          counter = counter - 1;
          if (audio.volume > 0) {
            audio.volume = audio.volume - 0.01 > 0 ? audio.volume - 0.01 : audio.volume;
          }
        }
      }, 2);
    }
  }
}, false);

piano.addEventListener("mouseup", function (e) {
  if (e.target.className === "anchor active") {
    e.target.className = "anchor";
    config.app.options.recongizeSequenceMove = false;
  }
  /*  */
  if (e.target.firstChild.className === "blackKeyActive") e.target.firstChild.className = '';
  if (config.app.engine.audio.sequencer.recording) config.app.engine.audio.sequencer.addNoteOff(e.target.getAttribute("data-note"));
  /*  */
  if (!config.app.options.sustainFlag) {
    var audio = config.app.engine.audio.manager.getAudio(e.target.getAttribute("data-note"));
    if (audio) {
      var counter = 100;
      config.app.options.interval = window.setInterval(function () {
        if (counter === 1) window.clearInterval(config.app.options.interval);
        else {
          counter = counter - 1;
          if (audio.volume > 0) {
            audio.volume = audio.volume - 0.01 > 0 ? audio.volume - 0.01 : audio.volume;
          }
        }
      }, 2);
    }
  }
}, false);

/* touch */

piano.addEventListener("touchmove", function (e) {
  var touches = e.changedTouches;
  var current = document.elementFromPoint(touches[0].pageX, touches[0].pageY);
  /*  */
  if (current.className === "anchor") {
    current.className = "anchor active";
    /*  */
    var audio = config.app.engine.audio.manager.getAudio(current.getAttribute("data-note"));
    if (audio) {
      window.clearInterval(config.app.options.interval);
      audio.currentTime = 0;
      audio.volume = 1.0;
      audio.play();
    }
  }
  /*  */
  for (var i = 0; i < keyNodes.length; i++) {
    if (keyNodes[i] !== current) {
      keyNodes[i].className = "anchor";
    }
  }
}, false);

piano.addEventListener("touchstart", function (e) {
  e.preventDefault();
  e.stopPropagation();
  /*  */
  var touches = e.changedTouches;
  for (var i = 0; i < touches.length; i++) {
    if (touches[i].target.className === "blackKey") {
      touches[i].target.firstChild.className = "blackKeyActive";
    }
    /*  */
    if (touches[i].target.className === "anchor") {
      touches[i].target.className = "anchor active";
      config.app.options.recongizeSequenceMove = true;
    };
  }
  /*  */
  var audio = config.app.engine.audio.manager.getAudio(e.changedTouches[0].target.getAttribute("data-note"));
  if (audio) {
    window.clearInterval(config.app.options.interval);
    audio.currentTime = 0;
    audio.volume = 1.0;
    audio.play();
  }
  /*  */
  if (config.app.engine.audio.sequencer.recording) {
    config.app.engine.audio.sequencer.addNoteOn(e.target.getAttribute("data-note"));
  }
}, false);

piano.addEventListener("touchend", function (e) {
  e.preventDefault();
  e.stopPropagation();
  /*  */
  if (!config.app.options.sustainFlag) {
    var audio = config.app.engine.audio.manager.getAudio(e.changedTouches[0].target.getAttribute("data-note"));
    if (audio) {
      var counter = 100;
      config.app.options.interval = window.setInterval(function () {
        if (counter === 1) {
          window.clearInterval(config.app.options.interval);
        } else {
          counter = counter - 1;
          if (audio.volume > 0) {
            audio.volume = audio.volume - 0.01 > 0 ? audio.volume - 0.01 : audio.volume;
          }
        }
      }, 2);
    }
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
  if (touches[0].target.firstChild.className === "blackKeyActive") {
    touches[0].target.firstChild.className = '';
  }
}, false);
