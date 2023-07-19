import Spinner from "react-bootstrap/Spinner";

type ButtonProps = {
  text: string;
  loading: boolean;
  disabled: boolean;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      type="submit"
      style={{
        borderRadius: "20px",
        fontSize: "12px",
        width: "75px",
        height: "35px",
      }}
      className="btn btn-danger btn-sm  "
    >
      {!props.loading ? (
        props.text
      ) : (
        <Spinner animation="border" size="sm" variant="light" />
      )}
    </button>
  );
};

export default Button;
