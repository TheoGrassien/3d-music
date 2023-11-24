import s from './App.module.scss';
import Canvas from './components/canvas/Canvas';
import Picker from './components/picker/Picker';
import Navbar from './components/navbar/Navbar';
import Player from './components/player/Player';
import useCustomStore from './customStore';

const App = () => {
  const currentSong = useCustomStore((state) => state.currentSong);

  return (
    <div className={s.container}>
      <Picker />
      <Navbar />
      <div className={s.main}>
        {currentSong ? (
          <Player song={currentSong} />
        ) : (
          <p className={s.emptyState}>Aucun titre sélectionné</p>
        )}
        <Canvas />
      </div>
    </div>
  );
};

export default App;
