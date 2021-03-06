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



//首页轮播图数据
app.get(api.HOME_BANNER_LIST_URL, (req, res) => {
    let result = mock({
        message: 'ok',
        status: 0,
        data: {
            'bannerlist|7': [{
                'id|+1': 100500,
                name: '@ctitle',
                img: "@image('375x180', '@color', '@name')"
            }]
        }
    })
    res.json(result);
})


// 首页协议
app.get(api.POLICY_LIST_URL, (req, res) => {
    let result = mock({
        message: 'ok',
        status: 0,
        data: {
            'policylist|3': [{
                'id|+1': 426230,
                'info|+1': ['累计评价', '满￥99顺丰包邮', '退货补贴'],
            }]
        }
    })
    res.json(result);
})


app.listen('9090', 'localhost', (error) => {
    if (error) {
        console.log('启动失败');
        console.log(error);
    } else {
        console.log('启动成功');
    }
})