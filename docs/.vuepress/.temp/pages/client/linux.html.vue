<template><h1 id="linux-客户端-使用方法" tabindex="-1"><a class="header-anchor" href="#linux-客户端-使用方法" aria-hidden="true">#</a> Linux 客户端 使用方法</h1>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>如果你在用服务商的服务器，无需穿透，到面板获取IP就可以了（一般是3条线路）<br>
Linux 安装 Java 较为繁琐，所以请跟紧教程！</p>
<h2 id="安装java" tabindex="-1"><a class="header-anchor" href="#安装java" aria-hidden="true">#</a> 安装Java</h2>
<p>这次不需要开浏览器，直接打开终端，输入以下命令（我是Ubuntu 20.04）</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> java-1.8.0-openjdk.x86_64
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果出现验证密码的提示，输入密码，然后一路y</p>
<h2 id="下载客户端" tabindex="-1"><a class="header-anchor" href="#下载客户端" aria-hidden="true">#</a> 下载客户端</h2>
<p>请输入以下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">wget</span> https://ghapi.crabapi.cn/https://github.com/MossFrp/MossFrpClient-Java/releases/download/V0.4.4.3.1317/MossFrpStandard.jar
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>等待下载完成即可。
<img src="https://crabpic.oss-cn-qingdao.aliyuncs.com/2022/01/19/image4b030094b07f0a4a.png" alt="image4b030094b07f0a4a.png"></p>
<h2 id="开启客户端" tabindex="-1"><a class="header-anchor" href="#开启客户端" aria-hidden="true">#</a> 开启客户端</h2>
<p>不同于Windows端，这里启动不需要加参数</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>java -jar MossFrpStandard.jar
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://crabpic.oss-cn-qingdao.aliyuncs.com/2022/01/19/image376a0ad89f4677dc.png" alt="image376a0ad89f4677dc.png">
之后输入tunnel，查看可用命令，然后就跟着引导开启内网穿透吧~</p>
</template>
