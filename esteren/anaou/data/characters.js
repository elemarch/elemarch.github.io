/*
 * INITIALISATION
 */
var characters = [];

var characters_mfs = {
    mf_home:    "Habite à",
    mf_age:     "Âge",
    mf_job:     "Métier",
    mf_people:  "Peuple",
    mf_cast:    "Caste",
    mf_faction: "Faction"
};
/*
 * ADD A CHARACTER
 *  name: complete name of the character
 *  home: where the character lives
 *  physical: the physical description of the character
 *  mental: the mental description of the character
 */

characters["deaglan"] = {
    name: "Déaglàn",
    title: "Démorthèn de Port-Ouestern",
    physical: "Un homme d'une trentaine d'année, les cheveux bruns et longs.",
    mental: "Il paraît tout le temps fatigué.",
    mf_home: "sanctuaire",
    mf_age: "~35",
    mf_job: "Démorthèn",
    mf_people: "Talkéride",
    mf_cast: "Démorthèns",
    mf_faction: "Taol-Kaer"
};

characters["remi"] = {
    name: "Rémi",
    title: "ou Bob",
	physical: "-",
	mental: "-",
    mf_home: "Bibliothèque de Brann",
    mf_age: "14 ans",
    mf_job: "Apprenti libraire",
    mf_people: "Talkéride",
    mf_cast: "Roturier",
    mf_faction: "Taol-Kaer"
};