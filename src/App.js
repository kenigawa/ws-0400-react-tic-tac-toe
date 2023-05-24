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

export default function App() {
  const CHARACTERS = {
    circle: "○",
    cross: "×"
  }

  const STATUS_TEXT = {
    processing: "processing",
    win: "win",
    draw: "draw"
  }

  // state
  const [oIsNext, setoIsNext] = useState(true); 
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [count, setCount] = useState(0);
  const [turnChar, setTurnChar] = useState(CHARACTERS.circle);
  const [statusText, setStatusText] = useState(STATUS_TEXT.processing);

  function handlePlay(nextSquares) {
    setSquares(nextSquares);
    setoIsNext(!oIsNext);
    setCount((prev) => prev + 1);
    setTurnChar((prev) => prev === CHARACTERS.circle ? CHARACTERS.cross : CHARACTERS.circle);
  }

  function restartPlay() {
    setSquares(Array(9).fill(null));
    setoIsNext(true);
    setCount(0);
    setTurnChar(CHARACTERS.circle);
    setStatusText(STATUS_TEXT.processing);
  }
  
  function changeStatus(winner) {
    let status;
    // どちらかが勝ちの場合
    if(winner) {
      status = winner + " " + STATUS_TEXT.win;
      setStatusText(status);
    }  
    // 引き分けの場合
    if(!winner && count === 9) {
      status = STATUS_TEXT.draw;
      setStatusText(status);
    }
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
            onChangeStatus={changeStatus}
          />
          <Footer>
            <Status>{statusText}</Status>
            <Restart onRestart={restartPlay} />
          </Footer>
        </Content>
      </Container>
  );
}