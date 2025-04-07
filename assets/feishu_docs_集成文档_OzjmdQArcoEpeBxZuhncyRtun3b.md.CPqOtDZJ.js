import{_ as n,c as a,o as p,a8 as e}from"./chunks/framework.igqXP-xE.js";const d=JSON.parse('{"title":"服务器（nginx apache）","description":"","frontmatter":{"title":"服务器（nginx apache）","urlname":"OzjmdQArcoEpeBxZuhncyRtun3b","date":"2025-04-02 11:44:59","updated":"2025-04-02 23:58:52"},"headers":[],"relativePath":"feishu/docs/集成文档/OzjmdQArcoEpeBxZuhncyRtun3b.md","filePath":"feishu/docs/集成文档/OzjmdQArcoEpeBxZuhncyRtun3b.md","lastUpdated":1744001113000}'),l={name:"feishu/docs/集成文档/OzjmdQArcoEpeBxZuhncyRtun3b.md"};function i(r,s,t,c,b,o){return p(),a("div",null,s[0]||(s[0]=[e(`<h2 id="_1-apache" tabindex="-1">1，apache <a class="header-anchor" href="#_1-apache" aria-label="Permalink to &quot;1，apache&quot;">​</a></h2><p>改变其端口，编辑配置文件</p><p>sudo nano /etc/apache2/ports.conf</p><h2 id="_2-nginx" tabindex="-1">2, nginx <a class="header-anchor" href="#_2-nginx" aria-label="Permalink to &quot;2, nginx&quot;">​</a></h2><p>请求处理流程：</p><p>所有请求 -&gt; Nginx 监控的端口 -&gt; 配置location 代理到 127.0.0.1:8000（自己设定） -&gt; 后台框架应用（比如Laravel 应用）</p><p>172.30.33.xxx是NGINX反向代理服务的网段（来自官方文档），所以要添加信任才能公网访问，不然会出现 400 bad request 的错误。</p><div class="language-undefined vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">undefined</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" style="--shiki-light:#24292e;--shiki-dark:#adbac7;--shiki-light-bg:#fff;--shiki-dark-bg:#22272e;" tabindex="0"><code><span class="line"><span>http:</span></span>
<span class="line"><span>  server_host: 0.0.0.0  # 监听所有网络</span></span>
<span class="line"><span>  server_port: 8133</span></span>
<span class="line"><span>  use_x_forwarded_for: true</span></span>
<span class="line"><span>  trusted_proxies:</span></span>
<span class="line"><span>    - 127.0.0.1</span></span>
<span class="line"><span>    - ::1</span></span>
<span class="line"><span>    - 172.0.0.0/8  # 覆盖WSL可能使用的IP范围</span></span>
<span class="line"><span>    - 192.168.0.0/16</span></span>
<span class="line"><span>  ip_ban_enabled: true</span></span>
<span class="line"><span>  # 如果用户连续5次登录失败，IP会被临时封禁</span></span>
<span class="line"><span>  login_attempts_threshold: 5</span></span>
<span class="line"><span>  # CORS（跨源资源共享）允许列表中的域名访问HA的API</span></span>
<span class="line"><span>  cors_allowed_origins:</span></span>
<span class="line"><span>    - https://ha.jwisdom.fun</span></span>
<span class="line"><span>    - https://dha.jwisdom.fun</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>创建 NGINX 配置文件：</p><p>在Ubuntu系统上，NGINX的配置文件通常位于以下位置：</p><ol><li><p>主配置文件： /etc/nginx/nginx.conf</p></li><li><p>站点配置文件： /etc/nginx/sites-available/your-site-config</p></li></ol><div class="language-toml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" style="--shiki-light:#24292e;--shiki-dark:#adbac7;--shiki-light-bg:#fff;--shiki-dark-bg:#22272e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#符号链接</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FF938A;--shiki-dark-font-style:italic;">sudo ln -s /etc/nginx/sites-available/homeassistant /etc/nginx/sites-enabled/</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FF938A;--shiki-dark-font-style:italic;">sudo ln -s /etc/nginx/sites-available/tmall /etc/nginx/sites-enabled/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FF938A;--shiki-dark-font-style:italic;">sudo nginx -t  </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 测试配置是否有错误</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FF938A;--shiki-dark-font-style:italic;">sudo systemctl restart nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FF938A;--shiki-dark-font-style:italic;">关闭nginx</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FF938A;--shiki-dark-font-style:italic;">wsl -d Ubuntu-20.04 sudo service nginx stop</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FF938A;--shiki-dark-font-style:italic;">或在~/.bashrc设定快捷指令</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FF938A;--shiki-dark-font-style:italic;">alias </span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">ng2=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;sudo service nginx start&#39;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FF938A;--shiki-dark-font-style:italic;">alias </span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">ng3=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;sudo service nginx stop&#39;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FF938A;--shiki-dark-font-style:italic;">alias </span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">ng4=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;sudo service nginx status&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="检查-nginx-用户权限" tabindex="-1">检查 Nginx 用户权限 <a class="header-anchor" href="#检查-nginx-用户权限" aria-label="Permalink to &quot;检查 Nginx 用户权限&quot;">​</a></h3><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" style="--shiki-light:#24292e;--shiki-dark:#adbac7;--shiki-light-bg:#fff;--shiki-dark-bg:#22272e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 检查 Nginx 用户</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">ps aux | grep nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 如果需要，修改 Nginx 用户权限</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">sudo usermod -a -G &lt;homeassistant用户组&gt; nginx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>使用sudo touch 或直接通过 sudo vim 创建的 Nginx 配置文件</p><p>配置内容包含：</p><ul><li><p>监听端口和 SSL 配置</p></li><li><p>服务器名称 (tm.jwisdom.fun)</p></li><li><p>SSL 证书和密钥路径</p></li><li><p>安全头设置</p></li><li><p>SSL 协议和加密套件</p><p>ChaCha20-Poly1305 加密套件，对移动设备更友好</p></li><li><p>代理设置和 WebSocket 支持</p></li><li><p>HTTP 到 HTTPS 的重定向</p></li><li><p>SSL 会话管理</p><p>ssl_session_timeout 、 ssl_session_cache 和 ssl_session_tickets off</p></li></ul><h3 id="完整homeassistant配置文件" tabindex="-1">完整homeassistant配置文件： <a class="header-anchor" href="#完整homeassistant配置文件" aria-label="Permalink to &quot;完整homeassistant配置文件：&quot;">​</a></h3><p>sudo vim /etc/nginx/sites-available/homeassistant</p><div class="language-undefined vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">undefined</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" style="--shiki-light:#24292e;--shiki-dark:#adbac7;--shiki-light-bg:#fff;--shiki-dark-bg:#22272e;" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 443 ssl;</span></span>
<span class="line"><span>    server_name ha.jwisdom.fun;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    ssl_certificate /mnt/f/project_space/.homeassistant-wsl/ssl/let.fullchain.pem;</span></span>
<span class="line"><span>    ssl_certificate_key /mnt/f/project_space/.homeassistant-wsl/ssl/let.privkey.pem;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>     # 在这里添加安全头</span></span>
<span class="line"><span>    add_header Strict-Transport-Security &quot;max-age=31536000; includeSubDomains&quot; always;</span></span>
<span class="line"><span>    add_header X-Content-Type-Options nosniff;</span></span>
<span class="line"><span>    add_header X-Frame-Options SAMEORIGIN;</span></span>
<span class="line"><span>    add_header X-XSS-Protection &quot;1; mode=block&quot;;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 其他SSL优化设置</span></span>
<span class="line"><span>    ssl_protocols TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span>    ssl_prefer_server_ciphers on;</span></span>
<span class="line"><span>    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 代理设置</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass http://127.0.0.1:8123;</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-Proto https;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        # WebSocket支持</span></span>
<span class="line"><span>        proxy_http_version 1.1;</span></span>
<span class="line"><span>        proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>        proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        # 添加这些头信息</span></span>
<span class="line"><span>        proxy_buffering off;</span></span>
<span class="line"><span>        proxy_redirect off;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        # 增加超时时间</span></span>
<span class="line"><span>        proxy_read_timeout 1800s;</span></span>
<span class="line"><span>        proxy_send_timeout 1800s;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># HTTP重定向到HTTPS</span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name ha.jwisdom.fun;</span></span>
<span class="line"><span>    return 301 https://$host$request_uri;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 443 ssl;</span></span>
<span class="line"><span>    server_name dha.jwisdom.fun;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    ssl_certificate /mnt/f/project_space/.homeassistant-docker/ssl/dha.jwisdom.fun_public.crt;</span></span>
<span class="line"><span>    ssl_certificate_key /mnt/f/project_space/.homeassistant-docker/ssl/dha.jwisdom.fun.key;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>     # 在这里添加安全头</span></span>
<span class="line"><span>    add_header Strict-Transport-Security &quot;max-age=31536000; includeSubDomains&quot; always;</span></span>
<span class="line"><span>    add_header X-Content-Type-Options nosniff;</span></span>
<span class="line"><span>    add_header X-Frame-Options SAMEORIGIN;</span></span>
<span class="line"><span>    add_header X-XSS-Protection &quot;1; mode=block&quot;;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 其他SSL优化设置</span></span>
<span class="line"><span>    ssl_protocols TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span>    ssl_prefer_server_ciphers on;</span></span>
<span class="line"><span>    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 代理设置</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass http://127.0.0.1:8133;</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-Proto https;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        # WebSocket支持</span></span>
<span class="line"><span>        proxy_http_version 1.1;</span></span>
<span class="line"><span>        proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>        proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># HTTP重定向到HTTPS</span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name dha.jwisdom.fun;</span></span>
<span class="line"><span>    return 301 https://$host$request_uri;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br></div></div><h3 id="完整tmall配置文件" tabindex="-1">完整tmall配置文件： <a class="header-anchor" href="#完整tmall配置文件" aria-label="Permalink to &quot;完整tmall配置文件：&quot;">​</a></h3><div class="language-undefined vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">undefined</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" style="--shiki-light:#24292e;--shiki-dark:#adbac7;--shiki-light-bg:#fff;--shiki-dark-bg:#22272e;" tabindex="0"><code><span class="line"><span># HTTP 服务器 - 将所有 HTTP 请求重定向到 HTTPS</span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name tm.jwisdom.fun;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 将 HTTP 请求永久重定向到 HTTPS</span></span>
<span class="line"><span>    return 301 https://$host$request_uri;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># HTTPS 服务器</span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 443 ssl;</span></span>
<span class="line"><span>    server_name tm.jwisdom.fun;  # 确保与证书匹配</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # SSL 证书配置</span></span>
<span class="line"><span>    ssl_certificate /mnt/f/project_space/aligenie-skill-demo-main/ssl/tm.jwisdom.fun.pem;</span></span>
<span class="line"><span>    ssl_certificate_key /mnt/f/project_space/aligenie-skill-demo-main/ssl/tm.jwisdom.fun.key;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 优化 SSL 设置</span></span>
<span class="line"><span>    ssl_protocols TLSv1.2 TLSv1.3;                # 只使用安全的 TLS 版本</span></span>
<span class="line"><span>    ssl_prefer_server_ciphers on;                 # 优先使用服务器定义的加密套件</span></span>
<span class="line"><span>    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305;  # 安全的加密套件</span></span>
<span class="line"><span>    ssl_session_timeout 1d;                       # SSL 会话超时时间</span></span>
<span class="line"><span>    ssl_session_cache shared:SSL:10m;             # SSL 会话缓存</span></span>
<span class="line"><span>    ssl_session_tickets off;                      # 禁用不安全的会话票证</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 安全头设置</span></span>
<span class="line"><span>    add_header Strict-Transport-Security &quot;max-age=31536000; includeSubDomains&quot; always;  # HSTS 策略</span></span>
<span class="line"><span>    add_header X-Content-Type-Options nosniff always;                                  # 防止 MIME 类型嗅探</span></span>
<span class="line"><span>    add_header X-Frame-Options SAMEORIGIN always;                                      # 防止点击劫持</span></span>
<span class="line"><span>    add_header X-XSS-Protection &quot;1; mode=block&quot; always;                                # XSS 保护</span></span>
<span class="line"><span>    add_header Content-Security-Policy &quot;upgrade-insecure-requests&quot; always;             # 强制使用 HTTPS</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 性能优化</span></span>
<span class="line"><span>    client_max_body_size 10M;                     # 允许上传的最大文件大小</span></span>
<span class="line"><span>    gzip on;                                      # 启用 Gzip 压缩</span></span>
<span class="line"><span>    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;  # 压缩类型</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 日志配置</span></span>
<span class="line"><span>    access_log /var/log/nginx/tm.jwisdom.fun.access.log;</span></span>
<span class="line"><span>    error_log /var/log/nginx/tm.jwisdom.fun.error.log;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 天猫精灵认证文件特殊处理</span></span>
<span class="line"><span>    location /aligenie/ {</span></span>
<span class="line"><span>        # 优先尝试直接代理到 Laravel，确保认证文件请求被正确处理</span></span>
<span class="line"><span>        try_files $uri $uri/ @laravel;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    location @laravel {</span></span>
<span class="line"><span>        proxy_pass http://127.0.0.1:8000;</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-Proto https;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 默认代理设置</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass http://127.0.0.1:8000;         # 代理到 Laravel 服务</span></span>
<span class="line"><span>        proxy_set_header Host $host;              # 传递原始主机名</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;  # 传递客户端真实 IP</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;  # 传递代理链信息</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-Proto https;  # 传递协议信息</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        # WebSocket 支持</span></span>
<span class="line"><span>        proxy_http_version 1.1;</span></span>
<span class="line"><span>        proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>        proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        # 超时设置</span></span>
<span class="line"><span>        proxy_connect_timeout 60s;</span></span>
<span class="line"><span>        proxy_send_timeout 60s;</span></span>
<span class="line"><span>        proxy_read_timeout 60s;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br></div></div><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" style="--shiki-light:#24292e;--shiki-dark:#adbac7;--shiki-light-bg:#fff;--shiki-dark-bg:#22272e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 默认静态文件处理</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">location / {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    try_files $uri $uri/ /index.php?$query_string;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><p>$uri ：首先尝试直接访问请求的文件（例如： /image.jpg → 直接返回图片）</p></li><li><p>$uri/ ：如果上一步失败，尝试当作目录访问（例如： /blog/ → 寻找 /blog/index.html ）</p></li><li><p>/index.php?$query_string ：前两步都失败时，将请求转发给 index.php （Laravel 入口文件）</p></li></ul><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" style="--shiki-light:#24292e;--shiki-dark:#adbac7;--shiki-light-bg:#fff;--shiki-dark-bg:#22272e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 修改 Nginx 配置，阻止直接访问认证文件路径</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">location /aligenie/ {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    # 禁用静态文件查找，直接转发给后台框架处理</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    try_files = /index.php?$query_string;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><table tabindex="0"><thead><tr><th>配置状态</th><th>无配置</th><th>配置1</th><th>配置1+配置2</th></tr></thead><tbody><tr><td>静态文件访问</td><td>√ 自动支持</td><td>√ 自动支持</td><td>√ 自动支持</td></tr><tr><td>Laravel 路由</td><td>× 全部404</td><td>√ 正常</td><td>√ 正常</td></tr><tr><td>/aligenie/ 路径处理</td><td>× 直接返回文件</td><td>× 直接返回文件</td><td>√ 强制走 Laravel</td></tr></tbody></table><h2 id="_3-测试工具" tabindex="-1">3，测试工具 <a class="header-anchor" href="#_3-测试工具" aria-label="Permalink to &quot;3，测试工具&quot;">​</a></h2><p>postman或curl</p><p>可以curl -v -X POST</p><div class="language-undefined vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">undefined</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" style="--shiki-light:#24292e;--shiki-dark:#adbac7;--shiki-light-bg:#fff;--shiki-dark-bg:#22272e;" tabindex="0"><code><span class="line"><span>curl -k -X POST https://tm.jwisdom.fun/api/teach/tmall/animate-master \\</span></span>
<span class="line"><span>  -H &quot;Content-Type: application/json&quot; \\</span></span>
<span class="line"><span>  -d &#39;{&quot;intentName&quot;:&quot;ai.dueros.common.default_intent&quot;,&quot;slotEntities&quot;:[],&quot;utterance&quot;:&quot;你好&quot;}&#39;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  收到的：请求经过 Nginx 代理转发（可以看到 x-forwarded-proto 等头信息）</span></span>
<span class="line"><span>  [2025-04-02 14:13:21] local.INFO: 收到天猫精灵请求 {&quot;data&quot;:{&quot;intentName&quot;:&quot;ai.dueros.common.default_intent&quot;,&quot;slotEntities&quot;:[],&quot;utterance&quot;:&quot;你好&quot;},&quot;headers&quot;:{&quot;host&quot;:[&quot;tm.jwisdom.fun&quot;],&quot;x-real-ip&quot;:[&quot;172.23.96.1&quot;],&quot;x-forwarded-for&quot;:[&quot;172.23.96.1&quot;],&quot;x-forwarded-proto&quot;:[&quot;https&quot;],&quot;connection&quot;:[&quot;upgrade&quot;],&quot;content-length&quot;:[&quot;87&quot;],&quot;user-agent&quot;:[&quot;curl/8.5.0&quot;],&quot;accept&quot;:[&quot;*/*&quot;],&quot;content-type&quot;:[&quot;application/json&quot;]}}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>-v (--verbose) ：显示详细通信过程</p><p>-X (--request) ：指定 HTTP 请求方法</p><p>-k 参数忽略 SSL 证书验证</p>`,33)]))}const m=n(l,[["render",i]]);export{d as __pageData,m as default};
