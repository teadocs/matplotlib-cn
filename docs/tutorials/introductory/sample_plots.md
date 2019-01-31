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

The [streamplot()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.streamplot.html#matplotlib.pyplot.streamplot) function plots the streamlines of a vector field. In addition to simply plotting the streamlines, it allows you to map the colors and/or line widths of streamlines to a separate parameter, such as the speed or local intensity of the vector field.

![Streamplot有各种绘图选项](/static/images/tutorials/sphx_glr_plot_streamplot_0011.png)

Streamplot有各种绘图选项

This feature complements the [quiver()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.quiver.html#matplotlib.pyplot.quiver) function for plotting vector fields. Thanks to Tom Flannaghan and Tony Yu for adding the streamplot function.

[点此进入查看源码](https://matplotlib.org/gallery/images_contours_and_fields/plot_streamplot.html)

## 椭圆

In support of the [Phoenix](http://www.jpl.nasa.gov/news/phoenix/main.php) mission to Mars (which used Matplotlib to display ground tracking of spacecraft), Michael Droettboom built on work by Charlie Moad to provide an extremely accurate 8-spline approximation to elliptical arcs (see [Arc](https://matplotlib.org/api/_as_gen/matplotlib.patches.Arc.html#matplotlib.patches.Arc)), which are insensitive to zoom level.

![椭圆演示](/static/images/tutorials/sphx_glr_ellipse_demo_0011.png)

椭圆演示

[点此进入查看源码](https://matplotlib.org/gallery/shapes_and_collections/ellipse_demo.html)

## 条形图

Use the [bar()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.bar.html#matplotlib.pyplot.bar) function to make bar charts, which includes customizations such as error bars:

![条形图演示](/static/images/tutorials/sphx_glr_barchart_demo_0011.png)

条形图演示

You can also create stacked bars (bar_stacked.py), or horizontal bar charts (barh.py).

[点此进入查看源码](https://matplotlib.org/gallery/statistics/barchart_demo.html)

## 饼状图

The [pie()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.pie.html#matplotlib.pyplot.pie) function allows you to create pie charts. Optional features include auto-labeling the percentage of area, exploding one or more wedges from the center of the pie, and a shadow effect. Take a close look at the attached code, which generates this figure in just a few lines of code.

![饼状图特性](/static/images/tutorials/sphx_glr_pie_features_0011.png)

饼状图特性

[点此进入查看源码](https://matplotlib.org/gallery/pie_and_polar_charts/pie_features.html)

## 表格

The [table()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.table.html#matplotlib.pyplot.table) function adds a text table to an axes.

![表格演示](/static/images/tutorials/sphx_glr_table_demo_0011.png)

表格演示

[点此进入查看源码](https://matplotlib.org/gallery/misc/table_demo.html)

## 散点图

The [scatter()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.scatter.html#matplotlib.pyplot.scatter) function makes a scatter plot with (optional) size and color arguments. This example plots changes in Google's stock price, with marker sizes reflecting the trading volume and colors varying with time. Here, the alpha attribute is used to make semitransparent circle markers.

![散点图演示](/static/images/tutorials/sphx_glr_scatter_demo2_0011.png)

散点图

[点此进入查看源码](https://matplotlib.org/gallery/lines_bars_and_markers/scatter_demo2.html)

## GUI小部件

Matplotlib has basic GUI widgets that are independent of the graphical user interface you are using, allowing you to write cross GUI figures and widgets. See [matplotlib.widgets](https://matplotlib.org/api/widgets_api.html#module-matplotlib.widgets) and the [widget examples](https://matplotlib.org/gallery/index.html).

![滑块和单选按钮GUI](/static/images/tutorials/sphx_glr_slider_demo_0011.png)

滑块和单选按钮GUI。

[点此进入查看源码](https://matplotlib.org/gallery/widgets/slider_demo.html)

## 填充曲线

The [fill()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.fill.html#matplotlib.pyplot.fill) function lets you plot filled curves and polygons:

![填充曲线](/static/images/tutorials/sphx_glr_fill_0011.png)

填充曲线

Thanks to Andrew Straw for adding this function.

[点此进入查看源码](https://matplotlib.org/gallery/lines_bars_and_markers/fill.html)

## 日期处理

You can plot timeseries data with major and minor ticks and custom tick formatters for both.

![日期处理演示](/static/images/tutorials/sphx_glr_date_0011.png)

日期处理演示

See [matplotlib.ticker](https://matplotlib.org/api/ticker_api.html#module-matplotlib.ticker) and [matplotlib.dates](https://matplotlib.org/api/dates_api.html#module-matplotlib.dates) for details and usage.

[点此进入查看源码](https://matplotlib.org/gallery/text_labels_and_annotations/date.html)

## log函数图

The [semilogx()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.semilogx.html#matplotlib.pyplot.semilogx), [semilogy()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.semilogy.html#matplotlib.pyplot.semilogy) and [loglog()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.loglog.html#matplotlib.pyplot.loglog) functions simplify the creation of logarithmic plots.

![log函数图演示](/static/images/tutorials/sphx_glr_log_demo_0011.png)

log函数图演示

Thanks to Andrew Straw, Darren Dale and Gregory Lielens for contributions log-scaling infrastructure.

[点此进入查看源码](https://matplotlib.org/gallery/scales/log_demo.html)

## 极坐标图

The [polar()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.polar.html#matplotlib.pyplot.polar) function generates polar plots.

![极坐标图演示](/static/images/tutorials/sphx_glr_polar_demo_0011.png)

极坐标图演示

[点此进入查看源码](https://matplotlib.org/gallery/pie_and_polar_charts/polar_demo.html)

## 图例

The [legend()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.legend.html#matplotlib.pyplot.legend) function automatically generates figure legends, with MATLAB-compatible legend-placement functions.

![图例](/static/images/tutorials/sphx_glr_legend_0011.png)

图例

Thanks to Charles Twardy for input on the legend function.

[点此进入查看源码]()

## 文本对象的TeX符号

Below is a sampling of the many TeX expressions now supported by Matplotlib's internal mathtext engine. The mathtext module provides TeX style mathematical expressions using [FreeType](https://www.freetype.org/) and the DejaVu, BaKoMa computer modern, or [STIX](http://www.stixfonts.org/) fonts. See the [matplotlib.mathtext](https://matplotlib.org/api/mathtext_api.html#module-matplotlib.mathtext) module for additional details.

![Mathtext示例](/static/images/tutorials/sphx_glr_mathtext_examples_0011.png)

Mathtext示例

Matplotlib's mathtext infrastructure is an independent implementation and does not require TeX or any external packages installed on your computer. See the tutorial at [Writing mathematical expressions](https://matplotlib.org/tutorials/text/mathtext.html).

[点此进入查看源码](https://matplotlib.org/gallery/text_labels_and_annotations/mathtext_examples.html)

## 原生纹理渲染

Although Matplotlib's internal math rendering engine is quite powerful, sometimes you need TeX. Matplotlib supports external TeX rendering of strings with the usetex option.

![tex演示](/static/images/tutorials/sphx_glr_tex_demo_0011.png)

Tex 演示

[点此进入查看源码](https://matplotlib.org/gallery/text_labels_and_annotations/tex_demo.html)

## EEG GUI

You can embed Matplotlib into pygtk, wx, Tk, or Qt applications. Here is a screenshot of an EEG viewer called [pbrain](https://github.com/nipy/pbrain).

![小型egg演示](/static/images/tutorials/eeg_small.png)

he lower axes uses [specgram()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.specgram.html#matplotlib.pyplot.specgram) to plot the spectrogram of one of the EEG channels.

For examples of how to embed Matplotlib in different toolkits, see:

- [Embedding In GTK3](https://matplotlib.org/gallery/user_interfaces/embedding_in_gtk3_sgskip.html)
- [Embedding In Wx2](https://matplotlib.org/gallery/user_interfaces/embedding_in_wx2_sgskip.html)
- [Matplotlib With Glade 3](https://matplotlib.org/gallery/user_interfaces/mpl_with_glade3_sgskip.html)
- [Embedding in Qt](https://matplotlib.org/gallery/user_interfaces/embedding_in_qt_sgskip.html)
- [Embedding In Tk](https://matplotlib.org/gallery/user_interfaces/embedding_in_tk_sgskip.html)

## XKCD风格的草图

Just for fun, Matplotlib supports plotting in the style of xkcd.

![小型egg演示](/static/images/tutorials/sphx_glr_xkcd_0011.png)

Xkcd

[点此进入查看源码](https://matplotlib.org/gallery/showcase/xkcd.html)

## 子图示例

Many plot types can be combined in one figure to create powerful and flexible representations of data.

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
