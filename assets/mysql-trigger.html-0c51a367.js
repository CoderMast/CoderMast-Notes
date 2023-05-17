const e=JSON.parse('{"key":"v-23ccb63e","path":"/database/mysql/advance/mysql-trigger.html","title":"MySQL进阶 - 触发器","lang":"zh-CN","frontmatter":{"order":12,"description":"MySQL进阶 - 触发器 介绍 触发器是于表有关的数据库对象，指在insert、update、delete之前或者之后，触发并执行触发器中定义的SQL语句集合。触发器的这种特性可以与协助应用在数据库端确保数据的完整性，日志记录，数据校验等操作。 使用别名OLD和NEW来引用触发器中发生变化的记录内容，这与其他的数据库是相似的。现在触发器还只支持行级触发，不支持语句级触发。 举例 语句级触发：执行一次SQL，触发器会触发一次，无论影响多少行。 行级触发：如一个SQL语句更新了3行数据，则触发器会触发三次。","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/database/mysql/advance/mysql-trigger.html"}],["meta",{"property":"og:site_name","content":"CoderMast编程学习笔记"}],["meta",{"property":"og:title","content":"MySQL进阶 - 触发器"}],["meta",{"property":"og:description","content":"MySQL进阶 - 触发器 介绍 触发器是于表有关的数据库对象，指在insert、update、delete之前或者之后，触发并执行触发器中定义的SQL语句集合。触发器的这种特性可以与协助应用在数据库端确保数据的完整性，日志记录，数据校验等操作。 使用别名OLD和NEW来引用触发器中发生变化的记录内容，这与其他的数据库是相似的。现在触发器还只支持行级触发，不支持语句级触发。 举例 语句级触发：执行一次SQL，触发器会触发一次，无论影响多少行。 行级触发：如一个SQL语句更新了3行数据，则触发器会触发三次。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-16T15:17:18.000Z"}],["meta",{"property":"article:author","content":"CoderMast"}],["meta",{"property":"article:modified_time","content":"2023-05-16T15:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL进阶 - 触发器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-16T15:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CoderMast\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"类型","slug":"类型","link":"#类型","children":[]},{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[{"level":3,"title":"插入触发器","slug":"插入触发器","link":"#插入触发器","children":[]},{"level":3,"title":"更新触发器","slug":"更新触发器","link":"#更新触发器","children":[]},{"level":3,"title":"删除触发器","slug":"删除触发器","link":"#删除触发器","children":[]}]}],"git":{"createdTime":1681489050000,"updatedTime":1684250238000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":4}]},"readingTime":{"minutes":1.88,"words":565},"filePathRelative":"database/mysql/advance/mysql-trigger.md","localizedDate":"2023年4月14日","excerpt":"<h1> MySQL进阶 - 触发器</h1>\\n<h2> 介绍</h2>\\n<p>触发器是于表有关的数据库对象，指在insert、update、delete之前或者之后，触发并执行触发器中定义的SQL语句集合。触发器的这种特性可以与协助应用在数据库端确保数据的完整性，日志记录，数据校验等操作。</p>\\n<p>使用别名OLD和NEW来引用触发器中发生变化的记录内容，这与其他的数据库是相似的。现在触发器还只支持行级触发，不支持语句级触发。</p>\\n<div class=\\"hint-container note\\">\\n<p class=\\"hint-container-title\\">举例</p>\\n<p>语句级触发：执行一次SQL，触发器会触发一次，无论影响多少行。\\n行级触发：如一个SQL语句更新了3行数据，则触发器会触发三次。</p>\\n</div>","autoDesc":true}');export{e as data};