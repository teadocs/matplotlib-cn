# 用cycler定型

演示自定义属性循环设置，以控制多线图的颜色和其他样式属性。

**注意：** 可以在[此处](http://matplotlib.org/cycler/)找到有关cycler API的更完整文档。

此示例演示了两种不同的API：

1. 设置指定属性循环的默认rc参数。 这会影响所有后续轴（但不会影响已创建的轴）。
1. 设置一对轴的属性循环。

```python
from cycler import cycler
import numpy as np
import matplotlib.pyplot as plt
```

首先，我们将生成一些样本数据，在本例中为四条偏移正弦曲线。

```python
x = np.linspace(0, 2 * np.pi, 50)
offsets = np.linspace(0, 2 * np.pi, 4, endpoint=False)
yy = np.transpose([np.sin(x + phi) for phi in offsets])
```

现在你已经成型了

```python
print(yy.shape)
```

输出：

```python
(50, 4)
```

所以 yy[:, i] 会给你第i个偏移正弦曲线。让我们使用[matplotlib.pyplot.rc()](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.rc.html#matplotlib.pyplot.rc)设置默认的prop_cycle。我们将通过添加(+)两个循环仪来组合颜色循环仪和线型循环仪。有关组合不同循环仪的更多信息，请参阅本教程的底部。

```python
default_cycler = (cycler(color=['r', 'g', 'b', 'y']) +
                  cycler(linestyle=['-', '--', ':', '-.']))

plt.rc('lines', linewidth=4)
plt.rc('axes', prop_cycle=default_cycler)
```

现在我们将生成一个有两个轴的图形，一个在另一个上面。在第一个轴上，我们将使用默认的循环器进行绘图。在第二个轴上，我们将使用[matplotlib.axes.Axes.set_prop_cycle()](https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_prop_cycle.html#matplotlib.axes.Axes.set_prop_cycle)设置prop_cycler，它只会为此[matplotlib.axes.Axes](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes)实例设置prop_cycle。我们将使用第二台循环仪，它结合了色循环仪和线宽循环仪。

```python
custom_cycler = (cycler(color=['c', 'm', 'y', 'k']) +
                 cycler(lw=[1, 2, 3, 4]))

fig, (ax0, ax1) = plt.subplots(nrows=2)
ax0.plot(yy)
ax0.set_title('Set default color cycle to rgby')
ax1.set_prop_cycle(custom_cycler)
ax1.plot(yy)
ax1.set_title('Set axes color cycle to cmyk')

# Add a bit more space between the two plots.
fig.subplots_adjust(hspace=0.3)
plt.show()
```

![用cycler定型示例](/static/images/tutorials/sphx_glr_color_cycle_001.png)

## 在matplotlibrc文件或样式文件中设置prop_cycler

请记住，如果要在.matplotlibrc文件或样式文件（style.mplstyle）中设置自定义prop_cycler，可以设置axes.prop_cycle属性：

```python
axes.prop_cycle    : cycler(color='bgrcmyk')
```

## 循环访问多个属性

您可以添加以下循环器：

```python
from cycler import cycler
cc = (cycler(color=list('rgb')) +
      cycler(linestyle=['-', '--', '-.']))
for d in cc:
    print(d)
```

结果：

```python
{'color': 'r', 'linestyle': '-'}
{'color': 'g', 'linestyle': '--'}
{'color': 'b', 'linestyle': '-.'}
```

你可以使用多个循环器：

```python
from cycler import cycler
cc = (cycler(color=list('rgb')) *
      cycler(linestyle=['-', '--', '-.']))
for d in cc:
    print(d)
```

结果：

```python
{'color': 'r', 'linestyle': '-'}
{'color': 'r', 'linestyle': '--'}
{'color': 'r', 'linestyle': '-.'}
{'color': 'g', 'linestyle': '-'}
{'color': 'g', 'linestyle': '--'}
{'color': 'g', 'linestyle': '-.'}
{'color': 'b', 'linestyle': '-'}
{'color': 'b', 'linestyle': '--'}
{'color': 'b', 'linestyle': '-.'}
```

## 下载本文的所有示例

- [下载python源码: color_cycle.py](https://matplotlib.org/_downloads/1f3835aefda3bd4f236d497eb3c144a7/color_cycle.py)
- [下载Jupyter notebook: color_cycle.ipynb](https://matplotlib.org/_downloads/a1e8abef996b274af371201c7786a041/color_cycle.ipynb)
