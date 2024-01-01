const n=JSON.parse('{"key":"v-53cb8d26","path":"/spring-series/spring/spring-aop.html","title":"Spring - 面向切面AOP","lang":"zh-CN","frontmatter":{"order":null,"description":"Spring - 面向切面AOP 场景模拟 还是老规矩，为了避免和之前的项目冲突，我们这里创建一个新的子模块 spring6-aop 声明计算器接口 Calculator public interface Calculator { int add(int i, int j); int sub(int i, int j); int mul(int i, int j); int div(int i, int j); }","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/spring-series/spring/spring-aop.html"}],["meta",{"property":"og:site_name","content":"编程桅杆"}],["meta",{"property":"og:title","content":"Spring - 面向切面AOP"}],["meta",{"property":"og:description","content":"Spring - 面向切面AOP 场景模拟 还是老规矩，为了避免和之前的项目冲突，我们这里创建一个新的子模块 spring6-aop 声明计算器接口 Calculator public interface Calculator { int add(int i, int j); int sub(int i, int j); int mul(int i, int j); int div(int i, int j); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-01T12:30:51.000Z"}],["meta",{"property":"article:author","content":"CoderMast"}],["meta",{"property":"article:modified_time","content":"2024-01-01T12:30:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring - 面向切面AOP\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-01T12:30:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CoderMast\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"场景模拟","slug":"场景模拟","link":"#场景模拟","children":[]}],"git":{"createdTime":1704112251000,"updatedTime":1704112251000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":1.88,"words":563},"filePathRelative":"spring-series/spring/spring-aop.md","localizedDate":"2024年1月1日","excerpt":"<h1> Spring - 面向切面AOP</h1>\\n<h2> 场景模拟</h2>\\n<p>还是老规矩，为了避免和之前的项目冲突，我们这里创建一个新的子模块 <code>spring6-aop</code></p>\\n<ul>\\n<li>声明计算器接口 Calculator</li>\\n</ul>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">Calculator</span> <span class=\\"token punctuation\\">{</span>\\n    \\n    <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> j<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    \\n    <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">sub</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> j<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    \\n    <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">mul</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> j<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    \\n    <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">div</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> j<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    \\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
