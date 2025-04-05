const FeedbackList = ({feedbacks}) => {
    return (
        <div>
            <h2>Feedback</h2>
            {feedbacks.length === 0 ? (
                <p>There are no feedback yet</p>
            ) : (
                <ul>
                    {feedbacks.map((fb, index) => (
                        <li key={index}>
                            <strong>{fb.name}:</strong> {fb.message}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default FeedbackList;