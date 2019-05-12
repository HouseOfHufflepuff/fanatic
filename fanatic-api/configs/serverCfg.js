module.exports = {
    cors: {
        additionalHeaders: ['Accept', 'Accept-Encoding', 'Accept-Version', 'Cache-Control', 'Content-Type', 'Api-Version', 'Origin', 'Authorization', 'X-Requested-With'],
        origin: ['*'],
        methods: ['GET,PUT,PATCH,POST,DELETE']
    }
}