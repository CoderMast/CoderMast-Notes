export const data = JSON.parse("{\"key\":\"v-6dc1af78\",\"path\":\"/database/redis/redis-principle-communication-protocol.html\",\"title\":\"Redis原理 - 通信协议RESP\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":30,\"description\":\"Redis原理 - 通信协议RESP RESP协议 Redis 是一个 CS 架构的软件，通信一般分两步（不包括pipeline 和 PubSub）： 客户端（client）向服务端（server）发送一条命令 服务端解析并执行命令，返回响应结果给客户端 因此客户端发送命令的格式、服务端响应结果的格式必须有一个规范，这个规范就是通信协议。 CS架构 CS架构一般指服务器-客户机。 服务器-客户机，即Client-Server(C/S)结构。C/S结构通常采取两层结构。服务器负责数据的管理，客户机负责完成与用户的交互任务。 百度百科-CS架构\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://www.codermast.com/database/redis/redis-principle-communication-protocol.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"CoderMast编程桅杆\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Redis原理 - 通信协议RESP\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Redis原理 - 通信协议RESP RESP协议 Redis 是一个 CS 架构的软件，通信一般分两步（不包括pipeline 和 PubSub）： 客户端（client）向服务端（server）发送一条命令 服务端解析并执行命令，返回响应结果给客户端 因此客户端发送命令的格式、服务端响应结果的格式必须有一个规范，这个规范就是通信协议。 CS架构 CS架构一般指服务器-客户机。 服务器-客户机，即Client-Server(C/S)结构。C/S结构通常采取两层结构。服务器负责数据的管理，客户机负责完成与用户的交互任务。 百度百科-CS架构\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"CoderMast\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Redis原理 - 通信协议RESP\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"CoderMast\\\",\\\"url\\\":\\\"https://www.codermast.com\\\",\\\"email\\\":\\\"codermast@163.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"RESP协议\",\"slug\":\"resp协议\",\"link\":\"#resp协议\",\"children\":[]},{\"level\":2,\"title\":\"自定义客户端\",\"slug\":\"自定义客户端\",\"link\":\"#自定义客户端\",\"children\":[]}],\"readingTime\":{\"minutes\":3.48,\"words\":1045},\"filePathRelative\":\"database/redis/redis-principle-communication-protocol.md\",\"excerpt\":\"<h1> Redis原理 - 通信协议RESP</h1>\\n<h2> RESP协议</h2>\\n<p>Redis 是一个 CS 架构的软件，通信一般分两步（不包括pipeline 和 PubSub）：</p>\\n<ol>\\n<li>客户端（client）向服务端（server）发送一条命令</li>\\n<li>服务端解析并执行命令，返回响应结果给客户端</li>\\n</ol>\\n<p>因此客户端发送命令的格式、服务端响应结果的格式必须有一个规范，这个规范就是通信协议。</p>\\n<div class=\\\"hint-container note\\\">\\n<p class=\\\"hint-container-title\\\">CS架构</p>\\n<p>CS架构一般指服务器-客户机。 服务器-客户机，即Client-Server(C/S)结构。C/S结构通常采取两层结构。服务器负责数据的管理，客户机负责完成与用户的交互任务。</p>\\n<p><a href=\\\"https://baike.baidu.com/item/%E6%9C%8D%E5%8A%A1%E5%99%A8-%E5%AE%A2%E6%88%B7%E6%9C%BA?fromtitle=CS%E6%9E%B6%E6%9E%84&amp;fromid=7859292&amp;fromModule=lemma_search-box\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">百度百科-CS架构</a></p>\\n</div>\",\"autoDesc\":true}")

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
