// src/components/editor/PropertyEditor/components/ButtonProperties.tsx
import React from 'react';
import { Form } from 'react-bootstrap';
import { ComponentData } from '@/types/editor';

interface ButtonPropertiesProps {
  component: ComponentData;
  onChange: (path: string, value: any) => void;
}

export const ButtonProperties: React.FC<ButtonPropertiesProps> = ({ component, onChange }) => {
  return (
    <div className="button-properties">
      <Form.Group className="mb-3">
        <Form.Label>Button Text</Form.Label>
        <Form.Control
          type="text"
          value={component.properties.button?.text || ''}
          onChange={(e) => onChange('properties.button.text', e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Variant</Form.Label>
        <Form.Select
          value={component.properties.button?.variant || 'primary'}
          onChange={(e) => onChange('properties.button.variant', e.target.value)}
        >
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="success">Success</option>
          <option value="danger">Danger</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Size</Form.Label>
        <Form.Select
          value={component.properties.button?.size || 'md'}
          onChange={(e) => onChange('properties.button.size', e.target.value)}
        >
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>URL (optional)</Form.Label>
        <Form.Control
          type="text"
          value={component.properties.button?.url || ''}
          onChange={(e) => onChange('properties.button.url', e.target.value)}
        />
      </Form.Group>
    </div>
  );
};