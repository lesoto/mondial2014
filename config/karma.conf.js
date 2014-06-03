basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/bower_components/angular/angular.js',
  'app/bower_components/angular/angular-*.js',
  'test/lib/angular/angular-mocks.js',
  'app/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
