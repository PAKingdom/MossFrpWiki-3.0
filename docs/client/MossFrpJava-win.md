# (Win)MossFrpJava.jar
食用方法：[下载](https://baidu.com) #待补链
## 前言
Windows 系统是不自带Java运行时环境的，所以我们需要自行去下载<br>
地址：[下载Java](https://www.java.com/zh-CN/download/manual.jsp)<br>
Java8+都可以运行<br>
## 下载Java
点击下载按钮，下载64位版本<br>
进去之后，点![image051bac1d2b715cfa.png](/image051bac1d2b715cfa.png)这个链接，然后跟着安装程序一路下一步即可
## 启动
在Windows环境下双击 MossFrpJava.jar 会自动创建 MossFrp和run.bat<br>
目录结构
```
MossFrpJava.jar
│  run.bat
│
└─MossFrp
    │  config.yml
    │
    ├─configs
    │      example.yml
    │
    ├─frps
    │      MossFrpProcess.jar
    │
    ├─languages
    │      en_us.yml
    │      zh_cn.yml
    │
    └─logs
```
### run.bat
双击启动run.bat文件<br>
看见以下提示即可
```
[信息]启动完成！耗时0.001秒！使用指令’help‘来查看帮助！
```
下面介绍三步设置，设置完即可<br>
## 保存配置
```
--= MossFrp 指令帮助 =--
保存配置：save <名称> <穿透码>
举例：save myTunnel abc123456789
名称不允许中文/特殊符号/空格，只允许英文/下划线/数字
如果是非MossFrp隧道，直接在对应文件夹下复制example.yml去改就行
配置文件将会保存在/MossFrp/configs文件夹下
Tips：输入的时候别带括号<>哦！
```
(不会有人看不懂吧)
## 修改文件
```
#MossFrp客户端配置文件

#是否启用此隧道
enable: false //如要启用请改为 true

#隧道类型
#如果是MossFrp用户则填mossfrp
#反之填custom
type: "mossfrp" 

#本地地址
#一般填127.0.0.1即可
localIP: "127.0.0.1"
#本地端口
#MC服务器默认25565
#联机请填开放端口
#如MC开启局域网游戏后聊天栏提示的端口
localPort: "25565" 

#服务器地址
#frp服务器的地址
#MossFrp用户则为 节点.mossfrp.cn
#如zz1节点就填zz1.mossfrp.cn
remoteIP: "us1.mossfrp.cn" 
#服务器端口
#即服务端frps设置的连接端口
#MossFrp用户即穿透码列表里头显示的端口（一般尾数为0）
#如果使用的save指令生成的配置文件就不用改
remotePort: "53250" 
#开放端口
#也就是后面连接服务器使用的端口
#MossFrp用户一般是上面remotePort的后面顺序9个
#可用的端口范围是53251-53259
openPort: "53251"

#Token密码
#用于服务端身份验证，MossFrp用户在此填你的穿透码
#考虑到安全性原因，我们要求无论是否为mossfrp用户都需要设置token
token: "3us114275675254600447" 

#穿透协议
#选填tcp/udp
#MC一般是tcp
protocol: tcp

#---------------------------
#以下是一些高级设置，不懂就别乱动哈
#---------------------------

#启用带宽压缩
#据说会有一点点延迟
#带宽不够用可以开启
use_compression: false
#启用链接加密
#讲真没啥用，需要可以开启
#在特殊情况下无法连接到frp服务器可以尝试开启
use_encryption: false

#开启protocol
#可选参数：false/v1/v2
#例如MC用于Bungee转发真实IP
#请在Bungee配置文件中设置proxy_protocol: true以及ip_forward: true
#然后在Spigot配置文件中设置BungeeCord: true
#最后在此设置参数为 v2
proxy_protocol_version: false

#frpc的基础额外配置
#非必要，没特殊需求就别动
commonExtraSettings: ""
#frpc的隧道额外配置
#非必要，没特殊需求就别动
tunnelExtraSettings: ""
```
## 重载客户端
你改完文件辣？这是最后一步了窝<br>
回到我们的命令行输入`reload`就生效了窝<br>
Frp进程X启动成功！连接地址******<br>
快乐游戏吧 END