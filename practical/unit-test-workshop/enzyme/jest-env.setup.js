import { TextEncoder, TextDecoder } from "util";

Object.assign(global, { TextDecoder, TextEncoder });

global.ReadableStream = require("stream/web").ReadableStream;

const { MessagePort, MessageChannel } = require("worker-mock");
global.MessagePort = MessagePort;
global.MessageChannel = MessageChannel;
