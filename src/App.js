import { useState } from 'react';
import Button from './Button';
import Dice from './Dice';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [color, setColor] = useState('red');
  const [num, setNum] = useState(1);

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    // eslint-disable-next-line
    console.log(nextNum);
  };

  const handleClearClick = () => {
    setNum(1);
    // eslint-disable-next-line
    console.log('clear!');
  };

  const handleColor = () => {
    if (color === 'red') {
      setColor('blue');
    } else {
      setColor('red');
    }
    // eslint-disable-next-line
    console.log('색 변경!');
  };

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
        <Button onClick={handleColor}>색 변경</Button>
      </div>
      <Dice color={color} num={num} />
    </div>
  );
}

export default App;
