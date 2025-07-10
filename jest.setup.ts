import '@testing-library/jest-dom';
import 'whatwg-fetch';

import { TextEncoder, TextDecoder } from 'util';

// Polyfill para Web Streams API usada pelo MSW
import { TransformStream, ReadableStream, WritableStream } from 'web-streams-polyfill/polyfill';

// Corrige erros de ambiente relacionados ao MSW v2 e DOM API
if (!global.TextEncoder) {
  global.TextEncoder = TextEncoder;
}

if (!global.TextDecoder) {
  global.TextDecoder = TextDecoder as any;
}

// Define os polyfills para streams se não existirem
if (!global.TransformStream) {
  global.TransformStream = TransformStream;
}

// Usar type assertion 'as any' para evitar erro de incompatibilidade de tipos
if (!global.ReadableStream) {
  global.ReadableStream = ReadableStream as any;
}

if (!global.WritableStream) {
  global.WritableStream = WritableStream;
}

class BroadcastChannelMock implements BroadcastChannel {
  name: string;
  onmessage: ((this: BroadcastChannel, ev: MessageEvent) => any) | null = null;
  onmessageerror: ((this: BroadcastChannel, ev: MessageEvent) => any) | null = null;

  constructor(name: string) {
    this.name = name;
  }

  postMessage(_message: any): void { }

  close(): void { }

  addEventListener(_type: string, _listener: EventListenerOrEventListenerObject | null): void { }

  removeEventListener(_type: string, _listener: EventListenerOrEventListenerObject | null): void { }

  dispatchEvent(_event: Event): boolean {
    return true;
  }
}

global.BroadcastChannel = BroadcastChannelMock as any;
