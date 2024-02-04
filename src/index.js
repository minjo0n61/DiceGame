import ReactDOM from 'react-dom/client';

const WINS = {
  rock: 'scissor',
  scissor: 'paper',
  paper: 'rock',
};

function getResult(left, right) {
  if (WINS[left] === right) return '승리';
  if (left === WINS[right]) return '패배';
  return '무승부';
}

function handleClick() {
  console.log('가위바위보!');
}

const me = 'rock';
const other = 'scissor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1 id="title">가위바위보</h1>
    <h2 id="result">{getResult(me, other)}</h2>
    <button type="button" className="hand" onClick={handleClick}>
      가위
    </button>
    <button type="button" className="hand" onClick={handleClick}>
      바위
    </button>
    <button type="button" className="hand" onClick={handleClick}>
      보
    </button>
  </>,
);
