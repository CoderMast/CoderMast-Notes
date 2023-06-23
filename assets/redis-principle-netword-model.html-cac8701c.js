const e=JSON.parse('{"key":"v-a98569f0","path":"/database/redis/redis-principle-netword-model.html","title":"Redis原理 - Redis网络模型","lang":"zh-CN","frontmatter":{"order":20,"description":"Redis原理 - Redis网络模型 思考 Redis 到底是单线程还是多线程？ 如果仅仅针对 Redis 的核心业务部分（命令处理部分），则是单线程 如果针对 Redis 整体，那么就是多线程 在 Redis 的版本迭代过程中，在两个重要的时间节点上引入了多线程的支持： Redis v4.0：引入多线程异步处理一些耗时较长的任务，例如异步删除命令 unlike Redis v6.0：在核心网络模型中引入多线程，进一步提高对多核 CPU 的利用率","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/database/redis/redis-principle-netword-model.html"}],["meta",{"property":"og:site_name","content":"CoderMast编程桅杆"}],["meta",{"property":"og:title","content":"Redis原理 - Redis网络模型"}],["meta",{"property":"og:description","content":"Redis原理 - Redis网络模型 思考 Redis 到底是单线程还是多线程？ 如果仅仅针对 Redis 的核心业务部分（命令处理部分），则是单线程 如果针对 Redis 整体，那么就是多线程 在 Redis 的版本迭代过程中，在两个重要的时间节点上引入了多线程的支持： Redis v4.0：引入多线程异步处理一些耗时较长的任务，例如异步删除命令 unlike Redis v6.0：在核心网络模型中引入多线程，进一步提高对多核 CPU 的利用率"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-23T07:39:49.000Z"}],["meta",{"property":"article:author","content":"CoderMast"}],["meta",{"property":"article:modified_time","content":"2023-06-23T07:39:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis原理 - Redis网络模型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-23T07:39:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CoderMast\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"思考","slug":"思考","link":"#思考","children":[]},{"level":2,"title":"网络模型","slug":"网络模型","link":"#网络模型","children":[]},{"level":2,"title":"单线程网络模型","slug":"单线程网络模型","link":"#单线程网络模型","children":[]},{"level":2,"title":"多线程网络模型","slug":"多线程网络模型","link":"#多线程网络模型","children":[]},{"level":2,"title":"底层实现","slug":"底层实现","link":"#底层实现","children":[]}],"git":{"createdTime":1687505989000,"updatedTime":1687505989000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":4.59,"words":1376},"filePathRelative":"database/redis/redis-principle-netword-model.md","localizedDate":"2023年6月23日","excerpt":"<h1> Redis原理 - Redis网络模型</h1>\\n<h2> 思考</h2>\\n<p><strong>Redis 到底是单线程还是多线程？</strong></p>\\n<ul>\\n<li>如果仅仅针对 Redis 的核心业务部分（命令处理部分），则是单线程</li>\\n<li>如果针对 Redis 整体，那么就是多线程</li>\\n</ul>\\n<p><strong>在 Redis 的版本迭代过程中，在两个重要的时间节点上引入了多线程的支持：</strong></p>\\n<ul>\\n<li>Redis v4.0：引入多线程异步处理一些耗时较长的任务，例如异步删除命令 unlike</li>\\n<li>Redis v6.0：在核心网络模型中引入多线程，进一步提高对多核 CPU 的利用率</li>\\n</ul>","autoDesc":true}');export{e as data};
