import React, { ComponentProps, FC } from 'react';

import { TableBody, TableCell, TableFoot, TableHead, TableRow } from '.';
import { Box } from '../Box';
import { TableSelection } from './TableSelection';
import { TableSelectionButton } from './TableSelectionButton';

export const style = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};
export type TableProps = ComponentProps<typeof Box> & {
  striped?: boolean;
  sticky?: boolean;
  fixed?: boolean;
};

export const Table: FC<TableProps> & {
  Head?: ComponentProps<typeof TableHead>;
  Body?: ComponentProps<typeof TableBody>;
  Foot?: ComponentProps<typeof TableFoot>;
  Row?: ComponentProps<typeof TableRow>;
  Cell?: ComponentProps<typeof TableCell>;
  Selection?: ComponentProps<typeof TableSelection>;
  Button?: ComponentProps<typeof TableSelectionButton>;
} = ({ striped, sticky, fixed = false, ...props }: TableProps) => (
  <Box rcx-table__wrapper>
    <Box
      is='table'
      rcx-table
      rcx-table--fixed={fixed}
      rcx-table--sticky={sticky}
      rcx-table--striped={striped}
      {...props}
    />
  </Box>
);

Table.Selection = TableSelection;
Table.Button = TableSelectionButton;
