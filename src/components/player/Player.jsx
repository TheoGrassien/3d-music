import s from './Player.module.scss';
import AudioController from '../../utils/AudioController';
import { useState, useEffect } from 'react';

import { BsFillPlayFill } from 'react-icons/bs';
import { BsFillPauseFill } from 'react-icons/bs';

const Player = ({ song }) => {
  const [playing, setPlaying] = useState(true);

  const togglePlay = () => {
    AudioController.togglePlay();
    setPlaying(!playing);
  };

  useEffect(() => {
    setPlaying(true);
  }, [song]);

  return (
    <div className={s.player}>
      <div className={s.song}>
        <img src={song.album.cover_small} alt="" width={48} height={48} />
        <span className={s.title}>{song.title}</span>
      </div>
      <div className={s.button} onClick={togglePlay}>
        {playing ? (
          <BsFillPauseFill className={s.icon} />
        ) : (
          <BsFillPlayFill className={s.icon} />
        )}
      </div>
    </div>
  );
};

export default Player;
