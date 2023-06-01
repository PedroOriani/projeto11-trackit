import styled from "styled-components"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Habit from '../components/Habit'

export default function Today() {
    return(
        <>
            <Header />
            <SCBodyToday>
                <SCContainerToday>
                    <SCData>Data</SCData>
                    <SCPercentage>Nenhum hábito concluído ainda</SCPercentage>
                    <Habit />
                </SCContainerToday>
            </SCBodyToday>
            <Footer />
        </>
    );
}

const SCBodyToday = styled.div`
    width: 100%;
    height: 100%;

    padding-top: 70px;
`

const SCContainerToday = styled.div`
    padding: 28px 17px;
`

const SCData = styled.p`
    color: #126BA5;

    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
`

const SCPercentage = styled.p`
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #BABABA; //ALTERNANCIA DE COR

    margin-bottom: 18px;
`