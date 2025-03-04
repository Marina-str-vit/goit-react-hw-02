import s from './Options.module.css'

export default function Options({ onUpdate, showResetBtn, onReset }) {
  return (
    <div className={s.options}>
      <button onClick={() => onUpdate("good")}>Good</button>
      <button onClick={() => onUpdate("neutral")}>Neutral</button>
      <button onClick={() => onUpdate("bad")}>Bad</button>
      {showResetBtn && <button onClick={onReset}>Reset</button>}
    </div>
  );
}

