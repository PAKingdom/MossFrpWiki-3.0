# (Minecraft客户端使用方法)MossFrpJava.jar
版本兼容性问题和简单食用教程请点这里 -> [这里这里](https://www.mcmod.cn/class/6384.html)<br>
## 下载本体及对应支持
下载地址：

本体 Github：[https://github.com/MossFrp/MossFrpClient-Java/releases](https://github.com/MossFrp/MossFrpClient-Java/releases)

Forge支持 Github：[https://github.com/MossFrp/MossFrpClient-Java-ForgeSupport/releases](https://github.com/MossFrp/MossFrpClient-Java-ForgeSupport/releases)

Fabric支持 Github：[https://github.com/MossFrp/MossFrpClient-Java-FabricSupport/releases](https://github.com/MossFrp/MossFrpClient-Java-FabricSupport/releases)<br>

(正在PY gitee下载链接)

如果你的minecraft开启了版本隔离(一般整合包都会开启)<br>
你的mod文件夹链接如下<br>
```
{启动器所在目录}\.minecraft\versions\{你的整合包名字}\mods<br>
```
如果你没有开启版本隔离你的mod文件夹会在这里
```
{启动器所在目录}\.minecraft\mods
```
我们推荐与简单联机等可以设置正版验证是否开启且可以固定端口的模组一同食用。

如：

简单联机：[https://www.mcmod.cn/class/1158.html](https://www.mcmod.cn/class/1158.html)

自定义局域网联机：[https://www.mcmod.cn/class/2754.html](https://www.mcmod.cn/class/2754.html)

更高级联机设置：[https://www.mcmod.cn/class/4498.html](https://www.mcmod.cn/class/4498.html)

Custom port：[https://www.mcmod.cn/class/4812.html](https://www.mcmod.cn/class/4812.html)

你需要知道的：<br>
本软件仅提供端口转发服务<br>
1.13版本以上联机需要正版验证，若需要关闭，可以使用上述模组<br>
## 启动游戏
(请打开作弊模式)如果你的存档开始时未打开作弊模式<br>
请在开启"对局域网开放"时勾选开启作弊<br>
此时聊天栏会提示在xxx端口上开放，记住这个端口<br>
注：如果你不想每次启动游戏都去修改(记住)这个可恶的动态端口，请往教程上面看<br>
进入单人游戏-> 按"T"或者"/"都可以打开聊天框输入命令<br>
我们先来了解下基础命令<br>

`/mossfrp help`<br>

![mossfrphelp](/client/mossfrphelp.png)

你会发现和[Win](/client/MossFrpJava-win.md)的教程大同小异
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
## 修改MossFrp的config
在本文开头已经介绍了mod文件的存放位置，你只需要回到上一级，也就是mod文件夹前。什么你还是不会，好吧
如果你的minecraft开启了版本隔离<br>
你的config文件夹链接如下<br>
```
{启动器所在目录}\.minecraft\versions\{你的整合包名字}\config\MossFrp\configs<br>
```
如果你没有开启版本隔离你的config文件夹会在这里
```
{启动器所在目录}\.minecraft\config\MossFrp\configs
```
PS:config的名字就是你保存配置时设置的名称

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
回到游戏，执行指令/mossfrp reload<br>
这个时候聊天栏就会提示远程地址了，让py用远程地址进入即可