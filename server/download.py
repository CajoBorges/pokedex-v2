import requests

def getAllPokemon():
    all = requests.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").json()
    final = {"count":all["count"],"data":[]}

    for i in range(all["count"]):
        pokemon = requests.get(f"https://pokeapi.co/api/v2/pokemon/{i+1}/").json()
        abilities = []
        for ability in pokemon["abilities"]:
            abilityjson = requests.get(ability["ability"]["url"]).json()
            abilityd = [d for d in abilityjson["effect_entries"] if d["language"]["name"] == "en"]
            abilities.append({"name":ability["ability"]["name"], "description":(abilityd[0] if len(abilityd) > 0 else "?")})
            print(abilities[-1])

        regular = [ability for ability in abilities if ability!=abilities[-1]]
        hidden = abilities[-1]
        final["data"].append({"name": all["results"][i]["name"],
                            "abilities":{"regular":regular,"hidden":hidden},
                            "base_experience":pokemon["base_experience"],
                            "national_dex_no": i,
                            "sprite":pokemon["sprites"]["front_default"],
                            "stats":{"hp": pokemon["stats"][0]["base_stat"],
                                     "atk": pokemon["stats"][1]["base_stat"],
                                     "def": pokemon["stats"][2]["base_stat"],
                                     "spatk": pokemon["stats"][3]["base_stat"],
                                     "spdef": pokemon["stats"][4]["base_stat"],
                                     "speed": pokemon["stats"][5]["base_stat"]}})

    with open("./pokedata.json", "w") as f:
        f.write(final)
getAllPokemon()