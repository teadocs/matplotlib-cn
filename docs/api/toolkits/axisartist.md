# Matplotlib axisartist Toolkit

The axisartist namespace includes a derived Axes implementation (``mpl_toolkits.axisartist.Axes``). The biggest difference is that the artists that are responsible for drawing axis lines, ticks, ticklabels, and axis labels are separated out from the mpl's Axis class. This change was strongly motivated to support curvilinear grid.

You can find a tutorial describing usage of axisartist at the [axisartist](https://matplotlib.org/tutorials/toolkits/axisartist.html#axisartist-users-guide-index) user guide.

../../_images/sphx_glr_demo_curvelinear_grid_001.png

**The submodules of the axisartist API are**:

方法 | 描述
---|---
axisartist.angle_helper | 
axisartist.axes_divider | 
axisartist.axes_grid | 
axisartist.axes_rgb | 
axisartist.axis_artist | axis_artist.py module provides axis-related artists.
axisartist.axisline_style | 
axisartist.axislines | Axislines includes modified implementation of the Axes class.
axisartist.clip_path | 
axisartist.floating_axes | An experimental support for curvilinear grid.
axisartist.grid_finder | 
axisartist.grid_helper_curvelinear | An experimental support for curvilinear grid.
axisartist.parasite_axes | 