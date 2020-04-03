const audioContext = new AudioContext(); // browsers limit the number of concurrent audio contexts, so you better re-use'em

export function beep(vol, freq, duration) {
  const v = audioContext.createOscillator();
  const u = audioContext.createGain();
  v.connect(u);
  v.frequency.value = freq;
  v.type = "square";
  u.connect(audioContext.destination);
  u.gain.value = vol * 0.01;
  v.start(audioContext.currentTime);
  v.stop(audioContext.currentTime + duration * 0.001);
}
