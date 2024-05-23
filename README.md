# Fil Rouge  (Application Geolocqtion - Météo)

Cette application météo offre des fonctionnalités pour la connexion à Google Authentication, la récupération de la localisation actuelle et des informations météorologiques, ainsi que le stockage des rapports météorologiques récents dans MongoDB. Voici les fonctionnalités détaillées et leurs implémentations.

## Fonctionnalités

1. **Connexion via Google Auth**
2. **Obtenir la localisation actuelle et les infos météo**
3. **Stocker les rapports météo récents dans MongoDB**

---

### Connexion via Google Auth

**Quoi :**  
Un système d'identification utilisateur unique qui permet de s'authentifier auprès des API Google à l'aide de différentes méthodes.

**Comment :**  
Initialise Google Auth et l'API backend. Il affiche tous les comptes Google connectés sur l'appareil. Une fois un compte sélectionné, il se connecte automatiquement.

**Pourquoi :**  
Sécurité et les données de chaque utilisateur sont stockées séparément.

**Implémentation :**

- **login.component.ts :** Google Auth est initialisé et affiche un bouton "Connexion avec Google". Une fois sélectionné, il envoie le nom et l'e-mail à l'API.
- **mongodb :** 
  - **userController.js du backend :** Déclenche et vérifie si l'utilisateur est déjà présent et renvoie les données.

---

### Obtenir la localisation actuelle et les infos météo

**Quoi :**  
Obtenez la localisation exacte de l'utilisateur (latitude & longitude).

**Comment :**  
En utilisant les API web `navigator.geolocation` (intégrées au web, peuvent être utilisées dans n'importe quel navigateur) et en affichant à l'aide de Leaflet (bibliothèque de cartes open-source populaire).

**Pourquoi :**  
La localisation actuelle de l'utilisateur est obligatoire pour obtenir un rapport météo exact. Les utilisateurs peuvent également effectuer une recherche s'ils souhaitent le rapport météo pour un lieu recherché.

**Implémentation :**

- **leaflet-map.component.ts :**
  - Fonction `initMap` : Initialise la carte Leaflet, vérifie la localisation enregistrée dans localStorage. Sinon, il appelle les API web `navigator.geolocation` pour obtenir la localisation actuelle (latitude & longitude).
  - Fonction `fetchWeatherData` : Après avoir obtenu la latitude et la longitude, il appelle `api.weatherapi.com` pour obtenir les conditions météorologiques du lieu.
    ```javascript
    api.weatherapi.com/v1/current.json?key=d0b4be268504482db2c184600232008&q=${lat},${long}
    ```
  - Fonction `updateMap` : Met à jour la latitude et la longitude sur la carte, affiche une popup et un rapport météo, et utilise `this.updateCurrentLocData.emit(data)` pour envoyer les données à la page d'accueil.

---

### Stocker les rapports météo récents dans MongoDB

**Quoi :**  
Stockage et récupération des rapports météo à partir de MongoDB.

**Comment :**  
Dans le frontend, une fois les données du rapport météo reçues, elles sont envoyées à l'API (`homeservice.postMapData` pour l'envoi de données et `homeservice.getWeatherHistory` pour la récupération de données).

**Pourquoi :**  
Pour stocker tous les rapports météo précédemment recherchés ou la météo actuelle par lieu avec date et heure.

**Implémentation :**

- **Envoi de données et stockage :**
  - **leaflet-map.component.ts :** Dans la fonction `updateMap`, `this.homeService.postMapData(weatherData)` est déclenché et envoie les données à l'API.
  - **app.js du backend :**
    - `app.use("/api/v1", userHistoryRouter)`: Configuration du routeur pour l'historique utilisateur.
    - `router.post("/weather", isAuthenticated, weatherHistory)`: Crée un document avec les données météo et l'ID utilisateur à l'intérieur de `userdoc`.

- **Récupération de données et affichage :**
  - **dashboard.ts :** Dans `ngOnInit`, `this.homeService.getWeatherHistory()` est déclenché et appelle l'API.
  - **app.js du backend :**
    - `app.use("/api/v1", userHistoryRouter)`: Configuration du routeur pour l'historique utilisateur.
    - `router.get("/weather/history", isAuthenticated, UserWeatherHistory)`: Renvoie les données stockées par ID utilisateur et les ajoute à un tableau, qui est ensuite affiché dans HTML.

---

## Résumé

Cette application météo intègre l'authentification Google pour une connexion sécurisée, récupère des informations météorologiques en temps réel en fonction de la localisation actuelle ou recherchée de l'utilisateur, et stocke ces informations dans MongoDB pour référence future. Les fonctionnalités sont mises en œuvre à l'aide de technologies web modernes et d'API pour garantir une expérience utilisateur fluide.


### Étapes d'Installation

1. **Cloner le Répertoire :**
   ```bash
   https://github.com/KartikKARTIK-4498/Project_Fil_Rouge.git
   ```
2. **Install dependencies:**
```bash
cd geolocation-tracker
npm install
ng serve
```
3. **Backend:**
```bash
cd backend
npm install
npm run start 
```
