---
sidebarDepth: 3
sidebar: auto
---

# Matplotlib 简介

Matplotlib是一个Python 2D绘图库，它以多种硬拷贝格式和跨平台的交互式环境生成出版物质量的图形。
Matplotlib可用于Python脚本，Python和[IPython](http://ipython.org) 
Shell、[Jupyter](http://jupyter.org)笔记本，Web应用程序服务器和四个图形用户界面工具包。

<a href="https://matplotlib.org/tutorials/introductory/sample_plots.html">
  <img align="middle" style="width: 160; height: 112px" src="https://matplotlib.org/_images/sphx_glr_membrane_thumb.png" border="0" alt="screenshots">
  <img align="middle" style="width: 160; height: 112px" src="https://matplotlib.org/_images/sphx_glr_histogram_thumb.png" border="0" alt="screenshots">
  <img align="middle" style="width: 160; height: 112px" src="https://matplotlib.org/_images/sphx_glr_contour_thumb.png" border="0" alt="screenshots">  
  <img align="middle" style="width: 160; height: 112px" src="https://matplotlib.org/_images/sphx_glr_3D_thumb.png" border="0" alt="screenshots">
</a>

Matplotlib 尝试使容易的事情变得更容易，使困难的事情变得可能。
您只需几行代码就可以生成图表、直方图、功率谱、条形图、误差图、散点图等。更多的示例，请参见
[示例图](https://matplotlib.org/tutorials/introductory/sample_plots.html)和[缩略图库](https://matplotlib.org/gallery/index.html)。

为了简单绘图，该 ``pyplot`` 模块提供了类似于MATLAB的界面，尤其是与IPython结合使用时。
对于高级用户，您可以通过面向对象的界面或MATLAB用户熟悉的一组功能来完全控制线型，字体属性，轴属性等。

# 安装

访问[Matplotlib安装说明](https://matplotlib.org/users/installing.html)。

# 文档

这是Matplotlib版本3.1.1的文档。

首先，请阅读[《用户指南》](users/index.html)。

其他版本可用：

- [3.1.1](https://matplotlib.org/3.1.1/index.html) 稳定版本。
- [2.2.4 LTS](https://matplotlib.org/2.2.4/index.html) LTS版本。
- [3.2.x](https://matplotlib.org/devdocs/index.html) 最新的git master（不稳定）。
- [3.0.3](https://matplotlib.org/3.0.3/index.html) 较旧的稳定版本。

试图学习如何做某种图例？请查看[示例库](/gallery)或[绘图命令列表](https://matplotlib.org/api/pyplot_summary.html)。

## 其他学习资源

有许多可用的[外部学习资源](https://matplotlib.org/resources/index.html)，包括印刷资料，视频和教程。

## 加入我们的社区！

Matplotlib是一个欢迎且包容的项目，我们在做的所有事情都遵循[Python软件基金会的行为准则](http://www.python.org/psf/codeofconduct/)。

- 通过 [discourse.matplotlib.org](https://discourse.matplotlib.org) 加入我们的社区，以获取帮助，讨论贡献与发展并分享您的工作。
- 如果您有疑问，请确保检查[FAQ](https://matplotlib.org/faq/index.html)，
 [API](https://matplotlib.org/api/index.html)文档以及[搜索](https://matplotlib.org/search.html)工具搜索所有文档，包括对350多个完整示例的全文搜索，这些示例几乎涵盖了Matplotlib的每个方面。
- 如果可以的话，快速加入[gitter频道](https://gitter.im/matplotlib/matplotlib)与社区聊天。
- 如果您喜欢电子邮件，则有[matplotlib-users](https://mail.python.org/mailman/listinfo/matplotlib-users)，[matplotlib-devel](https://mail.python.org/mailman/listinfo/matplotlib-devel)和[matplotlib-announce](https://mail.python.org/mailman/listinfo/matplotlib-announce)邮件列表。
- 在[stackoverflow](http://stackoverflow.com/questions/tagged/matplotlib)上检查Matplotlib标记。
- 在[Twitter上](https://twitter.com/matplotlib)给我们[发消息](https://twitter.com/matplotlib)！或在[Instagram上](https://www.instagram.com/matplotart/)查看有趣的地块！

您可以在[问题跟踪器](https://github.com/matplotlib/matplotlib/issues)上提交错误，补丁和功能请求，但对[Discourse](https://discourse.matplotlib.org)进行ping操作也是一个好主意。

要了解Matplotlib中的最新信息，请查看[新内容](https://matplotlib.org/users/whats_new.html)页面或浏览[源代码](https://github.com/matplotlib/matplotlib)。任何可能需要更改现有代码的内容都会记录在[API更改](https://matplotlib.org/api/api_changes.html)文件中。

### 工具包

Matplotlib附带了几个附加[工具包](https://matplotlib.org/api/toolkits/index.html)，
包括3d绘图工具 ``mplot3d``，
轴辅助工具 ``axes_grid1`` 和轴辅助工具 ``axisartist``。

### 第三方包

大量的[第三方软件包](https://matplotlib.org/thirdpartypackages/index.html) 
扩展并建立在Matplotlib功能的基础上，包括几个更高级别的绘图界面（[seaborn](https://seaborn.github.io/)，
[holoviews](http://holoviews.org)，
[ggplot](http://ggplot.yhathq.com)，...）以及两个投影和制图工具包（[basemap](http://matplotlib.org/basemap)和[cartopy](http://scitools.org.uk/cartopy/docs/latest)）。

### 引用Matplotlib 

Matplotlib是John Hunter（1968-2012）的创造力，他与许多贡献者一道，花费了无数的时间和精力来制作一款软件，该软件被全世界数千名科学家使用。

如果Matplotlib对导致科学出版物的项目做出了贡献，请引用该项目来感谢这项工作。提供[现成的引文条目](https://matplotlib.org/citing.html)。

### 开源

![NumFOCUS](https://matplotlib.org/_static/numfocus_badge.png)

Matplotlib 是 NumFOCUS 的赞助项目，NumFOCUS是美国的 501(c)(3) 非营利慈善机构。
NumFOCUS为Matplotlib提供财政，法律和行政支持，以帮助确保项目的健康和可持续性。
有关更多信息，请访问[numfocus.org](https://matplotlib.org/nf)。

对 Matplotlib 的捐赠由 NumFOCUS 管理。对于美国的捐赠者，您的礼物可以在法律规定的范围内免税。与任何捐赠一样，您应咨询您的税务顾问以了解您的特殊税收情况。

请考虑通过 Numfocus 组织[向Matplotlib项目](https://numfocus.salsalabs.org/donate-to-matplotlib/index.html)捐款或向[约翰·亨特技术奖学金](https://www.numfocus.org/programs/john-hunter-technology-fellowship/)[捐款](https://numfocus.salsalabs.org/donate-to-matplotlib/index.html)。

该[Matplotlib许可证](users/license.html)是基于[Python软件基金会（PSF）的许可](http://www.python.org/psf/license)。

这里有一个活跃了众多开发者的社区，他们做了很多重大的贡献[贡献](users/credits.html)。

Matplotlib托管在[Github上](https://github.com/matplotlib/matplotlib)。[问题](https://github.com/matplotlib/matplotlib/issues) 
和[拉取请求](https://github.com/matplotlib/matplotlib/pulls)在Github上被跟踪了。