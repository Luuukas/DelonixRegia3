const webpack = require('webpack')

module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    }
}

module.exports = {
    lintOnSave: false
}

module.exports = {
    configureWebpack: {
        devServer: {
            proxy: {
                '/api': {
                    target: 'http://localhost:8080',
                    changeOrigin: true, //�Ƿ����
                    pathRewrite: {
                        '^/api': '' //�涨�����ַ��ʲô��Ϊ��ͷ
                    }
                }
            }
        }
    }
}