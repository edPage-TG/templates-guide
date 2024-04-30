# Installation

- Installer les dépendances du backend : `composer install`
- Installer les dépendances frontend : `pnpm i`
- Renommer '.env.template' en '.env'
- Générer la clé d'application : `php artisan key:generate`
- Effacer le cache de la configuration : `php artisan config:clear`
- Lancer une migration : `php artisan migrate`
- Lancer une graine : `php artisan db:seed`
- Lier le dossier de stockage au dossier public : `php artisan storage:link`
- Servir le backend avec : `php artisan serve`
- Servez le frontend avec : `pnpm dev`
- Vérifier le serveur en faisant une requête GET sur cette route : `/`
- Vérifier la connexion à la base de données en faisant une requête GET sur cette route : `/database`
- Créer la base de données manuellement ou en faisant une requête GET sur cette route : `/database/install/`
