import React, { Component, Fragment } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, deleteEvent } = this.props;
    return (
      <Fragment>
        {events.map((event, i) => (
          <EventListItem key={i} event={event} deleteEvent={deleteEvent} />
        ))}
      </Fragment>
    );
  }
}

export default EventList;
