import React, { ComponentProps, forwardRef } from 'react';

import { Box } from '../Box';

type ModalProps = ComponentProps<typeof Box>;

export const Modal = forwardRef<HTMLElement, ModalProps>(
  ({ children, ...props }: ModalProps, ref) => (
    <Box is='dialog' rcx-modal {...props}>
      <Box ref={ref} rcx-modal__inner elevation='2'>
        {children}
      </Box>
    </Box>
  )
);
