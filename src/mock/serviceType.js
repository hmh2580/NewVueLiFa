var serviceTypeInfo = {
    data: {
        totalpage: 5,
        pagenum: 4,
        serviceTypes: [
          {
            "serviceId": "101",
            "serviceName": "洗剪吹女",
            "price": 48.0,
            "comMoney": 8.0,
            "stype": "洗剪吹类",
            "state": "上架"
          },
          {
            "serviceId": "102",
            "serviceName": "洗剪吹男",
            "price": 40.0,
            "comMoney": 7.0,
            "stype": "洗剪吹类",
            "state": "上架"
          },
          {
            "serviceId": "104",
            "serviceName": "拉直",
            "price": 10.0,
            "comMoney": 7.0,
            "stype": "洗剪吹类",
            "state": "上架"
          },
          {
            "serviceId": "555",
            "serviceName": "拉",
            "price": 11.0,
            "comMoney": 300.0,
            "stype": "洗剪吹类",
            "state": "上架"
          },
          {
            "serviceId": "200",
            "serviceName": "洗发水",
            "price": 200.0,
            "comMoney": 20.0,
            "stype": "护理",
            "state": "上架"
          },
          {
            "serviceId": "103",
            "serviceName": "剪发",
            "price": 30.0,
            "comMoney": 7.0,
            "stype": "烫发",
            "state": "已下架"
          }
        ]

    },
    meta: {
        msg: '获取成功',
        status: 200
    }
  }
  
  var serviceType= {
    serviceTypeInfo
  }
  
  export default serviceType
