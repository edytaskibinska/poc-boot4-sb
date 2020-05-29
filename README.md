# poc-boot4-sb

npm start

npm run build

# Project settings steps :

//dependencies
npm init -y
npm i react react-dom typescript
npm i @types/react @types/react-dom
npm i parcel-bundler -D
npm i node-sass -D



//Parcel config : in package.json , in "scripts" change the line "test : echo ..." to :
    "start": "parcel index.html -p 3000",

//then add the build script
    "build": "parcel build index.html --no-cache"

//create tsconfig.json with the basic configuration :
{
    "compilerOptions": {
      "allowSyntheticDefaultImports": true,
      "jsx": "react",
      "module": "commonjs",
      "noImplicitAny": true,
      "outDir": "./build/",
      "preserveConstEnums": true,
      "removeComments": true,
      "sourceMap": true,
      "target": "es5"
    },
    "include": [
      "./app/**/*"
    ]
  }

  #BIT 

  npm install bit-bin --global --no-optional

1. Initialize Bit on a project
Open a terminal application and follow these steps to initialize Bit for your project. Make sure to authenticate Bit and NPM.
$ cd project_directory
$ bit init
$ bit login
 
to reinitialize init :
bit init --reset-hard   
It reainitialize the .bitmap file
 
2. Track components
Use glob pattern to track components with their test files and validate that Bit can isolate all components. Note - the command below fits the directory structure to the right. Find more usage examples.
$ bit add src/utils/* -t 'test/utils/{PARENT}.spec.ts'

$ bit add app/ui-shared/*


$ bit status
 
If any component has dependency graph issues, click here to learn how to resolve them.
3. Configure build and test steps
Configure build and test steps. For this example, they are TypeScript, and Mocha.
$ bit import bit.envs/compilers/typescript --compiler
$ bit import bit.envs/testers/mocha --tester
 
4. Tag and export
Set a version to all tracked components, and export to this collection.
$ bit tag --all 1.0.0

If you have an error like : 

error: bit failed to build box with the following exception:
Cannot read property 'split' of undefined
TypeError: Cannot read property 'split' of undefined
    at getNameOfFile(...)

Launch the command once again



$ bit export upsideodev-ui.juliette-ui
or
$ bit export upsideodev-ui.juliette-business
or
$ bit export upsideodev-ui.test
 
 File structure for Bit: 

 
│  package.json
│  README.md
├─node_modules
├─src
│  │  index.js
│  ├─utils
│  │  ├─isString
│  │  │    index.ts
│  │  │    isString.ts
│  │  │    isString.d.ts
│  │  │    README.md
│  │  ├─concat
│  │  │    index.ts
│  │  │    concat.ts
│  │  │    concat.d.ts
│  │  │    README.md
│  │  ├─isEmpty
│  │  │    index.ts
│  │  │    isEmpty.ts
│  │  │    isEmpty.d.ts
│  │  │    README.md
└─test
    └─utils
        └─isString.spec.ts
        └─concat.spec.ts
        └─isEmpty.spec.ts
 
 
Upsideo proposition:
 
│  package.json
│  README.md
├─node_modules
├─app
│  │  index.js
│  ├─ui-shared
│  │  ├─Button
│  │  │    Button.tsx
│  │  │    buttonSytyle.scss / or .txs if CSS in JS
│  │  ├─Title
│  │  │    Title.tsx
│  │  │    titleSytyle.scss
└─test
    └─ui-shared
        └─Button.spec.ts
        └─Title.spec.ts
 


5. To build components in local directory (exported to dist/) : 

bit build
