import './App.css'
import ContactList from './components/ContactList'
import { useState } from 'react';
import SelectedContact from './components/SelectedContact';

export default function App() {
  // const [contacts, setContacts] = useState(dummyContacts)
const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
    {selectedContactId === null ? 
      <ContactList setSelectedContactId = {setSelectedContactId}/>
      :
      <SelectedContact setSelectedContactId={setSelectedContactId} selectedContactId={selectedContactId}/>
    }
    </>
  );
}

// export default App
