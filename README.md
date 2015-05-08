# ngPluralizeFilter

[![Travis](https://img.shields.io/travis/mikaelharsjo/ngPluralizeFilter.svg?style=flat)](https://travis-ci.org/mikaelharsjo/ngPluralizeFilter)

Angular filter that transforms english nouns into its plural form.
* vogon -> vogons
* person -> people
* ox -> oxen
* cherry -> cherries

## Installation
```bash
bower install ng-pluralize-filter --save
```

## Example usage
```html
<html ng-app='app'>
<head>
  <script src="bower_components/angular/angular.js"></script>
  <script src="bower_components/ng-pluralize-filter/ng-pluralize-filter.js"></script>
  <script>
    angular.module('app', ['ngPluralizeFilter']);
  </script>
</head>
<body>{{'cat' | pluralize}}</body>
</html>
```

## Contributing
```bash
npm install
bower install
gulp
```
