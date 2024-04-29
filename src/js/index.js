import ArrayBufferConverter from './converter';
import getBuffer from './getBuffer';

const converter = new ArrayBufferConverter(getBuffer());

converter.toString();
