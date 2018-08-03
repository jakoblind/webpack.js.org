webpackJsonp([30],{357:function(n,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default='<p>Extract text from a bundle, or bundles, into a separate file.</p>\n<h2 id="install">Install<a href="#install" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev extract-text-webpack-plugin\n<span class="token comment"># for webpack 2</span>\n<span class="token function">npm</span> <span class="token function">install</span> --save-dev extract-text-webpack-plugin@2.1.2\n<span class="token comment"># for webpack 1</span>\n<span class="token function">npm</span> <span class="token function">install</span> --save-dev extract-text-webpack-plugin@1.0.1</code></pre>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<blockquote>\n<p>:warning: Since webpack v4 the <code>extract-text-webpack-plugin</code> should not be used for css. Use undefined instead.</p>\n<p>:warning: For webpack v1, see undefined.</p>\n</blockquote>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> ExtractTextPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"extract-text-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> ExtractTextPlugin<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          fallback<span class="token punctuation">:</span> <span class="token string">"style-loader"</span><span class="token punctuation">,</span>\n          use<span class="token punctuation">:</span> <span class="token string">"css-loader"</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">ExtractTextPlugin</span><span class="token punctuation">(</span><span class="token string">"styles.css"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<p>It moves all the required <code>*.css</code> modules in entry chunks into a separate CSS file. So your styles are no longer inlined into the JS bundle, but in a separate CSS file (<code>styles.css</code>). If your total stylesheet volume is big, it will be faster because the CSS bundle is loaded in parallel to the JS bundle.</p>\n<table>\n<thead>\n<tr>\n<th align="left">Advantages</th>\n<th align="left">Caveats</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="left"><div class="title"><p>Advantages</p><p>Caveats</p></div>\n<div class="content"><p>Fewer style tags (older IE has a limit)<p class="description mobile">Additional HTTP request</p></p></div></td>\n<td align="left" class="description desktop">Additional HTTP request</td>\n</tr>\n<tr>\n<td align="left"><div class="title"><p>Advantages</p><p>Caveats</p></div>\n<div class="content"><p>CSS SourceMap (with <code>devtool: "source-map"</code> and <code>extract-text-webpack-plugin?sourceMap</code>)<p class="description mobile">Longer compilation time</p></p></div></td>\n<td align="left" class="description desktop">Longer compilation time</td>\n</tr>\n<tr>\n<td align="left"><div class="title"><p>Advantages</p><p>Caveats</p></div>\n<div class="content"><p>CSS requested in parallel<p class="description mobile">No runtime public path modification</p></p></div></td>\n<td align="left" class="description desktop">No runtime public path modification</td>\n</tr>\n<tr>\n<td align="left"><div class="title"><p>Advantages</p><p>Caveats</p></div>\n<div class="content"><p>CSS cached separate<p class="description mobile">No Hot Module Replacement</p></p></div></td>\n<td align="left" class="description desktop">No Hot Module Replacement</td>\n</tr>\n<tr>\n<td align="left"><div class="title"><p>Advantages</p><p>Caveats</p></div>\n<div class="content"><p>Faster runtime (less code and DOM operations)<p class="description mobile">...</p></p></div></td>\n<td align="left" class="description desktop">...</td>\n</tr>\n</tbody>\n</table>\n<h2 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-js"><span class="token keyword">new</span> <span class="token class-name">ExtractTextPlugin</span><span class="token punctuation">(</span>options<span class="token punctuation">:</span> filename <span class="token operator">|</span> object<span class="token punctuation">)</span></code></pre>\n<table>\n<thead>\n<tr>\n<th align="center">Name</th>\n<th align="center">Type</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Description</p></div>\n<div class="content"><p><strong><code>id</code></strong><p class="description mobile"><code>{String}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{String}</code></td>\n<td align="left">Unique ident for this plugin instance. (For advanced usage only, by default automatically generated)</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Description</p></div>\n<div class="content"><p><strong><code>filename</code></strong><p class="description mobile"><code>{String\\|Function}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{String\\|Function}</code></td>\n<td align="left">Name of the result file. May contain \n<code>[name]</code>\n, \n<code>[id]</code>\n and \n<code>[contenthash]</code></td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Description</p></div>\n<div class="content"><p><strong><code>allChunks</code></strong><p class="description mobile"><code>{Boolean}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Boolean}</code></td>\n<td align="left">Extract from all additional chunks too (by default it extracts only from the initial chunk(s))\n<br />\nWhen using \n<code>CommonsChunkPlugin</code>\n and there are extracted chunks (from \n<code>ExtractTextPlugin.extract</code>\n) in the commons chunk, \n<code>allChunks</code>\n \n<strong>must</strong>\n be set to \n<code>true</code></td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Description</p></div>\n<div class="content"><p><strong><code>disable</code></strong><p class="description mobile"><code>{Boolean}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Boolean}</code></td>\n<td align="left">Disables the plugin</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Description</p></div>\n<div class="content"><p><strong><code>ignoreOrder</code></strong><p class="description mobile"><code>{Boolean}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Boolean}</code></td>\n<td align="left">Disables order check (useful for CSS Modules!), \n<code>false</code>\n by default</td>\n</tr>\n</tbody>\n</table>\n<ul>\n<li><code>[name]</code> name of the chunk</li>\n<li><code>[id]</code> number of the chunk</li>\n<li><code>[contenthash]</code> hash of the content of the extracted file</li>\n<li>\n<p><code>[&#x3C;hashType>:contenthash:&#x3C;digestType>:&#x3C;length>]</code> optionally you can configure</p>\n<ul>\n<li>other <code>hashType</code>s, e.g. <code>sha1</code>, <code>md5</code>, <code>sha256</code>, <code>sha512</code></li>\n<li>other <code>digestType</code>s, e.g. <code>hex</code>, <code>base26</code>, <code>base32</code>, <code>base36</code>, <code>base49</code>, <code>base52</code>, <code>base58</code>, <code>base62</code>, <code>base64</code></li>\n<li>and <code>length</code>, the length of the hash in chars</li>\n</ul>\n</li>\n</ul>\n<blockquote>\n<p>:warning: <code>ExtractTextPlugin</code> generates a file <strong>per entry</strong>, so you must use <code>[name]</code>, <code>[id]</code> or <code>[contenthash]</code> when using multiple entries.</p>\n</blockquote>\n<h4 id="extract"><code>#extract</code><a href="#extract" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<pre><code class="hljs language-js">ExtractTextPlugin<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span>options<span class="token punctuation">:</span> loader <span class="token operator">|</span> object<span class="token punctuation">)</span></code></pre>\n<p>Creates an extracting loader from an existing loader. Supports loaders of type <code>{ loader: [name]-loader -> {String}, options: {} -> {Object} }</code>.</p>\n<table>\n<thead>\n<tr>\n<th align="center">Name</th>\n<th align="center">Type</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Description</p></div>\n<div class="content"><p><strong><code>options.use</code></strong><p class="description mobile"><code>{String}</code>/<code>{Array}</code>/<code>{Object}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{String}</code>\n/\n<code>{Array}</code>\n/\n<code>{Object}</code></td>\n<td align="left">Loader(s) that should be used for converting the resource to a CSS exporting module \n<em>(required)</em></td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Description</p></div>\n<div class="content"><p><strong><code>options.fallback</code></strong><p class="description mobile"><code>{String}</code>/<code>{Array}</code>/<code>{Object}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{String}</code>\n/\n<code>{Array}</code>\n/\n<code>{Object}</code></td>\n<td align="left">loader(e.g \n<code>\'style-loader\'</code>\n) that should be used when the CSS is not extracted (i.e. in an additional chunk when \n<code>allChunks: false</code>\n)</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Description</p></div>\n<div class="content"><p><strong><code>options.publicPath</code></strong><p class="description mobile"><code>{String}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{String}</code></td>\n<td align="left">Override the \n<code>publicPath</code>\n setting for this loader</td>\n</tr>\n</tbody>\n</table>\n<h4 id="multiple-instances">Multiple Instances<a href="#multiple-instances" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>There is also an <code>extract</code> function on the instance. You should use this if you have more than one instance of  <code>ExtractTextPlugin</code>.</p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> ExtractTextPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'extract-text-webpack-plugin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Create multiple instances</span>\n<span class="token keyword">const</span> extractCSS <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ExtractTextPlugin</span><span class="token punctuation">(</span><span class="token string">\'stylesheets/[name]-one.css\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> extractLESS <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ExtractTextPlugin</span><span class="token punctuation">(</span><span class="token string">\'stylesheets/[name]-two.css\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> extractCSS<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token string">\'css-loader\'</span><span class="token punctuation">,</span> <span class="token string">\'postcss-loader\'</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.less$/i</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> extractLESS<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token string">\'css-loader\'</span><span class="token punctuation">,</span> <span class="token string">\'less-loader\'</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    extractCSS<span class="token punctuation">,</span>\n    extractLESS\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="extracting-sass-or-less">Extracting Sass or LESS<a href="#extracting-sass-or-less" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>The configuration is the same, switch out <code>sass-loader</code> for <code>less-loader</code> when necessary.</p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> ExtractTextPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'extract-text-webpack-plugin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.scss$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> ExtractTextPlugin<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          fallback<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span>\n          use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'css-loader\'</span><span class="token punctuation">,</span> <span class="token string">\'sass-loader\'</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">ExtractTextPlugin</span><span class="token punctuation">(</span><span class="token string">\'style.css\'</span><span class="token punctuation">)</span>\n    <span class="token comment">//if you want to pass in options, you can do so:</span>\n    <span class="token comment">//new ExtractTextPlugin({</span>\n    <span class="token comment">//  filename: \'style.css\'</span>\n    <span class="token comment">//})</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="url-resolving"><code>url()</code> Resolving<a href="#url-resolving" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>If you are finding that urls are not resolving properly when you run webpack. You can expand your loader functionality with options. The <code>url: false</code> property allows your paths resolved without any changes.</p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> ExtractTextPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'extract-text-webpack-plugin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.scss$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> ExtractTextPlugin<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          fallback<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span>\n          use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                loader<span class="token punctuation">:</span> <span class="token string">\'css-loader\'</span><span class="token punctuation">,</span>\n                options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                    <span class="token comment">// If you are having trouble with urls not resolving add this setting.</span>\n                    <span class="token comment">// See https://github.com/webpack-contrib/css-loader#url</span>\n                    url<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n                    minimize<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                    sourceMap<span class="token punctuation">:</span> <span class="token boolean">true</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> \n            <span class="token punctuation">{</span>\n                loader<span class="token punctuation">:</span> <span class="token string">\'sass-loader\'</span><span class="token punctuation">,</span>\n                options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                    sourceMap<span class="token punctuation">:</span> <span class="token boolean">true</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="modify-filename">Modify filename<a href="#modify-filename" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>filename</code> parameter could be <code>Function</code>. It passes <code>getPath</code> to process the format like <code>css/[name].css</code> and returns the real file name, <code>css/js/a.css</code>. You can replace <code>css/js</code> with <code>css</code> then you will get the new path <code>css/a.css</code>.</p>\n<pre><code class="hljs language-js">entry<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  <span class="token string">\'js/a\'</span><span class="token punctuation">:</span> <span class="token string">"./a"</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\nplugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token keyword">new</span> <span class="token class-name">ExtractTextPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    filename<span class="token punctuation">:</span>  <span class="token punctuation">(</span>getPath<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">getPath</span><span class="token punctuation">(</span><span class="token string">\'css/[name].css\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">\'css/js\'</span><span class="token punctuation">,</span> <span class="token string">\'css\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    allChunks<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">]</span></code></pre>\n<h2 id="maintainers">Maintainers<a href="#maintainers" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<table>\n  <tbody>\n    <tr>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/166921?v=3&s=150">\n        </br>\n        <a href="https://github.com/bebraw">Juho Vepsäläinen</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars2.githubusercontent.com/u/8420490?v=3&s=150">\n        </br>\n        <a href="https://github.com/d3viant0ne">Joshua Wiens</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/533616?v=3&s=150">\n        </br>\n        <a href="https://github.com/SpaceK33z">Kees Kluskens</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/3408176?v=3&s=150">\n        </br>\n        <a href="https://github.com/TheLarkInn">Sean Larkin</a>\n      </td>\n    </tr>\n  <tbody>\n</table>\n'}});