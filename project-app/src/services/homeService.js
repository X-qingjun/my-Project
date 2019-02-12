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