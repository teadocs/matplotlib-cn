# 使用指南

本教程介绍一些基本的使用模式和最佳实践，以帮助您开始使用Matplotlib。

## 一般概念

matplotlib有一个广泛的代码库，对于许多新用户来说，这个代码库可能会让人望而生畏。然而，大多数Matplotlib可以用相当简单的概念框架和几个要点的知识来理解。

打印需要在一系列级别上执行操作，从最一般的级别(例如“轮廓此二维阵列”)到最具体的级别(例如“将此屏幕像素涂成红色”)。绘图软件包的目的是通过所有必要的控制，帮助您尽可能轻松地可视化您的数据-也就是说，在大多数情况下使用相对较高级别的命令，并且在需要时仍然能够使用低级别命令。

因此，matplotlib中的所有内容都是按照层次结构组织的。层次结构的顶部是matplotlib“状态机环境”，它是由[matplotlib.pylot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot)模块提供的。在这个级别上，使用简单的函数来添加打印元素(线、图像、文本等)。到当前地物中的当前轴。

注意：Pyplot的状态机环境的行为类似于MATLAB，并且对于具有MATLAB经验的用户来说应该是最熟悉的。

层次结构中的下一级是面向对象的接口的第一级，其中pyplot仅用于少数功能，例如图形创建，并且用户显式创建并跟踪图形和轴对象。 在此级别，用户使用pyplot来创建图形，并且通过这些图形，可以创建一个或多个轴对象。 然后，这些轴对象用于大多数绘图操作。

对于更多的控制 - 这对于在GUI应用程序中嵌入matplotlib图表这一点至关重要 - 可以完全删除pyplot级别，从而留下纯粹面向对象的方法。

```python
# sphinx_gallery_thumbnail_number = 3
import matplotlib.pyplot as plt
import numpy as np
```

## 一个图的一部分

![图示](/static/images/tutorials/anatomy.png)

### Figure

该**图**记录了所有[子轴](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes)，一些 “特殊” 的艺术家（标题，图形图例等）和**画布**。（不要过于担心画布，它是至关重要的，因为它实际上是绘图的对象，以获得你绘制的图像，但作为用户它或多或少是你不可见的）。一个数字可以有任意数量的[Axes](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes)，但是有用的应该至少有一个。

创建一个图像的最简单方法是使用pylot：

```python
fig = plt.figure()  # an empty figure with no axes
fig.suptitle('No axes on this figure')  # Add a title so we know which it is

fig, ax_lst = plt.subplots(2, 2)  # a figure with a 2x2 grid of Axes
```

![空图](/static/images/tutorials/sphx_glr_usage_001.png)


![空图2](/static/images/tutorials/sphx_glr_usage_002.png)


### Axes对象

这就是你想象中的“一幅图”，它是具有数据空间的图像区域。给定的图形可以包含许多轴，但给定的[Axes](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes)对象只能在[一个图](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure)中。 Axes包含两个（或3D的三个）[Axis](https://matplotlib.org/api/axis_api.html#matplotlib.axis.Axis)对象（注意**Axes**和**Axis**之间的差异），它们负责数据限制（数据限制也可以通过 [set_xlim()](https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_xlim.html#matplotlib.axes.Axes.set_xlim) 和 [set_ylim()](https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_ylim.html#matplotlib.axes.Axes.set_ylim) 来设置Axes方法）。每个Axes都有一个标题（通过 [set_title()](https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_title.html#matplotlib.axes.Axes.set_title) 设置），一个x标签（通过 [set_xlabel()](https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_xlabel.html#matplotlib.axes.Axes.set_xlabel) 设置）和一个通过 [set_ylabel()](https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_ylabel.html#matplotlib.axes.Axes.set_ylabel) 设置的y标签。

Axis 类及其成员函数是使用 OO 接口的主要入口点。

### Axis对象

这些是类似数字的对象。它们负责设置图形限制并生成刻度线（轴上的标记）和ticklabels（标记刻度线的字符串）。刻度线的位置由[Locator](https://matplotlib.org/api/ticker_api.html#matplotlib.ticker.Locator)对象确定，ticklabel字符串由[Formatter](https://matplotlib.org/api/ticker_api.html#matplotlib.ticker.Formatter)格式化。正确的定位器和格式化器的组合可以非常精确地控制刻度位置和标签。

### Artist对象

基本上你在图上看到的一切都是艺术家（Artist）对象（甚至是图，轴和轴对象）。这包括Text对象，Line2D对象，集合对象，Patch对象......（现在你明白了）。渲染图形时，所有艺术家都被绘制到**画布**（canvas）上。大多数艺术家（Artist）都与轴有关; 这样的艺术家（Artist）不能被多个轴共享，也不能从一个轴移动到另一个轴。

## 绘制函数的输入类型

所有绘图函数都需要np.array或np.ma.masked_array对象作为输入类型。如果是 “类数组（array-like）” 对象（如[pandas](http://www.pypandas.cn/)数据对象和``np.matrix``）可能会或可能不会按预期工作。最好在绘图之前将它们转换为np.array对象。

例如，要转换[pandas.DataFrame](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.html#pandas.DataFrame)

```python
a = pandas.DataFrame(np.random.rand(4,5), columns = list('abcde'))
a_asndarray = a.values
```

以及转换np.matrix

```python
b = np.matrix([[1,2],[3,4]])
b_asarray = np.asarray(b)
```

## Matplotlib，pyplot和pylab：它们之间有什么关系？

Matplotlib是整个包; [matplotlib.pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot) 是 matplotlib中的一个模块; 和pylab是一个与 ``matplotlib`` 一起安装的模块。

Pyplot为底层面向对象的绘图库提供状态机接口。 状态机隐式地自动创建图形和轴以实现所需的图形。例如：

```python
x = np.linspace(0, 2, 100)

plt.plot(x, x, label='linear')
plt.plot(x, x**2, label='quadratic')
plt.plot(x, x**3, label='cubic')

plt.xlabel('x label')
plt.ylabel('y label')

plt.title("Simple Plot")

plt.legend()

plt.show()
```

![简单图](/static/images/tutorials/sphx_glr_usage_003.png)

第一次调用 ``plt.plot`` 将自动创建必要的图形和轴以实现所需的绘图。随后对plt.plot的调用会重新使用当前轴，并且每次都会添加另一行。设置标题，图例和轴标签还会自动使用当前轴并设置标题，创建图例并分别标记轴。

``pylab``是一个便利模块，它在单个名称空间中批量导入 [matplotlib.pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot)（用于绘图）和[numpy](https://www.numpy.org.cn)一样（用于数学和使用数组）。不过不推荐使用pylab，并且由于命名空间污染而强烈建议不要使用它。请改用pyplot。

对于非交互式绘图，建议使用pyplot创建图形，然后使用OO界面进行绘图。

## 代码风格

查看此文档和示例时，您将找到不同的代码样式和使用模式。这些风格完全没有问题，各有利弊。几乎所有示例都可以转换为另一种样式并实现相同的结果。唯一需要注意的是避免为自己的代码混合了别的代码风格，尽量保持风格的统一。

**注意**：matplotlib的开发人员必须遵循特定的编程风格和指导原则。请参见[Matplotlib开发人员手册](https://matplotlib.org/devel/index.html#developers-guide-index)。

在不同的风格中，有两种是官方支持的。因此，这些是使用matplotlib的首选方法。

对于pyplot样式，脚本顶部的通常导入：

```python
import matplotlib.pyplot as plt
import numpy as np
```

然后调用一次，例如，np.arange，np.zeros，np.pi，plt.figure，plt.plot，plt.show等。使用pyplot接口创建图像，然后使用对象方法：

```python
x = np.arange(0, 10, 0.2)
y = np.sin(x)
fig, ax = plt.subplots()
ax.plot(x, y)
plt.show()
```

![简单图2](/static/images/tutorials/sphx_glr_usage_004.png)

那么，为什么所有都是额外的类型而不是MATLAB样式(依赖于全局状态和平面名称空间)呢？对于像这个例子这样非常简单的事情，唯一的好处是学术性的：更冗长的风格更明确，更清楚地说明事物从何而来，以及正在发生的事情。对于更复杂的应用程序，这种明确性和明确性变得越来越有价值，而更丰富和更完整的面向对象接口可能会使程序更易于编写和维护。

```python
def my_plotter(ax, data1, data2, param_dict):
    """
    A helper function to make a graph

    Parameters
    ----------
    ax : Axes
        The axes to draw to

    data1 : array
       The x data

    data2 : array
       The y data

    param_dict : dict
       Dictionary of kwargs to pass to ax.plot

    Returns
    -------
    out : list
        list of artists added
    """
    out = ax.plot(data1, data2, **param_dict)
    return out

# which you would then use as:

data1, data2, data3, data4 = np.random.randn(4, 100)
fig, ax = plt.subplots(1, 1)
my_plotter(ax, data1, data2, {'marker': 'x'})
```

![简单图3](/static/images/tutorials/sphx_glr_usage_005.png)

或者如果你想有两个小子图：

```python
fig, (ax1, ax2) = plt.subplots(1, 2)
my_plotter(ax1, data1, data2, {'marker': 'x'})
my_plotter(ax2, data3, data4, {'marker': 'o'})
```

![简单图4](/static/images/tutorials/sphx_glr_usage_006.png)

同样，对于这些简单的例子来说，这种风格看起来有点过头了，但是一旦图形变得稍微复杂一些，就会有回报。

## 后端(Backends)

### 什么是后端？

网站和邮件列表中的许多文档都提到了“后端（Backends）”，许多新用户对这个术语感到困惑。matplotlib针对许多不同的用例和输出格式。有些人在python shell中以交互方式使用matplotlib，并在键入命令时弹出绘图窗口。有些人运行[Jupyter](https://jupyter.org/)笔记本并绘制内联图以进行快速数据分析。其他人将matplotlib嵌入到图形用户界面（如wxpython或pygtk）中以构建丰富的应用程序。有些人在批处理脚本中使用matplotlib从数值模拟生成postscript图像，还有一些人运行Web应用程序服务器来动态提供图形。

为了支持所有这些用例，matplotlib可以针对不同的输出，并且这些功能中的每一个都称为后端（Backends）; “前端（frontend）”是面向用户的代码，即绘图代码，而“后端（Backends）”完成幕后的所有艰苦工作以制作图形。 有两种类型的后端：用户界面后端（用于pygtk，wxpython，tkinter，qt4或macosx;也称为“交互式后端”）和硬拷贝后端来制作图像文件（PNG，SVG，PDF，PS; 也被称为“非交互式后端”）。

配置后端有四种方法。如果它们彼此冲突，将使用以下列表中最后提到的方法，例如，调用 [use()](https://matplotlib.org/api/matplotlib_configuration_api.html#matplotlib.use) 将覆盖 ``matplotlibrc`` 中的设置。

1. matplotlibrc文件中的后端参数（请参阅[使用样式表和rcParams自定义Matplotlib](https://matplotlib.org/tutorials/introductory/customizing.html)）：

```python
backend : WXAgg   # use wxpython with antigrain (agg) rendering
```

1.  在Unix系统上，为当前shell或单个脚本设置[MPLBACKEND](https://matplotlib.org/faq/environment_variables_faq.html#envvar-MPLBACKEND)环境变量：

```python
> export MPLBACKEND=module://my_backend
> python simple_plot.py

> MPLBACKEND="module://my_backend" python simple_plot.py
```

在Windows上，只有前者是可用的：

```python
> set MPLBACKEND=module://my_backend
> python simple_plot.py
```

设置此环境变量将覆盖任何 ``matplotlibrc`` 中的后端参数，即使当前工作目录中存在matplotlibrc也是如此。 因此，全局设置[MPLBACKEND](https://matplotlib.org/faq/environment_variables_faq.html#envvar-MPLBACKEND) ，例如 在``.bashrc`` 或 ``.profile`` 中，不鼓励它，因为它可能导致反常的行为。

1. 如果您的脚本依赖于特定的后端，则可以使用 [use()](https://matplotlib.org/api/matplotlib_configuration_api.html#matplotlib.use) 函数：

```python
import matplotlib
matplotlib.use('PS')   # generate postscript output by default
```

如果使用 [use()](https://matplotlib.org/api/matplotlib_configuration_api.html#matplotlib.use) 函数，则必须在输入 [matplotlib.pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot) 之前完成此操作。导入 pyplot 后调用 [use()](https://matplotlib.org/api/matplotlib_configuration_api.html#matplotlib.use) 将不起作用。如果用户希望使用不同的后端，则使用 [use()](https://matplotlib.org/api/matplotlib_configuration_api.html#matplotlib.use) 将需要更改代码。因此，除非绝对必要，否则应避免显式调用 [use()](https://matplotlib.org/api/matplotlib_configuration_api.html#matplotlib.use)。

**注意**：后端名称规范不区分大小写；例如，‘GTK3Agg’ 和 ‘gtk3agg’ 是等效的。

通过典型的方式安装matplotlib，例如：从二进制安装程序或Linux发行包安装的话，可以设置好一个默认的后端，允许交互式工作和从脚本绘图，输出到屏幕和/或文件，所以至少一开始的时候你不需要使用上面给出的任何方法。

但是，如果您想编写图形用户界面或Web应用程序服务器（[Web应用程序服务器中的Matplotlib](https://matplotlib.org/faq/howto_faq.html#howto-webapp)），或者需要更好地了解正在发生的事情，请继续阅读。为了使图形用户界面可以更加自定义，matplotlib将画布（绘图所在的位置）中的渲染器（实际绘制的东西）的概念分开。用户界面的规范渲染器是Agg，它使用 [Anti-Grain Geometry](http://antigrain.com/) C++库来制作图形的光栅（像素）图像。除macosx之外的所有用户界面都可以与agg渲染一起使用，例如WXAgg，GTK3Agg，QT4Agg，QT5Agg，TkAgg。此外，一些用户界面支持其他渲染引擎。 例如，使用GTK + 3，您还可以选择Cairo渲染（后端GTK3Cairo）。

对于渲染引擎，还可以区分[矢量](https://en.wikipedia.org/wiki/Vector_graphics)(vector)或[光栅](https://en.wikipedia.org/wiki/Raster_graphics)(raster)渲染器。矢量图形语言发出绘图命令，例如“从此点到此点绘制线”，因此无标度，并且栅格后端生成线的像素表示，其精度取决于DPI设置。

下面是matplotlib渲染器的摘要(每个渲染器都有一个同名的后端；它们是非交互式后端，能够写入文件)：

渲染格式 | 文件类型 | 描述
---|---|---
[AGG](https://matplotlib.org/glossary/index.html#term-agg) | [png](https://matplotlib.org/glossary/index.html#term-png) | [raster graphics](https://matplotlib.org/glossary/index.html#term-raster-graphics) -- 使用[反纹理几何（Anti-Grain Geometry）](http://antigrain.com/)引擎的高质量图像。
PS | [ps](https://matplotlib.org/glossary/index.html#term-ps) [eps](https://matplotlib.org/glossary/index.html#term-eps) | [vector graphics](https://matplotlib.org/glossary/index.html#term-vector-graphics) -- [Postscript](https://en.wikipedia.org/wiki/PostScript) output
PDF | [pdf](https://matplotlib.org/glossary/index.html#term-pdf) | [vector graphics](https://matplotlib.org/glossary/index.html#term-vector-graphics) -- [Portable Document Format](https://en.wikipedia.org/wiki/Portable_Document_Format)
SVG | [svg](https://matplotlib.org/glossary/index.html#term-svg) | [vector graphics](https://matplotlib.org/glossary/index.html#term-vector-graphics) -- [Scalable Vector Graphics](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)
[Cairo](https://matplotlib.org/glossary/index.html#term-cairo) | [png](https://matplotlib.org/glossary/index.html#term-png) [ps](https://matplotlib.org/glossary/index.html#term-ps) [pdf](https://matplotlib.org/glossary/index.html#term-pdf) [svg](https://matplotlib.org/glossary/index.html#term-svg) | [raster graphics](https://matplotlib.org/glossary/index.html#term-raster-graphics) 和 [vector graphics](https://matplotlib.org/glossary/index.html#term-vector-graphics) -- 使用 [Cairo图形库(Cairo graphics)](https://www.cairographics.org/)库

以下是支持的用户界面和渲染器组合; 这些是交互式后端，能够显示到屏幕并使用上表中的适当渲染器写入文件：

后端 | 描述
---|---
Qt5Agg | 在[Qt5](https://matplotlib.org/glossary/index.html#term-qt5)画布中进行Agg渲染(需要[PyQt5](https://riverbankcomputing.com/software/pyqt/intro))。可以在IPython中使用 ``%matplotlib qt5`` 激活此后端。
ipympl | 嵌入在Jupyter小部件中的Agg渲染。（需要ipympl）。这个后端可以在带有``％matplotlib ipympl`` 的Jupyter笔记本中启用。
GTK3Agg | Agg渲染到[GTK](https://matplotlib.org/glossary/index.html#term-gtk) 3.x画布（需要[PyGObject](https://wiki.gnome.org/action/show/Projects/PyGObject)，[pycairo](https://www.cairographics.org/pycairo/)或[cairocffi](https://pythonhosted.org/cairocffi/)）。 可以使用``％matplotlib gtk3`` 在 IPython中激活此后端。
macosx | 将AGG渲染到OSX中的Cocoa画布中。可以在IPython中使用 %matplotlib OSX 激活此后端。
TkAgg | Agg渲染到[Tk](https://matplotlib.org/glossary/index.html#term-tk)画布（需要[TkInter](https://wiki.python.org/moin/TkInter)）。可以使用 ``％matplotlib tk`` 在IPython中激活此后端。
nbAgg | 在经典的Jupyter笔记本中嵌入一个交互式界面。 可以通过％matplotlib ``笔记本`` 在Jupyter笔记本中启用此后端。
WebAgg | ``show()`` 将启动一个带有交互式图形的 tornado 服务。
GTK3Cairo | 在[GTK](https://matplotlib.org/glossary/index.html#term-gtk) 3.x画布上呈现cairo(需要[PyGObject](https://wiki.gnome.org/action/show/Projects/PyGObject) 和 [pycairo](https://www.cairographics.org/pycairo/) 或 [cairocffi](https://pythonhosted.org/cairocffi/) )。
Qt4Agg | Agg渲染到 [Qt4](https://matplotlib.org/glossary/index.html#term-qt4) 画布（需要 [PyQt4](https://riverbankcomputing.com/software/pyqt/intro) 或pyside）。可以使用 ``％matplotlib qt4`` 在IPython中激活此后端。
WXAgg | Agg渲染到 [wxWidgets](https://matplotlib.org/glossary/index.html#term-wxwidgets) 画布（需要[wxPython](https://www.wxpython.org/) 4）。可以使用 ``％matplotlib wx`` 在IPython中激活此后端。

### ipympl

Jupyter小部件生态系统的移动速度太快，无法直接在Matplotlib中支持。安装ipympl

```python
pip install ipympl
jupyter nbextension enable --py --sys-prefix ipympl
```

或者

```python
conda install ipympl -c conda-forge
```

请参阅 [jupyter-matplotlib](https://github.com/matplotlib/jupyter-matplotlib) 了解更多细节。

### GTK 和 Cairo

``GTK3`` 后端 (*包括* ``GTK3Agg`` 和 ``GTK3Cairo``) 依赖于 Cairo (pycairo>=1.11.0 或 cairocffi).

### 如何选择PyQt4或PySide？

QT_API环境变量可以设置为 ``pyqt`` 或 ``pyside``，分别使用 ``PyQt4`` 或 ``PySide``。

由于要使用的绑定的默认值是``PyQt4``，``matplotlib`` 首先尝试导入它，如果导入失败，它会尝试导入 ``PySide``。

## 什么是交互模式？

使用交互式后端（请参阅[什么是后端？](#什么是后端？)）允许但本身并不需要或确保绘制到屏幕上。是否以及何时绘制到屏幕，以及在屏幕上绘制绘图后是否继续脚本或shell会话取决于调用的函数和方法，以及确定matplotlib是否处于“交互模式”的状态变量”。默认的布尔值由matplotlibrc文件设置，并且可以像任何其他配置参数一样进行自定义（请参阅[使用样式表和rcParams自定义Matplotlib](https://matplotlib.org/tutorials/introductory/customizing.html)）。它也可以通过[matplotlib.interactive()](https://matplotlib.org/api/matplotlib_configuration_api.html#matplotlib.interactive) 设置，并且可以通过[matplotlib.is_interactive()](https://matplotlib.org/api/matplotlib_configuration_api.html#matplotlib.is_interactive) 查询其值。无论是在脚本还是在shell中，在绘图命令流的中间打开和关闭交互模式很少需要并且可能令人困惑，因此在下文中我们将假设所有绘图都是以交互模式打开或关闭。

**注意**：与交互性相关的主要更改，特别是[show()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.show.html#matplotlib.pyplot.show)的角色和行为，在向matplotlib 1.0版的过渡中进行了更改，并在1.0.1中修复了错误。这里我们描述主要交互式后端的1.0.1版行为，但MacOSX除外。

交互模式也可以通过matplotlib.pyplot.ion()打开，并通过matplotlib.pyplot.ioff()关闭。

**注意**：交互模式在ipython和普通的python shell中使用合适的后端，但它在IDLE IDE中不起作用。如果默认后端不支持交互性，则通过“[可以使用什么是后端？](https://matplotlib.org/tutorials/introductory/usage.html#id4)”这个话题中讨论的任何方法显式激活交互式后端。

### 交互例子

从普通的python提示符，或者在没有选项的情况下调用ipython之后，试试这个：

```python
import matplotlib.pyplot as plt
plt.ion()
plt.plot([1.6, 2.7])
```

假设您运行的是1.0.1或更高版本，并且默认情况下安装并选择了交互式后端，您应该看到一个图，并且您的终端提示也应该是活动的; 您可以键入其他命令，例如：

```python
plt.title("interactive test")
plt.xlabel("index")
```

然后你会看到每一行后都要更新绘图。从版本1.5开始，通过其他方式修改绘图也应该自动更新大多数后端的显示。获取对[Axes](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes)实例的引用，并调用该实例的方法：

```python
ax = plt.gca()
ax.plot([3.1, 2.2])
```

如果你使用的是某些后端（如macosx）或旧版本的matplotlib，则可能无法立即将新行添加到绘图中。在这种情况下，您需要显式调用[draw()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.draw.html#matplotlib.pyplot.draw) 以更新绘图：

```python
plt.draw()
```

### 非交互式示例

像上一个示例中一样开始一个新会话，但现在关闭交互模式：

```python
import matplotlib.pyplot as plt
plt.ioff()
plt.plot([1.6, 2.7])
```

什么都没发生 - 或者至少没有任何东西出现在屏幕上（除非你使用macosx后端，这是异常的）。要显示绘图，您需要执行以下操作：

```python
plt.show()
```

现在你看到图像，但你的终端命令行没有响应; show() 命令会阻止其他命令的输入，直到您手动终止绘图窗口。

被迫使用阻塞功能？这有什么用，假设您需要一个脚本，将文件内容绘制到屏幕上。您想查看该图，然后结束脚本。如果没有一些阻塞命令（如show()），脚本会闪现图像，然后立即结束，屏幕上不显示任何内容。

此外，非交互模式会将所有图形延迟到调用show()；这比每次在脚本中添加新功能时重新绘制打印更有效。

在版本1.0之前，show()通常不能在单个脚本中调用多次(尽管有时可以不受限制)；对于版本1.0.1及更高版本，此限制已解除，因此可以编写如下脚本：

```python
import numpy as np
import matplotlib.pyplot as plt

plt.ioff()
for i in range(3):
    plt.plot(np.random.rand(10))
    plt.show()
```

这就形成了三个阴谋，一次一个。即。第一个地块关闭后，将显示第二个地块。

### 摘要

在交互模式下，pyplot功能会自动绘制到屏幕上。

交互式绘制时，如果除了pyplot函数之外还使用对象方法调用，则只要想要刷新绘图，就调用[draw()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.draw.html#matplotlib.pyplot.draw) 。

在要生成一个或多个图形的脚本中使用非交互模式，并在结束或生成一组新图形之前显示它们。在这种情况下，使用[show()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.show.html#matplotlib.pyplot.show)显示图形并阻止执行，直到您手动销毁它们。

## 性能

无论是以交互模式探索数据还是以编程方式保存大量绘图，渲染性能都可能成为您管道中的一个痛苦瓶颈。Matplotlib提供了几种方法来大大减少渲染时间，但代价是绘图外观略有变化（达到可设置的容差）。可用于缩短渲染时间的方法取决于正在创建的绘图类型。

### 线段简化

对于具有直线段的打印(例如，典型的直线打印、多边形轮廓等)，渲染性能可以由matplotLibrc文件中的path.Simplify和path.Simplify_Threshold参数控制(有关matplotlib文件的详细信息，请参见[使用样式表和rcParams自定义Matplotlib](https://matplotlib.org/tutorials/introductory/customizing.html))。Simplify参数是一个布尔值，用于指示是否简化了直线段。path.Simplify_Threshold参数控制简化线段的程度；阈值越高，渲染速度越快。

以下脚本将首先显示数据而不进行任何简化，然后简化显示相同的数据。 尝试与它们互动：

```python
import numpy as np
import matplotlib.pyplot as plt
import matplotlib as mpl

# Setup, and create the data to plot
y = np.random.rand(100000)
y[50000:] *= 2
y[np.logspace(1, np.log10(50000), 400).astype(int)] = -1
mpl.rcParams['path.simplify'] = True

mpl.rcParams['path.simplify_threshold'] = 0.0
plt.plot(y)
plt.show()

mpl.rcParams['path.simplify_threshold'] = 1.0
plt.plot(y)
plt.show()
```

Matplotlib目前默认为``1/9``的保守简化阈值。如果要更改默认设置以使用其他值，可以更改matplotlibrc文件。或者，您可以为交互式绘图（具有最大简化）创建新样式，并为出版质量绘图创建另一种样式（最小化简化）并根据需要激活它们。有关如何执行这些操作的说明，请参阅[使用样式表和rcParams自定义Matplotlib](https://matplotlib.org/tutorials/introductory/customizing.html)。

简化通过将线段迭代地合并为单个矢量直到下一个线段与矢量的垂直距离（在显示坐标空间中测量）大于 ``path.simplify_threshold`` 参数来工作。

**注意**：与版本细分如何简化相关的更改在版本2.1中进行。 2.1之前的这些参数仍将改善渲染时间，但2.1版及更高版本的某些类型数据的渲染时间将大大改善。

### 标记简化

标记也可以简化，尽管不如线段强大。标记简化仅适用于[Line2D](https://matplotlib.org/api/_as_gen/matplotlib.lines.Line2D.html#matplotlib.lines.Line2D)对象（通过市场营销属性）。无论在哪里传递[Line2D](https://matplotlib.org/api/_as_gen/matplotlib.lines.Line2D.html#matplotlib.lines.Line2D)构造参数，例如[matplotlib.pyplot.plot()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot) 和 [matplotlib.axes.Axes.plot()](https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.plot.html#matplotlib.axes.Axes.plot)，都可以使用markevery参数：

```python
plt.plot(x, y, markevery=10)
```

市场营销论证允许天真的子采样，或尝试均匀间隔（沿x轴）采样。 有关更多信息，请参阅Markevery演示。

### 将线分割成较小的块

如果您正在使用Agg后端（请参阅[什么是后端？](#什么是后端？)），那么您可以使用 ``agg.path.chunksize`` rc参数。这允许您指定块大小，并且任何具有大于该多个顶点的行将被分割成多行，每行不超过 ``agg.path.chunksize`` 许多顶点。（除非``agg.path.chunksize``为零，在这种情况下没有分块。）对于某种类型的数据，将线条分成合理的大小可以大大减少渲染时间。

以下脚本将首先显示没有任何块大小限制的数据，然后显示块大小为10,000的相同数据。当数字很大时，可以最好地看到差异，尝试最大化GUI然后与它们进行交互：

```python
import numpy as np
import matplotlib.pyplot as plt
import matplotlib as mpl
mpl.rcParams['path.simplify_threshold'] = 1.0

# Setup, and create the data to plot
y = np.random.rand(100000)
y[50000:] *= 2
y[np.logspace(1,np.log10(50000), 400).astype(int)] = -1
mpl.rcParams['path.simplify'] = True

mpl.rcParams['agg.path.chunksize'] = 0
plt.plot(y)
plt.show()

mpl.rcParams['agg.path.chunksize'] = 10000
plt.plot(y)
plt.show()
```

### 图例

轴的默认图例行为尝试查找覆盖最少数据点的位置``（loc ='best'）``。 如果有大量数据点，这可能是非常昂贵的计算。 在这种情况下，您可能希望提供特定位置。

### 使用快速的风格

快速样式可用于自动将简化和分块参数设置为合理的设置，以加快绘制大量数据的速度。它可以通过运行简单地使用：

```python
import matplotlib.style as mplstyle
mplstyle.use('fast')
```

它的重量非常轻，因此它可以很好地与其他风格配合使用，只需确保最后应用快速样式，以便其他样式不会覆盖设置：

```python
mplstyle.use(['dark_background', 'ggplot', 'fast'])
```

## 下载本文的所有示例

- [下载python源码: usage.py](https://matplotlib.org/_downloads/44756043dd6d8c4d37f2ae34ec869dde/usage.py)
- [下载Jupyter notebook: usage.ipynb](https://matplotlib.org/_downloads/60b66634a88a8f759450ae8638e59340/usage.ipynb)