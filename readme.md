# Info
Dit tooltje doet een validatie van alle htm(l) en css bestanden in de huidige directory en alle subdirectories volgens de HTML5 standaard.

# Prerequisites
Deze tool is ontwikkeld gebruikmakend van Java en Python en dienen vooraf geïnstalleerd te zijn.
## 'Python 3'
Controle:
> python3 --version

Download: https://www.python.org/downloads/
Kies de juiste download voor jouw systeem en volg de installatie instructies.

### module 'beautifulsoup4'
Ook de python module 'beautifulsoup4' (=bs4) is vereist.
De lijst van geïsntalleerde modules kan je raadplegen via:
> python3 -c 'help("modules")'

Indien niet aanwezig kan je dit installeren via:
> sudo apt install python3-bs4
--of (indien pip beschikbaar is)--
> pip3 install bs4

## 'Java 8' (of hoger)
JRE (Java Runtime Environment) is voldoende, dus JDK (Java Development Kit) is niet noodzakelijk. 
Controle:
> java --version

Downloads: https://www.oracle.com/java/technologies/downloads/
Kies de juiste download voor jouw systeem en volg de isntallatie instructies.

Voor Ubuntu kan ook:
> sudo apt install default-jre

# Validatie uitvoeren
Voer de validatie uit door in de terminal in de root van je project volgend commando uit te voeren:
> sh auto-validation.sh

Het resultaat komt in bestanden met de naam 'validatie-*.txt'.
