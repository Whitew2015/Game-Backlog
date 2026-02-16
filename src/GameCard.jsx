export default function GameCard({ title, status }) {
    return (
        <div>
            <h3>{title}</h3>
            <p className={`status ${status.toLowerCase()}`}>
                {status}</p>
        </div>
    );
}