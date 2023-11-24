import { gsap } from 'gsap';

class AUDIO_CONTROLLER {
  setup() {
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();

    this.audio = new Audio();
    this.audio.volume = 0.1;
    this.audio.crossOrigin = 'anonymous';

    this.audioSource = this.ctx.createMediaElementSource(this.audio);

    this.analyser = new AnalyserNode(this.ctx, {
      fftSize: 1024,
      smoothingTimeConstant: 0.8,
    });

    this.fdata = new Uint8Array(this.analyser.frequencyBinCount);

    this.audioSource.connect(this.analyser);
    this.audioSource.connect(this.ctx.destination);

    gsap.ticker.add(this.tick);
  }

  updateSong(song) {
    this.audio.src = song.preview;
    this.audio.currentTime = 0;
    this.audio.play();
  }

  togglePlay() {
    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  getSong() {
    return this.song;
  }

  tick = () => {
    this.analyser.getByteFrequencyData(this.fdata);
  };
}

const AudioController = new AUDIO_CONTROLLER();
export default AudioController;
