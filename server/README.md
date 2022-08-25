# 之前我们是手动去搭建我们的express框架的，其实Express也是有脚手架的，我们可以通过应用生成器工具express-generator可以快速创建一个应用的骨架，
# 我们可以使用命令npx express-generator来运行express应用程序生成器 npx 包含在nodejs8.2.0及更高的版本中
# 对于比较老的node版本，可以通过npm install -g express-generator将express应用程序生成器安装到全局环境中并执行即可
# 我们在目录project2022下新建一个server文件夹，然后在server文件夹下执行npx express-generator
# 然后server下面就会有这些文件bin public routes views app.js package.json   bin目录下有一个www文件，这个文件里面就是我们启动服务器用的操作
# www文件的作用就是启动服务器，设置服务器的一些相关操作
# public 文件夹就是静态文件存放的地方
# routes 是写路由的地方
# views是存放模板的地方
# app.js是主入口

# 我们npx express-generator只是搭建了后端环境，但是还没有安装依赖，所以我们要在server文件夹下npm install 
# 下载依赖之后我们我们查看package.json里面，我们可以使用npm start来启动项目
# 我们可以把node改为nodemon 起那么我们已经全局安装过nodemon了，我们在package.json中进行配置  然后我们使用nodemon begin就可以启动服务啦
# 因为我们没有设置端口号，所以在www文件夹中就使用了默认的端口3000 此时我们在页面输入localhost:3000就可以查看后端页面了
# 我们看路由里面，我们访问根路径的时候渲染的就是index这个模板，所以页面显示的就是express welcome to express
# 这样express框架就搭建完成了

# 接口的开发都是需要数据库的，所以我们先来设计数据库
# 接口的发开，在开发之前我们要在后端express中加上数据库，我们在server文件夹下新建一个db文件夹，然后在db文件夹中新建一个index，js和
# config.js  然后把配置写进去
# 然后下载好mysql        npm install mysql -S



# 前端请求后端接口我们使用axios    下载axios   npm install axios

# 接口一般都是跨域请求的，所以我们要处理一下跨域问题  我们使用cors中间件来处理跨域   npm install cors --save

# 头像上传我们使用multer这个中间件，文件上传也是用multer这个中间件  我们使用命令  npm install --save multer  来安装multer
# multer中有个dets配置，这个配置是配置我们文件或图片上传的目录，用法是在接口那里使用upload的方法，upload.single（'字段名称a1'）表示
# 单文件上传，single方法里面放的是前端上传时的字段名称，upload.array('字段名称b'，12)  表示多文件上传，12表示上传的数量
# single方法里面放的是前端上传时的字段名称，