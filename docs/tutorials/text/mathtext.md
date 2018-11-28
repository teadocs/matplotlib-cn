# Writing mathematical expressions

An introduction to writing mathematical expressions in Matplotlib.

You can use a subset TeX markup in any matplotlib text string by placing it inside a pair of dollar signs ($).

Note that you do not need to have TeX installed, since Matplotlib ships its own TeX expression parser, layout engine, and fonts. The layout engine is a fairly direct adaptation of the layout algorithms in Donald Knuth's TeX, so the quality is quite good (matplotlib also provides a usetex option for those who do want to call out to TeX to generate their text (see Text rendering With LaTeX).

Any text element can use math text. You should use raw strings (precede the quotes with an 'r'), and surround the math text with dollar signs ($), as in TeX. Regular text and mathtext can be interleaved within the same string. Mathtext can use DejaVu Sans (default), DejaVu Serif, the Computer Modern fonts (from (La)TeX), STIX fonts (with are designed to blend well with Times), or a Unicode font that you provide. The mathtext font can be selected with the customization variable mathtext.fontset (see Customizing Matplotlib with style sheets and rcParams)

Here is a simple example:

# plain text
plt.title('alpha > beta')
produces "alpha > beta".

Whereas this:

# math text
plt.title(r'$\alpha > \beta$')
produces "".

Note

Mathtext should be placed between a pair of dollar signs ($). To make it easy to display monetary values, e.g., "$100.00", if a single dollar sign is present in the entire string, it will be displayed verbatim as a dollar sign. This is a small change from regular TeX, where the dollar sign in non-math text would have to be escaped ('\$').

Note

While the syntax inside the pair of dollar signs ($) aims to be TeX-like, the text outside does not. In particular, characters such as:

# $ % & ~ _ ^ \ { } \( \) \[ \]
have special meaning outside of math mode in TeX. Therefore, these characters will behave differently depending on the rcParam text.usetex flag. See the usetex tutorial for more information.

Subscripts and superscripts
To make subscripts and superscripts, use the '_' and '^' symbols:

r'$\alpha_i > \beta_i$'
αi>βi
Some symbols automatically put their sub/superscripts under and over the operator. For example, to write the sum of  from  to , you could do:

r'$\sum_{i=0}^\infty x_i$'
∞∑i=0xi
Fractions, binomials, and stacked numbers
Fractions, binomials, and stacked numbers can be created with the \frac{}{}, \binom{}{} and \stackrel{}{} commands, respectively:

r'$\frac{3}{4} \binom{3}{4} \stackrel{3}{4}$'
produces

\frac{3}{4} \binom{3}{4} \stackrel{3}{4}
Fractions can be arbitrarily nested:

r'$\frac{5 - \frac{1}{x}}{4}$'
produces

\frac{5 - \frac{1}{x}}{4}
Note that special care needs to be taken to place parentheses and brackets around fractions. Doing things the obvious way produces brackets that are too small:

r'$(\frac{5 - \frac{1}{x}}{4})$'
(\frac{5 - \frac{1}{x}}{4})
The solution is to precede the bracket with \left and \right to inform the parser that those brackets encompass the entire object.:

r'$\left(\frac{5 - \frac{1}{x}}{4}\right)$'
\left(\frac{5 - \frac{1}{x}}{4}\right)
Radicals
Radicals can be produced with the \sqrt[]{} command. For example:

r'$\sqrt{2}$'
\sqrt{2}
Any base can (optionally) be provided inside square brackets. Note that the base must be a simple expression, and can not contain layout commands such as fractions or sub/superscripts:

r'$\sqrt[3]{x}$'
\sqrt[3]{x}
Fonts
The default font is italics for mathematical symbols.

Note

This default can be changed using the mathtext.default rcParam. This is useful, for example, to use the same font as regular non-math text for math text, by setting it to regular.

To change fonts, e.g., to write "sin" in a Roman font, enclose the text in a font command:

r'$s(t) = \mathcal{A}\mathrm{sin}(2 \omega t)$'
s(t) = \mathcal{A}\mathrm{sin}(2 \omega t)
More conveniently, many commonly used function names that are typeset in a Roman font have shortcuts. So the expression above could be written as follows:

r'$s(t) = \mathcal{A}\sin(2 \omega t)$'
s(t) = \mathcal{A}\sin(2 \omega t)
Here "s" and "t" are variable in italics font (default), "sin" is in Roman font, and the amplitude "A" is in calligraphy font. Note in the example above the calligraphy A is squished into the sin. You can use a spacing command to add a little whitespace between them:

r's(t) = \mathcal{A}\/\sin(2 \omega t)'
s(t) = \mathcal{A}\/\sin(2 \omega t)
The choices available with all fonts are:

Command	Result
\mathrm{Roman}	
\mathit{Italic}	
\mathtt{Typewriter}	
\mathcal{CALLIGRAPHY}	
When using the STIX fonts, you also have the choice of:

Command	Result
\mathbb{blackboard}	
\mathrm{\mathbb{blackboard}}	
\mathfrak{Fraktur}	
\mathsf{sansserif}	
\mathrm{\mathsf{sansserif}}	
\mathcircled{circled}	
There are also three global "font sets" to choose from, which are selected using the mathtext.fontset parameter in matplotlibrc.

cm: Computer Modern (TeX)

../../_images/cm_fontset.png
stix: STIX (designed to blend well with Times)

../../_images/stix_fontset.png
stixsans: STIX sans-serif

../../_images/stixsans_fontset.png
Additionally, you can use \mathdefault{...} or its alias \mathregular{...} to use the font used for regular text outside of mathtext. There are a number of limitations to this approach, most notably that far fewer symbols will be available, but it can be useful to make math expressions blend well with other text in the plot.

Custom fonts
mathtext also provides a way to use custom fonts for math. This method is fairly tricky to use, and should be considered an experimental feature for patient users only. By setting the rcParam mathtext.fontset to custom, you can then set the following parameters, which control which font file to use for a particular set of math characters.

Parameter	Corresponds to
mathtext.it	\mathit{} or default italic
mathtext.rm	\mathrm{} Roman (upright)
mathtext.tt	\mathtt{} Typewriter (monospace)
mathtext.bf	\mathbf{} bold italic
mathtext.cal	\mathcal{} calligraphic
mathtext.sf	\mathsf{} sans-serif
Each parameter should be set to a fontconfig font descriptor (as defined in the yet-to-be-written font chapter).

The fonts used should have a Unicode mapping in order to find any non-Latin characters, such as Greek. If you want to use a math symbol that is not contained in your custom fonts, you can set the rcParam mathtext.fallback_to_cm to True which will cause the mathtext system to use characters from the default Computer Modern fonts whenever a particular character can not be found in the custom font.

Note that the math glyphs specified in Unicode have evolved over time, and many fonts may not have glyphs in the correct place for mathtext.

Accents
An accent command may precede any symbol to add an accent above it. There are long and short forms for some of them.

Command	Result
\acute a or \'a	
\bar a	
\breve a	
\ddot a or \''a	
\dot a or \.a	
\grave a or \`a	
\hat a or \^a	
\tilde a or \~a	
\vec a	
\overline{abc}	
In addition, there are two special accents that automatically adjust to the width of the symbols below:

Command	Result
\widehat{xyz}	
\widetilde{xyz}	
Care should be taken when putting accents on lower-case i's and j's. Note that in the following \imath is used to avoid the extra dot over the i:

r"$\hat i\ \ \hat \imath$"
\hat i\ \ \hat \imath
Symbols
You can also use a large number of the TeX symbols, as in \infty, \leftarrow, \sum, \int.

Lower-case Greek

\alpha \alpha	\beta \beta	\chi \chi	\delta \delta	\digamma \digamma	\epsilon \epsilon
\eta \eta	\gamma \gamma	\iota \iota	\kappa \kappa	\lambda \lambda	\mu \mu
\nu \nu	\omega \omega	\phi \phi	\pi \pi	\psi \psi	\rho \rho
\sigma \sigma	\tau \tau	\theta \theta	\upsilon \upsilon	\varepsilon \varepsilon	\varkappa \varkappa
\varphi \varphi	\varpi \varpi	\varrho \varrho	\varsigma \varsigma	\vartheta \vartheta	\xi \xi
\zeta \zeta	 	 	 	 	 
Upper-case Greek

\Delta \Delta	\Gamma \Gamma	\Lambda \Lambda	\Omega \Omega	\Phi \Phi	\Pi \Pi	\Psi \Psi	\Sigma \Sigma
\Theta \Theta	\Upsilon \Upsilon	\Xi \Xi	\mho \mho	\nabla \nabla	 	 	 
Hebrew

\aleph \aleph	\beth \beth	\daleth \daleth	\gimel \gimel	 	 
Delimiters

/ /	[ [	\Downarrow \Downarrow	\Uparrow \Uparrow	\Vert \Vert	\backslash \backslash
\downarrow \downarrow	\langle \langle	\lceil \lceil	\lfloor \lfloor	\llcorner \llcorner	\lrcorner \lrcorner
\rangle \rangle	\rceil \rceil	\rfloor \rfloor	\ulcorner \ulcorner	\uparrow \uparrow	\urcorner \urcorner
\vert \vert	\{ \{	\| \|	\} \}	] ]	| |
Big symbols

\bigcap \bigcap	\bigcup \bigcup	\bigodot \bigodot	\bigoplus \bigoplus	\bigotimes \bigotimes	\biguplus \biguplus
\bigvee \bigvee	\bigwedge \bigwedge	\coprod \coprod	\int \int	\oint \oint	\prod \prod
\sum \sum	 	 	 	 	 
Standard function names

\Pr \Pr	\arccos \arccos	\arcsin \arcsin	\arctan \arctan	\arg \arg	\cos \cos
\cosh \cosh	\cot \cot	\coth \coth	\csc \csc	\deg \deg	\det \det
\dim \dim	\exp \exp	\gcd \gcd	\hom \hom	\inf \inf	\ker \ker
\lg \lg	\lim \lim	\liminf \liminf	\limsup \limsup	\ln \ln	\log \log
\max \max	\min \min	\sec \sec	\sin \sin	\sinh \sinh	\sup \sup
\tan \tan	\tanh \tanh	 	 	 	 
Binary operation and relation symbols

\Bumpeq \Bumpeq	\Cap \Cap	\Cup \Cup	\Doteq \Doteq
\Join \Join	\Subset \Subset	\Supset \Supset	\Vdash \Vdash
\Vvdash \Vvdash	\approx \approx	\approxeq \approxeq	\ast \ast
\asymp \asymp	\backepsilon \backepsilon	\backsim \backsim	\backsimeq \backsimeq
\barwedge \barwedge	\because \because	\between \between	\bigcirc \bigcirc
\bigtriangledown \bigtriangledown	\bigtriangleup \bigtriangleup	\blacktriangleleft \blacktriangleleft	\blacktriangleright \blacktriangleright
\bot \bot	\bowtie \bowtie	\boxdot \boxdot	\boxminus \boxminus
\boxplus \boxplus	\boxtimes \boxtimes	\bullet \bullet	\bumpeq \bumpeq
\cap \cap	\cdot \cdot	\circ \circ	\circeq \circeq
\coloneq \coloneq	\cong \cong	\cup \cup	\curlyeqprec \curlyeqprec
\curlyeqsucc \curlyeqsucc	\curlyvee \curlyvee	\curlywedge \curlywedge	\dag \dag
\dashv \dashv	\ddag \ddag	\diamond \diamond	\div \div
\divideontimes \divideontimes	\doteq \doteq	\doteqdot \doteqdot	\dotplus \dotplus
\doublebarwedge \doublebarwedge	\eqcirc \eqcirc	\eqcolon \eqcolon	\eqsim \eqsim
\eqslantgtr \eqslantgtr	\eqslantless \eqslantless	\equiv \equiv	\fallingdotseq \fallingdotseq
\frown \frown	\geq \geq	\geqq \geqq	\geqslant \geqslant
\gg \gg	\ggg \ggg	\gnapprox \gnapprox	\gneqq \gneqq
\gnsim \gnsim	\gtrapprox \gtrapprox	\gtrdot \gtrdot	\gtreqless \gtreqless
\gtreqqless \gtreqqless	\gtrless \gtrless	\gtrsim \gtrsim	\in \in
\intercal \intercal	\leftthreetimes \leftthreetimes	\leq \leq	\leqq \leqq
\leqslant \leqslant	\lessapprox \lessapprox	\lessdot \lessdot	\lesseqgtr \lesseqgtr
\lesseqqgtr \lesseqqgtr	\lessgtr \lessgtr	\lesssim \lesssim	\ll \ll
\lll \lll	\lnapprox \lnapprox	\lneqq \lneqq	\lnsim \lnsim
\ltimes \ltimes	\mid \mid	\models \models	\mp \mp
\nVDash \nVDash	\nVdash \nVdash	\napprox \napprox	\ncong \ncong
\ne \ne	\neq \neq	\neq \neq	\nequiv \nequiv
\ngeq \ngeq	\ngtr \ngtr	\ni \ni	\nleq \nleq
\nless \nless	\nmid \nmid	\notin \notin	\nparallel \nparallel
\nprec \nprec	\nsim \nsim	\nsubset \nsubset	\nsubseteq \nsubseteq
\nsucc \nsucc	\nsupset \nsupset	\nsupseteq \nsupseteq	\ntriangleleft \ntriangleleft
\ntrianglelefteq \ntrianglelefteq	\ntriangleright \ntriangleright	\ntrianglerighteq \ntrianglerighteq	\nvDash \nvDash
\nvdash \nvdash	\odot \odot	\ominus \ominus	\oplus \oplus
\oslash \oslash	\otimes \otimes	\parallel \parallel	\perp \perp
\pitchfork \pitchfork	\pm \pm	\prec \prec	\precapprox \precapprox
\preccurlyeq \preccurlyeq	\preceq \preceq	\precnapprox \precnapprox	\precnsim \precnsim
\precsim \precsim	\propto \propto	\rightthreetimes \rightthreetimes	\risingdotseq \risingdotseq
\rtimes \rtimes	\sim \sim	\simeq \simeq	\slash \slash
\smile \smile	\sqcap \sqcap	\sqcup \sqcup	\sqsubset \sqsubset
\sqsubset \sqsubset	\sqsubseteq \sqsubseteq	\sqsupset \sqsupset	\sqsupset \sqsupset
\sqsupseteq \sqsupseteq	\star \star	\subset \subset	\subseteq \subseteq
\subseteqq \subseteqq	\subsetneq \subsetneq	\subsetneqq \subsetneqq	\succ \succ
\succapprox \succapprox	\succcurlyeq \succcurlyeq	\succeq \succeq	\succnapprox \succnapprox
\succnsim \succnsim	\succsim \succsim	\supset \supset	\supseteq \supseteq
\supseteqq \supseteqq	\supsetneq \supsetneq	\supsetneqq \supsetneqq	\therefore \therefore
\times \times	\top \top	\triangleleft \triangleleft	\trianglelefteq \trianglelefteq
\triangleq \triangleq	\triangleright \triangleright	\trianglerighteq \trianglerighteq	\uplus \uplus
\vDash \vDash	\varpropto \varpropto	\vartriangleleft \vartriangleleft	\vartriangleright \vartriangleright
\vdash \vdash	\vee \vee	\veebar \veebar	\wedge \wedge
\wr \wr	 	 	 
Arrow symbols

\Downarrow \Downarrow	\Leftarrow \Leftarrow	\Leftrightarrow \Leftrightarrow	\Lleftarrow \Lleftarrow
\Longleftarrow \Longleftarrow	\Longleftrightarrow \Longleftrightarrow	\Longrightarrow \Longrightarrow	\Lsh \Lsh
\Nearrow \Nearrow	\Nwarrow \Nwarrow	\Rightarrow \Rightarrow	\Rrightarrow \Rrightarrow
\Rsh \Rsh	\Searrow \Searrow	\Swarrow \Swarrow	\Uparrow \Uparrow
\Updownarrow \Updownarrow	\circlearrowleft \circlearrowleft	\circlearrowright \circlearrowright	\curvearrowleft \curvearrowleft
\curvearrowright \curvearrowright	\dashleftarrow \dashleftarrow	\dashrightarrow \dashrightarrow	\downarrow \downarrow
\downdownarrows \downdownarrows	\downharpoonleft \downharpoonleft	\downharpoonright \downharpoonright	\hookleftarrow \hookleftarrow
\hookrightarrow \hookrightarrow	\leadsto \leadsto	\leftarrow \leftarrow	\leftarrowtail \leftarrowtail
\leftharpoondown \leftharpoondown	\leftharpoonup \leftharpoonup	\leftleftarrows \leftleftarrows	\leftrightarrow \leftrightarrow
\leftrightarrows \leftrightarrows	\leftrightharpoons \leftrightharpoons	\leftrightsquigarrow \leftrightsquigarrow	\leftsquigarrow \leftsquigarrow
\longleftarrow \longleftarrow	\longleftrightarrow \longleftrightarrow	\longmapsto \longmapsto	\longrightarrow \longrightarrow
\looparrowleft \looparrowleft	\looparrowright \looparrowright	\mapsto \mapsto	\multimap \multimap
\nLeftarrow \nLeftarrow	\nLeftrightarrow \nLeftrightarrow	\nRightarrow \nRightarrow	\nearrow \nearrow
\nleftarrow \nleftarrow	\nleftrightarrow \nleftrightarrow	\nrightarrow \nrightarrow	\nwarrow \nwarrow
\rightarrow \rightarrow	\rightarrowtail \rightarrowtail	\rightharpoondown \rightharpoondown	\rightharpoonup \rightharpoonup
\rightleftarrows \rightleftarrows	\rightleftarrows \rightleftarrows	\rightleftharpoons \rightleftharpoons	\rightleftharpoons \rightleftharpoons
\rightrightarrows \rightrightarrows	\rightrightarrows \rightrightarrows	\rightsquigarrow \rightsquigarrow	\searrow \searrow
\swarrow \swarrow	\to \to	\twoheadleftarrow \twoheadleftarrow	\twoheadrightarrow \twoheadrightarrow
\uparrow \uparrow	\updownarrow \updownarrow	\updownarrow \updownarrow	\upharpoonleft \upharpoonleft
\upharpoonright \upharpoonright	\upuparrows \upuparrows	 	 
Miscellaneous symbols

\$ \$	\AA \AA	\Finv \Finv	\Game \Game
\Im \Im	\P \P	\Re \Re	\S \S
\angle \angle	\backprime \backprime	\bigstar \bigstar	\blacksquare \blacksquare
\blacktriangle \blacktriangle	\blacktriangledown \blacktriangledown	\cdots \cdots	\checkmark \checkmark
\circledR \circledR	\circledS \circledS	\clubsuit \clubsuit	\complement \complement
\copyright \copyright	\ddots \ddots	\diamondsuit \diamondsuit	\ell \ell
\emptyset \emptyset	\eth \eth	\exists \exists	\flat \flat
\forall \forall	\hbar \hbar	\heartsuit \heartsuit	\hslash \hslash
\iiint \iiint	\iint \iint	\iint \iint	\imath \imath
\infty \infty	\jmath \jmath	\ldots \ldots	\measuredangle \measuredangle
\natural \natural	\neg \neg	\nexists \nexists	\oiiint \oiiint
\partial \partial	\prime \prime	\sharp \sharp	\spadesuit \spadesuit
\sphericalangle \sphericalangle	\ss \ss	\triangledown \triangledown	\varnothing \varnothing
\vartriangle \vartriangle	\vdots \vdots	\wp \wp	\yen \yen
If a particular symbol does not have a name (as is true of many of the more obscure symbols in the STIX fonts), Unicode characters can also be used:

ur'$\u23ce$'
Example
Here is an example illustrating many of these features in context.

../../_images/sphx_glr_pyplot_mathtext_0011.png
Pyplot Mathtext

Download Python source code: mathtext.py
Download Jupyter notebook: mathtext.ipynb