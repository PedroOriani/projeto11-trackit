import styled from "styled-components"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Days from '../components/Days'

export default function Habits(){
    return(
        <>
            <Header />
            <SCBodyHabits>
                <SCContainerHabits>
                    <SCHabitsSup>
                        <p>Meus hábitos</p>
                        <SCButtonAdd>+</SCButtonAdd>
                    </SCHabitsSup>
                    <SCInputAdd>
                        <SCInputHabito type="text" placeholder="nome do hábito"></SCInputHabito>
                        <Days />
                    </SCInputAdd>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </SCContainerHabits>
            </SCBodyHabits>
            <Footer />
        </>
    );
}

const SCBodyHabits = styled.div`
    padding-top: 70px;
`
const SCContainerHabits = styled.div`
    padding: 22px 17px 0 18px;

    p{
        margin-top: 30px;
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
        font-size: 22.976px;
        line-height: 29px;

        color: #126BA5;
    }
`

const SCButtonAdd = styled.button`
    width: 40px;
    height: 35px;

    background: #52B6FF;

    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;

    color: #FFFFFF;

    border-radius: 4.63636px;
    border: none;
`

const SCInputAdd = styled.div`
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