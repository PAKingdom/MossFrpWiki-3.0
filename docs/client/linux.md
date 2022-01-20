# Linux 客户端 使用方法
## 前言
如果你在用服务商的服务器，无需穿透，到面板获取IP就可以了（一般是3条线路）<br>
Linux 安装 Java 较为繁琐，所以请跟紧教程！
## 安装Java
这次不需要开浏览器，直接打开终端，输入以下命令（我是Ubuntu 20.04）
```bash
sudo apt install java-1.8.0-openjdk.x86_64
```
如果出现验证密码的提示，输入密码，然后一路y
## 下载客户端
请输入以下命令：
```bash
wget https://ghapi.crabapi.cn/https://github.com/MossFrp/MossFrpClient-Java/releases/download/V0.4.4.3.1317/MossFrpStandard.jar
```
等待下载完成即可。
![image4b030094b07f0a4a.png](https://crabpic.oss-cn-qingdao.aliyuncs.com/2022/01/19/image4b030094b07f0a4a.png)

## 开启客户端
不同于Windows端，这里启动不需要加参数
```
java -jar MossFrpStandard.jar
```
![image376a0ad89f4677dc.png](https://crabpic.oss-cn-qingdao.aliyuncs.com/2022/01/19/image376a0ad89f4677dc.png)
之后输入tunnel，查看可用命令，然后就跟着引导开启内网穿透吧~