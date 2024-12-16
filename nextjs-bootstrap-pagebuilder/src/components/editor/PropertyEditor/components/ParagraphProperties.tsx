// src/components/editor/PropertyEditor/components/ParagraphProperties.tsx
import React from 'react';
import { Form } from 'react-bootstrap';
import { ComponentData } from '@/types/editor';

interface ParagraphPropertiesProps {
  component: ComponentData;
  onChange: (path: string, value: any) => void;
}

export const ParagraphProperties: React.FC<ParagraphPropertiesProps> = ({ component, onChange }) => {
  return (
    <div className="paragraph-properties">
      <Form.Group className="mb-3">
        <Form.Label>Text</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={component.properties.paragraph?.text || ''}
          onChange={(e) => onChange('properties.paragraph.text', e.target.value)}
        />
      </Form.Group>
    </div>
  );
};