import styled from 'styled-components';

const BoardContainer = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 182px;
  border-left: 1px solid black;
  border-top: 1px solid black;
`;

const Cell = styled.div`
  width: 60px;
  height: 60px;
  font-size: 2rem;
  text-align: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;

  &:hover {
    cursor: pointer;
  }
`;

const Square = ({ value, onClick }) => {
    return(
      <Cell onClick={onClick}>
        {value}
      </Cell>
    );
}


// 勝利判定
export default function Board({ squares, onPlay }) {
    return (
      <BoardContainer>
        {
          squares.map((value, index) => {
             return <Square value={value} onClick={() => onPlay(index)} />
          })
        }
      </BoardContainer>
    );
}
