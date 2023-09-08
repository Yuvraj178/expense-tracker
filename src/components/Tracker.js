import React, { useState, useEffect  } from 'react';
import { reactstrap, Container,   Card, CardText, CardBody, CardTitle } from 'reactstrap';
import Form from './Form';
import List from '../layout/List'

const MY_EXPENSES = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []

function Tracker() {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState("");
    const [expenses, setExpenses] = useState(MY_EXPENSES);
  
    const handleName = event => {
        console.log('Name ', event.target.value)
        setName(event.target.value)
    }

    const handleAmount = event => {
        console.log('Amount ', event.target.value)
        setAmount(event.target.value)
    }

    const handleSubmitForm = event => {
    event.preventDefault()
    if (name !== '' && amount > 0 ) {
        const expense = { name, amount }
        setExpenses([...expenses,expense])
        setName('')
        setAmount('')
    } 
    else {
        alert('Invalid expense name or amount, please try again.')
        }
    }

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses))
    }, [expenses])

    const handleDeleteExpenses = () => {
        setExpenses([])
    }

    const handleDeleteExpense = index => {
        const item = [...expenses]
        item.splice(index, 1);
        setExpenses(item);
    }
      
    return (
        <Container className="text-center container-fluid">
        <reactstrap fluid>
          <Card className="Card">
              <CardTitle>
                  <div className="header-row">
                      <h3>
                          Modify Expenses
                      </h3>
                  </div>
              </CardTitle>
            <CardBody className="CardBody">
                <CardTitle className="CardTitle">
                Expenses Total: {' '}
                </CardTitle>
               
                <CardText className="amount-full"> 
                R{' '} 
               
                {expenses.reduce((accumulator, currentValue) => {
                    return (accumulator += parseInt(currentValue.amount))
                }, 0)}
                </CardText>
            </CardBody>
            
            <Form 
                name={name}
                amount={amount}
                handleName={handleName}
                handleAmount={handleAmount}
                handleSubmitForm={handleSubmitForm}
                handleDeleteExpenses={handleDeleteExpenses}
            />
            </Card>

            <List expenses={expenses} handleDeleteExpense={handleDeleteExpense}/>
        </reactstrap>
      </Container>
    )
}

export default Tracker;