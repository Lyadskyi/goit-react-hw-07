import css from "./Error.module.css";

export default function Error() {
  return (
    <p className={css.error}>
      Sorry, an error occurred! Please reload the page...
    </p>
  );
}
