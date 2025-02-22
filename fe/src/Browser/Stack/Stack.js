import "./Stack.scss"
import { Window } from "../../Interface/Window";
import { StackFilters } from "./component/Stack_Filters";
import { StackContainer } from "./component/Stack_Container";
import { useState } from "react";
import { useWindowClose } from "../../Hook/Hook";


export function Stack({ 창닫기 }) {
  const windowClose = useWindowClose(창닫기);
  const [filter, setFilter] = useState("전체");

  return (
    <Window id="Stack" tabText="Stack" 닫기={windowClose}>
      <div className="Container">
        <h2>사용할 수 있는 스택과 툴을 한 곳에 모았습니다.</h2>
        <StackFilters onFilterChange={setFilter} />
        <StackContainer filter={filter} />
      </div>
    </Window>
  );
}