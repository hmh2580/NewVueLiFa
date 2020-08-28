import Mock from 'mockjs'
import User from './user'
import Menus from './menu'
import Users from './users'
import ServiceTypes from './serviceType'
import Stypes from './stype'

Mock.mock('login', 'post', () => {
  return User.userInfo
})

Mock.mock('menus', 'get', () => {
  return Menus.menusInfo
})

Mock.mock(RegExp('users' + '*'), 'get', () => {
  return Users.usersInfo
})

Mock.mock(RegExp('serviceTypes' + '*'), 'get', () => {
  return ServiceTypes.serviceTypeInfo
})

Mock.mock(RegExp('stypes' + '*'), 'get', () => {
  return Stypes.stypeInfo
})
