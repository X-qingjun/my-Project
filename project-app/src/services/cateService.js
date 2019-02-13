import API from '../api'
import {
    FetchGet,
    FetchPost
} from '../common/fetch'

// 请求分类的分类导航列表
export function getCateNavList() {
    // 使用async， await
    return new Promise((resolve, reject) => {
        FetchGet(API.CATENAV_LIST_URL)
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

// 请求分类的侧边栏分类导航列表
export function getCateLeftList() {
    // 使用async， await
    return new Promise((resolve, reject) => {
        FetchGet(API.CATELEFT_LIST_URL)
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