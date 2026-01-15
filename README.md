# Pharmacy cleaning - Système de gestion de médicaments

## Initialisation du projet

```bash
# Installer les dépendances
npm install

# Installer les hooks Git ( optionnel )
npm run install-hooks

# Lancer les tests
npm test


# Lancer les tests de non régression
npm run test:regression

# Générer le fichier de sortie ( output ) 
npm start

```

## Architecture

Le projet suit une architecture modulaire basée sur un système de règles :

- **Classes** (`classes/`) : Modèles  de données ( `Drug` et `Pharmacy` ) 
- **Règles** (`drugRules/`) : Système de règles par médicament ( 1 règles effectuée par jour ) 
  - Chaque médicament a sa propre règle dans `drugRules/drugs/` + ses tests unitaires pour valider la logique
  - `drugRuleMap.js` mappe les noms de médicaments à leurs règles spécifiques
  - `dailyRule.js` applique la règle appropriée à chaque médicament ( appellée par class Pharmacy )
- **Helpers** (`drugRules/helpers/`) : Fonctions utilitaires communes
- **Constantes** (`drugRules/consts/`) : Valeurs constantes centralisées 
