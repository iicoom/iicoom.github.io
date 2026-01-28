import{_ as s,c as a,o as n,b2 as i}from"./chunks/framework.BRCYMVIo.js";const m=JSON.parse('{"title":"修改iframe内部元素的样式","description":"修改iframe内部元素的样式","frontmatter":{"title":"修改iframe内部元素的样式","head":[["meta",{"name":"description","content":"修改iframe内部元素的样式"}],["meta",{"name":"keywords","content":"iframe,样式修改"}]],"layout":"doc"},"headers":[],"relativePath":"frontend/iframe.md","filePath":"frontend/iframe.md","lastUpdated":1707141590000}'),e={name:"frontend/iframe.md"},t=i(`<h1 id="修改iframe内部元素的样式" tabindex="-1">修改iframe内部元素的样式 <a class="header-anchor" href="#修改iframe内部元素的样式" aria-label="Permalink to &quot;修改iframe内部元素的样式&quot;">​</a></h1><h2 id="htmliframeelement-contentdocument" tabindex="-1">HTMLIFrameElement.contentDocument <a class="header-anchor" href="#htmliframeelement-contentdocument" aria-label="Permalink to &quot;HTMLIFrameElement.contentDocument&quot;">​</a></h2><p>使用这个方法获取页面iframe中的dom对象，注意可能会有下面两种结果：</p><ul><li>如果iframe和它的父级在同一个域名下，那么这个方法返回document（是一个嵌套的浏览器上下文环境）</li><li>如果iframe和它的父级不在同一个域名下，那么这个方法返回null</li></ul><p>有了上面的这个原则，我们就知道在不跨域的情况下我们能够更容易的修改iframe内部元素的样式，跨域情况则无法获取到iframe内部的元素，只能通过其他方式来达到目的（下面会介绍），首先来看下不跨域是怎样做的。</p><h2 id="不跨域修改iframe中元素的样式" tabindex="-1">不跨域修改iframe中元素的样式 <a class="header-anchor" href="#不跨域修改iframe中元素的样式" aria-label="Permalink to &quot;不跨域修改iframe中元素的样式&quot;">​</a></h2><h3 id="方式1-直接获取到元素修改" tabindex="-1">方式1：直接获取到元素修改 <a class="header-anchor" href="#方式1-直接获取到元素修改" aria-label="Permalink to &quot;方式1：直接获取到元素修改&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> iframeDocument </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementsByTagName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;iframe&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].contentDocument;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">iframeDocument.body.style.backgroundColor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;blue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// This would turn the iframe blue.</span></span></code></pre></div><p>通过上面的操作，把iframe中body的背景色修改为“blue”</p><h3 id="方式2-在iframe的head中插入样式表" tabindex="-1">方式2：在iframe的head中插入样式表 <a class="header-anchor" href="#方式2-在iframe的head中插入样式表" aria-label="Permalink to &quot;方式2：在iframe的head中插入样式表&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 页面上有一个id为i1的iframe，它嵌入的是同源的文件 child.html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">iframe</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;i1&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./child.html&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> frameborder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100%&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;400&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">iframe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 借助jQuery在iframe加载后，向其内部插入style.css</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$(&#39;#i1&#39;).load(function () {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    let cssLink = document.createElement(&quot;link&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cssLink.href = &quot;style.css&quot;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cssLink.rel = &quot;stylesheet&quot;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cssLink.type = &quot;text/css&quot;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    $(&#39;#i1&#39;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        .contents().find(&quot;head&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        .append($(&#39;&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stylesheet&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/css&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;style.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&#39;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// style.css</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">body {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    background-color: aqua;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>这样我们就修改了iframe中body的背景色。</p><h2 id="跨域修改iframe中元素的样式" tabindex="-1">跨域修改iframe中元素的样式 <a class="header-anchor" href="#跨域修改iframe中元素的样式" aria-label="Permalink to &quot;跨域修改iframe中元素的样式&quot;">​</a></h2><p>使用到的方法如下：</p><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage" target="_blank" rel="noreferrer">Window.postMessage()</a></li><li>window.addEventListener(&quot;message&quot;,cb()）</li></ul><p>父级页面中引入了一个不同域名下的iframe，第一，需要在父级页面发送信息，第二，在iframe页面内监听并处理信息，来间接的修改样式。这是为了保证跨域通信的安全，详细内容参考 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage" target="_blank" rel="noreferrer">这里</a>。</p><p>下面介绍具体做法： 父级页面引入了一个跨域的iframe，id为i3</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;iframe id=&quot;i3&quot; src=&quot;./cross.html&quot; onload=&quot;load()&quot;&gt;&lt;/iframe&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在它加载完成后，执行下面的方法</span></span>
<span class="line"><span>function load() {</span></span>
<span class="line"><span>    console.log(&#39;loaded&#39;)</span></span>
<span class="line"><span>    activateTheme(&quot;light&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这里我们封装了一个activateTheme方法，方便后边复用，作用是修改iframe内部的主题颜色</span></span>
<span class="line"><span>function activateTheme(theme) {</span></span>
<span class="line"><span>    var iframe = document.getElementById(&quot;i3&quot;);</span></span>
<span class="line"><span>    if (iframe &amp;&amp; iframe.contentWindow) {</span></span>
<span class="line"><span>        iframe.contentWindow.postMessage(theme, &quot;*&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>当iframe加载完成后，我们向它内部传递了activateTheme(&quot;light&quot;);浅色主题的消息，下面看下它内部如何接收并做出响应：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// cross.html</span></span>
<span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;child&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>        body,</span></span>
<span class="line"><span>        body.theme-light {</span></span>
<span class="line"><span>            background-color: #ededed;</span></span>
<span class="line"><span>            padding: 1rem;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        body.theme-dark {</span></span>
<span class="line"><span>            background-color: #444;</span></span>
<span class="line"><span>            color: #fff;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        window.addEventListener(&quot;message&quot;,</span></span>
<span class="line"><span>            function (event) {</span></span>
<span class="line"><span>                if (event.origin === window.location.origin) {</span></span>
<span class="line"><span>                    console.log(event.data)</span></span>
<span class="line"><span>                    document.body.classList = []</span></span>
<span class="line"><span>                    document.body.classList.add(\`theme-\${event.data}\`)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }, false</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>可以看出，我们在接收到父级传来的消息，根据消息的内容来修改了cross.html body的背景色。并且在这里我们可以做一下是否同源的安全校验。</p><blockquote><p>到这里我们可以得出一个结论：如果你嵌入的iframe页面和父级不是同一域下，而且当你可以在iframe页面中监听事件，这样你才能修改它内部的样式，否则无法修改。</p></blockquote>`,22),p=[t];function l(h,o,r,k,d,c){return n(),a("div",null,p)}const g=s(e,[["render",l]]);export{m as __pageData,g as default};
