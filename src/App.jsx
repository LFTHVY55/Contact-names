import React, { useState } from 'react';
import ContactList from './components/contactList'; // Adjust the import path based on your project structure
import SelectedContact from './components/SelectedContact/selectedContact'; // Import the SelectedContact component

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId === null ? (
        <ContactList setSelectedContactId={setSelectedContactId} />
      ) : (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      )}
    </>
  );
}

export default App;
