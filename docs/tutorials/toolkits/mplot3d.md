# The mplot3d Toolkit

Generating 3D plots using the mplot3d toolkit.

## Contents

- The mplot3d Toolkit
  - Getting started
    - Line plots
    - Scatter plots
    - Wireframe plots
    - Surface plots
    - Tri-Surface plots
    - Contour plots
    - Filled contour plots
    - Polygon plots
    - Bar plots
    - Quiver
    - 2D plots in 3D
    - Text
    - Subplotting

## Getting started

An Axes3D object is created just like any other axes using the projection='3d' keyword. Create a new matplotlib.figure.Figure and add a new axes to it of type Axes3D:

```python
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
```

*New in version 1.0.0*: This approach is the preferred method of creating a 3D axes.

**Note**: Prior to version 1.0.0, the method of creating a 3D axes was different. For those using older versions of matplotlib, change ax = fig.add_subplot(111, projection='3d') to ax = Axes3D(fig).

See the mplot3d FAQ for more information about the mplot3d toolkit.

### Line plots

Plot 2D or 3D data.

[source](https://matplotlib.org/_modules/mpl_toolkits/mplot3d/axes3d.html#Axes3D.plot)

```python
Axes3D.plot(xs, ys, *args, zdir='z', **kwargs)
```

Argument | Description
---|---
xs, ys | x, y coordinates of vertices
zs | z value(s), either one for all points or one for each point.
zdir | Which direction to use as z ('x', 'y' or 'z') when plotting a 2D set.

Other arguments are passed on to plot()

![Lines3d](/static/images/tutorials/sphx_glr_lines3d_0011.png)

[Lines3d](https://matplotlib.org/gallery/mplot3d/lines3d.html)

### Scatter plots

[source](https://matplotlib.org/_modules/mpl_toolkits/mplot3d/axes3d.html#Axes3D.scatter)

```python
Axes3D.scatter(xs, ys, zs=0, zdir='z', s=20, c=None, depthshade=True, *args, **kwargs)
```

Create a scatter plot.

#### Parameters:	

- xs, ys : array-like The data positions.
- zs : float or array-like, optional, default: 0 The z-positions. Either an array of the same length as xs and ys or a single value to place all points in the same plane.
- zdir : {'x', 'y', 'z', '-x', '-y', '-z'}, optional, default: 'z'
The axis direction for the zs. This is useful when plotting 2D data on a 3D Axes. The data must be passed as xs, ys. Setting zdir to 'y' then plots the data to the x-z-plane. See also Plot 2D data on 3D plot.
- s : scalar or array-like, optional, default: 20
The marker size in points**2. Either an array of the same length as xs and ys or a single value to make all markers the same size.
- c : color, sequence, or sequence of color, optional. 
  The marker color. Possible values:
    - A single color format string.
    - A sequence of color specifications of length n.
    - A sequence of n numbers to be mapped to colors using cmap and norm.
    - A 2-D array in which the rows are RGB or RGBA.
  For more details see the c argument of scatter.
- depthshade : bool, optional, default: True. Whether to shade the scatter markers to give the appearance of depth.
- **kwargs. All other arguments are passed on to scatter.

#### Returns:	

- paths : PathCollection

