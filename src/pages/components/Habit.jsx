import styled from 'styled-components'
import {BsFillCheckSquareFill} from 'react-icons/bs'

export default function Habit() {

    const habits = [
        { "id": 3 , "name": "Acordar" , "done": true , "currentSequence": 1 , "highestSequence": 1 }, 
        { "id": 4 , "name": "Dormir" , "done": true , "currentSequence": 3 , "highestSequence": 18},
        { "id": 5 , "name": "Comer" , "done": true , "currentSequence": 11 , "highestSequence": 11},
    ];

    function checkTask (i){
        
    }

    return(
        habits.map((habit, i) => (
            <SCHabit key={i}>
                <SCContainerText>
                    <SCTitle>{habit.name}</SCTitle>
                    <SCContainerSequence>
                        <SCSequence>Sequência atual:</SCSequence>
                        <SCSequenceDays>{habit.currentSequence}</SCSequenceDays>
                    </SCContainerSequence>
                    <SCContainerRecord>
                        <SCRecord>Seu record:</SCRecord>
                        <SCRecordDays>{habit.highestSequence}</SCRecordDays>
                    </SCContainerRecord>
                </SCContainerText>
                <SCbuttonCheck onClick={() => checkTask(i)}/>
            </SCHabit>
        ))
    );
}

const SCHabit = styled.div`
    width: 340px;
    min-height: 94px;

    padding: 13px 15px 12px 13px;

    background-color: #FFFFFF;

    border-radius: 5px;

    margin-top: 10px;

    display: flex;
    align-items: center;
`

const SCContainerText = styled.div`
    width: 243px;
`

const SCTitle = styled.p`
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color: #666666;
`

const SCContainerSequence = styled.div`
    display: flex;

    margin-top: 7px;
`

const SCSequence = styled.p`
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;

    color: #666666;
`

const SCSequenceDays = styled.p`
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;

    margin-left: 4px;

    color: #666666; //Alternancia de cor
`

const SCContainerRecord = styled.div`
    display: flex;
`

const SCRecord = styled.p`
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;

    color: #666666;
`

const SCRecordDays = styled.p`
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;

    margin-left: 4px;

    color: #666666; //Alternancia de cor
`

const SCbuttonCheck = styled(BsFillCheckSquareFill)`
    width: 69px;
    height: 69px;

    color: #EBEBEB;
`
