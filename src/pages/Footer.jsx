import styled from "styled-components"

export default function Footer(){
    return(
        <SCFooter>
            <SCTextFooter>Hábitos</SCTextFooter>
            <SCPorcentage></SCPorcentage>
            <SCTextFooter>Histórico</SCTextFooter>
        </SCFooter>
    );
}

const SCFooter = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    z-index: 10;
    bottom:0;

    padding: 0px 36px 0px 31px;
`

const SCTextFooter = styled.p`
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #52B6FF;
`

const SCPorcentage = styled.div`
    width: 91px;
    height: 91px;

    background: #52B6FF;
    
    position: fixed;
    left: 139.5px;
    bottom: 10px;

    border-radius: 45.5px;
`