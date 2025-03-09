import{_ as o}from"./chunks/ArticleMetadata.Sb1DYAHo.js";import{_ as h,D as r,o as t,c as p,I as k,w as d,k as e,a as c,R as g,b as u,e as y}from"./chunks/framework.FVQzxbLi.js";import"./chunks/md5.RtphNWHi.js";const m="/assets/202211061520256.0x2JUDBf.png",C="/assets/202211061523521.dpXxaKfJ.png",T=JSON.parse(`{"title":"解决 DotNet 安装完，报错：Couldn't find a valid ICU package installed on the system. Please install libicu using your package manager and try again","description":"","frontmatter":{"title":"解决 DotNet 安装完，报错：Couldn't find a valid ICU package installed on the system. Please install libicu using your package manager and try again","author":"查尔斯","date":"2022/11/06 15:35","categories":["Bug万象集"],"tags":["DotNet","Linux","CentOS"]},"headers":[],"relativePath":"categories/issues/2022/11/06/解决DotNET安装后报错的问题.md","filePath":"categories/issues/2022/11/06/解决DotNET安装后报错的问题.md","lastUpdated":1668604952000}`),D={name:"categories/issues/2022/11/06/解决DotNET安装后报错的问题.md"},A=e("h1",{id:"解决-dotnet-安装完-报错-couldn-t-find-a-valid-icu-package-installed-on-the-system-please-install-libicu-using-your-package-manager-and-try-again",tabindex:"-1"},[c("解决 DotNet 安装完，报错：Couldn't find a valid ICU package installed on the system. Please install libicu using your package manager and try again "),e("a",{class:"header-anchor",href:"#解决-dotnet-安装完-报错-couldn-t-find-a-valid-icu-package-installed-on-the-system-please-install-libicu-using-your-package-manager-and-try-again","aria-label":`Permalink to "解决 DotNet 安装完，报错：Couldn't find a valid ICU package installed on the system. Please install libicu using your package manager and try again"`},"​")],-1),B=g('<h2 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-label="Permalink to &quot;问题描述&quot;">​</a></h2><p><strong>C：</strong> 今天，笔者在一台 CentOS 7.9 服务器上手动安装完 DotNet 6.0.401 并配置好了环境变量之后，照例想查看一下是否安装成功。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">dotnet</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --version</span></span></code></pre></div><p>预想的版本信息没输出，倒是输出了这么一段错误。</p><p><img src="'+m+`" alt="202211061520256"></p><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Process terminated. Couldn</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;t find a valid ICU package installed on the system. Please install libicu using your package manager and try again. Alternatively you can set the configuration flag System.Globalization.Invariant to true if you want to run with no globalization support. Please see https://aka.ms/dotnet-missing-libicu for more information</span><span style="--shiki-light:#B31D28;--shiki-dark:#FF938A;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">   at System.Environment.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">FailFast</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(System.String)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">   at System.Globalization.GlobalizationMode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Settings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">..</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">cctor</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">   at System.Globalization.CultureData.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">CreateCultureWithInvariantData</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">   at System.Globalization.CultureData.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">get_Invariant</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">   at System.Globalization.CultureInfo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">..</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">cctor</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">   at System.Globalization.CultureInfo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">get_CurrentUICulture</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">   at System.TimeZoneInfo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">GetUtcStandardDisplayName</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">   at System.TimeZoneInfo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">CreateUtcTimeZone</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">   at System.TimeZoneInfo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">..</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">cctor</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">   at System.DateTime.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">get_Now</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">   at Microsoft.DotNet.Cli.Program.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">Main</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(System.String[])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Aborted</span></span></code></pre></div><h2 id="原因分析" tabindex="-1">原因分析 <a class="header-anchor" href="#原因分析" aria-label="Permalink to &quot;原因分析&quot;">​</a></h2><p>简单翻译一下关键错误信息。</p><blockquote><p>进程终止。找不到系统上安装的有效 ICU 包。请使用包管理器安装 libicu，然后重试。或者，如果您想在不支持全球化的情况下运行，可以将配置标志 System.Globalization.Invariant 设置为 true。请访问 <a href="https://aka.ms/dotnet-missing-libicu" target="_blank" rel="noreferrer">https://aka.ms/dotnet-missing-libicu</a> 了解更多信息。</p></blockquote><p>从提示信息来看，问题的原因是当前系统没有安装 DotNet 需要的 <code>libicu</code> 库。</p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><p>实际上这也是因为笔者采用的手动安装方式才导致的问题，如果采用包管理器（在线）安装方式，这个 <code>libicu</code> 库会自动被安装好，也就不会出现这个问题了。</p><p><img src="`+C+'" alt="202211061523521"></p><p>知道了问题的原因，那就安装一下这个依赖库。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">yum</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> libicu</span></span></code></pre></div><p>安装完后，再执行查看版本命令，版本信息正常输出了。</p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ol><li>在 CentOS 上安装 .NET SDK 或 .NET 运行时：<a href="https://learn.microsoft.com/zh-cn/dotnet/core/install/linux-centos" target="_blank" rel="noreferrer">https://learn.microsoft.com/zh-cn/dotnet/core/install/linux-centos</a></li><li>用于全球化的运行时配置选项：<a href="https://learn.microsoft.com/zh-cn/dotnet/core/runtime-config/globalization" target="_blank" rel="noreferrer">https://learn.microsoft.com/zh-cn/dotnet/core/runtime-config/globalization</a></li></ol>',18);function b(a,_,f,F,E,v){const n=o,l=r("ClientOnly");return t(),p("div",null,[A,k(l,null,{default:d(()=>{var s,i;return[(((s=a.$frontmatter)==null?void 0:s.aside)??!0)&&(((i=a.$frontmatter)==null?void 0:i.showArticleMetadata)??!0)?(t(),u(n,{key:0,article:a.$frontmatter},null,8,["article"])):y("",!0)]}),_:1}),B])}const P=h(D,[["render",b]]);export{T as __pageData,P as default};
