import { useState } from 'react';
import styled from 'styled-components';
import GrobalStyle from './GrobalStyle';
import Board from './components/Board';
import Turn from './components/Turn';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Content = styled.div`
`;

const Header = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
`;

const Footer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Status = styled.div`
  padding: 8px;
  text-align: center;
`;

const Button = styled.a`
  display: inline-block;
  text-align: center;
  font-weight: bold;
  border: 3px solid black;
  border-radius: 6px;
  font-weight: bold;
  padding: 4px 16px;
  &:hover {
    background: black;
    color: white;
    cursor: pointer;
  }
`

const Restart = ({ onRestart }) => {
  return(
    <Button onClick={onRestart}>
      Restart
    </Button>
  );
}

const CHARACTERS = {
  circle: "○",
  cross: "×"
}

const STATUS_TEXT = {
  processing: "processing",
  win: "win",
  draw: "draw"
}

const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function judgeWinner(squares) {
  // 全ての勝利パターンに一致がないか確認
  for(let i = 0; i < winPatterns.length; i++) {
    const [first, second, third] = winPatterns[i];
    // 3つとも記号が同じの場合
    if(squares[first] && squares[first] === squares[second] && squares[first] === squares[third]) {
      return squares[first];
    }
  }
  return null;
}

export default function App() {
  // state
  const [oIsNext, setoIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [count, setCount] = useState(0);
  const [turnChar, setTurnChar] = useState(CHARACTERS.circle);
  const [statusText, setStatusText] = useState(STATUS_TEXT.processing);

  function changeStatus(winner) {
    // どちらかが勝ちの場合
    if(winner) {
      setStatusText(`${winner} ${STATUS_TEXT.win}`);
    }

    // 引き分けの場合
    if(!winner && count + 1 === 9) {
      setStatusText(STATUS_TEXT.draw);
    }
  }

  function handlePlay(index) {
    const processing = statusText === STATUS_TEXT.processing
    if(squares[index] || !processing) {
      return;
    }

    // 配列のコピーを作成
    const nextSquares = squares.slice();
    nextSquares[index] = oIsNext === true ? CHARACTERS.circle : CHARACTERS.cross

    setSquares(nextSquares);
    setoIsNext(!oIsNext);
    setCount((prev) => prev + 1);
    setTurnChar((prev) => prev === CHARACTERS.circle ? CHARACTERS.cross : CHARACTERS.circle);

    const winner = judgeWinner(nextSquares);
    changeStatus(winner);
  }

  function restartPlay() {
    setSquares(Array(9).fill(null));
    setoIsNext(true);
    setCount(0);
    setTurnChar(CHARACTERS.circle);
    setStatusText(STATUS_TEXT.processing);
  }

  return(
      <Container>
        <Content>
          <GrobalStyle />
          <Header>
            <Title>Tic Tac Toe</Title>
            <Turn turns={Object.values(CHARACTERS)} turnChar={turnChar} />
          </Header>
          <Board
            oIsNext={oIsNext}
            squares={squares}
            characters={CHARACTERS}
            onPlay={handlePlay}
          />
          <Footer>
            <Status>{statusText}</Status>
            <Restart onRestart={restartPlay} />
          </Footer>
        </Content>
      </Container>
  );
}
