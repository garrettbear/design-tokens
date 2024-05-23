import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { brandColor as brandColorJS } from '../src/js';
import README from './BrandColors.mdx';
import { ColorSwatchGroup, ColorSwatch } from './components';
import { getCSSVariablesFromStylesheet, useJsonColor } from './utils';

const meta: Meta<typeof ColorSwatchGroup> = {
  title: 'Colors/Brand Colors',
  component: ColorSwatchGroup,
  parameters: {
    docs: {
      page: README,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ColorSwatchGroup>;

export const Figma: Story = {
  render: () => {
    const { brandColor } = useJsonColor();
    if (!brandColor) {
      return <div>Error: Brand colors not found</div>;
    }
    return <ColorSwatchGroup swatchData={brandColor} />;
  },
};

export const CSSStory: Story = {
  render: () => {
    const cssBrandColors = getCSSVariablesFromStylesheet('--brand-colors');
    return (
      <div
        style={{
          display: 'grid',
          gap: '16px',
          gridTemplateColumns: 'repeat(auto-fill, 300px)',
        }}
      >
        {/* Mapping through each brand color and rendering a ColorSwatch component for it */}
        {Object.values(cssBrandColors).map(({ color, name }) => (
          <ColorSwatch
            key={name}
            color={color}
            backgroundColor={name}
            name={name}
          />
        ))}
      </div>
    );
  },
};

export const JS: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: '16px',
        gridTemplateColumns: 'repeat(auto-fill, 300px)',
      }}
    >
      {/* Mapping through each brand color and rendering a ColorSwatch component for it */}
      {Object.entries(brandColorJS).map(([name, color]) => (
        <ColorSwatch key={name} color={color} name={`brandColor.${name}`} />
      ))}
    </div>
  ),
};
