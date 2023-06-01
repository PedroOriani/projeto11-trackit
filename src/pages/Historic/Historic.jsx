import styled from "styled-components"
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Historic(){
    return(
        <>
            <Header />
            <SCBodyHistoric>
                <SCContainerHistoric>
                    <SCTitle>Histórico</SCTitle>
                    <SCDescription>Em breve você poderá ver o histórico dos seus hábitos aqui!</SCDescription>
                </SCContainerHistoric>
            </SCBodyHistoric>
            <Footer />
        </>
    );
}

const SCBodyHistoric = styled.div`
    padding-top: 70px;
`

const SCContainerHistoric = styled.div`
    padding: 28px 17px;
`

const SCTitle = styled.p`
    color: #126BA5;

    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
`

const SCDescription = styled.p`
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;

    margin-top: 17px;
`