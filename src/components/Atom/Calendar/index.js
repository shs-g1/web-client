import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "react-modal";
import {
  ReduceSize,
  ModalText,
  ButtonContainer,
  ModalButton,
  TextArea,
  AddButton,
  TimePicker,
} from "./styled";

const Calendar = () => {
  const calendarRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents =
      JSON.parse(localStorage.getItem("calendarEvents")) || [];
    setEvents(storedEvents);
  }, []);

  useEffect(() => {
    localStorage.setItem("calendarEvents", JSON.stringify(events));
  }, [events]);

  const handleDateClick = (eventInfo) => {
    setSelectedDate(eventInfo.dateStr);
    console.log(eventInfo);
    setIsModalOpen(true);
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    console.log("Selected Time:", selectedTime);
    setSelectedTime(selectedTime);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    setEventDescription(e.target.value);
  };

  const handleAddEvent = () => {
    const newEvent = {
      title: eventDescription,
      date: selectedDate,
      time: selectedTime,
      allDay: true,
    };
    setEvents([...events, newEvent]);
    setSelectedTime("");
    setEventDescription("");
    closeModal();
    console.log(newEvent);
  };

  return (
    <ReduceSize>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        events={events}
        headerToolbar={{
          start: "prev,next",
          center: "title",
          end: "today",
        }}
        editable={true}
        dateClick={handleDateClick}
        titleFormat={{
          month: "numeric",
          year: "numeric",
        }}
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="일정 추가"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
          content: {
            width: "100%",
            maxWidth: "300px",
            height: "300px",
            margin: "auto",
            top: "50%",
            transform: "translateY(-50%)",
            background: "white",
            padding: "20px",
            borderRadius: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        {selectedDate && (
          <ButtonContainer>
            <ModalText>{selectedDate.toLocaleString()}</ModalText>
            <TimePicker onChange={handleTimeChange}></TimePicker>
          </ButtonContainer>
        )}
        <TextArea
          value={eventDescription}
          onChange={handleInputChange}
          rows={10}
          placeholder="일정을 입력하세요"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAddEvent();
            }
          }}
        ></TextArea>

        <ButtonContainer>
          <ModalButton onClick={closeModal}>닫기</ModalButton>
          <AddButton onClick={handleAddEvent}>추가</AddButton>
        </ButtonContainer>
      </Modal>
    </ReduceSize>
  );
};

export default Calendar;
