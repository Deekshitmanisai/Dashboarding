import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export const SortableItem = ({ id, content }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: '1rem',
    margin: '0.5rem 0',
    backgroundColor: '#f3f4f6',
    border: '1px solid #e5e7eb',
    borderRadius: '4px',
    cursor: 'move',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {content}
    </div>
  );
};
