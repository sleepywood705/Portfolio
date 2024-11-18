import "./Stack.scss"
import { Window } from "../../Interface/Window";
import { StackFilters } from "./Component/Stack_Filters";
import { StackContainer } from "./Component/Stack_Container";
import { useState } from "react";

export function Stack({ 창닫기 }) {
  const [filter, setFilter] = useState("전체");

  return (
    <Window id="Stack" tabText="Stacks" 닫기={창닫기}>
      <div className="Container">
        <h2>사용할 수 있는 스택과 툴을 한 곳에 모았습니다.</h2>
        <StackFilters onFilterChange={setFilter} />
        <StackContainer filter={filter} />
      </div>
    </Window>
  );
}