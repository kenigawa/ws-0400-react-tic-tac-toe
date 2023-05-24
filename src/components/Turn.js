import styled from 'styled-components';

const TurnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TurnElement = styled.div`
  padding: 8px 16px;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: ${({$isTurn}) => ($isTurn === true ? '3px solid black' : '0')};
`;

export default function Turn({ turns, turnChar }) {
  return(
    <TurnContainer>
      {turns.map(item => {
        const isTurn = item === turnChar;
        return(
          <TurnElement key={item} $isTurn={isTurn}>
            {item}
          </TurnElement>
        );
      })}
    </TurnContainer>
  );
}