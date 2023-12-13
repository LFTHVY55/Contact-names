// ContactRow.jsx

import React from 'react';

const ContactRow = ({ setSelectedContactId, contact }) => {
  const { id, name, email, phone } = contact;

  const handleContactClick = () => {
    // Set the selected contact ID using the prop directly
    setSelectedContactId(id);
  };

  return (
    <tr onClick={handleContactClick}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
};

export default ContactRow;
