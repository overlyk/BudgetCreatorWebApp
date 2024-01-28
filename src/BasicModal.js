export default function BasicModal({ onClose }) {
    return (
      <div className="modal">
        <p>
        <div>I'm a modal dialog</div>
        <button onClick={onClose}>Close</button>
        </p>
      </div>
    );
  }