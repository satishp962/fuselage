import React, { ComponentProps, forwardRef } from 'react';

import { Box } from '../Box';

export const Input = forwardRef<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
  ComponentProps<typeof Box>
>((props, ref) => (
  <Box is='input' animated rcx-input-box ref={ref} {...props} />
));
