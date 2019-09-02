---
sidebarDepth: 3
sidebar: auto
---

# API Overview

- Usage patterns
  - The pyplot API
  - The object-oriented API
  - The pylab API (disapproved)
- Modules
- Toolkits

See also the [API Changes](https://matplotlib.org/api/api_changes.html).

## Usage patterns

Below we describe several common approaches to plotting with Matplotlib.

### The pyplot API

[matplotlib.pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot) is a collection of command style functions that make Matplotlib work like MATLAB. Each pyplot function makes some change to a figure: e.g., creates a figure, creates a plotting area in a figure, plots some lines in a plotting area, decorates the plot with labels, etc.

[pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot) is mainly intended for interactive plots and simple cases of programmatic plot generation.

Further reading:

- The [matplotlib.pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot) function reference
- [Pyplot tutorial](https://matplotlib.org/tutorials/introductory/pyplot.html)
- [Pyplot examples](https://matplotlib.org/gallery/index.html#pyplots-examples)

### The object-oriented API

At its core, Matplotlib is object-oriented. We recommend directly working with the objects, if you need more control and customization of your plots.

In many cases you will create a [Figure](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure) and one or more [Axes](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes) using [pyplot.subplots](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.subplots.html#matplotlib.pyplot.subplots) and from then on only work on these objects. However, it's also possible to create [Figure](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure)s explicitly (e.g. when including them in GUI applications).

Further reading:

- [matplotlib.axes.Axes](https://matplotlib.org/api/axes_api.html#matplotlib.axes.Axes) and [matplotlib.figure.Figure](https://matplotlib.org/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure) for an overview of plotting functions.
- Most of the [examples](https://matplotlib.org/gallery/index.html#examples-index) use the object-oriented approach (except for the pyplot section)

### The pylab API (disapproved)

::: danger Warning

Since heavily importing into the global namespace may result in unexpected behavior, the use of pylab is strongly discouraged. Use [matplotlib.pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot) instead.

:::

pylab is a module that includes [matplotlib.pyplot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.html#module-matplotlib.pyplot), [numpy](https://docs.scipy.org/doc/numpy/reference/index.html#module-numpy) and some additional functions within a single namespace. Its original purpose was to mimic a MATLAB-like way of working by importing all functions into the global namespace. This is considered bad style nowadays.

## Modules

Matplotlib consists of the following submodules:

- matplotlib
- matplotlib.afm
- matplotlib.animation
- matplotlib.artist
- matplotlib.axes
- matplotlib.axis
- matplotlib.backend_bases
- matplotlib.backend_managers
- matplotlib.backend_tools
- matplotlib.backends
- matplotlib.blocking_input
- matplotlib.category
- matplotlib.cbook
- matplotlib.cm
- matplotlib.collections
- matplotlib.colorbar
- matplotlib.colors
- matplotlib.container
- matplotlib.contour
- matplotlib.dates
- matplotlib.dviread
- matplotlib.figure
- matplotlib.font_manager
- matplotlib.fontconfig_pattern
- matplotlib.gridspec
- matplotlib.image
- matplotlib.legend
- matplotlib.legend_handler
- matplotlib.lines
- matplotlib.markers
- matplotlib.mathtext
- matplotlib.mlab
- matplotlib.offsetbox
- matplotlib.patches
- matplotlib.path
- matplotlib.patheffects
- matplotlib.pyplot
- matplotlib.projections
- matplotlib.projections.polar
- matplotlib.rcsetup
- matplotlib.sankey
- matplotlib.scale
- matplotlib.spines
- matplotlib.style
- matplotlib.table
- matplotlib.testing
- matplotlib.text
- matplotlib.textpath
- matplotlib.ticker
- matplotlib.tight_layout
- matplotlib.transforms
- matplotlib.tri
- matplotlib.type1font
- matplotlib.units
- matplotlib.widgets

## Toolkits

[Toolkits](https://matplotlib.org/api/toolkits/index.html#toolkits-index) are collections of application-specific functions that extend Matplotlib. The following toolkits are included:

- Toolkits
- mplot3d API
- Matplotlib axes_grid1 Toolkit
- Matplotlib axisartist Toolkit
- Matplotlib axes_grid Toolkit
