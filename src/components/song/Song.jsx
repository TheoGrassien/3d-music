import s from './Song.module.scss';
import AudioController from '../../utils/AudioController';
import useCustomStore from '../../customStore';

const Song = ({ data }) => {
  const setCurrentSong = useCustomStore((state) => state.setCurrentSong);

  return (
    <div
      className={s.song}
      onClick={() => {
        AudioController.updateSong(data);
        setCurrentSong(data);
      }}
    >
      <img src={data.album.cover_small} alt="" width={48} height={48} />
      <span className={s.title}>{data.title}</span>
    </div>
  );
};

export default Song;
