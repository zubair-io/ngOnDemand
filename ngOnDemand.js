function ngOnDemand(x) {

    if (window.ngOnDemandStorage == undefined) {
        window.ngOnDemandStorage = {}
    }

    for (var i = 0, len = x.length; i < len; i++) {

        var args = x[i];
        var name = args.name
        var path = args.path
        var argumentz = args.arguments
        var module = args.module


        var code = 'var args = arguments;' +
            'var fName = arguments;' +
            'console.log(args);' +
            
            'if (ngOnDemandStorage["' + name + '"] && ngOnDemandStorage["' + name + '"].loaded) {' +

            'eval(ngOnDemandStorage["' + name + '"].data);' +
            'window["' + name + '"] = ' + name + ';' +
            name + '.apply(this, args);' +


            '} else {' +
            '  var xhr = new XMLHttpRequest();' +
            '  xhr.onreadystatechange = function() {' +
            ' if (xhr.readyState == 4) {' +
            'ngOnDemandStorage["' + name + '"] = {data: xhr.responseText, loaded : true};' +
            'eval(xhr.responseText);' +

            'window["' + name + '"] = ' + name + ';' +
            name + '.apply(this, args);' +


            ' }' +
            '  };' +
            ' xhr.open(\'GET\', "' + path + '", true);' +
            ' xhr.send(null);' +
            '  }'

        data = data = argumentz.split(' ')

        data.push(code)

        console.log(data)


        window[name] = Function.apply(this, data)
        if (module) {
            angular.module(module).controller(name, window[name]);
            
        }

    }


}