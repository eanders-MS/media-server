import RtspServer from 'rtsp-streaming-server';

// Start media server
const mediaServer = new RtspServer({
    serverPort: 5554,
    clientPort: 6554,
    rtpPortStart: 10000,
    rtpPortCount: 10000
});

async function run() {
    await mediaServer.start();
}

run().catch();
