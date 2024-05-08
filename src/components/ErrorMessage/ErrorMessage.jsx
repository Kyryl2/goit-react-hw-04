import toast from "react-hot-toast";

function ErrorMessage() {
  toast.error("Error");
  return (
    <>
      <p style={{ display: "flex", justifyContent: "center" }}>
        Something went wrong... Please try again!
      </p>
    </>
  );
}

export default ErrorMessage;
