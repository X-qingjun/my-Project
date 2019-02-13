const express = require('express');
const api = require('./api');
const {
    mock,
    Random
} = require('mockjs');
const {
    JSDOM
} = require("jsdom");
const axios = require('axios');

const app = express();

// 首页导航列表
app.get(api.CATE_LIST_URL, (req, res) => {
    let result = mock({
        message: 'ok',
        status: 0,
        data: {
            'catelist|8': [{
                'id|+1': 4123498,
                'shop|+1': ['首页', '限时优惠', '女装', '男装', '童装', '婴幼儿', '运动', '休闲'],
            }]
        }
    })
    res.json(result);
});

// 分类头部导航列表
app.get(api.CATENAV_LIST_URL, (req, res) => {
    let result = mock({
        message: 'ok',
        status: 0,
        data: {
            'catelist|6': [{
                'id|+1': 4123498,
                'shop|+1': ['女装', '男装', '童装', '婴幼儿', '运动', '休闲'],
            }]
        }
    })
    res.json(result);
});



// app.get('/api/film/nowplaying/list', (req, res) => {
//     let result = mock({
//         status: 0,
//         message: 'ok',
//         data: {
//             'playingList|20': [{
//                 'id|+1': 13412318,
//                 name: '@ctitle',
//                 'img|1': ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2035844616,1442845443&fm=26&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3145341095,1749140843&fm=15&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=659349598,2354418033&fm=200&gp=0.jpg'],
//                 'rate|0-5.1': 0,
//                 'actors|2-10': ['@cname'],
//                 'area|1': ['中国', '美国', '英国', '日本', '印度'],
//                 'duration|90-150': 0,
//                 'type|1': ['2D', '3D']
//             }]
//         }
//     });
//     res.json(result);
// })

app.listen('9090', 'localhost', (error) => {
    if (error) {
        console.log('启动失败');
        console.log(error);
    } else {
        console.log('启动成功');
    }
})