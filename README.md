# dalle
1. 前端vue-pic/vue.config.js中填写自己服务器ip

2.修改/docker-compose/nginx/nginx.conf文件，填写你的服务器IP

3.使用DockerCompose启动进入文件夹 /docker-compose 修改 docker-compose.yml 文件替换自己的API_KEY

4.进入文件夹 /docker-compose 运行以下命令

 # 前台运行
 docker-compose up
 # 或后台运行
 docker-compose up -d
