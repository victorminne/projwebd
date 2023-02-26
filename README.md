# projwebd
 
Afin de lancer le projet veuillez suivre les étapes suivantes:
dans le dossier du projet, ouvrir un terminal et taper la commande suivante:
```npm install```
puis:
```npm start```
va ainsi se lancer le projet sur le port 3000.
Grace à votre moteur de recherche favoris, vous pouvez accéder au projet en tapant l'adresse suivante:
```localhost:3000```

## Description
Ce projet comporte 3 pages:
- la page d'accueil
- la page de recherche
- la page de contact
  
### Page d'accueil
La page d'accueil est la page d'entrée du site. Elle contient un menu de navigation, un système de cartes pour afficher les éléments mis en avant par le musée, un formulaire de contact et un footer.  
Afin d'obtenir les éléments mis en avant, le site se connecte à l'API du musée MET. Il récupère les éléments mis en avant et les affiche dans des cartes. Ces cartes sont cliquables et renvoient vers la page de détail.   
Dans le footer se trouve des liens vers les réseaux sociaux du musée. Ainsi que d'éventuelles informations de contact que vous pouvez retrouver sur la page de contact à l'adresse suivante:
```localhost:3000/contact```

### Page de recherche
La page de recherche est accessible depuis le menu de navigation. Elle permet de rechercher des oeuvres dans la base de données du musée. Contrairement a la recherche de la bar de navigation vous pouvez choisir le type de recherche que vous souhaitez effectuer. En effet vous pouvez rechercher par nom, par auteur, par date ou localisation. Les oeuvres seront alors affichées dans des cartes cliquables qui renvoient vers la page de détail de l'oeuvre.

### Page de contact
La page de contact est accessible depuis le menu de navigation. Elle permet de contacter le musée. Elle contient un aussi des informations concernant supinfo source du projet.

### Page de détail

Finalement dans la page de détail vous pourrez retrouver les informations concernant l'oeuvre que vous avez sélectionné. On y retrouve le nom de l'oeuvre, son auteur, sa date de création, sa localisation, sa description et une image de l'oeuvre. La description est récupérée depuis l'API de wikipedia. L'image est récupérée depuis la base de données du musée. Il se peut que certaines informations ne s'affiche pas car elles ne sont pas présentes dans la base de données du musée, ainsi nous avons fait le choix de ne pas afficher les informations manquantes.