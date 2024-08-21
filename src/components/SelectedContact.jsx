import { useState, useEffect } from "react";


export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);
  console.log(contact);
  return contact ? (
    <div className="allContactDetails">
      <div>Name: {contact.name}</div>
      <div>Address: {contact.address.street}</div>
      <div>Suite: {contact.address.suite}</div>
      <div>City: {contact.address.city}</div>
      <div>Zip Code: {contact.address.zipcode}</div>
      <div>Email: {contact.email}</div>
      <div>Phone: {contact.phone}</div>
      <div>Username: {contact.username}</div>
      <div>Website: {contact.website}</div>
      <div>Company Name: {contact.company.name}</div>
      <div>Company Catch Phrase: {contact.company.catchPhrase}</div>
      <div>Company BS: {contact.company.bs}</div>
      <div className="divButton"><div><button className="goBackButton" onClick={() => setSelectedContactId(null)}>Return</button></div></div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
