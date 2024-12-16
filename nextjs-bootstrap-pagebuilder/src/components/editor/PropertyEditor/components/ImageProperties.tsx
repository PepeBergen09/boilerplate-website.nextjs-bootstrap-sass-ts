// src/components/editor/PropertyEditor/components/ImageProperties.tsx
import React, { useCallback } from 'react';
import { Form, Image, Button } from 'react-bootstrap';
import { ComponentData } from '@/types/editor';

interface ImagePropertiesProps {
  component: ComponentData;
  onChange: (path: string, value: any) => void;
}

export const ImageProperties: React.FC<ImagePropertiesProps> = ({ component, onChange }) => {
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onChange('properties.image.src', e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onChange('properties.image.src', e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  }, [onChange]);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="image-properties">
      {/* Image Preview */}
      <div 
        className="image-preview mb-3 p-3 border rounded text-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {component.properties.image?.src ? (
          <Image 
            src={component.properties.image.src} 
            alt="Preview" 
            fluid 
            className="mb-2"
            style={{ maxHeight: '200px' }}
          />
        ) : (
          <div className="placeholder-image p-4 bg-light">
            <p>Drag and drop an image here</p>
            <p>or</p>
            <Form.Group controlId="imageUpload">
              <Form.Label className="btn btn-primary mb-0">
                Choose File
                <Form.Control
                  type="file"
                  accept="image/*"
                  className="d-none"
                  onChange={handleFileChange}
                />
              </Form.Label>
            </Form.Group>
          </div>
        )}
        
        {component.properties.image?.src && (
          <div className="mt-2">
            <Form.Group controlId="imageUpload">
              <Form.Label className="btn btn-outline-primary btn-sm">
                Change Image
                <Form.Control
                  type="file"
                  accept="image/*"
                  className="d-none"
                  onChange={handleFileChange}
                />
              </Form.Label>
            </Form.Group>
          </div>
        )}
      </div>

      {/* Image URL Input */}
      <Form.Group className="mb-3">
        <Form.Label>Image URL (optional)</Form.Label>
        <Form.Control
          type="text"
          value={component.properties.image?.src || ''}
          onChange={(e) => onChange('properties.image.src', e.target.value)}
          placeholder="Enter image URL or upload a file"
        />
      </Form.Group>

      {/* Alt Text */}
      <Form.Group className="mb-3">
        <Form.Label>Alt Text</Form.Label>
        <Form.Control
          type="text"
          value={component.properties.image?.alt || ''}
          onChange={(e) => onChange('properties.image.alt', e.target.value)}
          placeholder="Enter image description"
        />
      </Form.Group>

      {/* Size Controls */}
      <div className="row">
        <div className="col-6">
          <Form.Group className="mb-3">
            <Form.Label>Width (px)</Form.Label>
            <Form.Control
              type="number"
              min="0"
              value={component.properties.image?.width || ''}
              onChange={(e) => onChange('properties.image.width', e.target.value ? parseInt(e.target.value) : undefined)}
            />
          </Form.Group>
        </div>
        <div className="col-6">
          <Form.Group className="mb-3">
            <Form.Label>Height (px)</Form.Label>
            <Form.Control
              type="number"
              min="0"
              value={component.properties.image?.height || ''}
              onChange={(e) => onChange('properties.image.height', e.target.value ? parseInt(e.target.value) : undefined)}
            />
          </Form.Group>
        </div>
      </div>
    </div>
  );
};