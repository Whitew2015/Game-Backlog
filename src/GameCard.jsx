export default function GameCard({ title, status, onDelete}) {
    return (
        <div>
            <h3>{title}</h3>
            <p className={`status ${status.toLowerCase()}`}>
                {status}</p>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}