import RtspServer from 'rtsp-streaming-server';

process.on('uncaughtException', err => console.error('uncaughtException', err));
process.on('unhandledRejection', reason => console.error('unhandledRejection', reason));

new RtspServer({
    serverPort: 5554,
    clientPort: 6554,
    rtpPortStart: 10000,
    rtpPortCount: 10000
}).start().catch();
