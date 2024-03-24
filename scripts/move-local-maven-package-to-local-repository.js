const { exec } = require("shelljs");

const REACT_NATIVE_TVOS_MAVEN_REPOSITORY_PATH = '~/.m2/repository/io/github';
const LOCAL_PACKAGE = '../maven-local-package/io/github/react-native-tvos';

exec(`rm -rf ${REACT_NATIVE_TVOS_MAVEN_REPOSITORY_PATH}/react-native-tvos`);
exec(`mkdir -p ${REACT_NATIVE_TVOS_MAVEN_REPOSITORY_PATH}/react-native-tvos`);
exec(`mv ${LOCAL_PACKAGE} ${REACT_NATIVE_TVOS_MAVEN_REPOSITORY_PATH}`);
