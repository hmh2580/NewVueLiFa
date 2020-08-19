var usersInfo = {
    data: {
        totalpage: 5,
        pagenum: 4,
        users: [
            {
                id: 9527,
                username: '11111',
                mobile: '13097930393',
                type: 1,
                email: '1281820493@163.com',
                create_time: '2017-11-09T20:36:26.000Z',
                mg_state: true, // 当前用户的状态
                role_name: '管理员'
            },
            {
                id: 9528,
                username: '王佐鸿',
                mobile: '15181058063',
                type: 1,
                email: '1281820493@163.com',
                create_time: '2017-11-09T20:36:26.000Z',
                mg_state: true, // 当前用户的状态
                role_name: '用户'
            }
        ]
    },
    meta: {
        msg: '获取成功',
        status: 200
    }
  }
  
  var users= {
    usersInfo
  }
  
  export default users
  