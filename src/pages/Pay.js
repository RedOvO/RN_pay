import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Radio, List, Grid } from 'antd-mobile-rn';
// import Alipay from 'react-native-yunpeng-alipay';
import Alipay from '@0x5e/react-native-alipay';
const RadioItem = Radio.RadioItem;

export default class Pay extends React.Component {
  async pay(params){ // params 为后端提供的参数
    console.log('enter pay');
    // Alipay.pay("signed pay info string").then((data) => {
    //   console.log("data",data);
    //   if (data.length && data[0].resultStatus) {
    //     /*处理支付结果*/
    //     switch (data[0].resultStatus) {
    //        case "9000":
    //          opt.success && opt.success(data)
    //          break;
    //        case "8000":
    //          opt.fail && opt.fail('支付结果未知,请查询订单状态')
    //          break;
    //        case "4000":
    //          opt.fail && opt.fail('订单支付失败')
    //          break;
    //        case "5000":
    //          opt.fail && opt.fail('重复请求')
    //          break;
    //        case "6001":
    //          opt.fail && opt.fail('用户中途取消')
    //          break;
    //        case "6002":
    //          opt.fail && opt.fail('网络连接出错')
    //          break;
    //        case "6004":
    //          opt.fail && opt.fail('支付结果未知,请查询订单状态')
    //          break;
    //        default:
    //          opt.fail && opt.fail('其他失败原因')
    //          break;
    //      }
    //   } else {
    //      opt.fail && opt.fail('其他失败原因')
    //   }
    //  }, (err) => {
    //    console.log("err", err);
    //    opt.fail && opt.fail('支付失败，请重新支付')
    //  })
  //   Alipay.pay(params).then(function(data){
  //     console.log(data);
  // }, function (err) {
  //     console.log(err);
  // });
  let response = await Alipay.pay(params);
  console.info(response);
  }
  handlePay = ()=>{
    console.log('enter handlepay')
    this.pay('alipay_sdk=alipay-sdk-java-3.3.4.ALL&app_id=2016091900545639&biz_content=%7B%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%22%2C%22out_trade_no%22%3A%2211111%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22subject%22%3A%22App%E6%94%AF%E4%BB%98%E6%B5%8B%E8%AF%95Java%22%2C%22timeout_express%22%3A%2230m%22%2C%22total_amount%22%3A%220.01%22%7D&charset=utf-8&format=json&method=alipay.trade.app.pay&notify_url=%E5%95%86%E6%88%B7%E5%A4%96%E7%BD%91%E5%8F%AF%E4%BB%A5%E8%AE%BF%E9%97%AE%E7%9A%84%E5%BC%82%E6%AD%A5%E5%9C%B0%E5%9D%80&sign=SbpcV75zjoj9puCQtKBVgKNYdVLPPUIJ4OcQhpFcQ3eB%2Fr%2FxvPDHqn%2Frl6bBlYEVL840REqNhLSE0vhaIK6iaTPepoNrBQHJCg6PeBO%2FdGiWTR1Jd5LKXGFcoZkLh1dyah4rYIGNt0QRQ2u27AD6MHL%2Buli1GKe8lhO1biDNN%2BDh%2Bk7onH3tX1M6Q4M1uipup6%2Bcxb41z8mX%2FDdgZ8BgKUT1T%2B48pixRxtB3RkQ%2BhplLRaQtZ0uTRfDp7eYyQGiSj9Y9th1HBs2SpYpyZ3%2BhMVsyo1a6nGaxArTgn2ZqCVlC5pe64eAjyLoTqKbyeAl0TR4ZW1R%2BSaVNEfEUVIZBCQ%3D%3D&sign_type=RSA2&timestamp=2018-07-18+14%3A36%3A17&version=1.0');
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btn_group}>
          <Button onClick={this.handlePay} style={styles.btn}>10元</Button>
          <Button type='ghost' style={styles.btn}>50元</Button>
          <Button style={styles.btn}>100元</Button>
        </View>
        <View style={styles.btn_group}>
          <Button style={styles.btn}>100元</Button>
          <Button style={styles.btn}>200元</Button>
          <Button style={styles.btn}>500元</Button>
        </View>
        <List style={{ width: 400, height: 400 }}>
          <Text style={{ marginTop: 12, marginLeft: 12 }}>
            充值方式
          </Text>
          <RadioItem
           icon={require('../../src/styles/imgs/busi.png')}
            checked={true}
          >
            <Grid data={[{
                icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
                text: `name`,
              }]} 
              />
              {/* <Text>支付宝</Text> */}
          </RadioItem>
          </List>
        <View style={styles.btn_group}>
          <Button type='primary'>充值</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_group:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btn: {
    margin: 5,
    width: 100,
    height: 50,
  }
});
