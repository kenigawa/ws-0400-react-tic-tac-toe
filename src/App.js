import React from 'react';
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

const Header = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
`;

const Footer = styled.div`
  padding: 16px;
`;

const Button = styled.a`
  display: inline-block;
  border: 2px solid black;
  border-radius: 4px;
  transition: all 0.5 ease;
  font-weight: bold;
  width: 100%;
  text-align: center;
  cursor: pointer;
`;

const StatusText = styled.div`
  padding: 8px;
  text-align: center;
`;

const STATUS = {
  processing: "processing",
  win: "win",
  draw: "draw"
}

const CHARACTERS = {
  circle: "○",
  cross: "×"
}

const initialState = {
  count: 0,
  isCircleTurn: true,
  progress: true,
  cells: new Array(9),
  statusText: STATUS.processing
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...initialState};
  }

  render() {
    return (
      <Container>
        <GrobalStyle />
        <Header>
          <Title>Tic Tac Toe</Title>
          <Turn isCircleTurn={this.state.isCircleTurn} characters={CHARACTERS} />
        </Header>
        <Board />
        <Footer> 
          <StatusText>{this.state.statusText}</StatusText>
          <Button>Restart</Button>
        </Footer>
      </Container>
    );
  }
}

