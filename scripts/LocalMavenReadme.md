# Running local maven based build

1. Open `project/android/app/build.gradle` in project repo.
1. Add:
```
repositories {
    mavenLocal()
    google()
    mavenCentral()
}
```
right before `dependencies` block.
1. Open this repo (fork of `react-native-tvos`)
1. Run `node ./scripts/prepare-local-maven-package.js` (this will last for ~10 minutes, I'd advise commiting this package and omit this step later).
1. Run `node ./scripts/move-local-maven-package-to-local-repository.js`
1. Build project.
