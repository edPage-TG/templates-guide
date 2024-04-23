import{_ as n,c as a,o as s,V as e}from"./chunks/framework.C5AjMrxx.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/backend/index.md","filePath":"guide/backend/index.md"}'),p={name:"guide/backend/index.md"},i=e(`<h2 id="pre-requis" tabindex="-1">Pré-requis <a class="header-anchor" href="#pre-requis" aria-label="Permalink to &quot;Pré-requis&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- Installer les dépendances du backend : composer install</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Installation des dépendances frontales : pnpm i</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Renommer &#39;.env.template&#39; en &#39;.env&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Générer une clé d&#39;application : php artisan key:generate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Vider le cache de configuration : php artisan config:clear</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Créez la base de données manuellement ou en effectuant une requête GET sur cette route : /database/install/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Lancer une migration : php artisan migrate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Lancer une graine : php artisan db:seed</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Lier le dossier de stockage au dossier public : php artisan storage:link</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Servir le backend avec : php artisan serve</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Servir le frontend avec : pnpm dev</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Vérifier le serveur en faisant une requête GET sur cette route : /</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Vérifier la connexion à la base de données en faisant une requête GET sur cette </span></span>
<span class="line"><span>route : /database</span></span></code></pre></div>`,2),l=[i];function t(r,c,d,o,u,_){return s(),a("div",null,l)}const f=n(p,[["render",t]]);export{m as __pageData,f as default};
