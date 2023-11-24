import fetchJsonp from 'fetch-jsonp';
import { useEffect } from 'react';
import { useState } from 'react';
import useCustomStore from '../../customStore';
import Song from '../song/Song';
import AudioController from '../../utils/AudioController';
import s from './Navbar.module.scss';

const Navbar = () => {
  const [artist, setArtist] = useState('');
  const songs = useCustomStore((state) => state.songs);
  const setSongs = useCustomStore((state) => state.setSongs);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AudioController.setup();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    getSongs();
  };

  const getSongs = () => {
    setLoading(true);
    setSongs([]);
    fetchJsonp(`https://api.deezer.com/search?q=${artist}&output=jsonp`)
      .then((res) => res.json())
      .then((data) => {
        AudioController.ctx.resume();
        setSongs(data.data.slice(0, 10));
        setLoading(false);
      });
  };

  return (
    <div className={s.navbar}>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder="Cherchez un artiste..."
        />
      </form>
      {loading && (
        <div className={s.loader}>
          <span></span>
        </div>
      )}
      {songs && (
        <div className={s.songs}>
          {songs.map((song, key) => {
            return <Song key={key} data={song} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
