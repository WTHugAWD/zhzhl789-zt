// 产品类型
export const ProductEnum = {
  All: -1,
  HotGold: 0,
  SeasonPre: 1,
  ValueMeals: 2,
  Longsongbo: 3,
  IsHot: 4,
  TourismArea1: 5,
  TourismArea2: 6,
  CruiseCollection: 7,
  FamilyStudies: 8,
  properties: {
    0: { name: '热销金榜' },
    1: {name: '季时特惠'},
    2: {name: '美食超值套餐'},
    3: {name: '每周推荐'},
    4: {name: '热门推荐'},
    5: {name: '国内游'},
    6: {name: '国外游'},
    7: {name: '邮轮集锦'},
    8: {name: '亲子研学'}
  }
}

// 验证码类型
export const SmsCodeEnum = {
  Register: 0,
  FindPwd: 1,
  properties: {
    0: {name: '注册'},
    1: {name: '找回密码'}
  }
}
