import type { ActionsBlock } from '../../blocks/layout/ActionsBlock';
import type { CodeEditorBlock } from '../../blocks/layout/CodeEditorBlock';
import type { ContextBlock } from '../../blocks/layout/ContextBlock';
import type { DividerBlock } from '../../blocks/layout/DividerBlock';
import type { ImageBlock } from '../../blocks/layout/ImageBlock';
import type { InputBlock } from '../../blocks/layout/InputBlock';
import type { SectionBlock } from '../../blocks/layout/SectionBlock';
import { SurfaceRenderer } from '../SurfaceRenderer';

type ModalSurfaceLayoutBlock =
  | ActionsBlock
  | ContextBlock
  | DividerBlock
  | ImageBlock
  | InputBlock
  | SectionBlock
  | CodeEditorBlock;

export abstract class UiKitParserModal<OutputElement> extends SurfaceRenderer<
  OutputElement,
  ModalSurfaceLayoutBlock
> {
  public constructor() {
    super([
      'actions',
      'context',
      'divider',
      'image',
      'input',
      'section',
      'code_editor',
    ]);
  }
}

export type ModalSurfaceLayout = ModalSurfaceLayoutBlock[];
