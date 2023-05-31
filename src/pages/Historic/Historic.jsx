import styled from "styled-components"
import Header from '../Header'
import Footer from '../Footer'

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

    background: #E5E5E5;
`