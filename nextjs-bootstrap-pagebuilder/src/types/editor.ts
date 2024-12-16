// src/types/editor.ts
// src/types/editor.ts

// Existing types...
export type ComponentType = 'container' | 'heading' | 'paragraph' | 'image' | 'button';

export interface ComponentData {
  id: string;
  type: ComponentType;
  content: any;
  styles?: Record<string, string>;
  properties: ComponentProperties;
  children?: ComponentData[];
}

// New types for property editing
export interface ComponentProperties {
  // Common properties for all components
  margin?: Spacing;
  padding?: Spacing;
  alignment?: 'left' | 'center' | 'right';
  
  // Specific properties per component type
  heading?: {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    text: string;
  };
  paragraph?: {
    text: string;
  };
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  button?: {
    text: string;
    variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
    size: 'sm' | 'md' | 'lg';
    url?: string;
  };
}

export interface Spacing {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface PropertyEditorProps {
  component: ComponentData;
  onUpdate: (updatedComponent: ComponentData) => void;
}

export interface DragItem {
  id: string;
  type: ComponentType;
  index: number;
}