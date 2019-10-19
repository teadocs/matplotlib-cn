const htmlToMd = require('./htmlToMd');

let mdContent = htmlToMd(`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Stacked Bar Graph &mdash; Matplotlib 3.1.1 documentation</title>
<link rel="stylesheet" href="../../_static/mpl.css" type="text/css" />
<link rel="stylesheet" href="../../_static/pygments.css" type="text/css" />
<link rel="stylesheet" href="../../_static/graphviz.css" type="text/css" />
<link rel="stylesheet" href="../../_static/gallery.css" type="text/css" />
<link rel="stylesheet" href="../../_static/copybutton.css" type="text/css" />
<script type="b77ae14cc110f21b88ea6cfa-text/javascript" id="documentation_options" data-url_root="../../" src="../../_static/documentation_options.js"></script>
<script type="b77ae14cc110f21b88ea6cfa-text/javascript" src="../../_static/jquery.js"></script>
<script type="b77ae14cc110f21b88ea6cfa-text/javascript" src="../../_static/underscore.js"></script>
<script type="b77ae14cc110f21b88ea6cfa-text/javascript" src="../../_static/doctools.js"></script>
<script type="b77ae14cc110f21b88ea6cfa-text/javascript" src="../../_static/language_data.js"></script>
<script type="b77ae14cc110f21b88ea6cfa-text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js"></script>
<script type="b77ae14cc110f21b88ea6cfa-text/javascript" src="../../_static/copybutton.js"></script>
<script async="async" type="b77ae14cc110f21b88ea6cfa-text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-AMS-MML_HTMLorMML"></script>
<link rel="search" type="application/opensearchdescription+xml" title="Search within Matplotlib 3.1.1 documentation" href="../../_static/opensearch.xml" />
<link rel="shortcut icon" href="../../_static/favicon.ico" />
<link rel="index" title="Index" href="../../genindex.html" />
<link rel="search" title="Search" href="../../search.html" />
<link rel="top" title="Matplotlib 3.1.1 documentation" href="../../index.html" />
<link rel="canonical" href="https://matplotlib.org/3.1.1/gallery/lines_bars_and_markers/bar_stacked.html" />
</head>
<body>
<div style="background-color: white; text-align: left; padding: 10px 10px 15px 15px; position: relative;">
<a href="../../index.html">
<div style="float: left; position: absolute; width: 496px; bottom: 0; padding-bottom: 24px"><span style="float: right; color: #789; background: white">Version 3.1.1</span></div>
<img src="../../_static/logo2.png" height="125px" border="0" alt="matplotlib" /></a>

<div id="forkongithub"><a href="https://github.com/matplotlib/matplotlib">Fork me on GitHub</a></div>
</div>
<div class="related">
<h3>Navigation</h3>
<ul>
<li class="right" style="margin-right: 10px">
<a href="../../genindex.html" title="General Index" accesskey="I">index</a></li>
<li class="right">
<a href="../../py-modindex.html" title="Python Module Index">modules</a> |</li>
<li><a href="../../index.html">home</a>|&nbsp;</li>
<li><a href="../index.html">examples</a>|&nbsp;</li>
<li><a href="../../tutorials/index.html">tutorials</a>|&nbsp;</li>
<li><a href="../../api/index.html">API</a>|&nbsp;</li>
<li><a href="../../contents.html">contents</a> &raquo;</li>
</ul>
</div>
<div class="sphinxsidebar">
<div class="sphinxsidebarwrapper">
<div id="searchbox" style="display: none" role="search">
<h3>Quick search</h3>
<div class="searchformwrapper">
<form class="search" action="../../search.html" method="get">
<input type="text" name="q" />
<input type="submit" value="Go" />
<input type="hidden" name="check_keywords" value="yes" />
<input type="hidden" name="area" value="default" />
</form>
</div>
</div>
<script type="b77ae14cc110f21b88ea6cfa-text/javascript">$('#searchbox').show(0);</script><div class="relations">
<h3>Related Topics</h3>
<ul>
<li><a href="../../contents.html">Documentation overview</a><ul>
</ul></li>
</ul>
</div>
<div id="sidebar-pagesource" role="note" aria-label="source link" style="margin-top: 1.5em; padding-top: 0.1em; border-top: 1px solid #86989b">
<a href="../../_sources/gallery/lines_bars_and_markers/bar_stacked.rst.txt" style="color: #c0c0c0" rel="nofollow">Show Page Source</a>
</div>
</div>
</div>
<div class="document">
<div class="documentwrapper">
<div class="bodywrapper">
<div class="body">
<div class="sphx-glr-download-link-note admonition note">
<p class="first admonition-title">Note</p>
<p class="last">Click <a class="reference internal" href="#sphx-glr-download-gallery-lines-bars-and-markers-bar-stacked-py"><span class="std std-ref">here</span></a> to download the full example code</p>
</div>
<div class="sphx-glr-example-title section" id="stacked-bar-graph">
<span id="sphx-glr-gallery-lines-bars-and-markers-bar-stacked-py"></span><h1>Stacked Bar Graph<a class="headerlink" href="#stacked-bar-graph" title="Permalink to this headline">¶</a></h1>
<p>This is an example of creating a stacked bar plot with error bars
using <a class="reference internal" href="../../api/_as_gen/matplotlib.pyplot.bar.html#matplotlib.pyplot.bar" title="matplotlib.pyplot.bar"><code class="xref py py-obj docutils literal notranslate"><span class="pre">bar</span></code></a>. Note the parameters <em>yerr</em> used for
error bars, and <em>bottom</em> to stack the women's bars on top of the men's
bars.</p>
<img alt="../../_images/sphx_glr_bar_stacked_001.png" class="sphx-glr-single-img" src="../../_images/sphx_glr_bar_stacked_001.png" />
<div class="highlight-default notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>
<span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="nn">plt</span>


<span class="n">N</span> <span class="o">=</span> <span class="mi">5</span>
<span class="n">menMeans</span> <span class="o">=</span> <span class="p">(</span><span class="mi">20</span><span class="p">,</span> <span class="mi">35</span><span class="p">,</span> <span class="mi">30</span><span class="p">,</span> <span class="mi">35</span><span class="p">,</span> <span class="mi">27</span><span class="p">)</span>
<span class="n">womenMeans</span> <span class="o">=</span> <span class="p">(</span><span class="mi">25</span><span class="p">,</span> <span class="mi">32</span><span class="p">,</span> <span class="mi">34</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">25</span><span class="p">)</span>
<span class="n">menStd</span> <span class="o">=</span> <span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span>
<span class="n">womenStd</span> <span class="o">=</span> <span class="p">(</span><span class="mi">3</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">3</span><span class="p">)</span>
<span class="n">ind</span> <span class="o">=</span> <a href="https://docs.scipy.org/doc/numpy/reference/generated/numpy.arange.html#numpy.arange" title="View documentation for numpy.arange"><span class="n">np</span><span class="o">.</span><span class="n">arange</span></a><span class="p">(</span><span class="n">N</span><span class="p">)</span>    <span class="c1"># the x locations for the groups</span>
<span class="n">width</span> <span class="o">=</span> <span class="mf">0.35</span>       <span class="c1"># the width of the bars: can also be len(x) sequence</span>

<span class="n">p1</span> <span class="o">=</span> <a href="../../api/_as_gen/matplotlib.pyplot.bar.html#matplotlib.pyplot.bar" title="View documentation for matplotlib.pyplot.bar"><span class="n">plt</span><span class="o">.</span><span class="n">bar</span></a><span class="p">(</span><span class="n">ind</span><span class="p">,</span> <span class="n">menMeans</span><span class="p">,</span> <span class="n">width</span><span class="p">,</span> <span class="n">yerr</span><span class="o">=</span><span class="n">menStd</span><span class="p">)</span>
<span class="n">p2</span> <span class="o">=</span> <a href="../../api/_as_gen/matplotlib.pyplot.bar.html#matplotlib.pyplot.bar" title="View documentation for matplotlib.pyplot.bar"><span class="n">plt</span><span class="o">.</span><span class="n">bar</span></a><span class="p">(</span><span class="n">ind</span><span class="p">,</span> <span class="n">womenMeans</span><span class="p">,</span> <span class="n">width</span><span class="p">,</span>
             <span class="n">bottom</span><span class="o">=</span><span class="n">menMeans</span><span class="p">,</span> <span class="n">yerr</span><span class="o">=</span><span class="n">womenStd</span><span class="p">)</span>

<a href="../../api/_as_gen/matplotlib.pyplot.ylabel.html#matplotlib.pyplot.ylabel" title="View documentation for matplotlib.pyplot.ylabel"><span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span></a><span class="p">(</span><span class="s1">&#39;Scores&#39;</span><span class="p">)</span>
<a href="../../api/_as_gen/matplotlib.pyplot.title.html#matplotlib.pyplot.title" title="View documentation for matplotlib.pyplot.title"><span class="n">plt</span><span class="o">.</span><span class="n">title</span></a><span class="p">(</span><span class="s1">&#39;Scores by group and gender&#39;</span><span class="p">)</span>
<a href="../../api/_as_gen/matplotlib.pyplot.xticks.html#matplotlib.pyplot.xticks" title="View documentation for matplotlib.pyplot.xticks"><span class="n">plt</span><span class="o">.</span><span class="n">xticks</span></a><span class="p">(</span><span class="n">ind</span><span class="p">,</span> <span class="p">(</span><span class="s1">&#39;G1&#39;</span><span class="p">,</span> <span class="s1">&#39;G2&#39;</span><span class="p">,</span> <span class="s1">&#39;G3&#39;</span><span class="p">,</span> <span class="s1">&#39;G4&#39;</span><span class="p">,</span> <span class="s1">&#39;G5&#39;</span><span class="p">))</span>
<a href="../../api/_as_gen/matplotlib.pyplot.yticks.html#matplotlib.pyplot.yticks" title="View documentation for matplotlib.pyplot.yticks"><span class="n">plt</span><span class="o">.</span><span class="n">yticks</span></a><span class="p">(</span><a href="https://docs.scipy.org/doc/numpy/reference/generated/numpy.arange.html#numpy.arange" title="View documentation for numpy.arange"><span class="n">np</span><span class="o">.</span><span class="n">arange</span></a><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">81</span><span class="p">,</span> <span class="mi">10</span><span class="p">))</span>
<a href="../../api/_as_gen/matplotlib.pyplot.legend.html#matplotlib.pyplot.legend" title="View documentation for matplotlib.pyplot.legend"><span class="n">plt</span><span class="o">.</span><span class="n">legend</span></a><span class="p">((</span><span class="n">p1</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="n">p2</span><span class="p">[</span><span class="mi">0</span><span class="p">]),</span> <span class="p">(</span><span class="s1">&#39;Men&#39;</span><span class="p">,</span> <span class="s1">&#39;Women&#39;</span><span class="p">))</span>

<a href="../../api/_as_gen/matplotlib.pyplot.show.html#matplotlib.pyplot.show" title="View documentation for matplotlib.pyplot.show"><span class="n">plt</span><span class="o">.</span><span class="n">show</span></a><span class="p">()</span>
</pre></div>
</div>
<div class="sphx-glr-footer class sphx-glr-footer-example docutils container" id="sphx-glr-download-gallery-lines-bars-and-markers-bar-stacked-py">
<div class="sphx-glr-download docutils container">
<a class="reference download internal" download="" href="../../_downloads/5e8aa30607e066c2e07837854c0a4933/bar_stacked.py"><code class="xref download docutils literal notranslate"><span class="pre">Download</span> <span class="pre">Python</span> <span class="pre">source</span> <span class="pre">code:</span> <span class="pre">bar_stacked.py</span></code></a></div>
<div class="sphx-glr-download docutils container">
<a class="reference download internal" download="" href="../../_downloads/dc21ba083a8d2caf6a4d6e09e52f7b50/bar_stacked.ipynb"><code class="xref download docutils literal notranslate"><span class="pre">Download</span> <span class="pre">Jupyter</span> <span class="pre">notebook:</span> <span class="pre">bar_stacked.ipynb</span></code></a></div>
</div>
<p class="sphx-glr-signature">Keywords: matplotlib code example, codex, python plot, pyplot
<a class="reference external" href="https://sphinx-gallery.readthedocs.io">Gallery generated by Sphinx-Gallery</a></p>
</div>
</div>
</div>
</div>
<div class="clearer"></div>
</div>
<div class="footer">
&copy; Copyright 2002 - 2012 John Hunter, Darren Dale, Eric Firing, Michael Droettboom and the Matplotlib development team; 2012 - 2018 The Matplotlib development team.
<br />
Last updated on Aug 26, 2019.
Created using
<a href="http://sphinx-doc.org/">Sphinx</a> 1.8.5.
Doc version v3.1.1-39-gcb432858e.
</div>
<script type="b77ae14cc110f21b88ea6cfa-text/javascript">
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-55954603-1', 'auto');
  ga('send', 'pageview');

</script>
<script src="https://ajax.cloudflare.com/cdn-cgi/scripts/95c75768/cloudflare-static/rocket-loader.min.js" data-cf-settings="b77ae14cc110f21b88ea6cfa-|49" defer=""></script></body>
<footer>
</footer>
</html>
`);

console.log(mdContent);
