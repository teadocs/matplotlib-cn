# 图例指南

在Matplotlib中灵活地生成图例。

此图例指南是 [legend()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.legend.html#matplotlib.pyplot.legend) 中提供的文档的扩展 - 请确保您在继续本指南之前熟悉该文档的内容。

本指南使用了一些常用术语，为清楚起见，这些术语在此处记录：

- 图例入口: 图例由一个或多个图例条目组成。 条目由一个密钥和一个标签组成。
- 图例键: 每个图例标签左侧的彩色/图案标记。
- 图例标签: 描述密钥表示的句柄的文本。
- 图例处理: 原始对象，用于在图例中生成适当的条目。

## 控制图例条目

调用不带参数的 [legend()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.legend.html#matplotlib.pyplot.legend) 会自动获取图例句柄及其关联的标签。此功能相当于：

```python
handles, labels = ax.get_legend_handles_labels()
ax.legend(handles, labels)
```

[get_legend_handles_labels()](https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.get_legend_handles_labels.html#matplotlib.axes.Axes.get_legend_handles_labels) 函数返回Axes上存在的handles/artists列表，可用于生成结果图例的条目 - 值得注意的是，并非所有艺术家都可以添加到图例中，此时必须创建"proxy"（有关更多详细信息，请参阅[创建专门用于添加到图例的艺术家（也称为代理艺术家）](https://matplotlib.org/tutorials/intermediate/legend_guide.html#proxy-legend-handles)）。

要完全控制添加到图例的内容，通常将相应的句柄直接传递给[legend()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.legend.html#matplotlib.pyplot.legend)：

```python
line_up, = plt.plot([1,2,3], label='Line 2')
line_down, = plt.plot([3,2,1], label='Line 1')
plt.legend(handles=[line_up, line_down])
```

在某些情况下，无法设置句柄的标签，因此可以将标签列表传递给[legend()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.legend.html#matplotlib.pyplot.legend)：

```python
line_up, = plt.plot([1,2,3], label='Line 2')
line_down, = plt.plot([3,2,1], label='Line 1')
plt.legend([line_up, line_down], ['Line Up', 'Line Down'])
```

## 创建专门用于添加到图例的artists（也叫 Proxy artists）

Not all handles can be turned into legend entries automatically, so it is often necessary to create an artist which can. Legend handles don't have to exists on the Figure or Axes in order to be used.

Suppose we wanted to create a legend which has an entry for some data which is represented by a red color:

```python
import matplotlib.patches as mpatches
import matplotlib.pyplot as plt

red_patch = mpatches.Patch(color='red', label='The red data')
plt.legend(handles=[red_patch])

plt.show()
```

../../_images/sphx_glr_legend_guide_001.png

There are many supported legend handles, instead of creating a patch of color we could have created a line with a marker:

```python
import matplotlib.lines as mlines

blue_line = mlines.Line2D([], [], color='blue', marker='*',
                          markersize=15, label='Blue stars')
plt.legend(handles=[blue_line])

plt.show()
```

../../_images/sphx_glr_legend_guide_002.png

## Legend location

The location of the legend can be specified by the keyword argument loc. Please see the documentation at [legend()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.legend.html#matplotlib.pyplot.legend) for more details.

The ``bbox_to_anchor`` keyword gives a great degree of control for manual legend placement. For example, if you want your axes legend located at the figure's top right-hand corner instead of the axes' corner, simply specify the corner's location, and the coordinate system of that location:

```python
plt.legend(bbox_to_anchor=(1, 1),
           bbox_transform=plt.gcf().transFigure)
```

More examples of custom legend placement:

```python
plt.subplot(211)
plt.plot([1, 2, 3], label="test1")
plt.plot([3, 2, 1], label="test2")

# Place a legend above this subplot, expanding itself to
# fully use the given bounding box.
plt.legend(bbox_to_anchor=(0., 1.02, 1., .102), loc='lower left',
           ncol=2, mode="expand", borderaxespad=0.)

plt.subplot(223)
plt.plot([1, 2, 3], label="test1")
plt.plot([3, 2, 1], label="test2")
# Place a legend to the right of this smaller subplot.
plt.legend(bbox_to_anchor=(1.05, 1), loc='upper left', borderaxespad=0.)

plt.show()
```

../../_images/sphx_glr_legend_guide_003.png

## Multiple legends on the same Axes

Sometimes it is more clear to split legend entries across multiple legends. Whilst the instinctive approach to doing this might be to call the legend() function multiple times, you will find that only one legend ever exists on the Axes. This has been done so that it is possible to call legend() repeatedly to update the legend to the latest handles on the Axes, so to persist old legend instances, we must add them manually to the Axes:

```python
line1, = plt.plot([1, 2, 3], label="Line 1", linestyle='--')
line2, = plt.plot([3, 2, 1], label="Line 2", linewidth=4)

# Create a legend for the first line.
first_legend = plt.legend(handles=[line1], loc='upper right')

# Add the legend manually to the current Axes.
ax = plt.gca().add_artist(first_legend)

# Create another legend for the second line.
plt.legend(handles=[line2], loc='lower right')

plt.show()
```

../../_images/sphx_glr_legend_guide_004.png

## Legend Handlers

In order to create legend entries, handles are given as an argument to an appropriate HandlerBase subclass. The choice of handler subclass is determined by the following rules:

1. Update get_legend_handler_map() with the value in the handler_map keyword.
1. Check if the handle is in the newly created handler_map.
1. Check if the type of handle is in the newly created handler_map.
1. Check if any of the types in the handle's mro is in the newly created handler_map.

For completeness, this logic is mostly implemented in get_legend_handler().

All of this flexibility means that we have the necessary hooks to implement custom handlers for our own type of legend key.

The simplest example of using custom handlers is to instantiate one of the existing HandlerBase subclasses. For the sake of simplicity, let's choose matplotlib.legend_handler.HandlerLine2D which accepts a numpoints argument (note numpoints is a keyword on the legend() function for convenience). We can then pass the mapping of instance to Handler as a keyword to legend.

```python
from matplotlib.legend_handler import HandlerLine2D

line1, = plt.plot([3, 2, 1], marker='o', label='Line 1')
line2, = plt.plot([1, 2, 3], marker='o', label='Line 2')

plt.legend(handler_map={line1: HandlerLine2D(numpoints=4)})
```

../../_images/sphx_glr_legend_guide_005.png

As you can see, "Line 1" now has 4 marker points, where "Line 2" has 2 (the default). Try the above code, only change the map's key from line1 to type(line1). Notice how now both Line2D instances get 4 markers.

Along with handlers for complex plot types such as errorbars, stem plots and histograms, the default handler_map has a special tuple handler (HandlerTuple) which simply plots the handles on top of one another for each item in the given tuple. The following example demonstrates combining two legend keys on top of one another:

```python
from numpy.random import randn

z = randn(10)

red_dot, = plt.plot(z, "ro", markersize=15)
# Put a white cross over some of the data.
white_cross, = plt.plot(z[:5], "w+", markeredgewidth=3, markersize=15)

plt.legend([red_dot, (red_dot, white_cross)], ["Attr A", "Attr A+B"])
```

../../_images/sphx_glr_legend_guide_006.png

The HandlerTuple class can also be used to assign several legend keys to the same entry:

```python
from matplotlib.legend_handler import HandlerLine2D, HandlerTuple

p1, = plt.plot([1, 2.5, 3], 'r-d')
p2, = plt.plot([3, 2, 1], 'k-o')

l = plt.legend([(p1, p2)], ['Two keys'], numpoints=1,
               handler_map={tuple: HandlerTuple(ndivide=None)})
```

../../_images/sphx_glr_legend_guide_007.png

### Implementing a custom legend handler

A custom handler can be implemented to turn any handle into a legend key (handles don't necessarily need to be matplotlib artists). The handler must implement a "legend_artist" method which returns a single artist for the legend to use. Signature details about the "legend_artist" are documented at legend_artist().

```python
import matplotlib.patches as mpatches


class AnyObject(object):
    pass


class AnyObjectHandler(object):
    def legend_artist(self, legend, orig_handle, fontsize, handlebox):
        x0, y0 = handlebox.xdescent, handlebox.ydescent
        width, height = handlebox.width, handlebox.height
        patch = mpatches.Rectangle([x0, y0], width, height, facecolor='red',
                                   edgecolor='black', hatch='xx', lw=3,
                                   transform=handlebox.get_transform())
        handlebox.add_artist(patch)
        return patch


plt.legend([AnyObject()], ['My first handler'],
           handler_map={AnyObject: AnyObjectHandler()})
```

../../_images/sphx_glr_legend_guide_008.png

Alternatively, had we wanted to globally accept AnyObject instances without needing to manually set the handler_map keyword all the time, we could have registered the new handler with:

```python
from matplotlib.legend import Legend
Legend.update_default_handler_map({AnyObject: AnyObjectHandler()})
```

Whilst the power here is clear, remember that there are already many handlers implemented and what you want to achieve may already be easily possible with existing classes. For example, to produce elliptical legend keys, rather than rectangular ones:

```python
from matplotlib.legend_handler import HandlerPatch


class HandlerEllipse(HandlerPatch):
    def create_artists(self, legend, orig_handle,
                       xdescent, ydescent, width, height, fontsize, trans):
        center = 0.5 * width - 0.5 * xdescent, 0.5 * height - 0.5 * ydescent
        p = mpatches.Ellipse(xy=center, width=width + xdescent,
                             height=height + ydescent)
        self.update_prop(p, orig_handle, legend)
        p.set_transform(trans)
        return [p]


c = mpatches.Circle((0.5, 0.5), 0.25, facecolor="green",
                    edgecolor="red", linewidth=3)
plt.gca().add_patch(c)

plt.legend([c], ["An ellipse, not a rectangle"],
           handler_map={mpatches.Circle: HandlerEllipse()})
```

../../_images/sphx_glr_legend_guide_009.png

## 下载本文的所有示例

- [下载python源码: legend_guide.py](https://matplotlib.org/_downloads/497735c33d4d3917ffa3c4f20e89c94c/legend_guide.py)
- [下载Jupyter notebook: legend_guide.ipynb](https://matplotlib.org/_downloads/618cf255d75e3cfb46a47e6adbc76081/legend_guide.ipynb)