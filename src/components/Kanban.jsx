import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Paper, Typography, Box } from '@mui/material';

const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: ['task-1', 'task-2'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Completed',
      taskIds: ['task-4'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

const KanbanComponent = () => {
  const [state, setState] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = state.columns[source.droppableId];
    const endColumn = state.columns[destination.droppableId];
    const newTaskIds = Array.from(startColumn.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newStartColumn = {
      ...startColumn,
      taskIds: newTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [source.droppableId]: newStartColumn,
      },
    };

    if (startColumn !== endColumn) {
      newState.columns[destination.droppableId].taskIds.push(draggableId);
    }

    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex">
        {state.columnOrder.map((columnId) => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

          return (
            <div key={column.id} className="flex-1">
              <Paper style={{ margin: 8, padding: 8, width: 300 }}>
                <Typography variant="h6">{column.title}</Typography>
                <Droppable droppableId={column.id}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="mt-2"
                    >
                      {tasks.map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided) => (
                            <Box
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              sx={{
                                userSelect: 'none',
                                padding: 2,
                                margin: '0 0 8px 0',
                                backgroundColor: '#fff',
                                borderRadius: 1,
                                boxShadow: 1,
                              }}
                            >
                              {task.content}
                            </Box>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </Paper>
            </div>
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default KanbanComponent;



