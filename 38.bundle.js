webpackJsonp([38],{349:function(n,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default='<p>This guide only shows major changes that affect end users. For more details please see <a href="https://github.com/webpack/webpack/releases">the changelog</a>.</p>\n<h2 id="nodejs-v4">Node.js v4<a href="#nodejs-v4" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>If you are still using Node.js v4 or lower, you need to upgrade your Node.js installation to Node.js v6 or higher.</p>\n<h2 id="cli">CLI<a href="#cli" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The CLI has moved to a separate package: webpack-cli. You need to install it before using webpack, see <a href="/guides/getting-started/#basic-setup">basic setup</a>.</p>\n<h2 id="update-plugins">Update plugins<a href="#update-plugins" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Many 3rd-party plugins need to be upgraded to their latest version to be compatible.</p>\n<h2 id="mode">mode<a href="#mode" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Add the new <a href="/concepts/mode/"><code>mode</code></a> option to your config. Set it to production or development in your configuration depending on config type.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">module.exports = {\n  // ...\n  mode: \'production\',\n}</code></pre>\n<p>Alternatively you can pass it via CLI: <code>--mode production</code>/<code>--mode development</code></p>\n<h2 id="deprecatedremoved-plugins">Deprecated/Removed plugins<a href="#deprecatedremoved-plugins" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>These plugins can be removed from configuration as they are default in production mode:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">module.exports = {\n  // ...\n  plugins: [\n<span class="token deleted">-    new NoEmitOnErrorsPlugin(),</span>\n<span class="token deleted">-    new ModuleConcatenationPlugin(),</span>\n<span class="token deleted">-    new DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") })</span>\n<span class="token deleted">-    new UglifyJsPlugin()</span>\n  ],\n}</code></pre>\n<p>These plugins are default in development mode</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">module.exports = {\n  // ...\n  plugins: [\n<span class="token deleted">-    new NamedModulesPlugin()</span>\n  ],\n}</code></pre>\n<p>These plugins were deprecated and are now removed:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">module.exports = {\n  // ...\n  plugins: [\n<span class="token deleted">-    new NoErrorsPlugin(),</span>\n<span class="token deleted">-    new NewWatchingPlugin()</span>\n  ],\n}</code></pre>\n<h2 id="commonschunkplugin">CommonsChunkPlugin<a href="#commonschunkplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The <code>CommonsChunkPlugin</code> was removed. Instead the <a href="/configuration/optimization/#optimization-splitchunks/"><code>optimization.splitChunks</code></a> options can be used.</p>\n<p>See documentation of the <a href="/configuration/optimization/#optimization-splitchunks/"><code>optimization.splitChunks</code></a> for more details. The default configuration may already suit your needs.</p>\n<blockquote class="tip">\n<p>When generating the HTML from the stats you can use <code>optimization.splitChunks.chunks: "all"</code> which is the optimal configuration in most cases.</p>\n</blockquote>\n<h2 id="import-and-commonjs">import() and CommonJS<a href="#import-and-commonjs" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>When using <code>import()</code> to load non-ESM the result has changed in webpack 4. Now you need to access the <code>default</code> property to get the value of <code>module.exports</code>.</p>\n<p><strong>non-esm.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  sayHello<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'hello world\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p><strong>example.js</strong></p>\n<pre><code class="hljs language-javascript"><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'./non-esm.js\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>module <span class="token operator">=></span> <span class="token punctuation">{</span>\n    module<span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<h2 id="json-and-loaders">json and loaders<a href="#json-and-loaders" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>When using a custom loader to transform <code>.json</code> files you now need to change the module <code>type</code>:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">module.exports = {\n  // ...\n  rules: [\n    {\n      test: /config\\.json$/,\n      loader: \'special-loader\',\n<span class="token inserted">+     type: \'javascript/auto\',</span>\n      options: {...}\n    }\n  ]\n};</code></pre>\n<p>When still using the <code>json-loader</code>, it can be removed:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">module.exports = {\n  // ...\n  rules: [\n    {\n<span class="token deleted">-     test: /\\.json$/,</span>\n<span class="token deleted">-     loader: \'json-loader\'</span>\n    }\n  ]\n};</code></pre>\n<h2 id="moduleloaders">module.loaders<a href="#moduleloaders" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>module.loaders</code> were deprecated since webpack 2 and are now removed in favor of <a href="/configuration/module/#rule"><code>module.rules</code></a>.</p>\n'}});