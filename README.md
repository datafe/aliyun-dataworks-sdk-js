## 安装

### Development

```sh
npm install
bower install
npm install -g browserify
npm run build
```

see samples/browser/searchMetaTables.html and test request result

### 浏览器端安装

https://github.com/datafe/aliyun-dataworks-sdk-js/blob/master/browser.md

## 使用方法及代码示例

### Window Object Using

import dist/aliyun-dataworks-sdk.js into html

``` javascript
let ALY = window.ALY;

let dataworks = new ALY.DATAWORKS({
  // see https://ram.console.aliyun.com/manage/ak
  accessKeyId: "Your Access Key",
  secretAccessKey: "Your Access Secret",
  endpoint: 'http://dataworks.cn-shanghai.aliyuncs.com',
  apiVersion: '2020-05-18'
});

// example https://next.api.aliyun.com/api/dataworks-public/2020-05-18/SearchMetaTables
dataworks?.searchMetaTables?.({
  AppGuid: 'odps.YOUR_MC_PROJECT',
  Keyword: 'test',
  DataSourceType: 'ODPS', // support ODPS, emr
}, (err, res) => {
  console?.log?.(err, res);
});
```

### Module Import

``` javascript
import ALY from 'aliyun-dataworks-sdk-js';

let dataworks = new ALY.DATAWORKS({
  // see https://ram.console.aliyun.com/manage/ak
  accessKeyId: "Your Access Key",
  secretAccessKey: "Your Access Secret",
  endpoint: 'http://dataworks.cn-shanghai.aliyuncs.com',
  apiVersion: '2020-05-18'
});

// example https://next.api.aliyun.com/api/dataworks-public/2020-05-18/SearchMetaTables
dataworks?.searchMetaTables?.({
  AppGuid: 'odps.YOUR_MC_PROJECT',
  Keyword: 'test',
  DataSourceType: 'ODPS', // support ODPS, emr
}, (err, res) => {
  console?.log?.(err, res);
});
```
