

let env
if (location.host.includes('127.0.0.1') || location.host.includes('localhost')) {
    env = 'dev';
} else if (location.host === 'api-driver-stg.marsview.cc') {
    env = 'stg';
} else {
    env = 'prd';
}

/**
 * 环境配置封装
 */
const config = {
    dev: {
        baseApi: '/api',
        uploadApi: 'http://127.0.0.1:2021',
        cdn: 'http://xxx.aliyun.com',
        mock: true,
        mockApi: 'https://www.fastmock.site/mock/32586dc72671b593544e5d191ada0b88/api'
    },
    stg: {
        baseApi: '/api',
        uploadApi: 'http://api-driver-stg.marsview.cc',
        cdn: 'http://xxx.aliyun.com',
        mock: false,
        mockApi: 'https://www.fastmock.site/mock/32586dc72671b593544e5d191ada0b88/api'
    },
    prd: {
        baseApi: '/api',
        uploadApi: 'http://api-driver.marsview.cc',
        cdn: 'http://xxx.aliyun.com',
        mock: false,
        mockApi: 'https://www.fastmock.site/mock/32586dc72671b593544e5d191ada0b88/api'
    }
};

export default {
    env,
    ...config[env]
};
