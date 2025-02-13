#!/bin/bash

# Définis ici les auteurs possibles (Nom et Email)
AUTHORS=(
    "clement-Yvars <clement.yvars2001@gmail.com>"
    "nikolasbaele <nikolasbaele@gmail.com>"
    "jan <parmusta@gmail.com>"
    "matiss2702 <matiss.haillouy@gmail.com>"
)

# Vérifie que le repo est bien un repo git
if [ ! -d .git ]; then
    echo "Ce script doit être exécuté depuis un dépôt Git."
    exit 1
fi


# Construction de la chaîne Python de la liste des auteurs
authors_list=""
for author in "${AUTHORS[@]}"; do
    if [ -n "$authors_list" ]; then
        authors_list+=", "
    fi
    authors_list+="\"$author\""
done

# Utilise git-filter-repo pour réécrire l'historique
cd "$TEMP_DIR"
/Users/cyvars/Library/Python/3.9/bin/git-filter-repo --commit-callback "
import random
authors = [${authors_list}]
author = random.choice(authors)
# On encode les chaînes en UTF-8 pour obtenir des objets bytes
commit.author_name = author.split()[0].encode('utf-8')
commit.author_email = author.split('<')[1].split('>')[0].encode('utf-8')
commit.committer_name = commit.author_name
commit.committer_email = commit.author_email
" --force

echo "Historique réécrit dans le dépôt temporaire : $TEMP_DIR"
