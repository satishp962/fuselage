import type { Actionable } from '../Actionable';

export type CodeEditorElement = Actionable<{
  type: 'code_editor';
  initialValue?: string;
}>;
