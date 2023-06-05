import styled from "styled-components"
import Header from "../components/Header"
import Footer from "../components/Footer"
import MyHabit from "../components/MyHabit"
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { ThreeDots } from 'react-loader-spinner'
import { useState, useContext, useEffect } from 'react'
import DatasContext from '../components/DatasContext'
import axios from 'axios'

export default function Habits(){

    const [qntHabitos, setQntHabitos] = useState([]);
    const [add, setAdd] = useState(0);
    const [select, setSelect] = useState([])
    const [newHabitName, setNewHabitName] = useState('')

    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    const {dataUser, habitos, setHabitos} = useContext(DatasContext)

    let sum = 0;

    const token = {
        headers:{
          Authorization: `Bearer ${dataUser.token}`
        }
    };

    useEffect( () => {

            const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';

            const promise = axios.get(URL, token);
    
            promise.then( resposta => setHabitos(resposta.data));    
            promise.catch( erro => alert(erro.response));       
    
      }, []);

    function newHabit(){
        sum = add + 1
        setAdd(sum)
    }

    function consoleHabits(){
        return(
            console.log('alo')
        )
    }

    function selectDay(i) {
        if (select.includes(i)){
            const isSelected = select.some(d => d === i);
            const newList = select.filter(d => d !== i);
            setSelect(newList);
        }else{
            setSelect([...select, i]);
        }
    }

    function createHabit(){
        sum = add - 1
        setAdd(sum)
        setSelect([])

        const newhabitObj={
            name: newHabitName,
            days: select
        }

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

        const promise = axios.post(URL, newhabitObj, token);
    
        promise.then( resposta => console.log(resposta.data));    
        promise.catch( erro => alert(erro.response)); 
    }

    function cancelHabit(){
        sum = add - 1
        setAdd(sum)
        setSelect([])
    }

    return(
        <>
            <Header data-test="header"/>
            <SCBodyHabits>
                <SCContainerHabits>
                    <SCHabitsSup>
                        <p onClick={consoleHabits}>Meus hábitos</p>
                        <SCButtonAdd 
                        data-test="habit-create-btn" 
                        onClick={newHabit}
                        disabled={add % 2 === 1}
                        ></SCButtonAdd>
                    </SCHabitsSup>
                    <SCAddHabito data-test="habit-create-container" add={add}>
                        <SCInputHabito 
                        data-test="habit-name-input" 
                        type="text" 
                        placeholder="nome do hábito"
                        value={newHabitName}
                        onChange={(e) => setNewHabitName(e.target.value)}
                        ></SCInputHabito>
                        <SCDivDays>
                            {days.map((day, i) => (
                                <SCDays 
                                data-test="habit-day" 
                                key={i}
                                onClick={() => selectDay(i)}
                                selected = {select.includes(i)}
                                >{day}</SCDays>
                            ))}
                        </SCDivDays>
                        <SCDivButtons>
                            <SCCancel data-test="habit-create-cancel-btn" onClick={cancelHabit}>Cancelar</SCCancel>
                            <SCSave data-test="habit-create-save-btn" onClick={createHabit}>Salvar</SCSave>
                        </SCDivButtons>
                    </SCAddHabito>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    <MyHabit data-test="habit-container"/>
                </SCContainerHabits>
            </SCBodyHabits>
            <Footer data-test="menu"/>
        </>
    );
}

const SCBodyHabits = styled.div`
    width: 100%;
    height: 100%;

    padding-top: 70px;
    padding-bottom: 105px;
`
const SCContainerHabits = styled.div`
    padding: 22px 17px 0 18px;

    p{
        margin-top: 30px;
        display: block;
    }
`

const SCHabitsSup = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;

        color: #126BA5;

        margin-top: 0;
    }
`

const SCButtonAdd = styled(BsFillPlusSquareFill)`
    width: 40px;
    height: 35px;

    color: #52B6FF;

    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;

    border-radius: 4.63636px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
`

const SCAddHabito = styled.div`
    width: 340px;
    height: 180px;

    background: #FFFFFF;
    border-radius: 5px;

    padding: 18px 19px 15px 16px;

    margin-top: 20px;

    display: ${props => props.add % 2 === 0 ? 'none' : 'block'}
`

const SCInputHabito = styled.input`
    width: 303px;
    height: 45px;

    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    ::placeholder{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        
        color: #DBDBDB;
    }
`

const SCDivDays = styled.div`
    width: 234px;

    margin-top: 8px;

    display: flex;
    justify-content: space-between;


`

const SCDivButtons = styled.div`
    display: flex;
    align-items: center;

    padding: 29px 0 0 129px ;
`

const SCCancel = styled.button`
    width:69px;
    height: 20px;

    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #52B6FF;

    background: none;

    border: none;
`

const SCSave = styled.button`
    width: 84px;
    height: 35px;

    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;

    margin-left: 23px;

    display: flex;
    justify-content: center;
    align-items: center;

    color:#FFFFFF;

    background: #52B6FF;

    border-radius: 4.63636px;
    border: none;
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