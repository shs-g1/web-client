import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { ReduceSize } from "./styled";

const Calendar = () => {
  const events = [{ title: "Sample Event", date: "2023-11-09" }];

  return (
    <ReduceSize>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events} /*events 배열은 달력에 표시될 이벤트 목록이다.*/
      />
    </ReduceSize>
  );
};
export default Calendar;
