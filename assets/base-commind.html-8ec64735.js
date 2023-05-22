const t=JSON.parse('{"key":"v-7a3bd0f3","path":"/database/redis/base/base-commind.html","title":"Redis入门 - 基础通用指令","lang":"zh-CN","frontmatter":{"order":2,"description":"Redis入门 - 基础通用指令 在正式介绍Redis数据结构及其操作指令之前，我们需要先掌握一些最基础的通用指令。 这些都是Redis操作过程中的一些常见指令 指令 描述 keys 查看符合模板的所有key，不建议在⽣产环境设备上使⽤ del 删除⼀个指定的key esists 判断key是否存在 expire 给⼀个key设置有效期，有效期到期时该key会被⾃动删除 ttl 查看⼀个KEY的剩余有效期 quit 退出 shutdown 关闭服务器 select [0-15] 选择指定的数据库","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/database/redis/base/base-commind.html"}],["meta",{"property":"og:site_name","content":"CoderMast编程学习笔记"}],["meta",{"property":"og:title","content":"Redis入门 - 基础通用指令"}],["meta",{"property":"og:description","content":"Redis入门 - 基础通用指令 在正式介绍Redis数据结构及其操作指令之前，我们需要先掌握一些最基础的通用指令。 这些都是Redis操作过程中的一些常见指令 指令 描述 keys 查看符合模板的所有key，不建议在⽣产环境设备上使⽤ del 删除⼀个指定的key esists 判断key是否存在 expire 给⼀个key设置有效期，有效期到期时该key会被⾃动删除 ttl 查看⼀个KEY的剩余有效期 quit 退出 shutdown 关闭服务器 select [0-15] 选择指定的数据库"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-16T15:17:18.000Z"}],["meta",{"property":"article:author","content":"CoderMast"}],["meta",{"property":"article:modified_time","content":"2023-05-16T15:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis入门 - 基础通用指令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-16T15:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CoderMast\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1684250238000,"updatedTime":1684250238000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":0.64,"words":193},"filePathRelative":"database/redis/base/base-commind.md","localizedDate":"2023年5月16日","excerpt":"<h1> Redis入门 - 基础通用指令</h1>\\n<p>在正式介绍Redis数据结构及其操作指令之前，我们需要先掌握一些最基础的通用指令。</p>\\n<p>这些都是Redis操作过程中的一些常见指令</p>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:center\\">指令</th>\\n<th style=\\"text-align:center\\">描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:center\\">keys</td>\\n<td style=\\"text-align:center\\">查看符合模板的所有key，不建议在⽣产环境设备上使⽤</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">del</td>\\n<td style=\\"text-align:center\\">删除⼀个指定的key</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">esists</td>\\n<td style=\\"text-align:center\\">判断key是否存在</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">expire</td>\\n<td style=\\"text-align:center\\">给⼀个key设置有效期，有效期到期时该key会被⾃动删除</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">ttl</td>\\n<td style=\\"text-align:center\\">查看⼀个KEY的剩余有效期</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">quit</td>\\n<td style=\\"text-align:center\\">退出</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">shutdown</td>\\n<td style=\\"text-align:center\\">关闭服务器</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">select [0-15]</td>\\n<td style=\\"text-align:center\\">选择指定的数据库</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};