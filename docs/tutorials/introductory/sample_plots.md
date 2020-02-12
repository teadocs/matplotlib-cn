---
sidebarDepth: 3
sidebar: auto
---

# Matplotlib的简单图表

在这里，您将找到大量示例图以及生成它们的代码

## 折线图

Here's how to create a line plot with text labels using
创建带有文本标签的折线图的方法 
[``plot()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot).

<center>
  <a href="/gallery/lines_bars_and_markers/simple_plot.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_simple_plot_0011.png">
  </a>
  <p>
    <b>简单图</b>
  </p>
</center>

## 一个图中有多个子图

通过subplot()函数可以创建多个轴（即子图） 
[``subplot()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.subplot.html#matplotlib.pyplot.subplot) function:

<center>
  <a href="/gallery/subplots_axes_and_figures/subplot.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_subplot_0011.png">
  </a>
  <p>
    <b>子图</b>
  </p>
</center>

## 图片

Matplotlib可以使用[``imshow()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.imshow.html#matplotlib.pyplot.imshow) 函数显示图像（假设为水平等距）.

<center>
  <a href="/gallery/images_contours_and_fields/image_demo.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_image_demo_0031.png">
  </a>
</center>

**[``imshow()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.imshow.html#matplotlib.pyplot.imshow) 函数用于显示CT扫描图像**

## 轮廓和伪色

[``pcolormesh()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.pcolormesh.html#matplotlib.pyplot.pcolormesh) 即使水平尺寸的间距不均匀，该函数也可以用彩色表示二维数组。
[``contour()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.contour.html#matplotlib.pyplot.contour) 函数是表示相同数据的另一种方式：

<center>
  <a href="/gallery/images_contours_and_fields/pcolormesh_levels.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_pcolormesh_levels_0011.png">
  </a>
</center>

**比较 [``pcolormesh()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.pcolormesh.html#matplotlib.pyplot.pcolormesh) 和 [``contour()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.contour.html#matplotlib.pyplot.contour) 绘制二维数据的示例**

## 直方图

[``hist()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.hist.html#matplotlib.pyplot.hist)函数自动生成直方图，并返回bin计数或概率：

<center>
  <a href="/gallery/statistics/histogram_features.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_histogram_features_0011.png">
  </a>
  <p>
    <b>直方图功能</b>
  </p>
</center>

## 路径

你可以使用
[``matplotlib.path``](https://matplotlib.org/api/path_api.html#module-matplotlib.path) 模块在Matplotlib中添加任意路径 ：

<center>
  <a href="/gallery/shapes_and_collections/path_patch.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_path_patch_0011.png">
  </a>
  <p>
    <b>路径补丁</b>
  </p>
</center>

## 三维绘图

mplot3d 工具包 (请参阅 [入门](https://matplotlib.org//toolkits/mplot3d.html#toolkit-mplot3d-tutorial) and
[3D 绘图](https://matplotlib.org/gallery/index.html#mplot3d-examples-index)) 支持简单的3d图形，包括表面图，线框图，散点图和条形图。

<center>
  <a href="/gallery/mplot3d/surface3d.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_surface3d_0011.png">
  </a>
  <p>
    <b>Surface3d</b>
  </p>
</center>

感谢John Porter，Jonathon Taylor，Reinier Heeres和Ben Root提供的mplot3d工具包。该工具包包含在所有标准Matplotlib安装中。

## 流图

[``streamplot()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.streamplot.html#matplotlib.pyplot.streamplot) 函数绘制矢量场的流线。除了简单地绘制流线之外，它还允许您将流线的颜色和/或线宽映射到单独的参数，例如矢量场的速度或局部强度

<center>
  <a href="/gallery/images_contours_and_fields/plot_streamplot.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_plot_streamplot_0011.png">
  </a>
  <p>
    <b>具有各种绘图选项的Streamplot.</b>
  </p>
</center>

此功能补充了 [``quiver()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.quiver.html#matplotlib.pyplot.quiver) 绘制矢量场的功能。感谢Tom Flannaghan和Tony Yu添加了streamplot函数

## 椭圆形

为了支持 [凤凰号](http://www.jpl.nasa.gov/news/phoenix/main.php)
火星飞行任务（使用Matplotlib来显示航天器的地面跟踪），迈克尔·德罗特布姆（Michael Droettboom）建立在查理·莫阿德（Charlie Moad）的工作基础上，提供了对椭圆弧非常精确的8样条曲线(请参阅参考 
[``Arc``](https://matplotlib.org/api/_as_gen/matplotlib.patches.Arc.html#matplotlib.patches.Arc)), w该椭圆对缩放级别不敏感。

<center>
  <a href="/gallery/shapes_and_collections/ellipse_demo.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_ellipse_demo_0011.png">
  </a>
  <p>
    <b>椭圆演示</b>
  </p>
</center>

## 条形图

[``bar()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.bar.html#matplotlib.pyplot.bar) 函数制作条形图，其中包括诸如误差线之类的自定义项：

<center>
  <a href="/gallery/statistics/barchart_demo.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_barchart_demo_0011.png">
  </a>
  <p>
    <b>条形图演示</b>
  </p>
</center>

您还可以创建堆叠的条形图
([bar_stacked.py](https://matplotlib.org/gallery/lines_bars_and_markers/bar_stacked.html)),
或水平条形图
([barh.py](https://matplotlib.org/gallery/lines_bars_and_markers/barh.html)).

## 饼状图

[``pie()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.pie.html#matplotlib.pyplot.pie) 函数允许您创建饼状图。可选功能包括自动标记面积百分比，从饼图中心爆炸一个或多个楔形，以及阴影效果。请仔细查看附带的代码，该代码仅用几行代码即可生成此图。

<center>
  <a href="/gallery/pie_and_polar_charts/pie_features.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_pie_features_0011.png">
  </a>
  <p>
    <b>饼状图</b>
  </p>
</center>

## Tables

[``table()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.table.html#matplotlib.pyplot.table) 函数将文本表添加到轴

<center>
  <a href="/gallery/misc/table_demo.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_table_demo_0011.png">
  </a>
  <p>
    <b>演示图</b>
  </p>
</center>

## 散点图

[``scatter()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.scatter.html#matplotlib.pyplot.scatter) 函数使用（可选）大小和颜色参数绘制散点图。本示例绘制了Google股票价格的变化图，标记大小反映了交易量，颜色随时间变化。在此，alpha属性用于制作半透明的圆形标记。

<center>
  <a href="/gallery/lines_bars_and_markers/scatter_demo2.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_scatter_demo2_0011.png">
  </a>
  <p>
    <b>散点图 演示2</b>
  </p>
</center>

## GUI小部件

Matplotlib具有与所使用的图形用户界面无关的基本GUI小部件，可让您编写跨GUI图形和小部件。请参阅 [``matplotlib.widgets``](https://matplotlib.org/api/widgets_api.html#module-matplotlib.widgets) 和
[widget examples](https://matplotlib.org/gallery/index.html).

<center>
  <a href="/gallery/widgets/slider_demo.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_slider_demo_0011.png">
  </a>
  <p>
    <b>滑块和单选按钮GUI.</b>
  </p>
</center>

## 填充曲线

[``fill()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.fill.html#matplotlib.pyplot.fill) 函数使您可以绘制填充的曲线和多边形：

<center>
  <a href="/gallery/lines_bars_and_markers/fill.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_fill_0011.png">
  </a>
  <p>
    <b>填充</b>
  </p>
</center>

感谢Andrew Straw添加了此功能。

## 日期处理

您可以使用主要和次要刻度线以及自定义刻度线格式器来绘制时间序列数据。

<center>
  <a href="/gallery/text_labels_and_annotations/date.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_date_0011.png">
  </a>
  <p>
    <b>日期</b>
  </p>
</center>

有关详细信息和用法，请参见[``matplotlib.ticker``](https://matplotlib.org/api/ticker_api.html#module-matplotlib.ticker) 和 [``matplotlib.dates``](https://matplotlib.org/api/dates_api.html#module-matplotlib.dates)

## 对数图

[``semilogx()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.semilogx.html#matplotlib.pyplot.semilogx),
[``semilogy()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.semilogy.html#matplotlib.pyplot.semilogy) 和
[``loglog()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.loglog.html#matplotlib.pyplot.loglog) 功能简化了对数图的创建

<center>
  <a href="/gallery/scales/log_demo.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_log_demo_0011.png">
  </a>
  <p>
    <b>演示</b>
  </p>
</center>

感谢Andrew Straw，Darren Dale和Gregory Lielens为日志扩展基础架构做出的贡献。

## 极坐标图

[``polar()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.polar.html#matplotlib.pyplot.polar) 函数生成极坐标图。

<center>
  <a href="/gallery/pie_and_polar_charts/polar_demo.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_polar_demo_0011.png">
  </a>
  <p>
    <b>演示</b>
  </p>
</center>

## Legends

[``legend()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.legend.html#matplotlib.pyplot.legend) 函数通过与MATLAB兼容的图例放置功能自动生成图形图例。

<center>
  <a href="/gallery/text_labels_and_annotations/legend.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_legend_0011.png">
  </a>
  <p>
    <b>Legend</b>
  </p>
</center>

感谢Charles Twardy在图例功能上的输入。

## 文本对象的TeX表示法

下面是Matplotlib的内部mathtext引擎现在支持的许多TeX表达式的示例。mathtext模块使用[FreeType](https://www.freetype.org/)
和DejaVu，BaKoMa computer modern或[STIX](http://www.stixfonts.org)
字体提供TeX样式的数学表达式。有关[``matplotlib.mathtext``](https://matplotlib.org/api/mathtext_api.html#module-matplotlib.mathtext) 其他详细信息，请参见模块

<center>
  <a href="/gallery/text_labels_and_annotations/mathtext_examples.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_mathtext_examples_0011.png">
  </a>
  <p>
    <b>Mathtext 示例</b>
  </p>
</center>

Matplotlib的mathtext基础结构是独立的实现，不需要在计算机上安装TeX或任何外部软件包。请参阅[Writing mathematical expressions](https://matplotlib.org//text/mathtext.html).

## 本机TeX渲染

尽管Matplotlib的内部数学渲染引擎非常强大，但有时您需要TeX。Matplotlib通过usetex选项支持字符串的外部TeX渲染。

<center>
  <a href="/gallery/text_labels_and_annotations/tex_demo.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_tex_demo_0011.png">
  </a>
  <p>
    <b>Tex 演示</b>
  </p>
</center>

## 脑电图

您可以将Matplotlib嵌入pygtk，wx，Tk或Qt应用程序中。这是一个称为[pbrain](https://github.com/nipy/pbrain)的EEG查看器的屏幕截图。

![eeg_small](https://matplotlib.org/_images/eeg_small.png)

下轴用于 [``specgram()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.specgram.html#matplotlib.pyplot.specgram)
绘制EEG通道之一的频谱图。

有关如何在不同的工具包中嵌入Matplotlib的示例，请参见：

- [嵌入GTK3](https://matplotlib.org/gallery/user_interfaces/embedding_in_gtk3_sgskip.html)
- [嵌入 wx #2](https://matplotlib.org/gallery/user_interfaces/embedding_in_wx2_sgskip.html)
- [Matplotlib 与 Glade 3](https://matplotlib.org/gallery/user_interfaces/mpl_with_glade3_sgskip.html)
- [嵌入 Qt](https://matplotlib.org/gallery/user_interfaces/embedding_in_qt_sgskip.html)
- [嵌入 Tk](https://matplotlib.org/gallery/user_interfaces/embedding_in_tk_sgskip.html)

## XKCD样式的草图

仅出于娱乐目的，Matplotlib支持以样式绘制xkcd。

<center>
  <a href="/gallery/showcase/xkcd.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_xkcd_0011.png">
  </a>
  <p>
    <b>xkcd</b>
  </p>
</center>

## 子图示例

许多图类型可以组合在一个图中，以创建强大而灵活的数据表示形式。

<center>
  <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_sample_plots_001.png">
</center>

``` python
import matplotlib.pyplot as plt
import numpy as np

np.random.seed(19680801)
data = np.random.randn(2, 100)

fig, axs = plt.subplots(2, 2, figsize=(5, 5))
axs[0, 0].hist(data[0])
axs[1, 0].scatter(data[0], data[1])
axs[0, 1].plot(data[0], data[1])
axs[1, 1].hist2d(data[0], data[1])

plt.show()
```

## 下载地址

- [下载Python源代码：sample_plots.py](https://matplotlib.org/_downloads/6b0f2d1b3dc8d0e75eaa96feb738e947/sample_plots.py)
- [下载Jupyter笔记本：sample_plots.ipynb](https://matplotlib.org/_downloads/dcfd63fc031d50e9c085f5dc4aa458b1/sample_plots.ipynb)
