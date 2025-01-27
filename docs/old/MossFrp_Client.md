# MossFrp_Client.exe
 1. 介绍MossFrp_Client与MossFrp_Client_Fastv区别
 2. 亲妈使用教程与详细讲解(挖大坑)
 3. 使用视频介绍(有必要？)
 4. 可能新版会有些许改动，请选择性食用
 - 两个版本的区别 ##
![1.png](/a9gcr-reh83.png)
::: tip
 - 两个版本本质上没有区别，一个会保留上一次的文件，一个不会
 - 讲人话就是一个用完就扔，一个你可以留着继续用
 - 唯一缺点，仅支持Windows
 - 本文讲述的是MossFrp_Client！其实教程都通用的！
:::
## 在下载完成后启动会弹出以下内容 ##

```
MossFrp Windows Bat Client [By MossCG]
Version 2.1.1.1 Beta
B站官方Channel @墨守MossCG 记得三连关注！
QQ交流群 1072507973 欢迎加入！
购买/白嫖穿透码请加群~
Tips：此版本为标准版
配置完成之后可使用客户端文件夹下
点击启动.bat 再次启动以长期使用
==========配置==========
请输入穿透码
PS：部分版本windows的CMD无法ctrl+v粘贴
可以尝试右键窗口内黑色区域粘贴
==========配置==========
```
 - 关于如何获取穿透码与注册请查看，本文不再赘述
 - Ctrl+V 或 右键 直接粘贴 回车
```
==========读取==========
正在解析穿透码中......
==========生成中==========
服务器号：xxxxxxx
域名地址：xxx.mossfrp.cn
服务端口：xxxxxx
开放端口：xxxxxx-xxxxxx
链接密钥：xxxxxxxxxxxxxxxxxxxxx
生成完毕！
```

关于节点设置更多详细信息 [Github](https://github.com/fatedier/frp/blob/dev/README.md#example-usage)
## 接下来开始设置节点名称 ##
```
==========Frpc配置==========
设置映射配置[输入Exit取消设置]
Frpc设置内容：
映射名称：
映射类型：-
远程端口：
本地地址：
本地端口：
==========设置名称==========
请输入映射名称：
PS：这个基本写啥都无所谓
请不要输入中文/特殊符号/空格
避免frpc无法识别导致无法启动！
==========设置名称==========
```
建议乱敲些东西进去就行了(
但是一定不要空着
笔者这里填写 abcde
关于节点设置更多详细信息 [Github](https://github.com/fatedier/frp/blob/dev/README.md#example-usage)
## 映射类型 ##
```
==========Frpc配置==========
设置映射配置[输入Exit取消设置]
Frpc设置内容：
映射名称：abcde
映射类型：-
远程端口：
本地地址：
本地端口：
==========设置类型==========
请输入映射类型前数字：
PS：如MC JAVA版为tcp映射
MC 基岩版为udp映射
1.tcp
2.udp
输入Back可以返回上一项设置
==========设置类型==========
```
顾名思义敲1或者2不再赘述
笔者这里填写 1
关于节点设置更多详细信息 [Github](https://github.com/fatedier/frp/blob/dev/README.md#example-usage)
## 远程端口 ##
```
==========Frpc配置==========
设置映射配置[输入Exit取消设置]
Frpc设置内容：
映射名称：abcde
映射类型：1-tcp
远程端口：
本地地址：
本地端口：
==========设置远程端口==========
请输入远程端口：
PS：可用端口范围：10001-10009
请输入上方端口范围内任意端口
输入Back可以返回上一项设置
==========设置远程端口==========
```
 - 一个穿透码对应会有十个端口，有一个作为服务端口，我们还有九个端口可选
 - 请留意你的可用端口范围！不要盲目照抄！
 - 笔者这里填写 10001

## 设置本地地址 ##
```
==========Frpc配置==========
设置映射配置[输入Exit取消设置]
Frpc设置内容：
映射名称：abcde
映射类型：1-tcp
远程端口：10001
本地地址：
本地端口：
==========设置本地地址==========
请输入要映射的地址：
PS：如本地地址为127.0.0.1
请不要在此处输入端口！！！
输入Back可以返回上一项设置
==========设置本地地址==========
```
 - 无特殊情况一律填写 127.0.0.1
 - 无特殊情况一律填写 127.0.0.1
 - 无特殊情况一律填写 127.0.0.1

## 设置本地端口 ##
```
==========Frpc配置==========
设置映射配置[输入Exit取消设置]
Frpc设置内容：
映射名称：abcde
映射类型：1-tcp
远程端口：10001
本地地址：127.0.0.1
本地端口：
==========设置本地端口==========
请输入要映射的本地端口：
PS：如MC服务器默认端口25565
输入Back可以返回上一项设置
==========设置本地端口==========
```
如MC服务器默认端口25565
笔者这里填写的是25565
 - 拓展知识[常见TCP/UDP端口](https://zh.wikipedia.org/wiki/TCP/UDP%E7%AB%AF%E5%8F%A3%E5%88%97%E8%A1%A8)
## 重要！确认你的节点信息 ##
```
==========链接配置==========
Frpc设置内容：
映射名称：abcde
映射类型：1-tcp
远程端口：10001
本地地址：127.0.0.1
本地端口：25565
==========确认==========
Frpc端口配置写入完成
请确认配置是否有误
如无误输入Y将生成文件
有误输入N重新输入
输入Back可以返回上一项设置
==========确认==========
```
确认无误输入Y
有错误请输入N
[warn]信息不可为空，不可有空格，IP地址与端口完整[/warn]
## 启动/二次启动 ##
请在目录下找到
```
点击启动.bat
```
双击启动！不要再打开MossFrp_Client V2.1.1.1.exe了！！！！
