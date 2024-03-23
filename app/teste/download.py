import requests
from bs4 import BeautifulSoup
import json

body = requests.get("https://pokemondb.net/pokedex/all")
soup = BeautifulSoup(body.content, "html.parser")

listafinal = []
tabela = soup.find('table', class_='data-table')
linhas = tabela.find_all('tr')[1:]
for linha in linhas:
    colunas = linha.find_all('td')
    imagem = colunas[0].find('img', class_='img-fixed')['src']
    name = colunas[1].find('a', class_='ent-name').text.strip()
    forma = colunas[1].find('small', class_='text-muted')
    forma = "" if forma == None else forma.text.strip()
    number = colunas[0].find('span', class_='infocard-cell-data').text.strip()
    listatipos = colunas[2].text.strip().split(" ")
    tipo2 = ""
    if len(listatipos) > 1:
        tipo2 = listatipos[1]
    tipo1 = listatipos[0]
    hp = colunas[4].text.strip()
    attack = colunas[5].text.strip()
    defense = colunas[6].text.strip()
    spAttack = colunas[7].text.strip()
    spDefense = colunas[8].text.strip()
    speed = colunas[9].text.strip()
    stats = {"hp": hp, "atk": attack, "def": defense, "spatk": spAttack, "spdef": spDefense, "speed": speed}
    infopokemon = {"number": number,
                   "imagem": imagem,
                   "name": name,
                   "form": forma,
                   "tipo1": tipo1,
                   "tipo2": tipo2,
                   "stats": stats}
    listafinal.append(infopokemon)
json_data = json.dumps(listafinal, indent=4)
with open("pokeinfo.json", 'w') as json_file:
    json_file.write(json_data)