import { LI,H2,UL } from "./Contacts.styled"

export const Contacts = ({ contacts, deleteContact }) => {
    return (
        <>
            <H2>Contacts</H2>
            <UL>
            {contacts.map(item => (
                <LI key={item.id}>{item.name}: {item.number}
                    <div>
                        <button 
                            type="button"
                            onClick={() => {deleteContact(item.id) }}
                            //передача id в метод для удаления обьекта
                        >DELETE</button> 
                    </div>
                     
                </LI>    
            ))}
            </UL>
        </>
    )
}