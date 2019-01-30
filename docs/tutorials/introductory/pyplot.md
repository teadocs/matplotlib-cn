# Pyplot 教程

关于pylot接口的介绍。

## pyplot 简介

[matplotlib.pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot) 是命令样式函数的集合，使matplotlib像MATLAB一样工作。 每个pyplot函数对图形进行一些更改：例如，创建图形，在图形中创建绘图区域，在绘图区域中绘制一些线条，用标签装饰图形等。

在[matplotlib.pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot)中，各种状态在函数调用中保留，以便跟踪当前图形和绘图区域等内容，并且绘图函数指向当前轴（请注意“轴”在此处以及在大多数位置 文档是指[图形的轴部分](https://matplotlib.org/tutorials/introductory/usage.html#figure-parts)，而不是多个轴的严格数学术语。


**注意**: pyplot API通常不如面向对象的API灵活。您在此处看到的大多数函数调用也可以作为Axes对象中的方法调用。 我们建议您浏览教程和示例以了解其工作原理。

使用pyplot生成可视化非常快速：

```python
import matplotlib.pyplot as plt
plt.plot([1, 2, 3, 4])
plt.ylabel('some numbers')
plt.show()
```

![绘制的一张图](/static/images/tutorials/sphx_glr_pyplot_001.png)

您可能想知道为什么x轴的范围是0-3，y轴的范围是1-4。如果为[plot()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot)命令提供单个列表或数组，则matplotlib假定它是一系列y值，并自动为您生成x值。由于python范围以0开头，因此默认的x向量与y具有相同的长度，但从0开始。因此x数据为 ``[0,1,2,3]``。

[plot()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot) 是一个多功能命令，将采用任意数量的参数。 例如，要绘制x与y的关系，您可以发出命令：

```python
plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
```

![绘制的一张折线图2](/static/images/tutorials/sphx_glr_pyplot_002.png)

## 格式化绘图的样式

对于每对x，y对的参数，有一个可选的第三个参数，它是指示绘图的颜色和线型的格式字符串。格式字符串的字母和符号来自MATLAB，您可以将颜色字符串与线型字符串连接起来。默认格式字符串为“b-”，为蓝色实线。例如，要用红色圆圈绘制上述内容，您将发出：

```python
plt.plot([1, 2, 3, 4], [1, 4, 9, 16], 'ro')
plt.axis([0, 6, 0, 20])
plt.show()
```

![绘制的一张散点图3](/static/images/tutorials/sphx_glr_pyplot_003.png)

有关线型和格式字符串的完整列表，请参阅 [plot()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot) 文档。 上例中的 [axis()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.axis.html#matplotlib.pyplot.axis) 命令采用 ``[xmin, xmax, ymin, ymax]`` 列表并指定轴的视口。

如果matplotlib仅限于使用列表，那么数字处理将毫无用处。通常，您将使用numpy数组。实际上，所有序列都在内部转换为numpy数组。 下面的示例说明了使用数组在一个命令中绘制具有不同格式样式的多行。

```python
import numpy as np

# evenly sampled time at 200ms intervals
t = np.arange(0., 5., 0.2)

# red dashes, blue squares and green triangles
plt.plot(t, t, 'r--', t, t**2, 'bs', t, t**3, 'g^')
plt.show()
```

![绘制的一张符号散点图](/static/images/tutorials/sphx_glr_pyplot_004.png)

## 使用关键字字符串绘图

在某些情况下，您可以使用允许您使用字符串访问特定变量的格式的数据。例如，使用 [numpy.recarray](https://docs.scipy.org/doc/numpy/reference/generated/numpy.recarray.html#numpy.recarray) 或[pandas.DataFrame](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.html#pandas.DataFrame)。

Matplotlib允许您使用data关键字参数提供此类对象。如果提供，那么您可以生成包含与这些变量对应的字符串的图。

```python
data = {'a': np.arange(50),
        'c': np.random.randint(0, 50, 50),
        'd': np.random.randn(50)}
data['b'] = data['a'] + 10 * np.random.randn(50)
data['d'] = np.abs(data['d']) * 100

plt.scatter('a', 'b', c='c', s='d', data=data)
plt.xlabel('entry a')
plt.ylabel('entry b')
plt.show()
```

![绘制的一张大小不一散点图](/static/images/tutorials/sphx_glr_pyplot_005.png)

## 用分类变量绘图

也可以使用分类变量创建绘图。Matplotlib允许您将分类变量直接传递给许多绘图函数。例如：

```python
names = ['group_a', 'group_b', 'group_c']
values = [1, 10, 100]

plt.figure(1, figsize=(9, 3))

plt.subplot(131)
plt.bar(names, values)
plt.subplot(132)
plt.scatter(names, values)
plt.subplot(133)
plt.plot(names, values)
plt.suptitle('Categorical Plotting')
plt.show()
```

![绘制子图](/static/images/tutorials/sphx_glr_pyplot_006.png)

## 控制线的属性

线可以设置许多属性：linewidth，dash style，antialiased等; 请参阅 [matplotlib.lines.Line2D](https://matplotlib.org/api/_as_gen/matplotlib.lines.Line2D.html#matplotlib.lines.Line2D)。 有几种方法可以设置线属性。

- 使用关键字args：
    ```python
    plt.plot(x, y, linewidth=2.0)
    ```
- 使用Line2D实例的setter方法。 plot返回Line2D对象列表; 例如，line1，line2 = plot（x1，y1，x2，y2）。 在下面的代码中，我们假设我们只有一行，因此返回的列表的长度为1.我们使用tuple解压缩为line，以获取该列表的第一个元素：
    ```python
    line, = plt.plot(x, y, '-')
    line.set_antialiased(False) # turn off antialising
    ```
- 使用 [setp()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.setp.html#matplotlib.pyplot.setp) 命令。 下面的示例使用MATLAB样式命令在行列表上设置多个属性。setp透明地使用对象列表或单个对象。您可以使用python关键字参数或MATLAB样式的字符串/值对：
    ```python
    lines = plt.plot(x1, y1, x2, y2)
    # use keyword args
    plt.setp(lines, color='r', linewidth=2.0)
    # or MATLAB style string value pairs
    plt.setp(lines, 'color', 'r', 'linewidth', 2.0)
    ```

以下是可用的[Line2D](https://matplotlib.org/api/_as_gen/matplotlib.lines.Line2D.html#matplotlib.lines.Line2D)属性。

属性 | 值类型
---|---
alpha | float
animated | [True \| False]
antialiased 或 aa | [True \| False]
clip_box | matplotlib.transform.Bbox实例
clip_on | [True \| False]
clip_path | 路径实例和变换实例(修补程序)
color 或 c | 任何Matplotlib颜色
contains | the hit testing function
dash_capstyle | ['butt' \| 'round' \| 'projecting']
dash_joinstyle | ['miter' \| 'round' \| 'bevel']
dashes | 以点为单位的开/关油墨顺序
data | (np.array xdata, np.array ydata)
figure | matplotlib.quire.Figure实例
label | 任何字符串
linestyle or ls | [ '-' \| '--' \| '-.' \| ':' \| 'steps' \| ...]
linewidth or lw | 浮点值
lod | [True \| False]
marker | [ '+' \| ',' \| '.' \| '1' \| '2' \| '3' \| '4' ]
markeredgecolor or mec | 任何Matplotlib颜色
markeredgewidth or mew | 浮点值
markerfacecolor or mfc | 任何Matplotlib颜色
markersize or ms | 浮点数
markevery | [ None \| integer \| (startind, stride) ]
picker | 用于交互式选线
pickradius | 线拾取选择半径
solid_capstyle | ['butt' \| 'round' \| 'projecting']
solid_joinstyle | ['miter' \| 'round' \| 'bevel']
transform | matplotlib.transforms.Transform实例
visible | [True \| False]
xdata | np.array
ydata | np.array
zorder | 任意数字

若要获取可设置行属性的列表，请使用一行或多行作为参数调用[setp()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.setp.html#matplotlib.pyplot.setp) 函数。

```python
In [69]: lines = plt.plot([1, 2, 3])

In [70]: plt.setp(lines)
  alpha: float
  animated: [True | False]
  antialiased or aa: [True | False]
  ...snip
```

## 使用多个图形和轴

MATLAB和[pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot)，都有当前图形和当前轴的概念。所有打印命令都适用于当前轴。函数[gca()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.gca.html#matplotlib.pyplot.gca) 返回当前轴([matplotlib.axes.Axes](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes)实例)，[gcf()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.gcf.html#matplotlib.pyplot.gcf) 返回当前地物([matplotlib.figure.Figure](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure)实例)。通常情况下，你不必担心这一点，因为这一切都是在幕后处理的。下面是创建两个子图的脚本。

```python
def f(t):
    return np.exp(-t) * np.cos(2*np.pi*t)

t1 = np.arange(0.0, 5.0, 0.1)
t2 = np.arange(0.0, 5.0, 0.02)

plt.figure(1)
plt.subplot(211)
plt.plot(t1, f(t1), 'bo', t2, f(t2), 'k')

plt.subplot(212)
plt.plot(t2, np.cos(2*np.pi*t2), 'r--')
plt.show()
```

![图例](/static/images/tutorials/sphx_glr_pyplot_007.png)

这里的 [figure()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.figure.html#matplotlib.pyplot.figure) 命令是可选的，因为默认情况下将创建 ``figure(1)``，就像默认情况下创建 ``subplot(111)`` 一样，如果不手动指定任何轴。[subplot()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.subplot.html#matplotlib.pyplot.subplot)命令指定``numrows``, ``numcols``, ``plot_number``，其中 ``plot_number`` 的范围 ``从1到numrows*numcols``。如果 ``numrows * numcols <10``，则subplot命令中的逗号是可选的。因此 ``subplot(211)`` 与 ``subplot(2, 1, 1)`` 相同。

您可以创建任意数量的子图和轴。如果要手动放置轴，即不在矩形网格上，请使用 axes() 命令，该命令允许您将位置指定为``axes([left，bottom，width，height])``，其中所有值均为小数（0到1）坐标。有关手动放置轴的示例，请参阅[Axes Demo](https://matplotlib.org/gallery/subplots_axes_and_figures/axes_demo.html);有关具有大量子图的示例，请参阅 [Basic Subplot Demo](https://matplotlib.org/gallery/subplots_axes_and_figures/subplot_demo.html)。

您可以使用具有增加的图号的多个[figure()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.figure.html#matplotlib.pyplot.figure) 调用来创建多个数字。当然，每个图形可以包含您心中所需的轴和子图：

```python
import matplotlib.pyplot as plt
plt.figure(1)                # the first figure
plt.subplot(211)             # the first subplot in the first figure
plt.plot([1, 2, 3])
plt.subplot(212)             # the second subplot in the first figure
plt.plot([4, 5, 6])


plt.figure(2)                # a second figure
plt.plot([4, 5, 6])          # creates a subplot(111) by default

plt.figure(1)                # figure 1 current; subplot(212) still current
plt.subplot(211)             # make subplot(211) in figure1 current
plt.title('Easy as 1, 2, 3') # subplot 211 title
```

您可以使用 [clf()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.clf.html#matplotlib.pyplot.clf) 清除当前图形，使用 [cla()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.cla.html#matplotlib.pyplot.cla) 清除当前轴。如果您发现在幕后为您维护状态（特别是当前图像，图形和轴）很烦人，请不要绝望：这只是围绕面向对象API的瘦状态包装器，您可以使用它（见[Artist tutorial](https://matplotlib.org/tutorials/intermediate/artists.html)）

如果你要制作大量的图像，你还需要注意一件事：在用 [close()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.close.html#matplotlib.pyplot.close) 显式关闭数字之前，数字所需的内存不会完全释放。删除对图的所有引用，和/或使用窗口管理器来杀死屏幕上出现图形的窗口是不够的，因为pyplot会保持内部引用，直到调用[close()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.close.html#matplotlib.pyplot.close)。

## 使用文本

[text()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.text.html#matplotlib.pyplot.text) 命令可用于在任意位置添加文本，而[xlabel()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.xlabel.html#matplotlib.pyplot.xlabel), [ylabel()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.ylabel.html#matplotlib.pyplot.ylabel) 和 [title()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.title.html#matplotlib.pyplot.title) 用于在指定位置添加文本(有关更详细的示例，请参见Matplotlib图中的文本)

```python
mu, sigma = 100, 15
x = mu + sigma * np.random.randn(10000)

# the histogram of the data
n, bins, patches = plt.hist(x, 50, density=1, facecolor='g', alpha=0.75)


plt.xlabel('Smarts')
plt.ylabel('Probability')
plt.title('Histogram of IQ')
plt.text(60, .025, r'$\mu=100,\ \sigma=15$')
plt.axis([40, 160, 0, 0.03])
plt.grid(True)
plt.show()
```

![图例](/static/images/tutorials/sphx_glr_pyplot_008.png)

所有[text()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.text.html#matplotlib.pyplot.text) 命令都返回一个[matplotlib.text.Text](https://matplotlib.org/api/text_api.html#matplotlib.text.Text)实例。与上面的行一样，您可以通过将关键字参数传递给文本函数或使用[setp()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.setp.html#matplotlib.pyplot.setp)来自定义属性：

```python
t = plt.xlabel('my data', fontsize=14, color='red')
```

[文本属性和布局](https://matplotlib.org/tutorials/text/text_props.html)中更详细地介绍了这些属性。

### 在文本中使用数学表达式

matplotlib在任何文本表达式中接受TeX方程表达式。 例如，要在标题中写入表达式σi= 15，您可以编写由美元符号包围的TeX表达式：

```python
plt.title(r'$\sigma_i=15$')
```

标题字符串前面的r很重要 - 它表示该字符串是一个原始字符串，而不是将反斜杠视为python转义。matplotlib有一个内置的TeX表达式解析器和布局引擎，并提供自己的数学字体 - 有关详细信息，请参阅编写[数学表达式](https://matplotlib.org/tutorials/text/mathtext.html)。因此，您可以跨平台使用数学文本，而无需安装TeX。 对于安装了LaTeX和dvipng的用户，您还可以使用LaTeX格式化文本并将输出直接合并到显示图或保存的postscript中 - 请参阅使用[LaTeX](https://matplotlib.org/tutorials/text/usetex.html)进行文本渲染。

### 注释文本

上面的基本[text()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.text.html#matplotlib.pyplot.text) 命令的使用将文本放在Axes上的任意位置。文本的常见用途是注释绘图的某些功能，而[annotate()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.annotate.html#matplotlib.pyplot.annotate)方法提供帮助功能以使注释变得容易。在注释中，有两点需要考虑：由参数xy表示的注释位置和文本xytext的位置。 这两个参数都是（x，y）元组。

```python
ax = plt.subplot(111)

t = np.arange(0.0, 5.0, 0.01)
s = np.cos(2*np.pi*t)
line, = plt.plot(t, s, lw=2)

plt.annotate('local max', xy=(2, 1), xytext=(3, 1.5),
             arrowprops=dict(facecolor='black', shrink=0.05),
             )

plt.ylim(-2, 2)
plt.show()
```

![图例](/static/images/tutorials/sphx_glr_pyplot_009.png)

在此基本示例中，xy（箭头提示）和xytext位置（文本位置）都在数据坐标中。 可以选择各种其他坐标系 - 有关详细信息，请参阅[基本注释](https://matplotlib.org/tutorials/text/annotations.html#annotations-tutorial)和[高级注释](https://matplotlib.org/tutorials/text/annotations.html#plotting-guide-annotation)。更多示例可以在[Annotating Plots](https://matplotlib.org/gallery/text_labels_and_annotations/annotation_demo.html)中找到。

## 对数和其他非线性轴

[matplotlib.pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot) 不仅支持线性轴刻度，还支持对数和logit刻度。 如果数据跨越许多数量级，则通常使用此方法。 更改轴的比例很容易：

```python
plt.xscale('log')
```

下面显示了具有相同数据和y轴不同比例的四个图的示例。

```python
from matplotlib.ticker import NullFormatter  # useful for `logit` scale

# Fixing random state for reproducibility
np.random.seed(19680801)

# make up some data in the interval ]0, 1[
y = np.random.normal(loc=0.5, scale=0.4, size=1000)
y = y[(y > 0) & (y < 1)]
y.sort()
x = np.arange(len(y))

# plot with various axes scales
plt.figure(1)

# linear
plt.subplot(221)
plt.plot(x, y)
plt.yscale('linear')
plt.title('linear')
plt.grid(True)


# log
plt.subplot(222)
plt.plot(x, y)
plt.yscale('log')
plt.title('log')
plt.grid(True)


# symmetric log
plt.subplot(223)
plt.plot(x, y - y.mean())
plt.yscale('symlog', linthreshy=0.01)
plt.title('symlog')
plt.grid(True)

# logit
plt.subplot(224)
plt.plot(x, y)
plt.yscale('logit')
plt.title('logit')
plt.grid(True)
# Format the minor tick labels of the y-axis into empty strings with
# `NullFormatter`, to avoid cumbering the axis with too many labels.
plt.gca().yaxis.set_minor_formatter(NullFormatter())
# Adjust the subplot layout, because the logit one may take more space
# than usual, due to y-tick labels like "1 - 10^{-3}"
plt.subplots_adjust(top=0.92, bottom=0.08, left=0.10, right=0.95, hspace=0.25,
                    wspace=0.35)

plt.show()
```

![图例](/static/images/tutorials/sphx_glr_pyplot_010.png)

您也可以添加自己的比例，有关详细信息，请[参阅开发人员指南](https://matplotlib.org/devel/add_new_projection.html#adding-new-scales)以创建比例和转换。

## 下载本文的所有示例

- [下载python源码: pyplot.py](https://matplotlib.org/_downloads/c2a9f99e7a4ee3b2d1f398638f094028/pyplot.py)
- [下载Jupyter notebook: pyplot.ipynb](https://matplotlib.org/_downloads/66505356f8f95303d31192eef95aab38/pyplot.ipynb)