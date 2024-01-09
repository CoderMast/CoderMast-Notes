export const data = JSON.parse("{\"key\":\"v-13f32783\",\"path\":\"/database/mysql/transaction.html\",\"title\":\"MySQL基础 - 事务\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":6,\"description\":\"MySQL基础 - 事务 事务是一组操作的集合，他是一个不可分隔的工作单位，事务会把所有的操作作为一个整体一起向系统提交或者撤销操作请求，即这些操作要么同时成功，要么同时失败。 事务操作 查看/设置事务提交方式 SELECT @@autocommit; SET @@autocommit = 0;\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://www.codermast.com/database/mysql/transaction.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"CoderMast编程桅杆\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"MySQL基础 - 事务\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"MySQL基础 - 事务 事务是一组操作的集合，他是一个不可分隔的工作单位，事务会把所有的操作作为一个整体一起向系统提交或者撤销操作请求，即这些操作要么同时成功，要么同时失败。 事务操作 查看/设置事务提交方式 SELECT @@autocommit; SET @@autocommit = 0;\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"CoderMast\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"MySQL基础 - 事务\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"CoderMast\\\",\\\"url\\\":\\\"https://www.codermast.com\\\",\\\"email\\\":\\\"codermast@163.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"事务操作\",\"slug\":\"事务操作\",\"link\":\"#事务操作\",\"children\":[]},{\"level\":2,\"title\":\"事务的四大特性\",\"slug\":\"事务的四大特性\",\"link\":\"#事务的四大特性\",\"children\":[]},{\"level\":2,\"title\":\"事务并发问题\",\"slug\":\"事务并发问题\",\"link\":\"#事务并发问题\",\"children\":[]},{\"level\":2,\"title\":\"事务的隔离级别\",\"slug\":\"事务的隔离级别\",\"link\":\"#事务的隔离级别\",\"children\":[]}],\"readingTime\":{\"minutes\":2.06,\"words\":619},\"filePathRelative\":\"database/mysql/transaction.md\",\"excerpt\":\"<h1> MySQL基础 - 事务</h1>\\n<p>事务是一组操作的集合，他是一个不可分隔的工作单位，事务会把所有的操作作为一个整体一起向系统提交或者撤销操作请求，即这些操作要么同时成功，要么同时失败。</p>\\n<h2> 事务操作</h2>\\n<ul>\\n<li>查看/设置事务提交方式</li>\\n</ul>\\n<div class=\\\"language-sql line-numbers-mode\\\" data-ext=\\\"sql\\\"><pre class=\\\"language-sql\\\"><code><span class=\\\"token keyword\\\">SELECT</span> @<span class=\\\"token variable\\\">@autocommit</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token keyword\\\">SET</span> @<span class=\\\"token variable\\\">@autocommit</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">0</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
