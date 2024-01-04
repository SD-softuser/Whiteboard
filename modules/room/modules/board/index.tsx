import Canvas from './components/Canvas';
import MousesRenderer from './components/MousesRenderer';
import MoveImage from './components/MoveImage';
import SelectionBtns from './components/SelectionBtns';

const Board = () => (
  <>
    <Canvas />
    <MousesRenderer />
    <MoveImage />
    <SelectionBtns />
  </>
);

export default Board;
