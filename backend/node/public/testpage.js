var GETfn = function () {
    var name = document.getElementById('GETInput').value;
    makeReq('GET', makeConf('GET', 'http://localhost:3000/animal/' + name));
}
var DELETEonefn = function () {
    var name = document.getElementById('DELETEoneInput').value;
    makeReq('DELETEone', makeConf('DELETE', 'http://localhost:3000/animal/' + name));
}
var PUTonefn = function () {
    var name = document.getElementById('PUToneInput').value;
    var data = document.getElementById('PUToneText').value;
    makeReq('PUTone', makeConf('PUT', 'http://localhost:3000/animal/' + name, data));
}
var POSTonefn = function () {
    var name = document.getElementById('POSToneInput').value;
    var data = document.getElementById('POSToneText').value;
    makeReq('POSTone', makeConf('POST', 'http://localhost:3000/animal/' + name, data));
}
function makeConf (method, url, data) {
    return {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": method,
        "data": data ? {"data": data} : undefined
    }
}
function makeReq (id, conf) {
    $.ajax(conf)
    .done(function (response) {
        var ele = document.getElementById(id);
        ele.innerHTML = response ? JSON.stringify(response, null, 2) : 'request success no action';
        console.log(response);
    })
    .fail(function (response) {
        var ele = document.getElementById(id);
        ele.innerHTML = 'failed request';
        console.log('failed request');
    });
}
function validJSON (ele) {
    if (/^[\],:{}\s]*$/.test(ele.value.replace(/\\["\\\/bfnrtu]/g, '@').
        replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
        replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        ele.style['border-color'] = 'green';
    } else {
        ele.style['border-color'] = 'red';
    }
}
