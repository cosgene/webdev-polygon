import React, {useEffect} from 'react';
import { Typography, Box } from '@mui/material';
import FeedbackList from './FeedbackList';
import { useSelector, useDispatch } from 'react-redux';
import { useLoginState } from '../context/AuthContext';
import { fetchFeedbacks, deleteFeedback, blockFeedback } from '../redux/actions';

const MainPage = () => {
  const {isLoggedIn} = useLoginState();
  const dispatch = useDispatch();
  const { feedbacks } = useSelector((state) => state);

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

  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Welcome!
      </Typography>
      <Typography variant="body1">
        This is the main page.
      </Typography>
      <FeedbackList feedbacks={feedbacks} onDeleteFeedback={handleDeleteFeedback} onBlockFeedback={handleBlockFeedback}/>
    </Box>
  );
};

export default MainPage;