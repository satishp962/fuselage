import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import React, {
  ComponentProps,
  ElementType,
  forwardRef,
  memo,
  SyntheticEvent,
  useLayoutEffect,
  useMemo,
  Ref,
  useRef,
} from 'react';

import { Box, Scrollable } from '../Box';
import Tile from '../Tile';
import Option from './Option';
import { useCursor } from './useCursor';

export { useCursor };

const prevent = (e: SyntheticEvent) => {
  e.preventDefault();
  e.stopPropagation();
};

type OptionsProps = Omit<ComponentProps<typeof Box>, 'onSelect'> & {
  multiple?: boolean;
  options: [unknown, string, boolean?][];
  cursor: number;
  renderItem?: ElementType;
  renderEmpty?: ElementType;
  onSelect: (option: [unknown, string]) => void;
};

export const Empty = memo(() => <Option label='Empty' />);

export const Options = forwardRef(
  (
    {
      maxHeight = '144px',
      multiple,
      renderEmpty: EmptyComponent = Empty,
      options,
      cursor,
      renderItem: OptionComponent = Option,
      onSelect,
      ...props
    }: OptionsProps,
    ref: Ref<HTMLElement>
  ) => {
    const innerRef = useRef<HTMLElement>(null);
    const mergedRef = useMergedRefs(innerRef, ref);
    const { current } = innerRef;

    useLayoutEffect(() => {
      if (!current) {
        return;
      }
      const li = current?.querySelector<HTMLElement>('.rcx-option--focus');
      if (!li) {
        return;
      }
      if (
        li.offsetTop + li.clientHeight >
          current.scrollTop + current.clientHeight ||
        li.offsetTop - li.clientHeight < current.scrollTop
      ) {
        current.scrollTop = li.offsetTop;
      }
    }, [cursor, ref]);
    const optionsMemoized = useMemo(
      () =>
        options.map(([value, label, selected], i) => (
          <OptionComponent
            role='option'
            label={label}
            onMouseDown={(e: SyntheticEvent) => {
              prevent(e);
              onSelect([value, label]);
              return false;
            }}
            key={value}
            value={value}
            selected={selected || (multiple !== true && null)}
            focus={cursor === i || null}
          />
        )),
      [options, multiple, cursor, onSelect]
    );
    return (
      <Box rcx-options {...props}>
        <Tile padding={0} paddingBlock={'x12'} paddingInline={0} elevation='2'>
          <Scrollable vertical smooth>
            <Tile
              ref={mergedRef}
              elevation='0'
              padding='none'
              maxHeight={maxHeight}
              onMouseDown={prevent}
              onClick={prevent}
              is='ol'
              aria-multiselectable={multiple || true}
              role='listbox'
              aria-activedescendant={
                options && options[cursor] && options[cursor][0]
              }
            >
              {!options.length && <EmptyComponent />}
              {optionsMemoized}
            </Tile>
          </Scrollable>
        </Tile>
      </Box>
    );
  }
);
