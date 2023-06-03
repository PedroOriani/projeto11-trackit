import styled from "styled-components"

export default function Header(){
    return(
        <SCHeader data-test="header">
            <p>TrackIt</p>
            <SCDivRight>
            <SCName>Pedro</SCName>
            <SCPerfilImage data-test="avatar"></SCPerfilImage>
            </SCDivRight>
        </SCHeader>
    );
}

const SCHeader = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0px 18px;

    position: fixed;
    z-index: 10;
    top: 0;

    background-color: #126BA5;

    font-family: 'Playball', cursive;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;

    color: #FFFFFF;
`

const SCDivRight = styled.div`
    display: flex;
`

const SCName = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;

    color: #FFFFFF;

    margin-right: 15px
`

const SCPerfilImage = styled.div`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    background-color: green;
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlAFNbMMcoO9LUzTNd4ScxQmnMEhhcrl55Ww&usqp=CAU');
    background-size: cover;
`