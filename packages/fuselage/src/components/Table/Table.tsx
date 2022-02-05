import React, { ComponentProps, FC } from 'react';

import { TableBody, TableCell, TableFoot, TableHead, TableRow } from '.';
import { Box } from '../Box';
import { TableSelection } from './TableSelection';
import { TableSelectionButton } from './TableSelectionButton';

export const style = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
} as const;

export type TableProps = ComponentProps<typeof Box> & {
  striped?: boolean;
  sticky?: boolean;
  fixed?: boolean;
};

export const Table: FC<TableProps> & {
  Head?: FC<ComponentProps<typeof TableHead>>;
  Body?: FC<ComponentProps<typeof TableBody>>;
  Foot?: FC<ComponentProps<typeof TableFoot>>;
  Row?: FC<ComponentProps<typeof TableRow>>;
  Cell?: FC<ComponentProps<typeof TableCell>>;
  Selection?: FC<ComponentProps<typeof TableSelection>>;
  Button?: FC<ComponentProps<typeof TableSelectionButton>>;
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
