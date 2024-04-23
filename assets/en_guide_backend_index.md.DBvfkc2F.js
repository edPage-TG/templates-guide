import{_ as n,c as s,o as a,V as e}from"./chunks/framework.C5AjMrxx.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/backend/index.md","filePath":"en/guide/backend/index.md"}'),p={name:"en/guide/backend/index.md"},l=e(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>## Pré-requis</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Install backend dependencies: composer install</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Install frontend dependencies: pnpm i</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Rename &#39;.env.template&#39; to &#39;.env&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Generate app key: php artisan key:generate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Clear config cache: php artisan config:clear</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Create database manually or by making GET request on this route: /database/install/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Run a migration: php artisan migrate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Run a seed: php artisan db:seed</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Link storage folder to public folder: php artisan storage:link</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Serve backend with: php artisan serve</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Serve frontend with: pnpm dev</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Check the server by making GET request on this route: /</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Check the database connection by making GET request on this route: /database</span></span></code></pre></div>`,1),i=[l];function t(c,r,o,d,h,_){return a(),s("div",null,i)}const g=n(p,[["render",t]]);export{m as __pageData,g as default};
