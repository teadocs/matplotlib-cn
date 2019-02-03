# Matplotlib中的示例图

在这里，您将发现一系列带有生成它们的代码的示例图，在这里，您将发现一系列带有生成它们的代码的示例图。

## 线段图

以下是使用[plot()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot)创建带有文本标签的折线图的方法。

![简单的线段图示例](/static/images/tutorials/sphx_glr_simple_plot_0011.png)

简单的线段图示例

[点此进入查看源码](https://matplotlib.org/gallery/lines_bars_and_markers/simple_plot.html)

## 让一个图中有多个子图

使用 [subplot()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.subplot.html#matplotlib.pyplot.subplot) 函数创建多个轴（即子图）：

![简单子图示例](/static/images/tutorials/sphx_glr_subplot_0011.png)

简单子图示例

[点此进入查看源码](https://matplotlib.org/gallery/subplots_axes_and_figures/subplot.html)

## 显示图像

Matplotlib可以使用[imshow()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.imshow.html#matplotlib.pyplot.imshow) 函数显示图像（假设水平尺寸相等）。

![使用imshow()显示CT扫描的示例](/static/images/tutorials/sphx_glr_image_demo_0031.png)

使用[imshow()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.imshow.html#matplotlib.pyplot.imshow)显示CT扫描的示例

[点此进入查看源码](https://matplotlib.org/gallery/images_contours_and_fields/image_demo.html)

## 轮廓和伪彩色

即使水平尺寸不均匀，[pcolormesh()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.pcolormesh.html#matplotlib.pyplot.pcolormesh)函数也可以制作二维数组的彩色表示。 [contour()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.contour.html#matplotlib.pyplot.contour)函数是表示相同数据的另一种方式：

![比较pcolormesh()和contour()以绘制二维数据的示例](/static/images/tutorials/sphx_glr_pcolormesh_levels_0011.png)

比较[pcolormesh()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.pcolormesh.html#matplotlib.pyplot.pcolormesh)和[contour()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.contour.html#matplotlib.pyplot.contour)以绘制二维数据的示例。

[点此进入查看源码](https://matplotlib.org/gallery/images_contours_and_fields/image_demo.html)

## 直方图

[hist()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.hist.html#matplotlib.pyplot.hist) 函数自动生成直方图并返回bin计数或概率：

![直方图特性演示](/static/images/tutorials/sphx_glr_histogram_features_0011.png)

直方图特性演示

[点此进入查看源码](https://matplotlib.org/gallery/statistics/histogram_features.html)

## 路径

您可以使用[matplotlib.path](https://matplotlib.org/api/path_api.html#module-matplotlib.path) 模块在Matplotlib中添加任意路径：

![路径补丁](/static/images/tutorials/sphx_glr_path_patch_0011.png)

路径补丁

[点此进入查看源码](https://matplotlib.org/gallery/shapes_and_collections/path_patch.html)

## 三维绘图

mplot3d工具包（参见[入门](https://matplotlib.org/tutorials/toolkits/mplot3d.html#toolkit-mplot3d-tutorial)和[3D绘图](https://matplotlib.org/gallery/index.html#mplot3d-examples-index)）支持简单的三维图形，包括曲面，线框，散点图和条形图。

![平面3d图](/static/images/tutorials/sphx_glr_surface3d_0011.png)

平面3d图

感谢John Porter，Jonathon Taylor，Reinier Heeres和Ben Root的mplot3d工具包。 此工具包包含在所有标准Matplotlib安装中。

[点此进入查看源码](https://matplotlib.org/gallery/mplot3d/surface3d.html)

## 流图

[streamplot()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.streamplot.html#matplotlib.pyplot.streamplot)函数绘制矢量场的流线。除了简单地绘制流线图之外，它还允许您将流线的颜色和/或线宽映射到单独的参数，例如矢量场的速度或局部强度。

![Streamplot有各种绘图选项](/static/images/tutorials/sphx_glr_plot_streamplot_0011.png)

Streamplot有各种绘图选项

此功能补充了用于绘制矢量场的[quiver()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.quiver.html#matplotlib.pyplot.quiver) 函数。 感谢Tom Flannaghan和Tony Yu添加了streamplot功能。

[点此进入查看源码](https://matplotlib.org/gallery/images_contours_and_fields/plot_streamplot.html)

## 椭圆

为了支持[菲尼克斯](http://www.jpl.nasa.gov/news/phoenix/main.php)火星任务（使用Matplotlib显示航天器的地面跟踪），Michael Droettboom建立在Charlie Moad的工作基础上，为椭圆弧（参见[Arc](https://matplotlib.org/api/_as_gen/matplotlib.patches.Arc.html#matplotlib.patches.Arc)）提供极其精确的8样条近似，这对缩放不敏感 水平。

![椭圆演示](/static/images/tutorials/sphx_glr_ellipse_demo_0011.png)

椭圆演示

[点此进入查看源码](https://matplotlib.org/gallery/shapes_and_collections/ellipse_demo.html)

## 条形图

Use the [bar()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.bar.html#matplotlib.pyplot.bar) function to make bar charts, which includes customizations such as error bars:

![条形图演示](/static/images/tutorials/sphx_glr_barchart_demo_0011.png)

条形图演示

您还可以创建堆叠条形（bar_stacked.py）或水平条形图（barh.py）。

[点此进入查看源码](https://matplotlib.org/gallery/statistics/barchart_demo.html)

## 饼状图

[pie()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.pie.html#matplotlib.pyplot.pie) 函数允许您创建饼图。可选功能包括自动标记区域的百分比，从饼图中心爆炸一个或多个楔形，以及阴影效果。 仔细查看附加的代码，只需几行代码即可生成此图。

![饼状图特性](/static/images/tutorials/sphx_glr_pie_features_0011.png)

饼状图特性

[点此进入查看源码](https://matplotlib.org/gallery/pie_and_polar_charts/pie_features.html)

## 表格

[table()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.table.html#matplotlib.pyplot.table) 函数将一个文本表添加到轴。

![表格演示](/static/images/tutorials/sphx_glr_table_demo_0011.png)

表格演示

[点此进入查看源码](https://matplotlib.org/gallery/misc/table_demo.html)

## 散点图

[scatter()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.scatter.html#matplotlib.pyplot.scatter)函数使用（可选）大小和颜色参数创建散点图。此示例绘制了Google股票价格的变化，标记尺寸反映了交易量和颜色随时间变化。这里，alpha属性用于制作半透明圆圈标记。

![散点图演示](/static/images/tutorials/sphx_glr_scatter_demo2_0011.png)

散点图

[点此进入查看源码](https://matplotlib.org/gallery/lines_bars_and_markers/scatter_demo2.html)

## GUI小部件

Matplotlib具有独立于您正在使用的图形用户界面的基本GUI小部件，允许您编写跨GUI图形和小部件。 请参阅[matplotlib.widgets](https://matplotlib.org/api/widgets_api.html#module-matplotlib.widgets)和[小部件示例](https://matplotlib.org/gallery/index.html).。

![滑块和单选按钮GUI](/static/images/tutorials/sphx_glr_slider_demo_0011.png)

滑块和单选按钮GUI。

[点此进入查看源码](https://matplotlib.org/gallery/widgets/slider_demo.html)

## 填充曲线

[fill()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.fill.html#matplotlib.pyplot.fill) 函数可以绘制填充的曲线和多边形：

![填充曲线](/static/images/tutorials/sphx_glr_fill_0011.png)

填充曲线

感谢Andrew Straw添加此功能。

[点此进入查看源码](https://matplotlib.org/gallery/lines_bars_and_markers/fill.html)

## 日期处理

您可以绘制带有主要和次要刻度的时间序列数据以及两者的自定义刻度格式化程序。

![日期处理演示](/static/images/tutorials/sphx_glr_date_0011.png)

日期处理演示

有关详细信息和用法，请参阅[matplotlib.ticker](https://matplotlib.org/api/ticker_api.html#module-matplotlib.ticker)和[matplotlib.dates](https://matplotlib.org/api/dates_api.html#module-matplotlib.dates)。

[点此进入查看源码](https://matplotlib.org/gallery/text_labels_and_annotations/date.html)

## log函数图

[semilogx()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.semilogx.html#matplotlib.pyplot.semilogx)，[semilogy()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.semilogy.html#matplotlib.pyplot.semilogy)和[loglog()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.loglog.html#matplotlib.pyplot.loglog) 函数简化了对数图的创建。

![log函数图演示](/static/images/tutorials/sphx_glr_log_demo_0011.png)

log函数图演示

感谢Andrew Straw，Darren Dale和Gregory Lielens提供的日志扩展基础架构。

[点此进入查看源码](https://matplotlib.org/gallery/scales/log_demo.html)

## 极坐标图

[polar()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.polar.html#matplotlib.pyplot.polar) 函数生成极坐标图。

![极坐标图演示](/static/images/tutorials/sphx_glr_polar_demo_0011.png)

极坐标图演示

[点此进入查看源码](https://matplotlib.org/gallery/pie_and_polar_charts/polar_demo.html)

## 图例

[legend()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.legend.html#matplotlib.pyplot.legend) 函数自动生成图形图例，具有MATLAB兼容的图例放置功能。

![图例](/static/images/tutorials/sphx_glr_legend_0011.png)

图例

感谢Charles Twardy对图例功能的输入。

[点此进入查看源码]()

## 文本对象的TeX符号

下面是Matplotlib内部mathtext引擎现在支持的许多TeX表达式的示例。mathtext模块使用[FreeType](https://www.freetype.org/)和DejaVu，BaKoMa计算机现代或[STIX](http://www.stixfonts.org/)字体提供TeX样式的数学表达式。有关其他详细信息，请参阅[matplotlib.mathtext](https://matplotlib.org/api/mathtext_api.html#module-matplotlib.mathtext)模块。

![Mathtext示例](/static/images/tutorials/sphx_glr_mathtext_examples_0011.png)

Mathtext示例

Matplotlib的mathtext基础结构是一个独立的实现，不需要在您的计算机上安装TeX或任何外部软件包。请参阅[编写数学表达式的教程](https://matplotlib.org/tutorials/text/mathtext.html)。

[点此进入查看源码](https://matplotlib.org/gallery/text_labels_and_annotations/mathtext_examples.html)

## 原生纹理渲染

虽然Matplotlib的内部数学渲染引擎非常强大，但有时候你需要TeX。Matplotlib支持使用usetex选项对字符串进行外部TeX渲染。

![tex演示](/static/images/tutorials/sphx_glr_tex_demo_0011.png)

Tex 演示

[点此进入查看源码](https://matplotlib.org/gallery/text_labels_and_annotations/tex_demo.html)

## EEG GUI

您可以将Matplotlib嵌入到pygtk，wx，Tk或Qt应用程序中。 这是一个名为[pbrain](https://github.com/nipy/pbrain)的EEG查看器的屏幕截图。

![小型egg演示](/static/images/tutorials/eeg_small.png)

低轴使用[specgram()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.specgram.html#matplotlib.pyplot.specgram)绘制其中一个EEG通道的频谱图。

有关如何在不同工具包中嵌入Matplotlib的示例，请参阅：

- [Embedding In GTK3](https://matplotlib.org/gallery/user_interfaces/embedding_in_gtk3_sgskip.html)
- [Embedding In Wx2](https://matplotlib.org/gallery/user_interfaces/embedding_in_wx2_sgskip.html)
- [Matplotlib With Glade 3](https://matplotlib.org/gallery/user_interfaces/mpl_with_glade3_sgskip.html)
- [Embedding in Qt](https://matplotlib.org/gallery/user_interfaces/embedding_in_qt_sgskip.html)
- [Embedding In Tk](https://matplotlib.org/gallery/user_interfaces/embedding_in_tk_sgskip.html)

## XKCD风格的草图

只是为了好玩，Matplotlib支持xkcd风格的绘图。

![小型egg演示](/static/images/tutorials/sphx_glr_xkcd_0011.png)

Xkcd

[点此进入查看源码](https://matplotlib.org/gallery/showcase/xkcd.html)

## 子图示例

许多绘图类型可以组合在一个图中，以创建强大而灵活的数据表示。

```python
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

![子图示例](/static/images/tutorials/sphx_glr_sample_plots_001.png)

## 下载本文的所有示例

- [下载python源码: sample_plots.py](https://matplotlib.org/_downloads/e61eef3e6df85f006a8e3f9e0d7e7fbe/sample_plots.py)
- [下载Jupyter notebook: sample_plots.ipynb](https://matplotlib.org/_downloads/8f24fe0f781655f8a68eb861f7cb3eac/sample_plots.ipynb)
