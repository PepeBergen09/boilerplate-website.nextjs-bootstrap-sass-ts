// src/components/editor/PropertyEditor/components/CommonProperties.tsx
import React from 'react';
import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { ComponentData } from '@/types/editor';

interface CommonPropertiesProps {
  component: ComponentData;
  onChange: (path: string, value: any) => void;
}

export const CommonProperties: React.FC<CommonPropertiesProps> = ({ component, onChange }) => {
  const renderTooltip = (text: string) => (
    <Tooltip>{text}</Tooltip>
  );

  const handleSpacingChange = (type: 'margin' | 'padding', side: string, value: string) => {
    const numValue = value === '' ? 0 : Math.max(0, parseInt(value));
    onChange(`properties.${type}.${side}`, numValue);
  };

  return (
    <div className="common-properties mt-4">
      <h6>Layout</h6>
      <Form.Group className="mb-3">
        <OverlayTrigger placement="top" overlay={renderTooltip('Align the content within its container')}>
          <Form.Label>Alignment</Form.Label>
        </OverlayTrigger>
        <Form.Select
          value={component.properties.alignment || 'left'}
          onChange={(e) => onChange('properties.alignment', e.target.value)}
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </Form.Select>
      </Form.Group>
      
      <h6>Spacing</h6>
      <div className="spacing-controls">
        {['top', 'right', 'bottom', 'left'].map((side) => (
          <Form.Group key={`margin-${side}`} className="mb-2">
            <OverlayTrigger placement="top" overlay={renderTooltip(`Margin ${side}`)}>
              <Form.Label>Margin {side}</Form.Label>
            </OverlayTrigger>
            <Form.Control
              type="number"
              min="0"
              value={component.properties.margin?.[side] || 0}
              onChange={(e) => handleSpacingChange('margin', side, e.target.value)}
            />
          </Form.Group>
        ))}
      </div>

      <div className="spacing-controls mt-3">
        {['top', 'right', 'bottom', 'left'].map((side) => (
          <Form.Group key={`padding-${side}`} className="mb-2">
            <OverlayTrigger placement="top" overlay={renderTooltip(`Padding ${side}`)}>
              <Form.Label>Padding {side}</Form.Label>
            </OverlayTrigger>
            <Form.Control
              type="number"
              min="0"
              value={component.properties.padding?.[side] || 0}
              onChange={(e) => handleSpacingChange('padding', side, e.target.value)}
            />
          </Form.Group>
        ))}
      </div>
    </div>
  );
};