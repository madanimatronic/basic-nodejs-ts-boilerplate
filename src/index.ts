import os from 'node:os';
import { bong } from './cloud';
import { anbc } from './game/test';

console.log(__filename, __dirname, 'Hello!', 10 + 12, os.arch());
bong();
console.log('We also have a nice anbc here:', anbc);
