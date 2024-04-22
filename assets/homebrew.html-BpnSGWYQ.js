import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as r,c as d,b as e,e as a,d as n,a as i}from"./app-uN6JukKr.js";const c="/assets/2024-04-20-20-47-46-SMD61g9A.png",o="/assets/2024-04-20-20-53-35-BdK7oitf.png",p="/assets/2024-04-20-20-58-34-BOOQyPeq.png",h="/assets/2024-04-20-20-59-47-BzcUvzbr.png",u="/assets/2024-04-20-21-01-20-D02mc8VY.png",b="/assets/2024-04-20-21-04-46-CMiJaknO.png",m="/assets/2024-04-20-21-06-08-B6BonSk2.png",v={},g=i('<h1 id="homebrew-教程" tabindex="-1"><a class="header-anchor" href="#homebrew-教程"><span>HomeBrew 教程</span></a></h1><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><div class="hint-container tip"><p class="hint-container-title">官方描述</p><p>Homebrew is the easiest and most flexible way to install the UNIX tools Apple didn’t include with macOS. It can also install software not packaged for your Linux distribution without requiring sudo.</p></div><p>Homebrew 是安装苹果没有包含在 macOS 中的 UNIX 工具的最简单、最灵活的方式。它还可以安装不适合您的 Linux 发行版的软件，而不需要 sudo。</p><p>使用 Homebrew 可以安装 Mac（或Linux）没有预装但你需要的东西。</p><p>总的来说，Homebrew 是一款在 UNIX 平台下的软件安装管理器，又或者包管理器。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><h3 id="官方安装" tabindex="-1"><a class="header-anchor" href="#官方安装"><span>官方安装</span></a></h3>',9),k={class:"hint-container info"},w=e("p",{class:"hint-container-title"},"官方地址",-1),f={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://brew.sh/zh-cn/",target:"_blank",rel:"noopener noreferrer"},_=i(`<ul><li>安装指令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/bin/bash <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="国内镜像" tabindex="-1"><a class="header-anchor" href="#国内镜像"><span>国内镜像</span></a></h3><ul><li>安装指令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/bin/zsh <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>卸载指令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/bin/zsh <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),y={href:"https://gitee.com/cunkai/HomebrewCN",target:"_blank",rel:"noopener noreferrer"},B=i(`<h2 id="常用指令" tabindex="-1"><a class="header-anchor" href="#常用指令"><span>常用指令</span></a></h2><h3 id="更新brew" tabindex="-1"><a class="header-anchor" href="#更新brew"><span>更新brew</span></a></h3><p>定期更新 Brew 可以确保您拥有最新的软件包和版本</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew update 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="搜索软件包" tabindex="-1"><a class="header-anchor" href="#搜索软件包"><span>搜索软件包</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew search package-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>package-name：你想要搜索的软件包名</li></ul><div class="hint-container note"><p class="hint-container-title">例子</p><p>举个例子，如果你想要搜索 Node.js 那么你就可以执行</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew search <span class="token function">node</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><h3 id="安装软件包" tabindex="-1"><a class="header-anchor" href="#安装软件包"><span>安装软件包</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> package-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>package-name : 你想安装的软件包名</li></ul><div class="hint-container note"><p class="hint-container-title">例子</p><p>举个例子，如果你想要安装 Node.js，并且你知道他在 brew 中的软件包名，那么你可以直接使用该指令安装，如果你不知道的话，可以先试用 <code>brew search</code> 指令进行查找，然后再进行安装。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> <span class="token function">node</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><h3 id="查看已安装的软件包" tabindex="-1"><a class="header-anchor" href="#查看已安装的软件包"><span>查看已安装的软件包</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="卸载软件包" tabindex="-1"><a class="header-anchor" href="#卸载软件包"><span>卸载软件包</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew uninstall package-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>package-name：已安装的软件包名</li></ul><div class="hint-container note"><p class="hint-container-title">例子</p><p>卸载掉我们前面安装的 Node.js，可以使用</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew uninstall <span class="token function">node</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><h3 id="查看软件包信息" tabindex="-1"><a class="header-anchor" href="#查看软件包信息"><span>查看软件包信息</span></a></h3><p>使用 info 命令可以查看有关软件包的详细信息，包括其依赖项和链接</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew info package-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>package-name：要查看的软件包名</li></ul><div class="hint-container note"><p class="hint-container-title">例子</p><p>前面我们卸载了 Node.js 这里就不以 Node.js 为例了，查看 MySQL 的信息。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew info mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><h3 id="清理过期的软件包" tabindex="-1"><a class="header-anchor" href="#清理过期的软件包"><span>清理过期的软件包</span></a></h3><p>定期清理不再需要的旧版本和无用的库文件可以释放磁盘空间：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew cheanup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="显示-brew-版本信息" tabindex="-1"><a class="header-anchor" href="#显示-brew-版本信息"><span>显示 Brew 版本信息</span></a></h3><p>查看 homebrew 的版本信息，可以运行</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="hint-container tip"><p class="hint-container-title">提示</p><p>查看一个软件包是否成功安装或成功配置的简单方式就是看能否查看其版本信息。</p></div><h3 id="列出过时的软件包" tabindex="-1"><a class="header-anchor" href="#列出过时的软件包"><span>列出过时的软件包</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew outdated
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="更新软件包" tabindex="-1"><a class="header-anchor" href="#更新软件包"><span>更新软件包</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew upgrade <span class="token punctuation">[</span>package-name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>package-name：软件包名称，可选，未填写默认为所有软件包。</li></ul><h3 id="安装-cask-扩展" tabindex="-1"><a class="header-anchor" href="#安装-cask-扩展"><span>安装 Cask 扩展</span></a></h3><p>Brew Cask 是 Brew 的扩展，用于安装和管理 macOS 应用程序。您可以使用以下命令安装 Cask 扩展：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew tap homebrew/cask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装应用程序" tabindex="-1"><a class="header-anchor" href="#安装应用程序"><span>安装应用程序</span></a></h3><p>使用 Brew Cask 可以轻松安装 macOS 应用程序。例如，要安装 Visual Studio Code：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> visual-studio-code
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看软件包的依赖关系" tabindex="-1"><a class="header-anchor" href="#查看软件包的依赖关系"><span>查看软件包的依赖关系</span></a></h3><p>要查看软件包的依赖关系，可以使用 deps 命令。这将列出软件包所依赖的其他软件包。例如：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew deps package_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看软件包的可选依赖关系" tabindex="-1"><a class="header-anchor" href="#查看软件包的可选依赖关系"><span>查看软件包的可选依赖关系</span></a></h3><p>有些软件包具有可选的依赖关系，可以使用 options 命令查看这些选项。例如：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew options package_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看已安装软件包的版本历史" tabindex="-1"><a class="header-anchor" href="#查看已安装软件包的版本历史"><span>查看已安装软件包的版本历史</span></a></h3><p>使用 versions 命令可以查看已安装软件包的版本历史。这将列出所有可用版本以及它们的安装状态。例如：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew versions package_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用-brew-cask-安装-gui-应用程序" tabindex="-1"><a class="header-anchor" href="#使用-brew-cask-安装-gui-应用程序"><span>使用 Brew Cask 安装 GUI 应用程序</span></a></h3><p>使用 Brew Cask 可以轻松安装 macOS GUI 应用程序。例如，要安装 Google Chrome：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> google-chrome
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看-brew-配置信息" tabindex="-1"><a class="header-anchor" href="#查看-brew-配置信息"><span>查看 Brew 配置信息</span></a></h3><p>要查看当前 Brew 配置信息，包括仓库和版本库的位置，可以使用 config 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看-brew-更新日志" tabindex="-1"><a class="header-anchor" href="#查看-brew-更新日志"><span>查看 Brew 更新日志</span></a></h3><p>要查看 Brew 的更新日志，可以使用 log 命令：</p><p>brew log package_name</p><h3 id="查看软件包的安装路径" tabindex="-1"><a class="header-anchor" href="#查看软件包的安装路径"><span>查看软件包的安装路径</span></a></h3><p>使用 ls 命令可以查看特定软件包的安装路径。例如：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew <span class="token function">ls</span> <span class="token parameter variable">--full</span> package_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看本地镜像源" tabindex="-1"><a class="header-anchor" href="#查看本地镜像源"><span>查看本地镜像源</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span><span class="token variable">)</span></span>&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> remote <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看哪些包可以更新" tabindex="-1"><a class="header-anchor" href="#查看哪些包可以更新"><span>查看哪些包可以更新</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew outdated
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="更新包-homebrew-会安装新版本的包-但旧版本依然会保留" tabindex="-1"><a class="header-anchor" href="#更新包-homebrew-会安装新版本的包-但旧版本依然会保留"><span>更新包 Homebrew 会安装新版本的包，但旧版本依然会保留</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew upgrade <span class="token punctuation">[</span>FORMULA<span class="token operator">|</span>CASK<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="清理旧版本和缓存" tabindex="-1"><a class="header-anchor" href="#清理旧版本和缓存"><span>清理旧版本和缓存</span></a></h3><p>brew cleanup # 清理所有包的旧版本<br> brew cleanup [FORMULA ...] # 清理指定包的旧版本<br> brew cleanup -n # 查看可清理的旧版本包，不执行实际操作</p><h3 id="锁定不想更新的包" tabindex="-1"><a class="header-anchor" href="#锁定不想更新的包"><span>锁定不想更新的包</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew pin <span class="token punctuation">[</span>FORMULA <span class="token punctuation">..</span>.<span class="token punctuation">]</span>      <span class="token comment"># 锁定某个包</span>
brew unpin <span class="token punctuation">[</span>FORMULA <span class="token punctuation">..</span>.<span class="token punctuation">]</span>    <span class="token comment"># 取消锁定</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>tips：因为update会一次更新所有的包的，当我们想忽略的时候可以使用这个命令</p><h3 id="软件服务管理" tabindex="-1"><a class="header-anchor" href="#软件服务管理"><span>软件服务管理</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew services list  				<span class="token comment"># 查看使用brew安装的服务列表</span>
brew services run formula<span class="token operator">|</span>--all  	<span class="token comment"># 启动服务（仅启动不注册）</span>
brew services start formula<span class="token operator">|</span>--all  	<span class="token comment"># 启动服务，并注册</span>
brew services stop formula<span class="token operator">|</span>--all   	<span class="token comment"># 停止服务，并取消注册</span>
brew services restart formula<span class="token operator">|</span>--all <span class="token comment"># 重启服务，并注册</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切换镜像源" tabindex="-1"><a class="header-anchor" href="#切换镜像源"><span>切换镜像源</span></a></h3><p>切换镜像源有三个库要切换：</p><ul><li>brew.git</li><li>homebrew-core.git</li><li>homebrew-bottles</li></ul><ol><li>中科大源</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 替换brew.git:</span>
$ <span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span><span class="token variable">)</span></span>&quot;</span>
$ <span class="token function">git</span> remote set-url origin https://mirrors.ustc.edu.cn/brew.git

<span class="token comment"># 替换homebrew-core.git:</span>
$ <span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span><span class="token variable">)</span></span>/Library/Taps/homebrew/homebrew-core&quot;</span>
$ <span class="token function">git</span> remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git

<span class="token comment"># 替换homebrew-bottles:</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.bash_profile
$ <span class="token builtin class-name">source</span> ~/.bash_profile

<span class="token comment"># 应用生效:</span>
$ brew update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>清华大学源</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 替换brew.git:</span>
$ <span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span><span class="token variable">)</span></span>&quot;</span>
$ <span class="token function">git</span> remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git

<span class="token comment"># 替换homebrew-core.git:</span>
$ <span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span><span class="token variable">)</span></span>/Library/Taps/homebrew/homebrew-core&quot;</span>
$ <span class="token function">git</span> remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git

<span class="token comment"># 替换homebrew-bottles:</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.bash_profile
$ <span class="token builtin class-name">source</span> ~/.bash_profile

<span class="token comment"># 应用生效:</span>
$ brew update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>`,85),H={href:"https://docs.brew.sh/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://zhuanlan.zhihu.com/p/691010258",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.cnblogs.com/FuYingju/p/14342924.html",target:"_blank",rel:"noopener noreferrer"};function O($,z){const s=t("ExternalLinkIcon");return r(),d("div",null,[g,e("div",k,[w,e("ul",null,[e("li",null,[a("官网："),e("a",f,[a("https://brew.sh/"),n(s)])]),e("li",null,[a("中文："),e("a",x,[a("https://brew.sh/zh-cn/"),n(s)])])])]),_,e("ul",null,[e("li",null,[a("Gitee 仓库："),e("a",y,[a("https://gitee.com/cunkai/HomebrewCN"),n(s)])])]),B,e("ul",null,[e("li",null,[a("Homebrew官方文档："),e("a",H,[a("https://docs.brew.sh/"),n(s)])]),e("li",null,[a("知乎文章："),e("a",N,[a("https://zhuanlan.zhihu.com/p/691010258"),n(s)])]),e("li",null,[a("博客园文章："),e("a",q,[a("https://www.cnblogs.com/FuYingju/p/14342924.html"),n(s)])])])])}const S=l(v,[["render",O],["__file","homebrew.html.vue"]]),I=JSON.parse('{"path":"/dev-tools/homebrew.html","title":"HomeBrew 教程","lang":"zh-CN","frontmatter":{"description":"HomeBrew 教程 介绍 官方描述 Homebrew is the easiest and most flexible way to install the UNIX tools Apple didn’t include with macOS. It can also install software not packaged for your L...","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/dev-tools/homebrew.html"}],["meta",{"property":"og:site_name","content":"CoderMast编程桅杆"}],["meta",{"property":"og:title","content":"HomeBrew 教程"}],["meta",{"property":"og:description","content":"HomeBrew 教程 介绍 官方描述 Homebrew is the easiest and most flexible way to install the UNIX tools Apple didn’t include with macOS. It can also install software not packaged for your L..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-20T13:24:14.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2024-04-20T13:24:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HomeBrew 教程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-20T13:24:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"官方安装","slug":"官方安装","link":"#官方安装","children":[]},{"level":3,"title":"国内镜像","slug":"国内镜像","link":"#国内镜像","children":[]}]},{"level":2,"title":"常用指令","slug":"常用指令","link":"#常用指令","children":[{"level":3,"title":"更新brew","slug":"更新brew","link":"#更新brew","children":[]},{"level":3,"title":"搜索软件包","slug":"搜索软件包","link":"#搜索软件包","children":[]},{"level":3,"title":"安装软件包","slug":"安装软件包","link":"#安装软件包","children":[]},{"level":3,"title":"查看已安装的软件包","slug":"查看已安装的软件包","link":"#查看已安装的软件包","children":[]},{"level":3,"title":"卸载软件包","slug":"卸载软件包","link":"#卸载软件包","children":[]},{"level":3,"title":"查看软件包信息","slug":"查看软件包信息","link":"#查看软件包信息","children":[]},{"level":3,"title":"清理过期的软件包","slug":"清理过期的软件包","link":"#清理过期的软件包","children":[]},{"level":3,"title":"显示 Brew 版本信息","slug":"显示-brew-版本信息","link":"#显示-brew-版本信息","children":[]},{"level":3,"title":"列出过时的软件包","slug":"列出过时的软件包","link":"#列出过时的软件包","children":[]},{"level":3,"title":"更新软件包","slug":"更新软件包","link":"#更新软件包","children":[]},{"level":3,"title":"安装 Cask 扩展","slug":"安装-cask-扩展","link":"#安装-cask-扩展","children":[]},{"level":3,"title":"安装应用程序","slug":"安装应用程序","link":"#安装应用程序","children":[]},{"level":3,"title":"查看软件包的依赖关系","slug":"查看软件包的依赖关系","link":"#查看软件包的依赖关系","children":[]},{"level":3,"title":"查看软件包的可选依赖关系","slug":"查看软件包的可选依赖关系","link":"#查看软件包的可选依赖关系","children":[]},{"level":3,"title":"查看已安装软件包的版本历史","slug":"查看已安装软件包的版本历史","link":"#查看已安装软件包的版本历史","children":[]},{"level":3,"title":"使用 Brew Cask 安装 GUI 应用程序","slug":"使用-brew-cask-安装-gui-应用程序","link":"#使用-brew-cask-安装-gui-应用程序","children":[]},{"level":3,"title":"查看 Brew 配置信息","slug":"查看-brew-配置信息","link":"#查看-brew-配置信息","children":[]},{"level":3,"title":"查看 Brew 更新日志","slug":"查看-brew-更新日志","link":"#查看-brew-更新日志","children":[]},{"level":3,"title":"查看软件包的安装路径","slug":"查看软件包的安装路径","link":"#查看软件包的安装路径","children":[]},{"level":3,"title":"查看本地镜像源","slug":"查看本地镜像源","link":"#查看本地镜像源","children":[]},{"level":3,"title":"查看哪些包可以更新","slug":"查看哪些包可以更新","link":"#查看哪些包可以更新","children":[]},{"level":3,"title":"更新包 Homebrew 会安装新版本的包，但旧版本依然会保留","slug":"更新包-homebrew-会安装新版本的包-但旧版本依然会保留","link":"#更新包-homebrew-会安装新版本的包-但旧版本依然会保留","children":[]},{"level":3,"title":"清理旧版本和缓存","slug":"清理旧版本和缓存","link":"#清理旧版本和缓存","children":[]},{"level":3,"title":"锁定不想更新的包","slug":"锁定不想更新的包","link":"#锁定不想更新的包","children":[]},{"level":3,"title":"软件服务管理","slug":"软件服务管理","link":"#软件服务管理","children":[]},{"level":3,"title":"切换镜像源","slug":"切换镜像源","link":"#切换镜像源","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1713619454000,"updatedTime":1713619454000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":4.86,"words":1457},"filePathRelative":"dev-tools/homebrew.md","localizedDate":"2024年4月20日","autoDesc":true,"excerpt":"\\n<figure><figcaption></figcaption></figure>\\n<h2>介绍</h2>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">官方描述</p>\\n<p>Homebrew is the easiest and most flexible way to install the UNIX tools Apple didn’t include with macOS. It can also install software not packaged for your Linux distribution without requiring sudo.</p>\\n</div>"}');export{S as comp,I as data};