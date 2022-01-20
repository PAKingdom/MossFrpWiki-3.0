# Windows 客户端 使用方法

## 前言
Windows 系统是不自带Java运行时环境的，所以我们需要自行去下载<br>
地址：[下载Java](http://java.com)<br>
Java8+都可以运行<br>
如果你的Java没有配置环境变量，那么请务必在运行时填绝对路径

## 下载Java
首先我们要打开Java官网
![image.png](https://crabpic.oss-cn-qingdao.aliyuncs.com/2022/01/19/image.png)
然后点击下载按钮，下载64位版本<br>
<strong>慢！</strong>不要点下载！点击下面的链接<br>
![imagea5ce32cb3a78e6f3.png](https://crabpic.oss-cn-qingdao.aliyuncs.com/2022/01/19/imagea5ce32cb3a78e6f3.png)<br>
进去之后，点![image051bac1d2b715cfa.png](https://crabpic.oss-cn-qingdao.aliyuncs.com/2022/01/19/image051bac1d2b715cfa.png)这个链接，然后跟着安装程序一路下一步即可。
## 下载客户端
::: tip 提示
现在有两种下载方式：<br>
一种是在群里下载，另一种是通过[螃蟹的镜像站](https://mossmirror.heycrab.xyz)下载<br>
为了方便，本教程使用镜像站进行下载
:::
进入镜像站之后，等待刷新列表<br>
刷新出来之后，点击“独立版下载（镜像站）”，下载客户端
![image31a8a5c35f7fa7d5.png](https://crabpic.oss-cn-qingdao.aliyuncs.com/2022/01/19/image31a8a5c35f7fa7d5.png)
::: danger 注意！
GitHub 由于受到不可抗力影响，国内访问速度可能变慢或受阻<br>
根据个人需要，请自备魔法或者使用镜像站
:::

## 启动客户端
我已经下好了，所以直接演示<br>
找到你存放客户端的目录（本例中存放于“下载”目录）<br>
![imagec0d63d35d6f3f051.png](https://crabpic.oss-cn-qingdao.aliyuncs.com/2022/01/19/imagec0d63d35d6f3f051.png)
然后右键空白区域，选择“在Windows终端中打开”
![image04d1d8b9a17b1b6d.png](https://crabpic.oss-cn-qingdao.aliyuncs.com/2022/01/19/image04d1d8b9a17b1b6d.png)
![image6c8c7d4e3055bd6a.png](https://crabpic.oss-cn-qingdao.aliyuncs.com/2022/01/19/image6c8c7d4e3055bd6a.png)
::: tip 提示
根据个人需要，可以创建cmd或者直接加参数运行
:::
打开终端之后，输入以下命令（我的终端美化过）
``` bash
java -jar MossFrpStandard.jar -MossFrp=nb
```
（我知道大家看不清，所以我调了下）
![image3edef43749c4c12e.png](https://crabpic.oss-cn-qingdao.aliyuncs.com/2022/01/19/image3edef43749c4c12e.png)
然后回车执行，正常情况应该如下图<br>
![image168428f783cbab27.png](https://crabpic.oss-cn-qingdao.aliyuncs.com/2022/01/19/image168428f783cbab27.png)
之后输入tunnel，查看可用命令，然后就跟着引导开启内网穿透吧~