# Internet

## Un réseau de réseaux

**Internet** est un réseau mondial d'ordinateurs interconnectés permettant l’échange de données et la communication entre des millions de dispositifs. Il fonctionne grâce à des protocoles standardisés, comme TCP/IP, et supporte divers services tels que le Web, les emails, la messagerie instantanée et bien plus encore.

<img src="docs/img/01_HistoireWeb/inter_connectedd_network.png" alt="Resaux connecté" width="900">

Si internet est un réseau, il faut d'abord comprendre ce qu'est un réseau. **Un réseau** est un ensemble d'appareils connectés entre eux pour échanger des données, partager des ressources (comme des imprimantes ou des serveurs) et communiquer via des protocoles de communication.


<img src="docs/img/01_HistoireWeb/Exemple-reseau.png" alt="Exemple réseau interne" width="900">

Utilisé de tel réseau permet de nombreux avantage :

1. Partage de ressources (données)

2. Fiabilité (duplication)

3. Adaptabilité (scalabilité)

4. Collaboration

Néanmoins, utilsier un réseau implique de ce mettre d'accord sur un ensemble de règles, de **protocoles**. Ceci reviens à s'accorder sur :

- Le language à utiliser

- Les supports à utilsier

- Le moyen de faire transiter l'information

## Le modèle TCP/IP

Un de ces protocoles est le modèle TCP/IP. Ce protocole est organisé en quatre couches, chacune jouant un rôle spécifique dans la communication des données sur un réseau :


1. **Couche Accès Réseau (ou Couche Liaison)** :
Cette couche concerne la transmission physique des paquets sur les réseaux locaux (LAN) ou étendus (WAN). 

2. **Couche Internet** :
Cette couche gère l’adressage et le routage des paquets de données à travers différents réseaux grâce au protocole IP (Internet Protocol). 
Elle permet de trouver le chemin optimal pour chaque paquet. 

3. **Couche Transport** :
La couche Transport assure la fiabilité des communications entre l’expéditeur et le destinataire. Le protocole TCP (Transmission Control Protocol) garantit la livraison correcte des paquets. 

4. **Couche Application** :
Cette couche fournit des services directs aux utilisateurs et définit les protocoles pour des applications spécifiques (comme HTTP pour le web, SMTP pour les emails, ou FTP pour le transfert de fichiers).
Exemple : Lorsqu'un utilisateur entre une URL, le protocole HTTP est activé pour demander la page web.
 
<img src="docs/img/01_HistoireWeb/modele-tcp-ip.png" alt="modele TCP/IP" width="800">

### Couche Accès Réseau
Cette couche gère les protocoles de communication avec le matériel réseau, comme Ethernet ou Wi-Fi. 
C'est dans cette couche, que l'on va s'occuper du type de câble ou d'onde (Wi-Fi, 4G,..), des connecteurs,... La transmission des données sur cette couche ce fait via des bits.


### Couche Internet
C'est ce protocole IP qui gère le transport de paquets de données (datagrammes). 
Chaque machine possède une « adresse IP » qui permet de la localiser sur le réseau. Les datagrammes sont acheminés à destination (adresse IP) grâce à des routeurs qui
décident du chemin à emprunter jusqu’au routeur suivant… et ainsi de suite jusqu’à la destination.

<img src="docs/img/01_HistoireWeb/Transport_IP.png" alt="transport IP" width="900">

C'est également dans cette couche que l'on va retrouver les **routeurs** (router) et les **commutateur** (switch). 
Un commutateur est un objet qui va peremttre de connecter différents appareils au sein d'un même réseau local (LAN). 
Alors qu'un routeur connecte plusieurs réseaux différents (par exemple votre réseau local à Internet).

<img src="docs/img/01_HistoireWeb/Routeur_Commutateur.png" alt="switch router" width="900">


Chaque périphérique possèdent donc une adresse qui l'identifie au réseaux, il y existe deux type d'adresse :

1. **IPv4** : est composée de 32 bits, soit 4 octets, et est généralement écrite sous forme de quatre nombres décimaux séparés par des points (par exemple, 192.168.1.1)

2. **IPv6** : L'adresse IPv6 est composée de 128 bits, soit 16 octets, et est écrite sous forme de huit groupes de quatre chiffres hexadécimaux séparés par des deux-points (par exemple, 2001:0db8:85a3:0000:0000:8a2e:0370:7334)

À l'origine, c'est l'adresse IPv4 qui est apparue en première. Le problème est que celle-ci ne permet qu'un nombre trop restreint d'adresse différente. C'est pourquoi IPv6 a été inventé. 

En plus, de l'adresse IP, on introduit également un **masque de sous-réseau**. 
Un masque de sous-réseau (ou subnet mask) est un outil utilisé pour diviser un réseau IP en sous-réseaux plus petits, ce qui permet une gestion plus efficace de l'adressage IP. 
Il permet de définir quelle partie de l'adresse IP représente le réseau et quelle partie représente l'hôte (le dispositif spécifique dans le réseau).

Par exemple avec l'adresse IP suivante : 91.198.174.2 et le masque de sous-réseau : 255.255.224.0.

<img src="docs/img/01_HistoireWeb/IP_masque_sous_reseau.png" alt="masque sous réseau" width="900">

On voit que l'adresse du sous-réseau est 91.198.160.0 et que sur ce sous-réseau l'appareil à son adresse local étant 0.0.14.2.
L'utilisation d'un masque permet d'optimiser la bande passante en limitant les broadcast.

Le protocole IP permet d'assurer la communication, mais il n'offre pas beaucoup de garanties :

- Les données contenues dans le datagramme peuvent être corrompues durant le trajet

- Les datagrammes peuvent arriver dans un ordre différent de celui de l’envoi

- Les datagrammes peuvent être perdus

- Les datagrammes peuvent être dupliqués

Néanmoins, avec ce système les entêtes des datagrammes transmis ne sont pas corrompus.

### Couche transport

Pour pallier au faiblesse de protocole IP, il a fallu introduire de  nouveaux protocoles, dont notamment le protocole **TCP** (Transmission Control Protocol) et le protocole **UD** (User Datagram Protocol).

**Le TCP** (Transmission Control Protocol) est un protocole de communication fiable qui assure l'ordre et la validité des données transmises entre un émetteur et un destinataire. 
Chaque segment TCP inclut un numéro de séquence, permettant de garantir l'ordre des segments dans la transmission, et une somme de contrôle (checksum) qui est ajoutée par l'émetteur pour vérifier l'intégrité des données. 
Le destinataire vérifie cette somme de contrôle pour s'assurer de la validité des données reçues. 
De plus, TCP utilise un mécanisme d'acquittement : chaque segment reçu correctement doit être accompagné d'un acquittement (ACK). 
Si l'émetteur ne reçoit pas cet acquittement dans un délai imparti, il retransmet le segment, garantissant ainsi la fiabilité de la transmission. 
Enfin, un mécanisme de contrôle de flux est intégré à TCP pour éviter la surcharge du récepteur, en régulant la quantité de données envoyées à un moment donné.

**Le UDP** (User Datagram Protocol) fonctionne de manière plus simple et rapide. 
Contrairement à TCP, il ne nécessite pas de connexion préalable pour envoyer des données et ne garantit ni l'ordre ni la livraison des datagrammes. 
Chaque datagramme est envoyé indépendamment, ce qui le rend moins fiable que TCP, mais aussi plus rapide. 
Ce manque de contrôle sur la transmission fait d'UDP un choix privilégié pour les applications où la vitesse prime sur la fiabilité, comme dans le cas des jeux en ligne ou des communications VoIP. 
UDP est particulièrement adapté à la transmission rapide de petites quantités de données, souvent depuis un serveur vers de nombreux clients simultanément.


### Couche d'application 

La couche d'application est la couche la plus haute du modèle TCP/IP. 
Elle est responsable de l'interaction directe avec les utilisateurs ou les applications logicielles pour fournir des services réseau spécifiques. 
Contrairement aux autres couches, qui s'occupent de la transmission et de la gestion des données au niveau des paquets ou des connexions, la couche d'application offre des services qui permettent aux utilisateurs ou aux programmes de communiquer sur un réseau.

Elle englobe une large gamme de protocoles et services permettant de réaliser des tâches telles que la navigation web (HTTP), l'envoi d'emails (SMTP), le transfert de fichiers (FTP), la messagerie instantanée (XMPP), et bien plus encore. 
En d'autres termes, elle permet aux applications de s'appuyer sur les protocoles réseau pour envoyer et recevoir des données via le réseau.

Dans ce contexte, la couche d'application est responsable de :

- L'interface utilisateur pour les programmes qui utilisent le réseau.
- La gestion de la communication réseau au niveau des applications (par exemple, le format des messages, la gestion des erreurs, la synchronisation).
- La conversion des données pour garantir qu'elles sont compréhensibles pour l'utilisateur ou l'application.


## L'URL 

Une URL (Uniform Resource Locator) est une adresse web utilisée pour localiser une ressource sur Internet. 
Elle permet d'identifier de manière unique un fichier, une page ou un service en ligne en spécifiant son protocole (par exemple, HTTP ou HTTPS), son nom de domaine, et parfois un chemin spécifique vers la ressource (comme /page1 ou /images/photo.jpg)

Une URL se structure en plusieurs parties :

<img src="docs/img/01_HistoireWeb/URL_composition.png" alt="URL" width="900">

Notons qu'un **domaine** permet de regrouper un ensemble de machines appartenant généralement à une même organisation (ex : helmo.be). 
Le nom de domaine est composé de 2 parties : Top-level domain (TLD) : code du pays (.be, .fr,…) ou un code générique identifiant l’activité (.com,
.net,…) et le Sub-level domain (SLD) : un ou plusieurs labels séparés par un point (helmo, www.helmo, elearning.helmo,…). 
Chaque nom de domaine va être associé à l’adresse IP permettant de localiser la machine sur Internet.

L'URL peut être **aboslu** (c’est l ’adresse complète d’une ressource sur le web; elle est indépendante du contexte), ou **relatif** (c’est une adresse qui est dépendante du contexte (c-à-d de l’URL courante). Le protocole et le domaine ne sont pas spécifiés car déduits de l’URL courante.)

<img src="docs/img/01_HistoireWeb/URL_absolu_relatif.png" alt="URL absolu et relatif" width="900">


**En résumé, internet c'est un réseau de réseaux exploitant le protocole TCP/IP**