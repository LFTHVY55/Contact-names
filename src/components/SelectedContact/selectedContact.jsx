// SelectedContact.jsx

import React, { useState, useEffect } from 'react';

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  // State for the selected contact and a setter function
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    // Fetch the data for the selected contact using selectedContactId
    const fetchSelectedContact = async () => {
      try {
        // Make the API call to get the details for the selected contact
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedContactId}`);
        const data = await response.json();

        // Set the selected contact in the state
        setSelectedContact(data);
      } catch (error) {
        console.error(error);
      }
    };

    // Call the fetchSelectedContact function when selectedContactId changes
    fetchSelectedContact();
  }, [selectedContactId]);

  // A button to go back to the contact list
  const handleGoBack = () => {
    // Reset the selected contact ID in the parent component (App)
    setSelectedContactId(null);
  };

  return (
    <div>
      {/* Render selected contact details */}
      {selectedContact ? (
        <>
          <div>{`Details for Contact ${selectedContactId}`}</div>
          <div>{`Name: ${selectedContact.name}`}</div>
          <div>{`Email: ${selectedContact.email}`}</div>
          <div>{`Phone: ${selectedContact.phone}`}</div>
          {/* Add more details here based on the selectedContact */}
        </>
      ) : (
        <div>Loading...</div>
      )}

      {/* Button to go back to the contact list */}
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default SelectedContact;
