# ngOnDemand

A way to load AngularJS controllers ondemand.

This is a way to load AngularJS controlers when they are needed. It will load the script over xhr when the controler is requested.

### Version
0.0.3

### Todo's

- Add Test
- Add Offline storage w/ version control - The idea is after a script is loaded it, should save to localStorage/localDB to keep from reloading from server
- Reorganize code into a proper class


### Installation

Via Bower

```sh
$ bower install  ng-ondemand
```

### Usage
```javascript 
   controllers = [{
    name: 'controllerName',
    path: 'the/path/to/controller.js',
    arguments: 'the arguments to send to the controler, space seperated',
    module: 'app'
}]
//Run after angular.module
 ngOnDemand(controllers)
```

### Example

```javascript 
angular.module('app', [
]);
   controllers = [{
    name: 'oneController',
    path: 'components/one/oneController.js',
    arguments: '$scope $firebase',
    module: 'app'
},{
    name: 'twoController',
    path: 'components/two/twoController.js',
    arguments: '$scope $http',
    module: 'app'
}]

 ngOnDemand(controllers)
 /*
   components/one/oneController.js
 */
 function oneController() {
 $scope.yeah = 'Data Binding is Cool!'
 }

```

### Development

Want to contribute? Great!

###License

MIT