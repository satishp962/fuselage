import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import CodeEditor from './CodeEditor';

export default {
  title: 'CodeEditor',
  component: CodeEditor,
  parameters: {
    docs: {
      description: {
        component: 'CodeEditor for code reviews and pair programming',
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Stories title={'Code Editor'} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof CodeEditor>;

const Template: ComponentStory<typeof CodeEditor> = (args) => (
  <CodeEditor {...args} />
);

export const Default: ComponentStory<typeof CodeEditor> = Template.bind({});
Default.args = {
  initialValue: '',
};

//   export const Dark: ComponentStory<typeof CodeEditor> = Template.bind({});
//   Dark.args = {
//     value: 'Dark Mode',
//     theme: Theme.dark,
//     mode: Syntax.javascript,
//   };
