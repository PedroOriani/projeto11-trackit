import styled from 'styled-components'
import Days from './Days'
import {BsTrash} from 'react-icons/bs'

export default function MyHabit() {

    const habits = [
        {
            id: 1,
            name: "Nome do hábito",
            days: [1, 3, 5]
        },
        {
            id: 2,
            name: "Nome do hábito 2",
            days: [1, 3, 4, 6]
        }
    ];

    return(
        habits.map((habit, i) => (
            <SCHabit data-test="habit-container" key={i}>
                <SCName data-test="habit-name">{habit.name}</SCName>
                <SCDivDays>
                    <Days />
                </SCDivDays>
                <SCDelete data-test="habit-delete-btn"/>
            </SCHabit>
        ))
    );
}

const SCHabit = styled.div`
    width: 340px;
    min-height: 91px;

    padding: 13px 15px 15px 13px;

    background-color: #FFFFFF;

    border-radius: 5px;

    margin-top: 10px;
    
    position: relative;
`

const SCName = styled.div`
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color: #666666;
`

const SCDivDays = styled.div`
    width: 234px;

    margin-top: 8px;

    display: flex;
    justify-content: space-between;
`

const SCDelete = styled(BsTrash)`
    width: 15px;
    height: 17px;

    position: absolute;
    top: 11px;
    right: 10px;
`
