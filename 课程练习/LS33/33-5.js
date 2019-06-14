var promise = new Promise(function (resolve, reject) {
    console.log('111');
    resolve();
  });
  promise.then(function () {
    console.log('222');
  });
  console.log('333');
  
  //执行的顺序 案例二
  new Promise((resolve, reject) => {
    resolve(1);
    console.log(2);
  }).then(r => console.log(r));
  
  
  //异步加载图片案例
  function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
      const image = new Image(url);
      image.onload = function () {
        image.width = image.height = 100;
        resolve(image);
      };
      image.onerror = function () {
        reject(new Error('Could not load image at ' + url));
      };
      image.src = url;
    });
  }
  loadImageAsync("https://www.baidu.com/img/bd_logo1.png").then(
    (value) => {
      console.log("YES");
      document.body.appendChild(value);
    }
  ).catch(
    (error) => {
      console.log("NO");
    }
  )
  
  //ajax请求案例//////////////
  const getJSON = function (url) {
    const promise = new Promise(function (resolve, reject) {
      const handler = function () {
        if (this.readyState !== 4) {
          return;
        }
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      };
      const client = new XMLHttpRequest();
      client.open("GET", url);
      client.onreadystatechange = handler;
      // client.responseType = "json";
      client.setRequestHeader("Accept", "application/json");
      client.send();
  
    });
    return promise;
  };
  
  // 域名检测需要解决跨域问题，具体参见跨域解决方案（如jsonp等）
  //getJSON("http://panda.www.net.cn/cgi-bin/check.cgi?area_domain=qq.com").then(function (json) {
  
  getJSON("https://api.github.com/").then(function (json) {
    console.log('Contents: ' + json);
  }, function (error) {
    console.error('出错了', error);
  });
  
  
  /////////////////////////////////////
  //promise对象作为参数的情况
  var p1 = new Promise(function (resolve, reject) {
    // ...
  });
  
  var p2 = new Promise(function (resolve, reject) {
    // ...
    resolve(p1);
  })