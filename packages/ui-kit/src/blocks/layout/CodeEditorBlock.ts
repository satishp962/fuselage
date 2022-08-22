import type { LayoutBlockish } from '../LayoutBlockish';

export type CodeEditorBlock = LayoutBlockish<{
  type: 'code_editor';
  initialValue?: string;
}>;
