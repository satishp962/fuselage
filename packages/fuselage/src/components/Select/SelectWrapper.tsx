import type { ReactNode, Ref } from 'react';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

type SelectWrapperProps = {
  children: ReactNode;
  hiddenAnchor: boolean;
};

const SelectWrapper = forwardRef(function SelectWrapper(
  { children, hiddenAnchor }: SelectWrapperProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <Box
      display='flex'
      mi={-4}
      rcx-select__wrapper
      rcx-select__wrapper--hidden={hiddenAnchor}
      ref={ref}
    >
      {children}
    </Box>
  );
});

export default SelectWrapper;
