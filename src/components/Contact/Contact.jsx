import { IoIosContact } from "react-icons/io";
import { AiTwotonePhone } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div>
        <div className={css.userData}>
          <IoIosContact size={40} />
          <p className={css.desc}>{name}</p>
        </div>
        <div className={css.userData}>
          <AiTwotonePhone size={40} />
          <p className={css.desc}>{number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
}
