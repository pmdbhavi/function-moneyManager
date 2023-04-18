import {MainCon,Header,Heading,Para,Span,TransactionCon,Form,Head,LabelTitle,InputTitle,LabelAmount,InputAmount,LabelSelect,Select,Option,Button,HistoryCon,Ul,Li,TitlePara,AmountPara,TypePara} from './styledComponents'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
const transactionTypeOptions = [
    {
      optionId: 'INCOME',
      displayText: 'Income',
    },
    {
      optionId: 'EXPENSES',
      displayText: 'Expenses',
    },
  ]

const MoneyManager=()=>{
    const [title,setTitle]=useState('')
    const [amount,setAmount]=useState('')
    const [optionId,setOptionId]=useState(transactionTypeOptions[0].optionId)
    const [list,setList]=useState([])

    const onChangeTitle=(event)=>{
        setTitle(event.target.value)
    }

    const onChangeAmount=(event)=>{
        setAmount(event.target.value)
    }

    const onChangeOptionId=(event)=>{
        setOptionId(event.target.value)
    }

    const addHistory=(event)=>{
        event.preventDefault()
        const item=transactionTypeOptions.find(each=>each.optionId===optionId)
        const {displayText}=item
        if(title.length!==0 && amount.length!==0){
        const newHistory={
            id:uuidv4(),
            title,
            amount:parseInt(amount),
            type:displayText,
        }
        setList(prevState=>[...prevState,newHistory])
        setTitle('')
        setAmount('')
        setOptionId(transactionTypeOptions[0].optionId)
    }
    else{
        alert("Please enter the valid Details")
    }
    }

    const getIncome=()=>{
        let income=0
        list.forEach(each=>{
            if(each.type===transactionTypeOptions[0].displayText){
                income+=each.amount
            }
        })
        return income
    }

    const getExpenses=()=>{
        let expenses=0
        list.forEach(each=>{
            if(each.type===transactionTypeOptions[1].displayText){
                expenses+=each.amount
            }
        })
        return expenses
    }
    const totalIncome=getIncome()
    const totalExpenses=getExpenses()

    const isDeleted=(id)=>{
        const filteredResult=list.filter(each=>each.id!==id)
        setList(filteredResult)
    }

    return(
        <MainCon>
            <Header>
                <Heading>Hi, Richard</Heading>
                <Para>Welcome back to your <Span>Money Manager</Span></Para>
            </Header>
            <MoneyDetails totalIncome={totalIncome} totalExpenses={totalExpenses} />
            <TransactionCon>
                <Form onSubmit={addHistory}>
                    <Head>Add Transaction</Head>
                    <LabelTitle htmlFor="title">TITLE</LabelTitle>
                    <InputTitle id="title" type="text" placeholder="TITLE" value={title} onChange={onChangeTitle} />
                    <LabelAmount htmlFor="amount">AMOUNT</LabelAmount>
                    <InputAmount id="amount" type="text" placeholder="AMOUNT" value={amount} onChange={onChangeAmount} />
                    <LabelSelect htmlFor="type">Type</LabelSelect>
                    <Select id="type" value={optionId} onChange={onChangeOptionId} >
                        {transactionTypeOptions.map(each=>(
                            <Option key={each.optionId} value={each.optionId}>{each.displayText}</Option>
                        ))}
                    </Select>
                    <Button type="submit">Add</Button>
                </Form>
                <HistoryCon>
                    <Head>History</Head>
                    <Ul>
                        <Li>
                        <TitlePara>Title</TitlePara>
                        <AmountPara>Amount</AmountPara>
                        <TypePara>Type</TypePara>
                        </Li>
                        {list.map(each=>(
                            <TransactionItem details={each} key={each.id} isDeleted={isDeleted} />
                        ))}
                    </Ul>
                </HistoryCon>
            </TransactionCon>
        </MainCon>
    )
}

export default MoneyManager