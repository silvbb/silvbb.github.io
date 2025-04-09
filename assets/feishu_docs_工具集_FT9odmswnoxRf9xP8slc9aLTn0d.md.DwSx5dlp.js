import{_ as s,c as n,o as a,ab as p}from"./chunks/framework.ykMB-S_y.js";const h=JSON.parse('{"title":"终端操作常识","description":"","frontmatter":{"title":"终端操作常识","urlname":"FT9odmswnoxRf9xP8slc9aLTn0d","date":"2025-03-28 13:53:18","updated":"2025-04-04 13:57:47"},"headers":[],"relativePath":"feishu/docs/工具集/FT9odmswnoxRf9xP8slc9aLTn0d.md","filePath":"feishu/docs/工具集/FT9odmswnoxRf9xP8slc9aLTn0d.md","lastUpdated":1744219404000}'),e={name:"feishu/docs/工具集/FT9odmswnoxRf9xP8slc9aLTn0d.md"},l=p(`<h2 id="_1-windows-终端" tabindex="-1">1，Windows 终端： <a class="header-anchor" href="#_1-windows-终端" aria-label="Permalink to &quot;1，Windows 终端：&quot;">​</a></h2><ol><li><p>Command Prompt (cmd.exe)</p><ul><li><p>Windows 默认命令行终端</p></li><li><p>最基础的命令行界面</p></li></ul></li><li><p>PowerShell</p><ul><li><p>更现代的命令行和脚本环境</p></li><li><p>支持更复杂的命令和脚本功能</p></li></ul></li></ol><p>PowerShell (两个版本):Windows PowerShell ( powershell.exe )和PowerShell Core ( pwsh.exe )：</p><div class="language-plaintext vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" style="--shiki-light:#24292e;--shiki-dark:#adbac7;--shiki-light-bg:#fff;--shiki-dark-bg:#22272e;" tabindex="0"><code><span class="line"><span># Windows PowerShell 与 PowerShell Core 的区别</span></span>
<span class="line"><span>这两个路径指向的是两个不同版本的 PowerShell：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. %SystemRoot%\\System32\\WindowsPowerShell\\v1.0\\powershell.exe</span></span>
<span class="line"><span>   - 这是传统的 Windows PowerShell (5.1)</span></span>
<span class="line"><span>   - 内置于 Windows 系统</span></span>
<span class="line"><span>   - 基于 .NET Framework</span></span>
<span class="line"><span>   - 只能在 Windows 上运行</span></span>
<span class="line"><span>2. C:\\Users\\10640\\AppData\\Local\\Microsoft\\WindowsApps\\Microsoft.PowerShell_8wekyb3d8bbwe\\pwsh.exe</span></span>
<span class="line"><span>   - 这是 PowerShell Core (PowerShell 7.x)</span></span>
<span class="line"><span>   - 通过 Microsoft Store 安装的版本</span></span>
<span class="line"><span>   - 基于 .NET Core/.NET 5+</span></span>
<span class="line"><span>   - 跨平台，可在 Windows、macOS 和 Linux 上运行</span></span>
<span class="line"><span>   - 文件名为 pwsh.exe 而非 powershell.exe</span></span>
<span class="line"><span>## 主要区别</span></span>
<span class="line"><span>1. 兼容性 ：</span></span>
<span class="line"><span>   - PowerShell Core 支持大多数 Windows PowerShell 模块，但有些依赖 Windows 特定功能的模块可能不兼容</span></span>
<span class="line"><span>2. 性能 ：</span></span>
<span class="line"><span>   - PowerShell Core 通常性能更好，启动更快</span></span>
<span class="line"><span>3. 功能 ：</span></span>
<span class="line"><span>   - PowerShell Core 包含更多现代功能，如并行处理、管道链、错误处理改进等</span></span>
<span class="line"><span>4. 更新频率 ：</span></span>
<span class="line"><span>   - PowerShell Core 更新更频繁，而 Windows PowerShell 5.1 已经停止主要功能更新</span></span>
<span class="line"><span>您目前遇到的 conda 初始化问题可能与您使用的是 PowerShell Core 有关，因为 conda 初始化脚本可能主要针对传统的 Windows PowerShell 设计。</span></span>
<span class="line"><span>## Trae AI</span></span>
<span class="line"><span># Laragon 工具解析</span></span>
<span class="line"><span>Laragon 是一个用于 Web 开发的便携式、隔离的开发环境，专为 Windows 系统设计。根据提供的链接内容，Laragon 有以下主要特点和优势：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 主要特点</span></span>
<span class="line"><span>1. 便携性 ：Laragon 可以在任何地方运行，无需安装，可以放在 USB 驱动器上随身携带。</span></span>
<span class="line"><span>2. 隔离环境 ：它创建了一个独立的开发环境，不会影响系统的其他部分。</span></span>
<span class="line"><span>3. 自动配置 ：自动处理虚拟主机配置，简化了开发过程。</span></span>
<span class="line"><span>4. 轻量级 ：相比其他类似工具，Laragon 更轻量，启动更快。</span></span>
<span class="line"><span>5. 灵活性 ：支持多种 Web 服务器（Apache、Nginx）和数据库（MySQL、PostgreSQL、MongoDB）。</span></span>
<span class="line"><span>6. 多项目支持 ：可以同时管理多个项目，并为每个项目提供独立的环境。</span></span>
<span class="line"><span>## 适用场景</span></span>
<span class="line"><span>Laragon 特别适合以下场景：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. PHP 开发者（Laravel、WordPress、Drupal 等）</span></span>
<span class="line"><span>2. 需要在 Windows 上进行 Web 开发的团队</span></span>
<span class="line"><span>3. 学习 Web 开发的初学者</span></span>
<span class="line"><span>4. 需要便携开发环境的开发者</span></span>
<span class="line"><span>## 与其他工具的比较</span></span>
<span class="line"><span>相比 XAMPP、WAMP 等类似工具，Laragon 提供了更现代化的功能和更好的用户体验：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 更快的启动速度</span></span>
<span class="line"><span>- 更少的资源占用</span></span>
<span class="line"><span>- 更简单的项目管理</span></span>
<span class="line"><span>- 更好的可扩展性</span></span>
<span class="line"><span>Laragon 是一个非常实用的工具，特别适合在 Windows 环境下进行 PHP 和其他 Web 开发工作的开发者使用。它简化了环境配置过程，让开发者可以专注于代码编写而不是环境设置。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## silvbb</span></span>
<span class="line"><span>复制</span></span>
<span class="line"><span></span></span>
<span class="line"><span>删除</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://github.com/gwuhaolin/livego解析下</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Trae AI</span></span>
<span class="line"><span># LiveGo 项目解析</span></span>
<span class="line"><span>LiveGo 是一个使用 Go 语言编写的简单高效的直播服务器。这个项目提供了实时视频流处理的功能，支持多种流媒体协议。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 主要功能</span></span>
<span class="line"><span>1. 多协议支持 ：支持 RTMP、HLS、HTTP-FLV 等主流直播协议</span></span>
<span class="line"><span>2. 跨平台 ：可以在 Windows、Linux、macOS 等多个平台上运行</span></span>
<span class="line"><span>3. 高性能 ：Go 语言编写，具有较高的并发处理能力</span></span>
<span class="line"><span>4. 低延迟 ：针对实时直播场景优化，提供低延迟的视频传输</span></span>
<span class="line"><span>## 技术特点</span></span>
<span class="line"><span>- 使用纯 Go 语言实现，没有 CGO 依赖</span></span>
<span class="line"><span>- 采用模块化设计，各个组件可以独立工作</span></span>
<span class="line"><span>- 支持 RTMP 推流和拉流</span></span>
<span class="line"><span>- 支持 RTMP 转 HLS</span></span>
<span class="line"><span>- 支持 RTMP 转 HTTP-FLV</span></span>
<span class="line"><span>## 应用场景</span></span>
<span class="line"><span>LiveGo 适用于以下场景：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 个人或小型直播平台</span></span>
<span class="line"><span>- 视频会议系统</span></span>
<span class="line"><span>- 在线教育直播</span></span>
<span class="line"><span>- 游戏直播</span></span>
<span class="line"><span>- 活动直播</span></span>
<span class="line"><span>## 使用方法</span></span>
<span class="line"><span>项目可以通过简单的命令行参数启动，配置灵活。用户可以根据自己的需求修改配置文件，调整服务器的行为。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这是一个轻量级的直播服务器解决方案，适合那些需要快速搭建直播功能但又不想使用复杂商业解决方案的开发者。对于学习流媒体服务器开发的人来说，这也是一个很好的参考项目。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>powershell和pwsh的快捷指令可以通用么</span></span>
<span class="line"><span></span></span>
<span class="line"><span># PowerShell 和 pwsh 命令的通用性</span></span>
<span class="line"><span>PowerShell (Windows PowerShell) 和 pwsh (PowerShell Core) 的大多数命令是通用的，但也存在一些差异。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 通用部分</span></span>
<span class="line"><span>1. 基本命令行语法 ：两者使用相同的语法规则</span></span>
<span class="line"><span>2. 核心 cmdlet ：如 Get-Process 、 Get-Content 、 Set-Location 等基础命令</span></span>
<span class="line"><span>3. 管道操作 ： | 管道符号的使用方式相同</span></span>
<span class="line"><span>4. 变量定义 ： $variable = value 的语法相同</span></span>
<span class="line"><span>5. 脚本执行 ： .ps1 脚本文件的执行方式基本相同</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br></div></div><ol start="3"><li><p>Windows Terminal</p><ul><li><p>新一代终端应用</p></li><li><p>可以集成管理多种终端</p></li><li><p>支持标签页和分屏</p></li></ul></li></ol><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" style="--shiki-light:#24292e;--shiki-dark:#adbac7;--shiki-light-bg:#fff;--shiki-dark-bg:#22272e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">Windows Terminal 是一个现代化的终端应用程序，它是一个 容器 或 宿主环境 ，可以运行各种命令行工具，包括：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">PowerShell (传统版和 Core 版)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">命令提示符 (CMD)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">WSL (Windows Subsystem for Linux)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">Azure Cloud Shell</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">- </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">等其他命令行工具</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Cygwin 是一个在 Windows 上模拟 Linux/Unix 环境的工具集</p><p>WSL（Windows Subsystem for Linux）:</p><h2 id="_2-linux-unix-终端" tabindex="-1">2，Linux/Unix 终端： <a class="header-anchor" href="#_2-linux-unix-终端" aria-label="Permalink to &quot;2，Linux/Unix 终端：&quot;">​</a></h2><ol><li><p>Bash (Bourne Again Shell)</p><ul><li>最常用的 Unix shell <ul><li>大多数 Linux 发行版的默认 shell</li></ul></li></ul></li><li><p>Zsh</p><ul><li>增强版的 Bash <ul><li>更好的自动补全和主题支持</li></ul></li></ul></li><li><p>iTerm2 (macOS)</p><ul><li>macOS 上流行的终端模拟器 <ul><li>功能丰富，支持分屏</li></ul></li></ul></li><li><p>4tmux 是一个终端复用器（Terminal Multiplexer）</p><p>会话管理</p></li></ol><h2 id="_3-跨平台终端" tabindex="-1">3，跨平台终端： <a class="header-anchor" href="#_3-跨平台终端" aria-label="Permalink to &quot;3，跨平台终端：&quot;">​</a></h2><ol><li><p>Git Bash</p><ul><li>Windows 上模拟 Unix-like 环境 <ul><li>提供基本的 Unix 命令</li></ul></li></ul></li><li><p>Cmder</p><ul><li>Windows 上的终端模拟器 <ul><li>支持多种 shell</li></ul></li></ul></li><li><p>Alacritty</p><ul><li>跨平台的 GPU 加速终端 <ul><li>性能优秀，配置灵活 ## 终端技巧 ### bash快捷指令 1，创建别名(alias)来简化命令 1. 编辑bash配置文件：</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" style="--shiki-light:#24292e;--shiki-dark:#adbac7;--shiki-light-bg:#fff;--shiki-dark-bg:#22272e;" tabindex="0"><code><span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul><p>vim ~/.bashrc</p><div class="language-1. vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">1.</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" style="--shiki-light:#24292e;--shiki-dark:#adbac7;--shiki-light-bg:#fff;--shiki-dark-bg:#22272e;" tabindex="0"><code><span class="line"><span>	\`\`\`bash</span></span>
<span class="line"><span># Home Assistant环境快捷命令</span></span>
<span class="line"><span>alias ssa=&#39;source ~/ha_env/bin/activate&#39;</span></span>
<span class="line"><span>alias harun=&#39;hass -c /mnt/f/project_space/.homeassistant-wsl&#39;</span></span>
<span class="line"><span># Docker Compose快捷命令</span></span>
<span class="line"><span>alias dharun=&#39;docker-compose -f /mnt/f/project_space/.homeassistant-docker/docker-compose.yml up -d&#39;</span></span>
<span class="line"><span>alias dhalog=&#39;docker-compose -f /mnt/f/project_space/.homeassistant-docker/docker-compose.yml logs -f&#39;</span></span>
<span class="line"><span>alias dhadown=&#39;docker-compose -f /mnt/f/project_space/.homeassistant-docker/docker-compose.yml down&#39;</span></span>
<span class="line"><span># nginx快捷命令</span></span>
<span class="line"><span>alias ng1=&#39;sudo nginx -t &amp;&amp; sudo systemctl restart nginx&#39;</span></span>
<span class="line"><span>alias ngs=&#39;source ~/.bashrc&#39;</span></span>
<span class="line"><span>alias ngvim=&#39;sudo vim /etc/nginx/sites-available/homeassistant&#39;</span></span>
<span class="line"><span>\`\`\`	3. 使更改生效：	\`\`\`plaintext</span></span>
<span class="line"><span>source ~/.bashrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li></ol><h3 id="powershell-常用快捷命令" tabindex="-1">PowerShell 常用快捷命令 <a class="header-anchor" href="#powershell-常用快捷命令" aria-label="Permalink to &quot;PowerShell 常用快捷命令&quot;">​</a></h3><p>以下是一些可以添加到 PowerShell 配置文件中的实用快捷命令和别名，可以提高您的工作效率：</p><h4 id="文件和目录操作" tabindex="-1">文件和目录操作 <a class="header-anchor" href="#文件和目录操作" aria-label="Permalink to &quot;文件和目录操作&quot;">​</a></h4><div class="language-power vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">power</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" style="--shiki-light:#24292e;--shiki-dark:#adbac7;--shiki-light-bg:#fff;--shiki-dark-bg:#22272e;" tabindex="0"><code><span class="line"><span># 快速导航</span></span>
<span class="line"><span>function cd.. { Set-Location .. }</span></span>
<span class="line"><span>function ... { Set-Location ..\\.. }</span></span>
<span class="line"><span>function .... { Set-Location ..\\..\\.. }</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 列出目录内容</span></span>
<span class="line"><span>function ll { Get-ChildItem -Force }</span></span>
<span class="line"><span>function la { Get-ChildItem -Force }</span></span>
<span class="line"><span>function ls { Get-ChildItem }</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建和删除目录</span></span>
<span class="line"><span>function md { param($dir) New-Item -ItemType Directory -Path $dir }</span></span>
<span class="line"><span>function rd { param($dir) Remove-Item -Recurse -Force $dir }</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 快速编辑配置文件</span></span>
<span class="line"><span>function Edit-Profile { notepad $PROFILE }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="系统管理" tabindex="-1">系统管理 <a class="header-anchor" href="#系统管理" aria-label="Permalink to &quot;系统管理&quot;">​</a></h4><div class="language-power vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">power</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" style="--shiki-light:#24292e;--shiki-dark:#adbac7;--shiki-light-bg:#fff;--shiki-dark-bg:#22272e;" tabindex="0"><code><span class="line"><span># 系统信息</span></span>
<span class="line"><span>function sysinfo { systeminfo | Select-String &quot;OS&quot;, &quot;System&quot; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 进程管理</span></span>
<span class="line"><span>function psg { param($name) Get-Process | Where-Object { $_.Name -like &quot;*$name*&quot; } }</span></span>
<span class="line"><span>function killp { param($name) Get-Process $name | Stop-Process -Force }</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 网络命令</span></span>
<span class="line"><span>function ipconfig { ipconfig /all }</span></span>
<span class="line"><span>function flush-dns { ipconfig /flushdns }</span></span>
<span class="line"><span>function test-net { param($target) Test-NetConnection $target }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="开发相关" tabindex="-1">开发相关 <a class="header-anchor" href="#开发相关" aria-label="Permalink to &quot;开发相关&quot;">​</a></h4><div class="language-power vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">power</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" style="--shiki-light:#24292e;--shiki-dark:#adbac7;--shiki-light-bg:#fff;--shiki-dark-bg:#22272e;" tabindex="0"><code><span class="line"><span># Git 快捷命令</span></span>
<span class="line"><span>function gs { git status }</span></span>
<span class="line"><span>function ga { param($file) git add $file }</span></span>
<span class="line"><span>function gc { param($msg) git commit -m $msg }</span></span>
<span class="line"><span>function gp { git push }</span></span>
<span class="line"><span>function gl { git pull }</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Docker 快捷命令</span></span>
<span class="line"><span>function dps { docker ps }</span></span>
<span class="line"><span>function dimg { docker images }</span></span>
<span class="line"><span>function dstop { param($container) docker stop $container }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="实用工具" tabindex="-1">实用工具 <a class="header-anchor" href="#实用工具" aria-label="Permalink to &quot;实用工具&quot;">​</a></h4><div class="language-power vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">power</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" style="--shiki-light:#24292e;--shiki-dark:#adbac7;--shiki-light-bg:#fff;--shiki-dark-bg:#22272e;" tabindex="0"><code><span class="line"><span># 快速查找文件</span></span>
<span class="line"><span>function ff { param($pattern) Get-ChildItem -Recurse | Where-Object { $_.Name -like &quot;*$pattern*&quot; } }</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 计算文件夹大小</span></span>
<span class="line"><span>function Get-Size { param($path) Get-ChildItem $path -Recurse | Measure-Object -Property Length -Sum }</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 快速打开应用</span></span>
<span class="line"><span>function chrome { Start-Process &quot;chrome.exe&quot; }</span></span>
<span class="line"><span>function edge { Start-Process &quot;msedge.exe&quot; }</span></span>
<span class="line"><span>function code { param($path=&quot;.&quot;) Start-Process &quot;code&quot; -ArgumentList $path }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="codesandbox-命令" tabindex="-1">CodeSandbox 命令 <a class="header-anchor" href="#codesandbox-命令" aria-label="Permalink to &quot;CodeSandbox 命令&quot;">​</a></h4><div class="language-undefined vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">undefined</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" style="--shiki-light:#24292e;--shiki-dark:#adbac7;--shiki-light-bg:#fff;--shiki-dark-bg:#22272e;" tabindex="0"><code><span class="line"><span># CodeSandbox 快捷命令</span></span>
<span class="line"><span>function New-Sandbox {</span></span>
<span class="line"><span>    param(</span></span>
<span class="line"><span>        [string]$template = &quot;react&quot;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    Write-Host &quot;创建新的 CodeSandbox 项目 (模板: $template)...&quot; -ForegroundColor Cyan</span></span>
<span class="line"><span>    npx create-codesandbox --template $template</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Open-Sandbox {</span></span>
<span class="line"><span>    param(</span></span>
<span class="line"><span>        [string]$path = &quot;.&quot;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    Write-Host &quot;在 CodeSandbox 中打开当前项目...&quot; -ForegroundColor Cyan</span></span>
<span class="line"><span>    npx codesandbox $path</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Deploy-Sandbox {</span></span>
<span class="line"><span>    Write-Host &quot;部署项目到 CodeSandbox...&quot; -ForegroundColor Cyan</span></span>
<span class="line"><span>    npx codesandbox deploy</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Login-Sandbox {</span></span>
<span class="line"><span>    Write-Host &quot;登录到 CodeSandbox...&quot; -ForegroundColor Cyan</span></span>
<span class="line"><span>    npx codesandbox login</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Logout-Sandbox {</span></span>
<span class="line"><span>    Write-Host &quot;从 CodeSandbox 登出...&quot; -ForegroundColor Cyan</span></span>
<span class="line"><span>    npx codesandbox logout</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置别名</span></span>
<span class="line"><span>Set-Alias -Name csb-new -Value New-Sandbox csb-new - # 创建新的 CodeSandbox 项目</span></span>
<span class="line"><span>Set-Alias -Name csb-open -Value Open-Sandbox #在 CodeSandbox 中打开当前项目</span></span>
<span class="line"><span>Set-Alias -Name csb-deploy -Value Deploy-Sandbox #- 部署项目到 CodeSandbox</span></span>
<span class="line"><span>Set-Alias -Name csb-login -Value Login-Sandbox #登录到 CodeSandbox</span></span>
<span class="line"><span>Set-Alias -Name csb-logout -Value Logout-Sandbox # 从 CodeSandbox 登出</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="如何添加到-powershell-配置文件" tabindex="-1">如何添加到 PowerShell 配置文件 <a class="header-anchor" href="#如何添加到-powershell-配置文件" aria-label="Permalink to &quot;如何添加到 PowerShell 配置文件&quot;">​</a></h2><ol><li>打开 PowerShell</li><li>运行 notepad $PROFILE 打开配置文件</li><li>将上述函数复制到文件中</li><li>保存文件并重启 PowerShell 您可以根据自己的需求选择和修改这些快捷命令。</li></ol><h3 id="终端乱码" tabindex="-1">终端乱码： <a class="header-anchor" href="#终端乱码" aria-label="Permalink to &quot;终端乱码：&quot;">​</a></h3><p>使用 PowerShell 并指定输出编码：</p><div class="language-power vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">power</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" style="--shiki-light:#24292e;--shiki-dark:#adbac7;--shiki-light-bg:#fff;--shiki-dark-bg:#22272e;" tabindex="0"><code><span class="line"><span>Get-ChildItem -Recurse | Select-Object FullName | Out-File -FilePath structure.txt -Encoding utf8</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>或者使用 CMD 命令并重定向到文件时指定编码：</p><div class="language-power vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">power</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" style="--shiki-light:#24292e;--shiki-dark:#adbac7;--shiki-light-bg:#fff;--shiki-dark-bg:#22272e;" tabindex="0"><code><span class="line"><span>chcp 65001</span></span>
<span class="line"><span>dir /s /b f:\\project_space\\weapp-vite &gt; structure.txt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,31),i=[l];function r(c,b,o,t,u,d){return a(),n("div",null,i)}const g=s(e,[["render",r]]);export{h as __pageData,g as default};
