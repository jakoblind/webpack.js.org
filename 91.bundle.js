webpackJsonp([91],{296:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default='<blockquote class="tip">\n<p>This guide extends on code examples found in the <a href="/guides/asset-management"><code>Asset Management</code></a> guide.</p>\n</blockquote>\n<p>So far we\'ve manually included all our assets in our <code>index.html</code> file, but as your application grows and once you start <a href="/guides/caching">using hashes in filenames</a> and outputting <a href="/guides/code-splitting">multiple bundles</a>, it will be difficult to keep managing your <code>index.html</code> file manually. However, a few plugins exist that will make this process much easier to manage.</p>\n<h2 id="preparation">Preparation<a href="#preparation" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>First, let\'s adjust our project a little bit:</p>\n<p><strong>project</strong></p>\n<pre><code class="hljs language-diff">  webpack-demo\n  |- package.json\n  |- webpack.config.js\n  |- /dist\n  |- /src\n    |- index.js\n<span class="token inserted">+   |- print.js</span>\n  |- /node_modules</code></pre>\n<p>Let\'s add some logic to our <code>src/print.js</code> file:</p>\n<p><strong>src/print.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">printMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'I get called from print.js!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<p>And use that function in our <code>src/index.js</code> file:</p>\n<p><strong>src/index.js</strong></p>\n<pre><code class="hljs language-diff">  import _ from \'lodash\';\n<span class="token inserted">+ import printMe from \'./print.js\';</span>\n\n  function component() {\n    var element = document.createElement(\'div\');\n<span class="token inserted">+   var btn = document.createElement(\'button\');</span>\n\n    element.innerHTML = _.join([\'Hello\', \'webpack\'], \' \');\n\n<span class="token inserted">+   btn.innerHTML = \'Click me and check the console!\';</span>\n<span class="token inserted">+   btn.onclick = printMe;</span>\n<span class="token inserted">+</span>\n<span class="token inserted">+   element.appendChild(btn);</span>\n\n    return element;\n  }\n\n  document.body.appendChild(component());</code></pre>\n<p>Let\'s also update our <code>dist/index.html</code> file, in preparation for webpack to split out entries:</p>\n<p><strong>dist/index.html</strong></p>\n<pre><code class="hljs language-diff">  &#x3C;!doctype html>\n  &#x3C;html>\n    &#x3C;head>\n<span class="token deleted">-     &#x3C;title>Asset Management&#x3C;/title></span>\n<span class="token inserted">+     &#x3C;title>Output Management&#x3C;/title></span>\n<span class="token inserted">+     &#x3C;script src="./print.bundle.js">&#x3C;/script></span>\n    &#x3C;/head>\n    &#x3C;body>\n<span class="token deleted">-     &#x3C;script src="./bundle.js">&#x3C;/script></span>\n<span class="token inserted">+     &#x3C;script src="./app.bundle.js">&#x3C;/script></span>\n    &#x3C;/body>\n  &#x3C;/html></code></pre>\n<p>Now adjust the config. We\'ll be adding our <code>src/print.js</code> as a new entry point (<code>print</code>) and we\'ll change the output as well, so that it will dynamically generate bundle names, based on the entry point names:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">  const path = require(\'path\');\n\n  module.exports = {\n<span class="token deleted">-   entry: \'./src/index.js\',</span>\n<span class="token inserted">+   entry: {</span>\n<span class="token inserted">+     app: \'./src/index.js\',</span>\n<span class="token inserted">+     print: \'./src/print.js\'</span>\n<span class="token inserted">+   },</span>\n    output: {\n<span class="token deleted">-     filename: \'bundle.js\',</span>\n<span class="token inserted">+     filename: \'[name].bundle.js\',</span>\n      path: path.resolve(__dirname, \'dist\')\n    }\n  };</code></pre>\n<p>Let\'s run <code>npm run build</code> and see what this generates:</p>\n<pre><code class="hljs language-bash">Hash: aa305b0f3373c63c9051\nVersion: webpack 3.0.0\nTime: 536ms\n          Asset     Size  Chunks                    Chunk Names\n  app.bundle.js   545 kB    0, 1  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  <span class="token punctuation">[</span>big<span class="token punctuation">]</span>  app\nprint.bundle.js  2.74 kB       1  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>         print\n   <span class="token punctuation">[</span>0<span class="token punctuation">]</span> ./src/print.js 84 bytes <span class="token punctuation">{</span>0<span class="token punctuation">}</span> <span class="token punctuation">{</span>1<span class="token punctuation">}</span> <span class="token punctuation">[</span>built<span class="token punctuation">]</span>\n   <span class="token punctuation">[</span>1<span class="token punctuation">]</span> ./src/index.js 403 bytes <span class="token punctuation">{</span>0<span class="token punctuation">}</span> <span class="token punctuation">[</span>built<span class="token punctuation">]</span>\n   <span class="token punctuation">[</span>3<span class="token punctuation">]</span> <span class="token punctuation">(</span>webpack<span class="token punctuation">)</span>/buildin/global.js 509 bytes <span class="token punctuation">{</span>0<span class="token punctuation">}</span> <span class="token punctuation">[</span>built<span class="token punctuation">]</span>\n   <span class="token punctuation">[</span>4<span class="token punctuation">]</span> <span class="token punctuation">(</span>webpack<span class="token punctuation">)</span>/buildin/module.js 517 bytes <span class="token punctuation">{</span>0<span class="token punctuation">}</span> <span class="token punctuation">[</span>built<span class="token punctuation">]</span>\n    + 1 hidden module</code></pre>\n<p>We can see that webpack generates our <code>print.bundle.js</code> and <code>app.bundle.js</code> files, which we also specified in our <code>index.html</code> file. if you open <code>index.html</code> in your browser, you can see what happens when you click the button.</p>\n<p>But what would happen if we changed the name of one of our entry points, or even added a new one? The generated bundles would be renamed on a build, but our <code>index.html</code> file would still reference the old names. Let\'s fix that with the <a href="/plugins/html-webpack-plugin"><code>HtmlWebpackPlugin</code></a>.</p>\n<h2 id="setting-up-htmlwebpackplugin">Setting up HtmlWebpackPlugin<a href="#setting-up-htmlwebpackplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>First install the plugin and adjust the <code>webpack.config.js</code> file:</p>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev html-webpack-plugin</code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">  const path = require(\'path\');\n<span class="token inserted">+ const HtmlWebpackPlugin = require(\'html-webpack-plugin\');</span>\n\n  module.exports = {\n    entry: {\n      app: \'./src/index.js\',\n      print: \'./src/print.js\'\n    },\n<span class="token inserted">+   plugins: [</span>\n<span class="token inserted">+     new HtmlWebpackPlugin({</span>\n<span class="token inserted">+       title: \'Output Management\'</span>\n<span class="token inserted">+     })</span>\n<span class="token inserted">+   ],</span>\n    output: {\n      filename: \'[name].bundle.js\',\n      path: path.resolve(__dirname, \'dist\')\n    }\n  };</code></pre>\n<p>Before we do a build, you should know that the <code>HtmlWebpackPlugin</code> by default will generate its own <code>index.html</code> file, even though we already have one in the <code>dist/</code> folder. This means that it will replace our <code>index.html</code> file with a newly generated one. Let\'s see what happens when we do an <code>npm run build</code>:</p>\n<pre><code class="hljs language-bash">Hash: 81f82697c19b5f49aebd\nVersion: webpack 2.6.1\nTime: 854ms\n           Asset       Size  Chunks                    Chunk Names\n print.bundle.js     544 kB       0  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  <span class="token punctuation">[</span>big<span class="token punctuation">]</span>  print\n   app.bundle.js    2.81 kB       1  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>         app\n      index.html  249 bytes          <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>\n   <span class="token punctuation">[</span>0<span class="token punctuation">]</span> ./~/lodash/lodash.js 540 kB <span class="token punctuation">{</span>0<span class="token punctuation">}</span> <span class="token punctuation">[</span>built<span class="token punctuation">]</span>\n   <span class="token punctuation">[</span>1<span class="token punctuation">]</span> <span class="token punctuation">(</span>webpack<span class="token punctuation">)</span>/buildin/global.js 509 bytes <span class="token punctuation">{</span>0<span class="token punctuation">}</span> <span class="token punctuation">[</span>built<span class="token punctuation">]</span>\n   <span class="token punctuation">[</span>2<span class="token punctuation">]</span> <span class="token punctuation">(</span>webpack<span class="token punctuation">)</span>/buildin/module.js 517 bytes <span class="token punctuation">{</span>0<span class="token punctuation">}</span> <span class="token punctuation">[</span>built<span class="token punctuation">]</span>\n   <span class="token punctuation">[</span>3<span class="token punctuation">]</span> ./src/index.js 172 bytes <span class="token punctuation">{</span>1<span class="token punctuation">}</span> <span class="token punctuation">[</span>built<span class="token punctuation">]</span>\n   <span class="token punctuation">[</span>4<span class="token punctuation">]</span> multi lodash 28 bytes <span class="token punctuation">{</span>0<span class="token punctuation">}</span> <span class="token punctuation">[</span>built<span class="token punctuation">]</span>\nChild html-webpack-plugin <span class="token keyword">for</span> <span class="token string">"index.html"</span><span class="token keyword">:</span>\n       <span class="token punctuation">[</span>0<span class="token punctuation">]</span> ./~/lodash/lodash.js 540 kB <span class="token punctuation">{</span>0<span class="token punctuation">}</span> <span class="token punctuation">[</span>built<span class="token punctuation">]</span>\n       <span class="token punctuation">[</span>1<span class="token punctuation">]</span> ./~/html-webpack-plugin/lib/loader.js<span class="token operator">!</span>./~/html-webpack-plugin/default_index.ejs 538 bytes <span class="token punctuation">{</span>0<span class="token punctuation">}</span> <span class="token punctuation">[</span>built<span class="token punctuation">]</span>\n       <span class="token punctuation">[</span>2<span class="token punctuation">]</span> <span class="token punctuation">(</span>webpack<span class="token punctuation">)</span>/buildin/global.js 509 bytes <span class="token punctuation">{</span>0<span class="token punctuation">}</span> <span class="token punctuation">[</span>built<span class="token punctuation">]</span>\n       <span class="token punctuation">[</span>3<span class="token punctuation">]</span> <span class="token punctuation">(</span>webpack<span class="token punctuation">)</span>/buildin/module.js 517 bytes <span class="token punctuation">{</span>0<span class="token punctuation">}</span> <span class="token punctuation">[</span>built<span class="token punctuation">]</span></code></pre>\n<p>If you open <code>index.html</code> in your code editor, you\'ll see that the <code>HtmlWebpackPlugin</code> has created an entirely new file for you and that all the bundles are automatically added.</p>\n<p>If you want to learn more about all the features and options that the <code>HtmlWebpackPlugin</code> provides, then you should read up on it on the <a href="https://github.com/jantimon/html-webpack-plugin"><code>HtmlWebpackPlugin</code></a> repo.</p>\n<p>You can also take a look at <a href="https://github.com/jaketrent/html-webpack-template"><code>html-webpack-template</code></a> which provides a couple of extra features in addition to the default template.</p>\n<h2 id="cleaning-up-the-dist-folder">Cleaning up the <code>/dist</code> folder<a href="#cleaning-up-the-dist-folder" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>As you might have noticed over the past guides and code example, our <code>/dist</code> folder has become quite cluttered. Webpack will generate the files and put them in the <code>/dist</code> folder for you, but it doesn\'t keep track of which files are actually in use by your project.</p>\n<p>In general it\'s good practice to clean the <code>/dist</code> folder before each build, so that only used files will be generated. Let\'s take care of that.</p>\n<p>A popular plugin to manage this is the <a href="https://www.npmjs.com/package/clean-webpack-plugin"><code>clean-webpack-plugin</code></a> so let\'s install and configure it.</p>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev clean-webpack-plugin</code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">  const path = require(\'path\');\n  const HtmlWebpackPlugin = require(\'html-webpack-plugin\');\n<span class="token inserted">+ const CleanWebpackPlugin = require(\'clean-webpack-plugin\');</span>\n\n  module.exports = {\n    entry: {\n      app: \'./src/index.js\',\n      print: \'./src/print.js\'\n    },\n    plugins: [\n<span class="token inserted">+     new CleanWebpackPlugin([\'dist\']),</span>\n      new HtmlWebpackPlugin({\n        title: \'Output Management\'\n      })\n    ],\n    output: {\n      filename: \'[name].bundle.js\',\n      path: path.resolve(__dirname, \'dist\')\n    }\n  };</code></pre>\n<p>Now run an <code>npm run build</code> and inspect the <code>/dist</code> folder. If everything went well you should now only see the files generated from the build and no more old files!</p>\n<h2 id="the-manifest">The Manifest<a href="#the-manifest" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>You might be wondering how webpack and its plugins seem to "know" what files are being generated. The answer is in the manifest that webpack keeps to track how all the modules map to the output bundles. If you\'re interested in managing webpack\'s <a href="/configuration/output"><code>output</code></a> in other ways, the manifest would be a good place to start.</p>\n<p>The manifest data can be extracted into a json file for easy consumption using the <a href="https://github.com/danethurber/webpack-manifest-plugin"><code>WebpackManifestPlugin</code></a>.</p>\n<p>We won\'t go through a full example of how to use this plugin within your projects, but you can read up on <a href="/concepts/manifest">the concept page</a> and the <a href="/guides/caching">caching guide</a> to find out how this ties into long term caching.</p>\n<h2 id="conclusion">Conclusion<a href="#conclusion" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Now that you\'ve learned about dynamically adding bundles to your HTML, let\'s dive into the <a href="/guides/development">development guide</a>. Or, if you want to dig into more advanced topics, we would recommend heading over to the <a href="/guides/code-splitting">code splitting guide</a>.</p>\n'}});