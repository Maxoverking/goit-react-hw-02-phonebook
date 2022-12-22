import React, { Component } from 'react'
import { FormContainer } from './Form.styled'
import { nanoid } from 'nanoid'


export class Form extends Component {
state = {
    id:'',
    name: '',
    number: ''
}
    inputAddedName = (evt) => {
    const {name,value,id} = evt.currentTarget;
    this.setState({
        [name]: value,
        id
    })
    }
    onSubmitForm = (evt) => {
    evt.preventDefault();
    this.props.submitData(this.state);
    this.resetForm();
    }
    resetForm = ()=>{
    this.setState({name: '',number:''})
    }
    render() {
const uniqueId = nanoid();
    return (
    <FormContainer>
        <form action="" style={{
            display: 'flex',
            flexDirection: 'column'
        }}
            onSubmit={this.onSubmitForm}
        >
        <label >Name</label>
            <input
                id={uniqueId}
                autoComplete="off"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters"
                value={this.state.name}
                onChange={this.inputAddedName}
                required />
                <br />
        <label>Number</label>
            <input
                id={uniqueId}
                autoComplete="off"
                type="text"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Name may contain only letters"
                value={this.state.number}
                onChange={this.inputAddedName}
                required />

            <br />
            <button type="submit">Add Contact</button>
            </form>
      </FormContainer>
    )
  }
}


