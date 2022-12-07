import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../model';
import OneTodo from './OneTodo';
import './style.css';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? 'dragactive' : ''}`}
            ref={provided.innerRef}
            {...provided.droppableProps}>
            <span className="todos__heading">Active Tasks</span>
            {todos.map((todo, index) => (
              <OneTodo index={index} todo={todo} setTodos={setTodos} todos={todos} key={todo.id} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            className={`todos remove ${snapshot.isDraggingOver ? 'dragcomplete' : ''}`}
            ref={provided.innerRef}
            {...provided.droppableProps}>
            <span className="todos__heading">Completed Tasks</span>
            {completedTodos.map((todo, index) => (
              <OneTodo
                index={index}
                todo={todo}
                setTodos={setCompletedTodos}
                todos={completedTodos}
                key={todo.id}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
