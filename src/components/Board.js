import { useEffect } from "react";
import styled from 'styled-components';

const BoardContainer = styled.div`
  border: 1px solid black;
`;

const RowContainer = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  &:last-child {
    border-bottom: 0;
  }
`;

const Cell = styled.a`
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  text-align: center;
  border-right: 1px solid black;
  &:hover {
    cursor: pointer;
  }
  &:last-child {
    border-right: 0;
  }
`;

const Square = ({ value, onSquareClick }) => {
    return(
      <Cell onClick={onSquareClick}>
        {value}
      </Cell>
    );
}  

export default function Board({ oIsNext, squares, characters, onPlay, onChangeStatus }) {

    useEffect(
      () => {
        const winner = judgeWinner(squares);
        onChangeStatus(winner);
      }
    );
  
    // 盤面をクリック時
    function hundleClick(index) {
      if(squares[index] || judgeWinner(squares)) {
        return;
      }
      // 配列のコピーを作成
      const nextSquares = squares.slice();
      nextSquares[index] = oIsNext === true ? characters.circle : characters.cross;
      onPlay(nextSquares);
    }
  
    // 勝利判定
    function judgeWinner(squares) {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];
  
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
  
    return (
      <BoardContainer>
        <RowContainer>
          <Square value={squares[0]} onSquareClick={() => hundleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => hundleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => hundleClick(2)} />
        </RowContainer>
        <RowContainer>
          <Square value={squares[3]} onSquareClick={() => hundleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => hundleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => hundleClick(5)} />
        </RowContainer>
        <RowContainer>
          <Square value={squares[6]} onSquareClick={() => hundleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => hundleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => hundleClick(8)} />
        </RowContainer>
      </BoardContainer>
    );
}