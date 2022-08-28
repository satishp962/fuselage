import { CodeEditor } from '@rocket.chat/fuselage';
import type * as UiKit from '@rocket.chat/ui-kit';
import type { ReactElement } from 'react';
import React, { memo } from 'react';

import type { BlockProps } from '../utils/BlockProps';

type CodeEditorElementProps = BlockProps<UiKit.CodeEditorElement>;

const CodeEditorElement = ({ block }: CodeEditorElementProps): ReactElement => (
  <CodeEditor
    initialValue={block.initialValue || 'let a =1 '}
    key={`${block.appId}-editor`}
  />
);

export default memo(CodeEditorElement);
