import { AVAILABLE_SONGS } from '../constants/songs';
import { store } from '../store/store';

export const AudioPlayer: Partial<HTMLAudioElement> = document.getElementById('audio')!;

const getSongPath = (song: string) => `${process.env.PUBLIC_URL}/songs/${song}`;

export const pauseAudio = () => {
  // @ts-ignore
  AudioPlayer?.pause();
};

export const startAudio = () => {
  // @ts-ignore
  AudioPlayer.play();
};

export const mute = () => {
  AudioPlayer.muted = true;
};

export const unmute = () => {
  AudioPlayer.muted = false;
};

export const setPlayerVolume = (volume: number) => {
  AudioPlayer.volume = volume;
};

export const getCurrentDuration = () => {
  return AudioPlayer.duration;
};

export const play = (index: number) => {
  AudioPlayer.src = getSongPath(AVAILABLE_SONGS[index].file);
  console.log(AudioPlayer.duration);
  // @ts-ignore
  AudioPlayer.play();
};

AudioPlayer.ondurationchange = (e) => {
  // @ts-ignore
  const value = e.target.duration;

  // if not nan
  if (value) {
    store.dispatch({ type: 'playingBar/setDuration', payload: value });
  }
};

export const setCurrentTimeForPlayer = (value: number) => {
  AudioPlayer.currentTime = value;
};
