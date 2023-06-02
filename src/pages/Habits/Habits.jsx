import styled from "styled-components"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Days from '../components/Days'
import MyHabit from "../components/MyHabit"
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { ThreeDots } from 'react-loader-spinner'

export default function Habits(){
    return(
        <>
            <Header data-test="header"/>
            <SCBodyHabits>
                <SCContainerHabits>
                    <SCHabitsSup>
                        <p>Meus hábitos</p>
                        <SCButtonAdd data-test="habit-create-btn"></SCButtonAdd>
                    </SCHabitsSup>
                    <SCAddHabito data-test="habit-create-container">
                        <SCInputHabito data-test="habit-name-input" type="text" placeholder="nome do hábito"></SCInputHabito>
                        <SCDivDays>
                            <Days />
                        </SCDivDays>
                        <SCDivButtons>
                            <SCCancel data-test="habit-create-cancel-btn">Cancelar</SCCancel>
                            <SCSave data-test="habit-create-save-btn">Salvar</SCSave>
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
