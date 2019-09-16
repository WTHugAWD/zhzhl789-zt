import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'//首页
import Index2 from '@/pages/index2'//首页
import Login from '@/pages/login'//登陆
import Register from '@/pages/register'//注册
import NewRegister from '@/pages/newregister'//新用户注册


import CurriculumInfo from '@/pages/curriculuminfo'//精品课程详情（无按钮）

//时间选课
import Curriculum2 from '@/pages/curriculum2'//课程选择2 [时间-课程-教练 流程中的课程选择]  
import CurriculumDetails2 from '@/pages/curriculumdetails2'//课程详情2 [时间-课程-教练  流程中的课程选择的课程详情]
import CurriculumCoach2 from '@/pages/curriculumcoach2'//教练选择2	[时间-课程-教练 流程中的教练选择]  
import CoachDetails2 from '@/pages/coachdetails2'//教练详情2 [时间-课程-教练 流程中的教练选择的教练详情]


//课程选课
import CurriculumDetails from '@/pages/curriculumdetails'//课程详情   [课程-时间-教练 流程中的课程选择]  
import CoachDate from '@/pages/coachdate'//选择时间   [课程-时间-教练 流程中的时间选择]  
import CurriculumCoach from '@/pages/curriculumcoach'//教练选择  [课程-时间-教练 流程中的教练选择] 
import CoachDetails from '@/pages/coachdetails'//教练详情  [课程-时间-教练 流程中的教练选择的教练详情] 

//教练选课
import CoachDetails1 from '@/pages/coachdetails1'//教练详情  [教练-课程-时间 流程中的教练详情] 
import Curriculum from '@/pages/curriculum'//课程 [教练-课程-时间 流程中的课程选择]
import CurriculumDetails1 from '@/pages/curriculumdetails1'//课程详情1 [教练-课程-时间  流程中的课程选择的课程详情]
import CoachDate1 from '@/pages/coachdate1'//选择时间   [教练-课程-时间 流程中的时间选择]  


//即将开课的单独选择教练
import CurriculumCoach1 from '@/pages/curriculumcoach1'//教练选择  [即将开课-教练 流程中的教练选择] 




import PingJia from '@/pages/pingjia'//评价




import Classroom from '@/pages/classroom'//精品课程列表		
import CoachList from '@/pages/coachlist'//精品课程列表



import CoachCoachClassroom from '@/pages/coachclassroom'//教练个人课程分类




//import CoachDetails from '@/pages/coachdetails'//教练详情

import UserInfo from '@/pages/userinfo'//个人中心
import Pay from '@/pages/pay'//课程支付



Vue.use(Router)

export default new Router({
//	mode:'history',
  routes: [
    {path: '/',redirect:'/login'},
    {path: '/index',name: 'index',component: Index,meta:{keepAlive:false}},//首页
    {path: '/index2',name: 'index2',component: Index2,meta:{keepAlive:false}},//首页
    {path: '/login',name: 'login',component: Login},//登陆
    {path: '/register',name: 'register',component: Register},//注册
    {path: '/newregister',name: 'newregister',component: NewRegister},//新用户注册
    {path: '/pingjia',name: 'pingjia',component: PingJia},//评价
    {path: '/curriculum',name: 'curriculum',component: Curriculum},//课程
    {path: '/curriculum2',name: 'curriculum2',component: Curriculum2},//课程2
    {path: '/curriculumcoach2',name: 'curriculumcoach2',component: CurriculumCoach2},//课程-教练2
    {path: '/curriculumcoach',name: 'curriculumcoach',component: CurriculumCoach},//课程-教练
    {path: '/curriculumcoach1',name: 'curriculumcoach1',component: CurriculumCoach1},//课程-教练
    {path: '/classroom',name: 'classroom',component: Classroom},//精品课程列表
    {path: '/coachlist',name: 'coachlist',component: CoachList},//教练列表
    {path: '/curriculumdetails',name: 'curriculumdetails',component: CurriculumDetails},//精品课程详情
    {path: '/curriculumdetails2',name: 'curriculumdetails2',component: CurriculumDetails2},//精品课程详情2
    {path: '/coachdetails2',name: 'coachdetails2',component: CoachDetails2},//教练详情2
    {path: '/coachclassroom',name: 'coachclassroom',component: CoachCoachClassroom},//教练个人课程分类
    {path: '/coachdate',name: 'coachdate',component: CoachDate},//时间选择
    {path: '/coachdetails',name: 'coachdetails',component: CoachDetails},//教练详情
    {path: '/coachdetails1',name: 'coachdetails1',component: CoachDetails1},//教练详情
    {path: '/curriculuminfo',name: 'curriculuminfo',component: CurriculumInfo},//精品课程详情（无按钮）
    
    {path: '/curriculumdetails1',name: 'curriculumdetails1',component: CurriculumDetails1},//精品课程详情2
    {path: '/coachdate1',name: 'coachdate1',component: CoachDate1},//时间选择
    
    
    {path: '/userinfo',name: 'userinfo',component: UserInfo},//个人中心
    {path: '/pay',name: 'pay',component: Pay},//课程支付
    
    
  ]
})
