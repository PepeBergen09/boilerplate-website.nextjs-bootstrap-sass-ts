// src/app/editor/page.tsx
'use client';

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ComponentList } from '@/components/editor/Sidebar/ComponentList';
import { EditorCanvas } from '@/components/editor/Canvas/EditorCanvas';
import { PropertyEditor } from '@/components/editor/PropertyEditor/PropertyEditor';
import { ComponentData, ComponentType } from '@/types/editor';

export default function EditorPage() {
  const [selectedComponent, setSelectedComponent] = useState<ComponentData | null>(null);

  const handleDragStart = (type: ComponentType) => {
    console.log('Started dragging:', type);
  };

  const handleComponentAdd = (component: ComponentData) => {
    console.log('Component added:', component);
    setSelectedComponent(component);
  };

  const handleComponentSelect = (component: ComponentData | null) => {
    setSelectedComponent(component);
  };

  const handleComponentUpdate = (updatedComponent: ComponentData) => {
    console.log('Component updated:', updatedComponent);
    setSelectedComponent(updatedComponent);
  };

  return (
    <Container fluid className="h-screen">
      <Row className="h-full">
        <Col md={3} className="bg-gray-100 p-4">
          <h3 className="mb-4">Components</h3>
          <ComponentList onDragStart={handleDragStart} />
        </Col>
        <Col md={6} className="p-0">
          <EditorCanvas
            onComponentAdd={handleComponentAdd}
            onComponentSelect={handleComponentSelect}
            selectedComponentId={selectedComponent?.id || null}
            onComponentUpdate={handleComponentUpdate}
          />
        </Col>
        <Col md={3} className="bg-gray-100 p-4">
          {selectedComponent ? (
            <PropertyEditor
              component={selectedComponent}
              onUpdate={handleComponentUpdate}
            />
          ) : (
            <div className="text-center text-muted p-4">
              Select a component to edit its properties
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}