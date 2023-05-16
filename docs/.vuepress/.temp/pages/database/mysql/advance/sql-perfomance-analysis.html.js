export const data = JSON.parse("{\"key\":\"v-3174569a\",\"path\":\"/database/mysql/advance/sql-perfomance-analysis.html\",\"title\":\"MySQL进阶 - SQL性能分析\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":8,\"description\":\"MySQL进阶 - SQL性能分析 SQL执行频率 MySQL客户端连接成功后，通过 SHOW [session | global] status 命令可以查看服务器状态信息。 通过如下指令，可以查看当前数据库的INSERT、SELECT、UPDATE、DELETE操作的访问频次： SHOW GLOBAL STATUS LIKE \\\"Com_______\\\";\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://www.codermast.com/database/mysql/advance/sql-perfomance-analysis.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"CoderMast编程学习笔记\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"MySQL进阶 - SQL性能分析\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"MySQL进阶 - SQL性能分析 SQL执行频率 MySQL客户端连接成功后，通过 SHOW [session | global] status 命令可以查看服务器状态信息。 通过如下指令，可以查看当前数据库的INSERT、SELECT、UPDATE、DELETE操作的访问频次： SHOW GLOBAL STATUS LIKE \\\"Com_______\\\";\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"CoderMast\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"MySQL进阶 - SQL性能分析\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"CoderMast\\\",\\\"url\\\":\\\"https://www.codermast.com\\\",\\\"email\\\":\\\"codermast@qq.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"SQL执行频率\",\"slug\":\"sql执行频率\",\"link\":\"#sql执行频率\",\"children\":[]},{\"level\":2,\"title\":\"慢查询日志\",\"slug\":\"慢查询日志\",\"link\":\"#慢查询日志\",\"children\":[]},{\"level\":2,\"title\":\"Profile分析\",\"slug\":\"profile分析\",\"link\":\"#profile分析\",\"children\":[]},{\"level\":2,\"title\":\"explain执行计划\",\"slug\":\"explain执行计划\",\"link\":\"#explain执行计划\",\"children\":[]}],\"readingTime\":{\"minutes\":3.89,\"words\":1166},\"filePathRelative\":\"database/mysql/advance/sql-perfomance-analysis.md\",\"excerpt\":\"<h1> MySQL进阶 - SQL性能分析</h1>\\n<h2> SQL执行频率</h2>\\n<p>MySQL客户端连接成功后，通过 SHOW [session | global] status 命令可以查看服务器状态信息。</p>\\n<p>通过如下指令，可以查看当前数据库的INSERT、SELECT、UPDATE、DELETE操作的访问频次：</p>\\n<div class=\\\"language-sql line-numbers-mode\\\" data-ext=\\\"sql\\\"><pre class=\\\"language-sql\\\"><code><span class=\\\"token keyword\\\">SHOW</span> <span class=\\\"token keyword\\\">GLOBAL</span> <span class=\\\"token keyword\\\">STATUS</span> <span class=\\\"token operator\\\">LIKE</span> <span class=\\\"token string\\\">\\\"Com_______\\\"</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")

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
