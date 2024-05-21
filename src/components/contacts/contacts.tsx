import React from 'react';
import './contacts.css';

interface ContactsProps {
  name: string;
  email: string;
  phone: string;
}

const Contacts: React.FC<ContactsProps> = ({ name, email, phone }) => {
  return (
    <div className="contacts-container">
      <h2 className="contacts-title">Contact Information</h2>
      <ul className="contacts-list">
        <li className="contacts-item">Name: {name}</li>
        <li className="contacts-item">Email: {email}</li>
        <li className="contacts-item">Phone: {phone}</li>
      </ul>
    </div>
  );
};

export default Contacts;
