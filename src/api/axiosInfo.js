import axios from '../libs/api.request'
//import {ProductEnum} from '../libs/enum.js'
// 获取首页和旅游详情页轮播图
export const getInfo =(url,datas) => {   //不需要传参
  return axios.request({
    url: url,
    method: 'get',
    //data:datas,
//  headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
//  'Content-type': 'application/json'}
  })
}

// 根据产品标题获取搜索产品
// title:产品标题
// pageIndex: 当前页
// pageSize: 每页数据数
//export const searchProduct = (title, pageIndex, pageSize) => {
//return axios.request({
//  url: 'home/Search',
//  params: {'title': title, 'pageParameters.pageIndex': pageIndex, 'pageParameters.pageSize': pageSize},
//  method: 'get'
//})
//}
//
//// 获取弹窗
//export const getOpenWindow = () => {
//return axios.request({
//  url: 'home/OpenWindow',
//  method: 'get'
//})
//}
//
//// 获取视频推荐列表，首页和更多都是用此接口
//// pageIndex:当前页
//// pageSize:每页数据数
//export const getVideoList = (pageIndex, pageSize) => {
//return axios.request({
//  url: 'home/VideoList',
//  params: {'pageParameters.pageIndex': pageIndex, 'pageParameters.pageSize': pageSize},
//  method: 'get'
//})
//}
//
//// 获取优惠特惠产品，查看风度哦和旅游攻略中的分类同样调用该接口
//export const getPreProduct = (pageIndex, pageSize, productType) => {
//return axios.request({
//  url: 'home/PreProduct',
//  params: {'pageParameters.pageIndex': pageIndex, 'pageParameters.pageSize': pageSize, productType: productType},
//  method: 'get'
//})
//}
//
//// 获取资讯列表
//export const getInformation = (pageIndex, pageSize) => {
//return axios.request({
//  url: 'home/Information',
//  params: {'pageParameters.pageIndex': pageIndex, 'pageParameters.pageSize': pageSize},
//  method: 'get'
//})
//}
//
//// 获取资讯详情
//// id: 资讯id
//export const getInformationInfo = (id) => {
//return axios.request({
//  url: 'home/InformationInfo',
//  params: {id: id},
//  method: 'get'
//})
//}
