import{_ as s,c as a,o as n,U as l}from"./chunks/framework.9c71f6aa.js";const u=JSON.parse('{"title":"Observation Banner","description":"","frontmatter":{},"headers":[],"relativePath":"ui-components/observation/observation-banner.md","filePath":"ui-components/observation/observation-banner.md"}'),e={name:"ui-components/observation/observation-banner.md"},o=l(`<h1 id="observation-banner" tabindex="-1">Observation Banner <a class="header-anchor" href="#observation-banner" aria-label="Permalink to &quot;Observation Banner&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>Observation Banner contains content about an observation resource instance.</p><p>It displays and highlights the information that could be obtained from the FHIR Observation resource data.</p><p><strong>Observation Resource</strong><br><a href="https://hl7.org/fhir/R4/observation.html" target="_blank" rel="noreferrer">https://hl7.org/fhir/R4/observation.html</a></p><p>The component can show the items including:</p><ul><li>Header 1 Content – Type of Observation</li><li>Header 2 Content – Actual result</li><li>Optional Icon Button – Nothing is shown by default</li><li>Optional Toolbar – Nothing is shown by default</li><li>Custom HTML Cell Content – Effective Value (Status)</li><li>Custom HTML Content – Subject and Category</li></ul><p>!!!note</p><pre><code>The value to be shown in each field is defined according to the config file which may refer to this document: [Config File Documentation](../../config-file.md)
</code></pre><h2 id="example-usage" tabindex="-1">Example Usage <a class="header-anchor" href="#example-usage" aria-label="Permalink to &quot;Example Usage&quot;">​</a></h2><h3 id="basic-observation-banner" tabindex="-1">Basic Observation Banner <a class="header-anchor" href="#basic-observation-banner" aria-label="Permalink to &quot;Basic Observation Banner&quot;">​</a></h3><p>A simple example for the observation banner with no extra configuration.</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#666666;">&lt;</span><span style="color:#B8A965;">observation-banner</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;font-style:italic;">:data=&quot;fhirJson&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">/&gt;</span></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#999999;">&lt;</span><span style="color:#998418;">observation-banner</span><span style="color:#393A34;"> </span><span style="color:#B31D28;font-style:italic;">:data=&quot;fhirJson&quot;</span><span style="color:#393A34;"> </span><span style="color:#999999;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>![Image]</p><h3 id="observation-banner-fields-props" tabindex="-1">Observation Banner (Fields Props) <a class="header-anchor" href="#observation-banner-fields-props" aria-label="Permalink to &quot;Observation Banner (Fields Props)&quot;">​</a></h3><p>The example of passing in the “fields” props to the observation banner. It overrides the ways it displays the “status” field and makes the “category” field to be invisible.</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">export default </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#80A665;">data</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    return </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#80A665;">fields</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#80A665;">status</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">          </span><span style="color:#758575DD;">// overrides the way to display “status” field</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#80A665;">value</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">data</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">data</span><span style="color:#666666;">?.</span><span style="color:#BD976A;">status</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#80A665;">category</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">          </span><span style="color:#758575DD;">// hide the “category” field</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#80A665;">display</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">false</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">     </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#CB7676;">/</span><span style="color:#BD976A;">script</span><span style="color:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">&lt;</span><span style="color:#B8A965;">observation-banner</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;font-style:italic;">:data=&quot;fhirJson&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;font-style:italic;">:fields=&quot;fields&quot;/&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">export default </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#59873A;">data</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    return </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#59873A;">fields</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#59873A;">status</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#A0ADA0;">// overrides the way to display “status” field</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#59873A;">value</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">data</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">data</span><span style="color:#999999;">?.</span><span style="color:#B07D48;">status</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#59873A;">category</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#A0ADA0;">// hide the “category” field</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#59873A;">display</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">false</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">     </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#AB5959;">/</span><span style="color:#B07D48;">script</span><span style="color:#999999;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">&lt;</span><span style="color:#998418;">observation-banner</span><span style="color:#393A34;"> </span><span style="color:#B31D28;font-style:italic;">:data=&quot;fhirJson&quot;</span><span style="color:#393A34;"> </span><span style="color:#B31D28;font-style:italic;">:fields=&quot;fields&quot;/&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/template&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>![Image]</p><h3 id="observation-banner-banner-component" tabindex="-1">Observation Banner (Banner Component) <a class="header-anchor" href="#observation-banner-banner-component" aria-label="Permalink to &quot;Observation Banner (Banner Component)&quot;">​</a></h3><p>For the other usage of Observation Banner that is applicable to all the banner components, may refer to [Banner Archetype].</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><ul><li>[Observation Banner API]</li></ul>`,22),p=[o];function t(r,c,i,y,b,d){return n(),a("div",null,p)}const A=s(e,[["render",t]]);export{u as __pageData,A as default};
