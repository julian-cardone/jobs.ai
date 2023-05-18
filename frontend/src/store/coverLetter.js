import jwtFetch from "./jwt";
import { RECEIVE_USER_LOGOUT } from "./session";

const RECEIVE_COVER_LETTER = "coverletters/RECEIVE_COVER_LETTER";
const RECEIVE_COVER_LETTERS = "coverletters/RECEIVE_COVER_LETTERS";
const RECEIVE_NEW_COVER_LETTER = "coverletters/RECEIVE_NEW_COVER_LETTER";
const REMOVE_COVER_LETTER = "coverletters/REMOVE_COVER_LETTER";
const RECEIVE_COVER_LETTER_ERRORS = "coverletters/RECEIVE_COVER_LETTER_ERRORS";
const CLEAR_COVER_LETTER_ERRORS = "coverletters/CLEAR_COVER_LETTER_ERRORS";

const receiveCoverLetter = (coverletter) => ({
  type: RECEIVE_COVER_LETTER,
  coverletter,
});

const receiveCoverLetters = (coverletters) => ({
  type: RECEIVE_COVER_LETTERS,
  coverletters,
});

const receiveNewCoverLetter = (coverletter) => ({
  type: RECEIVE_NEW_COVER_LETTER,
  coverletter,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_COVER_LETTER_ERRORS,
  errors,
});

const removeCoverLetter = (coverletterId) => ({
  type: REMOVE_COVER_LETTER,
  coverletterId,
});

export const clearCoverLetterErrors = (errors) => ({
  type: CLEAR_COVER_LETTER_ERRORS,
  errors,
});

// export const fetchCoverLettersByUser = () => async dispatch => {
//   try {
//       const res = await jwtFetch('/api/events/')
//       const events = await res.json();
//       dispatch(receiveEvents(events))
//   } catch (err) {
//       const resBody = await err.json();
//       if (resBody.statusCode === 400) {
//           return dispatch(receiveErrors(resBody.errors));
//       }
//   }
// };

// export const fetchCoverLettersByUser = () => async dispatch => {
//   try {
//       const res = await jwtFetch('/api/events/')
//       const events = await res.json();
//       dispatch(receiveEvents(events))
//   } catch (err) {
//       const resBody = await err.json();
//       if (resBody.statusCode === 400) {
//           return dispatch(receiveErrors(resBody.errors));
//       }
//   }
// };

//   export const fetchCoverLetter = (userId) => async dispatch => {
//     try {
//         const res = await jwtFetch(`/api/coverletter/${userId}`)
//         const event = await res.json();
//         dispatch(receiveEvent(event))
//     } catch (err) {
//         const resBody = await err.json();
//         if (resBody.statusCode === 400) {
//             return dispatch(receiveErrors(resBody.errors));
//         }
//   }
// }

export const newCoverLetter = (data) => async (dispatch) => {

  try {
    const res = await jwtFetch("/api/coverletter/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let coverLetter = await res.json();
    dispatch(receiveNewCoverLetter(coverLetter));
  } catch (err) {
    const resBody = await err.json();
    if (resBody.statusCode === 400) {
      return dispatch(receiveErrors(resBody.errors));
    }
  }
};

//   export const deleteEvent = (eventId) => async dispatch => {
//     try {
//     await jwtFetch(`/api/events/${eventId}`, {
//         method: "DELETE"
//       });
//       dispatch(removeEvent(eventId));
//     } catch(err) {
//       const resBody = await err.json();
//       if (resBody.statusCode === 400) {
//         return dispatch(receiveErrors(resBody.errors))
//       }
//     }
// }

// export const updateEvent = (event) => async (dispatch) => {
//   // debugger
//   try {
//     const res = await jwtFetch(`/api/events/${event.id}`, {
//       method: 'PATCH',
//       body: JSON.stringify(event),
//       headers: {
//           'Content-Type': 'application/json'
//       }
//   });
//   const data = await res.json();
//   // const nyTime = formatInTimeZone(data.eventDate, 'America/New_York', 'yyyy-MM-dd HH:mm:ss zzz')
//   // data.eventDate =  nyTime
//   dispatch(receiveEvent(data));
//   } catch(err) {
//     const resBody = await err.json();
//     if (resBody.statusCode === 400) {
//       return dispatch(receiveErrors(resBody.errors))
//     }
//   }
// };

const nullErrors = null;

export const coverLetterErrorReducer = (state = nullErrors, action) => {
  switch (action.type) {
    case RECEIVE_COVER_LETTER_ERRORS:
      return action.errors;
    case RECEIVE_COVER_LETTER:
    case CLEAR_COVER_LETTER_ERRORS:
      return nullErrors;
    default:
      return state;
  }
};

const coverLetterReducer = (
  state = { all: {}, user: {}, new: undefined },
  action
) => {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_COVER_LETTERS:
      return { ...newState, all: action.coverletters, new: undefined };
    case RECEIVE_COVER_LETTER:
      return { ...newState, one: action.coverletter, new: undefined };
    case RECEIVE_NEW_COVER_LETTER:
      return { ...newState, new: action.coverletter };
    case REMOVE_COVER_LETTER: {
      delete newState[action.eventId];
      return newState;
    }
    case RECEIVE_USER_LOGOUT:
      return { ...newState, user: {}, new: undefined };
    default:
      return state;
  }
};

export default coverLetterReducer;
