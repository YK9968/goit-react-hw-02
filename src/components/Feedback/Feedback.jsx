import css from "./Feedback.module.css";

export default function Feedback({
  value: { good, bad, neutral },
  totalValue,
  percentageCalculation,
}) {
  return (
    <ul className={css.feedBackList}>
      <li>
        <p className={css.feedBackText}>Good: {good}</p>
      </li>
      <li>
        <p className={css.feedBackText}>Neutral: {neutral}</p>
      </li>
      <li>
        <p className={css.feedBackText}>Bad: {bad}</p>
      </li>
      <li>
        <p className={css.feedBackText}>Total: {totalValue}</p>
      </li>
      <li>
        <p className={css.feedBackText}>Positive: {percentageCalculation}%</p>
      </li>
    </ul>
  );
}
