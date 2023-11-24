import s from './Picker.module.scss';
import Scene from '../../webgl/Scene';
import { useState } from 'react';

const Picker = () => {
  const [currentVisualizer, setCurrentVisualizer] = useState(0);

  const pickVisualizer = (index) => {
    Scene.changeVisualizer(index);
    setCurrentVisualizer(index);
  };

  return (
    <div className={s.picker}>
      <div
        onClick={() => pickVisualizer(0)}
        className={currentVisualizer == 0 ? s.current : ''}
      >
        Line
      </div>
      <div
        onClick={() => pickVisualizer(1)}
        className={currentVisualizer == 1 ? s.current : ''}
      >
        Cube
      </div>
      <div
        onClick={() => pickVisualizer(2)}
        className={currentVisualizer == 2 ? s.current : ''}
      >
        Logo Iut
      </div>
      <div
        onClick={() => pickVisualizer(3)}
        className={currentVisualizer == 3 ? s.current : ''}
      >
        Board
      </div>
    </div>
  );
};

export default Picker;
