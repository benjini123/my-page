export function PrimaryButton(props: any) {
  return (
    <button onClick={props.onClick} className="primary_button">
      <h5>{props.children}</h5>
    </button>
  );
}
