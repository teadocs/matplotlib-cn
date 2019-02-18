# 艺术家对象教程

使用Artist对象在画布上渲染。

matplotlib API有三层。

- ``matplotlib.backend_bases.FigureCanvas`` 是绘制图形的区域。
- ``matplotlib.backend_bases.Renderer`` 是知道如何在FigureCanvas上绘制的对象。
- [matplotlib.artist.Artist](https://matplotlib.org/api/artist_api.html#matplotlib.artist.Artist) 是知道如何使用渲染器绘制到画布上的对象。

``FigureCanvas``和Renderer处理与[wxPython](https://www.wxpython.org/)等用户界面工具包或PostScript®等绘图语言交谈的所有细节，而``Artist``处理所有高级构造，如表示和布置图形，文本和线条。典型的用户将花费95％的时间与``Artists``合作。

``Artists``有两种类型：基元和容器。基元代表我们想要在画布上绘制的标准图形对象：[Line2D](https://matplotlib.org/api/_as_gen/matplotlib.lines.Line2D.html#matplotlib.lines.Line2D), [Rectangle](https://matplotlib.org/api/_as_gen/matplotlib.patches.Rectangle.html#matplotlib.patches.Rectangle), [Text](https://matplotlib.org/api/text_api.html#matplotlib.text.Text), [AxesImage](https://matplotlib.org/api/image_api.html#matplotlib.image.AxesImage)等，容器是放置它们的位置（[Axis](https://matplotlib.org/api/axis_api.html#matplotlib.axis.Axis), [Axes](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes)和[Figure](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure)）。 标准用法是创建一个[Figure](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure) 实例，使用Figure创建一个或多个[Axes](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes)或Subplot实例，并使用Axes实例辅助方法创建基元。 在下面的示例中，我们使用[matplotlib.pyplot.figure()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.figure.html#matplotlib.pyplot.figure)创建一个[Figure](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure)实例，这是一个方便的方法，用于实例化图实例并将它们与您的用户界面或绘图工具包FigureCanvas连接。正如我们将在下面讨论的那样，这不是必需的 - 你可以直接使用PostScript，PDF Gtk +或wxPython FigureCanvas实例，直接实例化你的数字并自己连接它们 - 但是因为我们专注于Artist API我们将会 让[pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot)为我们处理一些细节：

```python
import matplotlib.pyplot as plt
fig = plt.figure()
ax = fig.add_subplot(2,1,1) # two rows, one column, first plot
```

[Axes](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes)可能是matplotlib API中最重要的类，也是您大部分时间都在使用的类。 这是因为Axes是大多数对象所在的绘图区域，Axes有许多特殊的辅助方法（[plot()](https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.plot.html#matplotlib.axes.Axes.plot), [text()](https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.text.html#matplotlib.axes.Axes.text), [hist()](https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.hist.html#matplotlib.axes.Axes.hist), [imshow()](https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.imshow.html#matplotlib.axes.Axes.imshow)）来创建最常见的图形基元（[Line2D](https://matplotlib.org/api/_as_gen/matplotlib.lines.Line2D.html#matplotlib.lines.Line2D), [Text](https://matplotlib.org/api/text_api.html#matplotlib.text.Text), [Rectangle](https://matplotlib.org/api/_as_gen/matplotlib.patches.Rectangle.html#matplotlib.patches.Rectangle)，Image，分别）。这些辅助方法将获取您的数据（例如，numpy数组和字符串）并根据需要创建原始Artist实例（例如，Line2D），将它们添加到相关容器，并在请求时绘制它们。 你们大多数人可能都熟悉Subplot，这只是一个Axe的一个特例，它存在于Subplot实例的逐行列网格中。 如果要在任意位置创建Axes，只需使用[add_axes()](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure.add_axes)方法，该方法采用0-1相对图形坐标中的[left，bottom，width，height]值列表：

```python
fig2 = plt.figure()
ax2 = fig2.add_axes([0.15, 0.1, 0.7, 0.3])
```

继续我们的例子：

```python
import numpy as np
t = np.arange(0.0, 1.0, 0.01)
s = np.sin(2*np.pi*t)
line, = ax.plot(t, s, color='blue', lw=2)
```

在这个例子中，``ax`` 是上面的 ``fig.add_subplot`` 调用创建的Axes实例（记住Subplot只是Axes的子类），当你调用 ``ax.plot``时，它会创建一个 ``Line2D`` 实例并将其添加到Axes.lines列表中。在下面的交互式[ipython](http://ipython.org/)会话中，您可以看到 ``Axes.lines`` 列表的长度为1，并且包含该行返回的 ``line, = ax.plot...``，调用：

```python
In [101]: ax.lines[0]
Out[101]: <matplotlib.lines.Line2D instance at 0x19a95710>

In [102]: line
Out[102]: <matplotlib.lines.Line2D instance at 0x19a95710>
```

如果您对ax.plot进行后续调用（并且保持状态为“on”，这是默认值），则会向列表中添加其他行。您可以稍后通过调用list方法删除行; 其中任何一个都可行：

```python
del ax.lines[0]
ax.lines.remove(line)  # one or the other, not both!
```

Axes还有辅助方法来配置和装饰x轴和y轴刻度线，刻度标签和轴标签：

```python
xtext = ax.set_xlabel('my xdata') # returns a Text instance
ytext = ax.set_ylabel('my ydata')
```

当您调用[ax.set_xlabel](https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_xlabel.html#matplotlib.axes.Axes.set_xlabel)时，它会传递[XAxis](https://matplotlib.org/api/axis_api.html#matplotlib.axis.XAxis)的[Text](https://matplotlib.org/api/text_api.html#matplotlib.text.Text) 实例上的信息。每个Axes实例都包含一个[XAxis](https://matplotlib.org/api/axis_api.html#matplotlib.axis.XAxis)和一个[YAxis](https://matplotlib.org/api/axis_api.html#matplotlib.axis.YAxis) 实例，用于处理刻度，刻度标签和轴标签的布局和绘图。

尝试创建下图。

```python
import numpy as np
import matplotlib.pyplot as plt

fig = plt.figure()
fig.subplots_adjust(top=0.8)
ax1 = fig.add_subplot(211)
ax1.set_ylabel('volts')
ax1.set_title('a sine wave')

t = np.arange(0.0, 1.0, 0.01)
s = np.sin(2*np.pi*t)
line, = ax1.plot(t, s, color='blue', lw=2)

# Fixing random state for reproducibility
np.random.seed(19680801)

ax2 = fig.add_axes([0.15, 0.1, 0.7, 0.3])
n, bins, patches = ax2.hist(np.random.randn(1000), 50,
                            facecolor='yellow', edgecolor='yellow')
ax2.set_xlabel('time (s)')

plt.show()
```

![艺术家对象教程示例](/static/images/tutorials/sphx_glr_artists_001.png)

## 自定义对象

图中的每个元素都由matplotlib [Artist](https://matplotlib.org/api/artist_api.html#matplotlib.artist.Artist)表示，每个元素都有一个广泛的属性列表来配置它的外观。 图形本身包含一个与图形大小完全相同的矩形，您可以使用它来设置图形的背景颜色和透明度。同样，每个[Axes](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes)边界框（典型matplotlib图中带有黑色边的标准白色框，都有一个[Rectangle](https://matplotlib.org/api/_as_gen/matplotlib.patches.Rectangle.html#matplotlib.patches.Rectangle)实例，用于确定Axes的颜色，透明度和其他属性。这些实例存储为成员变量Figure.patch和Axes.patch（“Patch”是一个继承自MATLAB的名称，是图中颜色的2D“补丁”，例如矩形，圆形和多边形）。每个matplotlib Artist都具有以下属性

属性 | 描述
---|---
alpha | 透明度 - 0-1的标量
animated | 一种用于促进动画绘制的布尔值。
axes | Artist对象载体轴，可能是None。
clip_box | 一种裁剪Artist对象的边界边框。
clip_on | 是否启用剪裁
clip_path | Artist剪辑的路径
contains | 用于测试Artist是否包含拾取点的拾取功能
figure | Artist对象实例的载体，可能是None。
label | 文本标签（例如，用于自动标记）。
picker | 控制对象拾取的python对象
transform | 转化
visible | 一个布尔值是否应该绘制Artist
zorder | 确定绘图顺序的数字
rasterized | 布尔; 将矢量转换为栅格图形:(用于压缩和eps透明度）

每个属性都使用老式的setter或getter访问（是的，我们知道这会激怒Pythonistas，我们计划通过属性或特性支持直接访问，但尚未完成）。例如，要将当前的alpha乘以一半：

```python
a = o.get_alpha()
o.set_alpha(0.5*a)
```

如果要一次设置多个属性，还可以将set方法与关键字参数一起使用。例如：

```python
o.set(alpha=0.5, zorder=2)
```

如果你在python shell上以交互方式工作，检查Artist属性的一种方便方法是使用[matplotlib.artist.getp()](https://matplotlib.org/api/_as_gen/matplotlib.artist.getp.html#matplotlib.artist.getp)函数（简单地在pyplot中使用getp()），它列出了属性及其值。从Artist派生的类，例如，图和矩形。以下是上面提到的图形矩形属性：

```python
In [149]: matplotlib.artist.getp(fig.patch)
    alpha = 1.0
    animated = False
    antialiased or aa = True
    axes = None
    clip_box = None
    clip_on = False
    clip_path = None
    contains = None
    edgecolor or ec = w
    facecolor or fc = 0.75
    figure = Figure(8.125x6.125)
    fill = 1
    hatch = None
    height = 1
    label =
    linewidth or lw = 1.0
    picker = None
    transform = <Affine object at 0x134cca84>
    verts = ((0, 0), (0, 1), (1, 1), (1, 0))
    visible = True
    width = 1
    window_extent = <Bbox object at 0x134acbcc>
    x = 0
    y = 0
    zorder = 1
```

所有类的文档字符串也包含Artist属性，因此您可以查看交互式“帮助”或[artist](https://matplotlib.org/api/artist_api.html#artist-api)以获取给定对象的属性列表。

## 对象容器

现在我们知道如何检查和设置我们想要配置的给定对象的属性，我们需要知道如何获取该对象。 如介绍中所述，有两种对象：基元和容器。 基元通常是你想要配置的东西（[Text](https://matplotlib.org/api/text_api.html#matplotlib.text.Text)实例的字体，[Line2D](https://matplotlib.org/api/_as_gen/matplotlib.lines.Line2D.html#matplotlib.lines.Line2D)的宽度），虽然容器也有一些属性 - 例如[Axes](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes) [Artist](https://matplotlib.org/api/artist_api.html#matplotlib.artist.Artist)是一个包含许多基元的容器 你的情节，但它也有像xscale这样的属性来控制x轴是“线性”还是“日志”。 在本节中，我们将回顾各种容器对象存储您想要获得的艺术家的位置。

### 图容器

顶级容器Artist是[matplotlib.figure.Figure](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure)，它包含图中的所有内容。图的背景是一个存储在Figure.patch中的[Rectangle](https://matplotlib.org/api/_as_gen/matplotlib.patches.Rectangle.html#matplotlib.patches.Rectangle)。在向图中添加子图（[add_subplot()](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure.add_subplot)）和轴（[add_axes()](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure.add_axes)）时，这些将附加到[Figure.axes](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure.axes)。 这些也由创建它们的方法返回：

```python
In [156]: fig = plt.figure()

In [157]: ax1 = fig.add_subplot(211)

In [158]: ax2 = fig.add_axes([0.1, 0.1, 0.7, 0.3])

In [159]: ax1
Out[159]: <matplotlib.axes.Subplot instance at 0xd54b26c>

In [160]: print(fig.axes)
[<matplotlib.axes.Subplot instance at 0xd54b26c>, <matplotlib.axes.Axes instance at 0xd3f0b2c>]
```

因为该图保持了“当前轴”的概念（参见[Figure.gca](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure.gca)和[Figure.sca](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure.sca)）以支持pylab/pyplot状态机，所以不应直接从轴列表中插入或删除轴，而应使用[add_subplot()](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure.add_subplot)和[add_axes()](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure.add_axes)方法插入，以及[delaxes()](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure.delaxes)方法删除。但是，您可以自由地遍历轴列表或索引到其中以访问要自定义的Axes实例。这是一个打开所有轴网格的示例：

```python
for ax in fig.axes:
    ax.grid(True)
```

该图还有自己的文本，线条，面片和图像，您可以使用它们直接添加图元。``Figure``的默认坐标系统将以像素为单位（通常不是您想要的），但您可以通过设置要添加到图中的``Artist``的transform属性来控制它。

更有用的是“图形坐标”，其中(0, 0)是图的左下角， (1, 1) 是图的右上角，您可以通过将``Artist``变换设置为``fig.transFigure``来获得：

```python
import matplotlib.lines as lines

fig = plt.figure()

l1 = lines.Line2D([0, 1], [0, 1], transform=fig.transFigure, figure=fig)
l2 = lines.Line2D([0, 1], [1, 0], transform=fig.transFigure, figure=fig)
fig.lines.extend([l1, l2])

plt.show()
```

![艺术家对象教程示例2](/static/images/tutorials/sphx_glr_artists_002.png)

以下是该图所包含的Artists的摘要。

图属性 | 描述
---|---
axes | Axes实例列表（包括Subplot）
patch | 矩形背景
images | ImageImages补丁列表 - 对原始像素显示很有用
legends | 图例实例列表（与Axes.legends不同）
lines | 图Line2D实例列表（很少使用，请参阅Axes.lines）
patches | 图补丁列表（很少使用，请参阅Axes.patches）
texts | 列表图文本实例

### 轴容器

The [matplotlib.axes.Axes](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes) is the center of the matplotlib universe -- it contains the vast majority of all the Artists used in a figure with many helper methods to create and add these Artists to itself, as well as helper methods to access and customize the Artists it contains. Like the [Figure](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure), it contains a [Patch](https://matplotlib.org/api/_as_gen/matplotlib.patches.Patch.html#matplotlib.patches.Patch) patch which is a [Rectangle](https://matplotlib.org/api/_as_gen/matplotlib.patches.Rectangle.html#matplotlib.patches.Rectangle) for Cartesian coordinates and a [Circle](https://matplotlib.org/api/_as_gen/matplotlib.patches.Circle.html#matplotlib.patches.Circle) for polar coordinates; this patch determines the shape, background and border of the plotting region:

```python
ax = fig.add_subplot(111)
rect = ax.patch  # a Rectangle instance
rect.set_facecolor('green')
```

When you call a plotting method, e.g., the canonical [plot()](https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.plot.html#matplotlib.axes.Axes.plot) and pass in arrays or lists of values, the method will create a [matplotlib.lines.Line2D()](https://matplotlib.org/api/_as_gen/matplotlib.lines.Line2D.html#matplotlib.lines.Line2D) instance, update the line with all the Line2D properties passed as keyword arguments, add the line to the Axes.lines container, and returns it to you:

```python
In [213]: x, y = np.random.rand(2, 100)

In [214]: line, = ax.plot(x, y, '-', color='blue', linewidth=2)
```

plot returns a list of lines because you can pass in multiple x, y pairs to plot, and we are unpacking the first element of the length one list into the line variable. The line has been added to the Axes.lines list:

```python
In [229]: print(ax.lines)
[<matplotlib.lines.Line2D instance at 0xd378b0c>]
```

Similarly, methods that create patches, like [bar()](https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.bar.html#matplotlib.axes.Axes.bar) creates a list of rectangles, will add the patches to the Axes.patches list:

```python
In [233]: n, bins, rectangles = ax.hist(np.random.randn(1000), 50, facecolor='yellow')

In [234]: rectangles
Out[234]: <a list of 50 Patch objects>

In [235]: print(len(ax.patches))
```

You should not add objects directly to the ``Axes.lines`` or ``Axes.patches`` lists unless you know exactly what you are doing, because the Axes needs to do a few things when it creates and adds an object. It sets the figure and axes property of the ``Artist``, as well as the default Axes transformation (unless a transformation is set). It also inspects the data contained in the Artist to update the data structures controlling auto-scaling, so that the view limits can be adjusted to contain the plotted data. You can, nonetheless, create objects yourself and add them directly to the Axes using helper methods like [add_line()](https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.add_line.html#matplotlib.axes.Axes.add_line) [and add_patch()](https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.add_patch.html#matplotlib.axes.Axes.add_patch). Here is an annotated interactive session illustrating what is going on:

```python
In [262]: fig, ax = plt.subplots()

# create a rectangle instance
In [263]: rect = matplotlib.patches.Rectangle( (1,1), width=5, height=12)

# by default the axes instance is None
In [264]: print(rect.get_axes())
None

# and the transformation instance is set to the "identity transform"
In [265]: print(rect.get_transform())
<Affine object at 0x13695544>

# now we add the Rectangle to the Axes
In [266]: ax.add_patch(rect)

# and notice that the ax.add_patch method has set the axes
# instance
In [267]: print(rect.get_axes())
Axes(0.125,0.1;0.775x0.8)

# and the transformation has been set too
In [268]: print(rect.get_transform())
<Affine object at 0x15009ca4>

# the default axes transformation is ax.transData
In [269]: print(ax.transData)
<Affine object at 0x15009ca4>

# notice that the xlimits of the Axes have not been changed
In [270]: print(ax.get_xlim())
(0.0, 1.0)

# but the data limits have been updated to encompass the rectangle
In [271]: print(ax.dataLim.bounds)
(1.0, 1.0, 5.0, 12.0)

# we can manually invoke the auto-scaling machinery
In [272]: ax.autoscale_view()

# and now the xlim are updated to encompass the rectangle
In [273]: print(ax.get_xlim())
(1.0, 6.0)

# we have to manually force a figure draw
In [274]: ax.figure.canvas.draw()
```

There are many, many ``Axes`` helper methods for creating primitive ``Artists`` and adding them to their respective containers. The table below summarizes a small sampling of them, the kinds of ``Artist`` they create, and where they store them

Helper method | Artist | Container
---|---|----
ax.annotate - text annotations | Annotate | ax.texts
ax.bar - bar charts | Rectangle | ax.patches
ax.errorbar - error bar plots | Line2D and Rectangle | ax.lines and ax.patches
ax.fill - shared area | Polygon | ax.patches
ax.hist - histograms | Rectangle | ax.patches
ax.imshow - image data | AxesImage | ax.images
ax.legend - axes legends | Legend | ax.legends
ax.plot - xy plots | Line2D | ax.lines
ax.scatter - scatter charts | PolygonCollection | ax.collections
ax.text - text | Text | ax.texts

In addition to all of these ``Artists``, the Axes contains two important ``Artist`` containers: the [XAxis](https://matplotlib.org/api/axis_api.html#matplotlib.axis.XAxis) and [YAxis](https://matplotlib.org/api/axis_api.html#matplotlib.axis.YAxis), which handle the drawing of the ticks and labels. These are stored as instance variables ``xaxis`` and ``yaxis``. The XAxis and YAxis containers will be detailed below, but note that the Axes contains many helper methods which forward calls on to the [Axis](https://matplotlib.org/api/axis_api.html#matplotlib.axis.Axis) instances so you often do not need to work with them directly unless you want to. For example, you can set the font color of the XAxis ticklabels using the Axes helper method:

```python
for label in ax.get_xticklabels():
    label.set_color('orange')
```

Below is a summary of the Artists that the Axes contains

Axes attribute | Description
---|---
artists | A list of Artist instances
patch | Rectangle instance for Axes background
collections | A list of Collection instances
images | A list of AxesImage
legends | A list of Legend instances
lines | A list of Line2D instances
patches | A list of Patch instances
texts | A list of Text instances
xaxis | matplotlib.axis.XAxis instance
yaxis | matplotlib.axis.YAxis instance

### Axis containers

The [matplotlib.axis.Axis](https://matplotlib.org/api/axis_api.html#matplotlib.axis.Axis) instances handle the drawing of the tick lines, the grid lines, the tick labels and the axis label. You can configure the left and right ticks separately for the y-axis, and the upper and lower ticks separately for the x-axis. The Axis also stores the data and view intervals used in auto-scaling, panning and zooming, as well as the [Locator](https://matplotlib.org/api/ticker_api.html#matplotlib.ticker.Locator) and [Formatter](https://matplotlib.org/api/ticker_api.html#matplotlib.ticker.Formatter) instances which control where the ticks are placed and how they are represented as strings.

Each Axis object contains a label attribute (this is what [pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot) modifies in calls to [xlabel()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.xlabel.html#matplotlib.pyplot.xlabel) and [ylabel()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.ylabel.html#matplotlib.pyplot.ylabel) ) as well as a list of major and minor ticks. The ticks are [XTick](https://matplotlib.org/api/axis_api.html#matplotlib.axis.XTick) and [YTick](https://matplotlib.org/api/axis_api.html#matplotlib.axis.YTick) instances, which contain the actual line and text primitives that render the ticks and ticklabels. Because the ticks are dynamically created as needed (e.g., when panning and zooming), you should access the lists of major and minor ticks through their accessor methods [get_major_ticks()](https://matplotlib.org/api/_as_gen/matplotlib.axis.Axis.get_major_ticks.html#matplotlib.axis.Axis.get_major_ticks) and [get_minor_ticks()](https://matplotlib.org/api/_as_gen/matplotlib.axis.Axis.get_minor_ticks.html#matplotlib.axis.Axis.get_minor_ticks). Although the ticks contain all the primitives and will be covered below, Axis instances have accessor methods that return the tick lines, tick labels, tick locations etc.:

```python
fig, ax = plt.subplots()
axis = ax.xaxis
axis.get_ticklocs()
```

![艺术家对象教程示例3](/static/images/tutorials/sphx_glr_artists_003.png)

```python
axis.get_ticklabels()
```

note there are twice as many ticklines as labels because by
default there are tick lines at the top and bottom but only tick labels below the xaxis; this can be customized

```python
axis.get_ticklines()
```

by default you get the major ticks back

```python
axis.get_ticklines()
```

but you can also ask for the minor ticks

```python
axis.get_ticklines(minor=True)

# Here is a summary of some of the useful accessor methods of the ``Axis``
# (these have corresponding setters where useful, such as
# set_major_formatter)
#
# ======================  =========================================================
# Accessor method         Description
# ======================  =========================================================
# get_scale               The scale of the axis, e.g., 'log' or 'linear'
# get_view_interval       The interval instance of the axis view limits
# get_data_interval       The interval instance of the axis data limits
# get_gridlines           A list of grid lines for the Axis
# get_label               The axis label - a Text instance
# get_ticklabels          A list of Text instances - keyword minor=True|False
# get_ticklines           A list of Line2D instances - keyword minor=True|False
# get_ticklocs            A list of Tick locations - keyword minor=True|False
# get_major_locator       The matplotlib.ticker.Locator instance for major ticks
# get_major_formatter     The matplotlib.ticker.Formatter instance for major ticks
# get_minor_locator       The matplotlib.ticker.Locator instance for minor ticks
# get_minor_formatter     The matplotlib.ticker.Formatter instance for minor ticks
# get_major_ticks         A list of Tick instances for major ticks
# get_minor_ticks         A list of Tick instances for minor ticks
# grid                    Turn the grid on or off for the major or minor ticks
# ======================  =========================================================
#
# Here is an example, not recommended for its beauty, which customizes
# the axes and tick properties

# plt.figure creates a matplotlib.figure.Figure instance
fig = plt.figure()
rect = fig.patch  # a rectangle instance
rect.set_facecolor('lightgoldenrodyellow')

ax1 = fig.add_axes([0.1, 0.3, 0.4, 0.4])
rect = ax1.patch
rect.set_facecolor('lightslategray')


for label in ax1.xaxis.get_ticklabels():
    # label is a Text instance
    label.set_color('red')
    label.set_rotation(45)
    label.set_fontsize(16)

for line in ax1.yaxis.get_ticklines():
    # line is a Line2D instance
    line.set_color('green')
    line.set_markersize(25)
    line.set_markeredgewidth(3)

plt.show()
```

![艺术家对象教程示例4](/static/images/tutorials/sphx_glr_artists_004.png)

### Tick containers
The [matplotlib.axis.Tick](https://matplotlib.org/api/axis_api.html#matplotlib.axis.Tick) is the final container object in our descent from the [Figure](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure) to the [Axes](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes) to the [Axis](https://matplotlib.org/api/axis_api.html#matplotlib.axis.Axis) to the [Tick](https://matplotlib.org/api/axis_api.html#matplotlib.axis.Tick). The Tick contains the tick and grid line instances, as well as the label instances for the upper and lower ticks. Each of these is accessible directly as an attribute of the Tick. In addition, there are boolean variables that determine whether the upper labels and ticks are on for the x-axis and whether the right labels and ticks are on for the y-axis.

Tick attribute | Description
---|---
tick1line | Line2D instance
tick2line | Line2D instance
gridline | Line2D instance
label1 | Text instance
label2 | Text instance
gridOn | boolean which determines whether to draw the gridline
tick1On | boolean which determines whether to draw the 1st tickline
tick2On | boolean which determines whether to draw the 2nd tickline
label1On | boolean which determines whether to draw the 1st tick label
label2On | boolean which determines whether to draw the 2nd tick label

Here is an example which sets the formatter for the right side ticks with dollar signs and colors them green on the right side of the yaxis

```python
import matplotlib.ticker as ticker

# Fixing random state for reproducibility
np.random.seed(19680801)

fig, ax = plt.subplots()
ax.plot(100*np.random.rand(20))

formatter = ticker.FormatStrFormatter('$%1.2f')
ax.yaxis.set_major_formatter(formatter)

for tick in ax.yaxis.get_major_ticks():
    tick.label1On = False
    tick.label2On = True
    tick.label2.set_color('green')

plt.show()
```

![艺术家对象教程示例5](/static/images/tutorials/sphx_glr_artists_005.png)

## 下载本文的所有示例

- [下载python源码: artists.py](https://matplotlib.org/_downloads/c6657faec2838598812ce671c10b3eb3/artists.py)
- [下载Jupyter notebook: artists.ipynb](https://matplotlib.org/_downloads/ccd74b035d9ad8dfe4110ae637cb61a6/artists.ipynb)