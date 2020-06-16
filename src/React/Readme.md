###React

1.  JSX: Js的XML语法扩展, Can improve efficiency to develop software.
    

2.  npm install -g bower  => install bower 
    bower install react => install react
    bower install babel => install babel: browser.js can recognize jsx.
    
3.  React is component based

4.  `npx create-react-app react-app` : New project of React
    `npm run build` : build the project
    
5.  `npm start` : start server

6.  webpack: bundling application, related files to view.

7.  rcc  => Class
    rsf  => Function
    rcfc => PropTypes + React

8.  React: Logical control
    ReactDOM: render

9.  `npm install -g serve`
    `serve -s build`

10. render:
        a>  Only required method
        b>  Read props and state
        c>  can return JSX
        d>  Do not change state
        e>  Do not interact with Dom
        f>  Do not make ajax calls
        g>  children components lifecycle methods are also excuted
11. LifeCycle:
        a>  Before V16.0
                componentDidCatch(error, info) -> error component
           
        b>  After V16.0
            add Fiber
12.  Routing:
        npm install react-router-dom

13. gulp to map scss: automation of time consuming task In a development work flow
        a>  `npm init`    -> generate package.json
        b>  `npm install --save-dev gulp`
        c>  `npm install --save-dev gulp -g`
        d>  `npm install --save-dev gulp-rename`
        e>  `npm install --save-dev gulp-sass`
        f>  `npm install --save-dev gulp-autoprefixer`
        g>  `gulp style`
        h>  `npm install --save-dev gulp-imagemin`
            `gulp image`
        i>  `npm install --save-dev gulp-sourcemaps`
        j>  `gulp` -> generate map automatically
        k>  `npm install --save-dev browser-sync`
        L>  gulp: conver an SVG image to ico file:
                1> `npm install gulp-svgmin --save-dev`
                2> `npm install gulp-svgstore --save-dev`
        M>
        N>
        
14. Grunt
        a>  npm install grunt-cli -g
        b>  npm init
        c>  npm install grunt --save-dev
            npm install grunt-contrib-concat --save -dev
            npm install node-sass --save-dev
            npm install grunt-sass --save-dev
            npm install grunt-contrib-uglify --save-dev
        d>  Task:
                1>  configure task
                2>  Load plugin
                3>  
        e>  grunt run
        f>  grunt concat-js
            grunt concat-css
        g>  
            
        h>
        h>
        

15. LESS:

16: differences between sass and scss:
        sass(indented syntax)
        scss(parents and semicolons)
        
17: differences between LESS and SASS:
        1>  
        2>  
18> `npm install less -g` ->LESS build
        a> `lessc first.less style.css`  -> generate css file
        b> Example Links:  
            1> 


19> ant component
        a> `npm install antd --save` -> antd component
        b> `npm install react-app-rewired@2.0.2-next.0 babel-plugin-import --save`
        c> add file override.js
        d> package.json: 
            "scripts": {
                "start": "react-app-rewired start",
                "build": "react-app-rewired build",
                "test": "react-app-rewired test",
                "eject": "react-app-rewired eject"}
        e>
20> Bower:
    `npm install -g bower` 
    `bower install/uninstall jquery` + (Specific Version optional: #1.1.1)
    `bower list --path` show path of tool packages
    `bower install backbone`
    `bower install bootstrap -s`
    
   
###React-redux-demo
    This project is about redux
    1. npm init
    2. components create CakeContainer.js


### basic-redux-crud

#### ReactNative
    This is an React Native project:
    with starting environment:
        `npm intall expo-cli --global`
        `expo -v`
