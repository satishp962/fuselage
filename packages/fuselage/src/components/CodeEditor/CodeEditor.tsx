import React, { useState } from 'react';
import AceEditor from 'react-ace';

import Box from '../Box';
// ace imports
// ace modes
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/snippets/java';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/snippets/python';
import 'ace-builds/src-noconflict/mode-xml';
import 'ace-builds/src-noconflict/snippets/xml';
import 'ace-builds/src-noconflict/mode-ruby';
import 'ace-builds/src-noconflict/snippets/ruby';
import 'ace-builds/src-noconflict/mode-sass';
import 'ace-builds/src-noconflict/snippets/sass';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/snippets/markdown';
import 'ace-builds/src-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/snippets/mysql';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/snippets/json';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/snippets/html';
import 'ace-builds/src-noconflict/mode-handlebars';
import 'ace-builds/src-noconflict/snippets/handlebars';
import 'ace-builds/src-noconflict/mode-golang';
import 'ace-builds/src-noconflict/snippets/golang';
import 'ace-builds/src-noconflict/mode-csharp';
import 'ace-builds/src-noconflict/snippets/csharp';
import 'ace-builds/src-noconflict/mode-elixir';
import 'ace-builds/src-noconflict/snippets/elixir';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/snippets/typescript';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/snippets/css';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/snippets/c_cpp';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/snippets/jsx';
// ace themes
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-min-noconflict/ext-searchbox';
import 'ace-builds/src-min-noconflict/ext-language_tools';

export enum Syntax {
  javascript = 'javascript',
  java = 'java',
  python = 'python',
  xml = 'xml',
  ruby = 'ruby',
  sass = 'sass',
  markdown = 'markdown',
  mysql = 'mysql',
  json = 'json',
  html = 'html',
  handlebars = 'handlebars',
  golang = 'golang',
  csharp = 'csharp',
  elixir = 'elixir',
  typescript = 'typescript',
  css = 'css',
  cpp = 'c_cpp',
  jsx = 'jsx',
}

export enum Theme {
  light = 'github',
  dark = 'monokai',
}

export interface EditorProps {
  value: string;
  theme: Theme;
  mode: Syntax;
}

export default function CodeEditor({ value, theme, mode }: EditorProps) {
  const [editorText, setEditorText] = useState(value || '');

  return (
    <Box display='grid' height='100%' width={'100%'} is='div'>
      <AceEditor
        width='100%'
        mode={mode || 'javascript'}
        theme={theme || 'github'}
        onChange={(v) => {
          setEditorText(v);
        }}
        fontSize={14}
        name={'aceCodeEditor'}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={editorText}
        readOnly={false}
        wrapEnabled={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </Box>
  );
}
