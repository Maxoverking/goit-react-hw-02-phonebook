import React ,{ Component } from "react";
import { Container } from "./App.styled";
import { WrapperForContacts } from "./Wrapper/Wrapper";
import { Form } from "./Form/Form";

import { Contacts } from "./Contacts/Contacts";

export class App extends Component{
  state = {
    contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  }
  getFormData = data => {
    this.setState(({ contacts })=>({
      contacts:[data,...contacts]
    }))
  }

  //получаем значение уникального id фильтруем масив и contacts
  //возвращаем (оставляем в массиве) обьекты без уникального id
  deleteContact = uniqueId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== uniqueId)
    }))     
  }
  
  render() {
    const {contacts} = this.state

    console.log("🚀  contacts", contacts);
    return (
    <Container>
        <WrapperForContacts>
          {/*  */}
          <Form submitData={this.getFormData} /> 
          
          {/* передаем propsами contacts данные для отрисовки разметки 
          и метод deleteContact для удаления разметки по id  */}
          <Contacts contacts={contacts} deleteContact={this.deleteContact} />
          
        </WrapperForContacts>
    </Container>
  );
  }
  
};



