import styled from 'styled-components'

export const MoneyCon=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width:90%;
    @media screen and (max-width:576px){
        width:100%;
    }
    margin:10px;
`

export const Con=styled.div`
    border:1px solid #84cc16;
    background-color: #ecfccb;
    padding:10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin:10px;
    border-radius: 10px;
`

export const Img=styled.img`
    width:30%;
`

export const Contain=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin:10px;
`

export const Paragraph=styled.p`
    color:#475569;
    font-size:15px;
    @media screen and (max-width:576px){
        font-size: 10px;
    }
    margin:0px;
`

export const Amount=styled.p`
    color:#475569;
    font-size:20px;
    @media screen and (max-width:576px){
        font-size: 12px;
    }
    margin:0px;
`