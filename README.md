## 安装

### Development

```sh
npm install
npm install -g bower
bower install
npm install -g browserify
npm run build
```

see samples/browser/searchMetaTables.html and test request result

## 使用方法及代码示例

### Window Object Using

浏览器端安装，请查看此[链接](https://github.com/datafe/aliyun-dataworks-sdk-js/blob/master/browser.md)

import dist/aliyun-dataworks-sdk.js into html

``` javascript
let ALY = window.ALY;

if(!ALY?.DATAWORKS) return;
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

#### Common JS

``` javascript
import ALY from 'aliyun-dataworks-sdk-js';

if(!ALY?.DATAWORKS) return;
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

#### Module / Vite

将aliyun-dataworks-sdk.min.js放至publicDir，然后在html透过script标签载入dist/aliyun-dataworks-sdk.min.js代码引用

``` html
<script type="text/javascript" src="/aliyun-dataworks-sdk.min.js"></script>
```

```javascript

if (!globalThis?.ALY?.DATAWORKS) return;
let dataworks = new globalThis.ALY.DATAWORKS({
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
