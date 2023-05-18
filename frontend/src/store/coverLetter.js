import jwtFetch from "./jwt";

const RECEIVE_COVER_LETTER = "coverletters/RECEIVE_COVER_LETTER"
const RECEIVE_COVER_LETTERS = "coverletters/RECEIVE_COVER_LETTERS"
const RECEIVE_NEW_COVER_LETTER = "coverletters/RECEIVE_NEW_COVER_LETTER"
const REMOVE_COVER_LETTER = "coverletters/REMOVE_COVER_LETTER"
const RECEIVE_COVER_LETTER_ERRORS = "coverletters/RECEIVE_COVER_LETTER_ERRORS"
const CLEAR_COVER_LETTER_ERRORS = "coverletters/CLEAR_COVER_LETTER_ERRORS"

const receiveCoverLetter = coverletter => ({
    type: RECEIVE_COVER_LETTER,
    coverletter
})

const receiveCoverLetters = coverletters => ({
  type: RECEIVE_COVER_LETTERS,
  coverletters
})

const receiveNewCoverLetter = coverletter => ({
    type: RECEIVE_NEW_COVER_LETTER,
    coverletter
})

const receiveErrors = errors => ({
    type: RECEIVE_COVER_LETTER_ERRORS,
    errors
  });

const removeCoverLetter = coverletterId => ({
    type: REMOVE_COVER_LETTER,
    coverletterId
})

  export const clearCoverLetterErrors = errors => ({
      type: CLEAR_COVER_LETTER_ERRORS,
      errors
  });

  // export const fetchEvents = () => async dispatch => {
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

  export const fetchCoverLetter = (CoverLetterId) => async dispatch => {
    try {
        const res = await jwtFetch(`/api/events/${eventId}`)
        const event = await res.json();
        dispatch(receiveEvent(event))
    } catch (err) {
        const resBody = await err.json();
        if (resBody.statusCode === 400) {
            return dispatch(receiveErrors(resBody.errors));
        }
  }
}

export const createEvent = data => async dispatch => {
    // debugger;
    try {

      const res = await jwtFetch('/api/events/new', {
        method: 'POST',
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify(data)
      });
      let event = await res.json();
      const nyTime = formatInTimeZone(event.eventDate, 'America/New_York', 'yyyy-MM-dd HH:mm:ss zzz')
      event = { ...event, eventDate: nyTime }
      dispatch(receiveNewEvent(event));
    } catch(err) {
      const resBody = await err.json();
      if (resBody.statusCode === 400) {
        return dispatch(receiveErrors(resBody.errors));
      }
    }
  };

  export const deleteEvent = (eventId) => async dispatch => {
    try {
    await jwtFetch(`/api/events/${eventId}`, {
        method: "DELETE"
      });
      dispatch(removeEvent(eventId));
    } catch(err) {
      const resBody = await err.json();
      if (resBody.statusCode === 400) {
        return dispatch(receiveErrors(resBody.errors))
      }
    }
}

export const updateEvent = (event) => async (dispatch) => {
  // debugger
  try {
    const res = await jwtFetch(`/api/events/${event.id}`, {
      method: 'PATCH',
      body: JSON.stringify(event),
      headers: {
          'Content-Type': 'application/json'
      }
  });
  const data = await res.json();
  // const nyTime = formatInTimeZone(data.eventDate, 'America/New_York', 'yyyy-MM-dd HH:mm:ss zzz')
  // data.eventDate =  nyTime
  dispatch(receiveEvent(data));
  } catch(err) {
    const resBody = await err.json();
    if (resBody.statusCode === 400) {
      return dispatch(receiveErrors(resBody.errors))
    }
  }
};

const nullErrors = null;

export const eventsErrorReducer = (state = nullErrors, action) => {
    switch (action.type) {
      case RECEIVE_EVENT_ERRORS:
        return action.errors;
      case RECEIVE_EVENT:
      case CLEAR_EVENT_ERRORS:
        return nullErrors;
      default:
        return state;
    }
}

const eventsReducer =(state = { all: {}, user: {}, new: undefined }, action) => {
  const newState = { ...state }
  switch (action.type) {
    case RECEIVE_EVENTS:
      return { ...newState, all: action.events, new: undefined }
    case RECEIVE_EVENT:
      return { ...newState, one: action.event, new: undefined}
    case RECEIVE_NEW_EVENT:
      return { ...newState, new: action.event};
    case REMOVE_EVENT: {
      delete newState[action.eventId];
      return newState;
      }
    case RECEIVE_USER_LOGOUT:
      return { ...newState, user: {}, new: undefined }
    default:
      return state;
  }
};

export default eventsReducer;