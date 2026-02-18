import { store } from '../store/store';

// Utils
import { getSongPath } from '../utils/getPublicPath';

// Constants
import { AVAILABLE_SONGS } from '../constants/songs';

export const AudioPlayer: Partial<HTMLAudioElement> = document.getElementById('audio')!;

const canUseMediaSession = () => typeof navigator !== 'undefined' && 'mediaSession' in navigator;

const getArtworkType = (image: string) => {
  const extension = image.split('.').pop()?.toLowerCase();
  if (extension === 'png') return 'image/png';
  if (extension === 'jpg' || extension === 'jpeg') return 'image/jpeg';
  return undefined;
};

export const setMediaSessionMetadata = (index: number) => {
  if (!canUseMediaSession() || typeof MediaMetadata === 'undefined') return;

  const song = AVAILABLE_SONGS[index];
  const artworkSrc = `${process.env.PUBLIC_URL}/images/songs/${song.image}`;
  const artworkType = getArtworkType(song.image);

  navigator.mediaSession.metadata = new MediaMetadata({
    title: song.name,
    artist: song.artist,
    album: 'Portfolio',
    artwork: [
      {
        src: artworkSrc,
        sizes: '512x512',
        type: artworkType,
      },
    ],
  });
};

const setupMediaSessionHandlers = () => {
  if (!canUseMediaSession()) return;

  navigator.mediaSession.setActionHandler('play', () => {
    store.dispatch({ type: 'playingBar/setPlaying' });
  });

  navigator.mediaSession.setActionHandler('pause', () => {
    store.dispatch({ type: 'playingBar/setPause' });
  });

  navigator.mediaSession.setActionHandler('previoustrack', () => {
    store.dispatch({ type: 'playingBar/previousSong' });
  });

  navigator.mediaSession.setActionHandler('nexttrack', () => {
    store.dispatch({ type: 'playingBar/nextSong' });
  });
};

setupMediaSessionHandlers();

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

export const play = (index: number, volume?: number) => {
  AudioPlayer.src = getSongPath(AVAILABLE_SONGS[index].file);
  if (volume) {
    AudioPlayer.volume = volume;
  }
  setMediaSessionMetadata(index);
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

const onPlayNext = () => {
  store.dispatch({ type: 'playingBar/nextSong' });
};

// @ts-ignore
AudioPlayer.addEventListener('ended', onPlayNext);

export const onLoop = () => {
  AudioPlayer.loop = true;
  // @ts-ignore
  AudioPlayer.removeEventListener('ended', onPlayNext);
};

export const onRemoveLoop = () => {
  AudioPlayer.loop = false;
  // @ts-ignore
  AudioPlayer.addEventListener('ended', onPlayNext);
};

export const setCurrentTimeForPlayer = (value: number) => {
  AudioPlayer.currentTime = value;
};
