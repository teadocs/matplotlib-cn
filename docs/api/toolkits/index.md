# Toolkits

Toolkits are collections of application-specific functions that extend Matplotlib.

## mplot3d

``mpl_toolkits.mplot3d`` provides some basic 3D plotting (scatter, surf, line, mesh) tools. Not the fastest or most feature complete 3D library out there, but it ships with Matplotlib and thus may be a lighter weight solution for some use cases. Check out the [mplot3d tutorial](https://matplotlib.org/tutorials/toolkits/mplot3d.html) for more information.

../../_images/sphx_glr_contourf3d_2_001.png

Contourf3d 2

- mplot3d
    - Matplotlib mplot3d toolkit
- mplot3d FAQ
    - How is mplot3d different from MayaVi?
    - My 3D plot doesn't look right at certain viewing angles
    - I don't like how the 3D plot is laid out, how do I change that?

### Links
    - mpl3d API: mplot3d API

## Matplotlib axes_grid1 Toolkit
 
The matplotlib mpl_toolkits.axes_grid1 toolkit is a collection of helper classes to ease displaying multiple images in matplotlib. While the aspect parameter in matplotlib adjust the position of the single axes, axes_grid1 toolkit provides a framework to adjust the position of multiple axes according to their aspects.

See What is axes_grid1 toolkit? for a guide on the usage of axes_grid1.

../../_images/sphx_glr_demo_axes_grid_001.png

The submodules of the axes_grid1 API are:

axes_grid1.anchored_artists	
axes_grid1.axes_divider	The axes_divider module provides helper classes to adjust the positions of multiple axes at drawing time.
axes_grid1.axes_grid	
axes_grid1.axes_rgb	
axes_grid1.axes_size	provides a classes of simple units that will be used with AxesDivider class (or others) to determine the size of each axes.
axes_grid1.colorbar	Colorbar toolkit with two classes and a function:
axes_grid1.inset_locator	A collection of functions and objects for creating or placing inset axes.
axes_grid1.mpl_axes	
axes_grid1.parasite_axes	

## Matplotlib axisartist Toolkit

The axisartist namespace includes a derived Axes implementation ( mpl_toolkits.axisartist.Axes). The biggest difference is that the artists that are responsible for drawing axis lines, ticks, ticklabels, and axis labels are separated out from the mpl's Axis class. This change was strongly motivated to support curvilinear grid.

You can find a tutorial describing usage of axisartist at the axisartist user guide.

../../_images/sphx_glr_demo_curvelinear_grid_001.png
The submodules of the axisartist API are:

axisartist.angle_helper	
axisartist.axes_divider	
axisartist.axes_grid	
axisartist.axes_rgb	
axisartist.axis_artist	axis_artist.py module provides axis-related artists.
axisartist.axisline_style	
axisartist.axislines	Axislines includes modified implementation of the Axes class.
axisartist.clip_path	
axisartist.floating_axes	An experimental support for curvilinear grid.
axisartist.grid_finder	
axisartist.grid_helper_curvelinear	An experimental support for curvilinear grid.
axisartist.parasite_axes	

## Matplotlib axes_grid Toolkit

Note: AxesGrid toolkit has been a part of matplotlib since v 0.99. Originally, the toolkit had a single namespace of axes_grid. In more recent version, the toolkit has divided into two separate namespace (axes_grid1 and axisartist). While axes_grid namespace is maintained for the backward compatibility, use of axes_grid1 and axisartist is recommended. For the documentation on axes_grid, see the previous version of the docs.

Matplotlib axes_grid1 Toolkit
Matplotlib axisartist Toolkit