# mplot3d API

**目录**

- mplot3d API
    - axes3d
    - axis3d
    - art3d
    - Art3D Utility Functions
    - proj3d

## axes3d

Note: Significant effort went into bringing axes3d to feature-parity with regular axes objects for version 1.1.0. However, more work remains. Please report any functions that do not behave as expected as a bug. In addition, help and patches would be greatly appreciated!

方法 | 描述
---|---
axes3d.Axes3D(fig[, rect, azim, elev, ...]) | 3D axes object.

## axis3d

Note: See mpl_toolkits.mplot3d.axis3d._axinfo for a dictionary containing constants that may be modified for controlling the look and feel of mplot3d axes (e.g., label spacing, font colors and panel colors). Historically, axis3d has suffered from having hard-coded constants that precluded user adjustments, and this dictionary was implemented in version 1.1 as a stop-gap measure.

方法 | 描述
---|---
axis3d.Axis(adir, v_intervalx, d_intervalx, ...) | -

## art3d

方法 | 描述
---|---
art3d.Line3D(xs, ys, zs, *args, **kwargs) | 3D line object.
art3d.Line3DCollection(segments[, ...]) | A collection of 3D lines.
art3d.Patch3D(*args[, zs, zdir]) | 3D patch object.
art3d.Patch3DCollection(*args[, zs, zdir, ...]) | A collection of 3D patches.
art3d.Path3DCollection(*args[, zs, zdir, ...]) | A collection of 3D paths.
art3d.PathPatch3D(path, *[, zs, zdir]) | 3D PathPatch object.
art3d.Poly3DCollection(verts, *args[, zsort]) | A collection of 3D polygons.
art3d.Text3D([x, y, z, text, zdir]) | Text object with 3D position and direction.

## Art3D Utility Functions

方法 | 描述
---|---
art3d.get_colors(c, num) | Stretch the color argument to provide the required number num.
art3d.get_dir_vector(zdir) | Return a direction vector.
art3d.get_patch_verts(patch) | Return a list of vertices for the path of a patch.
art3d.juggle_axes(xs, ys, zs, zdir) | Reorder coordinates so that 2D xs, ys can be plotted in the plane orthogonal to zdir.
art3d.line_2d_to_3d(line[, zs, zdir]) | Convert a 2D line to 3D.
art3d.line_collection_2d_to_3d(col[, zs, zdir]) | Convert a LineCollection to a Line3DCollection object.
art3d.norm_angle(a) | Return the given angle normalized to -180 < a <= 180 degrees.
art3d.norm_text_angle(a) | Return the given angle normalized to -90 < a <= 90 degrees.
art3d.patch_2d_to_3d(patch[, z, zdir]) | Convert a Patch to a Patch3D object.
art3d.patch_collection_2d_to_3d(col[, zs, ...]) | Convert a PatchCollection into a Patch3DCollection object (or a PathCollection into a Path3DCollection object).
art3d.path_to_3d_segment(path[, zs, zdir]) | Convert a path to a 3D segment.
art3d.path_to_3d_segment_with_codes(path[, ...]) | Convert a path to a 3D segment with path codes.
art3d.pathpatch_2d_to_3d(pathpatch[, z, zdir]) | Convert a PathPatch to a PathPatch3D object.
art3d.paths_to_3d_segments(paths[, zs, zdir]) | Convert paths from a collection object to 3D segments.
art3d.paths_to_3d_segments_with_codes(paths) | Convert paths from a collection object to 3D segments with path codes.
art3d.poly_collection_2d_to_3d(col[, zs, zdir]) | Convert a PolyCollection to a Poly3DCollection object.
art3d.rotate_axes(xs, ys, zs, zdir) | Reorder coordinates so that the axes are rotated with zdir along the original z axis.
art3d.text_2d_to_3d(obj[, z, zdir]) | Convert a Text to a Text3D object.
art3d.zalpha(colors, zs) | Modify the alphas of the color list according to depth.

## proj3d

方法 | 描述
---|---
proj3d.inv_transform(xs, ys, zs, M) | -
proj3d.line2d(p0, p1) | Return 2D equation of line in the form ax+by+c = 0
proj3d.line2d_dist(l, p) | Distance from line to point line is a tuple of coefficients a,b,c
proj3d.line2d_seg_dist(p1, p2, p0) | distance(s) from line defined by p1 - p2 to point(s) p0
proj3d.mod(v) | 3d vector length
proj3d.persp_transformation(zfront, zback) | 
proj3d.proj_points(points, M) | 
proj3d.proj_trans_clip_points(points, M) | 
proj3d.proj_trans_points(points, M) | 
proj3d.proj_transform(xs, ys, zs, M) | Transform the points by the projection matrix
proj3d.proj_transform_clip(xs, ys, zs, M) | Transform the points by the projection matrix and return the clipping result returns txs,tys,tzs,tis
proj3d.proj_transform_vec(vec, M) | 
proj3d.proj_transform_vec_clip(vec, M) | 
proj3d.rot_x(V, alpha) | 
proj3d.transform(xs, ys, zs, M) | Transform the points by the projection matrix
proj3d.vec_pad_ones(xs, ys, zs) | 
proj3d.view_transformation(E, R, V) | 
proj3d.world_transformation(xmin, xmax, ...) | 