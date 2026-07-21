import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import { playingBarActions } from '../../../../store/slices/playingBar';

/** Single owner of the playing-bar clock — mount once in the footer. */
export const PlaybackClock = () => {
  const dispatch = useAppDispatch();
  const playing = useAppSelector((state) => state.playingBar.playing);

  useEffect(() => {
    if (!playing) return;

    const id = setInterval(() => {
      dispatch(playingBarActions.increaseTime());
    }, 1000);

    return () => clearInterval(id);
  }, [playing, dispatch]);

  return null;
};
