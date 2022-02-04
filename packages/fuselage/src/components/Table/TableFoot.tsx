import React, { FC } from 'react';

import { Box } from '../Box';
import { TableProps } from './Table';

export const TableFoot: FC<TableProps> = (props: TableProps) => (
  <Box is='tfoot' rcx-table__foot {...props} />
);
