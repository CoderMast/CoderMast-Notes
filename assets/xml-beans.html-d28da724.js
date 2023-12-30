const e=JSON.parse('{"key":"v-395adc3d","path":"/spring-series/spring/xml-beans.html","title":"Spring - 基于XML管理Bean","lang":"zh-CN","frontmatter":{"order":4,"description":"Spring - 基于XML管理Bean 搭建子模块 在使用 XML 管理 Bean 之前，为了防止和之前的项目冲突，我们重新构建一个子模块，叫做 spring6-ioc-xml ，并且引入 beans.xml 文件即可。 获取bean 在通过 xml 方式获取 bean 之前，我们需要先导入对应的配置文件，这里我们是 beans.xml。构建 ApplicationContext 容器。 // 导入 bean 的 xml 配置文件 ApplicationContext context = new ClassPathXmlApplicationContext(\\"beans.xml\\");","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/spring-series/spring/xml-beans.html"}],["meta",{"property":"og:site_name","content":"编程桅杆"}],["meta",{"property":"og:title","content":"Spring - 基于XML管理Bean"}],["meta",{"property":"og:description","content":"Spring - 基于XML管理Bean 搭建子模块 在使用 XML 管理 Bean 之前，为了防止和之前的项目冲突，我们重新构建一个子模块，叫做 spring6-ioc-xml ，并且引入 beans.xml 文件即可。 获取bean 在通过 xml 方式获取 bean 之前，我们需要先导入对应的配置文件，这里我们是 beans.xml。构建 ApplicationContext 容器。 // 导入 bean 的 xml 配置文件 ApplicationContext context = new ClassPathXmlApplicationContext(\\"beans.xml\\");"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-30T12:28:58.000Z"}],["meta",{"property":"article:author","content":"CoderMast"}],["meta",{"property":"article:modified_time","content":"2023-12-30T12:28:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring - 基于XML管理Bean\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-30T12:28:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CoderMast\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"搭建子模块","slug":"搭建子模块","link":"#搭建子模块","children":[]},{"level":2,"title":"获取bean","slug":"获取bean","link":"#获取bean","children":[]},{"level":2,"title":"依赖注入","slug":"依赖注入","link":"#依赖注入","children":[{"level":3,"title":"Set注入","slug":"set注入","link":"#set注入","children":[]},{"level":3,"title":"构造器注入","slug":"构造器注入","link":"#构造器注入","children":[]}]},{"level":2,"title":"数据赋值","slug":"数据赋值","link":"#数据赋值","children":[{"level":3,"title":"特殊值赋值","slug":"特殊值赋值","link":"#特殊值赋值","children":[]},{"level":3,"title":"对象类型属性赋值","slug":"对象类型属性赋值","link":"#对象类型属性赋值","children":[]},{"level":3,"title":"数组类型属性赋值","slug":"数组类型属性赋值","link":"#数组类型属性赋值","children":[]},{"level":3,"title":"集合类型属性赋值","slug":"集合类型属性赋值","link":"#集合类型属性赋值","children":[]}]},{"level":2,"title":"P命名空间","slug":"p命名空间","link":"#p命名空间","children":[]},{"level":2,"title":"引入外部属性文件","slug":"引入外部属性文件","link":"#引入外部属性文件","children":[]},{"level":2,"title":"Bean的作用域","slug":"bean的作用域","link":"#bean的作用域","children":[]},{"level":2,"title":"Bean生命周期","slug":"bean生命周期","link":"#bean生命周期","children":[]},{"level":2,"title":"FactoryBean","slug":"factorybean","link":"#factorybean","children":[]},{"level":2,"title":"基于xml自动装配","slug":"基于xml自动装配","link":"#基于xml自动装配","children":[]}],"git":{"createdTime":1703861705000,"updatedTime":1703939338000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":2}]},"readingTime":{"minutes":19.72,"words":5917},"filePathRelative":"spring-series/spring/xml-beans.md","localizedDate":"2023年12月29日","excerpt":"<h1> Spring - 基于XML管理Bean</h1>\\n<h2> 搭建子模块</h2>\\n<p>在使用 XML 管理 Bean 之前，为了防止和之前的项目冲突，我们重新构建一个子模块，叫做 spring6-ioc-xml ，并且引入 beans.xml 文件即可。</p>\\n<h2> 获取bean</h2>\\n<p>在通过 xml 方式获取 bean 之前，我们需要先导入对应的配置文件，这里我们是 beans.xml。构建 ApplicationContext 容器。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">// 导入 bean 的 xml 配置文件</span>\\n<span class=\\"token class-name\\">ApplicationContext</span> context <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">ClassPathXmlApplicationContext</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"beans.xml\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
