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
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableItem } from './SortableItem';
import { FiPlus, FiMoreVertical, FiEdit2, FiTrash2, FiCheck, FiX } from 'react-icons/fi';

import './Kanban.css';

const initialTasks = {
  todo: [
    { id: 'todo-1', title: 'Design new dashboard layout', priority: 'high' },
    { id: 'todo-2', title: 'Review user feedback', priority: 'medium' },
    { id: 'todo-3', title: 'Update documentation', priority: 'low' }
  ],
  inProgress: [
    { id: 'progress-1', title: 'Implement dark mode', priority: 'high' },
    { id: 'progress-2', title: 'Fix responsive issues', priority: 'medium' }
  ],
  done: [
    { id: 'done-1', title: 'Setup project structure', priority: 'high' },
    { id: 'done-2', title: 'Install dependencies', priority: 'low' }
  ],
};

const priorities = [
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
];

const Kanban = () => {
  const [columns, setColumns] = useState(initialTasks);
  const [adding, setAdding] = useState({}); // { column: true/false }
  const [newTask, setNewTask] = useState({ title: '', priority: 'medium' });
  const [editing, setEditing] = useState({}); // { column, index }
  const [editTask, setEditTask] = useState({ title: '', priority: 'medium' });

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

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  const getColumnTitle = (column) => {
    switch (column) {
      case 'todo': return 'To Do';
      case 'inProgress': return 'In Progress';
      case 'done': return 'Done';
      default: return column;
    }
  };

  // Add Task
  const handleAddTask = (column) => {
    if (!newTask.title.trim()) return;
    const newId = `${column}-${Date.now()}`;
    setColumns({
      ...columns,
      [column]: [
        ...columns[column],
        { id: newId, title: newTask.title, priority: newTask.priority },
      ],
    });
    setAdding({ ...adding, [column]: false });
    setNewTask({ title: '', priority: 'medium' });
  };

  // Delete Task
  const handleDeleteTask = (column, index) => {
    const newCol = [...columns[column]];
    newCol.splice(index, 1);
    setColumns({ ...columns, [column]: newCol });
  };

  // Edit Task
  const handleEditTask = (column, index) => {
    setEditing({ column, index });
    setEditTask({
      title: columns[column][index].title,
      priority: columns[column][index].priority,
    });
  };
  const handleEditSave = (column, index) => {
    if (!editTask.title.trim()) return;
    const newCol = [...columns[column]];
    newCol[index] = { ...newCol[index], ...editTask };
    setColumns({ ...columns, [column]: newCol });
    setEditing({});
  };
  const handleEditCancel = () => setEditing({});

  return (
    <div className="kanban-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2>🗂️ Kanban Board</h2>
      </div>
      <div className="kanban-board">
        {Object.keys(columns).map((column) => (
          <div key={column} className="kanban-column">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3>{getColumnTitle(column)}</h3>
              <button
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', padding: '0.4rem 0.8rem' }}
                onClick={() => setAdding({ ...adding, [column]: !adding[column] })}
              >
                <FiPlus /> Add Task
              </button>
            </div>
            {/* Add Task Form */}
            {adding[column] && (
              <div style={{ marginBottom: '1rem', background: '#f1f5f9', borderRadius: 8, padding: '0.75rem' }}>
                <input
                  type="text"
                  placeholder="Task title"
                  value={newTask.title}
                  onChange={e => setNewTask({ ...newTask, title: e.target.value })}
                  style={{ width: '100%', marginBottom: 8, padding: '0.5rem', borderRadius: 6, border: '1px solid #e5e7eb' }}
                />
                <select
                  value={newTask.priority}
                  onChange={e => setNewTask({ ...newTask, priority: e.target.value })}
                  style={{ width: '100%', marginBottom: 8, padding: '0.5rem', borderRadius: 6, border: '1px solid #e5e7eb' }}
                >
                  {priorities.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                </select>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button style={{ background: '#10b981' }} onClick={() => handleAddTask(column)}><FiCheck /> Add</button>
                  <button style={{ background: '#ef4444' }} onClick={() => setAdding({ ...adding, [column]: false })}><FiX /> Cancel</button>
                </div>
              </div>
            )}
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext
                items={columns[column].map((_, index) => `${column}-${index}`)}
                strategy={verticalListSortingStrategy}
              >
                {columns[column].map((item, index) => (
                  editing.column === column && editing.index === index ? (
                    <div key={item.id} className="kanban-card" style={{ background: '#f1f5f9', marginBottom: 8 }}>
                      <input
                        type="text"
                        value={editTask.title}
                        onChange={e => setEditTask({ ...editTask, title: e.target.value })}
                        style={{ width: '100%', marginBottom: 8, padding: '0.5rem', borderRadius: 6, border: '1px solid #e5e7eb' }}
                      />
                      <select
                        value={editTask.priority}
                        onChange={e => setEditTask({ ...editTask, priority: e.target.value })}
                        style={{ width: '100%', marginBottom: 8, padding: '0.5rem', borderRadius: 6, border: '1px solid #e5e7eb' }}
                      >
                        {priorities.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                      </select>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button style={{ background: '#10b981' }} onClick={() => handleEditSave(column, index)}><FiCheck /> Save</button>
                        <button style={{ background: '#ef4444' }} onClick={handleEditCancel}><FiX /> Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <div key={item.id} style={{ position: 'relative' }}>
                      <SortableItem
                        id={`${column}-${index}`}
                        content={item.title}
                        priority={item.priority}
                        priorityColor={getPriorityColor(item.priority)}
                      />
                      <div style={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 8 }}>
                        <button
                          style={{ background: 'none', border: 'none', color: '#f59e0b', cursor: 'pointer', padding: 2 }}
                          onClick={() => handleEditTask(column, index)}
                          title="Edit"
                        >
                          <FiEdit2 />
                        </button>
                        <button
                          style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: 2 }}
                          onClick={() => handleDeleteTask(column, index)}
                          title="Delete"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </div>
                  )
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
