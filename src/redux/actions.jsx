export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_USER = 'SET_USER';
export const SET_FEEDBACKS = 'SET_FEEDBACKS';
export const ADD_FEEDBACK = 'ADD_FEEDBACK';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_FEEDBACK = 'DELETE_FEEDBACK';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

export const registerUser = (userData) => async (dispatch) => {
  try {
    const {email, password} = userData;
    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password}),
    });

    if (!response.ok) throw new Error('Sign up error');
    // const data = await response.json();
  } catch (error) {
    console.error('Error:', error.message);
  }
};

export const loginUser = (credentials, loginCallback) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:3001/users?email=${credentials.email}&password=${credentials.password}`
    );
    if (!response.ok) throw new Error('Login user error');

    const users = await response.json();
    if (users.length === 0) throw new Error('Incorrect email or password');

    const foundUser = users[0];
    dispatch({ type: SET_USER, payload: foundUser });
    loginCallback();
  } catch (error) {
    console.error('Log in error:', error.message);
  }
};

export const fetchFeedbacks = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/feedbacks');
    if (!response.ok) throw new Error('Error loading feedbacks');

    const data = await response.json();
    dispatch({ type: SET_FEEDBACKS, payload: data });
  } catch (error) {
    console.error('Error:', error.message);
  }
};

export const addFeedback = (feedback) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/feedbacks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedback),
    });

    if (!response.ok) throw new Error('Error adding feedback');
    const data = await response.json();
    dispatch({ type: ADD_FEEDBACK, payload: data });
  } catch (error) {
    console.error('Error:', error.message);
  }
};

export const updateUserProfile = (id, userData) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3001/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    if (!response.ok) throw new Error('Error updating profile');
    const updatedUser = await response.json();
    dispatch({ type: UPDATE_USER, payload: updatedUser });
  } catch (error) {
    console.error('Error:', error.message);
  }
};

export const deleteFeedback = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3001/feedbacks/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) throw new Error('Error deleting feedback');
    dispatch({ type: DELETE_FEEDBACK, payload: id });
  } catch (error) {
    console.error('Error:', error.message);
  }
};