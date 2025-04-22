import React, { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import FeedbackList from './FeedbackList';
import UsersTable from './UsersTable';
import { useLoginState } from '../context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeedbacks, deleteFeedback, blockFeedback } from '../redux/actions';

const AdminPage = () => {
    const {isLoggedIn} = useLoginState();
    const dispatch = useDispatch();
    const { feedbacks, user } = useSelector((state) => state);
  
    useEffect(() => {
      if (isLoggedIn) {
        dispatch(fetchFeedbacks());
      }
    }, [isLoggedIn, dispatch]);
  
    const handleDeleteFeedback = (id) => {
      dispatch(deleteFeedback(id));
    };
  
    const handleBlockFeedback = (id, isBlocked) => {
      dispatch(blockFeedback(id, isBlocked));
    };

  if (user?.role !== "admin") {
    return (
        <Typography>
            Access denied
        </Typography>
    );
  }

  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Users Table
        <UsersTable/>
      </Typography>
      <Typography variant="h4" gutterBottom>
        Feedback List
        <FeedbackList feedbacks={feedbacks} onDeleteFeedback={handleDeleteFeedback} onBlockFeedback={handleBlockFeedback}/>
      </Typography>
    </Box>
  );
};

export default AdminPage;