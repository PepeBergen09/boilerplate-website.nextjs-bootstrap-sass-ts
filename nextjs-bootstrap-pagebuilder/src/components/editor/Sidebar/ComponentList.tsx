// src/components/editor/Sidebar/ComponentList.tsx
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { ComponentType } from '@/types/editor';

interface ComponentListProps {
  onDragStart: (type: ComponentType) => void;
}

const availableComponents: { type: ComponentType; label: string }[] = [
  { type: 'heading', label: 'Heading' },
  { type: 'paragraph', label: 'Paragraph' },
  { type: 'image', label: 'Image' },
  { type: 'button', label: 'Button' },
];

export const ComponentList: React.FC<ComponentListProps> = ({ onDragStart }) => {
  return (
    <ListGroup className="component-list">
      {availableComponents.map(({ type, label }) => (
        <ListGroup.Item
          key={type}
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setData('componentType', type);
            onDragStart(type);
          }}
          className="cursor-move"
        >
          {label}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};