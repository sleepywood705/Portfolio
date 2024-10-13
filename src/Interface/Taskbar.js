import './Taskbar.css'
import styled from 'styled-components';
import { useState, useEffect } from 'react';


/* 작업표시줄 */
export function Taskbar() {
  return (
    <div id="Taskbar">
      <StartButton>
        <div style={{ backgroundColor: "#BB2525" }}></div>
        <div style={{ backgroundColor: "#186F65" }}></div>
        <div style={{ backgroundColor: "#387ADF" }}></div>
        <div style={{ backgroundColor: "#F4CE14" }}></div>
      </StartButton>
      <TimeContainer>
        <Time />
        <Yeartoday />
      </TimeContainer>
    </div>
  );
}
function Time() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const ampm = hours >= 12 ? "오후" : "오전";
  const formatHours = hours % 12 === 0 ? 12 : hours % 12;
  const formatTime = `${ampm} ${formatHours}:${minutes < 10 ? "0" : ""}${minutes}`;

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {clearInterval(timerID);};
  }, []);

  function tick() {setCurrentTime(new Date());}

  return <div>{formatTime}</div>;
}
function Yeartoday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return <div>{formattedDate}</div>;
}
/* 스타일 컴포넌트 */
const StartButton = styled.button`
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  padding: 6px;
  height: calc(100% - 8px); aspect-ratio: 1;
  // border: 1px solid #000;
  border-radius: 4px;
  gap: 2px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  cursor: pointer;

  & > div {
    width: 100%; aspect-ratio: 1;
  }

  &:hover {
    background-color: #fff;
  }
`
const TimeContainer = styled.div`
  margin-left: auto;
  padding: 0 10px;
  width: fit-content; height: 100%;
  font-size: 13px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`