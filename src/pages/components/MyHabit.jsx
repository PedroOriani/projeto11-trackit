import styled from 'styled-components'
import {BsTrash} from 'react-icons/bs'
import { useState, useContext } from 'react'
import DatasContext from '../components/DatasContext'
import axios from 'axios'

export default function MyHabit() {

    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    const {dataUser, habitos} = useContext(DatasContext)

    const habits = habitos

    const token = {
        headers:{
          Authorization: `Bearer ${dataUser.token}`
        }
    };

    function deleteHabit(id){
        confirm('Gostaria realmente de apagar o hábito')
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`

        const promise = axios.delete(URL, token);
    
        promise.then( resposta => console.log('deu certo'));

        promise.catch( erro => alert('deu ruim')); 
    }

    return(
        habits.map((habit, i) => (
            <SCHabit data-test="habit-container" key={i}>
                <SCName data-test="habit-name">{habit.name}</SCName>
                <SCDivDays>
                    {weekDays.map((day, i) => (
                        <SCDays 
                        data-test="habit-day" 
                        key={i}
                        selected={habit.days.includes(i)}
                        >{day}</SCDays>
                    ))}
                </SCDivDays>
                <SCDelete 
                onClick={() => deleteHabit(habit.id)}
                data-test="habit-delete-btn"/>
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
const SCDays = styled.button`
    width: 30px;
    height: 30px;

    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    border: 1px solid #D5D5D5;
    border-radius: 5px;

    background: ${props => props.selected ? '#CFCFCF' : 'none'};
    color: ${props => props.selected ? '#ffffff' : '#DBDBDB'};

    display: flex;
    justify-content: center;
    align-items: center;
`