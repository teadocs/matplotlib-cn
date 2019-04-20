# 使用GridSpec和其他功能自定义图布局

如何创建网格的轴组合。

- [subplots()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.subplots.html#matplotlib.pyplot.subplots): 可能是用来创建图形和轴的主要函数。它也类似于matplotlib.pyplot.subplot()，但同时创建并放置地物上的所有轴。另请参见matplotlib.Figure.subplots。    
- [GridSpec()](https://matplotlib.org/api/_as_gen/matplotlib.gridspec.GridSpec.html#matplotlib.gridspec.GridSpec): 指定将放置子图的网格的几何。需要设置网格的行数和列数。可选地，可以调整子图布局参数（例如，左，右等）。
- [SubplotSpec()](https://matplotlib.org/api/_as_gen/matplotlib.gridspec.SubplotSpec.html#matplotlib.gridspec.SubplotSpec): 指定给定GridSpec中子图的位置。
- [subplot2grid()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.subplot2grid.html#matplotlib.pyplot.subplot2grid): 一个辅助函数，类似于subplot()，但使用基于0的索引并让子图占据多个单元格。本教程不涉及此功能。

```python
import matplotlib
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec
```

## 基本快速入门指南

前两个示例显示了如何使用[subplots()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.subplots.html#matplotlib.pyplot.subplots)和[gridspec](https://matplotlib.org/api/gridspec_api.html#module-matplotlib.gridspec)创建基本的2×2网格。

使用[subplots()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.subplots.html#matplotlib.pyplot.subplots)非常简单。它返回一个[Figure](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure)实例和一个[Axes](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes)对象数组。

```python
fig1, f1_axes = plt.subplots(ncols=2, nrows=2, constrained_layout=True)
```

![用cycler定型示例](/static/images/tutorials/sphx_glr_gridspec_001.png)

对于像这样的简单用例，gridspec可能过于冗长。您必须单独创建图形和GridSpec实例，然后将gridspec实例的元素传递给add_subplot()方法以创建轴对象。gridspec的元素通常以与numpy数组相同的方式访问。

```python
fig2 = plt.figure(constrained_layout=True)
spec2 = gridspec.GridSpec(ncols=2, nrows=2, figure=fig2)
f2_ax1 = fig2.add_subplot(spec2[0, 0])
f2_ax2 = fig2.add_subplot(spec2[0, 1])
f2_ax3 = fig2.add_subplot(spec2[1, 0])
f2_ax4 = fig2.add_subplot(spec2[1, 1])
```

![用cycler定型示例2](/static/images/tutorials/sphx_glr_gridspec_002.png)

gridspec的强大之处在于能够创建跨越行和列的子图。 注意Numpy切片语法用于选择每个子图将占用的gridspec部分。

请注意，我们还使用了方便方法Figure.add_gridspec而不是gridspec.GridSpec，可能会为用户保存导入，并保持名称空间更清晰。

```python
fig3 = plt.figure(constrained_layout=True)
gs = fig3.add_gridspec(3, 3)
f3_ax1 = fig3.add_subplot(gs[0, :])
f3_ax1.set_title('gs[0, :]')
f3_ax2 = fig3.add_subplot(gs[1, :-1])
f3_ax2.set_title('gs[1, :-1]')
f3_ax3 = fig3.add_subplot(gs[1:, -1])
f3_ax3.set_title('gs[1:, -1]')
f3_ax4 = fig3.add_subplot(gs[-1, 0])
f3_ax4.set_title('gs[-1, 0]')
f3_ax5 = fig3.add_subplot(gs[-1, -2])
f3_ax5.set_title('gs[-1, -2]')
```

![用cycler定型示例3](/static/images/tutorials/sphx_glr_gridspec_003.png)

gridspec对于通过几种方法创建不同宽度的子图也是必不可少的。

此处显示的方法类似于上面的方法并初始化统一的网格规范，然后使用numpy索引和切片为给定的子图分配多个“单元”。

```python
fig4 = plt.figure(constrained_layout=True)
spec4 = fig4.add_gridspec(ncols=2, nrows=2)
anno_opts = dict(xy=(0.5, 0.5), xycoords='axes fraction',
                 va='center', ha='center')

f4_ax1 = fig4.add_subplot(spec4[0, 0])
f4_ax1.annotate('GridSpec[0, 0]', **anno_opts)
fig4.add_subplot(spec4[0, 1]).annotate('GridSpec[0, 1:]', **anno_opts)
fig4.add_subplot(spec4[1, 0]).annotate('GridSpec[1:, 0]', **anno_opts)
fig4.add_subplot(spec4[1, 1]).annotate('GridSpec[1:, 1:]', **anno_opts)
```

![用cycler定型示例4](/static/images/tutorials/sphx_glr_gridspec_004.png)

另一种选择是使用``width_ratios``和``height_ratios``参数。这些关键字参数是数字列表。请注意，绝对值是没有意义的，只有它们的相对比率很重要。 这意味着``width_ratios = [2,4,8]``相当于``width_ratios = [1,2,4]``在同样宽的数字内。为了演示，我们将在for循环中盲目地创建轴，因为我们以后不再需要它们。

```python
fig5 = plt.figure(constrained_layout=True)
widths = [2, 3, 1.5]
heights = [1, 3, 2]
spec5 = fig5.add_gridspec(ncols=3, nrows=3, width_ratios=widths,
                          height_ratios=heights)
for row in range(3):
    for col in range(3):
        ax = fig5.add_subplot(spec5[row, col])
        label = 'Width: {}\nHeight: {}'.format(widths[col], heights[row])
        ax.annotate(label, (0.1, 0.5), xycoords='axes fraction', va='center')
```

![用cycler定型示例5](/static/images/tutorials/sphx_glr_gridspec_005.png)

学习使用width_ratios和height_ratios特别有用，因为顶级函数subplots()在gridspec_kw参数中接受它们。就此而言，GridSpec接受的任何参数都可以通过gridspec_kw参数传递给subplots()。此示例在不直接使用gridspec实例的情况下重新创建上一个图。

```python
gs_kw = dict(width_ratios=widths, height_ratios=heights)
fig6, f6_axes = plt.subplots(ncols=3, nrows=3, constrained_layout=True,
        gridspec_kw=gs_kw)
for r, row in enumerate(f6_axes):
    for c, ax in enumerate(row):
        label = 'Width: {}\nHeight: {}'.format(widths[c], heights[r])
        ax.annotate(label, (0.1, 0.5), xycoords='axes fraction', va='center')
```

![用cycler定型示例6](/static/images/tutorials/sphx_glr_gridspec_006.png)

可以组合子图和gridspec方法，因为有时使用子图制作大多数子图更方便，然后删除一些子图并将它们组合起来。在这里，我们创建一个布局，其中最后一列中的底部两个轴组合在一起。

```python
fig7, f7_axs = plt.subplots(ncols=3, nrows=3)
gs = f7_axs[1, 2].get_gridspec()
# remove the underlying axes
for ax in f7_axs[1:, -1]:
    ax.remove()
axbig = fig7.add_subplot(gs[1:, -1])
axbig.annotate('Big Axes \nGridSpec[1:, -1]', (0.1, 0.5),
               xycoords='axes fraction', va='center')

fig7.tight_layout()
```

![用cycler定型示例7](/static/images/tutorials/sphx_glr_gridspec_007.png)

## 对Gridspec布局的精细调整

显式使用GridSpec时，可以调整从GridSpec创建的子图的布局参数。请注意，此选项与constrained_layout或[Figure.tight_layout](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure.tight_layout)不兼容，后者均调整子图大小以填充图形。

```python
fig8 = plt.figure(constrained_layout=False)
gs1 = fig8.add_gridspec(nrows=3, ncols=3, left=0.05, right=0.48, wspace=0.05)
f8_ax1 = fig8.add_subplot(gs1[:-1, :])
f8_ax2 = fig8.add_subplot(gs1[-1, :-1])
f8_ax3 = fig8.add_subplot(gs1[-1, -1])
```

![用cycler定型示例8](/static/images/tutorials/sphx_glr_gridspec_008.png)

这类似于[subplots_adjust()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.subplots_adjust.html#matplotlib.pyplot.subplots_adjust)，但它只影响从给定GridSpec创建的子图。

这类似于[subplots_adjust()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.subplots_adjust.html#matplotlib.pyplot.subplots_adjust)，但它只影响从给定的GridSpec创建的子图。

例如，比较这个图像的左边和右侧：

```python
fig9 = plt.figure(constrained_layout=False)
gs1 = fig9.add_gridspec(nrows=3, ncols=3, left=0.05, right=0.48,
                        wspace=0.05)
f9_ax1 = fig9.add_subplot(gs1[:-1, :])
f9_ax2 = fig9.add_subplot(gs1[-1, :-1])
f9_ax3 = fig9.add_subplot(gs1[-1, -1])

gs2 = fig9.add_gridspec(nrows=3, ncols=3, left=0.55, right=0.98,
                        hspace=0.05)
f9_ax4 = fig9.add_subplot(gs2[:, :-1])
f9_ax5 = fig9.add_subplot(gs2[:-1, -1])
f9_ax6 = fig9.add_subplot(gs2[-1, -1])
```

![用cycler定型示例9](/static/images/tutorials/sphx_glr_gridspec_009.png)

## 使用SubplotSpec的GridSpec

您可以从SubplotSpec创建GridSpec，在这种情况下，它的布局参数设置为给定SubplotSpec的位置。

注意，这也可以从更详细的gridspec.GridspecFromSubplotSpec获得。

```python
fig10 = plt.figure(constrained_layout=True)
gs0 = fig10.add_gridspec(1, 2)

gs00 = gs0[0].subgridspec(2, 3)
gs01 = gs0[1].subgridspec(3, 2)

for a in range(2):
    for b in range(3):
        fig10.add_subplot(gs00[a, b])
        fig10.add_subplot(gs01[b, a])
```

![用cycler定型示例10](/static/images/tutorials/sphx_glr_gridspec_010.png)

## 基于SubplotSpec的复杂嵌套GridSpec

这是一个更复杂的嵌套GridSpec示例，我们在外部4x4网格的每个单元格周围放置一个框，方法是在每个内部3x3网格中隐藏适当的数据区域边界。

```python
import numpy as np
from itertools import product


def squiggle_xy(a, b, c, d, i=np.arange(0.0, 2*np.pi, 0.05)):
    return np.sin(i*a)*np.cos(i*b), np.sin(i*c)*np.cos(i*d)


fig11 = plt.figure(figsize=(8, 8), constrained_layout=False)

# gridspec inside gridspec
outer_grid = fig11.add_gridspec(4, 4, wspace=0.0, hspace=0.0)

for i in range(16):
    inner_grid = outer_grid[i].subgridspec(3, 3, wspace=0.0, hspace=0.0)
    a, b = int(i/4)+1, i % 4+1
    for j, (c, d) in enumerate(product(range(1, 4), repeat=2)):
        ax = plt.Subplot(fig11, inner_grid[j])
        ax.plot(*squiggle_xy(a, b, c, d))
        ax.set_xticks([])
        ax.set_yticks([])
        fig11.add_subplot(ax)

all_axes = fig11.get_axes()

# show only the outside spines
for ax in all_axes:
    for sp in ax.spines.values():
        sp.set_visible(False)
    if ax.is_first_row():
        ax.spines['top'].set_visible(True)
    if ax.is_last_row():
        ax.spines['bottom'].set_visible(True)
    if ax.is_first_col():
        ax.spines['left'].set_visible(True)
    if ax.is_last_col():
        ax.spines['right'].set_visible(True)

plt.show()
```

![用cycler定型示例11](/static/images/tutorials/sphx_glr_gridspec_011.png)

## References

此示例中显示了以下函数和方法的用法：

```python
matplotlib.pyplot.subplots
matplotlib.figure.Figure.add_gridspec
matplotlib.figure.Figure.add_subplot
matplotlib.gridspec.GridSpec
matplotlib.gridspec.SubplotSpec.subgridspec
matplotlib.gridspec.GridSpecFromSubplotSpec
Total running time of the script: ( 0 minutes 2.021 seconds)
```

## 下载本文的所有示例

- [下载python源码: gridspec.py](https://matplotlib.org/_downloads/5aea78076d1b3ba51b5a13044817cd04/gridspec.py)
- [下载Jupyter notebook: gridspec.ipynb](https://matplotlib.org/_downloads/cb455b5079acdd92ddab8dd664046d2d/gridspec.ipynb)