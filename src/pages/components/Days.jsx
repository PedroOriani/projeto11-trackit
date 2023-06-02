import styled from 'styled-components'

export default function Days(){
    
    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return(
        days.map((day, i) => (
            <SCDays data-test="habit-day" key={i}>{day}</SCDays>
        ))
        );
}

const SCDays = styled.button`
    width: 30px;
    height: 30px;

    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    border: 1px solid #D5D5D5;
    border-radius: 5px;

    background: none; // fazer props para aletrnância de cor
    color: #DBDBDB; // fazer props para aletrnância de cor

    display: flex;
    justify-content: center;
    align-items: center;

`