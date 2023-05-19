import { styled } from "styled-components";

const Container = styled.div`
    display: flex;
`

const TurnElement = styled.div`
    padding: 8px 16px;
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
    border-bottom: ${isCircleTurn => isCircleTurn ? "4px solid black" : "0"};
`

const Turn = ({isCircleTurn, characters}) => {
    return (
        <Container>
            {characters.map(item => {
                return (
                    <TurnElement key={item} isCircleTurn={isCircleTurn}>
                        {item}
                    </TurnElement>
                );
            })}
        </Container>
    );
};


export default Turn;