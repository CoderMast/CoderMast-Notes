export const data = JSON.parse("{\"key\":\"v-1b70cad2\",\"path\":\"/dev-tools/docker/docker-object.html\",\"title\":\"Docker - 镜像、容器、仓库\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":5,\"description\":\"Docker - 镜像、容器、仓库 提示 这个章节涉及到 Docker 最核心的知识，也是在使用过程中最常使用到的，需要重点学习。 什么是Docker镜像、容器、仓库？ Docker镜像：镜像是一个只读的模板，其中包含了创建 Docker 容器的说明，可以用来创建 Docker 容器。镜像可以包含操作系统、应用程序、依赖库、配置文件等。 Docker容器：容器是代码的隔离环境。这意味着容器并不直接在操作系统上运行。容器是 Docker 镜像的一个运行实例，可以理解为一个轻量级的虚拟机，用面向对象的思想来看，其就是一个镜像的运行对象。容器包含了运行应用程序所需的所有组件，包括操作系统、应用程序、依赖库等。 Docker仓库：仓库是用来存储和管理 Docker 镜像的地方，类似于代码仓库。Docker 官方提供了 Docker Hub 仓库，可以在其中存储和分享 Docker 镜像。用户也可以自建私有仓库来存储和管理自己的 Docker 镜像。\"},\"headers\":[{\"level\":2,\"title\":\"什么是Docker镜像、容器、仓库？\",\"slug\":\"什么是docker镜像、容器、仓库\",\"link\":\"#什么是docker镜像、容器、仓库\",\"children\":[]},{\"level\":2,\"title\":\"镜像、容器、仓库之间的关系\",\"slug\":\"镜像、容器、仓库之间的关系\",\"link\":\"#镜像、容器、仓库之间的关系\",\"children\":[]},{\"level\":2,\"title\":\"Docker镜像\",\"slug\":\"docker镜像\",\"link\":\"#docker镜像\",\"children\":[{\"level\":3,\"title\":\"镜像列表\",\"slug\":\"镜像列表\",\"link\":\"#镜像列表\",\"children\":[]},{\"level\":3,\"title\":\"查找镜像\",\"slug\":\"查找镜像\",\"link\":\"#查找镜像\",\"children\":[]},{\"level\":3,\"title\":\"拉取镜像\",\"slug\":\"拉取镜像\",\"link\":\"#拉取镜像\",\"children\":[]},{\"level\":3,\"title\":\"删除镜像\",\"slug\":\"删除镜像\",\"link\":\"#删除镜像\",\"children\":[]},{\"level\":3,\"title\":\"更新镜像\",\"slug\":\"更新镜像\",\"link\":\"#更新镜像\",\"children\":[]},{\"level\":3,\"title\":\"生成镜像\",\"slug\":\"生成镜像\",\"link\":\"#生成镜像\",\"children\":[]},{\"level\":3,\"title\":\"镜像标签\",\"slug\":\"镜像标签\",\"link\":\"#镜像标签\",\"children\":[]},{\"level\":3,\"title\":\"镜像导入和导出\",\"slug\":\"镜像导入和导出\",\"link\":\"#镜像导入和导出\",\"children\":[]}]},{\"level\":2,\"title\":\"Docker容器\",\"slug\":\"docker容器\",\"link\":\"#docker容器\",\"children\":[{\"level\":3,\"title\":\"容器启动\",\"slug\":\"容器启动\",\"link\":\"#容器启动\",\"children\":[]},{\"level\":3,\"title\":\"容器查看\",\"slug\":\"容器查看\",\"link\":\"#容器查看\",\"children\":[]},{\"level\":3,\"title\":\"容器再启动\",\"slug\":\"容器再启动\",\"link\":\"#容器再启动\",\"children\":[]},{\"level\":3,\"title\":\"容器停止和重启\",\"slug\":\"容器停止和重启\",\"link\":\"#容器停止和重启\",\"children\":[]},{\"level\":3,\"title\":\"后台模式与进入\",\"slug\":\"后台模式与进入\",\"link\":\"#后台模式与进入\",\"children\":[]},{\"level\":3,\"title\":\"容器导出和导入\",\"slug\":\"容器导出和导入\",\"link\":\"#容器导出和导入\",\"children\":[]},{\"level\":3,\"title\":\"强制停止容器\",\"slug\":\"强制停止容器\",\"link\":\"#强制停止容器\",\"children\":[]},{\"level\":3,\"title\":\"清理停止的容器\",\"slug\":\"清理停止的容器\",\"link\":\"#清理停止的容器\",\"children\":[]},{\"level\":3,\"title\":\"容器别名及操作\",\"slug\":\"容器别名及操作\",\"link\":\"#容器别名及操作\",\"children\":[]},{\"level\":3,\"title\":\"容器错误日志\",\"slug\":\"容器错误日志\",\"link\":\"#容器错误日志\",\"children\":[]}]},{\"level\":2,\"title\":\"Docker仓库\",\"slug\":\"docker仓库\",\"link\":\"#docker仓库\",\"children\":[]}],\"readingTime\":{\"minutes\":6.98,\"words\":2094},\"filePathRelative\":\"dev-tools/docker/docker-object.md\",\"excerpt\":\"<h1> Docker - 镜像、容器、仓库</h1>\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">提示</p>\\n<p>这个章节涉及到 Docker 最核心的知识，也是在使用过程中最常使用到的，需要重点学习。</p>\\n</div>\\n<h2> 什么是Docker镜像、容器、仓库？</h2>\\n<ul>\\n<li>\\n<p>Docker镜像：镜像是一个只读的模板，其中包含了创建 Docker 容器的说明，可以用来创建 Docker 容器。镜像可以包含操作系统、应用程序、依赖库、配置文件等。</p>\\n</li>\\n<li>\\n<p>Docker容器：容器是代码的隔离环境。这意味着容器并不直接在操作系统上运行。容器是 Docker 镜像的一个运行实例，可以理解为一个轻量级的虚拟机，用面向对象的思想来看，其就是一个镜像的运行对象。容器包含了运行应用程序所需的所有组件，包括操作系统、应用程序、依赖库等。</p>\\n</li>\\n<li>\\n<p>Docker仓库：仓库是用来存储和管理 Docker 镜像的地方，类似于代码仓库。Docker 官方提供了 Docker Hub 仓库，可以在其中存储和分享 Docker 镜像。用户也可以自建私有仓库来存储和管理自己的 Docker 镜像。</p>\\n</li>\\n</ul>\",\"autoDesc\":true}")

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
