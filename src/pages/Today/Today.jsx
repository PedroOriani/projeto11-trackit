import styled from "styled-components"
import Header from '../Header'
import Footer from '../Footer'

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