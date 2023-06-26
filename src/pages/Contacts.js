import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import Form from "components/Form/Form";
import { useEffect } from "react";
// import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operation";
import { getIsLoading } from "redux/contacts/selectors";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>

      <title>Phonebook</title>

      <Form />
      <div>{isLoading && 'Request in progress...'}</div>
      <Filter />
      <ContactList />
    </>
  );
}