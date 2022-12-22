import { Section,Title } from "./Wrapper.styled"

export const WrapperForContacts = ({ children }) => {
    return (
        <Section>
            <Title>Phonebook</Title>
            {children}
        </Section > 
    )
}