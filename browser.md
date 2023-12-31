## 在浏览器端使用 (Aliyun SDK works in Browser, no backend server to run SDK)

- 此包支持npm包的方式载入并于JavaScript或TypeScript上使用
- 此包支持在浏览器端调用, 需要引入dist/aliyun-dataworks-sdk.js, 使用参考sample/browser/searchMetaTables.html
- 此包仅自测使用，因请求工具需要Aliyun accessKey 和 accessSecret进行初始化, 存在泄露风险。

### How to Add Interface

目前dist/aliyun-dataworks-sdk.js中仅包含DataWorks搜表接口, 如果需要build其他接口，请至此[链接](https://next.api.aliyun.com/api/dataworks-public/2020-05-18)查看接口，并打开apis/dataworks-2020-05-18.json参考搜表接口自行添加。


### How to Build

目前dist/aliyun-dataworks-sdk.js中仅包含DataWorks搜表接口, 如果需要build其他接口，参考上一步添加至apis/dataworks-2020-05-18.json后，按照以下步骤操作：

- git clone git@github.com:datafe/aliyun-dataworks-sdk-js.git
- cd aliyun-dataworks-sdk-js
- npm install
- bower install
- npm install -g browserify

```sh
browserify -r dataworks-2020-05-18.json browser.js > dist/aliyun-dataworks-sdk.js
```

目前在浏览器端运行的SDK还在测试阶段, 如果有问题请随时提出.

## 初始化

```javascript
let ALY = window.ALY;
let dataworks = new ALY.DATAWORKS({
  // see https://ram.console.aliyun.com/manage/ak
  accessKeyId: "Your Access Key",
  secretAccessKey: "Your Access Secret",
  endpoint: 'http://dataworks.cn-shanghai.aliyuncs.com', // 上海的endpoint，其他地域请参考https://api.aliyun.com/product/dataworks-public
  apiVersion: '2020-05-18'
});
```


