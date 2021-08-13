function RadioButton(props) {
  return (
    <label>
      <input
        type="radio"
        value={props.value}
        name={props.name}
        checked={props.checked}
        onChange={(e) => props.onChange(e)}
      />
      {props.text}
    </label>
  );
}

export default RadioButton;