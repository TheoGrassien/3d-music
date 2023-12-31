import { useEffect, useRef } from 'react';
import Scene from '../../webgl/Scene';
import s from './Canvas.module.scss';

const Canvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
    Scene.setup(canvasRef.current);
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
