import css from "./Options.module.css";

export default function Options({ onUpdate, onReset, totalValue }) {
  return (
    <ul className={css.optionsList}>
      <li>
        <button
          className={css.optionBtn}
          onClick={() => {
            onUpdate("good");
          }}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className={css.optionBtn}
          onClick={() => {
            onUpdate("neutral");
          }}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className={css.optionBtn}
          onClick={() => {
            onUpdate("bad");
          }}
        >
          Bad
        </button>
      </li>
      <li>
        {totalValue > 0 && (
          <button className={css.optionBtn} onClick={onReset}>
            Reset
          </button>
        )}
      </li>
    </ul>
  );
}
