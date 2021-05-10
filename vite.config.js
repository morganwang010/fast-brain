import vue from '@vitejs/plugin-vue'
const path = require('path')

export default {
    
        entry: path.resolve(__dirname, 'src/main.js'),
        port: '8080',//指定客户端默认端口
        hostname: '0.0.0.0',
        proxy: {
            "/api": {
                target: "http://localhost:3010", //代理服务端域名端口
                changeOrigin: true,
                secure: false,
            },
        },
        optimizeDeps: {
            allowNodeBuiltins: [],
        },

        // open: 'index.html'
 
      plugins: [vue()],


};
