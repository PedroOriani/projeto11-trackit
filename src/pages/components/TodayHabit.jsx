import styled from 'styled-components'
import {BsFillCheckSquareFill} from 'react-icons/bs'
import { useState, useContext, useEffect } from 'react'
import DatasContext from '../components/DatasContext'
import axios from 'axios'

export default function Habit() {

    const {dataUser, todayHabits, setTodayHabits, clicked, setClicked} = useContext(DatasContext)

    const token = {
        headers:{
          Authorization: `Bearer ${dataUser.token}`
        }
    };

    useEffect( () => {

            const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';

            const promise = axios.get(URL, token);
    
            promise.then( resposta => setTodayHabits(resposta.data));    
            promise.catch( erro => alert(erro.response));       
    
      }, []);

    function checkTask (habit){
        if (clicked.includes(habit.id)){
            unselect(habit.id)

            const URL =`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`;

            const promise = axios.post(URL, '', token);
    
            promise.then( resposta => console.log('deu certo'));    
            promise.catch( erro => alert(erro.response)); 

        }else{
            setClicked([...clicked, habit.id]);

            const URL =`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`;

            const promise = axios.post(URL, '', token);
    
            promise.then( resposta => console.log('deu certo'));    
            promise.catch( erro => alert(erro.response)); 
        }
    }

    function unselect(i){
        let index;
        for (let j = 0; j < clicked.length; j++){
            if (clicked[j] === i){
                index = j;
            }
        }
        const slice1 = clicked.slice(0, index)
        const slice2 = clicked.slice(index+1)
        const slicesName = [];

        for (let j = 0; j < slice1.length; j++){
            slicesName.push(slice1[j])
        }
        for (let j = 0; j < slice2.length; j++){
            slicesName.push(slice2[j])
        }        
        setClicked(slicesName);
    }

    const len = todayHabits.length;
    const check = clicked.length;
    

    return(
        todayHabits.map(habit => (
            <SCHabit key={habit.id}>
                <SCContainerText>
                    <SCTitle data-test="today-habit-name">{habit.name}</SCTitle>
                    <SCContainerSequence data-test="today-habit-sequence">
                        <SCSequence>Sequência atual:</SCSequence>
                        <SCSequenceDays clicked={clicked.includes(habit.id)}>
                            {habit.currentSequence}
                        </SCSequenceDays>
                    </SCContainerSequence>
                    <SCContainerRecord data-test="today-habit-record">
                        <SCRecord>Seu record:</SCRecord>
                        <SCRecordDays higher={habit.currentSequence === habit.highestSequence && habit.currentSequence > 0  }>
                            {habit.highestSequence}
                        </SCRecordDays>
                    </SCContainerRecord>
                </SCContainerText>
                <SCbuttonCheck 
                data-test="today-habit-check-btn"
                clicked={clicked.includes(habit.id)}
                onClick={() => checkTask(habit)}
                />
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

    color: ${props => props.clicked ? '#8FC549' : '#666666'}; //Alternancia de cor
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

    color: ${props => props.higher ? '#8FC549' : '#666666'} ; //Alternancia de cor
`

const SCbuttonCheck = styled(BsFillCheckSquareFill)`
    width: 69px;
    height: 69px;

    color: ${props => props.clicked ? '#8FC549' : '#E7E7E7'};
`
