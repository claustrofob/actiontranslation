---
layout: page
lang: fr
title: Politique de confidentialité
---

# Politique de confidentialité

Dernière mise à jour : 21 novembre 2026

Action Translation est une app pour iPhone et iPad qui traduit du texte à l’aide du fournisseur d’IA de votre choix. Cette politique explique ce qu’il advient de vos données lorsque vous l’utilisez.

## En bref

- Le développeur d’Action Translation ne collecte, ne reçoit et ne stocke pas vos données. L’app ne comporte ni compte, ni serveur, ni publicité, ni outil d’analyse, ni suivi.
- Lorsque vous lancez une traduction, votre texte est envoyé directement de votre appareil au fournisseur d’IA que vous avez sélectionné.
- Vos réglages et vos clés d’API restent sur votre appareil. Votre historique de traductions reste sur votre appareil et, si la synchronisation iCloud est activée, dans votre propre compte iCloud.

## Ce qui est envoyé à votre fournisseur d’IA

En ajoutant une clé d’API dans les Réglages, vous autorisez l’app à envoyer à ce fournisseur les données décrites ci-dessous. Pour retirer votre autorisation, supprimez la clé.

Rien n’est envoyé tant que vous ne lancez pas de traduction. Lorsque vous le faites, l’app envoie directement au fournisseur sélectionné dans les Réglages (Google, Anthropic ou OpenAI) :

- le texte à traduire ;
- les instructions de traduction, notamment le modèle, la langue cible, la langue source si vous l’avez choisie et la langue de l’interface de l’app ;
- votre clé d’API, qui vous identifie auprès du fournisseur.

Comme tout service en ligne, le fournisseur reçoit également des données techniques de connexion, telles que votre adresse IP.

Votre fournisseur traite ces données selon ses propres conditions et sa politique de confidentialité, ainsi que selon votre contrat avec lui. Les conditions peuvent varier selon l’offre : par exemple, certaines offres gratuites autorisent le fournisseur à utiliser le contenu envoyé pour améliorer ses produits. Consultez les conditions de votre fournisseur avant de traduire des informations confidentielles ou personnelles.

- [Règles de confidentialité de Google](https://policies.google.com/privacy) et [conditions de l’API Gemini](https://ai.google.dev/gemini-api/terms)
- [Politique de confidentialité d’Anthropic](https://www.anthropic.com/legal/privacy)
- [Politique de confidentialité d’OpenAI](https://openai.com/policies/privacy-policy/)

## Ce qui reste sur votre appareil

- **Historique des traductions :** vos 50 dernières traductions, avec le texte source, le résultat, les langues, le modèle, la date et le temps de réponse. Les traductions plus anciennes sont supprimées automatiquement.
- **Réglages :** votre fournisseur, vos modèles, votre langue cible et les langues que vous utilisez le plus.
- **Clés d’API :** stockées dans le trousseau iOS.

L’app et ses extensions, pour le partage et pour la commande Traduire, utilisent ces données ensemble sur votre appareil. Les réglages et les clés d’API ne sont synchronisés nulle part ; l’historique est synchronisé uniquement via votre iCloud, comme décrit ci-dessous. Ces données peuvent aussi être incluses dans les sauvegardes de l’appareil selon vos réglages iOS.

## Synchronisation iCloud

Si la synchronisation iCloud est activée dans les réglages (elle l’est par défaut), l’app conserve votre historique de traductions dans la base de données iCloud privée de votre compte Apple : l’historique est ainsi le même sur tous les appareils connectés à ce compte. Apple stocke ces données selon sa propre politique de confidentialité ; le développeur n’y a pas accès. Les réglages et les clés d’API ne sont pas synchronisés.

Si vous n’êtes pas connecté à iCloud, ou si iCloud est désactivé pour l’app, l’historique reste uniquement sur votre appareil. Pour arrêter la synchronisation, désactivez la synchronisation iCloud dans les réglages ; la copie déjà présente dans iCloud y reste jusqu’à ce que vous la supprimiez.

## Contenu provenant d’autres apps et accès à l’appareil

L’extension de partage reçoit uniquement le texte ou le lien que vous choisissez de partager avec elle. L’app n’écrit dans le presse-papiers que lorsque vous touchez Copier. Elle ne demande pas l’accès à vos contacts, photos, position, micro ou appareil photo.

Si Action Translation est votre app de traduction par défaut, la commande Traduire des autres apps ne lui transmet que le texte sélectionné, et la traduction démarre aussitôt. La traduction est enregistrée dans votre historique. Si vous touchez Remplacer, la traduction est renvoyée à cette app à la place du texte sélectionné.

## Supprimer vos données

- Pour supprimer une traduction, balayez-la dans l’historique.
- Si la synchronisation iCloud est activée, une traduction supprimée l’est aussi dans iCloud et sur vos autres appareils.
- Pour retirer une clé d’API, videz son champ dans les Réglages.
- La suppression de l’app efface vos réglages et l’historique sur cet appareil. L’historique dans iCloud est conservé : pour le supprimer, ouvrez Réglages > [votre nom] > iCloud > Gérer le stockage > Action Translation et supprimez ses données. iOS peut conserver des éléments du trousseau après la suppression d’une app : effacez donc d’abord vos clés d’API.
- Pour accéder aux données conservées par votre fournisseur d’IA ou les supprimer, contactez ce fournisseur.

## Apple et ce site web

Apple gère les téléchargements sur l’App Store selon sa propre politique de confidentialité. Si vous choisissez de partager des données d’analyse avec les développeurs d’apps dans vos réglages iOS, Apple peut transmettre au développeur des rapports d’utilisation et de plantage qui ne vous identifient pas.

Les pourboires des Réglages sont des achats intégrés facultatifs. Apple traite le paiement selon ses propres conditions ; le développeur ne reçoit aucune donnée de paiement et le pourboire ne débloque rien.

Ce site web est hébergé sur GitHub Pages, et GitHub peut enregistrer les adresses IP des visiteurs. Le site lui-même n’utilise ni cookies ni outils d’analyse.

Chaque fois que vous ouvrez l’app ou l’utilisez depuis le menu de partage ou la commande Traduire, elle télécharge depuis ce site la liste des modèles d’IA qu’elle utilise. Cette requête ne contient ni le texte que vous traduisez ni aucune donnée personnelle, mais, comme pour toute visite d’un site, GitHub peut enregistrer votre adresse IP.

## Enfants

Le développeur ne collecte sciemment de données personnelles auprès de personne, y compris auprès des enfants.

## Modifications de cette politique

Si cette politique change, la nouvelle version sera publiée sur cette page avec une nouvelle date.

## Contact

Si vous avez des questions, [ouvrez un ticket sur GitHub](https://github.com/claustrofob/actiontranslation/issues). Les tickets sont publics : n’y indiquez ni informations personnelles ni clés d’API. Pour toute demande relative à la confidentialité, écrivez à [action.translation.app@gmail.com](mailto:action.translation.app@gmail.com).
