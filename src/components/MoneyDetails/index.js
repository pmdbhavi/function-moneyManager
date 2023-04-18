import {MoneyCon,Con,Img,Contain,Paragraph,Amount} from './styledComponents'

const MoneyDetails=(props)=>{
    const {totalIncome,totalExpenses}=props
    return(
        <MoneyCon>
            <Con>
                <Img src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png" alt="balance"/>
                <Contain>
                    <Paragraph>Your Balance</Paragraph>
                    <Amount>Rs {totalIncome-totalExpenses}</Amount>
                </Contain>
            </Con>
            <Con>
                <Img src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png" alt="income"/>
                <Contain>
                    <Paragraph>Your Income</Paragraph>
                    <Amount>Rs {totalIncome}</Amount>
                </Contain>
            </Con>
            <Con>
                <Img src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png" alt="expenses"/>
                <Contain>
                    <Paragraph>Your Expenses</Paragraph>
                    <Amount>Rs {totalExpenses}</Amount>
                </Contain>
            </Con>
        </MoneyCon>
    )
}

export default MoneyDetails