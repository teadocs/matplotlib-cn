---
sidebarDepth: 3
sidebar: auto
---

# API 概览

- [使用方法](https://matplotlib.org/api/index.html#usage-patterns)
  - [绘图API](https://matplotlib.org/api/index.html#the-pyplot-api)
  - [面向对象的API](https://matplotlib.org/api/index.html#the-object-oriented-api)
  - [pylabAPI（不建议使用）](https://matplotlib.org/api/index.html#the-pylab-api-disapproved)
- [模块](https://matplotlib.org/api/index.html#modules)
- [工具包](https://matplotlib.org/api/index.html#toolkits)

另外你还可以看 [API 改动日志](https://matplotlib.org/api/api_changes.html).

## 使用方法

下面，我们描述使用Matplotlib进行绘图的几种常用方法。

### pylot API

[matplotlib.pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot)是一组命令样式函数，使Matplotlib的工作方式类似于MATLAB。每个pylot函数对图形进行一些更改：例如，创建图形、在图形中创建绘图区域、在绘图区域中绘制一些线、使用标签装饰绘图等。

[pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot) 主要用于交互式绘图和编程绘图生成简单图例。

进一步阅读：

- [matplotlib.pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot) 函数引用
- [Pyplot 教程](/tutorials/introductory/pyplot.html)
- [Pyplot 例子](/gallery/index.html)

### 面向对象的API

Matplotlib的核心是面向对象的。如果需要对 plots 进行更多控制和自定义，我们建议直接使用对象。

在许多情况下，您将使用 [pyplot.subplots](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.subplots.html#matplotlib.pyplot.subplots) 创建一个 [图形](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure) 和一个或多个 [轴](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes) ，然后只处理这些对象。不过，也可以显式创建[图形](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure)(例如，当图形包含在GUI应用程序中时)。

进一步阅读：

- 有关绘图函数的概述，请参阅 [matplotlib.axes.Axes](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes) 和 [matplotlib.figure.Figure](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure)。
- 大多数[示例](https://matplotlib.org/gallery/index.html#examples-index)都使用面向对象的方法(pyploy节除外)。

### pylab接口（不建议）

::: danger 警告

由于大量导入到全局名称空间可能会导致意外行为，因此强烈建议不要使用pylab。请改用[matplotlib.pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot)。

:::

pylab是一个模块，它在单个名称空间中包含[matplotlib.pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot)、[numpy](https://docs.scipy.org/doc/numpy/reference/index.html#module-numpy)和一些附加函数。它最初的目的是通过将所有函数导入全局名称空间来模仿类似 MATLAB 的工作方式。这在当今被认为是不好的风格。

## 模块

Matplotlib由以下子模块组成：

- [matplotlib](https://matplotlib.org/api/matplotlib_configuration_api.html)
- [matplotlib.afm](https://matplotlib.org/api/afm_api.html)
- [matplotlib.animation](https://matplotlib.org/api/animation_api.html)
- [matplotlib.artist](https://matplotlib.org/api/artist_api.html)
- [matplotlib.axes](https://matplotlib.org/api/axes_api.html)
- [matplotlib.axis](https://matplotlib.org/api/axis_api.html)
- [matplotlib.backend_bases](https://matplotlib.org/api/backend_bases_api.html)
- [matplotlib.backend_managers](https://matplotlib.org/api/backend_managers_api.html)
- [matplotlib.backend_tools](https://matplotlib.org/api/backend_tools_api.html)
- [matplotlib.backends](https://matplotlib.org/api/index_backend_api.html)
- [matplotlib.blocking_input](https://matplotlib.org/api/blocking_input_api.html)
- [matplotlib.category](https://matplotlib.org/api/category_api.html)
- [matplotlib.cbook](https://matplotlib.org/api/cbook_api.html)
- [matplotlib.cm](https://matplotlib.org/api/cm_api.html)
- [matplotlib.collections](https://matplotlib.org/api/collections_api.html)
- [matplotlib.colorbar](https://matplotlib.org/api/colorbar_api.html)
- [matplotlib.colors](https://matplotlib.org/api/colors_api.html)
- [matplotlib.container](https://matplotlib.org/api/container_api.html)
- [matplotlib.contour](https://matplotlib.org/api/contour_api.html)
- [matplotlib.dates](https://matplotlib.org/api/dates_api.html)
- [matplotlib.dviread](https://matplotlib.org/api/dviread.html)
- [matplotlib.figure](https://matplotlib.org/api/figure_api.html)
- [matplotlib.font_manager](https://matplotlib.org/api/font_manager_api.html)
- [matplotlib.fontconfig_pattern](https://matplotlib.org/api/fontconfig_pattern_api.html)
- [matplotlib.gridspec](https://matplotlib.org/api/gridspec_api.html)
- [matplotlib.image](https://matplotlib.org/api/image_api.html)
- [matplotlib.legend](https://matplotlib.org/api/legend_api.html)
- [matplotlib.legend_handler](https://matplotlib.org/api/legend_handler_api.html)
- [matplotlib.lines](https://matplotlib.org/api/lines_api.html)
- [matplotlib.markers](https://matplotlib.org/api/markers_api.html)
- [matplotlib.mathtext](https://matplotlib.org/api/mathtext_api.html)
- [matplotlib.mlab](https://matplotlib.org/api/mlab_api.html)
- [matplotlib.offsetbox](https://matplotlib.org/api/offsetbox_api.html)
- [matplotlib.patches](https://matplotlib.org/api/patches_api.html)
- [matplotlib.path](https://matplotlib.org/api/path_api.html)
- [matplotlib.patheffects](https://matplotlib.org/api/patheffects_api.html)
- [matplotlib.pyplot](https://matplotlib.org/api/pyplot_summary.html)
- [matplotlib.projections](https://matplotlib.org/api/projections_api.html)
- [matplotlib.projections.polar](https://matplotlib.org/api/projections_api.html#module-matplotlib.projections.polar)
- [matplotlib.rcsetup](https://matplotlib.org/api/rcsetup_api.html)
- [matplotlib.sankey](https://matplotlib.org/api/sankey_api.html)
- [matplotlib.scale](https://matplotlib.org/api/scale_api.html)
- [matplotlib.spines](https://matplotlib.org/api/spines_api.html)
- [matplotlib.style](https://matplotlib.org/api/style_api.html)
- [matplotlib.table](https://matplotlib.org/api/table_api.html)
- [matplotlib.testing](https://matplotlib.org/api/testing_api.html)
- [matplotlib.text](https://matplotlib.org/api/text_api.html)
- [matplotlib.textpath](https://matplotlib.org/api/textpath_api.html)
- [matplotlib.ticker](https://matplotlib.org/api/ticker_api.html)
- [matplotlib.tight_layout](https://matplotlib.org/api/tight_layout_api.html)
- [matplotlib.transforms](https://matplotlib.org/api/transformations.html)
- [matplotlib.tri](https://matplotlib.org/api/tri_api.html)
- [matplotlib.type1font](https://matplotlib.org/api/type1font.html)
- [matplotlib.units](https://matplotlib.org/api/units_api.html)
- [matplotlib.widgets](https://matplotlib.org/api/widgets_api.html)

## 工具包

[Toolkits](https://matplotlib.org/api/toolkits/index.html#toolkits-index)是扩展Matplotlib的特定于应用程序的函数的集合。其中包括以下工具包：

- [Toolkits](https://matplotlib.org/api/toolkits/index.html)
- [mplot3d API](https://matplotlib.org/api/toolkits/mplot3d.html)
- [Matplotlib axes_grid1 Toolkit](https://matplotlib.org/api/toolkits/axes_grid1.html)
- [Matplotlib axisartist Toolkit](https://matplotlib.org/api/toolkits/axisartist.html)
- [Matplotlib axes_grid Toolkit](https://matplotlib.org/api/toolkits/axes_grid.html)

