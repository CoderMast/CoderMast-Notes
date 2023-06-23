const e=JSON.parse('{"key":"v-79599d42","path":"/database/redis/redis-principle-memery-strategy.html","title":"Redis原理 - 内存策略","lang":"zh-CN","frontmatter":{"order":23,"description":"Redis原理 - 内存策略 Redis 本身是一个典型的 key-value 内存存储数据库，因此所有的 key、value 都保存在之前学习过的 Dict 结构中。不过在其 database 结构体中，有两个 Dict ：一个用来记录 key-value；另外一个用来记录 key-TTL typedef struct redisDb { dict *dict; // 存放所有 key 和 value 的地方 dict *expires; // 存放每一个 key 及其对应的 TTL 存活时间，只包含设置了 TTL 的 key dict *blocking_keys; dict *ready_keys; dict *watched_keys; int id; // Database ID ：0 ~ 15 long long avg_ttl; unsigned long expires_cursor; // expire 检查时在 dict 中抽样的索引位置 list *defrag_later; // 等待碎片整理的 key 列表 } redisDb;","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/database/redis/redis-principle-memery-strategy.html"}],["meta",{"property":"og:site_name","content":"CoderMast编程桅杆"}],["meta",{"property":"og:title","content":"Redis原理 - 内存策略"}],["meta",{"property":"og:description","content":"Redis原理 - 内存策略 Redis 本身是一个典型的 key-value 内存存储数据库，因此所有的 key、value 都保存在之前学习过的 Dict 结构中。不过在其 database 结构体中，有两个 Dict ：一个用来记录 key-value；另外一个用来记录 key-TTL typedef struct redisDb { dict *dict; // 存放所有 key 和 value 的地方 dict *expires; // 存放每一个 key 及其对应的 TTL 存活时间，只包含设置了 TTL 的 key dict *blocking_keys; dict *ready_keys; dict *watched_keys; int id; // Database ID ：0 ~ 15 long long avg_ttl; unsigned long expires_cursor; // expire 检查时在 dict 中抽样的索引位置 list *defrag_later; // 等待碎片整理的 key 列表 } redisDb;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-23T07:39:49.000Z"}],["meta",{"property":"article:author","content":"CoderMast"}],["meta",{"property":"article:modified_time","content":"2023-06-23T07:39:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis原理 - 内存策略\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-23T07:39:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CoderMast\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"删除策略","slug":"删除策略","link":"#删除策略","children":[]},{"level":2,"title":"淘汰策略","slug":"淘汰策略","link":"#淘汰策略","children":[]}],"git":{"createdTime":1687505989000,"updatedTime":1687505989000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":4.01,"words":1202},"filePathRelative":"database/redis/redis-principle-memery-strategy.md","localizedDate":"2023年6月23日","excerpt":"<h1> Redis原理 - 内存策略</h1>\\n<p>Redis 本身是一个典型的 key-value 内存存储数据库，因此所有的 key、value 都保存在之前学习过的 Dict 结构中。不过在其 database 结构体中，有两个 Dict ：一个用来记录 key-value；另外一个用来记录 key-TTL</p>\\n<figure><figcaption></figcaption></figure>\\n<div class=\\"language-c line-numbers-mode\\" data-ext=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token keyword\\">typedef</span> <span class=\\"token keyword\\">struct</span> <span class=\\"token class-name\\">redisDb</span> <span class=\\"token punctuation\\">{</span>\\n    dict <span class=\\"token operator\\">*</span>dict<span class=\\"token punctuation\\">;</span>     <span class=\\"token comment\\">// 存放所有 key 和 value 的地方</span>\\n    dict <span class=\\"token operator\\">*</span>expires<span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">// 存放每一个 key 及其对应的 TTL 存活时间，只包含设置了 TTL 的 key</span>\\n    dict <span class=\\"token operator\\">*</span>blocking_keys<span class=\\"token punctuation\\">;</span>   \\n    dict <span class=\\"token operator\\">*</span>ready_keys<span class=\\"token punctuation\\">;</span>\\n    dict <span class=\\"token operator\\">*</span>watched_keys<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">int</span> id<span class=\\"token punctuation\\">;</span>         <span class=\\"token comment\\">// Database ID ：0 ~ 15</span>\\n    <span class=\\"token keyword\\">long</span> <span class=\\"token keyword\\">long</span> avg_ttl<span class=\\"token punctuation\\">;</span>  \\n    <span class=\\"token keyword\\">unsigned</span> <span class=\\"token keyword\\">long</span> expires_cursor<span class=\\"token punctuation\\">;</span>   <span class=\\"token comment\\">// expire 检查时在 dict 中抽样的索引位置</span>\\n    list <span class=\\"token operator\\">*</span>defrag_later<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 等待碎片整理的 key 列表</span>\\n<span class=\\"token punctuation\\">}</span> redisDb<span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
