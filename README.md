
# react-native-tip

## Getting started

`$ npm install react-native-tip --save`

### Mostly automatic installation

`$ react-native link react-native-tip`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-tip` and add `RNTip.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNTip.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNTipPackage;` to the imports at the top of the file
  - Add `new RNTipPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-tip'
  	project(':react-native-tip').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-tip/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-tip')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNTip.sln` in `node_modules/react-native-tip/windows/RNTip.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Tip.RNTip;` to the usings at the top of the file
  - Add `new RNTipPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNTip from 'react-native-tip';

// TODO: What to do with the module?
RNTip;
```
  