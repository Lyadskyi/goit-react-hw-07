import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string().trim().min(7, "Too Short!").max(15).required("Required"),
});

export default function ContactForm() {
  const nameId = nanoid();
  const numberId = nanoid();
  const dispatch = useDispatch();

  const values = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    console.log("handleSubmit", values);

    dispatch(addContact({ name: values.name, number: values.number }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={values}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field
          className={css.input}
          type="text"
          name="name"
          id={nameId}
          placeholder="Your Name"
        />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label htmlFor={numberId}>Number</label>
        <Field
          className={css.input}
          type="text"
          name="number"
          id={numberId}
          placeholder="123-45-67"
        />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
