webpackJsonp([0x6ba27412d2be],{874:function(n,a){n.exports={data:{markdownRemark:{html:'<p>React实现了一套与浏览器无关的DOM系统，兼顾了性能和跨浏览器的兼容性。借此机会，我们清理了浏览器DOM实现中一些粗糙的棱角。</p>\n<p>在React中，所有的DOM特性和属性（包括事件处理函数）都应该是小驼峰命名法命名。比如说，与HTML中的<code class="gatsby-code-text">tabindex</code>属性对应的React的属性是<code class="gatsby-code-text">tabIndex</code>。<code class="gatsby-code-text">aria-*</code>和<code class="gatsby-code-text">data-*</code>属性是例外的，一律使用小写字母命名。For example, you can keep <code class="gatsby-code-text">aria-label</code> as <code class="gatsby-code-text">aria-label</code>.</p>\n<h2 id="属性的不同"><a href="#%E5%B1%9E%E6%80%A7%E7%9A%84%E4%B8%8D%E5%90%8C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>属性的不同</h2>\n<p>在React和Html之间有许多属性的行为是不同的：</p>\n<h3 id="checked"><a href="#checked" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>checked</h3>\n<p><code class="gatsby-code-text">checked</code>属性受类型为<code class="gatsby-code-text">checkbox</code>或<code class="gatsby-code-text">radio</code>的<code class="gatsby-code-text">&lt;input&gt;</code>组件的支持。你可以用它来设定是否组件是被选中的。这对于构建受控组件很有用。与之相对<code class="gatsby-code-text">defaultChecked</code>这是非受控组件的属性，用来设定对应组件首次装载时是否选中状态。</p>\n<h3 id="classname"><a href="#classname" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>className</h3>\n<p>使用<code class="gatsby-code-text">className</code>属性指定一个CSS类。这个特性适用于所有的常规DOM节点和SVG元素，比如<code class="gatsby-code-text">&lt;div&gt;</code>，<code class="gatsby-code-text">&lt;a&gt;</code>和其它的元素。</p>\n<p>如果你在React中使用Web组件（这是一种不常见的使用方式），请使用<code class="gatsby-code-text">class</code>属性来代替。</p>\n<h3 id="dangerouslysetinnerhtml"><a href="#dangerouslysetinnerhtml" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>dangerouslySetInnerHTML</h3>\n<p><code class="gatsby-code-text">dangerouslySetInnerHTML</code>是React提供的替换浏览器DOM中的<code class="gatsby-code-text">innerHTML</code>接口的一个函数。一般而言，使用JS代码设置HTML文档的内容是危险的，因为这样很容易把你的用户信息暴露给<a href="https://en.wikipedia.org/wiki/Cross-site_scripting">跨站脚本</a>攻击.所以，你虽然可以直接在React中设置html的内容，但你要使用 <code class="gatsby-code-text">dangerouslySetInnerHTML</code> 并向该函数传递一个含有<code class="gatsby-code-text">__html</code>键的对象，用来提醒你自己这样做很危险。例如：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">createMarkup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>__html<span class="token punctuation">:</span> <span class="token string">\'First &amp;middot; Second\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">createMarkup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="htmlfor"><a href="#htmlfor" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>htmlFor</h3>\n<p>因为<code class="gatsby-code-text">for</code>是在javascript中的一个保留字，React元素使用 <code class="gatsby-code-text">htmlFor</code>代替。</p>\n<h3 id="onchange"><a href="#onchange" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>onChange</h3>\n<p><code class="gatsby-code-text">onChange</code>事件的行为正如你所期望的：无论一个表单字段何时发生变化，这个事件都会被触发。我们故意不使用浏览器已有的默认行为，因为<code class="gatsby-code-text">onChange</code>在浏览器中的行为和名字不相称，React依靠这个事件实时处理用户输入。</p>\n<h3 id="selected"><a href="#selected" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>selected</h3>\n<p><code class="gatsby-code-text">selected</code>属性被<code class="gatsby-code-text">&lt;option&gt;</code>组件支持。你可以使用该属性设定组件是否被选择。这对构建受控组件很有用。</p>\n<h3 id="style"><a href="#style" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>style</h3>\n<blockquote>\n<p>Note</p>\n<p>Some examples in the documentation use <code class="gatsby-code-text">style</code> for convenience, but <strong>使用<code class="gatsby-code-text">style</code> 属性作为样式化元素的主要手段一般是不推荐的。</strong>In most cases, <a href="#classname"><code class="gatsby-code-text">className</code></a> should be used to reference classes defined in an external CSS stylesheet. <code class="gatsby-code-text">style</code> is most often used in React applications to add dynamically-computed styles at render time. See also <a href="/docs/faq-styling.html">FAQ: Styling and CSS</a>.</p>\n</blockquote>\n<p><code class="gatsby-code-text">style</code>属性接受一个JavaScript对象，其属性用小驼峰命名法命名，而不是接受CSS字符串。这和DOM中<code class="gatsby-code-text">style</code> JavaScript 属性是一致性的，是更高效的，而且能够防止XSS的安全漏洞。例如：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> divStyle <span class="token operator">=</span> <span class="token punctuation">{</span>\n  color<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n  backgroundImage<span class="token punctuation">:</span> <span class="token string">\'url(\'</span> <span class="token operator">+</span> imgUrl <span class="token operator">+</span> <span class="token string">\')\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">HelloWorldComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>divStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Hello World<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>注意样式不会自动补齐前缀。为了支持旧的浏览器，你需要手动提供相关的样式属性：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> divStyle <span class="token operator">=</span> <span class="token punctuation">{</span>\n  WebkitTransition<span class="token punctuation">:</span> <span class="token string">\'all\'</span><span class="token punctuation">,</span> <span class="token comment">// note the capital \'W\' here</span>\n  msTransition<span class="token punctuation">:</span> <span class="token string">\'all\'</span> <span class="token comment">// \'ms\' is the only lowercase vendor prefix</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">ComponentWithTransition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>divStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>This should work cross<span class="token operator">-</span>browser<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>样式key使用小驼峰命名法是为了从JS中访问DOM节点的属性保持一致性（例如 <code class="gatsby-code-text">node.style.backgroundImage</code>）。供应商前缀<a href="http://www.andismith.com/blog/2012/02/modernizr-prefixed/">除了<code class="gatsby-code-text">ms</code></a>，都应该以大写字母开头。这就是为什么<code class="gatsby-code-text">WebkitTransition</code>有一个大写字母<code class="gatsby-code-text">W</code>。</p>\n<p>React将自动添加一个”px”后缀到某些数字内联样式属性。如果你希望使用不同于”px”的其他单位，指定值为带渴望单位的字符串。例如：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// Result style: \'10px\'</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  Hello World<span class="token operator">!</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token comment">// Result style: \'10%\'</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token string">\'10%\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  Hello World<span class="token operator">!</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>不是所有样式属性被转化为像素字符串，尽管如此。某些个保持无单位(例如 <code class="gatsby-code-text">zoom</code>, <code class="gatsby-code-text">order</code>, <code class="gatsby-code-text">flex</code>)。A complete list of 无单位属性 can be seen <a href="https://github.com/facebook/react/blob/4131af3e4bf52f3a003537ec95a1655147c81270/src/renderers/dom/shared/CSSProperty.js#L15-L59">here</a>.</p>\n<h3 id="suppresscontenteditablewarning"><a href="#suppresscontenteditablewarning" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>suppressContentEditableWarning</h3>\n<p>一般来说，当一个拥有子节点的元素被标记为<code class="gatsby-code-text">contentEditable</code>时，React会发出一个警告信息，因为此时<code class="gatsby-code-text">contentEditable</code>是无效的。这个属性会触发这样的警告信息。一般不要使用这个属性，除非你要构建一个类似<a href="https://facebook.github.io/draft-js/">Draft.js</a>这样需要手动处理<code class="gatsby-code-text">contentEditable</code>属性的库。</p>\n<h3 id="value"><a href="#value" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>value</h3>\n<p><code class="gatsby-code-text">value</code>属性受到<code class="gatsby-code-text">&lt;input&gt;</code> 和 <code class="gatsby-code-text">&lt;textarea&gt;</code> 组件的支持。你可以使用它设置组件的值。这对构建受控组件非常有用。<code class="gatsby-code-text">defaultValue</code>属性对应的是非受控组件的属性，用来设置组件第一次装载时的值。</p>\n<h2 id="所有受支持的html属性"><a href="#%E6%89%80%E6%9C%89%E5%8F%97%E6%94%AF%E6%8C%81%E7%9A%84html%E5%B1%9E%E6%80%A7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>所有受支持的HTML属性</h2>\n<p>As of React 16, 任何标准的<a href="/blog/2017/09/08/dom-attributes-in-react-16.html">或自定义的</a> DOM属性都被充分支持。</p>\n<p>React 总是提供一个以 JavaScript为中心的API给DOM。因为React组件对于自定义和DOM相关的属性都经常采用。React使用小驼峰约定，正如DOM API：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">tabIndex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>      <span class="token comment">// Just like node.tabIndex DOM API</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Button<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> <span class="token comment">// Just like node.className DOM API</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">readOnly</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>  <span class="token comment">// Just like node.readOnly DOM API</span>\n</code></pre>\n      </div>\n<p>这些属性的工作类似于对应的HTML属性，除了上述文档的特例。</p>\n<p>Some of the DOM attributes supported by React include:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">accept acceptCharset accessKey action allowFullScreen alt async autoComplete\nautoFocus autoPlay capture cellPadding cellSpacing challenge charSet checked\ncite classID className colSpan cols content contentEditable contextMenu controls\ncontrolsList coords crossOrigin data dateTime default defer dir disabled\ndownload draggable encType form formAction formEncType formMethod formNoValidate\nformTarget frameBorder headers height hidden high href hrefLang htmlFor\nhttpEquiv icon id inputMode integrity is keyParams keyType kind label lang list\nloop low manifest marginHeight marginWidth max maxLength media mediaGroup method\nmin minLength multiple muted name noValidate nonce open optimum pattern\nplaceholder poster preload profile radioGroup readOnly rel required reversed\nrole rowSpan rows sandbox scope scoped scrolling seamless selected shape size\nsizes span spellCheck src srcDoc srcLang srcSet start step style summary\ntabIndex target title type useMap value width wmode wrap</code></pre>\n      </div>\n<p>Similarly, all SVG attributes are fully supported:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">accentHeight accumulate additive alignmentBaseline allowReorder alphabetic\namplitude arabicForm ascent attributeName attributeType autoReverse azimuth\nbaseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight\nclip clipPath clipPathUnits clipRule colorInterpolation\ncolorInterpolationFilters colorProfile colorRendering contentScriptType\ncontentStyleType cursor cx cy d decelerate descent diffuseConstant direction\ndisplay divisor dominantBaseline dur dx dy edgeMode elevation enableBackground\nend exponent externalResourcesRequired fill fillOpacity fillRule filter\nfilterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize\nfontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy\ng1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef\ngradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic\nimageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength\nkerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor\nlimitingConeAngle local markerEnd markerHeight markerMid markerStart\nmarkerUnits markerWidth mask maskContentUnits maskUnits mathematical mode\nnumOctaves offset opacity operator order orient orientation origin overflow\noverlinePosition overlineThickness paintOrder panose1 pathLength\npatternContentUnits patternTransform patternUnits pointerEvents points\npointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits\nr radius refX refY renderingIntent repeatCount repeatDur requiredExtensions\nrequiredFeatures restart result rotate rx ry scale seed shapeRendering slope\nspacing specularConstant specularExponent speed spreadMethod startOffset\nstdDeviation stemh stemv stitchTiles stopColor stopOpacity\nstrikethroughPosition strikethroughThickness string stroke strokeDasharray\nstrokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity\nstrokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor\ntextDecoration textLength textRendering to transform u1 u2 underlinePosition\nunderlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic\nvHanging vIdeographic vMathematical values vectorEffect version vertAdvY\nvertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing\nwritingMode x x1 x2 xChannelSelector xHeight xlinkActuate xlinkArcrole\nxlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlns xmlnsXlink xmlBase\nxmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan</code></pre>\n      </div>\n<p>You may also use custom attributes as long as they’re fully lowercase.</p>',frontmatter:{title:"DOM Elements",next:null,prev:null},fields:{path:"docs/reference-dom-elements.md",slug:"docs/dom-elements.html"}}},pathContext:{slug:"docs/dom-elements.html"}}}});
//# sourceMappingURL=path---docs-dom-elements-html-4fffe79c23cd6029ea3a.js.map