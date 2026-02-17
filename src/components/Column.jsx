import { Droppable, Draggable } from '@hello-pangea/dnd';

function Column({ title, className, tasks }) {
  return (
    <div className={`box ${className}`}>
      <h2>{title}</h2>
      
      <Droppable droppableId={title}>
        {(provided) => (
          <div 
            className="task-list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                {(provided) => (
                  <div
                    className="task-card"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {task.text}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default Column;