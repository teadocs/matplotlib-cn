---
sidebarDepth: 3
sidebar: auto
---

# 使用指南

本教程介绍一些基本的使用模式和最佳实践，以帮助您开始使用Matplotlib。

## 一般概念

' ' matplotlib ' ' '有一个规模庞大的代码库，可能会让许多新用户望而生畏。然而，大部分matplotlib内容可通过相当简单的概念性框架和一些重要的知识点来理解。

绘图需要不同层次的操作，，从最一般的(例如，“绘制这个二维数组的轮廓”)到最具体的(例如，“将这个屏幕像素涂成红色”)。绘图包的目的是帮助您尽可能轻松地可视化数据，并提供所有必要的控制——也就是说，大多数时候使用相对高级的命令，并且在需要时仍然能够使用低级命令。

因此，matplotlib中的所有内容都按照层次结构组织。在层次结构的最顶端是matplotlib“状态机环境”，它由[``matplotlib.pyplot``](https://matplotlib.orgapi/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot) 模块提供。在这个层次上，使用简单的函数将图形元素(线、图像、文本等)添加到当前图形的当前axes上。

::: tip Note

Pyplot的状态机环境的行为类似于MATLAB，具有MATLAB经验的用户应该最熟悉它。

:::

层次结构的下一层是面向对象接口的第一层，在这一层中，pyplot仅用于一些函数，比如创建figure，用户显式地创建并跟踪figure和axis对象。在这个级别上，用户使用pyplot创建figure，通过这些figure，可以创建一个或多个axes对象。然后，这些axes对象将用于大多数绘图操作。

至于更多的控制——这对于在GUI应用程序中嵌入matplotlib图形是必不可少的——pyplot级别可以完全删除，只留下纯面向对象的方法。

``` python
# sphinx_gallery_thumbnail_number = 3
import matplotlib.pyplot as plt
import numpy as np
```

## Parts of a Figure

![anatomy](https://matplotlib.org/_images/anatomy.png)

### ``Figure``

**整个**figure如上图所示。图中展示了[``Axes``](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes)的所有子对象，一系列“特殊”的artists（标题、图例等）和**canvas**。（不要太注重canvas，虽然它非常重要的，因为它是实际绘制图形的对象，以获得您的绘图，但作为用户，它或多或少对您是不可见的）。一个figure可以有任意数量的[``Axes``](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes)，但应该至少有一个。

创建新figure的最简单方法是使用pyplot：

``` python
fig = plt.figure()  # an empty figure with no axes
fig.suptitle('No axes on this figure')  # Add a title so we know which it is

fig, ax_lst = plt.subplots(2, 2)  # a figure with a 2x2 grid of Axes
```

- ![sphx_glr_usage_001](https://matplotlib.org/_images/sphx_glr_usage_001.png)
- ![sphx_glr_usage_002](https://matplotlib.org/_images/sphx_glr_usage_002.png)

### ``Axes``

这就是你所认为的“图像”，它是带有数据空间的图像区域。一个给定的figure可以包含许多axes，但一个给定的[``Axes``](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes)只能隶属于一个[``Figure``](https://matplotlib.orgapi/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure)。一个axes包含两个（在3D图中是三个）[``Axis``](https://matplotlib.orgapi/axis_api.html#matplotlib.axis.Axis)对象（请注意axes和axis的不同，虽然翻译过来都叫轴），axis负责控制数据范围，可通过``Axes``的[``set_xlim()``](https://matplotlib.orgapi/_as_gen/matplotlib.axes.Axes.set_xlim.html#matplotlib.axes.Axes.set_xlim) 和 [``set_ylim()``](https://matplotlib.orgapi/_as_gen/matplotlib.axes.Axes.set_ylim.html#matplotlib.axes.Axes.set_ylim) 这两个方法来设置。每个``Axes``都有一个title（通过[``set_title()``](https://matplotlib.orgapi/_as_gen/matplotlib.axes.Axes.set_title.html#matplotlib.axes.Axes.set_title)来设置），一个x轴标题 x-label（通过[``set_xlabel()``](https://matplotlib.orgapi/_as_gen/matplotlib.axes.Axes.set_xlabel.html#matplotlib.axes.Axes.set_xlabel)设置），一个y轴标题 y-label（通过[``set_ylabel()``](https://matplotlib.orgapi/_as_gen/matplotlib.axes.Axes.set_ylabel.html#matplotlib.axes.Axes.set_ylabel)设置）。

``Axes``类及其成员函数是使用面向对象接口的主要入口。

### ``Axis``

这些是数字/线一类的对象。它们负责设置图形界限并生成ticks(坐标轴上的刻度)和ticklabel(标记刻度的字符串)。ticks的位置由[``Locator``](https://matplotlib.orgapi/ticker_api.html#matplotlib.ticker.Locator)对象决定，ticklabel字符串由[``Formatter``](https://matplotlib.orgapi/ticker_api.html#matplotlib.ticker.Formatter)设置格式。正确使用``Locator``和``Formatter``的组合可以很好地控制刻度的位置和标签。

### ``Artist``

基本上，你在figure上看到的一切都是artist（甚至``Figure``，``Axes``，和``Axis``对象也是）。这包括``Text`` 对象，``Line2D``对象，``collection``对象，``Patch``对象等等（你懂的）。当figure渲染时，所有的artist将绘制到**canvas**上。大部分artists都绑定在axes上，不能被多个axes共享，也不能从一个axes移动到另一上。

## Types of inputs to plotting functions

所有的绘图函数都期望``np.array``或``np.ma.masked_array``作为输入参数，和array类似的对象，如[``pandas``](https://pandas.pydata.org/pandas-docs/stable/index.html#module-pandas)数据对象和``np.matrix``可能会也可能不会像预期的那样工作。但最好在绘图前将他们转换为``np.array``对象。

举个例子，将[``pandas.DataFrame``](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html#pandas.DataFrame)对象转换为``np.array``对象

``` python
a = pandas.DataFrame(np.random.rand(4,5), columns = list('abcde'))
a_asarray = a.values
```

将``np.matrix``转换为``np.array``对象

``` python
b = np.matrix([[1,2],[3,4]])
b_asarray = np.asarray(b)
```

## Matplotlib、pyplot和pylab之间的联系

Matplotlib指的是整个包，而[``matplotlib.pyplot``](https://matplotlib.orgapi/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot)只是其中一个常用模块

对于pyplot模块中的函数，始终有一个“当前”figure和axes(根据请求自动创建)。例如，在下面的示例中，第一次调用``plt.plot``会创建axes，之后调用``plt.plot``会继续在该axes上添加额外的线，接着``plt.xlabel``，``plt.ylabel``，``plt.title``和``plt.legend``设置坐标轴标签和标题，并添加一个图例。

``` python
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

![sphx_glr_usage_003](https://matplotlib.org/_images/sphx_glr_usage_003.png)

``pylab``是在一个简单的命名空间中批量导入[``matplotlib.pyplot``](https://matplotlib.orgapi/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot)（用于绘图）和[``numpy``](https://docs.scipy.org/doc/numpy/reference/index.html#module-numpy)（用于处理矩阵和数组）的便利模块。由于名称空间污染，不推荐使用pylab。
请使用pyplot代替。

对于非交互式绘图，建议使用培养plot创建figure，然后使用面向对象接口绘图。

## 代码风格

当查看这个文档和例子时，你会看到不同的代码风格与使用模式。这些风格都是合适的，都有不同的优缺点。几乎所有的例子都可以转换到另一种风格，并且输出同样的结果。唯一需要注意的是避免在你自己的代码中混杂两种不同风格的代码。

::: tip Note

matplotlib开发人员需要遵循另一套特定的风格和指导原则。详见[The Matplotlib Developers' Guide](https://matplotlib.orgdevel/index.html#developers-guide-index)

:::

在所有不同风格中，有两种是官方支持的。因此这些是使用matplotlib的首选方案。

其中pyplot风格，程序顶部的导入通常为：

``` python
import matplotlib.pyplot as plt
import numpy as np
```

接下来是np.arange, np.zeros, np.pi, plt.figure,plt.plot, plt.show等。使用pyplot接口创建figure，然后使用pyplot对象的方法完成其余工作:

``` python
x = np.arange(0, 10, 0.2)
y = np.sin(x)
fig, ax = plt.subplots()
ax.plot(x, y)
plt.show()
```

![sphx_glr_usage_004](https://matplotlib.org/_images/sphx_glr_usage_004.png)

至于为什么要在每个函数前多输入“plt.”而不是像MATLAB那样使用全局声明和扁平化的命名空间？如这个简单例子所示，这样做更具学术性：单词的风格更明确，你可清晰看到调用的函数从哪来，发生了什么。对于更复杂的应用，这种明确和清晰的写法变得越来越有价值，而且更丰富和更完整的面向对象接口可能会使程序更容易编写和维护。

通常，对于不同数据重复绘制相同图像的情况，推荐编写专门的函数来进行绘制，提供代码复用性。推荐的函数签名写法如下：

``` python
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

![sphx_glr_usage_005](https://matplotlib.org/_images/sphx_glr_usage_005.png)

或者你需要绘制两个子图：

``` python
fig, (ax1, ax2) = plt.subplots(1, 2)
my_plotter(ax1, data1, data2, {'marker': 'x'})
my_plotter(ax2, data3, data4, {'marker': 'o'})
```

![sphx_glr_usage_006](https://matplotlib.org/_images/sphx_glr_usage_006.png)

同样的，虽然对于这个简单例子来说，这种风格显得十分繁琐，但对于更复杂的的图像，这样做是很值得的。

## 后端

### 什么是后端?

网站上和邮件列表中的很多文档都提到了“backend”，许多新用户对这个术语感到困惑。matplotlib适用于不同的用例和输出格式。有些人从python shell交互式地使用matplotlib，并在键入命令时弹出绘图窗口。有些人会使用[Jupyter](https://jupyter.org) notebook绘制内嵌图以进行快速数据分析。还有一些将matplotlib嵌入到图形用户界面(如wxpython或pygtk)中，以构建丰富的应用程序。有些人在批处理脚本中使用matplotlib来从数值模拟中生成postscript图像，还有一些人运行web应用程序服务器来动态地提供图像。

为了支持所有这些场景，matplotlib可以针对不同的输出，每个功能都被称为后端；“前端”是用户面对的代码，也就是绘图代码，而“后端”则在幕后完成绘制图形的所有艰苦工作。有两种类型的后端：用户界面后端(用于pygtk、wxpython、tkinter、qt4或macosx中；也称为“交互后端”)和硬拷贝后端，以制作图像文件(PNG, SVG, PDF, PS；也被称为“非交互式后端”)。

配置后端有四种方法。如果它们相互冲突，将使用下面列表中最后提到的方法，例如调用[``use()``](https://matplotlib.orgapi/matplotlib_configuration_api.html#matplotlib.use)将覆盖``matplotlibrc``中的设置。

::: tip Note

后端名称规范不区分大小写；例如，“GTK3Agg”和“GTK3Agg”是等价的。

:::

matplotlib的典型安装，如从二进制安装程序或linux发行版的包，一个好的默认后台已经被设置，允许从交互式工作和脚本输出到屏幕上和/或一个文件，所以至少一开始你不需要使用任何上面给出的方法。

但是，如果您希望编写图形用户界面或web应用程序服务器（[How to use Matplotlib in a web application server](https://matplotlib.orgfaq/howto_faq.html#howto-webapp)），或者需要更好地理解正在进行的操作，请继续阅读。为了让图形用户界面更加可定制，matplotlib将渲染器(实际完成绘图的东西)的概念从画布(绘图的地方)中分离出来。用户界面的标准渲染器是``Agg``，它使用[Anti-GrainGeometry](http://antigrain.com/)c++库来制作图形的栅格(像素)图像。除``macosx``以外的所有用户界面都可以用于agg渲染，如``WXAgg``，``GTK3Agg``，``QT4Agg``，``QT5Agg``，``TkAgg``。此外，一些用户界面支持其他渲染引擎。例如，对于GTK+ 3，您还可以选择Cairo渲染（``GTK3Cairo``后端）。

对于渲染引擎，还可以区分[矢量](https://en.wikipedia.org/wiki/Vector_graphics)或[栅格](https://en.wikipedia.org/wiki/Raster_graphics)渲染。矢量图形语言通过“从这一点画一条线到这一点”这样的绘图命令绘制图形，因此是可以任意缩放的，而栅格后端生成像素表示线条，其精度取决于DPI的设置。

下面是matplotlib渲染器的汇总（每个渲染器都有一个同名的后端；这些是*非交互式后端*，能够写入文件）：

---






渲染器的文件描述



[AGG](htt[[ps](https://matplotlib.org/../glossary/index.html#term-ps)](https://matplotlib.org/../glossary/index.html#term-ps)://matplotlib.org/../glossary/index.html#term-agg)
[[png](https://matplotlib.org/../glossary/index.html#term-png)](https://matplotlib.org/../glossary/index.html#term-png)
[[raster graphics](https://matplotlib.org/../glossary/index.html#term-raster-graphics)](https://matplotlib.org/../glossary/index.html#term-raster-graphics) -- 使用[Anti-Grain Geometry](http://antigrain.com/) 引擎的高质量图像。

PS
ps
[eps](https://matplotlib.org/../glossary/index.html#term-eps)
[[[[vector graphics](https://matplotlib.org/../glossary/index.html#term-vector-graphics)](https://matplotlib.org/../glossary/index.html#term-vector-graphics)](https://matplotlib.org/../glossary/index.html#term-vector-graphics)](https://matplotlib.org/../glossary/index.html#term-vector-graphics) -- [Postscript](https://en.wikipedia.org/wiki/PostScript) 输出

PDF
[[pdf](https://matplotlib.org/../glossary/index.html#term-pdf)](https://matplotlib.org/../glossary/index.html#term-pdf)
矢量图形 --
[Portable Document Format](https://en.wikipedia.org/wiki/Portable_Document_Format)

SVG
[[svg](https://matplotlib.org/../glossary/index.html#term-svg)](https://matplotlib.org/../glossary/index.html#term-svg)
矢量图形 --
[Scalable Vector Graphics](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)

[Cairo](https://matplotlib.org/../glossary/index.html#term-cairo)
png
ps
pdf
svg
栅格图形 and
矢量图形 -- 使用
[Cairo graphics](https://wwW.cairographics.org) 库




以下是支持的用户界面和渲染器组合；这些是*交互后端*，能够显示到屏幕和使用适当的渲染器从上表写入文件:

---





后端描述



[Qt5](https://matplotlib.org/../glossary/index.html#term-qt5)Agg
Agg 渲染到 Qt5 画布(需要 [PyQt5](https://riverbankcomputing.com/software/pyqt/intro)). 这个后端可以在IPython中使用%matplotlib qt5激活。

ipympl
嵌入在Jupyter widget中的Agg渲染(需要 ipympl)。这个后端可以在使用%matplotlib ipympl的Jupyter notebook中启用。

[[GTK](https://matplotlib.org/../glossary/index.html#term-gtk)](https://matplotlib.org/../glossary/index.html#term-gtk)3Agg
Agg 渲染到 GTK 3.x 画布 (需要 [[PyGObject](https://wiki.gnome.org/action/show/Projects/PyGObject)](https://wiki.gnome.org/action/show/Projects/PyGObject),
and [[pycairo](https://www.cairographics.org/pycairo/)](https://www.cairographics.org/pycairo/) 或 [[cairocffi](https://pythonhosted.org/cairocffi/)](https://pythonhosted.org/cairocffi/)). 这个后端可以在IPython中使用%matplotlib gtk3激活。

macosx
Agg渲染到一个OSX的Cocoa画布。这个后端可以在IPython中使用%matplotlib osx激活。


[Tk](https://matplotlib.org/../glossary/index.html#term-tk)Agg
Agg渲染到Tk画布 (需要 [TkInter](https://wiki.python.org/moin/TkInter)). 这个后端可以在IPython中使用%matplotlib tk激活。

nbAgg
在经典Jupyter notebook嵌入一个可交互式图像。这个后端可以通过%matplotlib笔记本在Jupyter notebook中启用。

WebAgg
使用show()将使用交互式图形启动tornado服务器。

GTK3Cairo
Cairo渲染到GTK 3.x画布(需要 PyGObject和 pycairo 或者 cairocffi).

[Qt4](https://matplotlib.org/../glossary/index.html#term-qt4)Agg
Agg渲染到Qt4画布(需要 [PyQt4](https://riverbankcomputing.com/software/pyqt/intro)或者pyside)。可以在IPython中使用%matplotlib qt4激活该后端。

WXAgg
Agg渲染到[wxWidgets](https://matplotlib.org/../glossary/index.html#term-wxwidgets)画布(需要 [wxPython](https://www.wxpython.org/) 4).
这个后端可以在IPython中使用%matplotlib wx激活。




### ipympl

Jupyter widget生态发展太快以至于无法直接在Matplotlib中支持，请安装ipympl

``` bash
pip install ipympl
jupyter nbextension enable --py --sys-prefix ipympl
```

或者

``` bash
conda install ipympl -c conda-forge
```

详见[jupyter-matplotlib](https://github.com/matplotlib/jupyter-matplotlib)。

### GTK and Cairo

``GTK3``后端(``GTK3Agg`` 和 ``GTK3Cairo``**都**)取决于Cairo
(pycairo>=1.11.0 or cairocffi).

### 我如何选择PyQt4或PySide?


``QT_API``环境变量可以设置为``pyqt``或``pyside``来分别使用``PyQt4``或``pyside``。

Since the default value for the bindings to be used is ``PyQt4``,
``matplotlib`` first tries to import it, if the import fails, it tries to
import ``PySide``.
由于使用的绑定的默认值是``PyQt4``，``matplotlib``首先尝试导入它，如果导入失败，则会尝试导入``PySide``。

## 什么是交互模式?


使用交互式后端(参见[什么是后端?](#what-is-a-backend))允许——但其本身并不要求或确保——绘图到屏幕上。
是否以及何时在屏幕上进行绘图，以及在屏幕上绘制图形之后脚本或shell会话是否继续，都取决于所调用的函数和方法，以及一个状态变量，该状态变量决定matplotlib是否处于“交互模式”。默认的布尔值是由``matplotlibrc``文件设置的，可以像其他配置参数一样自定义(参见[用样式表和rcParams自定义Matplotlib](customizing.html))。它也可以通过设置[``matplotlib.interactive()``](https://matplotlib.orgapi/matplotlib_configuration_api.html#matplotlib.interactive)，和它的价值可能通过查询[``matplotlib.is_interactive()``](https://matplotlib.orgapi/matplotlib_configuration_api.html#matplotlib.is_interactive)。在绘图命令流中(无论是在脚本中还是在shell中)打开和关闭交互模式很少需要，而且可能会造成混乱，因此在下文中我们将假定所有绘图都是在打开或关闭交互模式下完成的。

::: tip Note

在过渡到matplotlib 1.0版本时，交互模式相关发生了变化，特别是[``show()``](https://matplotlib.orgapi/_as_gen/matplotlib.pyplot.show.html#matplotlib.pyplot.show)的作用和行为，并且在1.0.1中修复了错误。这里我们描述了主要交互后端1.0.1版本的行为，*macosx*除外。

:::

交互模式通过[``matplotlib.pyplot.ion()``](https://matplotlib.orgapi/_as_gen/matplotlib.pyplot.ion.html#matplotlib.pyplot.ion)打开，通过[``matplotlib.pyplot.ioff()``](https://matplotlib.orgapi/_as_gen/matplotlib.pyplot.ioff.html#matplotlib.pyplot.ioff)关闭

::: tip Note

在ipython和普通的pythonshell中，交互式模式与合适的后端一起工作，但是在空闲IDE中它**不**工作。如果默认后端不支持交互，则可以使用[What is a backend?](#id4)中讨论的任何方法显式激活交互式后端？。

:::

### 交互模式的例子

从一个普通的python提示符，或者在没有选项的情况下调用ipython后，尝试这样做:

``` python
import matplotlib.pyplot as plt
plt.ion()
plt.plot([1.6, 2.7])
```

假设您运行的版本是1.0.1或更高，并且默认安装并选择了交互式后端，您应该会看到一个绘图，并且您的终端提示也应该是激活的；您可以键入其他命令，如:

``` python
plt.title("interactive test")
plt.xlabel("index")
```

您将看到在每一行之后都会更新图像。自从1.5版本以来，通过其他方式修改图像*应该*也会自动更新大多数后端上显示的图像。例如，获取一个[``Axes``](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes)实例的引用，并调用该实例的一个方法:

``` python
ax = plt.gca()
ax.plot([3.1, 2.2])
```

如果使用某些后端(如``macosx``)或较旧版本的matplotlib，可能不会立即看到添加到绘图中的新行。 在这种情况下，您需要显式调用[``draw()``](https://matplotlib.orgapi/_as_gen/matplotlib.pyplot.draw.html#matplotlib.pyplot.draw)来更新绘图:

``` python
plt.draw()
```

### 非交互式的例子

像前面的例子一样开始一个新的会话，但是现在关闭交互模式:

``` python
import matplotlib.pyplot as plt
plt.ioff()
plt.plot([1.6, 2.7])
```

什么也没有发生——或者至少在屏幕上什么也没有显示(除非您使用*macosx*后端，将会抛出异常)。为了使图像出现，你需要这样做:

``` python
plt.show()
```

现在您看到了这个图，但是您的终端命令行没有响应；``show()``命令会阻塞其他命令的输入，直到您手动杀死plot窗口为止。

强制使用阻塞函数有什么好处?假设您需要一个脚本将文件的内容绘制到屏幕上。你想看看图像，然后结束剧本。如果没有show()之类的阻塞命令，脚本就会刷新图像，然后立即结束，在屏幕上什么也不留下。

此外，非交互模式延迟所有绘制直到show()被调用；这比每次脚本中的一行添加新特性时重新绘制图形更有效率。

在1.0版本之前，show()通常不能在单个脚本中被多次调用(尽管有时可以使用它)；对于版本1.0.1和更高版本，这个限制被取消了，所以人们可以这样写一个脚本“

``` python
import numpy as np
import matplotlib.pyplot as plt

plt.ioff()
for i in range(3):
    plt.plot(np.random.rand(10))
    plt.show()
```

将会输出三个图像，一次一个。也就是说，一旦第一个图像关闭，第二个图像就会出现。

### 总结

在交互模式下，pyplot函数会自动绘制到屏幕上。

When plotting interactively, if using
object method calls in addition to pyplot functions, then
call [``draw()``](https://matplotlib.orgapi/_as_gen/matplotlib.pyplot.draw.html#matplotlib.pyplot.draw) whenever you want to
refresh the plot.
在交互绘图时，如果除了使用pyplot函数外还使用了对象方法调用，那么当您想刷新绘图时，请调用[``draw()``](https://matplotlib.orgapi/_as_gen/matplotlib.pyplot.draw.html#matplotlib.pyplot.draw)。

Use non-interactive mode in scripts in which you want to
generate one or more figures and display them before ending
or generating a new set of figures. In that case, use
[``show()``](https://matplotlib.orgapi/_as_gen/matplotlib.pyplot.show.html#matplotlib.pyplot.show) to display the figure(s) and
to block execution until you have manually destroyed them.
当您想要生成一个或多个图形并在结束或生成一组新的图形之前显示它们时，请在脚本中使用非交互模式。在这种情况下，使用[``show()``](https://matplotlib.orgapi/_as_gen/matplotlib.pyplot.show.html#matplotlib.pyplot.show)来显示图并阻止执行，直到您手动销毁它们。

## 性能

无论是以交互模式浏览数据，还是以编程方式保存大量图形，渲染性能都可能是管线中一个令人头疼的瓶颈。Matplotlib提供了两种方法来极大地减少渲染时间，但代价是对绘图的外观进行轻微的更改(对可设置的容忍度)。可用于减少渲染时间的方法取决于所创建的图形的类型。

### 线段简化

对于具有线段的图形(例如典型的线段，多边形的轮廓等)，渲染性能可以通过``matplotlibrc``文件中的``path.simplify``和``path.simplify_threshold``参数简化。(参见[使用样式表和rcParams自定义Matplotlib](customizing.html)获得更多关于``matplotlibrc``文件的信息)。``path.simplify``参数是一个布尔值，指示线段是否被简化。“路径。``path.simplify_threshold``参数控制了多少线段被简化；设置较高的阈值获得更快的渲染速度。

下面的脚本将首先显示不经过任何简化的数据，然后显示相同的经过简化的数据。尝试与他们两个互动:

``` python
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

Matplotlib目前默认为保守的简化阈值``1/9``。如果你想改变你的默认设置来使用一个不同的值，你可以改变你的``matplotlibrc``文件。或者，您可以创建一种新的交互绘图样式(简化程度最高)和另一种样式(简化程度最低)，并根据需要激活它们。有关如何执行这些操作的说明，请参阅[使用样式表和rcParams自定义Matplotlib](customizing.html)。

这种简化的原理是迭代地将线段合并成一个向量，直到下一个线段到向量的垂直距离(在显示坐标空间中测距)大于``path.simplify_threshold``参数。

::: tip Note

在版本2.1中进行了与线段如何简化相关的更改。在2.1版本之前，这些参数仍然会提高渲染时间，但在2.1版本和更大版本中，某些类型数据的渲染时间将会大大提高。

:::

### 标记简化

标记也可以简化，尽管不如线段。仅对[``Line2D``](https://matplotlib.orgapi/_as_gen/matplotlib.lines.Line2D.html#matplotlib.lines.Line2D) 对象适用 (通过``markevery`` 属性). 无论通过[``Line2D``](https://matplotlib.orgapi/_as_gen/matplotlib.lines.Line2D.html#matplotlib.lines.Line2D) 传递构造参数，例如[``matplotlib.pyplot.plot()``](https://matplotlib.orgapi/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot) 和
[``matplotlib.axes.Axes.plot()``](https://matplotlib.orgapi/_as_gen/matplotlib.axes.Axes.plot.html#matplotlib.axes.Axes.plot)，``markevery``参数都可以使用。

``` python
plt.plot(x, y, markevery=10)
```

markevery参数允许简单的子抽样，或者尝试均匀间隔(沿着*x*轴)的抽样。更多信息，请参见[Markevery Demo](https://matplotlib.orggallery/lines_bars_and_markers/markevery_demo.html)。

### 把线分成更小的块

如果你正在使用Agg后端(请参阅[什么是后端?](#what-is-a-backend))，那么你可以使用``agg.path.chunksize``的rc参数。这允许你指定一个块的大小，任何大于这个数目的顶点的线将被分割成多个线，每个线不超过``agg.path.chunksize``的顶点。(除非``agg.path.chunksize``为零，此时不存在分块。)对于某些类型的数据，将线段分成合理的大小可以大大减少渲染时间。

下面的脚本将首先显示没有任何块大小限制的数据，然后绘制块大小为10,000的相同数据。当图形很大的时候，差异就会很明显，试着最大化GUI，然后与它们交互:

``` python
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

axis的默认图例行为试图找到覆盖最少数据点的位置(``loc='best'``)。如果有很多数据点，这将是一个非常耗时的计算。在这种情况下，您可能需要提供一个指定的位置。

### 使用fast样式

使用*fast*风格可自动设置简化和块参数为合理的设置，以加快绘制大量数据。它可以简单使用:

``` python
import matplotlib.style as mplstyle
mplstyle.use('fast')
```

它是非常轻量级的，所以它可以很好地与其他样式混搭，只要确保快速样式是最后应用，这样其他样式不会覆盖设置:

``` python
mplstyle.use(['dark_background', 'ggplot', 'fast'])
```

## 下载

- [Download Python source code: usage.py](https://matplotlib.org/_downloads/841a514c2538fd0de68b22f22b25f56d/usage.py)
- [Download Jupyter notebook: usage.ipynb](https://matplotlib.org/_downloads/16d604c55fb650c0dce205aa67def02b/usage.ipynb)
        