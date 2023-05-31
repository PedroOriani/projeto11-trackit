import styled from "styled-components"
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Historic(){
    return(
        <>
            <Header />
            <SCBodyHistoric>Historic</SCBodyHistoric>
            <Footer />
        </>
    );
}

const SCBodyHistoric = styled.div`
    padding-top: 70px;
`