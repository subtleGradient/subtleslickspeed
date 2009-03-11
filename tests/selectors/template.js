var doc = document.createElement('div');
document.body.appendChild(doc);
doc.innerHTML = "  <div class=\"head\">\n\
   <p><a href=\"http://www.w3.org/\"><img height=48 alt=W3C src=\"http://www.w3.org/Icons/w3c_home\" width=72></a>\n\
\n\
   <h1 id=\"title\">Selectors</h1>\n\
\n\
   <h2>W3C Working Draft 15 December 2005</h2>\n\
\n\
   <dl>\n\
\n\
    <dt>This version:\n\
\n\
    <dd><a href=\"http://www.w3.org/TR/2005/WD-css3-selectors-20051215\">\n\
                 http://www.w3.org/TR/2005/WD-css3-selectors-20051215</a>\n\
\n\
    <dt>Latest version:\n\
\n\
    <dd><a href=\"http://www.w3.org/TR/css3-selectors\">\n\
                 http://www.w3.org/TR/css3-selectors</a>\n\
\n\
    <dt>Previous version:\n\
\n\
    <dd><a href=\"http://www.w3.org/TR/2001/CR-css3-selectors-20011113\">\n\
                 http://www.w3.org/TR/2001/CR-css3-selectors-20011113</a>\n\
\n\
    <dt><a name=editors-list></a>Editors:\n\
\n\
    <dd class=\"vcard\"><span class=\"fn\">Daniel Glazman</span> (Invited Expert)</dd>\n\
\n\
    <dd class=\"vcard\"><a lang=\"tr\" class=\"url fn\" href=\"http://www.tantek.com/\">Tantek &Ccedil;elik</a> (Invited Expert)\n\
\n\
    <dd class=\"vcard\"><a href=\"mailto:ian@hixie.ch\" class=\"url fn\">Ian Hickson</a> (<span\n\
    class=\"company\"><a href=\"http://www.google.com/\">Google</a></span>)\n\
\n\
    <dd class=\"vcard\"><span class=\"fn\">Peter Linss</span> (former editor, <span class=\"company\"><a\n\
    href=\"http://www.netscape.com/\">Netscape/AOL</a></span>)\n\
\n\
    <dd class=\"vcard\"><span class=\"fn\">John Williams</span> (former editor, <span class=\"company\"><a\n\
    href=\"http://www.quark.com/\">Quark, Inc.</a></span>)\n\
\n\
   </dl>\n\
\n\
   <p class=\"copyright\"><a\n\
   href=\"http://www.w3.org/Consortium/Legal/ipr-notice#Copyright\">\n\
   Copyright</a> &copy; 2005 <a href=\"http://www.w3.org/\"><abbr\n\
   title=\"World Wide Web Consortium\">W3C</abbr></a><sup>&reg;</sup>\n\
   (<a href=\"http://www.csail.mit.edu/\"><abbr title=\"Massachusetts\n\
   Institute of Technology\">MIT</abbr></a>, <a\n\
   href=\"http://www.ercim.org/\"><acronym title=\"European Research\n\
   Consortium for Informatics and Mathematics\">ERCIM</acronym></a>, <a\n\
   href=\"http://www.keio.ac.jp/\">Keio</a>), All Rights Reserved.  W3C\n\
   <a\n\
   href=\"http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer\">liability</a>,\n\
   <a\n\
   href=\"http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks\">trademark</a>,\n\
   <a\n\
   href=\"http://www.w3.org/Consortium/Legal/copyright-documents\">document\n\
   use</a> rules apply.\n\
\n\
   <hr title=\"Separator for header\">\n\
\n\
  </div>\n\
\n\
  <h2><a name=abstract></a>Abstract</h2>\n\
\n\
  <p><em>Selectors</em> are patterns that match against elements in a\n\
  tree. Selectors have been optimized for use with HTML and XML, and\n\
  are designed to be usable in performance-critical code.</p>\n\
\n\
  <p><acronym title=\"Cascading Style Sheets\">CSS</acronym> (Cascading\n\
  Style Sheets) is a language for describing the rendering of <acronym\n\
  title=\"Hypertext Markup Language\">HTML</acronym> and <acronym\n\
  title=\"Extensible Markup Language\">XML</acronym> documents on\n\
  screen, on paper, in speech, etc. CSS uses Selectors for binding\n\
  style properties to elements in the document. This document\n\
  describes extensions to the selectors defined in CSS level 2. These\n\
  extended selectors will be used by CSS level 3.\n\
\n\
  <p>Selectors define the following function:</p>\n\
\n\
  <pre>expression &#x2217; element &rarr; boolean</pre>\n\
\n\
  <p>That is, given an element and a selector, this specification\n\
  defines whether that element matches the selector.</p>\n\
\n\
  <p>These expressions can also be used, for instance, to select a set\n\
  of elements, or a single element from a set of elements, by\n\
  evaluating the expression across all the elements in a\n\
  subtree. <acronym title=\"Simple Tree Transformation\n\
  Sheets\">STTS</acronym> (Simple Tree Transformation Sheets), a\n\
  language for transforming XML trees, uses this mechanism. <a href=\"#refsSTTS\">[STTS]</a></p>\n\
\n\
  <h2><a name=status></a>Status of this document</h2>\n\
\n\
  <p><em>This section describes the status of this document at the\n\
  time of its publication. Other documents may supersede this\n\
  document. A list of current W3C publications and the latest revision\n\
  of this technical report can be found in the <a\n\
  href=\"http://www.w3.org/TR/\">W3C technical reports index at\n\
  http://www.w3.org/TR/.</a></em></p>\n\
\n\
  <p>This document describes the selectors that already exist in <a\n\
  href=\"#refsCSS1\"><abbr title=\"CSS level 1\">CSS1</abbr></a> and <a\n\
  href=\"#refsCSS21\"><abbr title=\"CSS level 2\">CSS2</abbr></a>, and\n\
  also proposes new selectors for <abbr title=\"CSS level\n\
  3\">CSS3</abbr> and other languages that may need them.</p>\n\
\n\
  <p>The CSS Working Group doesn't expect that all implementations of\n\
  CSS3 will have to implement all selectors. Instead, there will\n\
  probably be a small number of variants of CSS3, called profiles. For\n\
  example, it may be that only a profile for interactive user agents\n\
  will include all of the selectors.</p>\n\
\n\
  <p>This specification is a last call working draft for the the <a\n\
  href=\"http://www.w3.org/Style/CSS/members\">CSS Working Group</a>\n\
  (<a href=\"/Style/\">Style Activity</a>). This\n\
  document is a revision of the <a\n\
  href=\"http://www.w3.org/TR/2001/CR-css3-selectors-20011113/\">Candidate\n\
  Recommendation dated 2001 November 13</a>, and has incorporated\n\
  implementation feedback received in the past few years. It is\n\
  expected that this last call will proceed straight to Proposed\n\
  Recommendation stage since it is believed that interoperability will\n\
  be demonstrable.</p>\n\
\n\
  <p>All persons are encouraged to review and implement this\n\
  specification and return comments to the (<a\n\
  href=\"http://lists.w3.org/Archives/Public/www-style/\">archived</a>)\n\
  public mailing list <a\n\
  href=\"http://www.w3.org/Mail/Lists.html#www-style\">www-style</a>\n\
  (see <a href=\"http://www.w3.org/Mail/Request\">instructions</a>). W3C\n\
  Members can also send comments directly to the CSS Working\n\
  Group.\n\
  The deadline for comments is 14 January 2006.</p>\n\
\n\
  <p>This is still a draft document and may be updated, replaced, or\n\
  obsoleted by other documents at any time. It is inappropriate to\n\
  cite a W3C Working Draft as other than &quot;work in progress&quot;.\n\
\n\
  <p>This document may be available in <a\n\
  href=\"http://www.w3.org/Style/css3-selectors-updates/translations\">translation</a>.\n\
  The English version of this specification is the only normative\n\
  version.\n\
\n\
  <div class=\"subtoc\">\n\
\n\
   <h2><a name=contents>Table of contents</a></h2>\n\
\n\
   <ul class=\"toc\">\n\
    <li class=\"tocline2\"><a href=\"#context\">1. Introduction</a>\n\
     <ul>\n\
      <li><a href=\"#dependencies\">1.1. Dependencies</a> </li>\n\
      <li><a href=\"#terminology\">1.2. Terminology</a> </li>\n\
      <li><a href=\"#changesFromCSS2\">1.3. Changes from CSS2</a> </li>\n\
     </ul>\n\
    <li class=\"tocline2\"><a href=\"#selectors\">2. Selectors</a>\n\
    <li class=\"tocline2\"><a href=\"#casesens\">3. Case sensitivity</a>\n\
    <li class=\"tocline2\"><a href=\"#selector-syntax\">4. Selector syntax</a>\n\
    <li class=\"tocline2\"><a href=\"#grouping\">5. Groups of selectors</a>\n\
    <li class=\"tocline2\"><a href=\"#simple-selectors\">6. Simple selectors</a>\n\
     <ul class=\"toc\">\n\
      <li class=\"tocline3\"><a href=\"#type-selectors\">6.1. Type selectors</a>\n\
       <ul class=\"toc\">\n\
        <li class=\"tocline4\"><a href=\"#typenmsp\">6.1.1. Type selectors and namespaces</a></li>\n\
       </ul>\n\
      <li class=\"tocline3\"><a href=\"#universal-selector\">6.2. Universal selector</a>\n\
       <ul>\n\
        <li><a href=\"#univnmsp\">6.2.1. Universal selector and namespaces</a></li>\n\
       </ul>\n\
      <li class=\"tocline3\"><a href=\"#attribute-selectors\">6.3. Attribute selectors</a>\n\
       <ul class=\"toc\">\n\
        <li class=\"tocline4\"><a href=\"#attribute-representation\">6.3.1. Representation of attributes and attributes values</a>\n\
        <li><a href=\"#attribute-substrings\">6.3.2. Substring matching attribute selectors</a>\n\
        <li class=\"tocline4\"><a href=\"#attrnmsp\">6.3.3. Attribute selectors and namespaces</a>\n\
        <li class=\"tocline4\"><a href=\"#def-values\">6.3.4. Default attribute values in DTDs</a></li>\n\
       </ul>\n\
      <li class=\"tocline3\"><a href=\"#class-html\">6.4. Class selectors</a>\n\
      <li class=\"tocline3\"><a href=\"#id-selectors\">6.5. ID selectors</a>\n\
      <li class=\"tocline3\"><a href=\"#pseudo-classes\">6.6. Pseudo-classes</a>\n\
       <ul class=\"toc\">\n\
        <li class=\"tocline4\"><a href=\"#dynamic-pseudos\">6.6.1. Dynamic pseudo-classes</a>\n\
        <li class=\"tocline4\"><a href=\"#target-pseudo\">6.6.2. The :target pseudo-class</a>\n\
        <li class=\"tocline4\"><a href=\"#lang-pseudo\">6.6.3. The :lang() pseudo-class</a>\n\
        <li class=\"tocline4\"><a href=\"#UIstates\">6.6.4. UI element states pseudo-classes</a>\n\
        <li class=\"tocline4\"><a href=\"#structural-pseudos\">6.6.5. Structural pseudo-classes</a>\n\
         <ul>\n\
          <li><a href=\"#root-pseudo\">:root pseudo-class</a>\n\
          <li><a href=\"#nth-child-pseudo\">:nth-child() pseudo-class</a>\n\
          <li><a href=\"#nth-last-child-pseudo\">:nth-last-child()</a>\n\
          <li><a href=\"#nth-of-type-pseudo\">:nth-of-type() pseudo-class</a>\n\
          <li><a href=\"#nth-last-of-type-pseudo\">:nth-last-of-type()</a>\n\
          <li><a href=\"#first-child-pseudo\">:first-child pseudo-class</a>\n\
          <li><a href=\"#last-child-pseudo\">:last-child pseudo-class</a>\n\
          <li><a href=\"#first-of-type-pseudo\">:first-of-type pseudo-class</a>\n\
          <li><a href=\"#last-of-type-pseudo\">:last-of-type pseudo-class</a>\n\
          <li><a href=\"#only-child-pseudo\">:only-child pseudo-class</a>\n\
          <li><a href=\"#only-of-type-pseudo\">:only-of-type pseudo-class</a>\n\
          <li><a href=\"#empty-pseudo\">:empty pseudo-class</a></li>\n\
         </ul>\n\
        <li class=\"tocline4\"><a href=\"#negation\">6.6.7. The negation pseudo-class</a></li>\n\
       </ul>\n\
      </li>\n\
     </ul>\n\
    <li><a href=\"#pseudo-elements\">7. Pseudo-elements</a>\n\
     <ul>\n\
      <li><a href=\"#first-line\">7.1. The ::first-line pseudo-element</a>\n\
      <li><a href=\"#first-letter\">7.2. The ::first-letter pseudo-element</a>\n\
      <li><a href=\"#UIfragments\">7.3. The ::selection pseudo-element</a>\n\
      <li><a href=\"#gen-content\">7.4. The ::before and ::after pseudo-elements</a></li>\n\
     </ul>\n\
    <li class=\"tocline2\"><a href=\"#combinators\">8. Combinators</a>\n\
     <ul class=\"toc\">\n\
      <li class=\"tocline3\"><a href=\"#descendant-combinators\">8.1. Descendant combinators</a>\n\
      <li class=\"tocline3\"><a href=\"#child-combinators\">8.2. Child combinators</a>\n\
      <li class=\"tocline3\"><a href=\"#sibling-combinators\">8.3. Sibling combinators</a>\n\
       <ul class=\"toc\">\n\
        <li class=\"tocline4\"><a href=\"#adjacent-sibling-combinators\">8.3.1. Adjacent sibling combinator</a>\n\
        <li class=\"tocline4\"><a href=\"#general-sibling-combinators\">8.3.2. General sibling combinator</a></li>\n\
       </ul>\n\
      </li>\n\
     </ul>\n\
    <li class=\"tocline2\"><a href=\"#specificity\">9. Calculating a selector's specificity</a>\n\
    <li class=\"tocline2\"><a href=\"#w3cselgrammar\">10. The grammar of Selectors</a>\n\
     <ul class=\"toc\">\n\
      <li class=\"tocline3\"><a href=\"#grammar\">10.1. Grammar</a>\n\
      <li class=\"tocline3\"><a href=\"#lex\">10.2. Lexical scanner</a></li>\n\
     </ul>\n\
    <li class=\"tocline2\"><a href=\"#downlevel\">11. Namespaces and down-level clients</a>\n\
    <li class=\"tocline2\"><a href=\"#profiling\">12. Profiles</a>\n\
    <li><a href=\"#Conformance\">13. Conformance and requirements</a>\n\
    <li><a href=\"#Tests\">14. Tests</a>\n\
    <li><a href=\"#ACKS\">15. Acknowledgements</a>\n\
    <li class=\"tocline2\"><a href=\"#references\">16. References</a>\n\
   </ul>\n\
\n\
  </div>\n\
\n\
  <h2><a name=context>1. Introduction</a></h2>\n\
\n\
  <h3><a name=dependencies></a>1.1. Dependencies</h3>\n\
\n\
  <p>Some features of this specification are specific to CSS, or have\n\
  particular limitations or rules specific to CSS. In this\n\
  specification, these have been described in terms of CSS2.1. <a\n\
  href=\"#refsCSS21\">[CSS21]</a></p>\n\
\n\
  <h3><a name=terminology></a>1.2. Terminology</h3>\n\
\n\
  <p>All of the text of this specification is normative except\n\
  examples, notes, and sections explicitly marked as\n\
  non-normative.</p>\n\
\n\
  <h3><a name=changesFromCSS2></a>1.3. Changes from CSS2</h3>\n\
 \n\
  <p><em>This section is non-normative.</em></p>\n\
\n\
  <p>The main differences between the selectors in CSS2 and those in\n\
  Selectors are:\n\
\n\
  <ul>\n\
\n\
   <li>the list of basic definitions (selector, group of selectors,\n\
   simple selector, etc.) has been changed; in particular, what was\n\
   referred to in CSS2 as a simple selector is now called a sequence\n\
   of simple selectors, and the term \"simple selector\" is now used for\n\
   the components of this sequence</li>\n\
\n\
   <li>an optional namespace component is now allowed in type element\n\
   selectors, the universal selector and attribute selectors</li>\n\
\n\
   <li>a <a href=\"#general-sibling-combinators\">new combinator</a> has been introduced</li>\n\
\n\
   <li>new simple selectors including substring matching attribute\n\
   selectors, and new pseudo-classes</li>\n\
\n\
   <li>new pseudo-elements, and introduction of the \"::\" convention\n\
   for pseudo-elements</li>\n\
\n\
   <li>the grammar has been rewritten</li>\n\
\n\
   <li>profiles to be added to specifications integrating Selectors\n\
   and defining the set of selectors which is actually supported by\n\
   each specification</li>\n\
\n\
   <li>Selectors are now a CSS3 Module and an independent\n\
   specification; other specifications can now refer to this document\n\
   independently of CSS</li>\n\
\n\
   <li>the specification now has its own test suite</li>\n\
\n\
  </ul>\n\
\n\
<h2><a name=selectors></a>2. Selectors</h2>\n\
\n\
<p><em>This section is non-normative, as it merely summarizes the\n\
following sections.</em></p>\n\
\n\
<p>A Selector represents a structure. This structure can be used as a\n\
condition (e.g. in a CSS rule) that determines which elements a\n\
selector matches in the document tree, or as a flat description of the\n\
HTML or XML fragment corresponding to that structure.</p>\n\
\n\
<p>Selectors may range from simple element names to rich contextual\n\
representations.</p>\n\
\n\
<p>The following table summarizes the Selector syntax:</p>\n\
\n\
<table class=\"selectorsReview\">\n\
  <thead>\n\
  <tr>\n\
    <th class=\"pattern\">Pattern</th>\n\
    <th class=\"meaning\">Meaning</th>\n\
    <th class=\"described\">Described in section</th>\n\
    <th class=\"origin\">First defined in CSS level</th></tr>\n\
  <tbody>\n\
  <tr>\n\
    <td class=\"pattern\">*</td>\n\
    <td class=\"meaning\">any element</td>\n\
    <td class=\"described\"><a\n\
      href=\"#universal-selector\">Universal\n\
      selector</a></td>\n\
    <td class=\"origin\">2</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E</td>\n\
    <td class=\"meaning\">an element of type E</td>\n\
    <td class=\"described\"><a\n\
      href=\"#type-selectors\">Type selector</a></td>\n\
    <td class=\"origin\">1</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E[foo]</td>\n\
    <td class=\"meaning\">an E element with a \"foo\" attribute</td>\n\
    <td class=\"described\"><a\n\
      href=\"#attribute-selectors\">Attribute\n\
      selectors</a></td>\n\
    <td class=\"origin\">2</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E[foo=\"bar\"]</td>\n\
    <td class=\"meaning\">an E element whose \"foo\" attribute value is exactly\n\
      equal to \"bar\"</td>\n\
    <td class=\"described\"><a\n\
      href=\"#attribute-selectors\">Attribute\n\
      selectors</a></td>\n\
    <td class=\"origin\">2</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E[foo~=\"bar\"]</td>\n\
    <td class=\"meaning\">an E element whose \"foo\" attribute value is a list of\n\
      space-separated values, one of which is exactly equal to \"bar\"</td>\n\
    <td class=\"described\"><a\n\
      href=\"#attribute-selectors\">Attribute\n\
      selectors</a></td>\n\
    <td class=\"origin\">2</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E[foo^=\"bar\"]</td>\n\
    <td class=\"meaning\">an E element whose \"foo\" attribute value begins exactly\n\
      with the string \"bar\"</td>\n\
    <td class=\"described\"><a\n\
      href=\"#attribute-selectors\">Attribute\n\
      selectors</a></td>\n\
    <td class=\"origin\">3</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E[foo$=\"bar\"]</td>\n\
    <td class=\"meaning\">an E element whose \"foo\" attribute value ends exactly\n\
      with the string \"bar\"</td>\n\
    <td class=\"described\"><a\n\
      href=\"#attribute-selectors\">Attribute\n\
      selectors</a></td>\n\
    <td class=\"origin\">3</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E[foo*=\"bar\"]</td>\n\
    <td class=\"meaning\">an E element whose \"foo\" attribute value contains the\n\
      substring \"bar\"</td>\n\
    <td class=\"described\"><a\n\
      href=\"#attribute-selectors\">Attribute\n\
      selectors</a></td>\n\
    <td class=\"origin\">3</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E[hreflang|=\"en\"]</td>\n\
    <td class=\"meaning\">an E element whose \"hreflang\" attribute has a hyphen-separated\n\
      list of values beginning (from the left) with \"en\"</td>\n\
    <td class=\"described\"><a\n\
      href=\"#attribute-selectors\">Attribute\n\
      selectors</a></td>\n\
    <td class=\"origin\">2</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E:root</td>\n\
    <td class=\"meaning\">an E element, root of the document</td>\n\
    <td class=\"described\"><a\n\
      href=\"#structural-pseudos\">Structural\n\
      pseudo-classes</a></td>\n\
    <td class=\"origin\">3</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E:nth-child(n)</td>\n\
    <td class=\"meaning\">an E element, the n-th child of its parent</td>\n\
    <td class=\"described\"><a\n\
      href=\"#structural-pseudos\">Structural\n\
      pseudo-classes</a></td>\n\
    <td class=\"origin\">3</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E:nth-last-child(n)</td>\n\
    <td class=\"meaning\">an E element, the n-th child of its parent, counting\n\
      from the last one</td>\n\
    <td class=\"described\"><a\n\
      href=\"#structural-pseudos\">Structural\n\
      pseudo-classes</a></td>\n\
    <td class=\"origin\">3</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E:nth-of-type(n)</td>\n\
    <td class=\"meaning\">an E element, the n-th sibling of its type</td>\n\
    <td class=\"described\"><a\n\
      href=\"#structural-pseudos\">Structural\n\
      pseudo-classes</a></td>\n\
    <td class=\"origin\">3</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E:nth-last-of-type(n)</td>\n\
    <td class=\"meaning\">an E element, the n-th sibling of its type, counting\n\
      from the last one</td>\n\
    <td class=\"described\"><a\n\
      href=\"#structural-pseudos\">Structural\n\
      pseudo-classes</a></td>\n\
    <td class=\"origin\">3</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E:first-child</td>\n\
    <td class=\"meaning\">an E element, first child of its parent</td>\n\
    <td class=\"described\"><a\n\
      href=\"#structural-pseudos\">Structural\n\
      pseudo-classes</a></td>\n\
    <td class=\"origin\">2</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E:last-child</td>\n\
    <td class=\"meaning\">an E element, last child of its parent</td>\n\
    <td class=\"described\"><a\n\
      href=\"#structural-pseudos\">Structural\n\
      pseudo-classes</a></td>\n\
    <td class=\"origin\">3</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E:first-of-type</td>\n\
    <td class=\"meaning\">an E element, first sibling of its type</td>\n\
    <td class=\"described\"><a\n\
      href=\"#structural-pseudos\">Structural\n\
      pseudo-classes</a></td>\n\
    <td class=\"origin\">3</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E:last-of-type</td>\n\
    <td class=\"meaning\">an E element, last sibling of its type</td>\n\
    <td class=\"described\"><a\n\
      href=\"#structural-pseudos\">Structural\n\
      pseudo-classes</a></td>\n\
    <td class=\"origin\">3</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E:only-child</td>\n\
    <td class=\"meaning\">an E element, only child of its parent</td>\n\
    <td class=\"described\"><a\n\
      href=\"#structural-pseudos\">Structural\n\
      pseudo-classes</a></td>\n\
    <td class=\"origin\">3</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E:only-of-type</td>\n\
    <td class=\"meaning\">an E element, only sibling of its type</td>\n\
    <td class=\"described\"><a\n\
      href=\"#structural-pseudos\">Structural\n\
      pseudo-classes</a></td>\n\
    <td class=\"origin\">3</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E:empty</td>\n\
    <td class=\"meaning\">an E element that has no children (including text\n\
    nodes)</td>\n\
    <td class=\"described\"><a\n\
      href=\"#structural-pseudos\">Structural\n\
      pseudo-classes</a></td>\n\
    <td class=\"origin\">3</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E:link<br>E:visited</td>\n\
    <td class=\"meaning\">an E element being the source anchor of a hyperlink of\n\
      which the target is not yet visited (:link) or already visited\n\
    (:visited)</td>\n\
    <td class=\"described\"><a\n\
      href=\"#link\">The link\n\
      pseudo-classes</a></td>\n\
    <td class=\"origin\">1</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E:active<br>E:hover<br>E:focus</td>\n\
    <td class=\"meaning\">an E element during certain user actions</td>\n\
    <td class=\"described\"><a\n\
      href=\"#useraction-pseudos\">The user\n\
      action pseudo-classes</a></td>\n\
    <td class=\"origin\">1 and 2</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E:target</td>\n\
    <td class=\"meaning\">an E element being the target of the referring URI</td>\n\
    <td class=\"described\"><a\n\
      href=\"#target-pseudo\">The target\n\
      pseudo-class</a></td>\n\
    <td class=\"origin\">3</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E:lang(fr)</td>\n\
    <td class=\"meaning\">an element of type E in language \"fr\" (the document\n\
      language specifies how language is determined)</td>\n\
    <td class=\"described\"><a\n\
      href=\"#lang-pseudo\">The :lang()\n\
      pseudo-class</a></td>\n\
    <td class=\"origin\">2</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E:enabled<br>E:disabled</td>\n\
    <td class=\"meaning\">a user interface element E which is enabled or\n\
    disabled</td>\n\
    <td class=\"described\"><a\n\
      href=\"#UIstates\">The UI element states\n\
      pseudo-classes</a></td>\n\
    <td class=\"origin\">3</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E:checked<!--<br>E:indeterminate--></td>\n\
    <td class=\"meaning\">a user interface element E which is checked<!-- or in an\n\
      indeterminate state--> (for instance a radio-button or checkbox)</td>\n\
    <td class=\"described\"><a\n\
      href=\"#UIstates\">The UI element states\n\
      pseudo-classes</a></td>\n\
    <td class=\"origin\">3</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E::first-line</td>\n\
    <td class=\"meaning\">the first formatted line of an E element</td>\n\
    <td class=\"described\"><a\n\
      href=\"#first-line\">The ::first-line\n\
      pseudo-element</a></td>\n\
    <td class=\"origin\">1</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E::first-letter</td>\n\
    <td class=\"meaning\">the first formatted letter of an E element</td>\n\
    <td class=\"described\"><a\n\
      href=\"#first-letter\">The ::first-letter\n\
      pseudo-element</a></td>\n\
    <td class=\"origin\">1</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E::selection</td>\n\
    <td class=\"meaning\">the portion of an E element that is currently\n\
      selected/highlighted by the user</td>\n\
    <td class=\"described\"><a\n\
      href=\"#UIfragments\">The UI element\n\
      fragments pseudo-elements</a></td>\n\
    <td class=\"origin\">3</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E::before</td>\n\
    <td class=\"meaning\">generated content before an E element</td>\n\
    <td class=\"described\"><a\n\
      href=\"#gen-content\">The ::before\n\
      pseudo-element</a></td>\n\
    <td class=\"origin\">2</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E::after</td>\n\
    <td class=\"meaning\">generated content after an E element</td>\n\
    <td class=\"described\"><a\n\
      href=\"#gen-content\">The ::after\n\
      pseudo-element</a></td>\n\
    <td class=\"origin\">2</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E.warning</td>\n\
    <td class=\"meaning\">an E element whose class is\n\
\"warning\" (the document language specifies how class is determined).</td>\n\
    <td class=\"described\"><a\n\
      href=\"#class-html\">Class\n\
    selectors</a></td>\n\
    <td class=\"origin\">1</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E#myid</td>\n\
    <td class=\"meaning\">an E element with ID equal to \"myid\".</td>\n\
    <td class=\"described\"><a\n\
      href=\"#id-selectors\">ID\n\
    selectors</a></td>\n\
    <td class=\"origin\">1</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E:not(s)</td>\n\
    <td class=\"meaning\">an E element that does not match simple selector s</td>\n\
    <td class=\"described\"><a\n\
      href=\"#negation\">Negation\n\
      pseudo-class</a></td>\n\
    <td class=\"origin\">3</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E F</td>\n\
    <td class=\"meaning\">an F element descendant of an E element</td>\n\
    <td class=\"described\"><a\n\
      href=\"#descendant-combinators\">Descendant\n\
      combinator</a></td>\n\
    <td class=\"origin\">1</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E &gt; F</td>\n\
    <td class=\"meaning\">an F element child of an E element</td>\n\
    <td class=\"described\"><a\n\
      href=\"#child-combinators\">Child\n\
      combinator</a></td>\n\
    <td class=\"origin\">2</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E + F</td>\n\
    <td class=\"meaning\">an F element immediately preceded by an E element</td>\n\
    <td class=\"described\"><a\n\
      href=\"#adjacent-sibling-combinators\">Adjacent sibling combinator</a></td>\n\
    <td class=\"origin\">2</td></tr>\n\
  <tr>\n\
    <td class=\"pattern\">E ~ F</td>\n\
    <td class=\"meaning\">an F element preceded by an E element</td>\n\
    <td class=\"described\"><a\n\
      href=\"#general-sibling-combinators\">General sibling combinator</a></td>\n\
    <td class=\"origin\">3</td></tr></tbody></table>\n\
\n\
<p>The meaning of each selector is derived from the table above by\n\
prepending \"matches\" to the contents of each cell in the \"Meaning\"\n\
column.</p>\n\
\n\
<h2><a name=casesens>3. Case sensitivity</a></h2>\n\
\n\
<p>The case sensitivity of document language element names, attribute\n\
names, and attribute values in selectors depends on the document\n\
language. For example, in HTML, element names are case-insensitive,\n\
but in XML, they are case-sensitive.</p>\n\
\n\
<h2><a name=selector-syntax>4. Selector syntax</a></h2>\n\
\n\
<p>A <dfn><a name=selector>selector</a></dfn> is a chain of one\n\
or more <a href=\"#sequence\">sequences of simple selectors</a>\n\
separated by <a href=\"#combinators\">combinators</a>.</p>\n\
\n\
<p>A <dfn><a name=sequence>sequence of simple selectors</a></dfn>\n\
is a chain of <a href=\"#simple-selectors-dfn\">simple selectors</a>\n\
that are not separated by a <a href=\"#combinators\">combinator</a>. It\n\
always begins with a <a href=\"#type-selectors\">type selector</a> or a\n\
<a href=\"#universal-selector\">universal selector</a>. No other type\n\
selector or universal selector is allowed in the sequence.</p>\n\
\n\
<p>A <dfn><a name=simple-selectors-dfn></a><a\n\
href=\"#simple-selectors\">simple selector</a></dfn> is either a <a\n\
href=\"#type-selectors\">type selector</a>, <a\n\
href=\"#universal-selector\">universal selector</a>, <a\n\
href=\"#attribute-selectors\">attribute selector</a>, <a\n\
href=\"#class-html\">class selector</a>, <a\n\
href=\"#id-selectors\">ID selector</a>, <a\n\
href=\"#content-selectors\">content selector</a>, or <a\n\
href=\"#pseudo-classes\">pseudo-class</a>. One <a\n\
href=\"#pseudo-elements\">pseudo-element</a> may be appended to the last\n\
sequence of simple selectors.</p>\n\
\n\
<p><dfn>Combinators</dfn> are: white space, &quot;greater-than\n\
sign&quot; (U+003E, <code>&gt;</code>), &quot;plus sign&quot; (U+002B,\n\
<code>+</code>) and &quot;tilde&quot; (U+007E, <code>~</code>).  White\n\
space may appear between a combinator and the simple selectors around\n\
it. <a name=whitespace></a>Only the characters \"space\" (U+0020), \"tab\"\n\
(U+0009), \"line feed\" (U+000A), \"carriage return\" (U+000D), and \"form\n\
feed\" (U+000C) can occur in white space. Other space-like characters,\n\
such as \"em-space\" (U+2003) and \"ideographic space\" (U+3000), are\n\
never part of white space.</p>\n\
\n\
<p>The elements of a document tree that are represented by a selector\n\
are the <dfn><a name=subject></a>subjects of the selector</dfn>. A\n\
selector consisting of a single sequence of simple selectors\n\
represents any element satisfying its requirements. Prepending another\n\
sequence of simple selectors and a combinator to a sequence imposes\n\
additional matching constraints, so the subjects of a selector are\n\
always a subset of the elements represented by the last sequence of\n\
simple selectors.</p>\n\
\n\
<p>An empty selector, containing no sequence of simple selectors and\n\
no pseudo-element, is an <a href=\"#Conformance\">invalid\n\
selector</a>.</p>\n\
\n\
<h2><a name=grouping>5. Groups of selectors</a></h2>\n\
\n\
<p>When several selectors share the same declarations, they may be\n\
grouped into a comma-separated list. (A comma is U+002C.)</p>\n\
\n\
<div class=\"example\">\n\
<p>CSS examples:</p>\n\
<p>In this example, we condense three rules with identical\n\
declarations into one. Thus,</p>\n\
<pre>h1 { font-family: sans-serif }\n\
h2 { font-family: sans-serif }\n\
h3 { font-family: sans-serif }</pre>\n\
<p>is equivalent to:</p>\n\
<pre>h1, h2, h3 { font-family: sans-serif }</pre>\n\
</div>\n\
\n\
<p><strong>Warning</strong>: the equivalence is true in this example\n\
because all the selectors are valid selectors. If just one of these\n\
selectors were invalid, the entire group of selectors would be\n\
invalid. This would invalidate the rule for all three heading\n\
elements, whereas in the former case only one of the three individual\n\
heading rules would be invalidated.</p>\n\
\n\
\n\
<h2><a name=simple-selectors>6. Simple selectors</a></h2>\n\
\n\
<h3><a name=type-selectors>6.1. Type selector</a></h3>\n\
\n\
<p>A <dfn>type selector</dfn> is the name of a document language\n\
element type. A type selector represents an instance of the element\n\
type in the document tree.</p>\n\
\n\
<div class=\"example\">\n\
 <p>Example:</p>\n\
 <p>The following selector represents an <code>h1</code> element in the document tree:</p>\n\
 <pre>h1</pre>\n\
</div>\n\
\n\
\n\
<h4><a name=typenmsp>6.1.1. Type selectors and namespaces</a></h4>\n\
\n\
<p>Type selectors allow an optional namespace (<a\n\
href=\"#refsXMLNAMES\">[XMLNAMES]</a>) component. A namespace prefix\n\
that has been previously declared may be prepended to the element name\n\
separated by the namespace separator &quot;vertical bar&quot;\n\
(U+007C, <code>|</code>).</p>\n\
\n\
<p>The namespace component may be left empty to indicate that the\n\
selector is only to represent elements with no declared namespace.</p>\n\
\n\
<p>An asterisk may be used for the namespace prefix, indicating that\n\
the selector represents elements in any namespace (including elements\n\
with no namespace).</p>\n\
\n\
<p>Element type selectors that have no namespace component (no\n\
namespace separator), represent elements without regard to the\n\
element's namespace (equivalent to \"<code>*|</code>\") unless a default\n\
namespace has been declared. If a default namespace has been declared,\n\
the selector will represent only elements in the default\n\
namespace.</p>\n\
\n\
<p>A type selector containing a namespace prefix that has not been\n\
previously declared is an <a href=\"#Conformance\">invalid</a> selector.\n\
The mechanism for declaring a namespace prefix is left up to the\n\
language implementing Selectors. In CSS, such a mechanism is defined\n\
in the General Syntax module.</p>\n\
\n\
<p>In a namespace-aware client, element type selectors will only match\n\
against the <a\n\
href=\"http://www.w3.org/TR/REC-xml-names/#NT-LocalPart\">local part</a>\n\
of the element's <a\n\
href=\"http://www.w3.org/TR/REC-xml-names/#ns-qualnames\">qualified\n\
name</a>. See <a href=\"#downlevel\">below</a> for notes about matching\n\
behaviors in down-level clients.</p>\n\
\n\
<p>In summary:</p>\n\
\n\
<dl>\n\
  <dt><code>ns|E</code></dt>\n\
  <dd>elements with name E in namespace ns</dd>\n\
  <dt><code>*|E</code></dt>\n\
  <dd>elements with name E in any namespace, including those without any\n\
  declared namespace</dd>\n\
  <dt><code>|E</code></dt>\n\
  <dd>elements with name E without any declared namespace</dd>\n\
  <dt><code>E</code></dt>\n\
  <dd>if no default namespace has been specified, this is equivalent to *|E.\n\
  Otherwise it is equivalent to ns|E where ns is the default namespace.</dd>\n\
</dl>\n\
\n\
<div class=\"example\">\n\
 <p>CSS examples:</p>\n\
\n\
 <pre>@namespace foo url(http://www.example.com);\n\
 foo|h1 { color: blue }\n\
 foo|* { color: yellow }\n\
 |h1 { color: red }\n\
 *|h1 { color: green }\n\
 h1 { color: green }</pre>\n\
\n\
 <p>The first rule will match only <code>h1</code> elements in the\n\
 \"http://www.example.com\" namespace.</p>\n\
\n\
 <p>The second rule will match all elements in the\n\
 \"http://www.example.com\" namespace.</p>\n\
\n\
 <p>The third rule will match only <code>h1</code> elements without\n\
 any declared namespace.</p>\n\
\n\
 <p>The fourth rule will match <code>h1</code> elements in any\n\
 namespace (including those without any declared namespace).</p>\n\
\n\
 <p>The last rule is equivalent to the fourth rule because no default\n\
 namespace has been defined.</p>\n\
\n\
</div>\n\
\n\
<h3><a name=universal-selector>6.2. Universal selector</a> </h3>\n\
\n\
<p>The <dfn>universal selector</dfn>, written &quot;asterisk&quot;\n\
(<code>*</code>), represents the qualified name of any element\n\
type. It represents any single element in the document tree in any\n\
namespace (including those without any declared namespace) if no\n\
default namespace has been specified. If a default namespace has been\n\
specified, see <a href=\"#univnmsp\">Universal selector and\n\
Namespaces</a> below.</p>\n\
\n\
<p>If the universal selector is not the only component of a sequence\n\
of simple selectors, the <code>*</code> may be omitted.</p>\n\
\n\
<div class=\"example\">\n\
 <p>Examples:</p>\n\
 <ul>\n\
  <li><code>*[hreflang|=en]</code> and <code>[hreflang|=en]</code> are equivalent,</li>\n\
  <li><code>*.warning</code> and <code>.warning</code> are equivalent,</li>\n\
  <li><code>*#myid</code> and <code>#myid</code> are equivalent.</li>\n\
 </ul>\n\
</div>\n\
\n\
<p class=\"note\"><strong>Note:</strong> it is recommended that the\n\
<code>*</code>, representing the universal selector, not be\n\
omitted.</p>\n\
\n\
<h4><a name=univnmsp>6.2.1. Universal selector and namespaces</a></h4>\n\
\n\
<p>The universal selector allows an optional namespace component. It\n\
is used as follows:</p>\n\
\n\
<dl>\n\
 <dt><code>ns|*</code></dt>\n\
 <dd>all elements in namespace ns</dd>\n\
 <dt><code>*|*</code></dt>\n\
 <dd>all elements</dd>\n\
 <dt><code>|*</code></dt>\n\
 <dd>all elements without any declared namespace</dd>\n\
 <dt><code>*</code></dt>\n\
 <dd>if no default namespace has been specified, this is equivalent to *|*.\n\
 Otherwise it is equivalent to ns|* where ns is the default namespace.</dd>\n\
</dl>\n\
\n\
<p>A universal selector containing a namespace prefix that has not\n\
been previously declared is an <a href=\"#Conformance\">invalid</a>\n\
selector.  The mechanism for declaring a namespace prefix is left up\n\
to the language implementing Selectors.  In CSS, such a mechanism is\n\
defined in the General Syntax module.</p>\n\
\n\
\n\
<h3><a name=attribute-selectors>6.3. Attribute selectors</a></h3>\n\
\n\
<p>Selectors allow the representation of an element's attributes. When\n\
a selector is used as an expression to match against an element,\n\
attribute selectors must be considered to match an element if that\n\
element has an attribute that matches the attribute represented by the\n\
attribute selector.</p>\n\
\n\
<h4><a name=attribute-representation>6.3.1. Attribute presence and values\n\
selectors</a></h4>\n\
\n\
<p>CSS2 introduced four attribute selectors:</p>\n\
\n\
<dl>\n\
  <dt><code>[att]</code>\n\
  <dd>Represents an element with the <code>att</code> attribute, whatever the value of\n\
  the attribute.</dd>\n\
  <dt><code>[att=val]</code></dt>\n\
  <dd>Represents an element with the <code>att</code> attribute whose value is exactly\n\
  \"val\".</dd>\n\
  <dt><code>[att~=val]</code></dt>\n\
  <dd>Represents an element with the <code>att</code> attribute whose value is a <a\n\
  href=\"#whitespace\">whitespace</a>-separated list of words, one of\n\
  which is exactly \"val\". If \"val\" contains whitespace, it will never\n\
  represent anything (since the words are <em>separated</em> by\n\
  spaces).</dd>\n\
  <dt><code>[att|=val]</code>\n\
  <dd>Represents an element with the <code>att</code> attribute, its value either\n\
  being exactly \"val\" or beginning with \"val\" immediately followed by\n\
  \"-\" (U+002D).  This is primarily intended to allow language subcode\n\
  matches (e.g., the <code>hreflang</code> attribute on the\n\
  <code>link</code> element in HTML) as described in RFC 3066 (<a\n\
  href=\"#refsRFC3066\">[RFC3066]</a>).  For <code>lang</code> (or\n\
  <code>xml:lang</code>) language subcode matching, please see <a\n\
  href=\"#lang-pseudo\">the <code>:lang</code> pseudo-class</a>.</dd>\n\
</dl>\n\
\n\
<p>Attribute values must be identifiers or strings. The\n\
case-sensitivity of attribute names and values in selectors depends on\n\
the document language.</p>\n\
\n\
<div class=\"example\">\n\
\n\
  <p>Examples:</p>\n\
\n\
  <p>The following attribute selector represents an <code>h1</code>\n\
  element that carries the <code>title</code> attribute, whatever its\n\
  value:</p>\n\
\n\
  <pre>h1[title]</pre>\n\
\n\
  <p>In the following example, the selector represents a\n\
  <code>span</code> element whose <code>class</code> attribute has\n\
  exactly the value \"example\":</p>\n\
\n\
  <pre>span[class=\"example\"]</pre>\n\
\n\
  <p>Multiple attribute selectors can be used to represent several\n\
  attributes of an element, or several conditions on the same\n\
  attribute. Here, the selector represents a <code>span</code> element\n\
  whose <code>hello</code> attribute has exactly the value \"Cleveland\"\n\
  and whose <code>goodbye</code> attribute has exactly the value\n\
  \"Columbus\":</p>\n\
\n\
  <pre>span[hello=\"Cleveland\"][goodbye=\"Columbus\"]</pre>\n\
\n\
  <p>The following selectors illustrate the differences between \"=\"\n\
  and \"~=\".  The first selector will represent, for example, the value\n\
  \"copyright copyleft copyeditor\" on a <code>rel</code> attribute. The\n\
  second selector will only represent an <code>a</code> element with\n\
  an <code>href</code> attribute having the exact value\n\
  \"http://www.w3.org/\".</p>\n\
\n\
  <pre>a[rel~=\"copyright\"]\n\
a[href=\"http://www.w3.org/\"]</pre>\n\
\n\
  <p>The following selector represents a <code>link</code> element\n\
  whose <code>hreflang</code> attribute is exactly \"fr\".</p>\n\
\n\
  <pre>link[hreflang=fr]</pre>\n\
\n\
  <p>The following selector represents a <code>link</code> element for\n\
  which the values of the <code>hreflang</code> attribute begins with\n\
  \"en\", including \"en\", \"en-US\", and \"en-cockney\":</p>\n\
\n\
  <pre>link[hreflang|=\"en\"]</pre>\n\
\n\
  <p>Similarly, the following selectors represents a\n\
  <code>DIALOGUE</code> element whenever it has one of two different\n\
  values for an attribute <code>character</code>:</p>\n\
\n\
  <pre>DIALOGUE[character=romeo]\n\
DIALOGUE[character=juliet]</pre>\n\
\n\
</div>\n\
\n\
<h4><a name=attribute-substrings></a>6.3.2. Substring matching attribute\n\
selectors</h4>\n\
\n\
<p>Three additional attribute selectors are provided for matching\n\
substrings in the value of an attribute:</p>\n\
\n\
<dl>\n\
  <dt><code>[att^=val]</code></dt>\n\
  <dd>Represents an element with the <code>att</code> attribute whose value begins\n\
  with the prefix \"val\".</dd>\n\
  <dt><code>[att$=val]</code>\n\
  <dd>Represents an element with the <code>att</code> attribute whose value ends with\n\
  the suffix \"val\".</dd>\n\
  <dt><code>[att*=val]</code>\n\
  <dd>Represents an element with the <code>att</code> attribute whose value contains\n\
  at least one instance of the substring \"val\".</dd>\n\
</dl>\n\
\n\
<p>Attribute values must be identifiers or strings. The\n\
case-sensitivity of attribute names in selectors depends on the\n\
document language.</p>\n\
\n\
<div class=\"example\">\n\
 <p>Examples:</p>\n\
 <p>The following selector represents an HTML <code>object</code>, referencing an\n\
 image:</p>\n\
 <pre>object[type^=\"image/\"]</pre>\n\
 <p>The following selector represents an HTML anchor <code>a</code> with an\n\
 <code>href</code> attribute whose value ends with \".html\".</p>\n\
 <pre>a[href$=\".html\"]</pre>\n\
 <p>The following selector represents an HTML paragraph with a <code>title</code>\n\
 attribute whose value contains the substring \"hello\"</p>\n\
 <pre>p[title*=\"hello\"]</pre>\n\
</div>\n\
\n\
<h4><a name=attrnmsp>6.3.3. Attribute selectors and namespaces</a></h4>\n\
\n\
<p>Attribute selectors allow an optional namespace component to the\n\
attribute name. A namespace prefix that has been previously declared\n\
may be prepended to the attribute name separated by the namespace\n\
separator &quot;vertical bar&quot; (<code>|</code>). In keeping with\n\
the Namespaces in the XML recommendation, default namespaces do not\n\
apply to attributes, therefore attribute selectors without a namespace\n\
component apply only to attributes that have no declared namespace\n\
(equivalent to \"<code>|attr</code>\"). An asterisk may be used for the\n\
namespace prefix indicating that the selector is to match all\n\
attribute names without regard to the attribute's namespace.\n\
\n\
<p>An attribute selector with an attribute name containing a namespace\n\
prefix that has not been previously declared is an <a\n\
href=\"#Conformance\">invalid</a> selector.  The mechanism for declaring\n\
a namespace prefix is left up to the language implementing Selectors.\n\
In CSS, such a mechanism is defined in the General Syntax module.\n\
\n\
<div class=\"example\">\n\
  <p>CSS examples:</p>\n\
  <pre>@namespace foo \"http://www.example.com\";\n\
[foo|att=val] { color: blue }\n\
[*|att] { color: yellow }\n\
[|att] { color: green }\n\
[att] { color: green }</pre>\n\
\n\
  <p>The first rule will match only elements with the attribute\n\
  <code>att</code> in the \"http://www.example.com\" namespace with the\n\
  value \"val\".</p>\n\
\n\
  <p>The second rule will match only elements with the attribute\n\
  <code>att</code> regardless of the namespace of the attribute\n\
  (including no declared namespace).</p>\n\
\n\
  <p>The last two rules are equivalent and will match only elements\n\
  with the attribute <code>att</code> where the attribute is not\n\
  declared to be in a namespace.</p>\n\
\n\
</div>\n\
\n\
<h4><a name=def-values>6.3.4. Default attribute values in DTDs</a></h4>\n\
\n\
<p>Attribute selectors represent explicitly set attribute values in\n\
the document tree. Default attribute values may be defined in a DTD or\n\
elsewhere, but cannot always be selected by attribute\n\
selectors. Selectors should be designed so that they work even if the\n\
default values are not included in the document tree.</p>\n\
\n\
<p>More precisely, a UA is <em>not</em> required to read an \"external\n\
subset\" of the DTD but <em>is</em> required to look for default\n\
attribute values in the document's \"internal subset.\" (See <a\n\
href=\"#refsXML10\">[XML10]</a> for definitions of these subsets.)</p>\n\
\n\
<p>A UA that recognizes an XML namespace <a\n\
href=\"#refsXMLNAMES\">[XMLNAMES]</a> is not required to use its\n\
knowledge of that namespace to treat default attribute values as if\n\
they were present in the document. (For example, an XHTML UA is not\n\
required to use its built-in knowledge of the XHTML DTD.)</p>\n\
\n\
<p class=\"note\"><strong>Note:</strong> Typically, implementations\n\
choose to ignore external subsets.</p>\n\
\n\
<div class=\"example\">\n\
<p>Example:</p>\n\
\n\
<p>Consider an element EXAMPLE with an attribute \"notation\" that has a\n\
default value of \"decimal\". The DTD fragment might be</p>\n\
\n\
<pre class=\"dtd-example\">&lt;!ATTLIST EXAMPLE notation (decimal,octal) \"decimal\"></pre>\n\
\n\
<p>If the style sheet contains the rules</p>\n\
\n\
<pre>EXAMPLE[notation=decimal] { /*... default property settings ...*/ }\n\
EXAMPLE[notation=octal]   { /*... other settings...*/ }</pre>\n\
\n\
<p>the first rule will not match elements whose \"notation\" attribute\n\
is set by default, i.e. not set explicitly. To catch all cases, the\n\
attribute selector for the default value must be dropped:</p>\n\
\n\
<pre>EXAMPLE                   { /*... default property settings ...*/ }\n\
EXAMPLE[notation=octal]   { /*... other settings...*/ }</pre>\n\
\n\
<p>Here, because the selector <code>EXAMPLE[notation=octal]</code> is\n\
more specific than the tag\n\
selector alone, the style declarations in the second rule will override\n\
those in the first for elements that have a \"notation\" attribute value\n\
of \"octal\". Care has to be taken that all property declarations that\n\
are to apply only to the default case are overridden in the non-default\n\
cases' style rules.</p>\n\
\n\
</div>\n\
\n\
<h3><a name=class-html>6.4. Class selectors</a></h3>\n\
\n\
<p>Working with HTML, authors may use the period (U+002E,\n\
<code>.</code>) notation as an alternative to the <code>~=</code>\n\
notation when representing the <code>class</code> attribute. Thus, for\n\
HTML, <code>div.value</code> and <code>div[class~=value]</code> have\n\
the same meaning. The attribute value must immediately follow the\n\
&quot;period&quot; (<code>.</code>).</p>\n\
\n\
<p>UAs may apply selectors using the period (.) notation in XML\n\
documents if the UA has namespace-specific knowledge that allows it to\n\
determine which attribute is the &quot;class&quot; attribute for the\n\
respective namespace. One such example of namespace-specific knowledge\n\
is the prose in the specification for a particular namespace (e.g. SVG\n\
1.0 <a href=\"#refsSVG\">[SVG]</a> describes the <a\n\
href=\"http://www.w3.org/TR/2001/PR-SVG-20010719/styling.html#ClassAttribute\">SVG\n\
&quot;class&quot; attribute</a> and how a UA should interpret it, and\n\
similarly MathML 1.01 <a href=\"#refsMATH\">[MATH]</a> describes the <a\n\
href=\"http://www.w3.org/1999/07/REC-MathML-19990707/chapter2.html#sec2.3.4\">MathML\n\
&quot;class&quot; attribute</a>.)</p>\n\
\n\
<div class=\"example\">\n\
 <p>CSS examples:</p>\n\
\n\
 <p>We can assign style information to all elements with\n\
 <code>class~=\"pastoral\"</code> as follows:</p>\n\
\n\
  <pre>*.pastoral { color: green }  /* all elements with class~=pastoral */</pre>\n\
\n\
  <p>or just</p>\n\
\n\
  <pre>.pastoral { color: green }  /* all elements with class~=pastoral */</pre>\n\
\n\
  <p>The following assigns style only to H1 elements with\n\
  <code>class~=\"pastoral\"</code>:</p>\n\
\n\
  <pre>H1.pastoral { color: green }  /* H1 elements with class~=pastoral */</pre>\n\
\n\
  <p>Given these rules, the first H1 instance below would not have\n\
  green text, while the second would:</p>\n\
\n\
  <pre>&lt;H1&gt;Not green&lt;/H1&gt;\n\
&lt;H1 class=\"pastoral\"&gt;Very green&lt;/H1&gt;</pre>\n\
\n\
</div>\n\
\n\
<p>To represent a subset of \"class\" values, each value must be preceded\n\
by a \".\", in any order.</P>\n\
\n\
<div class=\"example\">\n\
\n\
  <p>CSS example:</p>\n\
\n\
  <p>The following rule matches any P element whose \"class\" attribute\n\
  has been assigned a list of <a\n\
  href=\"#whitespace\">whitespace</a>-separated values that includes\n\
  \"pastoral\" and \"marine\":</p>\n\
\n\
  <pre>p.pastoral.marine { color: green }</pre>\n\
\n\
  <p>This rule matches when <code>class=\"pastoral blue aqua\n\
  marine\"</code> but does not match for <code>class=\"pastoral\n\
  blue\"</code>.</p>\n\
\n\
</div>\n\
\n\
<p class=\"note\"><strong>Note:</strong> Because CSS gives considerable\n\
power to the \"class\" attribute, authors could conceivably design their\n\
own \"document language\" based on elements with almost no associated\n\
presentation (such as DIV and SPAN in HTML) and assigning style\n\
information through the \"class\" attribute.  Authors should avoid this\n\
practice since the structural elements of a document language often\n\
have recognized and accepted meanings and author-defined classes may\n\
not.</p>\n\
\n\
<p class=\"note\"><strong>Note:</strong> If an element has multiple\n\
class attributes, their values must be concatenated with spaces\n\
between the values before searching for the class. As of this time the\n\
working group is not aware of any manner in which this situation can\n\
be reached, however, so this behavior is explicitly non-normative in\n\
this specification.</p>\n\
\n\
<h3><a name=id-selectors>6.5. ID selectors</a></h3>\n\
\n\
<p>Document languages may contain attributes that are declared to be\n\
of type ID. What makes attributes of type ID special is that no two\n\
such attributes can have the same value in a document, regardless of\n\
the type of the elements that carry them; whatever the document\n\
language, an ID typed attribute can be used to uniquely identify its\n\
element. In HTML all ID attributes are named \"id\"; XML applications\n\
may name ID attributes differently, but the same restriction\n\
applies.</p>\n\
\n\
<p>An ID-typed attribute of a document language allows authors to\n\
assign an identifier to one element instance in the document tree. W3C\n\
ID selectors represent an element instance based on its identifier. An\n\
ID selector contains a &quot;number sign&quot; (U+0023,\n\
<code>#</code>) immediately followed by the ID value, which must be an\n\
identifier.</p>\n\
\n\
<p>Selectors does not specify how a UA knows the ID-typed attribute of\n\
an element. The UA may, e.g., read a document's DTD, have the\n\
information hard-coded or ask the user.\n\
\n\
<div class=\"example\">\n\
  <p>Examples:</p>\n\
  <p>The following ID selector represents an <code>h1</code> element\n\
  whose ID-typed attribute has the value \"chapter1\":</p>\n\
  <pre>h1#chapter1</pre>\n\
  <p>The following ID selector represents any element whose ID-typed\n\
  attribute has the value \"chapter1\":</p>\n\
  <pre>#chapter1</pre>\n\
  <p>The following selector represents any element whose ID-typed\n\
  attribute has the value \"z98y\".</p>\n\
  <pre>*#z98y</pre>\n\
</div>\n\
\n\
<p class=\"note\"><strong>Note.</strong> In XML 1.0 <a\n\
href=\"#refsXML10\">[XML10]</a>, the information about which attribute\n\
contains an element's IDs is contained in a DTD or a schema. When\n\
parsing XML, UAs do not always read the DTD, and thus may not know\n\
what the ID of an element is (though a UA may have namespace-specific\n\
knowledge that allows it to determine which attribute is the ID\n\
attribute for that namespace). If a style sheet designer knows or\n\
suspects that a UA may not know what the ID of an element is, he\n\
should use normal attribute selectors instead:\n\
<code>[name=p371]</code> instead of <code>#p371</code>.  Elements in\n\
XML 1.0 documents without a DTD do not have IDs at all.</p>\n\
\n\
<p>If an element has multiple ID attributes, all of them must be\n\
treated as IDs for that element for the purposes of the ID\n\
selector. Such a situation could be reached using mixtures of xml:id,\n\
DOM3 Core, XML DTDs, and namespace-specific knowledge.</p>\n\
\n\
<h3><a name=pseudo-classes>6.6. Pseudo-classes</a></h3>\n\
\n\
<p>The pseudo-class concept is introduced to permit selection based on\n\
information that lies outside of the document tree or that cannot be\n\
expressed using the other simple selectors.</p>\n\
\n\
<p>A pseudo-class always consists of a &quot;colon&quot;\n\
(<code>:</code>) followed by the name of the pseudo-class and\n\
optionally by a value between parentheses.</p>\n\
\n\
<p>Pseudo-classes are allowed in all sequences of simple selectors\n\
contained in a selector. Pseudo-classes are allowed anywhere in\n\
sequences of simple selectors, after the leading type selector or\n\
universal selector (possibly omitted). Pseudo-class names are\n\
case-insensitive. Some pseudo-classes are mutually exclusive, while\n\
others can be applied simultaneously to the same\n\
element. Pseudo-classes may be dynamic, in the sense that an element\n\
may acquire or lose a pseudo-class while a user interacts with the\n\
document.</p>\n\
\n\
\n\
<h4><a name=dynamic-pseudos>6.6.1. Dynamic pseudo-classes</a></h4>\n\
\n\
<p>Dynamic pseudo-classes classify elements on characteristics other\n\
than their name, attributes, or content, in principle characteristics\n\
that cannot be deduced from the document tree.</p>\n\
\n\
<p>Dynamic pseudo-classes do not appear in the document source or\n\
document tree.</p>\n\
\n\
\n\
<h5>The <a name=link>link pseudo-classes: :link and :visited</a></h5>\n\
\n\
<p>User agents commonly display unvisited links differently from\n\
previously visited ones. Selectors\n\
provides the pseudo-classes <code>:link</code> and\n\
<code>:visited</code> to distinguish them:</p>\n\
\n\
<ul>\n\
  <li>The <code>:link</code> pseudo-class applies to links that have\n\
  not yet been visited.</li>\n\
  <li>The <code>:visited</code> pseudo-class applies once the link has\n\
  been visited by the user. </li>\n\
</ul>\n\
\n\
<p>After some amount of time, user agents may choose to return a\n\
visited link to the (unvisited) ':link' state.</p>\n\
\n\
<p>The two states are mutually exclusive.</p>\n\
\n\
<div class=\"example\">\n\
\n\
  <p>Example:</p>\n\
\n\
  <p>The following selector represents links carrying class\n\
  <code>external</code> and already visited:</p>\n\
\n\
  <pre>a.external:visited</pre>\n\
\n\
</div>\n\
\n\
<p class=\"note\"><strong>Note:</strong> It is possible for style sheet\n\
authors to abuse the :link and :visited pseudo-classes to determine\n\
which sites a user has visited without the user's consent.\n\
\n\
<p>UAs may therefore treat all links as unvisited links, or implement\n\
other measures to preserve the user's privacy while rendering visited\n\
and unvisited links differently.</p>\n\
\n\
<h5>The <a name=useraction-pseudos>user action pseudo-classes\n\
:hover, :active, and :focus</a></h5>\n\
\n\
<p>Interactive user agents sometimes change the rendering in response\n\
to user actions. Selectors provides\n\
three pseudo-classes for the selection of an element the user is\n\
acting on.</p>\n\
\n\
<ul>\n\
\n\
  <li>The <code>:hover</code> pseudo-class applies while the user\n\
  designates an element with a pointing device, but does not activate\n\
  it. For example, a visual user agent could apply this pseudo-class\n\
  when the cursor (mouse pointer) hovers over a box generated by the\n\
  element. User agents not that do not support <a\n\
  href=\"http://www.w3.org/TR/REC-CSS2/media.html#interactive-media-group\">interactive\n\
  media</a> do not have to support this pseudo-class. Some conforming\n\
  user agents that support <a\n\
  href=\"http://www.w3.org/TR/REC-CSS2/media.html#interactive-media-group\">interactive\n\
  media</a> may not be able to support this pseudo-class (e.g., a pen\n\
  device that does not detect hovering).</li>\n\
\n\
  <li>The <code>:active</code> pseudo-class applies while an element\n\
  is being activated by the user. For example, between the times the\n\
  user presses the mouse button and releases it.</li>\n\
\n\
  <li>The <code>:focus</code> pseudo-class applies while an element\n\
  has the focus (accepts keyboard or mouse events, or other forms of\n\
  input). </li>\n\
\n\
</ul>\n\
\n\
<p>There may be document language or implementation specific limits on\n\
which elements can become <code>:active</code> or acquire\n\
<code>:focus</code>.</p>\n\
\n\
<p>These pseudo-classes are not mutually exclusive. An element may\n\
match several pseudo-classes at the same time.</p>\n\
\n\
<p>Selectors doesn't define if the parent of an element that is\n\
':active' or ':hover' is also in that state.</p>\n\
\n\
<div class=\"example\">\n\
  <p>Examples:</p>\n\
  <pre>a:link    /* unvisited links */\n\
a:visited /* visited links */\n\
a:hover   /* user hovers */\n\
a:active  /* active links */</pre>\n\
  <p>An example of combining dynamic pseudo-classes:</p>\n\
  <pre>a:focus\n\
a:focus:hover</pre>\n\
  <p>The last selector matches <code>a</code> elements that are in\n\
  the pseudo-class :focus and in the pseudo-class :hover.</p>\n\
</div>\n\
\n\
<p class=\"note\"><strong>Note:</strong> An element can be both ':visited'\n\
and ':active' (or ':link' and ':active').</p>\n\
\n\
<h4><a name=target-pseudo>6.6.2. The target pseudo-class :target</a></h4>\n\
\n\
<p>Some URIs refer to a location within a resource. This kind of URI\n\
ends with a &quot;number sign&quot; (#) followed by an anchor\n\
identifier (called the fragment identifier).</p>\n\
\n\
<p>URIs with fragment identifiers link to a certain element within the\n\
document, known as the target element. For instance, here is a URI\n\
pointing to an anchor named <code>section_2</code> in an HTML\n\
document:</p>\n\
\n\
<pre>http://example.com/html/top.html#section_2</pre>\n\
\n\
<p>A target element can be represented by the <code>:target</code>\n\
pseudo-class. If the document's URI has no fragment identifier, then\n\
the document has no target element.</p>\n\
\n\
<div class=\"example\">\n\
 <p>Example:</p>\n\
 <pre>p.note:target</pre>\n\
 <p>This selector represents a <code>p</code> element of class\n\
 <code>note</code> that is the target element of the referring\n\
 URI.</p>\n\
</div>\n\
\n\
<div class=\"example\">\n\
 <p>CSS example:</p>\n\
 <p>Here, the <code>:target</code> pseudo-class is used to make the\n\
 target element red and place an image before it, if there is one:</p>\n\
 <pre>*:target { color : red }\n\
*:target::before { content : url(target.png) }</pre>\n\
</div>\n\
\n\
<h4><a name=lang-pseudo>6.6.3. The language pseudo-class :lang</a></h4>\n\
\n\
<p>If the document language specifies how the human language of an\n\
element is determined, it is possible to write selectors that\n\
represent an element based on its language. For example, in HTML <a\n\
href=\"#refsHTML4\">[HTML4]</a>, the language is determined by a\n\
combination of the <code>lang</code> attribute, the <code>meta</code>\n\
element, and possibly by information from the protocol (such as HTTP\n\
headers). XML uses an attribute called <code>xml:lang</code>, and\n\
there may be other document language-specific methods for determining\n\
the language.</p>\n\
\n\
<p>The pseudo-class <code>:lang(C)</code> represents an element that\n\
is in language C. Whether an element is represented by a\n\
<code>:lang()</code> selector is based solely on the identifier C\n\
being either equal to, or a hyphen-separated substring of, the\n\
element's language value, in the same way as if performed by the <a\n\
href=\"#attribute-representation\">'|='</a> operator in attribute\n\
selectors. The identifier C does not have to be a valid language\n\
name.</p>\n\
\n\
<p>C must not be empty. (If it is, the selector is invalid.)</p>\n\
\n\
<p class=\"note\"><strong>Note:</strong> It is recommended that\n\
documents and protocols indicate language using codes from RFC 3066 <a\n\
href=\"#refsRFC3066\">[RFC3066]</a> or its successor, and by means of\n\
\"xml:lang\" attributes in the case of XML-based documents <a\n\
href=\"#refsXML10\">[XML10]</a>. See <a\n\
href=\"http://www.w3.org/International/questions/qa-lang-2or3.html\">\n\
\"FAQ: Two-letter or three-letter language codes.\"</a></p>\n\
\n\
<div class=\"example\">\n\
  <p>Examples:</p>\n\
  <p>The two following selectors represent an HTML document that is in\n\
  Belgian, French, or German. The two next selectors represent\n\
  <code>q</code> quotations in an arbitrary element in Belgian, French,\n\
  or German.</p>\n\
  <pre>html:lang(fr-be)\n\
html:lang(de)\n\
:lang(fr-be) &gt; q\n\
:lang(de) &gt; q</pre>\n\
</div>\n\
\n\
<h4><a name=UIstates>6.6.4. The UI element states pseudo-classes</a></h4>\n\
\n\
<h5><a name=enableddisabled>The :enabled and :disabled pseudo-classes</a></h5>\n\
\n\
<p>The <code>:enabled</code> pseudo-class allows authors to customize\n\
the look of user interface elements that are enabled &mdash; which the\n\
user can select or activate in some fashion (e.g. clicking on a button\n\
with a mouse).  There is a need for such a pseudo-class because there\n\
is no way to programmatically specify the default appearance of say,\n\
an enabled <code>input</code> element without also specifying what it\n\
would look like when it was disabled.</p>\n\
\n\
<p>Similar to <code>:enabled</code>, <code>:disabled</code> allows the\n\
author to specify precisely how a disabled or inactive user interface\n\
element should look.</p>\n\
\n\
<p>Most elements will be neither enabled nor disabled.  An element is\n\
enabled if the user can either activate it or transfer the focus to\n\
it. An element is disabled if it could be enabled, but the user cannot\n\
presently activate it or transfer focus to it.</p>\n\
\n\
\n\
<h5><a name=checked>The :checked pseudo-class</a></h5>\n\
\n\
<p>Radio and checkbox elements can be toggled by the user. Some menu\n\
items are \"checked\" when the user selects them. When such elements are\n\
toggled \"on\" the <code>:checked</code> pseudo-class applies. The\n\
<code>:checked</code> pseudo-class initially applies to such elements\n\
that have the HTML4 <code>selected</code> and <code>checked</code>\n\
attributes as described in <a\n\
href=\"http://www.w3.org/TR/REC-html40/interact/forms.html#h-17.2.1\">Section\n\
17.2.1 of HTML4</a>, but of course the user can toggle \"off\" such\n\
elements in which case the <code>:checked</code> pseudo-class would no\n\
longer apply. While the <code>:checked</code> pseudo-class is dynamic\n\
in nature, and is altered by user action, since it can also be based\n\
on the presence of the semantic HTML4 <code>selected</code> and\n\
<code>checked</code> attributes, it applies to all media.\n\
\n\
\n\
<h5><a name=indeterminate>The :indeterminate pseudo-class</a></h5>\n\
\n\
<div class=\"note\">\n\
\n\
<p>Radio and checkbox elements can be toggled by the user, but are\n\
sometimes in an indeterminate state, neither checked nor unchecked.\n\
This can be due to an element attribute, or DOM manipulation.</p>\n\
\n\
<p>A future version of this specification may introduce an \n\
<code>:indeterminate</code> pseudo-class that applies to such elements.\n\
<!--While the <code>:indeterminate</code> pseudo-class is dynamic in\n\
nature, and is altered by user action, since it can also be based on\n\
the presence of an element attribute, it applies to all media.</p>\n\
\n\
<p>Components of a radio-group initialized with no pre-selected choice\n\
are an example of :indeterminate state.--></p>\n\
\n\
</div>\n\
\n\
\n\
<h4><a name=structural-pseudos>6.6.5. Structural pseudo-classes</a></h4>\n\
\n\
<p>Selectors introduces the concept of <dfn>structural\n\
pseudo-classes</dfn> to permit selection based on extra information that lies in\n\
the document tree but cannot be represented by other simple selectors or\n\
combinators. \n\
\n\
<p>Note that standalone pieces of PCDATA (text nodes in the DOM) are\n\
not counted when calculating the position of an element in the list of\n\
children of its parent. When calculating the position of an element in\n\
the list of children of its parent, the index numbering starts at 1.\n\
\n\
\n\
<h5><a name=root-pseudo>:root pseudo-class</a></h5>\n\
\n\
<p>The <code>:root</code> pseudo-class represents an element that is\n\
the root of the document. In HTML 4, this is always the\n\
<code>HTML</code> element.\n\
\n\
\n\
<h5><a name=nth-child-pseudo>:nth-child() pseudo-class</a></h5>\n\
\n\
<p>The\n\
<code>:nth-child(<var>a</var><code>n</code>+<var>b</var>)</code>\n\
pseudo-class notation represents an element that has\n\
<var>a</var><code>n</code>+<var>b</var>-1 siblings\n\
<strong>before</strong> it in the document tree, for a given positive\n\
integer or zero value of <code>n</code>, and has a parent element. In\n\
other words, this matches the <var>b</var>th child of an element after\n\
all the children have been split into groups of <var>a</var> elements\n\
each. For example, this allows the selectors to address every other\n\
row in a table, and could be used to alternate the color\n\
of paragraph text in a cycle of four. The <var>a</var> and\n\
<var>b</var> values must be zero, negative integers or positive\n\
integers. The index of the first child of an element is 1.\n\
\n\
<p>In addition to this, <code>:nth-child()</code> can take\n\
'<code>odd</code>' and '<code>even</code>' as arguments instead.\n\
'<code>odd</code>' has the same signification as <code>2n+1</code>,\n\
and '<code>even</code>' has the same signification as <code>2n</code>.\n\
\n\
\n\
<div class=\"example\">\n\
<p>Examples:</p>\n\
<pre>tr:nth-child(2n+1) /* represents every odd row of an HTML table */\n\
tr:nth-child(odd)  /* same */\n\
tr:nth-child(2n)   /* represents every even row of an HTML table */\n\
tr:nth-child(even) /* same */\n\
\n\
/* Alternate paragraph colours in CSS */\n\
p:nth-child(4n+1) { color: navy; }\n\
p:nth-child(4n+2) { color: green; }\n\
p:nth-child(4n+3) { color: maroon; }\n\
p:nth-child(4n+4) { color: purple; }</pre>\n\
</div>\n\
\n\
<p>When <var>a</var>=0, no repeating is used, so for example\n\
<code>:nth-child(0n+5)</code> matches only the fifth child. When\n\
<var>a</var>=0, the <var>a</var><code>n</code> part need not be\n\
included, so the syntax simplifies to\n\
<code>:nth-child(<var>b</var>)</code> and the last example simplifies\n\
to <code>:nth-child(5)</code>.\n\
\n\
<div class=\"example\">\n\
<p>Examples:</p>\n\
<pre>foo:nth-child(0n+1)   /* represents an element foo, first child of its parent element */\n\
foo:nth-child(1)      /* same */</pre>\n\
</div>\n\
\n\
<p>When <var>a</var>=1, the number may be omitted from the rule.\n\
\n\
<div class=\"example\">\n\
<p>Examples:</p>\n\
<p>The following selectors are therefore equivalent:</p>\n\
<pre>bar:nth-child(1n+0)   /* represents all bar elements, specificity (0,1,1) */\n\
bar:nth-child(n+0)    /* same */\n\
bar:nth-child(n)      /* same */\n\
bar                   /* same but lower specificity (0,0,1) */</pre>\n\
</div>\n\
\n\
<p>If <var>b</var>=0, then every <var>a</var>th element is picked. In\n\
such a case, the <var>b</var> part may be omitted.\n\
\n\
<div class=\"example\">\n\
<p>Examples:</p>\n\
<pre>tr:nth-child(2n+0) /* represents every even row of an HTML table */\n\
tr:nth-child(2n) /* same */</pre>\n\
</div>\n\
\n\
<p>If both <var>a</var> and <var>b</var> are equal to zero, the\n\
pseudo-class represents no element in the document tree.</p>\n\
\n\
<p>The value <var>a</var> can be negative, but only the positive\n\
values of <var>a</var><code>n</code>+<var>b</var>, for\n\
<code>n</code>&ge;0, may represent an element in the document\n\
tree.</p>\n\
\n\
<div class=\"example\">\n\
<p>Example:</p>\n\
<pre>html|tr:nth-child(-n+6)  /* represents the 6 first rows of XHTML tables */</pre>\n\
</div>\n\
\n\
<p>When the value <var>b</var> is negative, the \"+\" character in the\n\
expression must be removed (it is effectively replaced by the \"-\"\n\
character indicating the negative value of <var>b</var>).</p>\n\
\n\
<div class=\"example\">\n\
<p>Examples:</p>\n\
<pre>:nth-child(10n-1)  /* represents the 9th, 19th, 29th, etc, element */\n\
:nth-child(10n+9)  /* Same */\n\
:nth-child(10n+-1) /* Syntactically invalid, and would be ignored */</pre>\n\
</div>\n\
\n\
\n\
<h5><a name=nth-last-child-pseudo>:nth-last-child() pseudo-class</a></h5>\n\
\n\
<p>The <code>:nth-last-child(<var>a</var>n+<var>b</var>)</code>\n\
pseudo-class notation represents an element that has\n\
<var>a</var><code>n</code>+<var>b</var>-1 siblings\n\
<strong>after</strong> it in the document tree, for a given positive\n\
integer or zero value of <code>n</code>, and has a parent element. See\n\
<code>:nth-child()</code> pseudo-class for the syntax of its argument.\n\
It also accepts the '<code>even</code>' and '<code>odd</code>' values\n\
as arguments.\n\
\n\
\n\
<div class=\"example\">\n\
<p>Examples:</p>\n\
<pre>tr:nth-last-child(-n+2)    /* represents the two last rows of an HTML table */\n\
\n\
foo:nth-last-child(odd)    /* represents all odd foo elements in their parent element,\n\
                              counting from the last one */</pre>\n\
</div>\n\
\n\
\n\
<h5><a name=nth-of-type-pseudo>:nth-of-type() pseudo-class</a></h5>\n\
\n\
<p>The <code>:nth-of-type(<var>a</var>n+<var>b</var>)</code>\n\
pseudo-class notation represents an element that has\n\
<var>a</var><code>n</code>+<var>b</var>-1 siblings with the same\n\
element name <strong>before</strong> it in the document tree, for a\n\
given zero or positive integer value of <code>n</code>, and has a\n\
parent element. In other words, this matches the <var>b</var>th child\n\
of that type after all the children of that type have been split into\n\
groups of a elements each. See <code>:nth-child()</code> pseudo-class\n\
for the syntax of its argument. It also accepts the\n\
'<code>even</code>' and '<code>odd</code>' values.\n\
\n\
\n\
<div class=\"example\">\n\
<p>CSS example:</p>\n\
<p>This allows an author to alternate the position of floated images:</p>\n\
<pre>img:nth-of-type(2n+1) { float: right; }\n\
img:nth-of-type(2n) { float: left; }</pre>\n\
</div>\n\
\n\
\n\
<h5><a name=nth-last-of-type-pseudo>:nth-last-of-type() pseudo-class</a></h5>\n\
\n\
<p>The <code>:nth-last-of-type(<var>a</var>n+<var>b</var>)</code>\n\
pseudo-class notation represents an element that has\n\
<var>a</var><code>n</code>+<var>b</var>-1 siblings with the same\n\
element name <strong>after</strong> it in the document tree, for a\n\
given zero or positive integer value of <code>n</code>, and has a\n\
parent element. See <code>:nth-child()</code> pseudo-class for the\n\
syntax of its argument. It also accepts the '<code>even</code>' and '<code>odd</code>' values.\n\
\n\
\n\
<div class=\"example\">\n\
 <p>Example:</p>\n\
 <p>To represent all <code>h2</code> children of an XHTML\n\
 <code>body</code> except the first and last, one could use the\n\
 following selector:</p>\n\
 <pre>body &gt; h2:nth-of-type(n+2):nth-last-of-type(n+2)</pre>\n\
 <p>In this case, one could also use <code>:not()</code>, although the\n\
 selector ends up being just as long:</p>\n\
 <pre>body &gt; h2:not(:first-of-type):not(:last-of-type)</pre>\n\
</div>\n\
\n\
\n\
<h5><a name=first-child-pseudo>:first-child pseudo-class</a></h5>\n\
\n\
<p>Same as <code>:nth-child(1)</code>. The <code>:first-child</code> pseudo-class\n\
represents an element that is the first child of some other element.\n\
\n\
\n\
<div class=\"example\">\n\
  <p>Examples:</p>\n\
  <p>The following selector represents a <code>p</code> element that is\n\
  the first child of a <code>div</code> element:</p>\n\
  <pre>div &gt; p:first-child</pre>\n\
  <p>This selector can represent the <code>p</code> inside the\n\
  <code>div</code> of the following fragment:</p>\n\
  <pre>&lt;p&gt; The last P before the note.&lt;/p&gt;\n\
&lt;div class=\"note\"&gt;\n\
   &lt;p&gt; The first P inside the note.&lt;/p&gt;\n\
&lt;/div&gt;</pre>but cannot represent the second <code>p</code> in the following\n\
fragment: \n\
  <pre>&lt;p&gt; The last P before the note.&lt;/p&gt;\n\
&lt;div class=\"note\"&gt;\n\
   &lt;h2&gt; Note &lt;/h2&gt;\n\
   &lt;p&gt; The first P inside the note.&lt;/p&gt;\n\
&lt;/div&gt;</pre>\n\
  <p>The following two selectors are usually equivalent:</p>\n\
  <pre>* &gt; a:first-child /* a is first child of any element */\n\
a:first-child /* Same (assuming a is not the root element) */</pre>\n\
</div>\n\
\n\
<h5><a name=last-child-pseudo>:last-child pseudo-class</a></h5>\n\
\n\
<p>Same as <code>:nth-last-child(1)</code>. The <code>:last-child</code> pseudo-class\n\
represents an element that is the last child of some other element. \n\
\n\
<div class=\"example\">\n\
 <p>Example:</p>\n\
 <p>The following selector represents a list item <code>li</code> that\n\
 is the last child of an ordered list <code>ol</code>.\n\
 <pre>ol &gt; li:last-child</pre>\n\
</div>\n\
\n\
<h5><a name=first-of-type-pseudo>:first-of-type pseudo-class</a></h5>\n\
\n\
<p>Same as <code>:nth-of-type(1)</code>. The <code>:first-of-type</code> pseudo-class\n\
represents an element that is the first sibling of its type in the list of\n\
children of its parent element. \n\
\n\
<div class=\"example\">\n\
<p>Example:</p>\n\
<p>The following selector represents a definition title\n\
<code>dt</code> inside a definition list <code>dl</code>, this\n\
<code>dt</code> being the first of its type in the list of children of\n\
its parent element.</p>\n\
<pre>dl dt:first-of-type</pre>\n\
<p>It is a valid description for the first two <code>dt</code>\n\
elements in the following example but not for the third one:</p>\n\
<pre>&lt;dl&gt;\n\
 &lt;dt&gt;gigogne&lt;/dt&gt;\n\
 &lt;dd&gt;\n\
  &lt;dl&gt;\n\
   &lt;dt&gt;fus&eacute;e&lt;/dt&gt;\n\
   &lt;dd&gt;multistage rocket&lt;/dd&gt;\n\
   &lt;dt&gt;table&lt;/dt&gt;\n\
   &lt;dd&gt;nest of tables&lt;/dd&gt;\n\
  &lt;/dl&gt;\n\
 &lt;/dd&gt;\n\
&lt;/dl&gt;</pre>\n\
</div>\n\
\n\
<h5><a name=last-of-type-pseudo>:last-of-type pseudo-class</a></h5>\n\
\n\
<p>Same as <code>:nth-last-of-type(1)</code>. The\n\
<code>:last-of-type</code> pseudo-class represents an element that is\n\
the last sibling of its type in the list of children of its parent\n\
element.</p>\n\
\n\
<div class=\"example\">\n\
 <p>Example:</p>\n\
 <p>The following selector represents the last data cell\n\
 <code>td</code> of a table row.</p>\n\
 <pre>tr &gt; td:last-of-type</pre>\n\
</div>\n\
\n\
<h5><a name=only-child-pseudo>:only-child pseudo-class</a></h5>\n\
\n\
<p>Represents an element that has a parent element and whose parent\n\
element has no other element children. Same as\n\
<code>:first-child:last-child</code> or\n\
<code>:nth-child(1):nth-last-child(1)</code>, but with a lower\n\
specificity.</p>\n\
\n\
<h5><a name=only-of-type-pseudo>:only-of-type pseudo-class</a></h5>\n\
\n\
<p>Represents an element that has a parent element and whose parent\n\
element has no other element children with the same element name. Same\n\
as <code>:first-of-type:last-of-type</code> or\n\
<code>:nth-of-type(1):nth-last-of-type(1)</code>, but with a lower\n\
specificity.</p>\n\
\n\
\n\
<h5><a name=empty-pseudo></a>:empty pseudo-class</h5>\n\
\n\
<p>The <code>:empty</code> pseudo-class represents an element that has\n\
no children at all. In terms of the DOM, only element nodes and text\n\
nodes (including CDATA nodes and entity references) whose data has a\n\
non-zero length must be considered as affecting emptiness; comments,\n\
PIs, and other nodes must not affect whether an element is considered\n\
empty or not.</p>\n\
\n\
<div class=\"example\">\n\
 <p>Examples:</p>\n\
 <p><code>p:empty</code> is a valid representation of the following fragment:</p>\n\
 <pre>&lt;p&gt;&lt;/p&gt;</pre>\n\
 <p><code>foo:empty</code> is not a valid representation for the\n\
 following fragments:</p>\n\
 <pre>&lt;foo&gt;bar&lt;/foo&gt;</pre>\n\
 <pre>&lt;foo&gt;&lt;bar&gt;bla&lt;/bar&gt;&lt;/foo&gt;</pre>\n\
 <pre>&lt;foo&gt;this is not &lt;bar&gt;:empty&lt;/bar&gt;&lt;/foo&gt;</pre>\n\
</div>\n\
\n\
<h4><a name=content-selectors>6.6.6. Blank</a></h4> <!-- It's the Return of Appendix H!!! Run away! -->\n\
\n\
<p>This section intentionally left blank.</p>\n\
<!-- (used to be :contains()) -->\n\
\n\
<h4><a name=negation></a>6.6.7. The negation pseudo-class</h4>\n\
\n\
<p>The negation pseudo-class, <code>:not(<var>X</var>)</code>, is a\n\
functional notation taking a <a href=\"#simple-selectors-dfn\">simple\n\
selector</a> (excluding the negation pseudo-class itself and\n\
pseudo-elements) as an argument. It represents an element that is not\n\
represented by the argument.\n\
\n\
<!-- pseudo-elements are not simple selectors, so the above paragraph\n\
may be a bit confusing -->\n\
\n\
<div class=\"example\">\n\
  <p>Examples:</p>\n\
  <p>The following CSS selector matches all <code>button</code>\n\
  elements in an HTML document that are not disabled.</p>\n\
  <pre>button:not([DISABLED])</pre>\n\
  <p>The following selector represents all but <code>FOO</code>\n\
  elements.</p>\n\
  <pre>*:not(FOO)</pre>\n\
  <p>The following group of selectors represents all HTML elements\n\
  except links.</p>\n\
  <pre>html|*:not(:link):not(:visited)</pre>\n\
</div>\n\
\n\
<p>Default namespace declarations do not affect the argument of the\n\
negation pseudo-class unless the argument is a universal selector or a\n\
type selector.</p>\n\
\n\
<div class=\"example\">\n\
  <p>Examples:</p>\n\
  <p>Assuming that the default namespace is bound to\n\
  \"http://example.com/\", the following selector represents all\n\
  elements that are not in that namespace:</p>\n\
  <pre>*|*:not(*)</pre>\n\
  <p>The following CSS selector matches any element being hovered,\n\
  regardless of its namespace. In particular, it is not limited to\n\
  only matching elements in the default namespace that are not being\n\
  hovered, and elements not in the default namespace don't match the\n\
  rule when they <em>are</em> being hovered.</p>\n\
  <pre>*|*:not(:hover)</pre>\n\
</div>\n\
\n\
<p class=\"note\"><strong>Note</strong>: the :not() pseudo allows\n\
useless selectors to be written.  For instance <code>:not(*|*)</code>,\n\
which represents no element at all, or <code>foo:not(bar)</code>,\n\
which is equivalent to <code>foo</code> but with a higher\n\
specificity.</p>\n\
\n\
<h3><a name=pseudo-elements>7. Pseudo-elements</a></h3>\n\
\n\
<p>Pseudo-elements create abstractions about the document tree beyond\n\
those specified by the document language. For instance, document\n\
languages do not offer mechanisms to access the first letter or first\n\
line of an element's content. Pseudo-elements allow designers to refer\n\
to this otherwise inaccessible information. Pseudo-elements may also\n\
provide designers a way to refer to content that does not exist in the\n\
source document (e.g., the <code>::before</code> and\n\
<code>::after</code> pseudo-elements give access to generated\n\
content).</p>\n\
\n\
<p>A pseudo-element is made of two colons (<code>::</code>) followed\n\
by the name of the pseudo-element.</p>\n\
\n\
<p>This <code>::</code> notation is introduced by the current document\n\
in order to establish a discrimination between pseudo-classes and\n\
pseudo-elements.  For compatibility with existing style sheets, user\n\
agents must also accept the previous one-colon notation for\n\
pseudo-elements introduced in CSS levels 1 and 2 (namely,\n\
<code>:first-line</code>, <code>:first-letter</code>,\n\
<code>:before</code> and <code>:after</code>). This compatibility is\n\
not allowed for the new pseudo-elements introduced in CSS level 3.</p>\n\
\n\
<p>Only one pseudo-element may appear per selector, and if present it\n\
must appear after the sequence of simple selectors that represents the\n\
<a href=\"#subject\">subjects</a> of the selector. <span class=\"note\">A\n\
future version of this specification may allow multiple\n\
pesudo-elements per selector.</span></p>\n\
\n\
<h4><a name=first-line>7.1. The ::first-line pseudo-element</a></h4>\n\
\n\
<p>The <code>::first-line</code> pseudo-element describes the contents\n\
of the first formatted line of an element.\n\
\n\
<div class=\"example\">\n\
<p>CSS example:</p>\n\
<pre>p::first-line { text-transform: uppercase }</pre>\n\
<p>The above rule means \"change the letters of the first line of every\n\
paragraph to uppercase\".</p>\n\
</div>\n\
\n\
<p>The selector <code>p::first-line</code> does not match any real\n\
HTML element. It does match a pseudo-element that conforming user\n\
agents will insert at the beginning of every paragraph.</p>\n\
\n\
<p>Note that the length of the first line depends on a number of\n\
factors, including the width of the page, the font size, etc.  Thus,\n\
an ordinary HTML paragraph such as:</p>\n\
\n\
<pre>\n\
&lt;P&gt;This is a somewhat long HTML \n\
paragraph that will be broken into several \n\
lines. The first line will be identified\n\
by a fictional tag sequence. The other lines \n\
will be treated as ordinary lines in the \n\
paragraph.&lt;/P&gt;\n\
</pre>\n\
\n\
<p>the lines of which happen to be broken as follows:\n\
\n\
<pre>\n\
THIS IS A SOMEWHAT LONG HTML PARAGRAPH THAT\n\
will be broken into several lines. The first\n\
line will be identified by a fictional tag \n\
sequence. The other lines will be treated as \n\
ordinary lines in the paragraph.\n\
</pre>\n\
\n\
<p>This paragraph might be \"rewritten\" by user agents to include the\n\
<em>fictional tag sequence</em> for <code>::first-line</code>. This\n\
fictional tag sequence helps to show how properties are inherited.</p>\n\
\n\
<pre>\n\
&lt;P&gt;<b>&lt;P::first-line&gt;</b> This is a somewhat long HTML \n\
paragraph that <b>&lt;/P::first-line&gt;</b> will be broken into several\n\
lines. The first line will be identified \n\
by a fictional tag sequence. The other lines \n\
will be treated as ordinary lines in the \n\
paragraph.&lt;/P&gt;\n\
</pre>\n\
\n\
<p>If a pseudo-element breaks up a real element, the desired effect\n\
can often be described by a fictional tag sequence that closes and\n\
then re-opens the element. Thus, if we mark up the previous paragraph\n\
with a <code>span</code> element:</p>\n\
\n\
<pre>\n\
&lt;P&gt;<b>&lt;SPAN class=\"test\"&gt;</b> This is a somewhat long HTML\n\
paragraph that will be broken into several\n\
lines.<b>&lt;/SPAN&gt;</b> The first line will be identified\n\
by a fictional tag sequence. The other lines \n\
will be treated as ordinary lines in the \n\
paragraph.&lt;/P&gt;\n\
</pre>\n\
\n\
<p>the user agent could simulate start and end tags for\n\
<code>span</code> when inserting the fictional tag sequence for\n\
<code>::first-line</code>.\n\
\n\
<pre>\n\
&lt;P&gt;&lt;P::first-line&gt;<b>&lt;SPAN class=\"test\"&gt;</b> This is a\n\
somewhat long HTML\n\
paragraph that will <b>&lt;/SPAN&gt;</b>&lt;/P::first-line&gt;<b>&lt;SPAN class=\"test\"&gt;</b> be\n\
broken into several\n\
lines.<b>&lt;/SPAN&gt;</b> The first line will be identified\n\
by a fictional tag sequence. The other lines\n\
will be treated as ordinary lines in the \n\
paragraph.&lt;/P&gt;\n\
</pre>\n\
\n\
<p>In CSS, the <code>::first-line</code> pseudo-element can only be\n\
attached to a block-level element, an inline-block, a table-caption,\n\
or a table-cell.</p>\n\
\n\
<p><a name=\"first-formatted-line\"></a>The \"first formatted line\" of an\n\
element may occur inside a\n\
block-level descendant in the same flow (i.e., a block-level\n\
descendant that is not positioned and not a float). E.g., the first\n\
line of the <code>div</code> in <code>&lt;DIV>&lt;P>This\n\
line...&lt;/P>&lt/DIV></code> is the first line of the <code>p</code> (assuming\n\
that both <code>p</code> and <code>div</code> are block-level).\n\
\n\
<p>The first line of a table-cell or inline-block cannot be the first\n\
formatted line of an ancestor element. Thus, in <code>&lt;DIV&gt;&lt;P\n\
STYLE=\"display: inline-block\">Hello&lt;BR&gt;Goodbye&lt;/P&gt;\n\
etcetera&lt;/DIV&gt;</code> the first formatted line of the\n\
<code>div</code> is not the line \"Hello\".\n\
\n\
<p class=\"note\">Note that the first line of the <code>p</code> in this\n\
fragment: <code>&lt;p&gt&lt;br&gt;First...</code> doesn't contain any\n\
letters (assuming the default style for <code>br</code> in HTML\n\
4). The word \"First\" is not on the first formatted line.\n\
\n\
<p>A UA should act as if the fictional start tags of the\n\
<code>::first-line</code> pseudo-elements were nested just inside the\n\
innermost enclosing block-level element. (Since CSS1 and CSS2 were\n\
silent on this case, authors should not rely on this behavior.) Here\n\
is an example. The fictional tag sequence for</p>\n\
\n\
<pre>\n\
&lt;DIV>\n\
  &lt;P>First paragraph&lt;/P>\n\
  &lt;P>Second paragraph&lt;/P>\n\
&lt;/DIV>\n\
</pre>\n\
\n\
<p>is</p>\n\
\n\
<pre>\n\
&lt;DIV>\n\
  &lt;P>&lt;DIV::first-line>&lt;P::first-line>First paragraph&lt;/P::first-line>&lt;/DIV::first-line>&lt;/P>\n\
  &lt;P>&lt;P::first-line>Second paragraph&lt;/P::first-line>&lt;/P>\n\
&lt;/DIV>\n\
</pre>\n\
\n\
<p>The <code>::first-line</code> pseudo-element is similar to an\n\
inline-level element, but with certain restrictions. In CSS, the\n\
following properties apply to a <code>::first-line</code>\n\
pseudo-element: font properties, color property, background\n\
properties, 'word-spacing', 'letter-spacing', 'text-decoration',\n\
'vertical-align', 'text-transform', 'line-height'. UAs may apply other\n\
properties as well.</p>\n\
\n\
\n\
<h4><a name=first-letter>7.2. The ::first-letter pseudo-element</a></h4>\n\
\n\
<p>The <code>::first-letter</code> pseudo-element represents the first\n\
letter of the first line of a block, if it is not preceded by any\n\
other content (such as images or inline tables) on its line. The\n\
::first-letter pseudo-element may be used for \"initial caps\" and \"drop\n\
caps\", which are common typographical effects. This type of initial\n\
letter is similar to an inline-level element if its 'float' property\n\
is 'none'; otherwise, it is similar to a floated element.</p>\n\
\n\
<p>In CSS, these are the properties that apply to <code>::first-letter</code>\n\
pseudo-elements: font properties, 'text-decoration', 'text-transform',\n\
'letter-spacing', 'word-spacing' (when appropriate), 'line-height',\n\
'float', 'vertical-align' (only if 'float' is 'none'), margin\n\
properties, padding properties, border properties, color property,\n\
background properties.  UAs may apply other properties as well.  To\n\
allow UAs to render a typographically correct drop cap or initial cap,\n\
the UA may choose a line-height, width and height based on the shape\n\
of the letter, unlike for normal elements.</p>\n\
\n\
<div class=\"example\">\n\
<p>Example:</p>\n\
<p>This example shows a possible rendering of an initial cap. Note\n\
that the 'line-height' that is inherited by the <code>::first-letter</code>\n\
pseudo-element is 1.1, but the UA in this example has computed the\n\
height of the first letter differently, so that it doesn't cause any\n\
unnecessary space between the first two lines. Also note that the\n\
fictional start tag of the first letter is inside the <span>span</span>, and thus\n\
the font weight of the first letter is normal, not bold as the <span>span</span>:\n\
<pre>\n\
p { line-height: 1.1 }\n\
p::first-letter { font-size: 3em; font-weight: normal }\n\
span { font-weight: bold }\n\
...\n\
&lt;p>&lt;span>Het hemelsche&lt;/span> gerecht heeft zich ten lange lesten&lt;br>\n\
Erbarremt over my en mijn benaeuwde vesten&lt;br>\n\
En arme burgery, en op mijn volcx gebed&lt;br>\n\
En dagelix geschrey de bange stad ontzet.\n\
</pre>\n\
<div class=\"figure\">\n\
<p><img src=\"initial-cap.png\" alt=\"Image illustrating the ::first-letter pseudo-element\">\n\
</div>\n\
</div>\n\
\n\
<div class=\"example\">\n\
<p>The following CSS will make a drop cap initial letter span about two lines:</p>\n\
\n\
<pre>\n\
&lt;!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\"&gt;\n\
&lt;HTML&gt;\n\
 &lt;HEAD&gt;\n\
  &lt;TITLE&gt;Drop cap initial letter&lt;/TITLE&gt;\n\
  &lt;STYLE type=\"text/css\"&gt;\n\
   P               { font-size: 12pt; line-height: 1.2 }\n\
   P::first-letter { font-size: 200%; font-weight: bold; float: left }\n\
   SPAN            { text-transform: uppercase }\n\
  &lt;/STYLE&gt;\n\
 &lt;/HEAD&gt;\n\
 &lt;BODY&gt;\n\
  &lt;P&gt;&lt;SPAN&gt;The first&lt;/SPAN&gt; few words of an article\n\
    in The Economist.&lt;/P&gt;\n\
 &lt;/BODY&gt;\n\
&lt;/HTML&gt;\n\
</pre>\n\
\n\
<p>This example might be formatted as follows:</p>\n\
\n\
<div class=\"figure\">\n\
<P><img src=\"first-letter.gif\" alt=\"Image illustrating the combined effect of the ::first-letter and ::first-line pseudo-elements\"></p>\n\
</div>\n\
\n\
<p>The <span class=\"index-inst\" title=\"fictional tag\n\
sequence\">fictional tag sequence</span> is:</p>\n\
\n\
<pre>\n\
&lt;P&gt;\n\
&lt;SPAN&gt;\n\
&lt;P::first-letter&gt;\n\
T\n\
&lt;/P::first-letter&gt;he first\n\
&lt;/SPAN&gt; \n\
few words of an article in the Economist.\n\
&lt;/P&gt;\n\
</pre>\n\
\n\
<p>Note that the <code>::first-letter</code> pseudo-element tags abut\n\
the content (i.e., the initial character), while the ::first-line\n\
pseudo-element start tag is inserted right after the start tag of the\n\
block element.</p> </div>\n\
\n\
<p>In order to achieve traditional drop caps formatting, user agents\n\
may approximate font sizes, for example to align baselines. Also, the\n\
glyph outline may be taken into account when formatting.</p>\n\
\n\
<p>Punctuation (i.e, characters defined in Unicode in the \"open\" (Ps),\n\
\"close\" (Pe), \"initial\" (Pi). \"final\" (Pf) and \"other\" (Po)\n\
punctuation classes), that precedes or follows the first letter should\n\
be included. <a href=\"#refsUNICODE\">[UNICODE]</a></p>\n\
\n\
<div class=\"figure\">\n\
<P><img src=\"first-letter2.gif\" alt=\"Quotes that precede the\n\
first letter should be included.\"></p>\n\
</div>\n\
\n\
<p>The <code>::first-letter</code> also applies if the first letter is\n\
in fact a digit, e.g., the \"6\" in \"67 million dollars is a lot of\n\
money.\"</p>\n\
\n\
<p>In CSS, the <code>::first-letter</code> pseudo-element applies to\n\
block, list-item, table-cell, table-caption, and inline-block\n\
elements. <span class=\"note\">A future version of this specification\n\
may allow this pesudo-element to apply to more element\n\
types.</span></p>\n\
\n\
<p>The <code>::first-letter</code> pseudo-element can be used with all\n\
such elements that contain text, or that have a descendant in the same\n\
flow that contains text. A UA should act as if the fictional start tag\n\
of the ::first-letter pseudo-element is just before the first text of\n\
the element, even if that first text is in a descendant.</p>\n\
\n\
<div class=\"example\">\n\
<p>Example:</p>\n\
<p>The fictional tag sequence for this HTMLfragment:\n\
<pre>&lt;div>\n\
&lt;p>The first text.</pre>\n\
<p>is:\n\
<pre>&lt;div>\n\
&lt;p>&lt;div::first-letter>&lt;p::first-letter>T&lt;/...>&lt;/...>he first text.</pre>\n\
</div>\n\
\n\
<p>The first letter of a table-cell or inline-block cannot be the\n\
first letter of an ancestor element. Thus, in <code>&lt;DIV&gt;&lt;P\n\
STYLE=\"display: inline-block\">Hello&lt;BR&gt;Goodbye&lt;/P&gt;\n\
etcetera&lt;/DIV&gt;</code> the first letter of the <code>div</code> is not the\n\
letter \"H\". In fact, the <code>div</code> doesn't have a first letter.\n\
\n\
<p>The first letter must occur on the <a\n\
href=\"#first-formatted-line\">first formatted line.</a> For example, in\n\
this fragment: <code>&lt;p&gt&lt;br&gt;First...</code> the first line\n\
doesn't contain any letters and <code>::first-letter</code> doesn't\n\
match anything (assuming the default style for <code>br</code> in HTML\n\
4). In particular, it does not match the \"F\" of \"First.\"\n\
\n\
<p>In CSS, if an element is a list item ('display: list-item'), the\n\
<code>::first-letter</code> applies to the first letter in the\n\
principal box after the marker. UAs may ignore\n\
<code>::first-letter</code> on list items with 'list-style-position:\n\
inside'. If an element has <code>::before</code> or\n\
<code>::after</code> content, the <code>::first-letter</code> applies\n\
to the first letter of the element <em>including</em> that content.\n\
\n\
<div class=\"example\">\n\
<p>Example:</p>\n\
<p>After the rule 'p::before {content: \"Note: \"}', the selector\n\
'p::first-letter' matches the \"N\" of \"Note\".</p>\n\
</div>\n\
\n\
<p>Some languages may have specific rules about how to treat certain\n\
letter combinations. In Dutch, for example, if the letter combination\n\
\"ij\" appears at the beginning of a word, both letters should be\n\
considered within the <code>::first-letter</code> pseudo-element.\n\
\n\
<p>If the letters that would form the ::first-letter are not in the\n\
same element, such as \"'T\" in <code>&lt;p>'&lt;em>T...</code>, the UA\n\
may create a ::first-letter pseudo-element from one of the elements,\n\
both elements, or simply not create a pseudo-element.</p>\n\
\n\
<p>Similarly, if the first letter(s) of the block are not at the start\n\
of the line (for example due to bidirectional reordering), then the UA\n\
need not create the pseudo-element(s).\n\
\n\
<div class=\"example\">\n\
<p>Example:</p>\n\
<p><a name=\"overlapping-example\">The following example</a> illustrates\n\
how overlapping pseudo-elements may interact.  The first letter of\n\
each P element will be green with a font size of '24pt'. The rest of\n\
the first formatted line will be 'blue' while the rest of the\n\
paragraph will be 'red'.</p>\n\
\n\
<pre>p { color: red; font-size: 12pt }\n\
p::first-letter { color: green; font-size: 200% }\n\
p::first-line { color: blue }\n\
\n\
&lt;P&gt;Some text that ends up on two lines&lt;/P&gt;</pre>\n\
\n\
<p>Assuming that a line break will occur before the word \"ends\", the\n\
<span class=\"index-inst\" title=\"fictional tag sequence\">fictional tag\n\
sequence</span> for this fragment might be:</p>\n\
\n\
<pre>&lt;P&gt;\n\
&lt;P::first-line&gt;\n\
&lt;P::first-letter&gt; \n\
S \n\
&lt;/P::first-letter&gt;ome text that \n\
&lt;/P::first-line&gt; \n\
ends up on two lines \n\
&lt;/P&gt;</pre>\n\
\n\
<p>Note that the <code>::first-letter</code> element is inside the <code>::first-line</code>\n\
element.  Properties set on <code>::first-line</code> are inherited by\n\
<code>::first-letter</code>, but are overridden if the same property is set on\n\
<code>::first-letter</code>.</p>\n\
</div>\n\
\n\
\n\
<h4><a name=UIfragments>7.3.</a> <a name=selection>The ::selection pseudo-element</a></h4>\n\
\n\
<p>The <code>::selection</code> pseudo-element applies to the portion\n\
of a document that has been highlighted by the user. This also\n\
applies, for example, to selected text within an editable text\n\
field. This pseudo-element should not be confused with the <code><a\n\
href=\"#checked\">:checked</a></code> pseudo-class (which used to be\n\
named <code>:selected</code>)\n\
\n\
<p>Although the <code>::selection</code> pseudo-element is dynamic in\n\
nature, and is altered by user action, it is reasonable to expect that\n\
when a UA re-renders to a static medium (such as a printed page, see\n\
<a href=\"#refsCSS21\">[CSS21]</a>) which was originally rendered to a\n\
dynamic medium (like screen), the UA may wish to transfer the current\n\
<code>::selection</code> state to that other medium, and have all the\n\
appropriate formatting and rendering take effect as well. This is not\n\
required &mdash; UAs may omit the <code>::selection</code>\n\
pseudo-element for static media.\n\
\n\
<p>These are the CSS properties that apply to <code>::selection</code>\n\
pseudo-elements: color, background, cursor (optional), outline\n\
(optional). The computed value of the 'background-image' property on\n\
<code>::selection</code> may be ignored.\n\
\n\
\n\
<h4><a name=gen-content>7.4. The ::before and ::after pseudo-elements</a></h4>\n\
\n\
<p>The <code>::before</code> and <code>::after</code> pseudo-elements\n\
can be used to describe generated content before or after an element's\n\
content. They are explained in CSS 2.1 <a\n\
href=\"#refsCSS21\">[CSS21]</a>.</p>\n\
\n\
<p>When the <code>::first-letter</code> and <code>::first-line</code>\n\
pseudo-elements are combined with <code>::before</code> and\n\
<code>::after</code>, they apply to the first letter or line of the\n\
element including the inserted text.</p>\n\
\n\
<h2><a name=combinators>8. Combinators</a></h2>\n\
\n\
<h3><a name=descendant-combinators>8.1. Descendant combinator</a></h3>\n\
\n\
<p>At times, authors may want selectors to describe an element that is\n\
the descendant of another element in the document tree (e.g., \"an\n\
<code>EM</code> element that is contained within an <code>H1</code>\n\
element\"). Descendant combinators express such a relationship. A\n\
descendant combinator is <a href=\"#whitespace\">white space</a> that\n\
separates two sequences of simple selectors.  A selector of the form\n\
\"<code>A B</code>\" represents an element <code>B</code> that is an\n\
arbitrary descendant of some ancestor element <code>A</code>.\n\
\n\
<div class=\"example\">\n\
 <p>Examples:</p>\n\
 <p>For example, consider the following selector:</p>\n\
 <pre>h1 em</pre>\n\
 <p>It represents an <code>em</code> element being the descendant of\n\
 an <code>h1</code> element. It is a correct and valid, but partial,\n\
 description of the following fragment:</p>\n\
 <pre>&lt;h1&gt;This &lt;span class=\"myclass\"&gt;headline\n\
is &lt;em&gt;very&lt;/em&gt; important&lt;/span&gt;&lt;/h1&gt;</pre>\n\
 <p>The following selector:</p>\n\
 <pre>div * p</pre>\n\
 <p>represents a <code>p</code> element that is a grandchild or later\n\
 descendant of a <code>div</code> element. Note the whitespace on\n\
 either side of the \"*\" is not part of the universal selector; the\n\
 whitespace is a combinator indicating that the DIV must be the\n\
 ancestor of some element, and that that element must be an ancestor\n\
 of the P.</p>\n\
 <p>The following selector, which combines descendant combinators and\n\
 <a href=\"#attribute-selectors\">attribute selectors</a>, represents an\n\
 element that (1) has the <code>href</code> attribute set and (2) is\n\
 inside a <code>p</code> that is itself inside a <code>div</code>:</p>\n\
 <pre>div p *[href]</pre>\n\
</div>\n\
\n\
<h3><a name=child-combinators>8.2. Child combinators</a></h3>\n\
\n\
<p>A <dfn>child combinator</dfn> describes a childhood relationship\n\
between two elements. A child combinator is made of the\n\
&quot;greater-than sign&quot; (<code>&gt;</code>) character and\n\
separates two sequences of simple selectors.\n\
\n\
\n\
<div class=\"example\">\n\
 <p>Examples:</p>\n\
 <p>The following selector represents a <code>p</code> element that is\n\
 child of <code>body</code>:</p>\n\
 <pre>body &gt; p</pre>\n\
 <p>The following example combines descendant combinators and child\n\
 combinators.</p>\n\
 <pre>div ol&gt;li p</pre><!-- LEAVE THOSE SPACES OUT! see below -->\n\
 <p>It represents a <code>p</code> element that is a descendant of an\n\
 <code>li</code> element; the <code>li</code> element must be the\n\
 child of an <code>ol</code> element; the <code>ol</code> element must\n\
 be a descendant of a <code>div</code>. Notice that the optional white\n\
 space around the \"&gt;\" combinator has been left out.</p>\n\
</div>\n\
\n\
<p>For information on selecting the first child of an element, please\n\
see the section on the <code><a\n\
href=\"#structural-pseudos\">:first-child</a></code> pseudo-class\n\
above.</p>\n\
\n\
<h3><a name=sibling-combinators>8.3. Sibling combinators</a></h3>\n\
\n\
<p>There are two different sibling combinators: the adjacent sibling\n\
combinator and the general sibling combinator. In both cases,\n\
non-element nodes (e.g. text between elements) are ignored when\n\
considering adjacency of elements.</p>\n\
\n\
<h4><a name=adjacent-sibling-combinators>8.3.1. Adjacent sibling combinator</a></h4>\n\
\n\
<p>The adjacent sibling combinator is made of the &quot;plus\n\
sign&quot; (U+002B, <code>+</code>) character that separates two\n\
sequences of simple selectors. The elements represented by the two\n\
sequences share the same parent in the document tree and the element\n\
represented by the first sequence immediately precedes the element\n\
represented by the second one.</p>\n\
\n\
<div class=\"example\">\n\
 <p>Examples:</p>\n\
 <p>The following selector represents a <code>p</code> element\n\
 immediately following a <code>math</code> element:</p>\n\
 <pre>math + p</pre>\n\
 <p>The following selector is conceptually similar to the one in the\n\
 previous example, except that it adds an attribute selector &mdash; it\n\
 adds a constraint to the <code>h1</code> element, that it must have\n\
 <code>class=\"opener\"</code>:</p>\n\
 <pre>h1.opener + h2</pre>\n\
</div>\n\
\n\
\n\
<h4><a name=general-sibling-combinators>8.3.2. General sibling combinator</a></h4>\n\
\n\
<p>The general sibling combinator is made of the &quot;tilde&quot;\n\
(U+007E, <code>~</code>) character that separates two sequences of\n\
simple selectors. The elements represented by the two sequences share\n\
the same parent in the document tree and the element represented by\n\
the first sequence precedes (not necessarily immediately) the element\n\
represented by the second one.</p>\n\
\n\
<div class=\"example\">\n\
 <p>Example:</p>\n\
 <pre>h1 ~ pre</pre>\n\
 <p>represents a <code>pre</code> element following an <code>h1</code>. It\n\
 is a correct and valid, but partial, description of:</p>\n\
 <pre>&lt;h1&gt;Definition of the function a&lt;/h1&gt;\n\
&lt;p&gt;Function a(x) has to be applied to all figures in the table.&lt;/p&gt;\n\
&lt;pre&gt;function a(x) = 12x/13.5&lt;/pre&gt;</pre>\n\
</div>\n\
\n\
<h2><a name=specificity>9. Calculating a selector's specificity</a></h2>\n\
\n\
<p>A selector's specificity is calculated as follows:</p>\n\
\n\
<ul>\n\
  <li>count the number of ID selectors in the selector (= a)</li>\n\
  <li>count the number of class selectors, attributes selectors, and pseudo-classes in the selector (= b)</li>\n\
  <li>count the number of element names in the selector (= c)</li>\n\
  <li>ignore pseudo-elements</li>\n\
</ul>\n\
\n\
<p>Selectors inside <a href=\"#negation\">the negation pseudo-class</a>\n\
are counted like any other, but the negation itself does not count as\n\
a pseudo-class.</p>\n\
\n\
<p>Concatenating the three numbers a-b-c (in a number system with a\n\
large base) gives the specificity.</p>\n\
\n\
<div class=\"example\">\n\
<p>Examples:</p>\n\
<pre>*               /* a=0 b=0 c=0 -&gt; specificity =   0 */\n\
LI              /* a=0 b=0 c=1 -&gt; specificity =   1 */\n\
UL LI           /* a=0 b=0 c=2 -&gt; specificity =   2 */\n\
UL OL+LI        /* a=0 b=0 c=3 -&gt; specificity =   3 */\n\
H1 + *[REL=up]  /* a=0 b=1 c=1 -&gt; specificity =  11 */\n\
UL OL LI.red    /* a=0 b=1 c=3 -&gt; specificity =  13 */\n\
LI.red.level    /* a=0 b=2 c=1 -&gt; specificity =  21 */\n\
#x34y           /* a=1 b=0 c=0 -&gt; specificity = 100 */\n\
#s12:not(FOO)   /* a=1 b=0 c=1 -&gt; specificity = 101 */\n\
</pre>\n\
</div>\n\
\n\
<p class=\"note\"><strong>Note:</strong> the specificity of the styles\n\
specified in an HTML <code>style</code> attribute is described in CSS\n\
2.1. <a href=\"#refsCSS21\">[CSS21]</a>.</p>\n\
\n\
<h2><a name=w3cselgrammar>10. The grammar of Selectors</a></h2>\n\
\n\
<h3><a name=grammar>10.1. Grammar</a></h3>\n\
\n\
<p>The grammar below defines the syntax of Selectors.  It is globally\n\
LL(1) and can be locally LL(2) (but note that most UA's should not use\n\
it directly, since it doesn't express the parsing conventions). The\n\
format of the productions is optimized for human consumption and some\n\
shorthand notations beyond Yacc (see <a href=\"#refsYACC\">[YACC]</a>)\n\
are used:</p>\n\
\n\
<ul>\n\
  <li><b>*</b>: 0 or more\n\
  <li><b>+</b>: 1 or more\n\
  <li><b>?</b>: 0 or 1\n\
  <li><b>|</b>: separates alternatives\n\
  <li><b>[ ]</b>: grouping </li>\n\
</ul>\n\
\n\
<p>The productions are:</p>\n\
\n\
<pre>selectors_group\n\
  : selector [ COMMA S* selector ]*\n\
  ;\n\
\n\
selector\n\
  : simple_selector_sequence [ combinator simple_selector_sequence ]*\n\
  ;\n\
\n\
combinator\n\
  /* combinators can be surrounded by white space */\n\
  : PLUS S* | GREATER S* | TILDE S* | S+\n\
  ;\n\
\n\
simple_selector_sequence\n\
  : [ type_selector | universal ]\n\
    [ HASH | class | attrib | pseudo | negation ]*\n\
  | [ HASH | class | attrib | pseudo | negation ]+\n\
  ;\n\
\n\
type_selector\n\
  : [ namespace_prefix ]? element_name\n\
  ;\n\
\n\
namespace_prefix\n\
  : [ IDENT | '*' ]? '|'\n\
  ;\n\
\n\
element_name\n\
  : IDENT\n\
  ;\n\
\n\
universal\n\
  : [ namespace_prefix ]? '*'\n\
  ;\n\
\n\
class\n\
  : '.' IDENT\n\
  ;\n\
\n\
attrib\n\
  : '[' S* [ namespace_prefix ]? IDENT S*\n\
        [ [ PREFIXMATCH |\n\
            SUFFIXMATCH |\n\
            SUBSTRINGMATCH |\n\
            '=' |\n\
            INCLUDES |\n\
            DASHMATCH ] S* [ IDENT | STRING ] S*\n\
        ]? ']'\n\
  ;\n\
\n\
pseudo\n\
  /* '::' starts a pseudo-element, ':' a pseudo-class */\n\
  /* Exceptions: :first-line, :first-letter, :before and :after. */\n\
  /* Note that pseudo-elements are restricted to one per selector and */\n\
  /* occur only in the last simple_selector_sequence. */\n\
  : ':' ':'? [ IDENT | functional_pseudo ]\n\
  ;\n\
\n\
functional_pseudo\n\
  : FUNCTION S* expression ')'\n\
  ;\n\
\n\
expression\n\
  /* In CSS3, the expressions are identifiers, strings, */\n\
  /* or of the form \"an+b\" */\n\
  : [ [ PLUS | '-' | DIMENSION | NUMBER | STRING | IDENT ] S* ]+\n\
  ;\n\
\n\
negation\n\
  : NOT S* negation_arg S* ')'\n\
  ;\n\
\n\
negation_arg\n\
  : type_selector | universal | HASH | class | attrib | pseudo\n\
  ;</pre>\n\
\n\
\n\
<h3><a name=lex>10.2. Lexical scanner</a></h3>\n\
\n\
<p>The following is the <a name=x3>tokenizer</a>, written in Flex (see\n\
<a href=\"#refsFLEX\">[FLEX]</a>) notation. The tokenizer is\n\
case-insensitive.</p>\n\
\n\
<p>The two occurrences of \"\\377\" represent the highest character\n\
number that current versions of Flex can deal with (decimal 255). They\n\
should be read as \"\\4177777\" (decimal 1114111), which is the highest\n\
possible code point in Unicode/ISO-10646. <a\n\
href=\"#refsUNICODE\">[UNICODE]</a></p>\n\
\n\
<pre>%option case-insensitive\n\
\n\
ident     [-]?{nmstart}{nmchar}*\n\
name      {nmchar}+\n\
nmstart   [_a-z]|{nonascii}|{escape}\n\
nonascii  [^\\0-\\177]\n\
unicode   \\\\[0-9a-f]{1,6}(\\r\\n|[ \\n\\r\\t\\f])?\n\
escape    {unicode}|\\\\[^\\n\\r\\f0-9a-f]\n\
nmchar    [_a-z0-9-]|{nonascii}|{escape}\n\
num       [0-9]+|[0-9]*\\.[0-9]+\n\
string    {string1}|{string2}\n\
string1   \\\"([^\\n\\r\\f\\\\\"]|\\\\{nl}|{nonascii}|{escape})*\\\"\n\
string2   \\'([^\\n\\r\\f\\\\']|\\\\{nl}|{nonascii}|{escape})*\\'\n\
invalid   {invalid1}|{invalid2}\n\
invalid1  \\\"([^\\n\\r\\f\\\\\"]|\\\\{nl}|{nonascii}|{escape})*\n\
invalid2  \\'([^\\n\\r\\f\\\\']|\\\\{nl}|{nonascii}|{escape})*\n\
nl        \\n|\\r\\n|\\r|\\f\n\
w         [ \\t\\r\\n\\f]*\n\
\n\
%%\n\
\n\
[ \\t\\r\\n\\f]+     return S;\n\
\n\
\"~=\"             return INCLUDES;\n\
\"|=\"             return DASHMATCH;\n\
\"^=\"             return PREFIXMATCH;\n\
\"$=\"             return SUFFIXMATCH;\n\
\"*=\"             return SUBSTRINGMATCH;\n\
{ident}          return IDENT;\n\
{string}         return STRING;\n\
{ident}\"(\"       return FUNCTION;\n\
{num}            return NUMBER;\n\
\"#\"{name}        return HASH;\n\
{w}\"+\"           return PLUS;\n\
{w}\"&gt;\"           return GREATER;\n\
{w}\",\"           return COMMA;\n\
{w}\"~\"           return TILDE;\n\
\":not(\"          return NOT;\n\
@{ident}         return ATKEYWORD;\n\
{invalid}        return INVALID;\n\
{num}%           return PERCENTAGE;\n\
{num}{ident}     return DIMENSION;\n\
\"&lt;!--\"           return CDO;\n\
\"--&gt;\"            return CDC;\n\
\n\
\"url(\"{w}{string}{w}\")\"                           return URI;\n\
\"url(\"{w}([!#$%&*-~]|{nonascii}|{escape})*{w}\")\"  return URI;\n\
U\\+[0-9a-f?]{1,6}(-[0-9a-f]{1,6})?                return UNICODE_RANGE;\n\
\n\
\\/\\*[^*]*\\*+([^/*][^*]*\\*+)*\\/                    /* ignore comments */\n\
\n\
.                return *yytext;</pre>\n\
\n\
\n\
\n\
<h2><a name=downlevel>11. Namespaces and down-level clients</a></h2>\n\
\n\
<p>An important issue is the interaction of CSS selectors with XML\n\
documents in web clients that were produced prior to this\n\
document. Unfortunately, due to the fact that namespaces must be\n\
matched based on the URI which identifies the namespace, not the\n\
namespace prefix, some mechanism is required to identify namespaces in\n\
CSS by their URI as well. Without such a mechanism, it is impossible\n\
to construct a CSS style sheet which will properly match selectors in\n\
all cases against a random set of XML documents. However, given\n\
complete knowledge of the XML document to which a style sheet is to be\n\
applied, and a limited use of namespaces within the XML document, it\n\
is possible to construct a style sheet in which selectors would match\n\
elements and attributes correctly.</p>\n\
\n\
<p>It should be noted that a down-level CSS client will (if it\n\
properly conforms to CSS forward compatible parsing rules) ignore all\n\
<code>@namespace</code> at-rules, as well as all style rules that make\n\
use of namespace qualified element type or attribute selectors. The\n\
syntax of delimiting namespace prefixes in CSS was deliberately chosen\n\
so that down-level CSS clients would ignore the style rules rather\n\
than possibly match them incorrectly.</p>\n\
\n\
<p>The use of default namespaces in CSS makes it possible to write\n\
element type selectors that will function in both namespace aware CSS\n\
clients as well as down-level clients. It should be noted that\n\
down-level clients may incorrectly match selectors against XML\n\
elements in other namespaces.</p>\n\
\n\
<p>The following are scenarios and examples in which it is possible to\n\
construct style sheets which would function properly in web clients\n\
that do not implement this proposal.</p>\n\
\n\
<ol>\n\
  <li>\n\
\n\
   <p>The XML document does not use namespaces.</p>\n\
\n\
   <ul>\n\
\n\
    <li>In this case, it is obviously not necessary to declare or use\n\
    namespaces in the style sheet. Standard CSS element type and\n\
    attribute selectors will function adequately in a down-level\n\
    client.</li>\n\
\n\
    <li>In a CSS namespace aware client, the default behavior of\n\
    element selectors matching without regard to namespace will\n\
    function properly against all elements, since no namespaces are\n\
    present. However, the use of specific element type selectors that\n\
    match only elements that have no namespace (\"<code>|name</code>\")\n\
    will guarantee that selectors will match only XML elements that do\n\
    not have a declared namespace. </li>\n\
\n\
   </ul>\n\
\n\
  </li>\n\
\n\
  <li>\n\
\n\
   <p>The XML document defines a single, default namespace used\n\
   throughout the document. No namespace prefixes are used in element\n\
   names.</p>\n\
\n\
   <ul>\n\
\n\
    <li>In this case, a down-level client will function as if\n\
    namespaces were not used in the XML document at all. Standard CSS\n\
    element type and attribute selectors will match against all\n\
    elements. </li>\n\
\n\
   </ul>\n\
\n\
  </li>\n\
\n\
  <li>\n\
\n\
   <p>The XML document does <b>not</b> use a default namespace, all\n\
   namespace prefixes used are known to the style sheet author, and\n\
   there is a direct mapping between namespace prefixes and namespace\n\
   URIs. (A given prefix may only be mapped to one namespace URI\n\
   throughout the XML document; there may be multiple prefixes mapped\n\
   to the same URI).</p>\n\
\n\
   <ul>\n\
\n\
    <li>In this case, the down-level client will view and match\n\
    element type and attribute selectors based on their fully\n\
    qualified name, not the local part as outlined in the <a\n\
    href=\"#typenmsp\">Type selectors and Namespaces</a> section. CSS\n\
    selectors may be declared using an escaped colon \"<code>\\:</code>\"\n\
    to describe the fully qualified names, e.g.\n\
    \"<code>html\\:h1</code>\" will match\n\
    <code>&lt;html:h1&gt;</code>. Selectors using the qualified name\n\
    will only match XML elements that use the same prefix. Other\n\
    namespace prefixes used in the XML that are mapped to the same URI\n\
    will not match as expected unless additional CSS style rules are\n\
    declared for them.</li>\n\
\n\
    <li>Note that selectors declared in this fashion will\n\
    <em>only</em> match in down-level clients. A CSS namespace aware\n\
    client will match element type and attribute selectors based on\n\
    the name's local part. Selectors declared with the fully\n\
    qualified name will not match (unless there is no namespace prefix\n\
    in the fully qualified name).</li>\n\
\n\
   </ul>\n\
\n\
  </li>\n\
\n\
 </ol>\n\
\n\
<p>In other scenarios: when the namespace prefixes used in the XML are\n\
not known in advance by the style sheet author; or a combination of\n\
elements with no namespace are used in conjunction with elements using\n\
a default namespace; or the same namespace prefix is mapped to\n\
<em>different</em> namespace URIs within the same document, or in\n\
different documents; it is impossible to construct a CSS style sheet\n\
that will function properly against all elements in those documents,\n\
unless, the style sheet is written using a namespace URI syntax (as\n\
outlined in this document or similar) and the document is processed by\n\
a CSS and XML namespace aware client.</p>\n\
\n\
<h2><a name=profiling>12. Profiles</a></h2>\n\
\n\
<p>Each specification using Selectors must define the subset of W3C\n\
Selectors it allows and excludes, and describe the local meaning of\n\
all the components of that subset.</p>\n\
\n\
<p>Non normative examples:\n\
\n\
<div class=\"profile\">\n\
<table class=\"tprofile\">\n\
  <tbody>\n\
  <tr>\n\
    <th class=\"title\" colspan=2>Selectors profile</th></tr>\n\
  <tr>\n\
    <th>Specification</th>\n\
    <td>CSS level 1</td></tr>\n\
  <tr>\n\
    <th>Accepts</th>\n\
    <td>type selectors<br>class selectors<br>ID selectors<br>:link,\n\
      :visited and :active pseudo-classes<br>descendant combinator\n\
     <br>::first-line and ::first-letter pseudo-elements</td></tr>\n\
  <tr>\n\
    <th>Excludes</th>\n\
    <td>\n\
      \n\
<p>universal selector<br>attribute selectors<br>:hover and :focus\n\
      pseudo-classes<br>:target pseudo-class<br>:lang() pseudo-class<br>all UI\n\
      element states pseudo-classes<br>all structural\n\
      pseudo-classes<br>negation pseudo-class<br>all\n\
      UI element fragments pseudo-elements<br>::before and ::after\n\
      pseudo-elements<br>child combinators<br>sibling combinators\n\
      \n\
<p>namespaces</td></tr>\n\
  <tr>\n\
    <th>Extra constraints</th>\n\
    <td>only one class selector allowed per sequence of simple\n\
  selectors</td></tr></tbody></table><br><br>\n\
<table class=\"tprofile\">\n\
  <tbody>\n\
  <tr>\n\
    <th class=\"title\" colspan=2>Selectors profile</th></tr>\n\
  <tr>\n\
    <th>Specification</th>\n\
    <td>CSS level 2</td></tr>\n\
  <tr>\n\
    <th>Accepts</th>\n\
    <td>type selectors<br>universal selector<br>attribute presence and\n\
      values selectors<br>class selectors<br>ID selectors<br>:link, :visited,\n\
      :active, :hover, :focus, :lang() and :first-child pseudo-classes\n\
     <br>descendant combinator<br>child combinator<br>adjacent sibling\n\
      combinator<br>::first-line and ::first-letter pseudo-elements<br>::before\n\
      and ::after pseudo-elements</td></tr>\n\
  <tr>\n\
    <th>Excludes</th>\n\
    <td>\n\
      \n\
<p>content selectors<br>substring matching attribute\n\
      selectors<br>:target pseudo-classes<br>all UI element\n\
      states pseudo-classes<br>all structural pseudo-classes other\n\
      than :first-child<br>negation pseudo-class<br>all UI element\n\
      fragments pseudo-elements<br>general sibling combinators\n\
      \n\
<p>namespaces</td></tr>\n\
  <tr>\n\
    <th>Extra constraints</th>\n\
    <td>more than one class selector per sequence of simple selectors (CSS1\n\
      constraint) allowed</td></tr></tbody></table>\n\
\n\
<p>In CSS, selectors express pattern matching rules that determine which style\n\
rules apply to elements in the document tree. \n\
\n\
<p>The following selector (CSS level 2) will <b>match</b> all anchors <code>a</code>\n\
with attribute <code>name</code> set inside a section 1 header <code>h1</code>: \n\
<pre>h1 a[name]</pre>\n\
\n\
<p>All CSS declarations attached to such a selector are applied to elements\n\
matching it. </div>\n\
\n\
<div class=\"profile\">\n\
<table class=\"tprofile\">\n\
  <tbody>\n\
  <tr>\n\
    <th class=\"title\" colspan=2>Selectors profile</th></tr>\n\
  <tr>\n\
    <th>Specification</th>\n\
      <td>STTS 3</td>\n\
    </tr>\n\
  <tr>\n\
    <th>Accepts</th>\n\
    <td>\n\
      \n\
<p>type selectors<br>universal selectors<br>attribute selectors<br>class\n\
      selectors<br>ID selectors<br>all structural pseudo-classes<br>\n\
          all combinators\n\
      \n\
<p>namespaces</td></tr>\n\
  <tr>\n\
    <th>Excludes</th>\n\
    <td>non-accepted pseudo-classes<br>pseudo-elements<br></td></tr>\n\
  <tr>\n\
    <th>Extra constraints</th>\n\
    <td>some selectors and combinators are not allowed in fragment\n\
      descriptions on the right side of STTS declarations.</td></tr></tbody></table>\n\
  \n\
<p>Selectors can be used in STTS 3 in two different\n\
    manners: \n\
<ol>\n\
  <li>a selection mechanism equivalent to CSS selection mechanism: declarations\n\
  attached to a given selector are applied to elements matching that selector,\n\
  <li>fragment descriptions that appear on the right side of declarations.\n\
</li></ol></div>\n\
\n\
<h2><a name=Conformance></a>13. Conformance and requirements</h2>\n\
\n\
<p>This section defines conformance with the present specification only.\n\
\n\
<p>The inability of a user agent to implement part of this specification due to\n\
the limitations of a particular device (e.g., non interactive user agents will\n\
probably not implement dynamic pseudo-classes because they make no sense without\n\
interactivity) does not imply non-conformance.\n\
\n\
<p>All specifications reusing Selectors must contain a <a\n\
href=\"#profiling\">Profile</a> listing the\n\
subset of Selectors it accepts or excludes, and describing the constraints\n\
it adds to the current specification. \n\
\n\
<p>Invalidity is caused by a parsing error, e.g. an unrecognized token or a token\n\
which is not allowed at the current parsing point.\n\
\n\
<p>User agents must observe the rules for handling parsing errors:\n\
<ul>\n\
  <li>a simple selector containing an undeclared namespace prefix is invalid</li>\n\
  <li>a selector containing an invalid simple selector, an invalid combinator\n\
    or an invalid token is invalid. </li>\n\
  <li>a group of selectors containing an invalid selector is invalid.</li>\n\
</ul>\n\
\n\
<p>Specifications reusing Selectors must define how to handle parsing\n\
errors. (In the case of CSS, the entire rule in which the selector is\n\
used is dropped.)</p>\n\
\n\
<!-- Apparently all these references are out of date:\n\
<p>Implementations of this specification must behave as\n\
\"recipients of text data\" as defined by <a href=\"#refsCWWW\">[CWWW]</a>\n\
when parsing selectors and attempting matches. (In particular,\n\
implementations must assume the data is normalized and must not\n\
normalize it.) Normative rules for matching strings are defined in\n\
<a href=\"#refsCWWW\">[CWWW]</a> and <a\n\
href=\"#refsUNICODE\">[UNICODE]</a> and apply to implementations of this\n\
specification.</p>-->\n\
\n\
<h2><a name=Tests></a>14. Tests</h2>\n\
\n\
<p>This specification has <a\n\
href=\"http://www.w3.org/Style/CSS/Test/CSS3/Selectors/current/\">a test\n\
suite</a> allowing user agents to verify their basic conformance to\n\
the specification. This test suite does not pretend to be exhaustive\n\
and does not cover all possible combined cases of Selectors.</p>\n\
\n\
<h2><a name=ACKS></a>15. Acknowledgements</h2>\n\
\n\
<p>The CSS working group would like to thank everyone who has sent\n\
comments on this specification over the years.</p>\n\
\n\
<p>The working group would like to extend special thanks to Donna\n\
McManus, Justin Baker, Joel Sklar, and Molly Ives Brower who perfermed\n\
the final editorial review.</p>\n\
\n\
<h2><a name=references>16. References</a></h2>\n\
\n\
<dl class=\"refs\">\n\
\n\
  <dt>[CSS1]\n\
  <dd><a name=refsCSS1></a> Bert Bos, H&aring;kon Wium Lie; \"<cite>Cascading Style Sheets, level 1</cite>\", W3C Recommendation, 17 Dec 1996, revised 11 Jan 1999\n\
  <dd>(<code><a href=\"http://www.w3.org/TR/REC-CSS1\">http://www.w3.org/TR/REC-CSS1</a></code>)\n\
\n\
  <dt>[CSS21]\n\
  <dd><a name=refsCSS21></a> Bert Bos, Tantek &Ccedil;elik, Ian Hickson, H&aring;kon Wium Lie, editors; \"<cite>Cascading Style Sheets, level 2 revision 1</cite>\", W3C Working Draft, 13 June 2005 \n\
  <dd>(<code><a href=\"http://www.w3.org/TR/CSS21\">http://www.w3.org/TR/CSS21</a></code>)\n\
\n\
  <dt>[CWWW]\n\
  <dd><a name=refsCWWW></a> Martin J. D&uuml;rst, Fran&ccedil;ois Yergeau, Misha Wolf, Asmus Freytag, Tex Texin, editors; \"<cite>Character Model for the World Wide Web</cite>\", W3C Recommendation, 15 February 2005\n\
  <dd>(<code><a href=\"http://www.w3.org/TR/charmod/\">http://www.w3.org/TR/charmod/</a></code>)\n\
\n\
  <dt>[FLEX]\n\
  <dd><a name=\"refsFLEX\"></a> \"<cite>Flex: The Lexical Scanner Generator</cite>\", Version 2.3.7, ISBN 1882114213\n\
\n\
  <dt>[HTML4]\n\
  <dd><a name=\"refsHTML4\"></a> Dave Ragget, Arnaud Le Hors, Ian Jacobs, editors; \"<cite>HTML 4.01 Specification</cite>\", W3C Recommendation, 24 December 1999\n\
  <dd>(<a href=\"http://www.w3.org/TR/html4/\"><code>http://www.w3.org/TR/html4/</code></a>)\n\
\n\
  <dt>[MATH]\n\
  <dd><a name=\"refsMATH\"></a> Patrick Ion, Robert Miner, editors; \"<cite>Mathematical Markup Language (MathML) 1.01</cite>\", W3C Recommendation, revision of 7 July 1999\n\
  <dd>(<code><a href=\"http://www.w3.org/TR/REC-MathML/\">http://www.w3.org/TR/REC-MathML/</a></code>)\n\
\n\
  <dt>[RFC3066]\n\
  <dd><a name=\"refsRFC3066\"></a> H. Alvestrand; \"<cite>Tags for the Identification of Languages</cite>\", Request for Comments 3066, January 2001\n\
  <dd>(<a href=\"http://www.ietf.org/rfc/rfc3066.txt\"><code>http://www.ietf.org/rfc/rfc3066.txt</code></a>)\n\
\n\
  <dt>[STTS]\n\
  <dd><a name=refsSTTS></a> Daniel Glazman; \"<cite>Simple Tree Transformation Sheets 3</cite>\", Electricit&eacute; de France, submission to the W3C, 11 November 1998 \n\
  <dd>(<code><a href=\"http://www.w3.org/TR/NOTE-STTS3\">http://www.w3.org/TR/NOTE-STTS3</a></code>)\n\
\n\
  <dt>[SVG]\n\
  <dd><a name=\"refsSVG\"></a> Jon Ferraiolo, &#34276;&#27810; &#28147;, Dean Jackson, editors; \"<cite>Scalable Vector Graphics (SVG) 1.1 Specification</cite>\", W3C Recommendation, 14 January 2003\n\
  <dd>(<code><a href=\"http://www.w3.org/TR/SVG/\">http://www.w3.org/TR/SVG/</a></code>)\n\
\n\
  <dt>[UNICODE]</dt>\n\
  <dd><a name=\"refsUNICODE\"></a> <cite><a\n\
   href=\"http://www.unicode.org/versions/Unicode4.1.0/\">The Unicode Standard, Version 4.1</a></cite>, The Unicode Consortium. Boston, MA, Addison-Wesley, March 2005. ISBN 0-321-18578-1, as amended by <a href=\"http://www.unicode.org/versions/Unicode4.0.1/\">Unicode 4.0.1</a> and <a href=\"http://www.unicode.org/versions/Unicode4.1.0/\">Unicode  4.1.0</a>.\n\
  <dd>(<code><a href=\"http://www.unicode.org/versions/\">http://www.unicode.org/versions/</a></code>)</dd>\n\
\n\
  <dt>[XML10]\n\
  <dd><a name=\"refsXML10\"></a> Tim Bray, Jean Paoli, C. M. Sperberg-McQueen, Eve Maler, Fran&ccedil;ois Yergeau, editors; \"<cite>Extensible Markup Language (XML) 1.0 (Third Edition)</cite>\", W3C Recommendation, 4 February 2004\n\
  <dd>(<a href=\"http://www.w3.org/TR/REC-xml/\"><code>http://www.w3.org/TR/REC-xml/</code></a>)\n\
\n\
  <dt>[XMLNAMES]\n\
  <dd><a name=\"refsXMLNAMES\"></a> Tim Bray, Dave Hollander, Andrew Layman, editors; \"<cite>Namespaces in XML</cite>\", W3C Recommendation, 14 January 1999\n\
  <dd>(<a href=\"http://www.w3.org/TR/REC-xml-names/\"><code>http://www.w3.org/TR/REC-xml-names/</code></a>)\n\
\n\
  <dt>[YACC]\n\
  <dd><a name=\"refsYACC\"></a> S. C. Johnson; \"<cite>YACC &mdash; Yet another compiler compiler</cite>\", Technical Report, Murray Hill, 1975\n\
\n\
</dl>\n\
\n\
<div class=\"wrapper\">\n\
	<a href=\"#\" class=\"inner\">test</a>\n\
</div>\n\
<div>\n\
	<div class=\"wrapper\">\n\
		<a href=\"#\" class=\"inner\">test</a>\n\
		<div class=\"wrapper\">\n\
			<a href=\"#\" class=\"inner\">test</a>\n\
		</div>\n\
		<div>\n\
			<div class=\"wrapper\">\n\
				<a href=\"#\" class=\"inner\">test</a>\n\
			</div>\n\
		</div>\n\
	</div>\n\
</div>\n\
\n\
<code>\n\
	<div>\n\
		<i class=\"nest a1\">d1<b class=\"flatInNest a1\">d1</b>\n\
			<b class=\"nest a2\">d2<i class=\"flatInNest a2\">d2</i>\n\
				<i class=\"nest a3\">d3<b class=\"flatInNest a3\">d3</b>\n\
					<b class=\"nest a4\">d4<i class=\"flatInNest a4\">d4</i>\n\
						<i class=\"nest a5\">d5<b class=\"flatInNest a5\">d5</b>\n\
							<b class=\"nest a6\">d6<i class=\"flatInNest a6\">d6</i>\n\
							</b>\n\
						</i>\n\
					</b>\n\
				</i>\n\
			</b>\n\
		</i>\n\
	</div>\n\
	<div>\n\
		<b class=\"flatOut a1\">d1\n\
			<b class=\"flatInOut a1\">d1</b>\n\
		</b>\n\
		<i class=\"flatOut a2\">d2\n\
			<i class=\"flatInOut a2\">d2</i>\n\
		</i>\n\
		<b class=\"flatOut a3\">d3\n\
			<b class=\"flatInOut a3\">d3</b>\n\
		</b>\n\
		<i class=\"flatOut a4\">d4\n\
			<i class=\"flatInOut a4\">d4</i>\n\
		</i>\n\
		<b class=\"flatOut a5\">d5\n\
			<b class=\"flatInOut a5\">d5</b>\n\
		</b>\n\
		<i class=\"flatOut a6\">d6\n\
			<i class=\"flatInOut a6\">d6</i>\n\
		</i>\n\
	</div>\n\
</code>\n\
";
