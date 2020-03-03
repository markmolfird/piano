sidebar.addEventListener("click", function (e) {
  e.stopPropagation();
}, false);

handle.addEventListener("mousedown", function (e) {
  config.app.methods.drag.init(e);
}, false);

btnNoDeleteFile.addEventListener("click", function () {
  deleteBoxWrapper.style.display = "none";
});

lnkClose.addEventListener("click", function () {
  sidebar.style.right = "-305px";
  transparentShadow.style.display = "none";
}, false);

leftManyLoop.addEventListener("click", function (e) {
  e.stopPropagation();
  config.app.methods.compute.handle.position(1);
}, false);

leftLoop.addEventListener("click", function (e) {
  e.stopPropagation();
  config.app.methods.compute.handle.position(2);
}, false);

rightLoop.addEventListener("click", function (e) {
  e.stopPropagation();
  config.app.methods.compute.handle.position(3);
}, false);

rightManyLoop.addEventListener("click", function (e) {
  e.stopPropagation();
  config.app.methods.compute.handle.position(4);
}, false);

btnCancelRecordFile.addEventListener("click", function () {
  inputBoxWrapper.style.display = "none";
  txtSaveRecordFile.style.borderColor = '';
});

menuIcon.addEventListener("click", function (e) {
  e.stopPropagation();
  sidebar.style.right = "0";
  transparentShadow.style.display = "block";
}, false);

btnYesDeleteFile.addEventListener("click", function () {
  var key = config.app.options.deletedFileTemp;
  /*  */
  config.storage.write(key, null);
  deleteBoxWrapper.style.display = "none";
  config.app.methods.load.recorded.files();
});

lnkResetSettings.addEventListener("click", function () {
  config.storage.write("showKeyboard", null);
  config.storage.write("numberOfKeys", null);
  config.storage.write("sustainControl", null);
  /*  */
  document.location.reload();
}, false);

plusSign.addEventListener("click", function (e) {
  if (config.app.options.numberOfKeys < 52) {
    config.app.options.numberOfKeys++;
    config.storage.write("numberOfKeys", config.app.options.numberOfKeys);
    config.app.methods.resize.keys(mainSectionWidth);
  }
  /*  */
  e.stopPropagation();
});

minusSign.addEventListener("click", function (e) {
  if (config.app.options.numberOfKeys > 8) {
    config.app.options.numberOfKeys--;
    config.storage.write("numberOfKeys", config.app.options.numberOfKeys);
    config.app.methods.resize.keys(mainSectionWidth);
  }
  /*  */
  e.stopPropagation();
});

btnSaveRecordFile.addEventListener("click", function () {
  var fileName = txtSaveRecordFile.value;
  if (!fileName) txtSaveRecordFile.style.borderColor = "#ba0000";
  else {
    inputBoxWrapper.style.display = "none";
    txtSaveRecordFile.style.borderColor = '';
    config.app.engine.audio.sequencer.SaveRecord(fileName);
    config.app.engine.audio.recorder.result.items[fileName] = config.app.engine.audio.recorder.result.url;
    /*  */
    config.app.methods.load.recorded.files();
  }
});

sustainKeyboard.addEventListener("click", function () {
  if (!config.app.options.sustainFlag) {
    sustainKeyboard.style.left = "52px";
    config.app.options.sustainFlag = true;
    sustainKeyboard.style.backgroundColor = "#404040";
  } else {
    sustainKeyboard.style.left = "0";
    config.app.options.sustainFlag = false;
    sustainKeyboard.style.backgroundColor = "#aaa";
  }
  /*  */
  config.storage.write("sustainControl", config.app.options.sustainFlag);
});

showKeyboard.addEventListener("click", function () {
  if (config.app.options.showKeyboardFlag === true) {
    showKeyboard.style.left = "0";
    keyboardWrapper.style.display = "none";
    showKeyboard.style.backgroundColor = "#aaa";
    config.app.options.showKeyboardFlag = false;
  } else {
    showKeyboard.style.left = "52px";
    keyboardWrapper.style.display = "block";
    config.app.options.showKeyboardFlag = true;
    showKeyboard.style.backgroundColor = "#404040";
  }
  /*  */
  config.storage.write("showKeyboard", config.app.options.showKeyboardFlag);
});

smallPiano.addEventListener("click", function (e) {
  e.preventDefault();
  /*  */
  var handleWidth = handle.clientWidth;
  var tempLeft = e.offsetX - (handleWidth / 2);
  var transformProperty = config.app.methods.supported.properties.name(config.app.options.transform);
  var pianoMovement = (config.app.options.pianoWidth - mainSectionWidth) / (smallPianoWidth - handleWidth);
  /*  */
  if (tempLeft <= 0) handle.style.left = "0";
  else if (e.offsetX > smallPianoWidth - handleWidth) handle.style.left = smallPianoWidth - handleWidth + "px";
  else handle.style.left = e.offsetX - (handleWidth / 2) + "px";
  /*  */
  var handleLeft = parseFloat(handle.style.left);
  piano.style[transformProperty] = "translate3d(".concat(-handleLeft * pianoMovement + "px,0,0)");
  config.app.options.handleIndexLarge = (Math.floor(handleLeft / ((smallPianoWidth - handleWidth) / config.app.options.maxIndexLarge)));
  config.app.options.handleIndexSmall = (Math.floor(handleLeft / ((smallPianoWidth - handleWidth) / config.app.options.maxIndexSmall)));
  /*  */
  e.stopPropagation();
}, false);

tblRecordedFiles.addEventListener("click", function (e) {
  if (config.storage.read(e.target.id) !== undefined) {
    if (e.target.className === "playRecoredFile icon-play") {
      var iconPlayes = tblRecordedFiles.querySelectorAll("span");
      for (var i = 0; i < iconPlayes.length; i++) {
        if (iconPlayes[i].className.indexOf("icon-stop") !== -1) {
          iconPlayes[i].className = "playRecoredFile icon-play";
        }
      }
      /*  */
      e.target.className = "playRecoredFile icon-stop";
      config.app.options.nowPlayingRecoredFile = e.target;
      var recoredFile = JSON.parse(config.storage.read(e.target.id));
      config.app.engine.audio.sequencer.LoadRecoredFile(recoredFile);
      /*  */
      if (config.app.engine.audio.sequencer.playing) {
        config.app.engine.audio.sequencer.stopPlayback();
      }
      /*  */
      config.app.engine.audio.sequencer.startPlayback(function (e, n) {
        config.app.methods.handle.playback.events(e, n);
      });
    } else {
      e.target.className = "playRecoredFile icon-play";
      config.app.engine.audio.sequencer.stopPlayback();
    }
  } else if (e.target.id.substring(0, 3) === "del") {
    deleteBoxWrapper.style.display = "block";
    config.app.options.deletedFileTemp = e.target.id.substring(3, e.target.id.length);
  }
});

record.addEventListener("click", function () {
  if (config.app.engine.audio.sequencer.playing) return;
  /*  */
  if (config.app.engine.audio.sequencer.recording) {
    txtSaveRecordFile.value = '';
    record.className = "navigationButton";
    inputBoxWrapper.style.display = "block";
    config.app.engine.audio.sequencer.stopRecording();
    if (config.app.engine.audio.recorder.api) config.app.engine.audio.recorder.api.stop();
  } else {
    record.className = "navigationButton recordOn";
    config.app.engine.audio.sequencer.startRecording();
    /*  */
    if (navigator.mediaDevices) {
      navigator.mediaDevices.enumerateDevices().then(function (info) {
        if (info && info.length) {
          for (var i = 0; i < info.length; i++) {
            if (info[i].kind === "audiooutput") {
              var constraints = {
                "video": false,
                "audio": {
                  "volume": 1.0,
                  "echoCancellation": true,
                  "noiseSuppression": true,
                  "groupId": {"exact": info[i].groupId}
                }
              };
              /*  */
              navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
                config.app.engine.audio.recorder.api = new MediaRecorder(stream, {"mimeType": "audio/webm;codecs=opus"});
                /*  */
                config.app.engine.audio.recorder.api.addEventListener("dataavailable", function (e) {
                  config.app.engine.audio.recorder.result.chunks.push(e.data);
                });
                /*  */
                config.app.engine.audio.recorder.api.addEventListener("stop", function (e) {
                  const blob = new Blob(config.app.engine.audio.recorder.result.chunks, {"type": "audio/webm;codecs=opus"});
                  config.app.engine.audio.recorder.result.url = URL.createObjectURL(blob);
                });
                /*  */
                config.app.engine.audio.recorder.api.start();
              }).catch(function () {});
              /*  */
              break;
            }
          }
        }
      }).catch(function () {});
    }
  }
});
