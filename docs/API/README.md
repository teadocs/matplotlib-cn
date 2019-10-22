---
sidebarDepth: 3
sidebar: auto
---

# API 概览

- [Usage patterns](https://matplotlib.org/api/index.html#usage-patterns)
  - [The pyplot API](https://matplotlib.org/api/index.html#the-pyplot-api)
  - [The object-oriented API](https://matplotlib.org/api/index.html#the-object-oriented-api)
  - [The pylab API (disapproved)](https://matplotlib.org/api/index.html#the-pylab-api-disapproved)
- [Modules](https://matplotlib.org/api/index.html#modules)
- [Toolkits](https://matplotlib.org/api/index.html#toolkits)

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

- [matplotlib](https://matplotlib.org/api/matplotlib_configuration_api.html)
- [matplotlib.afm](https://matplotlib.org/api/afm_api.html)
- [matplotlib.animation](https://matplotlib.org/api/animation_api.html)
- [matplotlib.artist](https://matplotlib.org/api/artist_api.html)
- [matplotlib.axes](https://matplotlib.org/api/axes_api.html)
- [matplotlib.axis](https://matplotlib.org/api/axis_api.html)
- [matplotlib.backend_bases](https://matplotlib.org/api/backend_bases_api.html)
- [matplotlib.backend_managers](https://matplotlib.org/api/backend_managers_api.html)
- [matplotlib.backend_tools](https://matplotlib.org/api/backend_tools_api.html)
- [matplotlib.backends](https://matplotlib.org/api/index_backend_api.html)
- [matplotlib.blocking_input](https://matplotlib.org/api/blocking_input_api.html)
- [matplotlib.category](https://matplotlib.org/api/category_api.html)
- [matplotlib.cbook](https://matplotlib.org/api/cbook_api.html)
- [matplotlib.cm](https://matplotlib.org/api/cm_api.html)
- [matplotlib.collections](https://matplotlib.org/api/collections_api.html)
- [matplotlib.colorbar](https://matplotlib.org/api/colorbar_api.html)
- [matplotlib.colors](https://matplotlib.org/api/colors_api.html)
- [matplotlib.container](https://matplotlib.org/api/container_api.html)
- [matplotlib.contour](https://matplotlib.org/api/contour_api.html)
- [matplotlib.dates](https://matplotlib.org/api/dates_api.html)
- [matplotlib.dviread](https://matplotlib.org/api/dviread.html)
- [matplotlib.figure](https://matplotlib.org/api/figure_api.html)
- [matplotlib.font_manager](https://matplotlib.org/api/font_manager_api.html)
- [matplotlib.fontconfig_pattern](https://matplotlib.org/api/fontconfig_pattern_api.html)
- [matplotlib.gridspec](https://matplotlib.org/api/gridspec_api.html)
- [matplotlib.image](https://matplotlib.org/api/image_api.html)
- [matplotlib.legend](https://matplotlib.org/api/legend_api.html)
- [matplotlib.legend_handler](https://matplotlib.org/api/legend_handler_api.html)
- [matplotlib.lines](https://matplotlib.org/api/lines_api.html)
- [matplotlib.markers](https://matplotlib.org/api/markers_api.html)
- [matplotlib.mathtext](https://matplotlib.org/api/mathtext_api.html)
- [matplotlib.mlab](https://matplotlib.org/api/mlab_api.html)
- [matplotlib.offsetbox](https://matplotlib.org/api/offsetbox_api.html)
- [matplotlib.patches](https://matplotlib.org/api/patches_api.html)
- [matplotlib.path](https://matplotlib.org/api/path_api.html)
- [matplotlib.patheffects](https://matplotlib.org/api/patheffects_api.html)
- [matplotlib.pyplot](https://matplotlib.org/api/pyplot_summary.html)
- [matplotlib.projections](https://matplotlib.org/api/projections_api.html)
- [matplotlib.projections.polar](https://matplotlib.org/api/projections_api.html#module-matplotlib.projections.polar)
- [matplotlib.rcsetup](https://matplotlib.org/api/rcsetup_api.html)
- [matplotlib.sankey](https://matplotlib.org/api/sankey_api.html)
- [matplotlib.scale](https://matplotlib.org/api/scale_api.html)
- [matplotlib.spines](https://matplotlib.org/api/spines_api.html)
- [matplotlib.style](https://matplotlib.org/api/style_api.html)
- [matplotlib.table](https://matplotlib.org/api/table_api.html)
- [matplotlib.testing](https://matplotlib.org/api/testing_api.html)
- [matplotlib.text](https://matplotlib.org/api/text_api.html)
- [matplotlib.textpath](https://matplotlib.org/api/textpath_api.html)
- [matplotlib.ticker](https://matplotlib.org/api/ticker_api.html)
- [matplotlib.tight_layout](https://matplotlib.org/api/tight_layout_api.html)
- [matplotlib.transforms](https://matplotlib.org/api/transformations.html)
- [matplotlib.tri](https://matplotlib.org/api/tri_api.html)
- [matplotlib.type1font](https://matplotlib.org/api/type1font.html)
- [matplotlib.units](https://matplotlib.org/api/units_api.html)
- [matplotlib.widgets](https://matplotlib.org/api/widgets_api.html)

## Toolkits

[Toolkits](https://matplotlib.org/api/toolkits/index.html#toolkits-index) are collections of application-specific functions that extend Matplotlib. The following toolkits are included:

- [Toolkits](https://matplotlib.org/api/toolkits/index.html)
- [mplot3d API](https://matplotlib.org/api/toolkits/mplot3d.html)
- [Matplotlib axes_grid1 Toolkit](https://matplotlib.org/api/toolkits/axes_grid1.html)
- [Matplotlib axisartist Toolkit](https://matplotlib.org/api/toolkits/axisartist.html)
- [Matplotlib axes_grid Toolkit](https://matplotlib.org/api/toolkits/axes_grid.html)

