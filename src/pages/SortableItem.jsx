import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export const SortableItem = ({ id, content, priority, priorityColor }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: '1rem',
    margin: '0.5rem 0',
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    cursor: 'grab',
    boxShadow: isDragging ? '0 8px 25px rgba(0, 0, 0, 0.15)' : '0 1px 3px rgba(0, 0, 0, 0.1)',
    opacity: isDragging ? 0.8 : 1,
    position: 'relative',
    transition: 'all 0.2s ease',
    paddingRight: '3.5rem',
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      {...attributes} 
      {...listeners}
      className="kanban-card"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <p style={{ 
          margin: 0, 
          fontSize: '0.9rem', 
          color: '#374151',
          lineHeight: '1.4',
          fontWeight: 500
        }}>
          {content}
        </p>
        {priority && (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            marginTop: '0.2rem' 
          }}>
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: priorityColor,
              flexShrink: 0
            }} />
            <span style={{ 
              fontSize: '0.92rem', 
              color: '#374151',
              textTransform: 'capitalize',
              fontWeight: '600',
              opacity: 0.85
            }}>
              {priority} Priority
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
