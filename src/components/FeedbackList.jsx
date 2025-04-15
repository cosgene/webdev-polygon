import React from 'react';
import { List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const FeedbackList = ({ feedbacks, onDeleteFeedback }) => {
  return (
    <Box sx={{ p: 2, maxWidth: 600, mx: 'auto' }}>
      <h3>Feedback list</h3>
      {feedbacks.length === 0 ? (
        <p>There are no feedback yet</p>
      ) : (
        <List>
          {feedbacks.map((feedback) => (
            <ListItem
              key={feedback.id}
              secondaryAction={
                <IconButton edge="end" onClick={() => onDeleteFeedback(feedback.id)}>
                  <DeleteIcon />
                </IconButton>
              }
              sx={{ border: '1px solid #ccc', borderRadius: 1, mb: 1 }}
            >
              <ListItemText
                primary={`ID: ${feedback.id}`}
                secondary={
                  <>
                    <strong>Name:</strong> {feedback.name}
                    <br />
                    <strong>Message:</strong> {feedback.message}
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default FeedbackList;