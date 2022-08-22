import type { ActionsBlock } from '../../blocks/layout/ActionsBlock';
import type { CodeEditorBlock } from '../../blocks/layout/CodeEditorBlock';
import type { ContextBlock } from '../../blocks/layout/ContextBlock';
import type { DividerBlock } from '../../blocks/layout/DividerBlock';
import type { ImageBlock } from '../../blocks/layout/ImageBlock';
import type { InputBlock } from '../../blocks/layout/InputBlock';
import type { SectionBlock } from '../../blocks/layout/SectionBlock';
import { SurfaceRenderer } from '../SurfaceRenderer';

type BannerSurfaceLayoutBlock =
  | ActionsBlock
  | ContextBlock
  | DividerBlock
  | ImageBlock
  | InputBlock
  | SectionBlock
  | CodeEditorBlock;

export abstract class UiKitParserBanner<T> extends SurfaceRenderer<
  T,
  BannerSurfaceLayoutBlock
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

export type BannerSurfaceLayout = BannerSurfaceLayoutBlock[];
