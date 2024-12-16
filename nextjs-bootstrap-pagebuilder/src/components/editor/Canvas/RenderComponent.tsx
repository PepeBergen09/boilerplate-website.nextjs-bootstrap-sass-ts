// src/components/editor/Canvas/RenderComponent.tsx
import React from 'react';
import { ComponentData } from '@/types/editor';
import { Button } from 'react-bootstrap';

interface RenderComponentProps {
  component: ComponentData;
  onUpdate?: (component: ComponentData) => void;
}

export const RenderComponent: React.FC<RenderComponentProps> = ({ component }) => {
  // Create style object from properties
  const getStyles = () => {
    const { margin, padding, alignment } = component.properties;
    return {
      marginTop: margin?.top ? `${margin.top}px` : undefined,
      marginRight: margin?.right ? `${margin.right}px` : undefined,
      marginBottom: margin?.bottom ? `${margin.bottom}px` : undefined,
      marginLeft: margin?.left ? `${margin.left}px` : undefined,
      paddingTop: padding?.top ? `${padding.top}px` : undefined,
      paddingRight: padding?.right ? `${padding.right}px` : undefined,
      paddingBottom: padding?.bottom ? `${padding.bottom}px` : undefined,
      paddingLeft: padding?.left ? `${padding.left}px` : undefined,
      textAlign: alignment || 'left',
    };
  };

  const renderSwitch = () => {
    const styles = getStyles();

    switch (component.type) {
      case 'heading': {
        const HeadingTag = `h${component.properties.heading?.level || 2}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag style={styles}>
            {component.properties.heading?.text || 'Heading'}
          </HeadingTag>
        );
      }
      case 'paragraph':
        return (
          <p style={styles}>
            {component.properties.paragraph?.text || 'Paragraph text'}
          </p>
        );
      case 'image':
        return (
          <div style={styles}>
            <img
              src={component.properties.image?.src || '/api/placeholder/400/300'}
              alt={component.properties.image?.alt || 'Image'}
              style={{
                width: component.properties.image?.width ? `${component.properties.image.width}px` : 'auto',
                height: component.properties.image?.height ? `${component.properties.image.height}px` : 'auto',
                maxWidth: '100%'
              }}
            />
          </div>
        );
      case 'button': {
        const btnProps = component.properties.button || {};
        return (
          <div style={styles}>
            <Button
              variant={btnProps.variant || 'primary'}
              size={btnProps.size || 'md'}
              href={btnProps.url}
            >
              {btnProps.text || 'Button'}
            </Button>
          </div>
        );
      }
      default:
        return <div style={styles}>{component.content}</div>;
    }
  };

  return (
    <div className="component-content">
      {renderSwitch()}
    </div>
  );
};