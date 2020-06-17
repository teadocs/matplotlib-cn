---
sidebarDepth: 3
sidebar: auto
---
# 使用Matplotlib绘制简单图形
在此会提供很多图例以及绘制他们的代码.

## 折线图（line plot）

创建带有文本标签的折线图
[``plot()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot).

<center>
  <a href="/gallery/lines_bars_and_markers/simple_plot.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_simple_plot_0011.png">
  </a>
  <p>
    <b>简单绘图</b>
  </p>
</center>

## 一个图（figure）中含多个子图（subplots）

多子图使用
[``subplot()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.subplot.html#matplotlib.pyplot.subplot) 函数创建:

<center>
  <a href="/gallery/subplots_axes_and_figures/subplot.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_subplot_0011.png">
  </a>
  <p>
    <b>子图</b>
  </p>
</center>

## 图像显示（image）

可以使用 [``imshow()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.imshow.html#matplotlib.pyplot.imshow) 函数来显示图像.

<center>
  <a href="/gallery/images_contours_and_fields/image_demo.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_image_demo_0031.png">
  </a>
</center>

**上图为使用[``imshow()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.imshow.html#matplotlib.pyplot.imshow)展示的CT图**

## 热力图（pcolormesh）与等高线（contour）

 函数[``pcolormesh()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.pcolormesh.html#matplotlib.pyplot.pcolormesh) 可以使用色彩来描绘横坐标间隔一致或不一致的二维向量。
 函数[``contour()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.contour.html#matplotlib.pyplot.contour)与其类似:

<center>
  <a href="/gallery/images_contours_and_fields/pcolormesh_levels.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_pcolormesh_levels_0011.png">
  </a>
</center>

**[``pcolormesh()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.pcolormesh.html#matplotlib.pyplot.pcolormesh) 与[``contour()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.contour.html#matplotlib.pyplot.contour)的比较**

## 直方图（Histogram）

函数 [``hist()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.hist.html#matplotlib.pyplot.hist) 自动生成直方图，并且返回每bin的数目或概率：

<center>
  <a href="/gallery/statistics/histogram_features.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_histogram_features_0011.png">
  </a>
  <p>
    <b>直方图</b>
  </p>
</center>

## 折线轨迹（Paths）

matplotlib中用于折线处理的类主要是[``matplotlib.path``](https://matplotlib.org/api/path_api.html#module-matplotlib.path) ，几乎所有矢量绘图都在绘图管道（drawing pipeline）中使用了折线，虽然无法绘制path实例本身，但也可以使其可视化:

<center>
  <a href="/gallery/shapes_and_collections/path_patch.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_path_patch_0011.png">
  </a>
  <p>
    <b>轨迹绘制</b>
  </p>
</center>

## 绘制三维图表

matpltlib三维工具箱(The mplot3d toolkit）能够支持简单的三维图表，其中包括曲面图，线框图，散点图与条形图。 (详见 [Getting started](https://matplotlib.org//toolkits/mplot3d.html#toolkit-mplot3d-tutorial) 与[3D plotting](https://matplotlib.org/gallery/index.html#mplot3d-examples-index))

<center>
  <a href="/gallery/mplot3d/surface3d.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_surface3d_0011.png">
  </a>
  <p>
    <b>3维曲面</b>
  </p>
</center>

感谢John Porter, Jonathon Taylor, Reinier Heeres, 与 Ben Root 对
``mplot3d``所做出的贡献 . 该工具箱在所有完整版的matpltlib中均已包含，无需再次安装.

## 流量图（Streamplot）

函数[``streamplot()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.streamplot.html#matplotlib.pyplot.streamplot)绘制向量场的流量图. 除了简单的绘制流线外, 它还允许您将流线的颜色和（或）线宽映射到单独的参数，例如矢量场的速度或局部强度。

<center>
  <a href="/gallery/images_contours_and_fields/plot_streamplot.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_plot_streamplot_0011.png">
  </a>
  <p>
    <b>流量图的各种类型.</b>
  </p>
</center>

感谢Tom Flannaghan 与 Tony Yu 为[``quiver()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.quiver.html#matplotlib.pyplot.quiver) 提供了绘制向量场的功能.

## 椭圆（Ellipses）

迈克尔·德罗特布姆（Michael Droettboom）以查理·莫阿德（Charlie Moad）的作品为基础，为椭圆弧提供了极其精确的八次贝塞尔样条近似(eight cubic Bezier splines)(详见[``Arc``](https://matplotlib.org/api/_as_gen/matplotlib.patches.Arc.html#matplotlib.patches.Arc)), 这种椭圆弧其对缩放级别不敏感.

<center>
  <a href="/gallery/shapes_and_collections/ellipse_demo.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_ellipse_demo_0011.png">
  </a>
  <p>
    <b>椭圆展示</b>
  </p>
</center>

## 条形图（Bar charts）

使用 [``bar()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.bar.html#matplotlib.pyplot.bar) 函数来创建一个条形图, 其中包括自定义设置，例如错误栏:

<center>
  <a href="/gallery/statistics/barchart_demo.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_barchart_demo_0011.png">
  </a>
  <p>
    <b>条形图展示</b>
  </p>
</center>

你也可以创建多分类累计柱状图（stacked bars）
([bar_stacked.py](https://matplotlib.org/gallery/lines_bars_and_markers/bar_stacked.html)),
或是水平条状态（horizontal bar charts）
([barh.py](https://matplotlib.org/gallery/lines_bars_and_markers/barh.html)).

## 饼图（Pie charts）

函数[``pie()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.pie.html#matplotlib.pyplot.pie) 可以创建一个饼图.可选功能包括自动标记面积百分比，从饼图中心爆炸一个或多个楔形以及阴影效果，只需几行代码即可生成此图形。

<center>
  <a href="/gallery/pie_and_polar_charts/pie_features.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_pie_features_0011.png">
  </a>
  <p>
    <b>饼图展示</b>
  </p>
</center>

## 表格（Tables）

函数[``table()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.table.html#matplotlib.pyplot.table) 添加表格到坐标轴上。
<center>
  <a href="/gallery/misc/table_demo.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_table_demo_0011.png">
  </a>
  <p>
    <b>表格展示</b>
  </p>
</center>

## 散点图（Scatter plots）

函数 [``scatter()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.scatter.html#matplotlib.pyplot.scatter)用于绘制可设置大小及颜色的散点图，本示例绘制了Google股票价格的变化图，散点大小反映了交易量，颜色随时间变化，函数中的alpha为透明度。

<center>
  <a href="/gallery/lines_bars_and_markers/scatter_demo2.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_scatter_demo2_0011.png">
  </a>
  <p>
    <b>散点图展示</b>
  </p>
</center>

## 图形界面控件（GUI widgets）

Matplotlib提供了一些基本的独立于用户所使用的交互界面的GUI控件, 供用户跨GUI绘图. 详见 [``matplotlib.widgets``](https://matplotlib.org/api/widgets_api.html#module-matplotlib.widgets) 与
[widget examples](https://matplotlib.org/gallery/index.html).

<center>
  <a href="/gallery/widgets/slider_demo.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_slider_demo_0011.png">
  </a>
  <p>
    <b>滑动条与播放旋钮.</b>
  </p>
</center>

## 色彩填充（Filled curves）

函数 [``fill()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.fill.html#matplotlib.pyplot.fill) 可以让你填充曲线与多边形:

<center>
  <a href="/gallery/lines_bars_and_markers/fill.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_fill_0011.png">
  </a>
  <p>
    <b>填充</b>
  </p>
</center>

感谢 Andrew Straw 添加了这个函数.

## 时间处理（Date handling）

你可以绘制可设置主次刻度的时间序列。

<center>
  <a href="/gallery/text_labels_and_annotations/date.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_date_0011.png">
  </a>
  <p>
    <b>时间序列</b>
  </p>
</center>

详见 [``matplotlib.ticker``](https://matplotlib.org/api/ticker_api.html#module-matplotlib.ticker) and [``matplotlib.dates``](https://matplotlib.org/api/dates_api.html#module-matplotlib.dates).

## 对数图（Log plots）

函数 [``semilogx()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.semilogx.html#matplotlib.pyplot.semilogx),
[``semilogy()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.semilogy.html#matplotlib.pyplot.semilogy) 与
[``loglog()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.loglog.html#matplotlib.pyplot.loglog) 简化了对数图的创建。

<center>
  <a href="/gallery/scales/log_demo.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_log_demo_0011.png">
  </a>
  <p>
    <b>对数图展示</b>
  </p>
</center>

感谢 Andrew Straw, Darren Dale 与 Gregory Lielens 对log-scaling infrastructure的贡献.

## 极坐标图（Polar plots）

函数 [``polar()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.polar.html#matplotlib.pyplot.polar) 可生成极坐标图.

<center>
  <a href="/gallery/pie_and_polar_charts/polar_demo.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_polar_demo_0011.png">
  </a>
  <p>
    <b>极坐标图展示</b>
  </p>
</center>

## 图例（Legends）

函数 [``legend()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.legend.html#matplotlib.pyplot.legend) 使用了MATLAB-compatible legend-placement自动生成图例

<center>
  <a href="/gallery/text_labels_and_annotations/legend.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_legend_0011.png">
  </a>
  <p>
    <b>图例</b>
  </p>
</center>

感谢 Charles Twardy 添加 legend 函数.

## 文本对象的TeX表示法（TeX-notation for text objects）

下面是Matplotlib的mathtext引擎当前支持的TeX表达式的示例。它使用了[FreeType](https://www.freetype.org/)与DejaVu, BaKoMa computer modern, 以及 [STIX](http://www.stixfonts.org)，详见 [``matplotlib.mathtext``](https://matplotlib.org/api/mathtext_api.html#module-matplotlib.mathtext).

<center>
  <a href="/gallery/text_labels_and_annotations/mathtext_examples.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_mathtext_examples_0011.png">
  </a>
  <p>
    <b>Mathtext示例</b>
  </p>
</center>

Matplotlib的mathtext架构的实现是独立的，不依赖于 TeX 以及其他需要安装到电脑的包. 教程详见 [Writing mathematical expressions](https://matplotlib.org//text/mathtext.html).

## 原生TeX渲染（Native TeX rendering）

尽管Matplotlib原生的渲染引擎已非常强大，但有时你还可能需要TeX. Matplotlib可通过 *usetex*选项支持第三方TeX字符渲染。

<center>
  <a href="/gallery/text_labels_and_annotations/tex_demo.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_tex_demo_0011.png">
  </a>
  <p>
    <b>TeX 展示</b>
  </p>
</center>

## 脑电图图形界面（EEG GUI）

你可以将Matplotlib的界面插入到pygtk, wx, Tk, Qt，PyQt中去.以下是EEG界面[pbrain](https://github.com/nipy/pbrain)的截图。

![eeg_small](https://matplotlib.org/_images/eeg_small.png)

最下方的图像是使用 [``specgram()``](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.specgram.html#matplotlib.pyplot.specgram)
绘制的脑电图的一个通道的频谱图。

以下是将Matplotlib插入到不同界面的方式:

- [Embedding in GTK3](https://matplotlib.org/gallery/user_interfaces/embedding_in_gtk3_sgskip.html)
- [Embedding in wx #2](https://matplotlib.org/gallery/user_interfaces/embedding_in_wx2_sgskip.html)
- [Matplotlib With Glade 3](https://matplotlib.org/gallery/user_interfaces/mpl_with_glade3_sgskip.html)
- [Embedding in Qt](https://matplotlib.org/gallery/user_interfaces/embedding_in_qt_sgskip.html)
- [Embedding in Tk](https://matplotlib.org/gallery/user_interfaces/embedding_in_tk_sgskip.html)

## XKCD风格草图绘制（XKCD-style sketch plots）

Matplotlib 支持名为 ``xkcd``的风格，不过这图没啥用，只能用来玩玩

<center>
  <a href="/gallery/showcase/xkcd.html">
    <img style="width: 50%" src="https://matplotlib.org/_images/sphx_glr_xkcd_0011.png">
  </a>
  <p>
    <b>xkcd</b>
  </p>
</center>

## 子图实例（Subplot example）

可以将不同的图组合到一个图中，以创建功能强大且灵活的数据表示形式。

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

## 下载（Download）

- [Download Python source code: sample_plots.py](https://matplotlib.org/_downloads/6b0f2d1b3dc8d0e75eaa96feb738e947/sample_plots.py)
- [Download Jupyter notebook: sample_plots.ipynb](https://matplotlib.org/_downloads/dcfd63fc031d50e9c085f5dc4aa458b1/sample_plots.ipynb)
