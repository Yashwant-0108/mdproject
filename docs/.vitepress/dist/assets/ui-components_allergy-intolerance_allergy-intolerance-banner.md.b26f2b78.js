import{_ as s,c as n,o as a,U as l}from"./chunks/framework.9c71f6aa.js";const g=JSON.parse('{"title":"Allergy Intolerance Banner","description":"","frontmatter":{},"headers":[],"relativePath":"ui-components/allergy-intolerance/allergy-intolerance-banner.md","filePath":"ui-components/allergy-intolerance/allergy-intolerance-banner.md"}'),e={name:"ui-components/allergy-intolerance/allergy-intolerance-banner.md"},o=l(`<h1 id="allergy-intolerance-banner" tabindex="-1">Allergy Intolerance Banner <a class="header-anchor" href="#allergy-intolerance-banner" aria-label="Permalink to &quot;Allergy Intolerance Banner&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>Allergy Intolerance Banner contains content about an allergy intolerance resource instance.</p><p>It displays and highlights the information that could be obtained from the FHIR Allergy Intolerance resource data according to the US core implementation guide.</p><p><strong>US Core Implementation Guide (Allergy Intolerance Resource)</strong><br><a href="https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-allergyintolerance.html" target="_blank" rel="noreferrer">https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-allergyintolerance.html</a></p><p>The component can show the items including:</p><ul><li>Header 1 Content – Name of the allergy / intolerance</li><li>Header 2 Content – Clinical status of the allergy / intolerance on the patient</li><li>Optional Icon Button – Nothing is shown by default</li><li>Optional Toolbar – Nothing is shown by default</li><li>Custom HTML Cell Content – Verification status of the allergy / intolerance on the patient</li><li>Custom HTML Content – Text references of the Patient resource with the allergy / intolerance and the reactions on the patient</li></ul><p>!!!note</p><pre><code>The value to be shown in each field is defined according to the config file which may refer to this document: [Config File Documentation](../../config-file.md)
</code></pre><h2 id="example-usage" tabindex="-1">Example Usage <a class="header-anchor" href="#example-usage" aria-label="Permalink to &quot;Example Usage&quot;">​</a></h2><h3 id="basic-allergy-intolerance-banner" tabindex="-1">Basic Allergy Intolerance Banner <a class="header-anchor" href="#basic-allergy-intolerance-banner" aria-label="Permalink to &quot;Basic Allergy Intolerance Banner&quot;">​</a></h3><p><a href="https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-allergyintolerance.html" target="_blank" rel="noreferrer">https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-allergyintolerance.html</a></p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#666666;">&lt;</span><span style="color:#B8A965;">allergy-intolerance-banner</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;font-style:italic;">:data=&quot;fhirJson&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">/&gt;</span></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#999999;">&lt;</span><span style="color:#998418;">allergy-intolerance-banner</span><span style="color:#393A34;"> </span><span style="color:#B31D28;font-style:italic;">:data=&quot;fhirJson&quot;</span><span style="color:#393A34;"> </span><span style="color:#999999;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>![Image]</p><h3 id="allergy-intolerance-banner-fields-props" tabindex="-1">Allergy Intolerance Banner (Fields Props) <a class="header-anchor" href="#allergy-intolerance-banner-fields-props" aria-label="Permalink to &quot;Allergy Intolerance Banner (Fields Props)&quot;">​</a></h3><p>The example of passing in the “fields” props to the allergy intolerance banner. It overrides the ways it displays the “clinicalStatus” field and makes the “verificationStatus” field to be invisible.</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">export default </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#80A665;">data</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    return </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#80A665;">fields</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#80A665;">verificationStatus</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#80A665;">display</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">false</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#80A665;">clinicalStatus</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#80A665;">value</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">data</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#80A665;">String</span><span style="color:#666666;">(</span><span style="color:#BD976A;">data</span><span style="color:#666666;">?.</span><span style="color:#BD976A;">clinicalStatus</span><span style="color:#666666;">?.</span><span style="color:#BD976A;">coding</span><span style="color:#666666;">?.[</span><span style="color:#4C9A91;">0</span><span style="color:#666666;">]?.</span><span style="color:#BD976A;">code</span><span style="color:#666666;">).</span><span style="color:#80A665;">toUpperCase</span><span style="color:#666666;">(),</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;">;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;">;</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">&lt;</span><span style="color:#B8A965;">allergy-intolerance-banner</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;font-style:italic;">:data=&quot;fhirJson&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;font-style:italic;">:fields=&quot;fields&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">/&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">export default </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#59873A;">data</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    return </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#59873A;">fields</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#59873A;">verificationStatus</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#59873A;">display</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">false</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#59873A;">clinicalStatus</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#59873A;">value</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">data</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#59873A;">String</span><span style="color:#999999;">(</span><span style="color:#B07D48;">data</span><span style="color:#999999;">?.</span><span style="color:#B07D48;">clinicalStatus</span><span style="color:#999999;">?.</span><span style="color:#B07D48;">coding</span><span style="color:#999999;">?.[</span><span style="color:#2F798A;">0</span><span style="color:#999999;">]?.</span><span style="color:#B07D48;">code</span><span style="color:#999999;">).</span><span style="color:#59873A;">toUpperCase</span><span style="color:#999999;">(),</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span><span style="color:#393A34;">;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#999999;">}</span><span style="color:#393A34;">;</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">&lt;</span><span style="color:#998418;">allergy-intolerance-banner</span><span style="color:#393A34;"> </span><span style="color:#B31D28;font-style:italic;">:data=&quot;fhirJson&quot;</span><span style="color:#393A34;"> </span><span style="color:#B31D28;font-style:italic;">:fields=&quot;fields&quot;</span><span style="color:#393A34;"> </span><span style="color:#999999;">/&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>![Image]</p><h3 id="allergy-intolerance-banner-banner-component" tabindex="-1">Allergy Intolerance Banner (Banner Component) <a class="header-anchor" href="#allergy-intolerance-banner-banner-component" aria-label="Permalink to &quot;Allergy Intolerance Banner (Banner Component)&quot;">​</a></h3><p>For the other usage of Allergy Intolerance Banner that is applicable to all the banner components, may refer to [Banner Archetype].</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><ul><li>[Allergy Intolerance Banner API]</li></ul>`,22),p=[o];function t(r,c,i,y,h,d){return a(),n("div",null,p)}const A=s(e,[["render",t]]);export{g as __pageData,A as default};