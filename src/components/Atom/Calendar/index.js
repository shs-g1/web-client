import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { ReduceSize } from "./styled";

export default class Calendar extends React.Component {
  calendarRef = React.createRef();

  render() {
    const events = [{ title: "Sample Event", date: "2023-11-09" }];

    return (
      <ReduceSize>
        <FullCalendar
          ref={this.calendarRef}
          plugins={[dayGridPlugin]}
          events={events}
          headerToolbar={{
            start: "prev,next",
            center: "title",
            end: "today",
          }}
          titleFormat={{
            month: "numeric",
            year: "numeric",
          }}
        />
      </ReduceSize>
    );
  }

  someMethod() {
    let calendarApi = this.calendarRef.current.getApi();
    calendarApi.next();
  }
}
