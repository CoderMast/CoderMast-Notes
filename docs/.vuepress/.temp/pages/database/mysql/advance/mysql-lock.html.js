export const data = JSON.parse("{\"key\":\"v-b012e064\",\"path\":\"/database/mysql/advance/mysql-lock.html\",\"title\":\"MySQL进阶 - 锁\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":19,\"description\":\"MySQL进阶 - 锁 介绍 锁是计算机协调多个进程或线程并发访问某一资源的机制。在数据库中，除了传统的计算机资源(CPU、RAM、I/O)的争用以外，数据也是一种供许多用户共享的资源。如何保证数据并发访问的一致性、有效性是所有数据库必须解决的一个问题，锁冲突也是影响数据库并发访问性能的一个重要因素。从这个角度来说，锁对数据库而言显得尤其重要，也更加复杂。 全局锁 介绍 全局锁就是对整个数据库实例加锁，加锁后整个实例就处于只读状态，后续的DML的写语句，DDL语句，已经更新操作的事务提交语句都将被阻塞。\"},\"headers\":[{\"level\":2,\"title\":\"介绍\",\"slug\":\"介绍\",\"link\":\"#介绍\",\"children\":[]},{\"level\":2,\"title\":\"全局锁\",\"slug\":\"全局锁\",\"link\":\"#全局锁\",\"children\":[{\"level\":3,\"title\":\"介绍\",\"slug\":\"介绍-1\",\"link\":\"#介绍-1\",\"children\":[]},{\"level\":3,\"title\":\"一致性数据备份\",\"slug\":\"一致性数据备份\",\"link\":\"#一致性数据备份\",\"children\":[]},{\"level\":3,\"title\":\"特点\",\"slug\":\"特点\",\"link\":\"#特点\",\"children\":[]}]},{\"level\":2,\"title\":\"表级锁\",\"slug\":\"表级锁\",\"link\":\"#表级锁\",\"children\":[{\"level\":3,\"title\":\"介绍\",\"slug\":\"介绍-2\",\"link\":\"#介绍-2\",\"children\":[]},{\"level\":3,\"title\":\"1.表锁\",\"slug\":\"_1-表锁\",\"link\":\"#_1-表锁\",\"children\":[]},{\"level\":3,\"title\":\"2.元数据锁\",\"slug\":\"_2-元数据锁\",\"link\":\"#_2-元数据锁\",\"children\":[]},{\"level\":3,\"title\":\"3.意向锁\",\"slug\":\"_3-意向锁\",\"link\":\"#_3-意向锁\",\"children\":[]}]},{\"level\":2,\"title\":\"行级锁\",\"slug\":\"行级锁\",\"link\":\"#行级锁\",\"children\":[{\"level\":3,\"title\":\"行锁\",\"slug\":\"行锁\",\"link\":\"#行锁\",\"children\":[]},{\"level\":3,\"title\":\"间隙锁\",\"slug\":\"间隙锁\",\"link\":\"#间隙锁\",\"children\":[]},{\"level\":3,\"title\":\"临键锁\",\"slug\":\"临键锁\",\"link\":\"#临键锁\",\"children\":[]}]}],\"readingTime\":{\"minutes\":4.65,\"words\":1396},\"filePathRelative\":\"database/mysql/advance/mysql-lock.md\",\"excerpt\":\"<h1> MySQL进阶 - 锁</h1>\\n<h2> 介绍</h2>\\n<p>锁是计算机协调多个进程或线程并发访问某一资源的机制。在数据库中，除了传统的计算机资源(CPU、RAM、I/O)的争用以外，数据也是一种供许多用户共享的资源。如何保证数据并发访问的一致性、有效性是所有数据库必须解决的一个问题，锁冲突也是影响数据库并发访问性能的一个重要因素。从这个角度来说，锁对数据库而言显得尤其重要，也更加复杂。</p>\\n<h2> 全局锁</h2>\\n<h3> 介绍</h3>\\n<p>全局锁就是对整个数据库实例加锁，加锁后整个实例就处于只读状态，后续的DML的写语句，DDL语句，已经更新操作的事务提交语句都将被阻塞。</p>\",\"autoDesc\":true}")

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
