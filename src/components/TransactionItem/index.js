import {TransactionList,TitleItem,AmountItem,OptionIdItem,DeleteButton,DeleteImg} from './styledComponents'

const TransactionItem=(props)=>{
    const {details,isDeleted}=props
    const {title,amount,type,id}=details
    const deleted=()=>{
        isDeleted(id)
    }

    return(
        <TransactionList>
            <TitleItem>{title}</TitleItem>
            <AmountItem>{amount}</AmountItem>
            <OptionIdItem>{type}</OptionIdItem>
            <DeleteButton type="button" onClick={deleted}>
                <DeleteImg src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png" alt="delete"/>
            </DeleteButton>
        </TransactionList>
    )
}

export default TransactionItem