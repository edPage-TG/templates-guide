## Pré-requis

```
- Installer les dépendances du backend : composer install

- Installation des dépendances frontales : pnpm i

- Renommer '.env.template' en '.env'

- Générer une clé d'application : php artisan key:generate

- Vider le cache de configuration : php artisan config:clear

- Créez la base de données manuellement ou en effectuant une requête GET sur cette route : /database/install/

- Lancer une migration : php artisan migrate

- Lancer une graine : php artisan db:seed

- Lier le dossier de stockage au dossier public : php artisan storage:link

- Servir le backend avec : php artisan serve

- Servir le frontend avec : pnpm dev

- Vérifier le serveur en faisant une requête GET sur cette route : /

- Vérifier la connexion à la base de données en faisant une requête GET sur cette 
route : /database

```