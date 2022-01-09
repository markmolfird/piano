var config = {
  "LOG": false,
  "resize": {
    "timeout": null
  },
  "addon": {
    "homepage": function () {
      return chrome.runtime.getManifest().homepage_url;
    }
  },
  "resize": {
    "timeout": null,
    "method": function () {
      if (config.port.name === "win") {
        if (config.resize.timeout) window.clearTimeout(config.resize.timeout);
        config.resize.timeout = window.setTimeout(async function () {
          var current = await chrome.windows.getCurrent();
          /*  */
          config.storage.write("interface.size", {
            "top": current.top,
            "left": current.left,
            "width": current.width,
            "height": current.height
          });
        }, 1000);
      }
    }
  },
  "port": {
    "name": '',
    "connect": function () {
      config.port.name = "webapp";
      var context = document.documentElement.getAttribute("context");
      /*  */
      if (chrome.runtime) {
        if (chrome.runtime.connect) {
          if (context !== config.port.name) {
            if (document.location.search === "?tab") config.port.name = "tab";
            if (document.location.search === "?win") config.port.name = "win";
            /*  */
            chrome.runtime.connect({
              "name": config.port.name
            });
          }
        }
      }
      /*  */
      document.documentElement.setAttribute("context", config.port.name);
    }
  },
  "storage": {
    "local": {},
    "read": function (id) {
      return config.storage.local[id];
    },
    "load": function (callback) {
      chrome.storage.local.get(null, function (e) {
        config.storage.local = e;
        callback();
      });
    },
    "write": function (id, data) {
      if (id) {
        if (data !== '' && data !== null && data !== undefined) {
          var tmp = {};
          tmp[id] = data;
          config.storage.local[id] = data;
          chrome.storage.local.set(tmp, function () {});
        } else {
          delete config.storage.local[id];
          chrome.storage.local.remove(id, function () {});
        }
      }
    }
  },
  "load": function () {
    var reload = document.querySelector("#reload");
    var support = document.querySelector("#support");
    var donation = document.querySelector("#donation");
    /*  */
    reload.addEventListener("click", function () {
      document.location.reload();
    });
    /*  */
    support.addEventListener("click", function () {
      if (config.port.name !== "webapp") {
        var url = config.addon.homepage();
        chrome.tabs.create({"url": url, "active": true});
      }
    }, false);
    /*  */
    donation.addEventListener("click", function () {
      if (config.port.name !== "webapp") {
        var url = config.addon.homepage() + "?reason=support";
        chrome.tabs.create({"url": url, "active": true});
      }
    }, false);
    /*  */
    window.removeEventListener("load", config.load, false);
    config.storage.load(function () {config.app.load(true)});
  },
  "app": {
    "engine": {
      "audio": {
        "sequencer": new AudioSequencer(),
        "manager": new AudioManager("resources/audio"),
        "recorder": {
          "api": null,
          "result": {"url": null, "items": {}, "chunks": []}
        }
      }
    },
    "options": {
      "pianoWidth": 0,
      "dragData": null,
      "tempPosition": 0,
      "numberOfKeys": 27,
      "maxIndexLarge": 0,
      "maxIndexSmall": 0,
      "sustainFlag": false,
      "interval": undefined,
      "handleIndexSmall": 0,
      "handleIndexLarge": 0,
      "deletedFileTemp": null,
      "showKeyboardFlag": true,
      "nowPlayingRecoredFile": null,
      "recongizeSequenceMove": false,
      "transform": ["transform", "msTransform", "mozTransform", "oTransform", "webkitTransform"]
    },
    "load": function (restore) {
      config.app.options.numberOfKeys = config.app.methods.calculate.number.of.keys();
      /*  */
      if (config.storage.read("sustainControl") === undefined) config.storage.write("sustainControl", config.app.options.sustainFlag);
      if (config.storage.read("showKeyboard") === undefined) config.storage.write("showKeyboard", config.app.options.showKeyboardFlag);
      /*  */
      if (restore) {
        if (config.storage.read("numberOfKeys") !== undefined) {
          config.app.options.numberOfKeys = Number(config.storage.read("numberOfKeys"));
        }
        /*  */
        if (config.storage.read("sustainControl") !== undefined) {
          config.app.options.sustainFlag = config.storage.read("sustainControl");
          if (config.app.options.sustainFlag === true) {
            sustainKeyboard.style.left = "52px";
            sustainKeyboard.style.backgroundColor = "#404040";
          } else {
            sustainKeyboard.style.left = "0";
            sustainKeyboard.style.backgroundColor = "#aaa";
          }
        }
        /*  */
        if (config.storage.read("showKeyboard") !== undefined) {
          config.app.options.showKeyboardFlag = config.storage.read("showKeyboard");
          if (config.app.options.showKeyboardFlag === true) {
            showKeyboard.style.left = "52px";
            keyboardWrapper.style.display = "block";
            showKeyboard.style.backgroundColor = "#404040";
          } else {
            showKeyboard.style.left = "0";
            keyboardWrapper.style.display = "none";
            showKeyboard.style.backgroundColor = "#aaa";
          }
        }
        /*  */
        config.app.engine.audio.manager.loadAudio();
        config.app.methods.load.recorded.files();
      }
      /*  */
      config.app.methods.resize.keys(mainSectionWidth);
    },
    "methods": {
      "click": function () {
        sidebar.style.right = "-305px";
        transparentShadow.style.display = "none";
      },
      "keydown": function (e) {
        if (e.keyCode === 191) e.preventDefault();
        /*  */
        if (e.ctrlKey) {
          if (e.keyCode === 39) config.app.methods.compute.handle.position(4);
          else if (e.keyCode === 37) config.app.methods.compute.handle.position(1);
        } else if (e.keyCode === 39) config.app.methods.compute.handle.position(3);
        else if (e.keyCode === 37) config.app.methods.compute.handle.position(2);
      },
      "reset": {
        "piano": function () {
          var id = config.app.methods.supported.properties.name(config.app.options.transform);
          /*  */
          handle.style.left = "0";
          config.app.options.handleIndexLarge = 0;
          config.app.options.handleIndexSmall = 0;
          if (id) piano.style[id] = "translate3d(0, 0, 0)";
          /*  */
          smallPianoWidth = smallPiano.clientWidth;
          mainSectionWidth = mainSection.clientWidth;
        }
      },
      "supported": {
        "properties": {
          "name": function (e) {
            for (var i = 0; i < e.length; i++) {
              if (typeof document.body.style[e[i]] !== "undefined") {
                return e[i];
              }
            }
            /*  */
            return null;
          }
        }
      },
      "resize": {
        "keys": function (e) {
          config.app.methods.reset.piano();
          /*  */
          var keyWidth = Math.floor(e / config.app.options.numberOfKeys);
          for (var i = 0; i < keyNodes.length; i++) {
            keyNodes[i].style.width = keyWidth + "px";
          }
          /*  */
          smallPianoWidth = smallPiano.clientWidth;
          piano.style.width = ((keyWidth + 1) * 52) + "px";
          config.app.options.pianoWidth = piano.clientWidth;
          lblNumberOfKeys.textContent = config.app.options.numberOfKeys;
          config.app.options.maxIndexSmall = 52 - config.app.options.numberOfKeys;
          config.app.options.maxIndexLarge = Math.floor(52 / config.app.options.numberOfKeys);
          handle.style.width = Math.round(config.app.options.numberOfKeys / 52 * smallPianoWidth) + "px";
        }
      },
      "calculate": {
        "number": {
          "of": {
            "keys": function() {
              var n = 27;
              var content = document.getElementById("workingContent");
              if (content) {
                var width = window.getComputedStyle(content).width;
                if (width) {
                  width = parseInt(width);
                  n = Math.floor(width / 48);
                }
              }
              /*  */
              return n;
            }
          }
        }
      },
      "handle": {
        "playback": {
          "chunks": [],
          "events": function (e, n) {
            switch (e) {
              case AudioSequencer.eventCodes.endOfTrack:
                config.app.options.nowPlayingRecoredFile.className = "playRecoredFile icon-play";
              break;
              /*  */
              case AudioSequencer.eventCodes.noteOn:
                var audio = config.app.engine.audio.manager.getAudio(n);
                window.clearInterval(config.app.options.interval);
                audio.currentTime = 0;
                audio.volume = 1.0;
                audio.play();
              break;
              /*  */
              case AudioSequencer.eventCodes.noteOff:
                var counter = 100;
                var audio = config.app.engine.audio.manager.getAudio(n);
                config.app.options.interval = setInterval(function () {
                  if (counter === 1) clearInterval(config.app.options.interval);
                  else {
                    counter = counter - 1;
                    if (audio.volume > 0) {
                      var volume = audio.volume - 0.01;
                      audio.volume = volume > 0 ? volume : 0;
                    }
                  }
                }, 2);
              break;
            }
          }
        }
      },
      "drag": {
        "init": function (e) {
          e.preventDefault();
          /*  */
          config.app.options.tempPosition = e.clientX;
          if (!config.app.options.dragData) {
            config.app.options.dragData = e.clientX - handle.offsetLeft;
          }
          /*  */
          e.stopPropagation();
        },
        "stop": function (e) {
          e.preventDefault();
          /*  */
          if (config.app.options.dragData) {
            handle.style.left = e.clientX - config.app.options.dragData + "px";
            config.app.options.tempPosition = e.clientX;
            config.app.options.dragData = null;
          }
          /*  */
          e.stopPropagation();
        },
        "start": function (e) {
          e.preventDefault();
          /*  */
          if (config.app.options.dragData) {
            var handleStyle = window.getComputedStyle(handle);
            /*  */
            if (e.clientX < config.app.options.tempPosition && parseFloat(handleStyle.left) <= 0) {
              handle.style.left = "0";
              config.app.options.dragData = null;
            } else if (e.clientX > config.app.options.tempPosition && parseFloat(handleStyle.left) >= (smallPiano.clientWidth - handle.clientWidth)) {
              config.app.options.dragData = null;
              handle.style.left = (smallPiano.clientWidth - handle.clientWidth) + "px";
            } else {
              handle.style.left = e.clientX - config.app.options.dragData + "px";
            }
          }
        }
      },
      "load": {
        "recorded": {
          "files": function () {
            var playNode;
            var deleteNode;
            var downloadNode;
            var tableRowNode;
            var rowCounterNode;
            var nameTableCellNode;
            var playTableCellNode;
            var deleteTableCellNode;
            var downloadTableCellNode;
            /*  */
            var count = 0;
            tblRecordedFiles.textContent = '';
            for (var id in config.storage.local) {
              var item = config.storage.local[id];
              if (item !== undefined) {
                try {
                  var details = JSON.parse(item);
                  if (details && details.length) {
                    tableRowNode = document.createElement("tr");
                    rowCounterNode = document.createElement("td");
                    nameTableCellNode = document.createElement("td");
                    playTableCellNode = document.createElement("td");
                    deleteTableCellNode = document.createElement("td");
                    downloadTableCellNode = document.createElement("td");
                    /*  */
                    var href = config.app.engine.audio.recorder.result.items[id];
                    rowCounterNode.textContent = (++count).toString();
                    nameTableCellNode.textContent = id;
                    /*  */
                    downloadNode = document.createElement('a');
                    downloadNode.textContent = '↓';
                    downloadNode.download = id + ".webm";
                    downloadNode.href = href ? href : '';
                    downloadNode.className = "downloadRecoredFile";
                    downloadNode.style.display = href ? "block" : "none";
                    /*  */
                    playNode = document.createElement("span");
                    playNode.id = id;
                    playNode.className = "playRecoredFile icon-play";
                    /*  */
                    deleteNode = document.createElement("span");
                    deleteNode.id = "del" + id;
                    deleteNode.textContent = '✕';
                    deleteNode.className = "deleteRecordedFile";
                    /*  */
                    downloadTableCellNode.appendChild(downloadNode);
                    playTableCellNode.appendChild(playNode);
                    deleteTableCellNode.appendChild(deleteNode);
                    /*  */
                    tableRowNode.appendChild(rowCounterNode);
                    tableRowNode.appendChild(nameTableCellNode);
                    tableRowNode.appendChild(downloadTableCellNode);
                    tableRowNode.appendChild(playTableCellNode);
                    tableRowNode.appendChild(deleteTableCellNode);
                    /*  */
                    tblRecordedFiles.appendChild(tableRowNode);
                  }
                } catch (e) {}
              }
            }
          }
        }
      },
      "compute": {
        "handle": {
          "position": function (type) {
            var transformProperty = config.app.methods.supported.properties.name(config.app.options.transform);
            /*  */
            if (type === 4) {
              if (config.app.options.handleIndexLarge < config.app.options.maxIndexLarge) {
                var str1 = "translate3d(";
                config.app.options.handleIndexLarge++;
                /*  */
                config.app.options.handleIndexSmall = Math.ceil(((config.app.options.maxIndexSmall) / (config.app.options.maxIndexLarge)) * (config.app.options.handleIndexLarge));
                var handleMove = (((smallPianoWidth - handle.clientWidth) / config.app.options.maxIndexLarge * config.app.options.handleIndexLarge));
                if (handleMove >= smallPianoWidth - handle.clientWidth) handleMove = smallPianoWidth - handle.clientWidth;
                handle.style.left = handleMove + "px";
                /*  */
                var pianoRangeMove = (((config.app.options.pianoWidth - mainSectionWidth) / (config.app.options.maxIndexLarge) * (config.app.options.handleIndexLarge)));
                if (pianoRangeMove > config.app.options.pianoWidth - mainSectionWidth) {
                  pianoRangeMove = (pianoRangeMove - Math.abs(config.app.options.pianoWidth - (mainSectionWidth + (config.app.options.maxIndexLarge * (config.app.options.pianoWidth / (config.app.options.maxIndexLarge + 1))))));
                }
                var str2ForPiano = -pianoRangeMove + "px, 0, 0)";
                if (transformProperty) piano.style[transformProperty] = str1.concat(str2ForPiano);
              }
            } else if (type === 3) {
              config.app.options.handleIndexLarge = Math.floor(config.app.options.handleIndexSmall / (config.app.options.maxIndexSmall / config.app.options.maxIndexLarge));
              if (config.app.options.handleIndexSmall < config.app.options.maxIndexSmall) {
                var str1 = "translate3d(";
                config.app.options.handleIndexSmall++;
                /*  */
                var handleMove = ((smallPianoWidth - handle.clientWidth) / config.app.options.maxIndexSmall * config.app.options.handleIndexSmall);
                if (handleMove >= smallPianoWidth - handle.clientWidth)
                  handleMove = smallPianoWidth - handle.clientWidth;
                handle.style.left = handleMove + "px";
                var pianoRangeMove = (((config.app.options.pianoWidth - mainSectionWidth) / (config.app.options.maxIndexSmall) * (config.app.options.handleIndexSmall)));
                if (pianoRangeMove > config.app.options.pianoWidth - mainSectionWidth) {
                  pianoRangeMove = Math.ceil(pianoRangeMove - Math.abs(config.app.options.pianoWidth - (mainSectionWidth + (config.app.options.maxIndexSmall * (config.app.options.pianoWidth / (config.app.options.maxIndexSmall + 1))))));
                }
                var str2ForPiano = -pianoRangeMove + "px, 0, 0)";
                if (transformProperty) piano.style[transformProperty] = str1.concat(str2ForPiano);
              }
            } else if (type === 2) {
              config.app.options.handleIndexLarge = Math.floor(config.app.options.handleIndexSmall / (config.app.options.maxIndexSmall / config.app.options.maxIndexLarge));
              if (config.app.options.handleIndexSmall > 0) {
                var str1 = "translate3d(";
                config.app.options.handleIndexSmall--;
                /*  */
                var handleMove = ((smallPianoWidth - handle.clientWidth) / config.app.options.maxIndexSmall * config.app.options.handleIndexSmall);
                handle.style.left = handleMove + "px";
                var pianoRangeMove = Math.ceil(((config.app.options.pianoWidth - mainSectionWidth) / (config.app.options.maxIndexSmall) * (config.app.options.handleIndexSmall)));
                if (pianoRangeMove > config.app.options.pianoWidth - mainSectionWidth) {
                  pianoRangeMove = pianoRangeMove - Math.abs(config.app.options.pianoWidth - (mainSectionWidth + (config.app.options.maxIndexSmall * (config.app.options.pianoWidth / (config.app.options.maxIndexSmall + 1)))));
                }
                var str2ForPiano = -pianoRangeMove + "px, 0, 0)";
                if (transformProperty) piano.style[transformProperty] = str1.concat(str2ForPiano);
              }
            } else if (type === 1) {
              if (config.app.options.handleIndexLarge > 0) {
                var str1 = "translate3d(";
                config.app.options.handleIndexLarge--;
                /*  */
                config.app.options.handleIndexSmall = Math.ceil((config.app.options.maxIndexSmall / config.app.options.maxIndexLarge) * config.app.options.handleIndexLarge);
                var handleMove = (((smallPianoWidth - handle.clientWidth) / config.app.options.maxIndexLarge * config.app.options.handleIndexLarge));
                if (handleMove >= smallPianoWidth - handle.clientWidth) handleMove = smallPianoWidth - handle.clientWidth;
                handle.style.left = handleMove + "px";
                var pianoRangeMove = (config.app.options.pianoWidth / (config.app.options.maxIndexLarge + 1) * (config.app.options.handleIndexLarge));
                if (pianoRangeMove > config.app.options.pianoWidth - mainSectionWidth) {
                  pianoRangeMove = pianoRangeMove - Math.abs(config.app.options.pianoWidth - (mainSectionWidth + (config.app.options.maxIndexLarge * (config.app.options.pianoWidth / (config.app.options.maxIndexLarge + 1)))));
                }
                var str2ForPiano = -pianoRangeMove + "px, 0, 0)";
                if (transformProperty) piano.style[transformProperty] = str1.concat(str2ForPiano);
              }
            }
          }
        }
      }
    }
  }
};

config.port.connect();

window.addEventListener("load", config.load, false);
window.addEventListener("resize", config.resize.method, false);

document.addEventListener("click", config.app.methods.click);
document.addEventListener("keydown", config.app.methods.keydown, false);
document.addEventListener("mouseup", config.app.methods.drag.stop, false);
document.addEventListener("mousemove", config.app.methods.drag.start, false);