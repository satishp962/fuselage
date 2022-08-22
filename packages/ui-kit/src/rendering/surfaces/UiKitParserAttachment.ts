import type { ActionsBlock } from '../../blocks/layout/ActionsBlock';
import type { CodeEditorBlock } from '../../blocks/layout/CodeEditorBlock';
import type { ContextBlock } from '../../blocks/layout/ContextBlock';
import type { DividerBlock } from '../../blocks/layout/DividerBlock';
import type { ImageBlock } from '../../blocks/layout/ImageBlock';
import type { SectionBlock } from '../../blocks/layout/SectionBlock';
import { SurfaceRenderer } from '../SurfaceRenderer';

type AttachmentSurfaceLayoutBlock =
  | ActionsBlock
  | ContextBlock
  | DividerBlock
  | ImageBlock
  | SectionBlock
  | CodeEditorBlock;

export abstract class UiKitParserAttachment<T> extends SurfaceRenderer<
  T,
  AttachmentSurfaceLayoutBlock
> {
  public constructor() {
    super(['actions', 'context', 'divider', 'image', 'section', 'code_editor']);
  }
}

export type AttachmentSurfaceLayout = AttachmentSurfaceLayoutBlock[];
