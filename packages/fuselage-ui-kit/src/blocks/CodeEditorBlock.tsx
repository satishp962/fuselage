import { CodeEditor } from '@rocket.chat/fuselage/src/components/CodeEditor';
import type * as UiKit from '@rocket.chat/ui-kit';
import type { ReactElement } from 'react';
import React, { memo } from 'react';

import type { BlockProps } from '../utils/BlockProps';

type CodeEditorBlockProps = BlockProps<UiKit.CodeEditorBlock>;

const CodeEditorBlock = ({ block }: CodeEditorBlockProps): ReactElement => (
  <CodeEditor initialValue={block?.initialValue} />
);

export default memo(CodeEditorBlock);
