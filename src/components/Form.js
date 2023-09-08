import React from 'react';
import {Form as BTform, FormGroup, Input, Label, Col, Row, Button} from 'reactstrap';
import DateTime from './Date';

const Form = ({name, amount, handleAmount, handleName, handleSubmitForm, handleDeleteExpenses}) => (
    <BTform style={{ margin: 10}} onSubmit={handleSubmitForm}>
        <FormGroup className="row">
        <Label for="exampleName" sm={2} className="col-lg-2">
                <h4> Current Date </h4>
            </Label>
            <Col sm={4} className="col-lg-10">
               <DateTime/>
            </Col>
        </FormGroup>
        <FormGroup className="row">
            <Label for="exampleName" sm={2} className="col-lg-2">
                <h4> Expense Name </h4>
            </Label>
            <Col sm={4} className="col-lg-10">
                <Input 
                    type="text"
                    name="name"
                    id="expenseName"
                    placeholder="Write your expense name"
                    value={name}
                    onChange={handleName}
                />
            </Col>
        </FormGroup>
        <FormGroup className="row">
            <Label for="exampleAmount" sm={2} className="col-lg-2">
                <h4> Expense Amount(R) </h4>            
            </Label>
            <Col sm={4} className="col-lg-10">
                <Input 
                    type="number"
                    name="amount"
                    id="expenseAmount"
                    placeholder="Write your expense amount"
                    value={amount}
                    onChange={handleAmount}
                />
            </Col>
        </FormGroup>
        <Row className="buttons">
            <Col>
                <Button type="submit" className="btn btn-primary">
                    Add Expense
                </Button>

                <Button type="submit" onClick={handleDeleteExpenses} className="btn btn-secondary">
                    Clear Expenses
                </Button>
            </Col>
        </Row>
    </BTform>
)

export default Form