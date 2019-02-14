import API from '../api'
import {
    FetchGet,
    FetchPost
} from '../common/fetch'

// 请求首页的分类
export function getHomeCateList() {
    // 使用async， await
    return new Promise((resolve, reject) => {
        FetchGet(API.CATE_LIST_URL)
            .then(data => {
                resolve({
                    lists: data.catelist.map(({
                        id,
                        shop
                    }) => ({
                        id,
                        shop
                    }))
                })
            })
    })
};

//请求首页轮播图数据;
export function getHomeFocusList() {
    return new Promise((resolve, reject) => {
        FetchGet(API.HOME_BANNER_LIST_URL)
            .then(data => {
                resolve({
                    bannerlists: data.bannerlist.map(({
                        id,
                        img
                    }) => ({
                        id,
                        img
                    }))
                })
            })
    })
}


// 首页协议数据;
export function getHomePolicyList() {
    return new Promise((resolve, reject) => {
        FetchGet(API.POLICY_LIST_URL)
            .then(data => {
                resolve({
                    policylists: data.policylist.map(({
                        id,
                        info
                    }) => ({
                        id,
                        info
                    }))
                })
            })
    })
}