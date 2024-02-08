const {exec} = require('shelljs');

require('./prepare-tv-release');

exec('rm -rf ../maven-local-package');
exec('mkdir -p ../maven-local-package/io/github/react-native-tvos');
exec('cp -R /tmp/maven-local/io/github/react-native-tvos ../maven-local-package/io/github/');
