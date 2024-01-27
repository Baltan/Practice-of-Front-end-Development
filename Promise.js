var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var num = Math.floor(Math.random() * 101);
        console.info("生成的随机数是：" + num);
        if (num % 2 === 0) {
            resolve(num);
        } else {
            reject(num);
        }
    }, 3000);
});

promise.then(function (value) {
    console.info(value + "是一个偶数");
}, function (value) {
    console.info(value + "是一个奇数");
});



var promise = new Promise(function (resolve, reject) {
    var num = Math.floor(Math.random() * 101);
    if (num % 2 === 0) {
        resolve(num);
    } else {
        reject(num);
    }
});

promise.then(function (value) {
    console.info(value + "是一个偶数");
}, function (value) {
    console.info(value + "是一个奇数");
});
// =================================================================================


//异步-异步-异步
var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('第一个回调');
        resolve(3);
    }, 3000);
});

promise.then(function(value) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('第二个回调');
            console.log(value * 2);
            resolve(value * 2);
        }, 2000);
    });
}).then(function(value) {
    setTimeout(function() {
        console.log('第三个回调');
        console.log(value * 2);
    }, 1000);
});



//异步-同步-异步
var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('第一个回调');
        resolve(3);
    }, 3000);
});

promise.then(function(value) {
    console.log('第二个回调');
    console.log(value * 2);
    return value * 2;
}).then(function(value) {
    setTimeout(function() {
        console.log('第三个回调');
        console.log(value * 2);
    }, 1000);
});



var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('第一个回调');
        resolve(3);
    }, 3000);
});

promise.then(function(value) {
    setTimeout(function() {
        console.log('第二个回调');
        console.log(value * 2);
        return value * 2;
    }, 2000);
}).then(function(value) {
    setTimeout(function() {
        console.log('第三个回调');
        console.log(value * 2);
    }, 1000);
});
