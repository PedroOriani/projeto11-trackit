import styled from "styled-components"
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Today() {
    return(
        <>
            <Header />
            <SCBodyToday>Today</SCBodyToday>
            <Footer />
        </>
    );
}

const SCBodyToday = styled.div`
    width: 100%;
    height: 100%;

    padding-top: 70px;
`