import { createReducer } from "../../app/common/utils/reducerUtils";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventConstants";

const initialState = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "http://www.venmond.com/demo/vendroid/img/avatar/big.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL:
          "https://content-stage.likewiseapp.net/uploads/3eb6cf23-895b-45e9-b92c-5fb1b457dd04/bill-gates-profile-pic.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL:
          "https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/people19.png"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL:
      "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL:
          "https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/people19.png"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
      }
    ]
  }
];

const createEvent = (state, payload) => {
  return [...state, payload.event];
};

const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    payload.event
  ];
};

const deleteEvent = (state, payload) => {
  return [...state.filter(event => event.id !== payload.eventId)];
};

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent
});
