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

#### Parameters: | 

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

#### Returns: | 

- paths : PathCollection

![Scatter3d](/static/images/tutorials/sphx_glr_scatter3d_0011.png)

[Scatter3d](https://matplotlib.org/gallery/mplot3d/scatter3d.html)

### Wireframe plots

[source](https://matplotlib.org/_modules/mpl_toolkits/mplot3d/axes3d.html#Axes3D.plot_wireframe)

```python
Axes3D.plot_wireframe(X, Y, Z, *args, **kwargs)
```

**note:** The rcount and ccount kwargs, which both default to 50, determine the maximum number of samples used in each direction. If the input data is larger, it will be downsampled (by slicing) to these numbers of points.

#### Parameters:

- X, Y, Z : 2d arrays. 
    Data values.
- rcount, ccount : int. 
    Maximum number of samples used in each direction. If the input data is larger, it will be downsampled (by slicing) to these numbers of points. Setting a count to zero causes the data to be not sampled in the corresponding direction, producing a 3D line plot rather than a wireframe plot. Defaults to 50.
    New in version 2.0.
- rstride, cstride : int
    Downsampling stride in each direction. These arguments are mutually exclusive with rcount and ccount. If only one of rstride or cstride is set, the other defaults to 1. Setting a stride to zero causes the data to be not sampled in the corresponding direction, producing a 3D line plot rather than a wireframe plot.

    'classic' mode uses a default of rstride = cstride = 1 instead of the new default of rcount = ccount = 50.
- **kwargs :
    Other arguments are forwarded to Line3DCollection.

![Wire3d](/static/images/tutorials/sphx_glr_wire3d_0011.png)

[Wire3d](https://matplotlib.org/gallery/mplot3d/wire3d.html)

### Surface plots

Create a surface plot.

By default it will be colored in shades of a solid color, but it also supports color mapping by supplying the cmap argument.

[source](https://matplotlib.org/_modules/mpl_toolkits/mplot3d/axes3d.html#Axes3D.plot_surface)

```python
Axes3D.plot_surface(X, Y, Z, *args, norm=None, vmin=None, vmax=None, lightsource=None, **kwargs)
```

**Note:** The rcount and ccount kwargs, which both default to 50, determine the maximum number of samples used in each direction. If the input data is larger, it will be downsampled (by slicing) to these numbers of points.

#### Parameters: | 

- X, Y, Z : 2d arrays.
    Data values.
- rcount, ccount : int
    Maximum number of samples used in each direction. If the input data is larger, it will be downsampled (by slicing) to these numbers of points. Defaults to 50.

    New in version 2.0.
- rstride, cstride : int
    Downsampling stride in each direction. These arguments are mutually exclusive with rcount and ccount. If only one of rstride or cstride is set, the other defaults to 10.

    'classic' mode uses a default of rstride = cstride = 10 instead of the new default of rcount = ccount = 50.
- color : color-like
    Color of the surface patches.
- cmap : Colormap
    Colormap of the surface patches.
- facecolors : array-like of colors.
    Colors of each individual patch.
- norm : Normalize
    Normalization for the colormap.
- vmin, vmax : float
    Bounds for the normalization.
- shade : bool
    Whether to shade the face colors.
- **kwargs :
    Other arguments are forwarded to Poly3DCollection.

![Surface3d](/static/images/tutorials/sphx_glr_surface3d_0012.png)

[Surface3d](https://matplotlib.org/gallery/mplot3d/surface3d.html)

### Tri-Surface plots

[source](https://matplotlib.org/_modules/mpl_toolkits/mplot3d/axes3d.html#Axes3D.plot_trisurf)

```python
Axes3D.plot_trisurf(*args, color=None, norm=None, vmin=None, vmax=None, lightsource=None, **kwargs)
```

Argument | Description
---|---
X, Y, Z | Data values as 1D arrays
color | Color of the surface patches
cmap | A colormap for the surface patches.
norm | An instance of Normalize to map values to colors
vmin | Minimum value to map
vmax | Maximum value to map
shade | Whether to shade the facecolors

The (optional) triangulation can be specified in one of two ways; either:

```python
plot_trisurf(triangulation, ...)
```

where triangulation is a Triangulation object, or:

```python
plot_trisurf(X, Y, ...)
plot_trisurf(X, Y, triangles, ...)
plot_trisurf(X, Y, triangles=triangles, ...)
```

in which case a Triangulation object will be created. See Triangulation for a explanation of these possibilities.

The remaining arguments are:

```python
plot_trisurf(..., Z)
```

where Z is the array of values to contour, one per point in the triangulation.

Other arguments are passed on to Poly3DCollection

**Examples**:

(Source code, png, pdf)

![trisurf3d](/static/images/tutorials/trisurf3d.png)


![trisurf3d_2](/static/images/tutorials/trisurf3d_2.png)

New in version 1.2.0: This plotting function was added for the v1.2.0 release.

![Trisurf3d](/static/images/tutorials/sphx_glr_trisurf3d_0011.png)

[Trisurf3d](https://matplotlib.org/gallery/mplot3d/trisurf3d.html)

### Contour plots

Create a 3D contour plot.

[source](https://matplotlib.org/_modules/mpl_toolkits/mplot3d/axes3d.html#Axes3D.contour)

```python
Axes3D.contour(X, Y, Z, *args, extend3d=False, stride=5, zdir='z', offset=None, **kwargs)
```


Argument | Description
---|---
X, Y, | Data values as numpy.arrays
Z | 
extend3d | Whether to extend contour in 3D (default: False)
stride | Stride (step size) for extending contour
zdir | The direction to use: x, y or z (default)
offset | If specified plot a projection of the contour lines on this position in plane normal to zdir

The positional and other keyword arguments are passed on to contour()

Returns a contour


![Contour3d](/static/images/tutorials/sphx_glr_contour3d_001.png)

[Contour3d](https://matplotlib.org/gallery/mplot3d/contour3d.html)

