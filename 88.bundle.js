webpackJsonp([88],{299:function(n,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default='<p>The <code>publicPath</code> configuration option can be quite useful in a variety of scenarios. It allows you to specify the base path for all the assets within your application.</p>\n<h2 id="use-cases">Use Cases<a href="#use-cases" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>There are a few use cases in real applications where this feature becomes especially neat. Essentially, every file emitted to your <code>output.path</code> directory will be referenced from the <code>output.publicPath</code> location. This includes child chunks (created via <a href="/guides/code-splitting/">code splitting</a>) and any other assets (e.g. images, fonts, etc.) that are a part of your dependency graph.</p>\n<h3 id="environment-based">Environment Based<a href="#environment-based" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>In development for example, we might have an <code>assets/</code> folder that lives on the same level of our index page. This is fine, but what if we wanted to host all these static assets on a CDN in production?</p>\n<p>To approach this problem you can easily use a good old environment variable. Let\'s say we have a variable <code>ASSET_PATH</code>:</p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> webpack <span class="token keyword">from</span> <span class="token string">\'webpack\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Try the environment variable, otherwise use root</span>\n<span class="token keyword">const</span> <span class="token constant">ASSET_PATH</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">ASSET_PATH</span> <span class="token operator">||</span> <span class="token string">\'/\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    publicPath<span class="token punctuation">:</span> <span class="token constant">ASSET_PATH</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// This makes it possible for us to safely use env vars on our code</span>\n    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token string">\'process.env.ASSET_PATH\'</span><span class="token punctuation">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token constant">ASSET_PATH</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="on-the-fly">On The Fly<a href="#on-the-fly" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Another possible use case is to set the <code>publicPath</code> on the fly. webpack exposes a global variable called <code>__webpack_public_path__</code> that allows you to do that. So, in your application\'s entry point, you can simply do this:</p>\n<pre><code class="hljs language-js">__webpack_public_path__ <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">ASSET_PATH</span><span class="token punctuation">;</span></code></pre>\n<p>That\'s all you need. Since we\'re already using the <code>DefinePlugin</code> on our\nconfiguration, <code>process.env.ASSET_PATH</code> will always be defined so we can safely\ndo that.</p>\n<blockquote class="warning">\n<p>Be aware that if you use ES6 module imports in your entry file the <code>__webpack_public_path__</code> assignment will be done after the imports. In such cases, you\'ll have to move the public path assignment to its own dedicated module and then import it on top of your entry.js:</p>\n</blockquote>\n<pre><code class="hljs language-js"><span class="token comment">// entry.js</span>\n<span class="token keyword">import</span> <span class="token string">\'./public-path\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'./app\'</span><span class="token punctuation">;</span></code></pre>\n'}});