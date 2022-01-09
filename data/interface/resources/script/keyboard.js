var intervals = [];
var noteX = undefined;

var playkeynote = function (note, i) {
  var audio = config.app.engine.audio.manager.getAudio(note.getAttribute("data-note"));
  window.clearInterval(intervals[i]);
  audio.currentTime = 0;
  audio.volume = 1.0;
  audio.play();
};

var stopkeynote = function (note, i) {
  if (config.app.options.sustainFlag === false) {
    var audio = config.app.engine.audio.manager.getAudio(note.getAttribute("data-note"));
    var counter = 100;
    intervals[i] = setInterval(function () {
      if (counter === 1) clearInterval(intervals);
      else {
        counter = counter - 1;
        if (audio.volume > 0) {
          audio.volume = (audio.volume - 0.01 > 0) ? audio.volume - 0.01 : audio.volume;
        }
      }
    }, 2);
  }
};

var keyA0 = document.getElementById("keyA0");
var noteA0 = document.getElementById("noteA0");
var noteA0Flag = false;

var keyB0 = document.getElementById("keyB0");
var noteB0 = document.getElementById("noteB0");
var noteB0Flag = false;

var keyC1 = document.getElementById("keyC1");
var noteC1 = document.getElementById("noteC1");
var noteC1Flag = false;

var keyD1 = document.getElementById("keyD1");
var noteD1 = document.getElementById("noteD1");
var noteD1Flag = false;

var keyE1 = document.getElementById("keyE1");
var noteE1 = document.getElementById("noteE1");
var noteE1Flag = false;

var keyF1 = document.getElementById("keyF1");
var noteF1 = document.getElementById("noteF1");
var noteF1Flag = false;

var keyG1 = document.getElementById("keyG1");
var noteG1 = document.getElementById("noteG1");
var noteG1Flag = false;

var keyA1 = document.getElementById("keyA1");
var noteA1 = document.getElementById("noteA1");
var noteA1Flag = false;

var keyB1 = document.getElementById("keyB1");
var noteB1 = document.getElementById("noteB1");
var noteB1Flag = false;

var keyC2 = document.getElementById("keyC2");
var noteC2 = document.getElementById("noteC2");
var noteC2Flag = false;

var keyD2 = document.getElementById("keyD2");
var noteD2 = document.getElementById("noteD2");
var noteD2Flag = false;

var keyE2 = document.getElementById("keyE2");
var noteE2 = document.getElementById("noteE2");
var noteE2Flag = false;

var keyF2 = document.getElementById("keyF2");
var noteF2 = document.getElementById("noteF2");
var noteF2Flag = false;

var keyG2 = document.getElementById("keyG2");
var noteG2 = document.getElementById("noteG2");
var noteG2Flag = false;

var keyA2 = document.getElementById("keyA2");
var noteA2 = document.getElementById("noteA2");
var noteA2Flag = false;

var keyB2 = document.getElementById("keyB2");
var noteB2 = document.getElementById("noteB2");
var noteB2Flag = false;

var keyC3 = document.getElementById("keyC3");
var noteC3 = document.getElementById("noteC3");
var noteC3Flag = false;

var keyD3 = document.getElementById("keyD3");
var noteD3 = document.getElementById("noteD3");
var noteD3Flag = false;

var keyE3 = document.getElementById("keyE3");
var noteE3 = document.getElementById("noteE3");
var noteE3Flag = false;

var keyF3 = document.getElementById("keyF3");
var noteF3 = document.getElementById("noteF3");
var noteF3Flag = false;

var keyG3 = document.getElementById("keyG3");
var noteG3 = document.getElementById("noteG3");
var noteG3Flag = false;

var keyA3 = document.getElementById("keyA3");
var noteA3 = document.getElementById("noteA3");
var noteA3Flag = false;

var keyB3 = document.getElementById("keyB3");
var noteB3 = document.getElementById("noteB3");
var noteB3Flag = false;

var keyC4 = document.getElementById("keyC4");
var noteC4 = document.getElementById("noteC4");
var noteC4Flag = false;

var keyD4 = document.getElementById("keyD4");
var noteD4 = document.getElementById("noteD4");
var noteD4Flag = false;

var keyE4 = document.getElementById("keyE4");
var noteE4 = document.getElementById("noteE4");
var noteE4Flag = false;

var keyF4 = document.getElementById("keyF4");
var noteF4 = document.getElementById("noteF4");
var noteF4Flag = false;

var keyG4 = document.getElementById("keyG4");
var noteG4 = document.getElementById("noteG4");
var noteG4Flag = false;

var keyA4 = document.getElementById("keyA4");
var noteA4 = document.getElementById("noteA4");
var noteA4Flag = false;

var keyB4 = document.getElementById("keyB4");
var noteB4 = document.getElementById("noteB4");
var noteB4Flag = false;

var keyC5 = document.getElementById("keyC5");
var noteC5 = document.getElementById("noteC5");
var noteC5Flag = false;

var keyD5 = document.getElementById("keyD5");
var noteD5 = document.getElementById("noteD5");
var noteD5Flag = false;

var keyE5 = document.getElementById("keyE5");
var noteE5 = document.getElementById("noteE5");
var noteE5Flag = false;

var keyF5 = document.getElementById("keyF5");
var noteF5 = document.getElementById("noteF5");
var noteF5Flag = false;

var keyG5 = document.getElementById("keyG5");
var noteG5 = document.getElementById("noteG5");
var noteG5Flag = false;

var keyA5 = document.getElementById("keyA5");
var noteA5 = document.getElementById("noteA5");
var noteA5Flag = false;

var keyB5 = document.getElementById("keyB5");
var noteB5 = document.getElementById("noteB5");
var noteB5Flag = false;

var keyC6 = document.getElementById("keyC6");
var noteC6 = document.getElementById("noteC6");
var noteC6Flag = false;

var keyD6 = document.getElementById("keyD6");
var noteD6 = document.getElementById("noteD6");
var noteD6Flag = false;

var keyE6 = document.getElementById("keyE6");
var noteE6 = document.getElementById("noteE6");
var noteE6Flag = false;

var keyF6 = document.getElementById("keyF6");
var noteF6 = document.getElementById("noteF6");
var noteF6Flag = false;

var keyG6 = document.getElementById("keyG6");
var noteG6 = document.getElementById("noteG6");
var noteG6Flag = false;

var keyA6 = document.getElementById("keyA6");
var noteA6 = document.getElementById("noteA6");
var noteA6Flag = false;

var keyB6 = document.getElementById("keyB6");
var noteB6 = document.getElementById("noteB6");
var noteB6Flag = false;

var keyC7 = document.getElementById("keyC7");
var noteC7 = document.getElementById("noteC7");
var noteC7Flag = false;

var keyD7 = document.getElementById("keyD7");
var noteD7 = document.getElementById("noteD7");
var noteD7Flag = false;

var keyE7 = document.getElementById("keyE7");
var noteE7 = document.getElementById("noteE7");
var noteE7Flag = false;

var keyF7 = document.getElementById("keyF7");
var noteF7 = document.getElementById("noteF7");
var noteF7Flag = false;

var keyG7 = document.getElementById("keyG7");
var noteG7 = document.getElementById("noteG7");
var noteG7Flag = false;

var keyA7 = document.getElementById("keyA7");
var noteA7 = document.getElementById("noteA7");
var noteA7Flag = false;

var keyB7 = document.getElementById("keyB7");
var noteB7 = document.getElementById("noteB7");
var noteB7Flag = false;

var keyC8 = document.getElementById("keyC8");
var noteC8 = document.getElementById("noteC8");
var noteC8Flag = false;

var blacknote1 = document.getElementById("blacknote1");
var blacknote1Flag = false;
var blacknote2 = document.getElementById("blacknote2");
var blacknote2Flag = false;
var blacknote3 = document.getElementById("blacknote3");
var blacknote3Flag = false;
var blacknote4 = document.getElementById("blacknote4");
var blacknote4Flag = false;
var blacknote5 = document.getElementById("blacknote5");
var blacknote5Flag = false;
var blacknote6 = document.getElementById("blacknote6");
var blacknote6Flag = false;
var blacknote7 = document.getElementById("blacknote7");
var blacknote7Flag = false;
var blacknote8 = document.getElementById("blacknote8");
var blacknote8Flag = false;
var blacknote9 = document.getElementById("blacknote9");
var blacknote9Flag = false;
var blacknote10 = document.getElementById("blacknote10");
var blacknote10Flag = false;
var blacknote11 = document.getElementById("blacknote11");
var blacknote11Flag = false;
var blacknote12 = document.getElementById("blacknote12");
var blacknote12Flag = false;
var blacknote13 = document.getElementById("blacknote13");
var blacknote13Flag = false;
var blacknote14 = document.getElementById("blacknote14");
var blacknote14Flag = false;
var blacknote15 = document.getElementById("blacknote15");
var blacknote15Flag = false;
var blacknote16 = document.getElementById("blacknote16");
var blacknote16Flag = false;
var blacknote17 = document.getElementById("blacknote17");
var blacknote17Flag = false;
var blacknote18 = document.getElementById("blacknote18");
var blacknote18Flag = false;
var blacknote19 = document.getElementById("blacknote19");
var blacknote19Flag = false;
var blacknote20 = document.getElementById("blacknote20");
var blacknote20Flag = false;
var blacknote21 = document.getElementById("blacknote21");
var blacknote21Flag = false;
var blacknote22 = document.getElementById("blacknote22");
var blacknote22Flag = false;
var blacknote23 = document.getElementById("blacknote23");
var blacknote23Flag = false;
var blacknote24 = document.getElementById("blacknote24");
var blacknote24Flag = false;
var blacknote25 = document.getElementById("blacknote25");
var blacknote25Flag = false;
var blacknote26 = document.getElementById("blacknote26");
var blacknote26Flag = false;
var blacknote27 = document.getElementById("blacknote27");
var blacknote27Flag = false;
var blacknote28 = document.getElementById("blacknote28");
var blacknote28Flag = false;
var blacknote29 = document.getElementById("blacknote29");
var blacknote29Flag = false;
var blacknote30 = document.getElementById("blacknote30");
var blacknote30Flag = false;
var blacknote31 = document.getElementById("blacknote31");
var blacknote31Flag = false;
var blacknote32 = document.getElementById("blacknote32");
var blacknote32Flag = false;
var blacknote33 = document.getElementById("blacknote33");
var blacknote33Flag = false;
var blacknote34 = document.getElementById("blacknote34");
var blacknote34Flag = false;
var blacknote35 = document.getElementById("blacknote35");
var blacknote35Flag = false;
var blacknote36 = document.getElementById("blacknote36");
var blacknote36Flag = false;

document.addEventListener("keydown", function (e) {
  if (inputBoxWrapper.style.display === "block") return;
  e = e || window.event;
  var charCode = e.keyCode;
  if (e.shiftKey) {
    switch (charCode) {
      case 192:
        keyA0.className = "keyboardActive"
        blacknote1.firstChild.className = "blackKeyActive"
        if (blacknote1Flag === false) {
          playkeynote(blacknote1, 53);
          blacknote1Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black1");
          }
        }
        break;
      case 50:
        keyC1.className = "keyboardActive"
        blacknote2.firstChild.className = "blackKeyActive"
        if (blacknote2Flag === false) {
          playkeynote(blacknote2, 54);
          blacknote2Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black2");
          }
        }
        break;
      case 51:
        keyD1.className = "keyboardActive"
        blacknote3.firstChild.className = "blackKeyActive"
        if (blacknote3Flag === false) {
          playkeynote(blacknote3, 55);
          blacknote3Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black3");
          }
        }
        break;
      case 53:
        keyF1.className = "keyboardActive"
        blacknote4.firstChild.className = "blackKeyActive"
        if (blacknote4Flag === false) {
          playkeynote(blacknote4, 56);
          blacknote4Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black4");
          }
        }
        break;
      case 54:
        keyG1.className = "keyboardActive"
        blacknote5.firstChild.className = "blackKeyActive"
        if (blacknote5Flag === false) {
          playkeynote(blacknote5, 57);
          blacknote5Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black5");
          }
        }
        break;
      case 55:
        keyA1.className = "keyboardActive"
        blacknote6.firstChild.className = "blackKeyActive"
        if (blacknote6Flag === false) {
          playkeynote(blacknote6, 58);
          blacknote6Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black6");
          }
        }
        break;
      case 57:
        keyC2.className = "keyboardActive"
        blacknote7.firstChild.className = "blackKeyActive"
        if (blacknote7Flag === false) {
          playkeynote(blacknote7, 59);
          blacknote7Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black7");
          }
        }
        break;
      case 48:
        keyD2.className = "keyboardActive"
        blacknote8.firstChild.className = "blackKeyActive"
        if (blacknote8Flag === false) {
          playkeynote(blacknote8, 60);
          blacknote8Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black8");
          }
        }
        break;
      case 187: case 61:
        keyF2.className = "keyboardActive"
        blacknote9.firstChild.className = "blackKeyActive"
        if (blacknote9Flag === false) {
          playkeynote(blacknote9, 61);
          blacknote9Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black9");
          }
        }
        break;
      case 81:
        keyG2.className = "keyboardActive"
        blacknote10.firstChild.className = "blackKeyActive"
        if (blacknote10Flag === false) {
          playkeynote(blacknote10, 62);
          blacknote10Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black10");
          }
        }
        break;
      case 87:
        keyA2.className = "keyboardActive"
        blacknote11.firstChild.className = "blackKeyActive"
        if (blacknote11Flag === false) {
          playkeynote(blacknote11, 63);
          blacknote11Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black11");
          }
        }
        break;
      case 82:
        keyC3.className = "keyboardActive"
        blacknote12.firstChild.className = "blackKeyActive"
        if (blacknote12Flag === false) {
          playkeynote(blacknote12, 64);
          blacknote12Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black12");
          }
        }
        break;
      case 84:
        keyD3.className = "keyboardActive"
        blacknote13.firstChild.className = "blackKeyActive"
        if (blacknote13Flag === false) {
          playkeynote(blacknote13, 65);
          blacknote13Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black13");
          }
        }
        break;
      case 85:
        keyF3.className = "keyboardActive"
        blacknote14.firstChild.className = "blackKeyActive"
        if (blacknote14Flag === false) {
          playkeynote(blacknote14, 66);
          blacknote14Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black14");
          }
        }
        break;
      case 73:
        keyG3.className = "keyboardActive"
        blacknote15.firstChild.className = "blackKeyActive"
        if (blacknote15Flag === false) {
          playkeynote(blacknote15, 67);
          blacknote15Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black15");
          }
        }
        break;
      case 79:
        keyA3.className = "keyboardActive"
        blacknote16.firstChild.className = "blackKeyActive"
        if (blacknote16Flag === false) {
          playkeynote(blacknote16, 68);
          blacknote16Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black16");
          }
        }
        break;
      case 219:
        keyC4.className = "keyboardActive"
        blacknote17.firstChild.className = "blackKeyActive"
        if (blacknote17Flag === false) {
          playkeynote(blacknote17, 69);
          blacknote17Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black17");
          }
        }
        break;
      case 221:
        keyD4.className = "keyboardActive"
        blacknote18.firstChild.className = "blackKeyActive"
        if (blacknote18Flag === false) {
          playkeynote(blacknote18, 70);
          blacknote18Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black18");
          }
        }
        break;
      case 103:
        keyF4.className = "keyboardActive"
        blacknote19.firstChild.className = "blackKeyActive"
        if (blacknote19Flag === false) {
          playkeynote(blacknote19, 71);
          blacknote19Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black19");
          }
        }
        break;
      case 104:
        keyG4.className = "keyboardActive"
        blacknote20.firstChild.className = "blackKeyActive"
        if (blacknote20Flag === false) {
          playkeynote(blacknote20, 72);
          blacknote20Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black20");
          }
        }
        break;
      case 105:
        keyA4.className = "keyboardActive"
        blacknote21.firstChild.className = "blackKeyActive"
        if (blacknote21Flag === false) {
          playkeynote(blacknote21, 73);
          blacknote21Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black21");
          }
        }
        break;
      case 83:
        keyC5.className = "keyboardActive"
        blacknote22.firstChild.className = "blackKeyActive"
        if (blacknote22Flag === false) {
          playkeynote(blacknote22, 74);
          blacknote22Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black22");
          }
        }
        break;
      case 68:
        keyD5.className = "keyboardActive"
        blacknote23.firstChild.className = "blackKeyActive"
        if (blacknote23Flag === false) {
          playkeynote(blacknote23, 75);
          blacknote23Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black23");
          }
        }
        break;
      case 71:
        keyF5.className = "keyboardActive"
        blacknote24.firstChild.className = "blackKeyActive"
        if (blacknote24Flag === false) {
          playkeynote(blacknote24, 76);
          blacknote24Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black24");
          }
        }
        break;
      case 72:
        keyG5.className = "keyboardActive"
        blacknote25.firstChild.className = "blackKeyActive"
        if (blacknote25Flag === false) {
          playkeynote(blacknote25, 77);
          blacknote25Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black25");
          }
        }
        break;
      case 74:
        keyA5.className = "keyboardActive"
        blacknote26.firstChild.className = "blackKeyActive"
        if (blacknote26Flag === false) {
          playkeynote(blacknote26, 78);
          blacknote26Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black26");
          }
        }
        break;
      case 76:
        keyC6.className = "keyboardActive"
        blacknote27.firstChild.className = "blackKeyActive"
        if (blacknote27Flag === false) {
          playkeynote(blacknote27, 79);
          blacknote27Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black27");
          }
        }
        break;
      case 186: case 59:
        keyD6.className = "keyboardActive"
        blacknote28.firstChild.className = "blackKeyActive"
        if (blacknote28Flag === false) {
          playkeynote(blacknote28, 80);
          blacknote28Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black28");
          }
        }
        break;
      case 100:
        keyF6.className = "keyboardActive"
        blacknote29.firstChild.className = "blackKeyActive"
        if (blacknote29Flag === false) {
          playkeynote(blacknote29, 81);
          blacknote29Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black29");
          }
        }
        break;
      case 101:
        keyG6.className = "keyboardActive"
        blacknote30.firstChild.className = "blackKeyActive"
        if (blacknote30Flag === false) {
          playkeynote(blacknote30, 82);
          blacknote30Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black30");
          }
        }
        break;
      case 102:
        keyA6.className = "keyboardActive"
        blacknote31.firstChild.className = "blackKeyActive"
        if (blacknote31Flag === false) {
          playkeynote(blacknote31, 83);
          blacknote31Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black31");
          }
        }
        break;
      case 88:
        keyC7.className = "keyboardActive"
        blacknote32.firstChild.className = "blackKeyActive"
        if (blacknote32Flag === false) {
          playkeynote(blacknote32, 84);
          blacknote32Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black32");
          }
        }
        break;
      case 67:
        keyD7.className = "keyboardActive"
        blacknote33.firstChild.className = "blackKeyActive"
        if (blacknote33Flag === false) {
          playkeynote(blacknote33, 85);
          blacknote33Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black33");
          }
        }
        break;
      case 66:
        keyF7.className = "keyboardActive"
        blacknote34.firstChild.className = "blackKeyActive"
        if (blacknote34Flag === false) {
          playkeynote(blacknote34, 86);
          blacknote34Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black34");
          }
        }
        break;
      case 78:
        keyG7.className = "keyboardActive"
        blacknote35.firstChild.className = "blackKeyActive"
        if (blacknote35Flag === false) {
          playkeynote(blacknote35, 87);
          blacknote35Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black35");
          }
        }
        break;
      case 77:
        keyA7.className = "keyboardActive"
        blacknote36.firstChild.className = "blackKeyActive"
        if (blacknote36Flag === false) {
          playkeynote(blacknote36, 88);
          blacknote36Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("Black36");
          }
        }
        break;
      default:
        break;
    }
  } else {
    switch (charCode) {
      case 192:
        keyA0.className = "keyboardActive"
        noteA0.className = "anchor active"
        if (noteA0Flag === false) {
          playkeynote(noteA0, 1);
          noteA0Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("A0");
          }
        }
        break;
      case 49:
        keyB0.className = "keyboardActive"
        noteB0.className = "anchor active"
        if (noteB0Flag === false) {
          playkeynote(noteB0, 2);
          noteB0Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("B0");
          }
        }
        break;
      case 50:
        keyC1.className = "keyboardActive"
        noteC1.className = "anchor active"
        if (noteC1Flag === false) {
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("C1");
          }
          playkeynote(noteC1, 3);
          noteC1Flag = true;
        }
        break;
      case 51:
        keyD1.className = "keyboardActive"
        noteD1.className = "anchor active"
        if (noteD1Flag === false) {
          playkeynote(noteD1, 4);
          noteD1Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("D1");
          }
        }
        break;
      case 52:
        keyE1.className = "keyboardActive"
        noteE1.className = "anchor active"
        if (noteE1Flag === false) {
          playkeynote(noteE1, 5);
          noteE1Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("E1");
          }
        }
        break;
      case 53:
        keyF1.className = "keyboardActive"
        noteF1.className = "anchor active"
        if (noteF1Flag === false) {
          playkeynote(noteF1, 6);
          noteF1Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("F1");
          }
        }
        break;
      case 54:
        keyG1.className = "keyboardActive"
        noteG1.className = "anchor active"
        if (noteG1Flag === false) {
          playkeynote(noteG1, 7);
          noteG1Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("G1");
          }
        }
        break;
      case 55:
        keyA1.className = "keyboardActive"
        noteA1.className = "anchor active"
        if (noteA1Flag === false) {
          playkeynote(noteA1, 8);
          noteA1Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("A1");
          }
        }
        break;
      case 56:
        keyB1.className = "keyboardActive"
        noteB1.className = "anchor active"
        if (noteB1Flag === false) {
          playkeynote(noteB1, 9);
          noteB1Flag = true;

          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("B1");
          }
        }
        break;
      case 57:
        keyC2.className = "keyboardActive"
        noteC2.className = "anchor active"
        if (noteC2Flag === false) {
          playkeynote(noteC2, 10);
          noteC2Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("C2");
          }
        }
        break;
      case 48:
        keyD2.className = "keyboardActive"
        noteD2.className = "anchor active"
        if (noteD2Flag === false) {
          playkeynote(noteD2, 11);
          noteD2Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("D2");
          }
        }
        break;
      case 189: case 173:
        keyE2.className = "keyboardActive"
        noteE2.className = "anchor active"
        if (noteE2Flag === false) {
          playkeynote(noteE2, 12);
          noteE2Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("E2");
          }
        }
        break;
      case 187: case 61:
        keyF2.className = "keyboardActive"
        noteF2.className = "anchor active"
        if (noteF2Flag === false) {
          playkeynote(noteF2, 13);
          noteF2Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("F2");
          }
        }
        break;
      case 81:
        keyG2.className = "keyboardActive"
        noteG2.className = "anchor active"
        if (noteG2Flag === false) {
          playkeynote(noteG2, 14);
          noteG2Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("G2");
          }
        }
        break;
      case 87:
        keyA2.className = "keyboardActive"
        noteA2.className = "anchor active"
        if (noteA2Flag === false) {
          playkeynote(noteA2, 15);
          noteA2Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("A2");
          }
        }
        break;
      case 69:
        keyB2.className = "keyboardActive"
        noteB2.className = "anchor active"
        if (noteB2Flag === false) {
          playkeynote(noteB2, 16);
          noteB2Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("B2");
          }
        }
        break;
      case 82:
        keyC3.className = "keyboardActive"
        noteC3.className = "anchor active"
        if (noteC3Flag === false) {
          playkeynote(noteC3, 17);
          noteC3Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("C3");
          }
        }
        break;
      case 84:
        keyD3.className = "keyboardActive"
        noteD3.className = "anchor active"
        if (noteD3Flag === false) {
          playkeynote(noteD3, 18);
          noteD3Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("D3");
          }
        }
        break;
      case 89:
        keyE3.className = "keyboardActive"
        noteE3.className = "anchor active"
        if (noteE3Flag === false) {
          playkeynote(noteE3, 19);
          noteE3Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("E3");
          }
        }
        break;
      case 85:
        keyF3.className = "keyboardActive"
        noteF3.className = "anchor active"
        if (noteF3Flag === false) {
          playkeynote(noteF3, 20);
          noteF3Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("F3");
          }
        }
        break;
      case 73:
        keyG3.className = "keyboardActive"
        noteG3.className = "anchor active"
        if (noteG3Flag === false) {
          playkeynote(noteG3, 21);
          noteG3Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("G3");
          }
        }
        break;
      case 79:
        keyA3.className = "keyboardActive"
        noteA3.className = "anchor active"
        if (noteA3Flag === false) {
          playkeynote(noteA3, 22);
          noteA3Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("A3");
          }
        }
        break;
      case 80:
        keyB3.className = "keyboardActive"
        noteB3.className = "anchor active"
        if (noteB3Flag === false) {
          playkeynote(noteB3, 23);
          noteB3Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("B3");
          }
        }
        break;
      case 219:
        keyC4.className = "keyboardActive"
        noteC4.className = "anchor active"
        if (noteC4Flag === false) {
          playkeynote(noteC4, 24);
          noteC4Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("C4");
          }
        }
        break;
      case 221:
        keyD4.className = "keyboardActive"
        noteD4.className = "anchor active"
        if (noteD4Flag === false) {
          playkeynote(noteD4, 25);
          noteD4Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("D4");
          }
        }
        break;
      case 220:
        keyE4.className = "keyboardActive"
        noteE4.className = "anchor active"
        if (noteE4Flag === false) {
          playkeynote(noteE4, 26);
          noteE4Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("E4");
          }
        }
        break;
      case 103:
        keyF4.className = "keyboardActive"
        noteF4.className = "anchor active"
        if (noteF4Flag === false) {
          playkeynote(noteF4, 27);
          noteF4Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("F4");
          }
        }
        break;
      case 104:
        keyG4.className = "keyboardActive"
        noteG4.className = "anchor active"
        if (noteG4Flag === false) {
          playkeynote(noteG4, 28);
          noteG4Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("G4");
          }
        }
        break;
      case 105:
        keyA4.className = "keyboardActive"
        noteA4.className = "anchor active"
        if (noteA4Flag === false) {
          playkeynote(noteA4, 29);
          noteA4Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("A4");
          }
        }
        break;
      case 65:
        keyB4.className = "keyboardActive"
        noteB4.className = "anchor active"
        if (noteB4Flag === false) {
          playkeynote(noteB4, 30);
          noteB4Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("B4");
          }
        }
        break;
      case 83:
        keyC5.className = "keyboardActive"
        noteC5.className = "anchor active"
        if (noteC5Flag === false) {
          playkeynote(noteC5, 31);
          noteC5Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("C5");
          }
        }
        break;
      case 68:
        keyD5.className = "keyboardActive"
        noteD5.className = "anchor active"
        if (noteD5Flag === false) {
          playkeynote(noteD5, 32);
          noteD5Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("D5");
          }
        }
        break;
      case 70:
        keyE5.className = "keyboardActive"
        noteE5.className = "anchor active"
        if (noteE5Flag === false) {
          playkeynote(noteE5, 33);
          noteE5Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("E5");
          }
        }
        break;
      case 71:
        keyF5.className = "keyboardActive"
        noteF5.className = "anchor active"
        if (noteF5Flag === false) {
          playkeynote(noteF5, 34);
          noteF5Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("F5");
          }
        }
        break;
      case 72:
        keyG5.className = "keyboardActive"
        noteG5.className = "anchor active"
        if (noteG5Flag === false) {
          playkeynote(noteG5, 35);
          noteG5Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("G5");
          }
        }
        break;
      case 74:
        keyA5.className = "keyboardActive"
        noteA5.className = "anchor active"
        if (noteA5Flag === false) {
          playkeynote(noteA5, 36);
          noteA5Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("A5");
          }
        }
        break;
      case 75:
        keyB5.className = "keyboardActive"
        noteB5.className = "anchor active"
        if (noteB5Flag === false) {
          playkeynote(noteB5, 37);
          noteB5Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("B5");
          }
        }
        break;
      case 76:
        keyC6.className = "keyboardActive"
        noteC6.className = "anchor active"
        if (noteC6Flag === false) {
          playkeynote(noteC6, 38);
          noteC6Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("C6");
          }
        }
        break;
      case 186: case 59:
        keyD6.className = "keyboardActive"
        noteD6.className = "anchor active"
        if (noteD6Flag === false) {
          playkeynote(noteD6, 39);
          noteD6Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("D6");
          }
        }
        break;
      case 222:
        e.preventDefault();
        keyE6.className = "keyboardActive"
        noteE6.className = "anchor active"
        if (noteE6Flag === false) {
          playkeynote(noteE6, 40);
          noteE6Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("E6");
          }
        }
        break;
      case 100:
        keyF6.className = "keyboardActive"
        noteF6.className = "anchor active"
        if (noteF6Flag === false) {
          playkeynote(noteF6, 41);
          noteF6Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("F6");
          }
        }
        break;
      case 101:
        keyG6.className = "keyboardActive"
        noteG6.className = "anchor active"
        if (noteG6Flag === false) {
          playkeynote(noteG6, 42);
          noteG6Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("G6");
          }
        }
        break;
      case 102:
        keyA6.className = "keyboardActive"
        noteA6.className = "anchor active"
        if (noteA6Flag === false) {
          playkeynote(noteA6, 43);
          noteA6Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("A6");
          }
        }
        break;
      case 90:
        keyB6.className = "keyboardActive"
        noteB6.className = "anchor active"
        if (noteB6Flag === false) {
          playkeynote(noteB6, 44);
          noteB6Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("B6");
          }
        }
        break;
      case 88:
        keyC7.className = "keyboardActive"
        noteC7.className = "anchor active"
        if (noteC7Flag === false) {
          playkeynote(noteC7, 45);
          noteC7Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("C7");
          }
        }
        break;
      case 67:
        keyD7.className = "keyboardActive"
        noteD7.className = "anchor active"
        if (noteD7Flag === false) {
          playkeynote(noteD7, 46);
          noteD7Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("D7");
          }
        }
        break;
      case 86:
        keyE7.className = "keyboardActive"
        noteE7.className = "anchor active"
        if (noteE7Flag === false) {
          playkeynote(noteE7, 47);
          noteE7Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("E7");
          }
        }
        break;
      case 66:
        keyF7.className = "keyboardActive"
        noteF7.className = "anchor active"
        if (noteF7Flag === false) {
          playkeynote(noteF7, 48);
          noteF7Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("F7");
          }
        }
        break;
      case 78:
        keyG7.className = "keyboardActive"
        noteG7.className = "anchor active"
        if (noteG7Flag === false) {
          playkeynote(noteG7, 49);
          noteG7Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("G7");
          }
        }
        break;
      case 77:
        keyA7.className = "keyboardActive"
        noteA7.className = "anchor active"
        if (noteA7Flag === false) {
          playkeynote(noteA7, 50);
          noteA7Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("A7");
          }
        }
        break;
      case 188:
        keyB7.className = "keyboardActive"
        noteB7.className = "anchor active"
        if (noteB7Flag === false) {
          playkeynote(noteB7, 51);
          noteB7Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("B7");
          }
        }
        break;
      case 190:
        keyC8.className = "keyboardActive"
        noteC8.className = "anchor active"
        if (noteC8Flag === false) {
          playkeynote(noteC8, 52);
          noteC8Flag = true;
          if (config.app.engine.audio.sequencer.recording) {
            config.app.engine.audio.sequencer.addNoteOn("C8");
          }
        }
        break;
    }
  }
});

document.addEventListener("keyup", function (e) {
  e = e || window.event;
  var charCode = e.keyCode || e.which;
  if (e.shiftKey) {
    switch (charCode) {
      case 192:
        keyA0.className = '';
        blacknote1.firstChild.className = '';
        stopkeynote(blacknote1, 53);
        blacknote1Flag = false;
        if (config.app.engine.audio.sequencer.recording) config.app.engine.audio.sequencer.addNoteOff("Black1");
        break;
      case 50:
        keyC1.className = '';
        blacknote2.firstChild.className = '';
        stopkeynote(blacknote2, 54);
        blacknote2Flag = false;
        break;
      case 51:
        keyD1.className = '';
        blacknote3.firstChild.className = '';
        stopkeynote(blacknote3, 55);
        blacknote3Flag = false;
        break;
      case 53:
        keyF1.className = '';
        blacknote4.firstChild.className = '';
        stopkeynote(blacknote4, 56);
        blacknote4Flag = false;
        break;
      case 54:
        keyG1.className = '';
        blacknote5.firstChild.className = '';
        stopkeynote(blacknote5, 57);
        blacknote5Flag = false;
        break;
      case 55:
        keyA1.className = '';
        blacknote6.firstChild.className = '';
        stopkeynote(blacknote6, 58);
        blacknote6Flag = false;
        break;
      case 57:
        keyC2.className = '';
        blacknote7.firstChild.className = '';
        stopkeynote(blacknote7, 59);
        blacknote7Flag = false;

        break;
      case 48:
        keyD2.className = '';
        blacknote8.firstChild.className = '';
        stopkeynote(blacknote8, 60);
        blacknote8Flag = false;
        break;
      case 187: case 61:
        keyF2.className = '';
        blacknote9.firstChild.className = '';
        stopkeynote(blacknote9, 61);
        blacknote9Flag = false;
        break;
      case 81:
        keyG2.className = '';
        blacknote10.firstChild.className = '';
        stopkeynote(blacknote10, 62);
        blacknote10Flag = false;
        break;
      case 87:
        keyA2.className = '';
        blacknote11.firstChild.className = '';
        stopkeynote(blacknote11, 63);
        blacknote11Flag = false;
        break;
      case 82:
        keyC3.className = '';
        blacknote12.firstChild.className = '';
        stopkeynote(blacknote12, 64);
        blacknote12Flag = false;
        break;
      case 84:
        keyD3.className = '';
        blacknote13.firstChild.className = '';
        stopkeynote(blacknote13, 65);
        blacknote13Flag = false;
        break;
      case 85:
        keyF3.className = '';
        blacknote14.firstChild.className = '';
        stopkeynote(blacknote14, 66);
        blacknote14Flag = false;
        break;
      case 73:
        keyG3.className = '';
        blacknote15.firstChild.className = '';
        stopkeynote(blacknote15, 67);
        blacknote15Flag = false;
        break;
      case 79:
        keyA3.className = '';
        blacknote16.firstChild.className = '';
        stopkeynote(blacknote16, 68);
        blacknote16Flag = false;
        break;
      case 219:
        keyC4.className = '';
        blacknote17.firstChild.className = '';
        stopkeynote(blacknote17, 69);
        blacknote17Flag = false;
        break;
      case 221:
        keyD4.className = '';
        blacknote18.firstChild.className = '';
        stopkeynote(blacknote18, 70);
        blacknote18Flag = false;
        break;
      case 103:
        keyF4.className = '';
        blacknote19.firstChild.className = '';
        stopkeynote(blacknote19, 71);
        blacknote19Flag = false;
        break;
      case 104:
        keyG4.className = '';
        blacknote20.firstChild.className = '';
        stopkeynote(blacknote20, 72);
        blacknote20Flag = false;
        break;
      case 105:
        keyA4.className = '';
        blacknote21.firstChild.className = '';
        stopkeynote(blacknote21, 73);
        blacknote21Flag = false;
        break;
      case 83:
        keyC5.className = '';
        blacknote22.firstChild.className = '';
        stopkeynote(blacknote22, 74);
        blacknote22Flag = false;
        break;
      case 68:
        keyD5.className = '';
        blacknote23.firstChild.className = '';
        stopkeynote(blacknote23, 75);
        blacknote23Flag = false;
        break;
      case 71:
        keyF5.className = '';
        blacknote24.firstChild.className = '';
        stopkeynote(blacknote24, 76);
        blacknote24Flag = false;
        break;
      case 72:
        keyG5.className = '';
        blacknote25.firstChild.className = '';
        stopkeynote(blacknote25, 77);
        blacknote25Flag = false;
        break;
      case 74:
        keyA5.className = '';
        blacknote26.firstChild.className = '';
        stopkeynote(blacknote26, 78);
        blacknote26Flag = false;
        break;
      case 76:
        keyC6.className = '';
        blacknote27.firstChild.className = '';
        stopkeynote(blacknote27, 79);
        blacknote27Flag = false;
        break;
      case 186: case 59:
        keyD6.className = '';
        blacknote28.firstChild.className = '';
        stopkeynote(blacknote28, 80);
        blacknote28Flag = false;
        break;
      case 100:
        keyF6.className = '';
        blacknote29.firstChild.className = '';
        stopkeynote(blacknote29, 81);
        blacknote29Flag = false;
        break;
      case 101:
        keyG6.className = '';
        blacknote30.firstChild.className = '';
        stopkeynote(blacknote30, 82);
        blacknote30Flag = false;
        break;
      case 102:
        keyA6.className = '';
        blacknote31.firstChild.className = '';
        stopkeynote(blacknote31, 83);
        blacknote31Flag = false;
        break;
      case 88:
        keyC7.className = '';
        blacknote32.firstChild.className = '';
        stopkeynote(blacknote32, 84);
        blacknote32Flag = false;
        break;
      case 67:
        keyD7.className = '';
        blacknote33.firstChild.className = '';
        stopkeynote(blacknote33, 85);
        blacknote33Flag = false;
        break;
      case 66:
        keyF7.className = '';
        blacknote34.firstChild.className = '';
        stopkeynote(blacknote34, 86);
        blacknote34Flag = false;
        break;
      case 78:
        keyG7.className = '';
        blacknote35.firstChild.className = '';
        stopkeynote(blacknote35, 87);
        blacknote35Flag = false;
        break;
      case 77:
        keyA7.className = '';
        blacknote36.firstChild.className = '';
        stopkeynote(blacknote36, 88);
        blacknote36Flag = false;
        break;
      default:
        break;
    }
  }
  else {
    switch (charCode) {
      case 192:
        noteA0.className = "anchor"
        keyA0.className = ''
        stopkeynote(noteA0, 1);
        noteA0Flag = false;
        if (config.app.engine.audio.sequencer.recording) {
          config.app.engine.audio.sequencer.addNoteOff("A0");
        }
        break;
      case 49:
        noteB0.className = "anchor"
        keyB0.className = ''
        stopkeynote(noteB0, 2);
        noteB0Flag = false;
        break;
      case 50:
        noteC1.className = "anchor"
        keyC1.className = ''
        stopkeynote(noteC1, 3);
        noteC1Flag = false;
        if (config.app.engine.audio.sequencer.recording) {
          config.app.engine.audio.sequencer.addNoteOff("C1");
        }
        break;
      case 51:
        noteD1.className = "anchor"
        keyD1.className = ''
        stopkeynote(noteD1, 4);
        noteD1Flag = false;
        break;
      case 52:
        noteE1.className = "anchor"
        keyE1.className = ''
        stopkeynote(noteE1, 5);
        noteE1Flag = false;
        break;
      case 53:
        noteF1.className = "anchor"
        keyF1.className = ''
        stopkeynote(noteF1, 6);
        noteF1Flag = false;
        break;
      case 54:
        noteG1.className = "anchor"
        keyG1.className = ''
        stopkeynote(noteG1, 7);
        noteG1Flag = false;
        break;
      case 55:
        noteA1.className = "anchor"
        keyA1.className = ''
        stopkeynote(noteA1, 8);
        noteA1Flag = false;
        break;
      case 56:
        noteB1.className = "anchor"
        keyB1.className = ''
        stopkeynote(noteB1, 9);
        noteB1Flag = false;
        break;
      case 57:
        noteC2.className = "anchor"
        keyC2.className = ''
        stopkeynote(noteC2, 10);
        noteC2Flag = false;
        break;
      case 48:
        noteD2.className = "anchor"
        keyD2.className = ''
        stopkeynote(noteD2, 11);
        noteD2Flag = false;
        break;
      case 189: case 173:
        noteE2.className = "anchor"
        keyE2.className = ''
        stopkeynote(noteE2, 12);
        noteE2Flag = false;
        break;
      case 187: case 61:
        noteF2.className = "anchor"
        keyF2.className = ''
        stopkeynote(noteF2, 13);
        noteF2Flag = false;
        break;
      case 81:
        noteG2.className = "anchor"
        keyG2.className = ''
        stopkeynote(noteG2, 14);
        noteG2Flag = false;
        break;
      case 87:
        noteA2.className = "anchor"
        keyA2.className = ''
        stopkeynote(noteA2, 15);
        noteA2Flag = false;
        break;
      case 69:
        noteB2.className = "anchor"
        keyB2.className = ''
        stopkeynote(noteB2, 16);
        noteB2Flag = false;
        break;
      case 82:
        noteC3.className = "anchor"
        keyC3.className = ''
        stopkeynote(noteC3, 17);
        noteC3Flag = false;
        break;
      case 84:
        noteD3.className = "anchor"
        keyD3.className = ''
        stopkeynote(noteD3, 18);
        noteD3Flag = false;
        break;
      case 89:
        noteE3.className = "anchor"
        keyE3.className = ''
        stopkeynote(noteE3, 19);
        noteE3Flag = false;
        break;
      case 85:
        noteF3.className = "anchor"
        keyF3.className = ''
        stopkeynote(noteF3, 20);
        noteF3Flag = false;
        break;
      case 73:
        noteG3.className = "anchor"
        keyG3.className = ''
        stopkeynote(noteG3, 21);
        noteG3Flag = false;
        break;
      case 79:
        noteA3.className = "anchor"
        keyA3.className = ''
        stopkeynote(noteA3, 22);
        noteA3Flag = false;
        break;
      case 80:
        noteB3.className = "anchor"
        keyB3.className = ''
        stopkeynote(noteB3, 23);
        noteB3Flag = false;
        break;
      case 219:
        noteC4.className = "anchor"
        keyC4.className = ''
        stopkeynote(noteC4, 24);
        noteC4Flag = false;
        break;
      case 221:
        noteD4.className = "anchor"
        keyD4.className = ''
        stopkeynote(noteD4, 25);
        noteD4Flag = false;
        break;
      case 220:
        noteE4.className = "anchor"
        keyE4.className = ''
        stopkeynote(noteE4, 26);
        noteE4Flag = false;
        break;
      case 103:
        noteF4.className = "anchor"
        keyF4.className = ''
        stopkeynote(noteF4, 27);
        noteF4Flag = false;
        break;

      case 104:
        noteG4.className = "anchor"
        keyG4.className = ''
        stopkeynote(noteG4, 28);
        noteG4Flag = false;
        break;
      case 105:
        noteA4.className = "anchor"
        keyA4.className = ''
        stopkeynote(noteA4, 29);
        noteA4Flag = false;
        break;
      case 65:
        noteB4.className = "anchor"
        keyB4.className = ''
        stopkeynote(noteB4, 30);
        noteB4Flag = false;
        break;
      case 83:
        noteC5.className = "anchor"
        keyC5.className = ''
        stopkeynote(noteC5, 31);
        noteC5Flag = false;
        break;
      case 68:
        noteD5.className = "anchor"
        keyD5.className = ''
        stopkeynote(noteD5, 32);
        noteD5Flag = false;
        break;
      case 70:
        noteE5.className = "anchor"
        keyE5.className = ''
        stopkeynote(noteE5, 33);
        noteE5Flag = false;
        break;
      case 71:
        noteF5.className = "anchor"
        keyF5.className = ''
        stopkeynote(noteF5, 34);
        noteF5Flag = false;
        break;
      case 72:
        noteG5.className = "anchor"
        keyG5.className = ''
        stopkeynote(noteG5, 35);
        noteG5Flag = false;
        break;
      case 74:
        noteA5.className = "anchor"
        keyA5.className = ''
        stopkeynote(noteA5, 36);
        noteA5Flag = false;
        break;
      case 75:
        noteB5.className = "anchor"
        keyB5.className = ''
        stopkeynote(noteB5, 37);
        noteB5Flag = false;
        break;
      case 76:
        noteC6.className = "anchor"
        keyC6.className = ''
        stopkeynote(noteC6, 38);
        noteC6Flag = false;
        break;
       case 186: case 59:
        noteD6.className = "anchor"
        keyD6.className = ''
        stopkeynote(noteD6, 39);
        noteD6Flag = false;
        break;
      case 222:
        e.preventDefault();
        noteE6.className = "anchor"
        keyE6.className = ''
        stopkeynote(noteE6, 40);
        noteE6Flag = false;
        break;
      case 100:
        noteF6.className = "anchor"
        keyF6.className = ''
        stopkeynote(noteF6, 41);
        noteF6Flag = false;
        break;
      case 101:
        noteG6.className = "anchor"
        keyG6.className = ''
        stopkeynote(noteG6, 42);
        noteG6Flag = false;
        break;
      case 102:
        noteA6.className = "anchor"
        keyA6.className = ''
        stopkeynote(noteA6, 43);
        noteA6Flag = false;
        break;
      case 90:
        noteB6.className = "anchor"
        keyB6.className = ''
        stopkeynote(noteB6, 44);
        noteB6Flag = false;
        break;
      case 88:
        noteC7.className = "anchor"
        keyC7.className = ''
        stopkeynote(noteC7, 45);
        noteC7Flag = false;
        break;
      case 67:
        noteD7.className = "anchor"
        keyD7.className = ''
        stopkeynote(noteD7, 46);
        noteD7Flag = false;
        break;
      case 86:
        noteE7.className = "anchor"
        keyE7.className = ''
        stopkeynote(noteE7, 47);
        noteE7Flag = false;
        break;
      case 66:
        noteF7.className = "anchor"
        keyF7.className = ''
        stopkeynote(noteF7, 48);
        noteF7Flag = false;
        break;
      case 78:
        noteG7.className = "anchor"
        keyG7.className = ''
        stopkeynote(noteG7, 49);
        noteG7Flag = false;
        break;
      case 77:
        noteA7.className = "anchor"
        keyA7.className = ''
        stopkeynote(noteA7, 50);
        noteA7Flag = false;
        break;
      case 188:
        noteB7.className = "anchor"
        keyB7.className = ''
        stopkeynote(noteB7, 51);
        noteB7Flag = false;
        break;
      case 190:
        noteC8.className = "anchor"
        keyC8.className = ''
        stopkeynote(noteC8, 52);
        noteC8Flag = false;
        break;
      default:
        break;
    }
  }
});

keyboard.addEventListener("mousedown", function (e) {
  if (e.target.id) {
    e.target.className = "keyboardActive";
    noteX = document.getElementById("note" + e.target.id.substring(3, 5));
    /*  */
    if (noteX) noteX.className = "anchor active";
    if (noteX) playkeynote(noteX, 1);
    if (config.app.engine.audio.sequencer.recording) {
      config.app.engine.audio.sequencer.addNoteOn(e.target.id.substring(3, 5));
    }
  }
  /*  */
  e.stopPropagation();
});

keyboard.addEventListener("mouseup", function (e) {
  if (e.target.id) {
    e.target.className = '';
    if (noteX) noteX.className = "anchor";
    if (noteX) stopkeynote(noteX, 1);
    if (config.app.engine.audio.sequencer.recording) {
      config.app.engine.audio.sequencer.addNoteOff(e.target.id.substring(3, 5));
    }
  }
});

keyboard.addEventListener("mouseout", function (e) {
  if (e.target.className === "keyboardActive") {
    e.target.className = '';
  }
});
