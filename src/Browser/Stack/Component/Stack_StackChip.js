export function StackChip({ imgSrc, description, chips }) {
  return (
    <div className="StackChip">
      <img src={imgSrc} />
      <div className="chips">
        {chips.map((chip, index) => (
          <span key={index}>{chip}</span>
        ))}
      </div>
      <div className="description">
        <ul>
          {description.split(", ").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
