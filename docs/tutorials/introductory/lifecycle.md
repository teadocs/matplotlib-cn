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

Now we've got a plot with the general look that we want, so let's fine-tune it so that it's ready for print. First let's rotate the labels on the x-axis so that they show up more clearly. We can gain access to these labels with the [axes.Axes.get_xticklabels()](https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.get_xticklabels.html#matplotlib.axes.Axes.get_xticklabels) method:

```python
fig, ax = plt.subplots()
ax.barh(group_names, group_data)
labels = ax.get_xticklabels()
```

![生命周期示例3](/static/images/tutorials/sphx_glr_lifecycle_004.png)

If we'd like to set the property of many items at once, it's useful to use the [pyplot.setp()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.setp.html#matplotlib.pyplot.setp) function. This will take a list (or many lists) of Matplotlib objects, and attempt to set some style element of each one.

```python
fig, ax = plt.subplots()
ax.barh(group_names, group_data)
labels = ax.get_xticklabels()
plt.setp(labels, rotation=45, horizontalalignment='right')
```

![生命周期示例4](/static/images/tutorials/sphx_glr_lifecycle_005.png)

It looks like this cut off some of the labels on the bottom. We can tell Matplotlib to automatically make room for elements in the figures that we create. To do this we'll set the autolayout value of our rcParams. For more information on controlling the style, layout, and other features of plots with rcParams, see [Customizing Matplotlib with style sheets and rcParams](https://matplotlib.org/tutorials/introductory/customizing.html).

```python
plt.rcParams.update({'figure.autolayout': True})

fig, ax = plt.subplots()
ax.barh(group_names, group_data)
labels = ax.get_xticklabels()
plt.setp(labels, rotation=45, horizontalalignment='right')
```

![生命周期示例5](/static/images/tutorials/sphx_glr_lifecycle_006.png)

Next, we'll add labels to the plot. To do this with the OO interface, we can use the [axes.Axes.set()](https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set.html#matplotlib.axes.Axes.set) method to set properties of this Axes object.

```python
fig, ax = plt.subplots()
ax.barh(group_names, group_data)
labels = ax.get_xticklabels()
plt.setp(labels, rotation=45, horizontalalignment='right')
ax.set(xlim=[-10000, 140000], xlabel='Total Revenue', ylabel='Company',
       title='Company Revenue')
```

![生命周期示例6](/static/images/tutorials/sphx_glr_lifecycle_007.png)

We can also adjust the size of this plot using the [pyplot.subplots()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.subplots.html#matplotlib.pyplot.subplots) function. We can do this with the figsize kwarg.

**Note**：While indexing in NumPy follows the form (row, column), the figsize kwarg follows the form (width, height). This follows conventions in visualization, which unfortunately are different from those of linear algebra.

```python
fig, ax = plt.subplots(figsize=(8, 4))
ax.barh(group_names, group_data)
labels = ax.get_xticklabels()
plt.setp(labels, rotation=45, horizontalalignment='right')
ax.set(xlim=[-10000, 140000], xlabel='Total Revenue', ylabel='Company',
       title='Company Revenue')
```

![生命周期示例7](/static/images/tutorials/sphx_glr_lifecycle_008.png)

For labels, we can specify custom formatting guidelines in the form of functions by using the [ticker.FuncFormatter](https://matplotlib.org/api/ticker_api.html#matplotlib.ticker.FuncFormatter) class. Below we'll define a function that takes an integer as input, and returns a string as an output.

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

We can then apply this formatter to the labels on our plot. To do this, we'll use the xaxis attribute of our axis. This lets you perform actions on a specific axis on our plot.

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

## Combining multiple visualizations

It is possible to draw multiple plot elements on the same instance of [axes.Axes](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes). To do this we simply need to call another one of the plot methods on that axes object.

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