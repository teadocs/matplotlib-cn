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

![图例指南示例](/static/images/tutorials/sphx_glr_legend_guide_001.png)

有许多支持的图例句柄，而不是创建一个颜色的补丁我们可以创建一个带标记的行：

```python
import matplotlib.lines as mlines

blue_line = mlines.Line2D([], [], color='blue', marker='*',
                          markersize=15, label='Blue stars')
plt.legend(handles=[blue_line])

plt.show()
```

![图例指南示例2](/static/images/tutorials/sphx_glr_legend_guide_002.png)

## 图例位置

可以通过关键字参数loc指定图例的位置。有关更多详细信息，请参见[legend()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.legend.html#matplotlib.pyplot.legend)上的文档。

``bbox_to_anchor`` 关键字为手动图例放置提供了很大程度的控制。 例如，如果您希望轴图例位于图的右上角而不是轴的角，只需指定角的位置以及该位置的坐标系：

```python
plt.legend(bbox_to_anchor=(1, 1),
           bbox_transform=plt.gcf().transFigure)
```

自定义图例展示的更多示例：

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

![图例指南示例3](/static/images/tutorials/sphx_glr_legend_guide_003.png)

## 同一轴上的多个图例

有时，在多个图例中拆分图例条目更为明确。虽然这样做的本能方法可能是多次调用 legend() 函数，但您会发现Axes上只存在一个图例。 这样做是为了可以反复调用 legend() 来将图例更新为Axes上的最新句柄，因此为了保留旧的图例实例，我们必须手动将它们添加到Axes：

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

![图例指南示例4](/static/images/tutorials/sphx_glr_legend_guide_004.png)

## 图例处理程序

为了创建图例条目，句柄作为适当的HandlerBase子类的参数给出。处理程序子类的选择由以下规则确定：

1. 使用handler_map关键字中的值更新get_legend_handler_map()。
1. 检查句柄是否在新创建的handler_map中。
1. 检查句柄的类型是否在新创建的handler_map中。
1. 检查句柄的mro中的任何类型是否在新创建的handler_map中。

为了完整起见，此逻辑主要在get_legend_handler()中实现。

所有这些灵活性意味着我们拥有必要的钩子来为我们自己的图例键实现自定义处理程序。

使用自定义处理程序的最简单示例是实例化一个现有的HandlerBase子类。为简单起见，让我们选择接受numpoints参数的matplotlib.legend_handler.HandlerLine2D（为方便起见，注意numpoints是legend()函数的关键字）。然后，我们可以将实例的映射作为关键字传递给Handler。

```python
from matplotlib.legend_handler import HandlerLine2D

line1, = plt.plot([3, 2, 1], marker='o', label='Line 1')
line2, = plt.plot([1, 2, 3], marker='o', label='Line 2')

plt.legend(handler_map={line1: HandlerLine2D(numpoints=4)})
```

![图例指南示例5](/static/images/tutorials/sphx_glr_legend_guide_005.png)

如您所见，“Line 1”现在有4个标记点，其中“Line 2”有2个（默认值）。 尝试上面的代码，只将map的键从line1更改为type（line1）。注意现在两个Line2D实例如何获得4个标记。

除了处理复杂绘图类型（如误差条形图，词干图和直方图）的处理程序外，默认的handler_map还有一个特殊的元组处理程序（HandlerTuple），它只是为给定元组中的每个项目绘制彼此重叠的句柄。以下示例演示了将两个图例键组合在一起：

```python
from numpy.random import randn

z = randn(10)

red_dot, = plt.plot(z, "ro", markersize=15)
# Put a white cross over some of the data.
white_cross, = plt.plot(z[:5], "w+", markeredgewidth=3, markersize=15)

plt.legend([red_dot, (red_dot, white_cross)], ["Attr A", "Attr A+B"])
```

![图例指南示例6](/static/images/tutorials/sphx_glr_legend_guide_006.png)

HandlerTuple类还可用于将多个图例键分配给同一条目：

```python
from matplotlib.legend_handler import HandlerLine2D, HandlerTuple

p1, = plt.plot([1, 2.5, 3], 'r-d')
p2, = plt.plot([3, 2, 1], 'k-o')

l = plt.legend([(p1, p2)], ['Two keys'], numpoints=1,
               handler_map={tuple: HandlerTuple(ndivide=None)})
```

![图例指南示例7](/static/images/tutorials/sphx_glr_legend_guide_007.png)

### 实现自定义图例处理程序

可以实现自定义处理程序将任何句柄转换为图例键（句柄不一定需要是matplotlib艺术家对象）。处理程序必须实现“legend_artist”方法，该方法返回单个艺术家以供图例使用。 有关“legend_artist”的签名详细信息记录在legend_artist()中。

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

![图例指南示例8](/static/images/tutorials/sphx_glr_legend_guide_008.png)

或者，如果我们想要全局接受AnyObject实例而不需要一直手动设置handler_map关键字，我们可以使用以下命令注册新的处理程序：

```python
from matplotlib.legend import Legend
Legend.update_default_handler_map({AnyObject: AnyObjectHandler()})
```

虽然这里的功能很明确，但请记住，已经实现了许多处理程序，并且现有类可能已经很容易实现您想要实现的功能。例如，要生成椭圆图例键，而不是矩形图例：

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

![图例指南示例9](/static/images/tutorials/sphx_glr_legend_guide_009.png)

## 下载本文的所有示例

- [下载python源码: legend_guide.py](https://matplotlib.org/_downloads/497735c33d4d3917ffa3c4f20e89c94c/legend_guide.py)
- [下载Jupyter notebook: legend_guide.ipynb](https://matplotlib.org/_downloads/618cf255d75e3cfb46a47e6adbc76081/legend_guide.ipynb)
