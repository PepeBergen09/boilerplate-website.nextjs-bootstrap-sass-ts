// src/components/editor/PropertyEditor/components/HeadingProperties.tsx
import React from 'react';
import { Form } from 'react-bootstrap';
import { ComponentData } from '@/types/editor';

interface HeadingPropertiesProps {
  component: ComponentData;
  onChange: (path: string, value: any) => void;
}

export const HeadingProperties: React.FC<HeadingPropertiesProps> = ({ component, onChange }) => {
  return (
    <div className="heading-properties">
      <Form.Group className="mb-3">
        <Form.Label>Text</Form.Label>
        <Form.Control
          type="text"
          value={component.properties.heading?.text || ''}
          onChange={(e) => onChange('properties.heading.text', e.target.value)}
        />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Level</Form.Label>
        <Form.Select
          value={component.properties.heading?.level || 2}
          onChange={(e) => onChange('properties.heading.level', parseInt(e.target.value))}
        >
          {[1, 2, 3, 4, 5, 6].map((level) => (
            <option key={level} value={level}>H{level}</option>
          ))}
        </Form.Select>
      </Form.Group>
    </div>
  );
};