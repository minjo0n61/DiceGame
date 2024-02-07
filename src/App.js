import { useState } from 'react';
import Board from './Board';
import Button from './Button';
import './App.css';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
    // eslint-disable-next-line
    // console.log(sum);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div className="App">
      <div>
        <Button className="App-button" onClick={handleRollClick} color="blue">
          바꾸기
        </Button>
        <Button className="App-button" onClick={handleClearClick} color="red">
          처음부터
        </Button>
      </div>
      <div>
        <Board name="나" color="blue" gameHistory={myHistory} />
        <Board name="상대" color="red" gameHistory={otherHistory} />
      </div>
    </div>
  );
}

export default App;
