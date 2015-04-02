Package.describe({
  name: '416serg:uber',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Uber OAuth flow',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/416serg/uber',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use('underscore', 'client');
  api.use('templating', 'client');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.export('UberOauth');

  api.addFiles(
    ['uber_configure.html', 'uber_configure.js'],
    'client');

  api.addFiles('uber_server.js', 'server');
  api.addFiles('uber_client.js', 'client');
});
