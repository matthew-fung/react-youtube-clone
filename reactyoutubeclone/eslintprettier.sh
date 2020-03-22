# Script to install eslint (Standard) + prettier for React projects
# from https://medium.com/dubizzletechblog/setting-up-prettier-and-eslint-for-js-and-react-apps-bbc779d29062
npm i -D babel-eslint eslint eslint-config-standard eslint-config-prettier eslint-plugin-react eslint-plugin-import prettier pretty-quick eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard

# prettier
PRETTIERFILENAME=".prettierrc" 
PRETTIERCONFIG='{ 
 "printWidth": 100,
 "trailingComma": "all",
 "tabWidth": 2, 
 "semi": false, 
 "singleQuote": true
}'
touch .prettierrc
echo "$PRETTIERCONFIG" > "$PRETTIERFILENAME"

# eslint
ESLINTFILENAME=".eslintrc"
ESLINTCONFIG='
{
    "parser": "babel-eslint",
    "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": false
},
"extends": ["react-app","standard", "prettier"],
"env": {
    "browser": true,
    "jest": true
},
"rules": {
    "max-len": ["error", {"code": 100}],
    "prefer-promise-reject-errors": ["off"],
    "react/jsx-filename-extension": ["off"],
    "react/prop-types": ["warn"],
    "no-return-assign": ["off"]
  }
}
'

touch .eslintrc
echo "$ESLINTCONFIG" > "$ESLINTFILENAME"

# vscode fix on save
mkdir .vscode 
VSCODEFILENAME='settings.json'
VSCODECONFIG='{
    "editor.formatOnSave": true
}'
touch settings.json
echo "$VSCODECONFIG" > "$VSCODEFILENAME"