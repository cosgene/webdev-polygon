const FeedbackList = ({feedbacks, onDeleteFeedback}) => {
    return (
        <div>
            <h2>Feedback</h2>
            {feedbacks.length === 0 ? (
                <p>There are no feedback yet</p>
            ) : (
                <ul>
                    {feedbacks.map((fb) => (
                        <li key={fb.id}>
                            <div>
                                <strong>ID: {fb.id}:</strong> 
                                <br/>
                                <strong>Name:</strong> {fb.name}
                                <br/>
                                <strong>Message:</strong> {fb.message}
                            </div>
                            <button onClick={() => onDeleteFeedback(fb.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default FeedbackList;