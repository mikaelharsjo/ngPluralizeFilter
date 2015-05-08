# ngPluralizeFilter
Angular filter that transforms english nouns into its plural form.
* vogon -> vogons
* person -> people
* ox -> oxen
* cherry -> cherries


## Example usage
```html
<!DOCTYPE html>
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
