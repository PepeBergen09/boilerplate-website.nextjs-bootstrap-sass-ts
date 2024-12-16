// src/components/editor/PropertyEditor/PropertyEditor.tsx
import React from 'react';
import { Card, Form } from 'react-bootstrap';
import { ComponentData, PropertyEditorProps } from '@/types/editor';
import { HeadingProperties } from './components/HeadingProperties';
import { ParagraphProperties } from './components/ParagraphProperties';
import { ImageProperties } from './components/ImageProperties';
import { ButtonProperties } from './components/ButtonProperties';
import { CommonProperties } from './components/CommonProperties';

export const PropertyEditor: React.FC<PropertyEditorProps> = ({ component, onUpdate }) => {
  const handlePropertyChange = (propertyPath: string, value: any) => {
    const updatedComponent = { ...component };
    const paths = propertyPath.split('.');
    let current: any = updatedComponent;
    
    for (let i = 0; i < paths.length - 1; i++) {
      if (!current[paths[i]]) {
        current[paths[i]] = {};
      }
      current = current[paths[i]];
    }
    current[paths[paths.length - 1]] = value;
    
    onUpdate(updatedComponent);
  };

  const renderPropertyEditor = () => {
    switch (component.type) {
      case 'heading':
        return <HeadingProperties component={component} onChange={handlePropertyChange} />;
      case 'paragraph':
        return <ParagraphProperties component={component} onChange={handlePropertyChange} />;
      case 'image':
        return <ImageProperties component={component} onChange={handlePropertyChange} />;
      case 'button':
        return <ButtonProperties component={component} onChange={handlePropertyChange} />;
      default:
        return null;
    }
  };

  return (
    <Card className="property-editor">
      <Card.Header>
        <h5 className="mb-0">Properties</h5>
      </Card.Header>
      <Card.Body>
        {renderPropertyEditor()}
        <CommonProperties component={component} onChange={handlePropertyChange} />
      </Card.Body>
    </Card>
  );
};



