import './TodoList.css';
import { Window } from '../Interface/Window';
import { useState, useEffect, useRef } from 'react';


export function TodoList({ 창닫기 }) {
  
  const [todos, setTodos] = useState({});
  const [datePickerTop, setDatePickerTop] = useState('-80px');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [todoCount, setTodoCount] = useState(0);

  useEffect(() => {
    const dateKey = selectedDate.toISOString().split('T')[0];
    setTodoCount((todos[dateKey] || []).length);
  }, [todos, selectedDate]);

  const addTodo = (todo) => {
    const dateKey = selectedDate.toISOString().split('T')[0];
    setTodos({
      ...todos,
      [dateKey]: [...(todos[dateKey] || []), { text: todo, completed: false }],
    });
  };

  const toggleComplete = (index) => {
    const dateKey = selectedDate.toISOString().split('T')[0];
    const newTodos = [...(todos[dateKey] || [])];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos({
      ...todos,
      [dateKey]: newTodos,
    });
  };

  const deleteTodo = (index) => {
    const dateKey = selectedDate.toISOString().split('T')[0];
    const newTodos = [...(todos[dateKey] || [])];
    newTodos.splice(index, 1);
    setTodos({
      ...todos,
      [dateKey]: newTodos,
    });
  };

  const handleDateChange = (e) => {
    setSelectedDate(new Date(e.target.value));
  };

  const formatDate = (date) => {
    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const dayNumber = date.getDate();
    const year = date.getFullYear();
    return { day, month, dayNumber, year };
  };

  const handleDateClick = () => {
    setDatePickerTop((prevTop) => (prevTop === '80px' ? '0px' : '80px'));
  };

  const { day, month, dayNumber, year } = formatDate(selectedDate);
  const dateKey = selectedDate.toISOString().split('T')[0];

  return (
    <Window id="TodoList" tabText="투두리스트" 닫기={창닫기}>
      <div className="Container">
        <input
          type="date"
          value={selectedDate.toISOString().split('T')[0]}
          onChange={handleDateChange}
          className="date-picker"
          style={{ top: datePickerTop }}
        />
        <h2>오늘 할 일<span>{todoCount}</span>개</h2>
        <Todos todos={todos[dateKey] || []} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        <div className="cont_date" onClick={handleDateClick}>
          <div className="date">{`${dayNumber}`}</div>
          <div className="wrap">
            <p className="year">{`${year}`}</p>
            <p className="month">{`${month}`}</p>
          </div>
          <div className="day">{day}</div>
        </div>
        <NewTodoForm addTodo={addTodo} />
      </div>
    </Window>
  );
}


function Todos({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <li>오늘은 뭘 해볼까?</li>
      ) : (
        todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleComplete(index)} className="todo-text">
              {todo.text}
            </span>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(index)}
              className="todo-checkbox"
            />
            <button onClick={() => deleteTodo(index)} className="delete-btn">
              <lord-icon
                src="https://cdn.lordicon.com/hjbrplwk.json"
                trigger="hover"
                colors="primary:#646e78,secondary:#545454,tertiary:#ebe6ef,quaternary:#3a3347"
                style={{ aspectRatio: 1, height: '24px' }}
              >
              </lord-icon>
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

function NewTodoForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState('');
  const inputRef = useRef(null);  // useRef 훅을 사용해 인풋의 참조를 만듭니다.

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
      inputRef.current.focus();  // 서밋 후 인풋에 포커스를 설정합니다.
    }
  };

  return (
    <form onSubmit={handleSubmit} className="new-todo-form">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Create a new Todo"
        ref={inputRef}  // 인풋 요소에 ref를 연결합니다.
      />
      <button type="submit">추가하기</button>
    </form>
  );
}
