import styled from 'styled-components'
import {BsFillCheckSquareFill} from 'react-icons/bs'
import { useState, useContext, useEffect } from 'react'
import DatasContext from '../components/DatasContext'
import axios from 'axios'

export default function Habit() {

    const {dataUser} = useContext(DatasContext)

    const [todayHabits, setTodayHabits] = useState([]);
    const [clicked, setClicked] = useState([]);

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
            const newList = clicked.filter(h => {
                h.id !== habit.id
                console.log(habit.id);
                console.log(h.id)
        });
            setClicked(newList);


        }else{
            setClicked([...clicked, habit.id]);

            const URL ='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO/check';

            const promise = axios.post(URL, '', token);
    
            promise.then( resposta => console.log(resposta.data));    
            promise.catch( erro => alert(erro.response)); 
        }
    }

    console.log(clicked)

    return(
        todayHabits.map(habit => (
            <SCHabit key={habit.id}>
                <SCContainerText>
                    <SCTitle data-test="today-habit-name">{habit.name}</SCTitle>
                    <SCContainerSequence data-test="today-habit-sequence">
                        <SCSequence>Sequência atual:</SCSequence>
                        <SCSequenceDays>{habit.currentSequence}</SCSequenceDays>
                    </SCContainerSequence>
                    <SCContainerRecord data-test="today-habit-record">
                        <SCRecord>Seu record:</SCRecord>
                        <SCRecordDays>{habit.highestSequence}</SCRecordDays>
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

    color: ${props => props.clicked ? '#8FC549' : '#E7E7E7'};
`
