import{_ as t,c as i,o as n,m as e,a as s}from"./chunks/framework.2Rgbgifp.js";const g=JSON.parse('{"title":"Definition des Types Utilisateurs et rôles","description":"","frontmatter":{},"headers":[],"relativePath":"guide/backend/authentification.md","filePath":"guide/backend/authentification.md"}'),r={name:"guide/backend/authentification.md"},a=e("h1",{id:"definition-des-types-utilisateurs-et-roles",tabindex:"-1"},[s("Definition des Types Utilisateurs et rôles "),e("a",{class:"header-anchor",href:"#definition-des-types-utilisateurs-et-roles","aria-label":'Permalink to "Definition des Types Utilisateurs et rôles"'},"​")],-1),o=e("pre",null,[e("code",null,`Il faut définir les types d'utilisateurs
avec leur rôles dans la gestion de l'application


- App\\Enums\\ProfileType : definir le choix du profil

- App\\Http\\Resources : Creation de la resource du profil

- App\\Http\\Controllers\\Auth\\RegistrationController : definir le choix
 dans la methode d'enregistrement du profil dans le controller.

- App\\Models : Creer le modèle du profil avec une methode permettant
 de lier le profil à l'utilisateur creer.
`)],-1),l=[a,o];function d(c,p,u,f,h,m){return n(),i("div",null,l)}const x=t(r,[["render",d]]);export{g as __pageData,x as default};
