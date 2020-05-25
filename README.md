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
      "./src/**/*"
    ]
  }