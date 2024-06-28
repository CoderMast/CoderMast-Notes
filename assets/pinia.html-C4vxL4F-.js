import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as l,c as r,d as u,w as a,a as p,b as n,e as s}from"./app-CDVWaJmN.js";const d={},k=p('<h1 id="_8-pinia" tabindex="-1"><a class="header-anchor" href="#_8-pinia"><span>8. Pinia</span></a></h1><div class="hint-container warning"><p class="hint-container-title">开始之前</p><p>在正式开始介绍 Pinia 之前，请先思考一下，你是否在日常开发中或者你的需求中遇到如下问题？</p><ul><li>不同 Vue 组件中的数据需要共享</li><li>有些数据或方法需要全局访问</li></ul><p>这样的需求该如何解决呢？答案是使用 <strong>Pinia</strong> ！</p></div><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span><strong>介绍</strong></span></a></h2><p>Pinia 是一个专门为 Vue 3 的专属状态管理库，它允许你跨组件或页面共享状态，提供了一种简单、直观和类型安全的方式来管理你的应用程序的状态。Pinia 的设计理念是结合了 Vue 3 的 组合式 API (Composition API) 和 TypeScript 的类型系统，以提供现代化和优雅的状态管理解决方案。</p><div class="hint-container important"><p class="hint-container-title">为什么不使用 Vuex 而使用 Pinia？</p><ol><li><p>Vuex 主要为 Vue2 设计的，而 Pinia 是基于 Vue3 的 组合式 API 风格设计，这使得在 Vue3 项目的开发时更灵活、更直观。</p></li><li><p>Pinia 是使用 TypeScript 编写的，提供了很好的类型推断和类型安全，可以在编译时捕获到许多常见的类型错误，避免了在运行时出现一些难以调试的问题。</p></li><li><p>Pinia 是基于 Vue3 的响应式系统构建的，而且会优化更新过程，只更新需要更新的部分，以提高性能和效率。</p></li><li><p>Pina 提供了完善的异步操作支持，可以在 Action 中执行异步操作，并且能确保操作的正确执行顺序和结果。</p></li><li><p>最重要的一点，正如 Pinia 官网所述，Pinia 更加<strong>简单</strong>、<strong>直观</strong>，<strong>所见即所得</strong>，<strong>所写即所得</strong>。</p></li></ol></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span><strong>安装</strong></span></a></h2><p>在使用 Pinia 之前，请先安装 Pinia。在项目的根目录下执行对应的如下指令，即可安装 Pinia</p>',7),m=n("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` pinia
`)])])],-1),v=n("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"install"),s(` pinia
`)])])],-1),g=n("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` pinia
`)])])],-1),b=p(`<div class="hint-container tip"><p class="hint-container-title">提示：如果你的应用使用的 Vue 版本低于 2.7，你还需要安装组合式 API 包：@vue/composition-api</p></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span><strong>使用</strong></span></a></h2><p>Pinia 存储数据是使用 store 来实现的，store 中的数据可以全局访问，以此来实现组件之间的数据共享问题。一般关于 Store 相关的内容将其放在 Vue 项目的 <code>src/store/</code> 目录下。</p><p><code>Store</code>是一个保存：<strong>状态</strong>、<strong>业务逻辑</strong> 的实体，每个组件都可以<strong>读取</strong>、<strong>写入</strong>它。</p><p>它有三个概念：<code>state</code>、<code>getter</code>、<code>action</code>，可以看做是组件中的： <code>data</code>、 <code>computed</code> 和 <code>methods</code>。</p><div class="hint-container important"><p class="hint-container-title">如果你学过 Java，可以将其看做是一个公开的静态类，所有的属性和方法都是静态的。</p></div><h3 id="存储数据" tabindex="-1"><a class="header-anchor" href="#存储数据"><span>存储数据</span></a></h3><p>存储数据之前，需要先新建一个 store 文件，命名为 <code>src/user.ts</code> 来提供存储的位置，内容如下</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 引入 defineStore 用于创建 store</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// 定义并暴露一个 store</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> useUserStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里演示的是 组合式 API 的写法</span>
    <span class="token keyword">let</span> userInfo <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        uid <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        username <span class="token operator">:</span> <span class="token string">&#39;codermast&#39;</span><span class="token punctuation">,</span>
        nickname <span class="token operator">:</span> <span class="token string">&#39;友人&#39;</span>
        url <span class="token operator">:</span> <span class="token string">&quot;https://www.codermast.com/&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 获取用户信息</span>
    <span class="token keyword">function</span> <span class="token function">getUserName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token comment">// 将 username 转为大写</span>
        <span class="token keyword">return</span> userInfo<span class="token punctuation">.</span>value<span class="token punctuation">.</span>username<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 需要手动进行返回暴露，这和 Vue3 中的 setup 有些差别</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> userInfo<span class="token punctuation">,</span> getUserName <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="读取数据" tabindex="-1"><a class="header-anchor" href="#读取数据"><span>读取数据</span></a></h3><p>将数据存储到 Store 中以后可以在 User.vue 这个组件中读取 User 信息。</p><p>在进行解构时，需要使用 <strong>storeToRefs</strong> ，和 Vue 中的 toRefs 类似，都是将数据转化为 ref 对象，方便在模板中使用。直接进行解构时，数据会失去响应式。</p><div class="hint-container warning"><p class="hint-container-title">注意：pinia 提供的 storeToRefs 只会将数据做转换，而 Vue 的 toRefs 会转换 store 中所有的数据。推荐使用 storeToRefs。</p></div><ul><li>直接读取</li></ul><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>ID ：{{ uid }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>UserName ：{{ username }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>NickName ：{{ nickname }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Url ：{{ url }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// 引入 useUserStore</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> useUserStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/store/user&#39;</span>
    
    <span class="token comment">// 调用 useUserStore 得到对应的 store</span>
    <span class="token keyword">const</span> userStore <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 从 userStore 中解构出 userInfo 对象</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span> userInfo <span class="token punctuation">}</span> <span class="token operator">=</span> userStore<span class="token punctuation">;</span>
    <span class="token comment">// 从 userInfo 对象中解构出需要的属性</span>
    <span class="token comment">// let { uid, username, nickname, url } = userInfo;</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span> uid<span class="token punctuation">,</span> username<span class="token punctuation">,</span> nickname<span class="token punctuation">,</span> url <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">storeToRefs</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>getter 读取</li></ul><p>除了直接读取数据以外，与 Vue 中的 <a href="front-end/vue3/computed.html" style="color:CornflowerBlue;">计算属性</a> 类似，可以对数据进行计算，然后返回。</p><p><strong>定义 Getter</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 获取用户信息中的用户名</span>
<span class="token keyword">function</span> <span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> userInfo<span class="token punctuation">.</span>username<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用 Getter</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 引入 useUserStore</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useUserStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/store/user&#39;</span>

<span class="token comment">// 调用 useUserStore 得到对应的 store</span>
<span class="token keyword">const</span> userStore <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 调用 Getter 方法</span>
userStore<span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// codermast</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改数据" tabindex="-1"><a class="header-anchor" href="#修改数据"><span>修改数据</span></a></h3><p>正如 Pinia 官网所说，Pinia 是符合直觉的 Vue 状态管理库，类型安全、可扩展性以及模块化设计。甚至让你忘记正在使用的是一个状态库。</p><p>Pinia 提供的所有数据，可以像 Vue 组件中原生定义的数据一样，可以直接修改。具体的修改有三种方式。</p><ol><li>直接修改</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 调用 useUserStore 得到对应的 store</span>
<span class="token keyword">const</span> userStore <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 修改 username </span>
userStore<span class="token punctuation">.</span>userInfo<span class="token punctuation">.</span>username <span class="token operator">=</span> <span class="token string">&quot;CoderMast&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>批量修改</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 调用 useUserStore 得到对应的 store</span>
<span class="token keyword">const</span> userStore <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 1. 直接修改 username </span>
userStore<span class="token punctuation">.</span><span class="token function">$patch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    userInfo <span class="token operator">:</span> <span class="token punctuation">{</span>
        username <span class="token operator">:</span> <span class="token string">&quot;CoderMast&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 2. 函数式修改 username</span>
userStore<span class="token punctuation">.</span><span class="token function">$patch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    store<span class="token punctuation">.</span>userInfo<span class="token punctuation">.</span>username <span class="token operator">=</span> <span class="token string">&#39;CoderMast&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">函数式修改时，会传一个 state 的参数，这个参数是 store 的内部状态，可以随意命名，只要与使用时保持一致即可。</p></div><ol start="3"><li>借助<code>action</code>修改</li></ol><p>在组合式 API 风格中，action 即就是 Mathod 方法，可以在方法中编写对应的数据修改规则，从而通过调用这些方法来实现修改数据的效果。</p><ul><li>定义 Action : 在 <code>store/user.ts</code> 中 <code>useUserStore</code> 内部定义，具体写法请参考：<a href="#%E4%BF%AE%E6%94%B9%E6%95%B0%E6%8D%AE">修改数据</a></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">setUserName</span><span class="token punctuation">(</span>newUsername <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. 直接修改</span>
    userInfo<span class="token punctuation">.</span>username <span class="token operator">=</span> newUsername<span class="token punctuation">;</span>

    <span class="token comment">// 2. 使用 $patch 修改</span>
    <span class="token function">$patch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>userInfo<span class="token punctuation">.</span>username <span class="token operator">=</span> newUsername<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用 Action : 在 <code>User.vue</code> 中调用，具体的写法可参考 <a href="#%E8%AF%BB%E5%8F%96%E6%95%B0%E6%8D%AE">读取数据</a></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 引入 useUserStore</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useUserStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/store/user&#39;</span>

<span class="token comment">// 调用 useUserStore 得到对应的 store</span>
<span class="token keyword">const</span> userStore <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 调用 action </span>
userStore<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;CoderMast&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span><strong>部署</strong></span></a></h2><p>如果你想要在生产环境使用 Pinia，需要进行安装和配置。</p><ol><li>安装 Pinia</li></ol><div class="hint-container tip"><p class="hint-container-title">参考本文的 <a href="#安装" style="color:#5864e1;"><b>安装 Pinia 章节</b></a> 即可</p></div><ol start="2"><li>注册 Pinia</li></ol><p>修改 <code>src/main.ts</code> 配置文件</p>`,41),h=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createApp "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" App "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./App.vue'"),s(`

`),n("span",{class:"token comment"},"// 引入createPinia，用于创建pinia "),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createPinia "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'pinia'"),s(`

`),n("span",{class:"token comment"},"// 创建pinia "),s(`
`),n("span",{class:"token keyword"},"const"),s(" pinia "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createPinia"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" app "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createApp"),n("span",{class:"token punctuation"},"("),s("App"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"/// 使用插件 "),s(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("pinia"),n("span",{class:"token punctuation"},")"),s(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'#app'"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("ol",{start:"3"},[n("li",null,"使用 Pinia")],-1),y=n("div",{class:"hint-container important"},[n("p",{class:"hint-container-title"},[s("到此，Pinia 章节就算结束了，本章节的代码演示都以 组合式 API 风格为主，也推荐使用这种方法，如果您想学习选项式，可以参考 "),n("a",{href:"https://www.bilibili.com/video/BV1Za4y1r7KE?p=43",style:{color:"#773fd5"}},[n("b",null,"尚硅谷Vue3入门到实战，最新版vue3+TypeScript前端开发教程")])])],-1);function w(P,S){const i=c("CodeTabs");return l(),r("div",null,[k,u(i,{id:"64",data:[{id:"npm"},{id:"pnpm"},{id:"yarn"}],"tab-id":"pinia"},{title0:a(({value:e,isActive:t})=>[s("npm")]),title1:a(({value:e,isActive:t})=>[s("pnpm")]),title2:a(({value:e,isActive:t})=>[s("yarn")]),tab0:a(({value:e,isActive:t})=>[m]),tab1:a(({value:e,isActive:t})=>[v]),tab2:a(({value:e,isActive:t})=>[g]),_:1}),b,h,f,y])}const x=o(d,[["render",w],["__file","pinia.html.vue"]]),V=JSON.parse('{"path":"/front-end/vue3/pinia.html","title":"8. Pinia","lang":"zh-CN","frontmatter":{"order":8,"description":"8. Pinia 开始之前 在正式开始介绍 Pinia 之前，请先思考一下，你是否在日常开发中或者你的需求中遇到如下问题？ 不同 Vue 组件中的数据需要共享 有些数据或方法需要全局访问 这样的需求该如何解决呢？答案是使用 Pinia ！ 介绍 Pinia 是一个专门为 Vue 3 的专属状态管理库，它允许你跨组件或页面共享状态，提供了一种简单、直观和...","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/front-end/vue3/pinia.html"}],["meta",{"property":"og:site_name","content":"编程笔记"}],["meta",{"property":"og:title","content":"8. Pinia"}],["meta",{"property":"og:description","content":"8. Pinia 开始之前 在正式开始介绍 Pinia 之前，请先思考一下，你是否在日常开发中或者你的需求中遇到如下问题？ 不同 Vue 组件中的数据需要共享 有些数据或方法需要全局访问 这样的需求该如何解决呢？答案是使用 Pinia ！ 介绍 Pinia 是一个专门为 Vue 3 的专属状态管理库，它允许你跨组件或页面共享状态，提供了一种简单、直观和..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-31T02:06:56.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2024-05-31T02:06:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"8. Pinia\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-31T02:06:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"存储数据","slug":"存储数据","link":"#存储数据","children":[]},{"level":3,"title":"读取数据","slug":"读取数据","link":"#读取数据","children":[]},{"level":3,"title":"修改数据","slug":"修改数据","link":"#修改数据","children":[]}]},{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[]}],"git":{"createdTime":1717121216000,"updatedTime":1717121216000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":5.59,"words":1677},"filePathRelative":"front-end/vue3/pinia.md","localizedDate":"2024年5月31日","autoDesc":true,"excerpt":"\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">开始之前</p>\\n<p>在正式开始介绍 Pinia 之前，请先思考一下，你是否在日常开发中或者你的需求中遇到如下问题？</p>\\n<ul>\\n<li>不同 Vue 组件中的数据需要共享</li>\\n<li>有些数据或方法需要全局访问</li>\\n</ul>\\n<p>这样的需求该如何解决呢？答案是使用 <strong>Pinia</strong> ！</p>\\n</div>\\n<h2><strong>介绍</strong></h2>\\n<p>Pinia 是一个专门为 Vue 3 的专属状态管理库，它允许你跨组件或页面共享状态，提供了一种简单、直观和类型安全的方式来管理你的应用程序的状态。Pinia 的设计理念是结合了 Vue 3 的 组合式 API (Composition API) 和 TypeScript 的类型系统，以提供现代化和优雅的状态管理解决方案。</p>"}');export{x as comp,V as data};