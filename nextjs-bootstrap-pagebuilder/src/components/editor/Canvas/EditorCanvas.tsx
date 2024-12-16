// src/components/editor/Canvas/EditorCanvas.tsx
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { ComponentData, ComponentType } from '@/types/editor';
import { RenderComponent } from './RenderComponent';

interface EditorCanvasProps {
  onComponentAdd: (component: ComponentData) => void;
  onComponentSelect: (component: ComponentData | null) => void;
  selectedComponentId: string | null;
  onComponentUpdate: (updatedComponent: ComponentData) => void;
}

export const EditorCanvas: React.FC<EditorCanvasProps> = ({
  onComponentAdd,
  onComponentSelect,
  selectedComponentId,
  onComponentUpdate
}) => {
  const [components, setComponents] = useState<ComponentData[]>([]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const componentType = e.dataTransfer.getData('componentType') as ComponentType;
    
    const newComponent: ComponentData = {
      id: `${componentType}-${Date.now()}`,
      type: componentType,
      content: 'New Component',
      properties: getDefaultProperties(componentType)
    };

    setComponents([...components, newComponent]);
    onComponentAdd(newComponent);
  };

  const getDefaultProperties = (type: ComponentType) => {
    const commonProperties = {
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      alignment: 'left'
    };

    switch (type) {
      case 'heading':
        return {
          ...commonProperties,
          heading: { level: 2, text: 'New Heading' }
        };
      case 'paragraph':
        return {
          ...commonProperties,
          paragraph: { text: 'New paragraph text' }
        };
      case 'button':
        return {
          ...commonProperties,
          button: { text: 'Click me', variant: 'primary', size: 'md' }
        };
      case 'image':
        return {
          ...commonProperties,
          image: { src: '/placeholder.jpg', alt: 'Placeholder image' }
        };
      default:
        return commonProperties;
    }
  };

  const handleComponentClick = (component: ComponentData) => {
    onComponentSelect(component);
  };

  const handleComponentUpdate = (updatedComponent: ComponentData) => {
    const updatedComponents = components.map(comp => 
      comp.id === updatedComponent.id ? updatedComponent : comp
    );
    setComponents(updatedComponents);
    onComponentUpdate(updatedComponent);
  };

  return (
    <Container
      className="editor-canvas min-h-screen p-4"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {components.map((component) => (
        <div
          key={component.id}
          onClick={() => handleComponentClick(component)}
          className={`component-wrapper ${selectedComponentId === component.id ? 'selected' : ''}`}
        >
          <RenderComponent
            component={component}
            onUpdate={handleComponentUpdate}
          />
        </div>
      ))}
    </Container>
  );
};