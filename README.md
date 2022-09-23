# tools
通过 node.js 提供一些简单服务

### 目录结构

```bash
├── bin                          # 项目启动脚本
├── public                       # 静态文件夹
│   ├── files                    # 文件资源
│   ├── images                   # 图片资源
│   ├── javascripts              # JavaScript 库
│   └── stylesheets              # CSS 样式资源
├── routes                       # 服务接口路由
├── views                        # 视图页面及模板
├── .gitignore                   # gitignore 配置
├── app.js                       # 应用入口文件
├── LICENSE                      # LICENSE
├── package-lock.json            # package-lock.json
├── package.json                 # package.json
└── README.md                    # 项目描述
```

### 构建命令
```
# 安装依赖
npm install

# 启动项目
npm run start
# or
node ./bin/www
```