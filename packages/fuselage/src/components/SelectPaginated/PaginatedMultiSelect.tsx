// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import {
  useMutableCallback,
  useResizeObserver,
} from '@rocket.chat/fuselage-hooks';
import React, {
  useState,
  useRef,
  useCallback,
  SyntheticEvent,
  ComponentProps,
  FC,
  forwardRef,
  ElementType,
  memo,
} from 'react';

import { AnimatedVisibility, Box, Flex, Position } from '../Box';
import Chip from '../Chip';
import { Icon } from '../Icon';
import InputBox from '../InputBox';
import Margins from '../Margins';
import { useVisible } from '../Options/useVisible';
import { OptionsPaginated } from '../OptionsPaginated';
import { Focus, Addon } from '../Select';

type SelectedOptionsProps = ComponentProps<typeof Chip>;

const SelectedOptions = memo((props: SelectedOptionsProps) => (
  <Chip maxWidth='150px' withTruncatedText {...props} />
));

const prevent = (e: SyntheticEvent) => {
  e.preventDefault();
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
};

type PaginatedMultiSelectOption = {
  value: string | number;
  label: string | number;
};

type PaginatedMultiSelectProps = Omit<ComponentProps<typeof Box>, 'value'> & {
  withTitle?: string;
  error?: boolean;
  options: PaginatedMultiSelectOption[];
  anchor?: ElementType;
  renderOptions?: ElementType;
  endReached?: (index: number) => void;
  value?: Exclude<PaginatedMultiSelectOption['value'], undefined>[];
};

export const PaginatedMultiSelect: FC<PaginatedMultiSelectProps> = ({
  withTitle,
  value,
  filter,
  options = [],
  error,
  disabled,
  anchor: Anchor = Focus,
  onChange = () => {},
  placeholder,
  renderOptions: _Options = OptionsPaginated,
  endReached,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(value || []);

  const currentValue = value !== undefined ? value : internalValue;
  const option = options.find(
    (option: PaginatedMultiSelectOption) => option.value === currentValue
  );

  const internalChanged = ([value]: PaginatedMultiSelectOption[]) => {
    if (
      currentValue.some(
        (item: PaginatedMultiSelectOption) => item.value === value.value
      )
    ) {
      const newValue = currentValue.filter(
        (item: PaginatedMultiSelectOption) => item.value !== value.value
      );
      setInternalValue(newValue);
      return onChange(newValue);
    }
    const newValue = [...currentValue, value];
    setInternalValue(newValue);
    return onChange(newValue);
  };

  const [visible, hide, show] = useVisible();

  const ref = useRef<HTMLInputElement>(null);
  const { ref: containerRef, borderBoxSize } = useResizeObserver();

  const handleClick = useMutableCallback(() => {
    if (visible === AnimatedVisibility.VISIBLE) {
      return hide();
    }
    if (ref && ref.current) {
      ref.current.focus();
      return show();
    }
  });
  return (
    <Box
      is='div'
      rcx-select
      className={[error && 'invalid', disabled && 'disabled']}
      ref={containerRef}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      <Flex.Item grow={1}>
        <Margins inline='x4'>
          <Flex.Container>
            <Box is='div'>
              <Box
                is='div'
                display='flex'
                alignItems='center'
                flexWrap='wrap'
                margin='-x8'
                role='listbox'
              >
                <Margins all='x4'>
                  <Anchor
                    disabled={disabled}
                    ref={ref}
                    aria-haspopup='listbox'
                    onClick={show}
                    onBlur={hide}
                    order={1}
                    rcx-input-box--undecorated
                    children={!value ? option || placeholder : null}
                  />
                  {currentValue.map(
                    (value: PaginatedMultiSelectOption, index: number) => (
                      <SelectedOptions
                        {...(withTitle && {
                          title:
                            value.label ||
                            options.find(
                              (val: PaginatedMultiSelectOption) =>
                                val.value === value
                            )?.label,
                        })}
                        tabIndex={-1}
                        role='option'
                        key={index}
                        onMouseDown={(e: SyntheticEvent) => {
                          prevent(e);
                          internalChanged([value]);
                          return false;
                        }}
                        children={
                          value.label ||
                          options.find(
                            (val: PaginatedMultiSelectOption) =>
                              val.value === value
                          )?.label
                        }
                      />
                    )
                  )}
                </Margins>
              </Box>
            </Box>
          </Flex.Container>
        </Margins>
      </Flex.Item>
      <Flex.Item grow={0} shrink={0}>
        <Margins inline='x4'>
          <Addon
            children={
              <Icon
                name={
                  visible === AnimatedVisibility.VISIBLE
                    ? 'cross'
                    : 'chevron-down'
                }
                size='x20'
              />
            }
          />
        </Margins>
      </Flex.Item>
      <AnimatedVisibility visibility={visible}>
        <Position anchor={containerRef}>
          <_Options
            {...(withTitle && { title: withTitle })}
            width={borderBoxSize.inlineSize}
            onMouseDown={prevent}
            multiple
            filter={filter}
            role='listbox'
            options={options}
            onSelect={internalChanged}
            endReached={endReached}
          />
        </Position>
      </AnimatedVisibility>
    </Box>
  );
};

type PaginatedMultiSelectFilteredProps = Omit<
  ComponentProps<typeof Box>,
  'onChange'
> & {
  setFilter?: (value: PaginatedMultiSelectOption['value']) => void;
  placeholder: string;
  error?: boolean;
  options: PaginatedMultiSelectOption[];
  filter?: string;
  value?: PaginatedMultiSelectOption['value'];
};

export const PaginatedMultiSelectFiltered: FC<
  PaginatedMultiSelectFilteredProps
> = ({ filter, setFilter, options, placeholder, ...props }) => {
  const anchor = useCallback(
    forwardRef<HTMLInputElement, ComponentProps<typeof InputBox>>(
      ({ children, filter, ...props }, ref) => (
        <Flex.Item grow={1}>
          <InputBox.Input
            ref={ref}
            placeholder={placeholder}
            value={filter}
            onInput={(e: SyntheticEvent) =>
              setFilter &&
              setFilter((e.currentTarget as HTMLInputElement).value)
            }
            {...props}
            rcx-input-box--undecorated
          />
        </Flex.Item>
      )
    ),
    []
  );
  return (
    <PaginatedMultiSelect
      filter={filter}
      options={options}
      {...props}
      anchor={anchor}
    />
  );
};
