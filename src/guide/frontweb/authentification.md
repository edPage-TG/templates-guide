# Definition des Types Utilisateurs et rôles

    Il faut définir les types d'utilisateurs
    avec leur rôles dans la gestion de l'application
    
    Les étapes à suivre: 
    
    - src\enums\profile-type : On énumère les types de profile
```
     typeProfile = 'App\\Models\\typeProfile',
```
    - src\composable\profile-type : creer le type de  profile

```ts
const typeProfileTypeLabel: string = appSettingStore.getSettingValue(
  "typeProfileTypeLabel"
) as string;
```

    - src\views\infoPortal : Par defaut nous avons la vue Admin qui
    est retournée. On se base sur cette vue pour créer la vue du type
    de profil créer et faire les modifications néccessaires ainsi
    que dans l'index.