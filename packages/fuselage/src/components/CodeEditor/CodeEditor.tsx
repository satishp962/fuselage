import React from 'react';

import Box from '../Box';
import Scrollable from '../Scrollable';
import extensions from './Extensions';
import useCodeMirror from './hooks/useCodeMirror';

// export enum EditorMode{
//   javascript = "javascript",
//   typescript = "typescript",
//   cpp = "cpp",
//   python = "python",
//   go = "go",
//   sql = "sql",
//   java = "java"
// }

type CodeMirrorProps = {
  initialValue?: string;
};

const CodeEditor = ({ initialValue }: CodeMirrorProps) => {
  const { editor } = useCodeMirror(extensions, initialValue);
  return (
    <Scrollable vertical>
      <Box display='grid' height={'100%'} width={'100%'} ref={editor} />
    </Scrollable>
  );
};

export default CodeEditor;
