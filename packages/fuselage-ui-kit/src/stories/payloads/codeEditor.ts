import type * as UiKit from '@rocket.chat/ui-kit';

export const code_editor: readonly UiKit.LayoutBlock[] = [
  {
    type: 'code_editor',
    initialValue: 'let a = 1;',
  },
] as const;
