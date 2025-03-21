export default function Toast(message) {
  return (
    <div className="toast toast-top toast-center z-200">
      <div className="alert alert-success text-white">
        <span>Message sent successfully.</span>
      </div>
    </div>
  );
}
