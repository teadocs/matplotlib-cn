# Plot的生命周期

本教程旨在使用Matplotlib显示单个可视化的开始，中间和结尾。 我们将从一些原始数据开始，最后保存一个自定义可视化图形。 在此过程中，我们将尝试使用Matplotlib突出一些简洁的功能和最佳实践。

**注意**：本教程基于Chris Moffitt撰写的[这篇优秀博客文章](http://pbpython.com/effective-matplotlib.html))。它由Chris Holdgraf转换成本教程。

## 关于面向对象的API与Pyplot的说明

Matplotlib有两个接口。第一个是面向对象（OO）接口。在这种情况下，我们利用 [axes.Axes](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes) 的实例，以便在[figure.Figure](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure)的实例上呈现可视化。

第二种是基于MATLAB并使用基于状态的接口。这封装在pyplot模块中。请参阅[pyplot教程](https://matplotlib.org/tutorials/introductory/pyplot.html)，以深入了解pyplot界面。

大多数条款都很简单，但要记住的主要是：

- 该图是可能包含1个或更多轴的最终图像。
- 轴代表一个单独的图（不要将其与“轴”这个词混淆，后者指的是图的x / y轴）。

我们称之为直接从Axes进行绘图的方法，这使我们在定制绘图方面具有更大的灵活性和强大功能。

**注意**：通常，尝试在pyplot接口上使用面向对象的接口。

## 我们的数据

我们将使用本教程派生的帖子中的数据。它包含许多公司的销售信息。

```python
# sphinx_gallery_thumbnail_number = 10
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.ticker import FuncFormatter

data = {'Barton LLC': 109438.50,
        'Frami, Hills and Schmidt': 103569.59,
        'Fritsch, Russel and Anderson': 112214.71,
        'Jerde-Hilpert': 112591.43,
        'Keeling LLC': 100934.30,
        'Koepp Ltd': 103660.54,
        'Kulas Inc': 137351.96,
        'Trantow-Barrows': 123381.38,
        'White-Trantow': 135841.99,
        'Will LLC': 104437.60}
group_data = list(data.values())
group_names = list(data.keys())
group_mean = np.mean(group_data)
```

## 快速开始

这些数据自然可视化为条形图，每组一个条形图。要使用面向对象的方法，我们将首先生成一个图形实例。[figure.Figure](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure)和[axes.Axes](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes)。图就像一个画布，Axes是画布的一部分，我们将在其上进行特定的可视化。

**注意**：图字上可以有多个轴。 有关如何执行此操作的信息，请参阅[“紧密布局”教程](https://matplotlib.org/tutorials/intermediate/tight_layout_guide.html)。

```python
fig, ax = plt.subplots()
```

![生命周期示例](/static/images/tutorials/sphx_glr_lifecycle_001.png)

现在我们有了一个Axes实例，我们可以在它上面进行绘图。

```python
fig, ax = plt.subplots()
ax.barh(group_names, group_data)
```

![生命周期示例2](/static/images/tutorials/sphx_glr_lifecycle_002.png)

## 控制风格

Matplotlib中有许多样式可供您根据需要定制可视化。要查看样式列表，我们可以使用pyplot.style。

```python
print(plt.style.available)
```

输出：

```python
['seaborn-dark', 'dark_background', 'seaborn-pastel', 'seaborn-colorblind', 'tableau-colorblind10', 'seaborn-notebook', 'seaborn-dark-palette', 'grayscale', 'seaborn-poster', 'seaborn', 'bmh', 'seaborn-talk', 'seaborn-ticks', '_classic_test', 'ggplot', 'seaborn-white', 'classic', 'Solarize_Light2', 'seaborn-paper', 'fast', 'fivethirtyeight', 'seaborn-muted', 'seaborn-whitegrid', 'seaborn-darkgrid', 'seaborn-bright', 'seaborn-deep']
```

您可以使用以下内容激活样式：

```python
plt.style.use('fivethirtyeight')
```

现在让我们重新制作上面的图像，看看它的样子：

```python
fig, ax = plt.subplots()
ax.barh(group_names, group_data)
```

![生命周期示例2](/static/images/tutorials/sphx_glr_lifecycle_003.png)

样式控制很多东西，比如颜色，线宽，背景等。

## 自定义绘制

现在我们已经得到了一个我们想要的一般外观的情节，所以让我们对它进行微调，以便它可以打印出来。 首先让我们旋转x轴上的标签，使它们更清晰地显示出来。使用[axes.Axes.get_xticklabels()](https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.get_xticklabels.html#matplotlib.axes.Axes.get_xticklabels)方法将这些标签：

```python
fig, ax = plt.subplots()
ax.barh(group_names, group_data)
labels = ax.get_xticklabels()
```

![生命周期示例3](/static/images/tutorials/sphx_glr_lifecycle_004.png)

如果我们想一次设置多个项的属性，那么使用[pyplot.setp()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.setp.html#matplotlib.pyplot.setp)函数会很有用。 这将获取Matplotlib对象的列表（或许多列表），并尝试设置每个对象的一些样式元素。

```python
fig, ax = plt.subplots()
ax.barh(group_names, group_data)
labels = ax.get_xticklabels()
plt.setp(labels, rotation=45, horizontalalignment='right')
```

![生命周期示例4](/static/images/tutorials/sphx_glr_lifecycle_005.png)

看起来这样会切断底部的一些标签。我们可以告诉Matplotlib自动为我们创建的图中的元素腾出空间。为此，我们将设置rcParams的autolayout值。有关使用rcParams控制图的样式，布局和其他功能的更多信息，请参阅[使用样式表和rcParams自定义Matplotlib](https://matplotlib.org/tutorials/introductory/customizing.html)。

```python
plt.rcParams.update({'figure.autolayout': True})

fig, ax = plt.subplots()
ax.barh(group_names, group_data)
labels = ax.get_xticklabels()
plt.setp(labels, rotation=45, horizontalalignment='right')
```

![生命周期示例5](/static/images/tutorials/sphx_glr_lifecycle_006.png)

接下来，我们将为图添加标签。 要使用OO接口执行此操作，我们可以使用[axes.Axes.set()](https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set.html#matplotlib.axes.Axes.set)方法设置此Axes对象的属性。

```python
fig, ax = plt.subplots()
ax.barh(group_names, group_data)
labels = ax.get_xticklabels()
plt.setp(labels, rotation=45, horizontalalignment='right')
ax.set(xlim=[-10000, 140000], xlabel='Total Revenue', ylabel='Company',
       title='Company Revenue')
```

![生命周期示例6](/static/images/tutorials/sphx_glr_lifecycle_007.png)

我们还可以使用[pyplot.subplots()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.subplots.html#matplotlib.pyplot.subplots) 函数调整此图的大小。我们可以用figsize kwarg做到这一点。

**注意**：虽然NumPy中的索引遵循形式（行，列），但figsize kwarg遵循形式（宽度，高度）。这遵循可视化中的惯例，遗憾的是它们与线性代数的惯例不同。

```python
fig, ax = plt.subplots(figsize=(8, 4))
ax.barh(group_names, group_data)
labels = ax.get_xticklabels()
plt.setp(labels, rotation=45, horizontalalignment='right')
ax.set(xlim=[-10000, 140000], xlabel='Total Revenue', ylabel='Company',
       title='Company Revenue')
```

![生命周期示例7](/static/images/tutorials/sphx_glr_lifecycle_008.png)

对于标签，我们可以使用[ticker.FuncFormatter](https://matplotlib.org/api/ticker_api.html#matplotlib.ticker.FuncFormatter)类以函数的形式指定自定义格式指南。 下面我们将定义一个以整数作为输入的函数，并返回一个字符串作为输出。

```python
def currency(x, pos):
    """The two args are the value and tick position"""
    if x >= 1e6:
        s = '${:1.1f}M'.format(x*1e-6)
    else:
        s = '${:1.0f}K'.format(x*1e-3)
    return s

formatter = FuncFormatter(currency)
```

然后我们可以将此格式化程序应用于我们的绘图上的标签。为此，我们将使用轴的xaxis属性。这使您可以在我们的绘图上对特定轴执行操作。

```python
fig, ax = plt.subplots(figsize=(6, 8))
ax.barh(group_names, group_data)
labels = ax.get_xticklabels()
plt.setp(labels, rotation=45, horizontalalignment='right')

ax.set(xlim=[-10000, 140000], xlabel='Total Revenue', ylabel='Company',
       title='Company Revenue')
ax.xaxis.set_major_formatter(formatter)
```

![生命周期示例8](/static/images/tutorials/sphx_glr_lifecycle_009.png)

## 结合多个可视化

可以在[axes.Axes](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes)的同一个实例上绘制多个绘图元素。为此，我们只需要在该轴对象上调用另一个绘图方法。

```python
fig, ax = plt.subplots(figsize=(8, 8))
ax.barh(group_names, group_data)
labels = ax.get_xticklabels()
plt.setp(labels, rotation=45, horizontalalignment='right')

# Add a vertical line, here we set the style in the function call
ax.axvline(group_mean, ls='--', color='r')

# Annotate new companies
for group in [3, 5, 8]:
    ax.text(145000, group, "New Company", fontsize=10,
            verticalalignment="center")

# Now we'll move our title up since it's getting a little cramped
ax.title.set(y=1.05)

ax.set(xlim=[-10000, 140000], xlabel='Total Revenue', ylabel='Company',
       title='Company Revenue')
ax.xaxis.set_major_formatter(formatter)
ax.set_xticks([0, 25e3, 50e3, 75e3, 100e3, 125e3])
fig.subplots_adjust(right=.1)

plt.show()
```

![生命周期示例9](/static/images/tutorials/sphx_glr_lifecycle_010.png)

## Saving our plot

Now that we're happy with the outcome of our plot, we want to save it to disk. There are many file formats we can save to in Matplotlib. To see a list of available options, use:

```python
print(fig.canvas.get_supported_filetypes())
```

Out:

```python
{'ps': 'Postscript', 'eps': 'Encapsulated Postscript', 'pdf': 'Portable Document Format', 'pgf': 'PGF code for LaTeX', 'png': 'Portable Network Graphics', 'raw': 'Raw RGBA bitmap', 'rgba': 'Raw RGBA bitmap', 'svg': 'Scalable Vector Graphics', 'svgz': 'Scalable Vector Graphics', 'jpg': 'Joint Photographic Experts Group', 'jpeg': 'Joint Photographic Experts Group', 'tif': 'Tagged Image File Format', 'tiff': 'Tagged Image File Format'}
```

We can then use the [figure.Figure.savefig()](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure.savefig) in order to save the figure to disk. Note that there are several useful flags we'll show below:

- transparent=True makes the background of the saved figure transparent if the format supports it.
- dpi=80 controls the resolution (dots per square inch) of the output.
- bbox_inches="tight" fits the bounds of the figure to our plot.

```python
# Uncomment this line to save the figure.
# fig.savefig('sales.png', transparent=False, dpi=80, bbox_inches="tight")
```

## 下载本文的所有示例

- [下载python源码: lifecycle.py](https://matplotlib.org/_downloads/786dee4698fe85d2155a509376222fba/lifecycle.py)
- [下载Jupyter notebook: lifecycle.ipynb](https://matplotlib.org/_downloads/bf6c2c171dcf8b015ea61200e3373028/lifecycle.ipynb)