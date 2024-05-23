import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Text as ShadowText } from './components';
import README from './Shadows.mdx';

type ShadowSwatchProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'default' | 'primary' | 'error';
};

const ShadowSwatch: React.FC<ShadowSwatchProps> = ({
  children,
  style,
  size = 'xs',
  color = 'default',
}) => (
  <div
    style={{
      height: 100,
      backgroundColor: 'var(--color-background-default)',
      boxShadow:
        color === 'default'
          ? `var(--shadow-size-${size}) var(--color-shadow-default)`
          : `var(--shadow-size-${size}) var(--color-${color}-shadow)`,
      borderRadius: '4px',
      display: 'grid',
      alignContent: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      ...style,
    }}
  >
    {children}
  </div>
);

const meta: Meta<typeof ShadowSwatch> = {
  title: 'Shadows/Shadows',
  component: ShadowSwatch,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'error'],
    },
  },
};

export default meta;

export const DefaultStory: StoryObj<typeof ShadowSwatch> = {
  name: 'Default',
  args: {
    color: 'default',
    size: 'xs',
  },
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: '32px',
        gridTemplateColumns: 'repeat(auto-fill, 200px)',
      }}
    >
      <ShadowSwatch {...args}>
        <ShadowText as="p" style={{ margin: 0 }}>
          Shadow
        </ShadowText>
      </ShadowSwatch>
    </div>
  ),
};

export const Size: StoryObj<typeof ShadowSwatch> = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: '32px',
        gridTemplateColumns: 'repeat(auto-fill, 200px)',
      }}
    >
      <ShadowSwatch color={args.color} size="xs">
        <ShadowText as="p" style={{ margin: 0 }}>
          XS
        </ShadowText>
      </ShadowSwatch>
      <ShadowSwatch color={args.color} size="sm">
        <ShadowText as="p" style={{ margin: 0 }}>
          SM
        </ShadowText>
      </ShadowSwatch>
      <ShadowSwatch color={args.color} size="md">
        <ShadowText as="p" style={{ margin: 0 }}>
          MD
        </ShadowText>
      </ShadowSwatch>
      <ShadowSwatch color={args.color} size="lg">
        <ShadowText as="p" style={{ margin: 0 }}>
          LG
        </ShadowText>
      </ShadowSwatch>
    </div>
  ),
  args: {
    color: 'default',
    size: 'xs',
  },
};

export const Color: StoryObj<typeof ShadowSwatch> = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: '32px',
        gridTemplateColumns: 'repeat(auto-fill, 200px)',
      }}
    >
      <ShadowSwatch color="default" size={args.size}>
        <ShadowText as="p" style={{ margin: 0 }}>
          Default
        </ShadowText>
      </ShadowSwatch>
      <ShadowSwatch
        color="primary"
        size={args.size}
        style={{
          backgroundColor: 'var(--color-primary-default)',
          color: 'var(--color-primary-inverse)',
        }}
      >
        <ShadowText as="p" style={{ margin: 0 }}>
          Primary
        </ShadowText>
      </ShadowSwatch>
      <ShadowSwatch
        color="error"
        size={args.size}
        style={{
          backgroundColor: 'var(--color-error-default)',
          color: 'var(--color-error-inverse)',
        }}
      >
        <ShadowText as="p" style={{ margin: 0 }}>
          Error/Danger
        </ShadowText>
      </ShadowSwatch>
    </div>
  ),
  args: {
    color: 'default',
    size: 'xs',
  },
};

export const ExampleUsage = {
  render: () => (
    <div>
      <div
        style={{
          display: 'grid',
          gap: '32px',
          gridTemplateColumns: 'repeat(auto-fill, 200px)',
          marginBottom: '64px',
        }}
      >
        <ShadowSwatch
          style={{
            boxShadow: 'var(--shadow-size-xs) var(--color-shadow-default)',
          }}
        >
          <ShadowText as="p" style={{ margin: 0 }}>
            Card
          </ShadowText>
        </ShadowSwatch>
        <ShadowSwatch
          style={{
            boxShadow: 'var(--shadow-size-sm) var(--color-shadow-default)',
          }}
        >
          <ShadowText as="p" style={{ margin: 0 }}>
            Dropdown
          </ShadowText>
        </ShadowSwatch>
        <ShadowSwatch
          style={{
            boxShadow: 'var(--shadow-size-md) var(--color-shadow-default)',
          }}
        >
          <ShadowText as="p" style={{ margin: 0 }}>
            Toast
          </ShadowText>
        </ShadowSwatch>
        <ShadowSwatch
          style={{
            boxShadow: 'var(--shadow-size-lg) var(--color-shadow-default)',
          }}
        >
          <ShadowText as="p" style={{ margin: 0 }}>
            Modal
          </ShadowText>
        </ShadowSwatch>
      </div>
      <div
        style={{
          display: 'grid',
          gap: '32px',
          gridTemplateColumns: 'repeat(auto-fill, 200px)',
        }}
      >
        <ShadowSwatch
          style={{
            boxShadow: 'var(--component-button-primary-shadow)',
            backgroundColor: 'var(--color-primary-default)',
            color: 'var(--color-primary-inverse)',
          }}
        >
          <ShadowText as="p" style={{ margin: 0 }}>
            Button Primary Hover
          </ShadowText>
        </ShadowSwatch>
        <ShadowSwatch
          style={{
            boxShadow: 'var(--component-button-danger-shadow)',
            backgroundColor: 'var(--color-error-default)',
            color: 'var(--color-error-inverse)',
          }}
        >
          <ShadowText as="p" style={{ margin: 0 }}>
            Button Error/Danger Hover
          </ShadowText>
        </ShadowSwatch>
      </div>
    </div>
  ),
};
