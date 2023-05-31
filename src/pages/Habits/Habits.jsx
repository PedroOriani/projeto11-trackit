import styled from "styled-components"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Habits(){
    return(
        <>
            <Header />
            <SCBodyHabits>Habits</SCBodyHabits>
            <Footer />
        </>
    );
}

const SCBodyHabits = styled.div`
    padding-top: 70px;

    background: #E5E5E5;
`