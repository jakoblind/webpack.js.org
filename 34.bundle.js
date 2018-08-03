webpackJsonp([34],{353:function(n,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default='<p><strong>UNMAINTAINED!</strong></p>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-javascript"><span class="token keyword">var</span> ComponentPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"component-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n\tplugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n\t\t<span class="token keyword">new</span> <span class="token class-name">ComponentPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<h2 id="advanced-usage">Advanced usage<a href="#advanced-usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-javascript"><span class="token keyword">var</span> ComponentPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"component-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n\tplugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n\t\t<span class="token keyword">new</span> <span class="token class-name">ComponentPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t\t\t<span class="token comment">// Load xyz field in component.json</span>\n\t\t\txyz<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\t\t<span class="token comment">// This is equal to: xyz: "[file]"</span>\n\t\t\t\n\t\t\t<span class="token comment">// Load xyz field with the xyz-loader</span>\n\t\t\txyz<span class="token punctuation">:</span> <span class="token string">"!xyz-loader![file]"</span><span class="token punctuation">,</span>\n\t\t\t\n\t\t\t<span class="token comment">// This is default:</span>\n\t\t\t<span class="token comment">// styles: "!style-loader!css-loader![file]"</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>\n\t\t\t<span class="token comment">// Lookup paths</span>\n\t\t\t<span class="token string">"component"</span>\n\t\t<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>MIT (<a href="http://www.opensource.org/licenses/mit-license.php">http://www.opensource.org/licenses/mit-license.php</a>)</p>\n'}});