// src/pages/Kanban.jsx
import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableItem } from './SortableItem';

import './Kanban.css';

const initialTasks = {
  todo: ['Task 1', 'Task 2'],
  inProgress: ['Task 3'],
  done: ['Task 4'],
};

const Kanban = () => {
  const [columns, setColumns] = useState(initialTasks);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const [sourceColumn, sourceIndex] = active.id.split('-');
    const [targetColumn, targetIndex] = over.id.split('-');

    if (sourceColumn === targetColumn && sourceIndex !== targetIndex) {
      const newItems = [...columns[sourceColumn]];
      const movedItem = newItems.splice(sourceIndex, 1)[0];
      newItems.splice(targetIndex, 0, movedItem);
      setColumns({ ...columns, [sourceColumn]: newItems });
    }
  };

  return (
    <div className="kanban-container">
      <h2>🗂️ Kanban Board</h2>
      <div className="kanban-board">
        {Object.keys(columns).map((column) => (
          <div key={column} className="kanban-column">
            <h3>{column === 'todo' ? 'To Do' : column === 'inProgress' ? 'In Progress' : 'Done'}</h3>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext
                items={columns[column].map((_, index) => `${column}-${index}`)}
                strategy={verticalListSortingStrategy}
              >
                {columns[column].map((item, index) => (
                  <SortableItem key={`${column}-${index}`} id={`${column}-${index}`} content={item} />
                ))}
              </SortableContext>
            </DndContext>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kanban;
