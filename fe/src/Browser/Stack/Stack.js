import "./Stack.scss"
import { Window } from "../../Interface/Window";
import { StackFilters } from "./Component/Stack_Filters";
import { StackContainer } from "./Component/Stack_Container";
import { useState } from "react";
<<<<<<< HEAD

export function Stack({ 창닫기 }) {
  const [filter, setFilter] = useState("전체");

  return (
    <Window id="Stack" tabText="Stacks" 닫기={창닫기}>
=======
import { Routes, Route, useNavigate } from "react-router-dom";


export function Stack({ 창닫기 }) {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("전체");

  const handleClose = () => {
    navigate('/Portfolio/');
    창닫기();
  };

  return (
    <Window id="Stack" tabText="Stack" 닫기={handleClose}>
>>>>>>> be3593ad60895c5ca8d94bd1134d674442c4386e
      <div className="Container">
        <h2>사용할 수 있는 스택과 툴을 한 곳에 모았습니다.</h2>
        <StackFilters onFilterChange={setFilter} />
        <StackContainer filter={filter} />
      </div>
    </Window>
  );
}