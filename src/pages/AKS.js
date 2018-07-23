import React from "react";
import { Button, Modal } from "antd-mobile-rn";
import {
  StyleSheet,
  ScrollView,
  AsyncStorage,
  Text,
  View,
  Image,
  DeviceEventEmitter,
  ImageBackground
} from "react-native";
import axios from "axios";
import { preURL } from "../config/axiosConfig";
export default class AKS extends React.Component {
  state = {
    configList: []
  };
  componentWillMount() {
    DeviceEventEmitter.addListener("reloadConfig2", this.getShopInfo);
  }
  componentDidMount() {
    // AsyncStorgae 获取一键购物配置
    this.getShopInfo();
  }
  getShopInfo = async () => {
    let ShopList = await AsyncStorage.getItem("shopList");
    ShopList = JSON.parse(ShopList).shopList;
    this.setState({ configList: ShopList });
  };
  handleClick = key => {
    // axios 一键购物
    let ShopItem = this.state.configList.filter(item => {
      return item.id == key;
    });
    axios({
      method: "POST",
      url: preURL + "/shop",
      dataType: "json",
      data: ShopItem[0],
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      }
    }).then(response => {
      if (response.data === "success") {
        Modal.alert("提示", "购买成功");
      } else {
        Modal.alert("购买失败", response.data);
      }
    });
  };
  render() {
    const { configList } = this.state;
    return (
      <ScrollView>
        <ImageBackground
          source={require("../styles/imgs/index_bg.jpg")}
          style={styles.outer}
        >
          <Text style={styles.weshopText}>WeShop</Text>
          <Text style={styles.extraText}>一键购物</Text>
          <View style={styles.btn_group}>
            {configList.map(item => {
              let tempStr =
                "https://raw.githubusercontent.com/xiaobaiha/RN_pay/master/src/styles/imgs/" +
                item.itemId +
                ".jpg";
              // alert(tempStr);
              return (
                <Button
                  key={item.id}
                  onClick={() => this.handleClick(item.id)}
                  style={styles.btn}
                >
                  <Image
                    style={styles.innerImg}
                    source={{
                      uri: tempStr
                    }}
                  />
                  <Text>{item.name}</Text>
                </Button>
              );
            })}
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  outer: {
    flex: 1,
    flexDirection: "column"
  },
  btn_group: {
    flex: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    height: "100%"
  },
  btn: {
    width: 150,
    height: 200,
    margin: 10,
    flexDirection: "column"
  },
  innerImg: {
    width: 300,
    height: 350
  },
  weshopText: {
    flex: 3,
    fontSize: 40,
    marginTop: 40,
    marginLeft: 20,
    color: "white"
  },
  extraText: {
    flex: 2,
    fontSize: 30,
    marginLeft: 20,
    color: "white"
  }
});
