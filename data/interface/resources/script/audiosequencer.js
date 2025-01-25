class AudioSequencer {
  constructor () {
    let events = [];
    let lastTime = 0;
    let timeoutID = 0;
    let instance = this;
    this.playing = false;
    this.recording = false;
    /*  */
    let playbackHandler = undefined;
    let getCurrentTime = function () {
      return new Date().getTime();
    };
    /*  */
    let addNoteEvent = function (note, e) {
      let curTime = getCurrentTime();
      /*  */
      events.push({
        "event": e,
        "note": note,
        "deltaTime": curTime - lastTime
      });
      /*  */
      lastTime = curTime;
    };
    /*  */
    let playEvent = function (index) {
      let event = events[index];
      playbackHandler(event.event, event.note);
      index++;
      /*  */
      if (index < events.length) {
        timeoutID = setTimeout(function () {
          playEvent(index);
        }, events[index].deltaTime);
      } else {
        instance.playing = false;
      }
    };
    /*  */
    this.addNoteOn = function (note) {
      if (this.recording) {
        addNoteEvent(note,AudioSequencer.eventCodes.noteOn);
      }
    };
    /*  */
    this.addNoteOff = function (note) {
      if (this.recording) {
        addNoteEvent(note,AudioSequencer.eventCodes.noteOff);
      }
    };
    /*  */
    this.LoadRecoredFile = function (recoredFile) {
      if (recoredFile) {
        events = recoredFile;
      }
    };
    /*  */
    this.SaveRecord = function (fileName) {
      if (fileName) {
        config.storage.write(fileName, JSON.stringify(events));
      }
    };
    /*  */
    this.stopPlayback = function () {
      if (this.playing) {
        this.playing = false;
        if (timeoutID) clearTimeout(timeoutID);
        playbackHandler = undefined;
      }
    };
    /*  */
    this.stopRecording = function () {
      if (this.recording) {
        this.recording = false;
        let curTime = getCurrentTime();
        /*  */
        events.push({
          "deltaTime": curTime - lastTime,
          "event": AudioSequencer.eventCodes.endOfTrack
        });
      }
    };
    /*  */
    this.startPlayback = function (callback) {
      if (!this.recording && !this.playing && events.length > 0) {
        playbackHandler = callback;
        this.playing = true;
        playEvent(0);
        /*  */
        return true;
      }
      /*  */
      return false;
    };
    /*  */
    this.startRecording = function () {
      if (!this.recording && !this.playing) {
        events = [];
        this.recording = true;
        /*  */
        events.push({
          "deltaTime": 0,
          "event": AudioSequencer.eventCodes.cuePoint
        });
        /*  */
        lastTime = getCurrentTime();
        return true;
      }
      /*  */
      return false;
    };
  }
}

AudioSequencer.eventCodes = {
  "noteOn": 1,
  "noteOff": 2,
  "cuePoint": 3,
  "endOfTrack": 4
};
