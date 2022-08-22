import { javascript } from '@codemirror/lang-javascript';

import basicSetup from './basicSetup';
import theme from './theme';

const extensions = [javascript(), basicSetup, ...theme];

export default extensions;
