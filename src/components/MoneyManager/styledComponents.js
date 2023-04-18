import styled from 'styled-components'

export const MainCon=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:30px;
    min-height: 100vh;
`

export const Header=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    background-image:url("https://assets.ccbp.in/frontend/react-js/money-manager/money-manager-bg.png");
    background-size:cover;
    width:95%;
    padding:20px;
    margin:20px;
    border-radius: 15px;
`

export const Heading=styled.h1`
    color:#475569;
    font-weight: bold;
`

export const Para=styled.p`
    color:#475569;
`
export const Span=styled.span`
    color:#0b69ff;
`

export const TransactionCon=styled.div`
    display:flex;
    flex-direction: row;
    width:100%;
    @media screen and (max-width:576px){
        flex-direction: column;
    }
`

export const Form=styled.form`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    border:1px solid #475569;
    border-radius: 10px;
    width:40%;
    margin:10px;
    padding:20px;
    @media screen and (max-width:576px){
        width:90%;
        margin-left:0px;
    }
`
export const Head =styled.h1`
    color:#475569;
    font-weight: bold;
`
export const LabelTitle=styled.label`
    color:#475569;
    padding:5px;
`

export const InputTitle=styled.input`
    border:1px solid #475569;
    border-radius: 2px;
    padding:10px;
    margin:5px;
    outline:none;
    width:90%;
`

export const LabelAmount=styled.label`
    color:#475569;
    padding:5px;
`

export const InputAmount=styled.input`
    border:1px solid #475569;
    border-radius: 2px;
    padding:10px;
    margin:5px;
    outline:none;
    width:90%;
`

export const LabelSelect=styled.label`
    color:#475569;
    padding:5px;
`

export const Select=styled.select`
    padding:5px;
    margin:5px;
    width:90%;
`

export const Option=styled.option`
    padding:5px;
`

export const Button=styled.button`
    border:none;
    cursor: pointer;
    background-color: #0b69ff;
    color:white;
    padding:10px;
    border-radius: 5px;
    margin-left:10px;
`
export const HistoryCon=styled.div`
    width:50%;
    margin:10px;
    padding:20px;
    display:flex;
    flex-direction: column;
    border:1px solid #475569;
    border-radius: 10px;
    @media screen and (max-width:576px){
        width:90%;
        margin-left:0px;
    }
`

export const Ul=styled.ul`
    display:flex;
    flex-direction: column;
    padding-left:0px;
`

export const Li=styled.li`
    display:flex;
    flex-direction: row;
    border:1px solid #475569;
    padding-left:10px;
`

export const TitlePara=styled.p`
    width:28%;
`

export const AmountPara=styled.p`
    width:28%;
`

export const TypePara=styled.p`
    width:40%;
`
