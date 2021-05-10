module.exports = {
    connectUrl: 'mongodb://test:test@localhost:27017/jwtdemo',
    port: 3000,
    baseApi: 'api',
    secret: 'jwt_secret',
    unless_path: [/\/api\/register/, /\/api\/login/]
}