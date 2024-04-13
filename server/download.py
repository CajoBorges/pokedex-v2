import requests

def getAllPokemon():
    all = requests.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").json()
    final = {"count":all["count"],"data":[]}
    for i in all["count"]:
        pokemon = requests.get(f"https://pokeapi.co/api/v2/pokemon/{i}/").json()
        abilities = []
        for ability in pokemon["abilities"]:
            abilities.append({"name":ability["ability"]["name"], "description":requests.get(ability["ability"]["url"]).json()["effect_entries"][0]["effect"]})
        abilities = {"regular":ability[0:-1],"hidden":ability[-1]}
        final["data"][i] = {"name": all["results"][i]["name"], "abilities":abilities, "base_experience":pokemon["base_experience"], "national_dex_no": i, "sprite":pokemon["sprites"]["front_default"], "stats":{"hp": pokemon["stats"][0]["base_stat"], "atk": pokemon["stats"][1]["base_stat"], "def": pokemon["stats"][2]["base_stat"], "spatk": pokemon["stats"][3]["base_stat"], "spdef": pokemon["stats"][4]["base_stat"], "speed": pokemon["stats"][5]["base_stat"]}}