# 使用样式表和rcparams自定义Matplotlib

自定义Matplotlib的属性和默认样式的提示。

## 使用样式表

``样式``包添加了对易于切换绘制“样式”的支持，其具有与[matplotlib rc](https://matplotlib.org/tutorials/introductory/customizing.html#customizing-with-matplotlibrc-files)文件相同的参数（在启动时读取以配置matplotlib）。

Matplotlib提供了许多[预定义的样式](https://github.com/matplotlib/matplotlib/tree/master/lib/matplotlib/mpl-data/stylelib)。例如，有一种名为“gglot”的预定义样式，它模拟了[ggplot](http://ggplot2.org/)（一种流行的[R](https://www.r-project.org/)绘图软件包）的美感。要使用此样式，只需添加：

```python
import numpy as np
import matplotlib.pyplot as plt
import matplotlib as mpl
plt.style.use('ggplot')
data = np.random.randn(50)
```

要列出所有可用的样式，请使用：

```python
print(plt.style.available)
```

输出：

```python
['seaborn-dark', 'dark_background', 'seaborn-pastel', 'seaborn-colorblind', 'tableau-colorblind10', 'seaborn-notebook', 'seaborn-dark-palette', 'grayscale', 'seaborn-poster', 'seaborn', 'bmh', 'seaborn-talk', 'seaborn-ticks', '_classic_test', 'ggplot', 'seaborn-white', 'classic', 'Solarize_Light2', 'seaborn-paper', 'fast', 'fivethirtyeight', 'seaborn-muted', 'seaborn-whitegrid', 'seaborn-darkgrid', 'seaborn-bright', 'seaborn-deep']
```

## 定义自己的风格

您可以通过调用 `style.use`` 以及样式表的路径或URL来创建自定义样式并使用它们。此外，如果将``<style-name>.mplstyle``文件添加到mpl_configdir / stylelib，则可以通过调用 ``style.use(<style-name>)`` 重用自定义样式表。 默认情况下，``mpl_configdir`` 应为 ``~/.config/matplotlib`` ，但您可以使用matplotlib.get_configdir()来检查您的位置。您可能需要创建此目录。您还可以通过设置 MPLCONFIGDIR环境变量 来更改matplotlib查找 stylelib/ 文件夹的目录，请参阅[matplotlib配置和缓存目录位置](https://matplotlib.org/faq/troubleshooting_faq.html#locating-matplotlib-config-dir)。

请注意，如果样式具有相同的名称，``mpl_configdir / stylelib`` 中的自定义样式表将覆盖matplotlib定义的样式表。

例如，您可能希望使用以下命令创建 ``mpl_configdir/stylelib/presentation.mplstyle``：

```python
axes.titlesize : 24
axes.labelsize : 20
lines.linewidth : 3
lines.markersize : 10
xtick.labelsize : 16
ytick.labelsize : 16
```

然后，当您想要将针对纸张设计的绘图调整为在演示文稿中看起来很好的绘图时，您可以添加：

```python
>>> import matplotlib.pyplot as plt
>>> plt.style.use('presentation')
```

## 构图风格

样式表旨在组合在一起。因此，您可以拥有一个自定义颜色的样式表和一个可以改变演示文稿元素大小的单独样式表。通过传递样式列表可以轻松组合这些样式：

```python
>>> import matplotlib.pyplot as plt
>>> plt.style.use(['dark_background', 'presentation'])
```

请注意，右侧的样式将覆盖左侧样式已定义的值。

## 临时样式

如果您只想为特定代码块使用样式但不想更改全局样式，则样式包提供上下文管理器，用于将更改限制为特定范围。要隔离样式更改，可以编写如下内容：

```python
with plt.style.context(('dark_background')):
    plt.plot(np.sin(np.linspace(0, 2 * np.pi)), 'r-o')
plt.show()
```

![临时样式](/static/images/tutorials/sphx_glr_customizing_001.png)

# matplotlib rcParams

## 动态rc设置

您还可以在python脚本中动态更改默认的rc设置，或者从python shell以交互方式更改。 所有rc设置都存储在一个名为[matplotlib.rcParams](https://matplotlib.org/api/matplotlib_configuration_api.html#matplotlib.rcParams)的类字典变量中，该变量对于matplotlib包是全局的。rcParams可以直接修改，例如：

```python
mpl.rcParams['lines.linewidth'] = 2
mpl.rcParams['lines.color'] = 'r'
plt.plot(data)
```

![折线图](/static/images/tutorials/sphx_glr_customizing_002.png)

Matplotlib还提供了一些用于修改rc设置的便捷功能。[matplotlib.rc()](https://matplotlib.org/api/matplotlib_configuration_api.html#matplotlib.rc)命令可用于使用关键字参数一次修改单个组中的多个设置：

```python
mpl.rc('lines', linewidth=4, color='g')
plt.plot(data)
```

![折线图2](/static/images/tutorials/sphx_glr_customizing_003.png)

[matplotlib.rcdefaults()](https://matplotlib.org/api/matplotlib_configuration_api.html#matplotlib.rcdefaults) 命令将恢复标准的matplotlib默认设置。

设置rcParams的值时有一定程度的验证，有关详细信息，请参阅[matplotlib.rcsetup](https://matplotlib.org/api/rcsetup_api.html#module-matplotlib.rcsetup)。

## matplotlibrc文件

matplotlib使用``matplotlibrc``配置文件来自定义各种属性，我们称之为 ``rc设置或rc参数``。您可以控制matplotlib中几乎每个属性的默认值：图形大小和dpi，线宽，颜色和样式，轴，轴和网格属性，文本和字体属性等。matplotlib按以下顺序在四个位置查找``matplotlibrc``：

1. 当前工作目录中的``matplotlibrc``，通常用于您不希望在其他地方应用的特定自定义。
1. ``$ MATPLOTLIBRC``如果是文件，否则 ``$MATPLOTLIBRC/matplotlibrc``。
1. 它接下来是在特定于用户的位置，具体取决于您的平台：
    - 在Linux和FreeBSD上，如果您已经自定义环境，它会查看.config/matplotlib/matplotlibrc（或$ XDG_CONFIG_HOME/matplotlib/matplotlibrc）。On Linux and FreeBSD, it looks in .config/matplotlib/matplotlibrc (or $XDG_CONFIG_HOME/matplotlib/matplotlibrc) if you've customized your environment.
    - 在其他平台上，它查找.matplotlib/matplotlibrc。
    请参阅[matplotlib配置和缓存目录位置](https://matplotlib.org/faq/troubleshooting_faq.html#locating-matplotlib-config-dir)。
1. ``INSTALL/matplotlib/mpl-data/matplotlibrc``，其中 *INSTALL* 类似于Linux上的``/usr/lib/python3.5/site-packages``，可能是Windows上的 ``C:\Python35\Lib\site-packages``。每次安装matplotlib时，都会覆盖此文件，因此如果要保存自定义项，请将此文件移动到特定于用户的matplotlib目录。

一旦找到 ``matplotlibrc`` 文件，它就不会搜索任何其他路径。

要显示当前活动的matplotlibrc文件的加载位置，可以执行以下操作：

```python
>>> import matplotlib
>>> matplotlib.matplotlib_fname()
'/home/foo/.config/matplotlib/matplotlibrc'
```

请参阅下面的示例[matplotlibrc文件](https://matplotlib.org/tutorials/introductory/customizing.html#matplotlibrc-sample)。虽然所有参数都是可选的，但您应该几乎总是设置后端，否则matplotlib将选择Agg，一个非交互式后端。 这可能会导致意外行为，因为如果您没有 ``matplotlibrc`` 文件，它通常会回退到``INSTALL/matplotlib/mpl-data/matplotlibrc``，它通常由软件包维护者设置为交互式后端。

### 一个示例matplotlibrc文件

```python
#### MATPLOTLIBRC FORMAT

## This is a sample matplotlib configuration file - you can find a copy
## of it on your system in
## site-packages/matplotlib/mpl-data/matplotlibrc.  If you edit it
## there, please note that it will be overwritten in your next install.
## If you want to keep a permanent local copy that will not be
## overwritten, place it in the following location:
## unix/linux:
##      $HOME/.config/matplotlib/matplotlibrc or
##      $XDG_CONFIG_HOME/matplotlib/matplotlibrc (if $XDG_CONFIG_HOME is set)
## other platforms:
##      $HOME/.matplotlib/matplotlibrc
##
## See http://matplotlib.org/users/customizing.html#the-matplotlibrc-file for
## more details on the paths which are checked for the configuration file.
##
## This file is best viewed in a editor which supports python mode
## syntax highlighting. Blank lines, or lines starting with a comment
## symbol, are ignored, as are trailing comments.  Other lines must
## have the format
##     key : val ## optional comment
##
## Colors: for the color values below, you can either use - a
## matplotlib color string, such as r, k, or b - an rgb tuple, such as
## (1.0, 0.5, 0.0) - a hex string, such as ff00ff - a scalar
## grayscale intensity such as 0.75 - a legal html color name, e.g., red,
## blue, darkslategray

##### CONFIGURATION BEGINS HERE

## The default backend. If you omit this parameter, the first
## working backend from the following list is used:
## MacOSX Qt5Agg Qt4Agg Gtk3Agg GTK3Cairo TkAgg WxAgg Agg Cairo
##
## Other choices include: WX PS PDF SVG Template.
##
## You can also deploy your own backend outside of matplotlib by
## referring to the module name (which must be in the PYTHONPATH) as
## 'module://my_backend'.
#backend      : Agg

## Note that this can be overridden by the environment variable
## QT_API used by Enthought Tool Suite (ETS); valid values are
## "pyqt" and "pyside".  The "pyqt" setting has the side effect of
## forcing the use of Version 2 API for QString and QVariant.

## The port to use for the web server in the WebAgg backend.
#webagg.port : 8988

## The address on which the WebAgg web server should be reachable
#webagg.address : 127.0.0.1

## If webagg.port is unavailable, a number of other random ports will
## be tried until one that is available is found.
#webagg.port_retries : 50

## When True, open the webbrowser to the plot that is shown
#webagg.open_in_browser : True

## if you are running pyplot inside a GUI and your backend choice
## conflicts, we will automatically try to find a compatible one for
## you if backend_fallback is True
#backend_fallback: True

#interactive  : False
#toolbar      : toolbar2   ## None | toolbar2  ("classic" is deprecated)
#timezone     : UTC        ## a pytz timezone string, e.g., US/Central or Europe/Paris

## Where your matplotlib data lives if you installed to a non-default
## location.  This is where the matplotlib fonts, bitmaps, etc reside
#datapath : /home/jdhunter/mpldata


#### LINES
## See http://matplotlib.org/api/artist_api.html#module-matplotlib.lines for more
## information on line properties.
#lines.linewidth   : 1.5     ## line width in points
#lines.linestyle   : -       ## solid line
#lines.color       : C0      ## has no affect on plot(); see axes.prop_cycle
#lines.marker      : None    ## the default marker
#lines.markerfacecolor  : auto    ## the default markerfacecolor
#lines.markeredgecolor  : auto    ## the default markeredgecolor
#lines.markeredgewidth  : 1.0     ## the line width around the marker symbol
#lines.markersize  : 6            ## markersize, in points
#lines.dash_joinstyle : round        ## miter|round|bevel
#lines.dash_capstyle : butt          ## butt|round|projecting
#lines.solid_joinstyle : round       ## miter|round|bevel
#lines.solid_capstyle : projecting   ## butt|round|projecting
#lines.antialiased : True         ## render lines in antialiased (no jaggies)

## The three standard dash patterns.  These are scaled by the linewidth.
#lines.dashed_pattern : 3.7, 1.6
#lines.dashdot_pattern : 6.4, 1.6, 1, 1.6
#lines.dotted_pattern : 1, 1.65
#lines.scale_dashes : True

#markers.fillstyle: full ## full|left|right|bottom|top|none

#### PATCHES
## Patches are graphical objects that fill 2D space, like polygons or
## circles.  See
## http://matplotlib.org/api/artist_api.html#module-matplotlib.patches
## information on patch properties
#patch.linewidth        : 1        ## edge width in points.
#patch.facecolor        : C0
#patch.edgecolor        : black   ## if forced, or patch is not filled
#patch.force_edgecolor  : False   ## True to always use edgecolor
#patch.antialiased      : True    ## render patches in antialiased (no jaggies)

#### HATCHES
#hatch.color     : black
#hatch.linewidth : 1.0

#### Boxplot
#boxplot.notch       : False
#boxplot.vertical    : True
#boxplot.whiskers    : 1.5
#boxplot.bootstrap   : None
#boxplot.patchartist : False
#boxplot.showmeans   : False
#boxplot.showcaps    : True
#boxplot.showbox     : True
#boxplot.showfliers  : True
#boxplot.meanline    : False

#boxplot.flierprops.color           : black
#boxplot.flierprops.marker          : o
#boxplot.flierprops.markerfacecolor : none
#boxplot.flierprops.markeredgecolor : black
#boxplot.flierprops.markersize      : 6
#boxplot.flierprops.linestyle       : none
#boxplot.flierprops.linewidth       : 1.0

#boxplot.boxprops.color     : black
#boxplot.boxprops.linewidth : 1.0
#boxplot.boxprops.linestyle : -

#boxplot.whiskerprops.color     : black
#boxplot.whiskerprops.linewidth : 1.0
#boxplot.whiskerprops.linestyle : -

#boxplot.capprops.color     : black
#boxplot.capprops.linewidth : 1.0
#boxplot.capprops.linestyle : -

#boxplot.medianprops.color     : C1
#boxplot.medianprops.linewidth : 1.0
#boxplot.medianprops.linestyle : -

#boxplot.meanprops.color           : C2
#boxplot.meanprops.marker          : ^
#boxplot.meanprops.markerfacecolor : C2
#boxplot.meanprops.markeredgecolor : C2
#boxplot.meanprops.markersize      :  6
#boxplot.meanprops.linestyle       : --
#boxplot.meanprops.linewidth       : 1.0


#### FONT

## font properties used by text.Text.  See
## http://matplotlib.org/api/font_manager_api.html for more
## information on font properties.  The 6 font properties used for font
## matching are given below with their default values.
##
## The font.family property has five values: 'serif' (e.g., Times),
## 'sans-serif' (e.g., Helvetica), 'cursive' (e.g., Zapf-Chancery),
## 'fantasy' (e.g., Western), and 'monospace' (e.g., Courier).  Each of
## these font families has a default list of font names in decreasing
## order of priority associated with them.  When text.usetex is False,
## font.family may also be one or more concrete font names.
##
## The font.style property has three values: normal (or roman), italic
## or oblique.  The oblique style will be used for italic, if it is not
## present.
##
## The font.variant property has two values: normal or small-caps.  For
## TrueType fonts, which are scalable fonts, small-caps is equivalent
## to using a font size of 'smaller', or about 83%% of the current font
## size.
##
## The font.weight property has effectively 13 values: normal, bold,
## bolder, lighter, 100, 200, 300, ..., 900.  Normal is the same as
## 400, and bold is 700.  bolder and lighter are relative values with
## respect to the current weight.
##
## The font.stretch property has 11 values: ultra-condensed,
## extra-condensed, condensed, semi-condensed, normal, semi-expanded,
## expanded, extra-expanded, ultra-expanded, wider, and narrower.  This
## property is not currently implemented.
##
## The font.size property is the default font size for text, given in pts.
## 10 pt is the standard value.

#font.family         : sans-serif
#font.style          : normal
#font.variant        : normal
#font.weight         : normal
#font.stretch        : normal
## note that font.size controls default text sizes.  To configure
## special text sizes tick labels, axes, labels, title, etc, see the rc
## settings for axes and ticks. Special text sizes can be defined
## relative to font.size, using the following values: xx-small, x-small,
## small, medium, large, x-large, xx-large, larger, or smaller
#font.size           : 10.0
#font.serif          : DejaVu Serif, Bitstream Vera Serif, Computer Modern Roman, New Century Schoolbook, Century Schoolbook L, Utopia, ITC Bookman, Bookman, Nimbus Roman No9 L, Times New Roman, Times, Palatino, Charter, serif
#font.sans-serif     : DejaVu Sans, Bitstream Vera Sans, Computer Modern Sans Serif, Lucida Grande, Verdana, Geneva, Lucid, Arial, Helvetica, Avant Garde, sans-serif
#font.cursive        : Apple Chancery, Textile, Zapf Chancery, Sand, Script MT, Felipa, cursive
#font.fantasy        : Comic Sans MS, Chicago, Charcoal, ImpactWestern, Humor Sans, xkcd, fantasy
#font.monospace      : DejaVu Sans Mono, Bitstream Vera Sans Mono, Computer Modern Typewriter, Andale Mono, Nimbus Mono L, Courier New, Courier, Fixed, Terminal, monospace

#### TEXT
## text properties used by text.Text.  See
## http://matplotlib.org/api/artist_api.html#module-matplotlib.text for more
## information on text properties
#text.color          : black

#### LaTeX customizations. See http://wiki.scipy.org/Cookbook/Matplotlib/UsingTex
#text.usetex         : False  ## use latex for all text handling. The following fonts
                              ## are supported through the usual rc parameter settings:
                              ## new century schoolbook, bookman, times, palatino,
                              ## zapf chancery, charter, serif, sans-serif, helvetica,
                              ## avant garde, courier, monospace, computer modern roman,
                              ## computer modern sans serif, computer modern typewriter
                              ## If another font is desired which can loaded using the
                              ## LaTeX \usepackage command, please inquire at the
                              ## matplotlib mailing list
#text.latex.preamble :      ## IMPROPER USE OF THIS FEATURE WILL LEAD TO LATEX FAILURES
                            ## AND IS THEREFORE UNSUPPORTED. PLEASE DO NOT ASK FOR HELP
                            ## IF THIS FEATURE DOES NOT DO WHAT YOU EXPECT IT TO.
                            ## preamble is a comma separated list of LaTeX statements
                            ## that are included in the LaTeX document preamble.
                            ## An example:
                            ## text.latex.preamble : \usepackage{bm},\usepackage{euler}
                            ## The following packages are always loaded with usetex, so
                            ## beware of package collisions: color, geometry, graphicx,
                            ## type1cm, textcomp. Adobe Postscript (PSSNFS) font packages
                            ## may also be loaded, depending on your font settings
#text.latex.preview : False

#text.hinting : auto   ## May be one of the following:
                       ##   none: Perform no hinting
                       ##   auto: Use FreeType's autohinter
                       ##   native: Use the hinting information in the
                       #              font file, if available, and if your
                       #              FreeType library supports it
                       ##   either: Use the native hinting information,
                       #              or the autohinter if none is available.
                       ## For backward compatibility, this value may also be
                       ## True === 'auto' or False === 'none'.
#text.hinting_factor : 8 ## Specifies the amount of softness for hinting in the
                         ## horizontal direction.  A value of 1 will hint to full
                         ## pixels.  A value of 2 will hint to half pixels etc.
#text.antialiased : True ## If True (default), the text will be antialiased.
                         ## This only affects the Agg backend.

## The following settings allow you to select the fonts in math mode.
## They map from a TeX font name to a fontconfig font pattern.
## These settings are only used if mathtext.fontset is 'custom'.
## Note that this "custom" mode is unsupported and may go away in the
## future.
#mathtext.cal : cursive
#mathtext.rm  : sans
#mathtext.tt  : monospace
#mathtext.it  : sans:italic
#mathtext.bf  : sans:bold
#mathtext.sf  : sans
#mathtext.fontset : dejavusans ## Should be 'dejavusans' (default),
                               ## 'dejavuserif', 'cm' (Computer Modern), 'stix',
                               ## 'stixsans' or 'custom'
#mathtext.fallback_to_cm : True  ## When True, use symbols from the Computer Modern
                                 ## fonts when a symbol can not be found in one of
                                 ## the custom math fonts.
#mathtext.default : it ## The default font to use for math.
                       ## Can be any of the LaTeX font names, including
                       ## the special name "regular" for the same font
                       ## used in regular text.

#### AXES
## default face and edge color, default tick sizes,
## default fontsizes for ticklabels, and so on.  See
## http://matplotlib.org/api/axes_api.html#module-matplotlib.axes
#axes.facecolor      : white   ## axes background color
#axes.edgecolor      : black   ## axes edge color
#axes.linewidth      : 0.8     ## edge linewidth
#axes.grid           : False   ## display grid or not
#axes.grid.axis      : both    ## which axis the grid should apply to
#axes.grid.which     : major   ## gridlines at major, minor or both ticks
#axes.titlesize      : large   ## fontsize of the axes title
#axes.titleweight    : normal  ## font weight of title
#axes.titlepad       : 6.0     ## pad between axes and title in points
#axes.labelsize      : medium  ## fontsize of the x any y labels
#axes.labelpad       : 4.0     ## space between label and axis
#axes.labelweight    : normal  ## weight of the x and y labels
#axes.labelcolor     : black
#axes.axisbelow      : line    ## draw axis gridlines and ticks below
                               ## patches (True); above patches but below
                               ## lines ('line'); or above all (False)
#axes.formatter.limits : -7, 7 ## use scientific notation if log10
                               ## of the axis range is smaller than the
                               ## first or larger than the second
#axes.formatter.use_locale : False ## When True, format tick labels
                                   ## according to the user's locale.
                                   ## For example, use ',' as a decimal
                                   ## separator in the fr_FR locale.
#axes.formatter.use_mathtext : False ## When True, use mathtext for scientific
                                     ## notation.
#axes.formatter.min_exponent: 0 ## minimum exponent to format in scientific notation
#axes.formatter.useoffset      : True    ## If True, the tick label formatter
                                         ## will default to labeling ticks relative
                                         ## to an offset when the data range is
                                         ## small compared to the minimum absolute
                                         ## value of the data.
#axes.formatter.offset_threshold : 4     ## When useoffset is True, the offset
                                         ## will be used when it can remove
                                         ## at least this number of significant
                                         ## digits from tick labels.
#axes.spines.left   : True   ## display axis spines
#axes.spines.bottom : True
#axes.spines.top    : True
#axes.spines.right  : True
#axes.unicode_minus  : True    ## use unicode for the minus symbol
                               ## rather than hyphen.  See
                               ## http://en.wikipedia.org/wiki/Plus_and_minus_signs#Character_codes
#axes.prop_cycle    : cycler('color', ['1f77b4', 'ff7f0e', '2ca02c', 'd62728', '9467bd', '8c564b', 'e377c2', '7f7f7f', 'bcbd22', '17becf'])
                      ## color cycle for plot lines  as list of string
                      ## colorspecs: single letter, long name, or web-style hex
					  ## Note the use of string escapes here ('1f77b4', instead of 1f77b4)
                      ## as opposed to the rest of this file.
#axes.autolimit_mode : data ## How to scale axes limits to the data.
                            ## Use "data" to use data limits, plus some margin
                            ## Use "round_number" move to the nearest "round" number
#axes.xmargin        : .05  ## x margin.  See `axes.Axes.margins`
#axes.ymargin        : .05  ## y margin See `axes.Axes.margins`
#polaraxes.grid      : True    ## display grid on polar axes
#axes3d.grid         : True    ## display grid on 3d axes

#### DATES
## These control the default format strings used in AutoDateFormatter.
## Any valid format datetime format string can be used (see the python
## `datetime` for details).  For example using '%%x' will use the locale date representation
## '%%X' will use the locale time representation and '%%c' will use the full locale datetime
## representation.
## These values map to the scales:
##     {'year': 365, 'month': 30, 'day': 1, 'hour': 1/24, 'minute': 1 / (24 * 60)}

#date.autoformatter.year     : %Y
#date.autoformatter.month    : %Y-%m
#date.autoformatter.day      : %Y-%m-%d
#date.autoformatter.hour     : %m-%d %H
#date.autoformatter.minute   : %d %H:%M
#date.autoformatter.second   : %H:%M:%S
#date.autoformatter.microsecond   : %M:%S.%f

#### TICKS
## see http://matplotlib.org/api/axis_api.html#matplotlib.axis.Tick
#xtick.top            : False  ## draw ticks on the top side
#xtick.bottom         : True   ## draw ticks on the bottom side
#xtick.labeltop       : False  ## draw label on the top
#xtick.labelbottom    : True   ## draw label on the bottom
#xtick.major.size     : 3.5    ## major tick size in points
#xtick.minor.size     : 2      ## minor tick size in points
#xtick.major.width    : 0.8    ## major tick width in points
#xtick.minor.width    : 0.6    ## minor tick width in points
#xtick.major.pad      : 3.5    ## distance to major tick label in points
#xtick.minor.pad      : 3.4    ## distance to the minor tick label in points
#xtick.color          : black  ## color of the tick labels
#xtick.labelsize      : medium ## fontsize of the tick labels
#xtick.direction      : out    ## direction: in, out, or inout
#xtick.minor.visible  : False  ## visibility of minor ticks on x-axis
#xtick.major.top      : True   ## draw x axis top major ticks
#xtick.major.bottom   : True   ## draw x axis bottom major ticks
#xtick.minor.top      : True   ## draw x axis top minor ticks
#xtick.minor.bottom   : True   ## draw x axis bottom minor ticks
#xtick.alignment      : center ## alignment of xticks

#ytick.left           : True   ## draw ticks on the left side
#ytick.right          : False  ## draw ticks on the right side
#ytick.labelleft      : True   ## draw tick labels on the left side
#ytick.labelright     : False  ## draw tick labels on the right side
#ytick.major.size     : 3.5    ## major tick size in points
#ytick.minor.size     : 2      ## minor tick size in points
#ytick.major.width    : 0.8    ## major tick width in points
#ytick.minor.width    : 0.6    ## minor tick width in points
#ytick.major.pad      : 3.5    ## distance to major tick label in points
#ytick.minor.pad      : 3.4    ## distance to the minor tick label in points
#ytick.color          : black  ## color of the tick labels
#ytick.labelsize      : medium ## fontsize of the tick labels
#ytick.direction      : out    ## direction: in, out, or inout
#ytick.minor.visible  : False  ## visibility of minor ticks on y-axis
#ytick.major.left     : True   ## draw y axis left major ticks
#ytick.major.right    : True   ## draw y axis right major ticks
#ytick.minor.left     : True   ## draw y axis left minor ticks
#ytick.minor.right    : True   ## draw y axis right minor ticks
#ytick.alignment      : center_baseline ## alignment of yticks

#### GRIDS
#grid.color       :   b0b0b0    ## grid color
#grid.linestyle   :   -         ## solid
#grid.linewidth   :   0.8       ## in points
#grid.alpha       :   1.0       ## transparency, between 0.0 and 1.0

#### Legend
#legend.loc           : best
#legend.frameon       : True     ## if True, draw the legend on a background patch
#legend.framealpha    : 0.8      ## legend patch transparency
#legend.facecolor     : inherit  ## inherit from axes.facecolor; or color spec
#legend.edgecolor     : 0.8      ## background patch boundary color
#legend.fancybox      : True     ## if True, use a rounded box for the
                                 ## legend background, else a rectangle
#legend.shadow        : False    ## if True, give background a shadow effect
#legend.numpoints     : 1        ## the number of marker points in the legend line
#legend.scatterpoints : 1        ## number of scatter points
#legend.markerscale   : 1.0      ## the relative size of legend markers vs. original
#legend.fontsize      : medium
#legend.title_fontsize    : None ## None sets to the same as the default axes.  
## Dimensions as fraction of fontsize:
#legend.borderpad     : 0.4      ## border whitespace
#legend.labelspacing  : 0.5      ## the vertical space between the legend entries
#legend.handlelength  : 2.0      ## the length of the legend lines
#legend.handleheight  : 0.7      ## the height of the legend handle
#legend.handletextpad : 0.8      ## the space between the legend line and legend text
#legend.borderaxespad : 0.5      ## the border between the axes and legend edge
#legend.columnspacing : 2.0      ## column separation

#### FIGURE
## See http://matplotlib.org/api/figure_api.html#matplotlib.figure.Figure
#figure.titlesize : large      ## size of the figure title (Figure.suptitle())
#figure.titleweight : normal   ## weight of the figure title
#figure.figsize   : 6.4, 4.8   ## figure size in inches
#figure.dpi       : 100        ## figure dots per inch
#figure.facecolor : white      ## figure facecolor
#figure.edgecolor : white      ## figure edgecolor
#figure.frameon : True         ## enable figure frame
#figure.max_open_warning : 20  ## The maximum number of figures to open through
                               ## the pyplot interface before emitting a warning.
                               ## If less than one this feature is disabled.
## The figure subplot parameters.  All dimensions are a fraction of the
#figure.subplot.left    : 0.125  ## the left side of the subplots of the figure
#figure.subplot.right   : 0.9    ## the right side of the subplots of the figure
#figure.subplot.bottom  : 0.11   ## the bottom of the subplots of the figure
#figure.subplot.top     : 0.88   ## the top of the subplots of the figure
#figure.subplot.wspace  : 0.2    ## the amount of width reserved for space between subplots,
                                 ## expressed as a fraction of the average axis width
#figure.subplot.hspace  : 0.2    ## the amount of height reserved for space between subplots,
                                 ## expressed as a fraction of the average axis height

## Figure layout
#figure.autolayout : False     ## When True, automatically adjust subplot
                               ## parameters to make the plot fit the figure
                               ## using `tight_layout`
#figure.constrained_layout.use: False ## When True, automatically make plot
                                      ## elements fit on the figure. (Not compatible
                                      ## with `autolayout`, above).
#figure.constrained_layout.h_pad : 0.04167 ## Padding around axes objects. Float representing
#figure.constrained_layout.w_pad : 0.04167 ##  inches. Default is 3./72. inches (3 pts)
#figure.constrained_layout.hspace : 0.02   ## Space between subplot groups. Float representing
#figure.constrained_layout.wspace : 0.02   ##  a fraction of the subplot widths being separated.

#### IMAGES
#image.aspect : equal             ## equal | auto | a number
#image.interpolation  : nearest   ## see help(imshow) for options
#image.cmap   : viridis           ## A colormap name, gray etc...
#image.lut    : 256               ## the size of the colormap lookup table
#image.origin : upper             ## lower | upper
#image.resample  : True
#image.composite_image : True     ## When True, all the images on a set of axes are
                                  ## combined into a single composite image before
                                  ## saving a figure as a vector graphics file,
                                  ## such as a PDF.

#### CONTOUR PLOTS
#contour.negative_linestyle : dashed ## string or on-off ink sequence
#contour.corner_mask        : True   ## True | False | legacy

#### ERRORBAR PLOTS
#errorbar.capsize : 0             ## length of end cap on error bars in pixels

#### HISTOGRAM PLOTS
#hist.bins : 10                   ## The default number of histogram bins.
                                  ## If Numpy 1.11 or later is
                                  ## installed, may also be `auto`

#### SCATTER PLOTS
#scatter.marker : o               ## The default marker type for scatter plots.

#### Agg rendering
#### Warning: experimental, 2008/10/10
#agg.path.chunksize : 0           ## 0 to disable; values in the range
                                  ## 10000 to 100000 can improve speed slightly
                                  ## and prevent an Agg rendering failure
                                  ## when plotting very large data sets,
                                  ## especially if they are very gappy.
                                  ## It may cause minor artifacts, though.
                                  ## A value of 20000 is probably a good
                                  ## starting point.
#### PATHS
#path.simplify : True   ## When True, simplify paths by removing "invisible"
                        ## points to reduce file size and increase rendering
                        ## speed
#path.simplify_threshold : 0.111111111111  ## The threshold of similarity below which
                                           ## vertices will be removed in the
                                           ## simplification process
#path.snap : True ## When True, rectilinear axis-aligned paths will be snapped to
                  ## the nearest pixel when certain criteria are met.  When False,
                  ## paths will never be snapped.
#path.sketch : None ## May be none, or a 3-tuple of the form (scale, length,
                    ## randomness).
                    ## *scale* is the amplitude of the wiggle
                    ## perpendicular to the line (in pixels).  *length*
                    ## is the length of the wiggle along the line (in
                    ## pixels).  *randomness* is the factor by which
                    ## the length is randomly scaled.
#path.effects : []  ##

#### SAVING FIGURES
## the default savefig params can be different from the display params
## e.g., you may want a higher resolution, or to make the figure
## background white
#savefig.dpi         : figure   ## figure dots per inch or 'figure'
#savefig.facecolor   : white    ## figure facecolor when saving
#savefig.edgecolor   : white    ## figure edgecolor when saving
#savefig.format      : png      ## png, ps, pdf, svg
#savefig.bbox        : standard ## 'tight' or 'standard'.
                                ## 'tight' is incompatible with pipe-based animation
                                ## backends but will workd with temporary file based ones:
                                ## e.g. setting animation.writer to ffmpeg will not work,
                                ## use ffmpeg_file instead
#savefig.pad_inches  : 0.1      ## Padding to be used when bbox is set to 'tight'
#savefig.jpeg_quality: 95       ## when a jpeg is saved, the default quality parameter.
#savefig.directory   : ~        ## default directory in savefig dialog box,
                                ## leave empty to always use current working directory
#savefig.transparent : False    ## setting that controls whether figures are saved with a
                                ## transparent background by default
#savefig.frameon : True			## enable frame of figure when saving
#savefig.orientation : portrait	## Orientation of saved figure

### tk backend params
#tk.window_focus   : False    ## Maintain shell focus for TkAgg

### ps backend params
#ps.papersize      : letter   ## auto, letter, legal, ledger, A0-A10, B0-B10
#ps.useafm         : False    ## use of afm fonts, results in small files
#ps.usedistiller   : False    ## can be: None, ghostscript or xpdf
                                          ## Experimental: may produce smaller files.
                                          ## xpdf intended for production of publication quality files,
                                          ## but requires ghostscript, xpdf and ps2eps
#ps.distiller.res  : 6000      ## dpi
#ps.fonttype       : 3         ## Output Type 3 (Type3) or Type 42 (TrueType)

### pdf backend params
#pdf.compression   : 6   ## integer from 0 to 9
                         ## 0 disables compression (good for debugging)
#pdf.fonttype       : 3         ## Output Type 3 (Type3) or Type 42 (TrueType)
#pdf.use14corefonts : False
#pdf.inheritcolor : False

### svg backend params
#svg.image_inline : True       ## write raster image data directly into the svg file
#svg.fonttype :   path         ## How to handle SVG fonts:
   ##     none: Assume fonts are installed on the machine where the SVG will be viewed.
   ##     path: Embed characters as paths -- supported by most SVG renderers
   ##     svgfont: Embed characters as SVG fonts -- supported only by Chrome,
   ##                Opera and Safari
#svg.hashsalt : None           ## if not None, use this string as hash salt
                               ## instead of uuid4
### pgf parameter
#pgf.rcfonts : True
#pgf.preamble :
#pgf.texsystem : xelatex

### docstring params
##docstring.hardcopy = False  ## set this when you want to generate hardcopy docstring

## Event keys to interact with figures/plots via keyboard.
## Customize these settings according to your needs.
## Leave the field(s) empty if you don't need a key-map. (i.e., fullscreen : '')
#keymap.fullscreen : f, ctrl+f       ## toggling
#keymap.home : h, r, home            ## home or reset mnemonic
#keymap.back : left, c, backspace    ## forward / backward keys to enable
#keymap.forward : right, v           ##   left handed quick navigation
#keymap.pan : p                      ## pan mnemonic
#keymap.zoom : o                     ## zoom mnemonic
#keymap.save : s, ctrl+s             ## saving current figure
#keymap.help : f1                    ## display help about active tools
#keymap.quit : ctrl+w, cmd+w, q      ## close the current figure
#keymap.quit_all : W, cmd+W, Q       ## close all figures
#keymap.grid : g                     ## switching on/off major grids in current axes
#keymap.grid_minor : G               ## switching on/off minor grids in current axes
#keymap.yscale : l                   ## toggle scaling of y-axes ('log'/'linear')
#keymap.xscale : k, L                ## toggle scaling of x-axes ('log'/'linear')
#keymap.all_axes : a                 ## enable all axes
#keymap.copy : ctrl+c, cmd+c         ## Copy figure to clipboard

###ANIMATION settings
#animation.html :  none            ## How to display the animation as HTML in
                                   ## the IPython notebook. 'html5' uses
                                   ## HTML5 video tag; 'jshtml' creates a
                                   ## Javascript animation
#animation.writer : ffmpeg         ## MovieWriter 'backend' to use
#animation.codec : h264            ## Codec to use for writing movie
#animation.bitrate: -1             ## Controls size/quality tradeoff for movie.
                                   ## -1 implies let utility auto-determine
#animation.frame_format:  png      ## Controls frame format used by temp files
#animation.html_args:              ## Additional arguments to pass to html writer
#animation.ffmpeg_path:  ffmpeg    ## Path to ffmpeg binary. Without full path
                                   ## $PATH is searched
#animation.ffmpeg_args:            ## Additional arguments to pass to ffmpeg
#animation.avconv_path:  avconv    ## Path to avconv binary. Without full path
                                   ## $PATH is searched
#animation.avconv_args:            ## Additional arguments to pass to avconv
#animation.convert_path:  convert  ## Path to ImageMagick's convert binary.
                                   ## On Windows use the full path since convert
                                   ## is also the name of a system tool.
#animation.convert_args:           ## Additional arguments to pass to convert
#animation.embed_limit : 20.0
```

## 下载本文的所有示例

- [下载python源码: customizing.py](https://matplotlib.org/_downloads/eeeaeaf39050b562623dfff7c047f84e/customizing.py)
- [下载Jupyter notebook: customizing.ipynb](https://matplotlib.org/_downloads/ea3f32f63758f0b2f1f9163bf4aa31ad/customizing.ipynb)