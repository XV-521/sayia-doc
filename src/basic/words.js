const ipa = {
    "a": "a",
    "b": "b",
    "c": "k",
    "d": "d",
    "e": "e",
    "f": "f",
    "g": "g",
    "h": "h",
    "i": "i",
    "j": "d͡ʒ",
    "k": "kʰ",
    "l": "l",
    "m": "m",
    "n": "n",
    "o": "o",
    "p": "p",
    "q": "kw",
    "r": "ɹ",
    "s": "s",
    "t": "t",
    "u": "u",
    "v": "v",
    "w": "w",
    "x": "ks",
    "y": "j",
    "z": "z",
}

const porn = {
    "A": "eɪ",
    "B": "biː",
    "C": "siː",
    "D": "diː",
    "E": "iː",
    "F": "ɛf",
    "G": "dʒiː",
    "H": "eɪtʃ",
    "I": "aɪ",
    "J": "dʒeɪ",
    "K": "keɪ",
    "L": "ɛl",
    "M": "ɛm",
    "N": "ɛn",
    "O": "oʊ",
    "P": "piː",
    "Q": "kjuː",
    "R": "ɑːr",
    "S": "ɛs",
    "T": "tiː",
    "U": "juː",
    "V": "viː",
    "W": "ˈdʌbəl.juː",
    "X": "ɛks",
    "Y": "waɪ",
    "Z": "ziː"
}

const vowels = ["a", "e", "i", "o", "u"]


function buildOneIPA(chars) {
    if (chars === "") return ""

    chars = chars.toLowerCase()

    const build = function (dur) {
        dur = dur.toLowerCase()
        const c0 = dur[0]
        const c1 = dur[1]

        if (!vowels.includes(c0) && !vowels.includes(c1)) {
            return `${ipa[c0]}ə${ipa[c1]}` ;
        }
        return `${ipa[c0]}${ipa[c1]}`
    }

    if (chars.includes(".")) {
        return "dot " + build(chars.slice(1))
    }

    let theIPA = ""
    if (chars.length % 2 !== 0) {
        theIPA += ipa[chars.at(0)]
        chars = chars.slice(1)
    } else {
        theIPA += build(chars.slice(0, 2))
        chars = chars.slice(2)
    }

    for (let i = 0; i < chars.length/2; i++) {
        const dur = chars.slice(i*2, (i+1)*2)
        const durIPA = build(dur)
        const tag = i === 0 ? "ˈ" : "ˌ"
        theIPA += tag + durIPA
    }

    return theIPA
}


export function buildIPA(chars) {

    const charsArr = chars.split("-")
    const result = charsArr.map(cs => buildOneIPA(cs))

    return `[${result.join(" ")}]`
}


export function buildPorn(chars) {
    chars = chars.toUpperCase()
    const c0 = chars[0]
    const c1 = chars[1]
    return `[ˌ${porn[c0]}ˈ${porn[c1]}]`
}


export const units = {
    'oA': 'epoch',
    'oB': 'century',
    'oC': 'decade',
    'oD': 'year',
    'oE': 'quarter',
    'oF': 'month',
    'oG': 'week',
    'oH': 'weekday',
    'oI': 'day',
    'oJ': 'hour',
    'oK': 'minute',
    'oL': 'second',
    'oM': 'millisecond',
    'oN': 'microsecond',
    'oO': 'nanosecond',
    'oP': 'picosecond',
    'cA': 'parsec',
    'cB': 'light_year',
    'cC': 'kilometer',
    'cD': 'meter',
    'cE': 'centimeter',
    'cF': 'millimeter',
    'cG': 'micrometer',
    'cH': 'nanometer',
    'cI': 'angstrom',
    'cJ': 'picometer',
    'gA': 'group',
    'gB': 'set/ serving',
    'gC': 'pile',
    'gD': 'batch',
    'gE': 'row',
    'gF': 'column',
    'gG': 'grid',
    'gH': 'series',
    'gI': 'course',
    'gJ': 'cycle',
    'gK': 'circuit / trajectory cycle',
    'gL': 'orbit',
    'gM': 'loop',
    'gN': 'times(count)',
    'gO': 'stage',
    'gP': 'step',
    'gQ': 'level',
    'gR': 'layer'
}


export const values = {
    "ox": {
        "category": "has or not",
        "roots": {
            "Tu": "has",
            "Un": "unknown",
            "Fs": "has not",
        },
    },

    "fa": {
        "category": "psychological evaluation",
        "roots": {
            "Pi": "positive",
            "Dx": "normal",
            "Dn": "negative",
        },
    },

    "zi": {
        "category": "degree",
        "roots": {
            "Ax": "lowest",
            "Bx": "very low",
            "Cx": "low",
            "Dx": "slightly low",
            "Ex": "medium",
            "Fx": "slightly high",
            "Gx": "high",
            "Hx": "very high",
            "Ix": "highest",
        }
    },

    "zf": {
        "category": "phase",
        "roots": {
            "Sr": "start",
            "Ar": "early",
            "Nw": "middle",
            "Lt": "later",
            "Ed": "end",
        }
    },

    "sd": {
        "category": "color",
        "roots": {
            "Re": "red",
            "Or": "orange",
            "Ye": "yellow",
            "Gn": "green",
            "Bu": "blue",
            "Pl": "purple",
            "Bn": "brown",
            "Pi": "pink",
            "Bk": "black",
            "Wt": "white",
            "Gy": "gray",
        }
    },

    "sf": {
        "category": "shape",
        "roots": {
            "Cl": "circle",
            "El": "ellipse",
            "Pl": "polygon",
            "Ri": "ring",
            "Bo": "ball-shaped",
            "Sl": "slice",
            "Pc": "piece",
            "Sd": "shred",
            "St": "star-shaped",
            "Ht": "heart-shaped",
            "Rd": "round",
            "Pw": "powdery",
            "Gl": "granular",
            "Cr": "crystalline",
            "Lm": "lumpy",
            "Fi": "fibrous",
        },
    },

    "am": {
        "category": "weather",
        "roots": {
            "Sn": "sunny",
            "Cl": "cloudy",
            "Ri": "rainy",
            "Wn": "windy",
            "Fg": "foggy",
            "So": "snowy",
        },
    },

    "aj": {
        "category": "direction",
        "roots": {
            "Ab": "above",
            "Bl": "below",
            "Tp": "top",
            "Bt": "bottom",
            "Lt": "left",
            "Ri": "right",
            "Fn": "front",
            "Bn": "behind",
            "Na": "near",
            "Fa": "far",
            "In": "inside",
            "Ot": "outside",
            "Sr": "center",
            "Am": "among",
            "Dg": "edge",
            "Rd": "surrounding",
        }
    },

    "sa": {
        "category": "physical state",
        "roots": {
            "So": "solid",
            "Li": "liquid",
            "Gs": "gas",
            "In": "ion",
        }
    },

    "hc": {
        "category": "gender",
        "roots": {
            "Ml": "male",
            "Fm": "female",
            "Nx": "non-binary"
        }
    },

    "sj": {
        "category": "smell",
        "roots": {
            "Ro": "rotten",
            "Fr": "fresh / clean smells",
            "Ap": "appetizing / edible smells",
            "Sn": "sensual / erotic smells",
            "St": "synthetic / chemical smells",
            "Wi": "weird smells",
            "Bi": "biting, pungent, etc."
        }
    },

    "si": {
        "category": "taste",
        "roots": {
            "Su": "sour",
            "St": "sweet",
            "Bi": "bitter",
            "Sp": "spicy",
            "Sl": "salty"
        }
    },

    "hd": {
        "category": "posture",
        "roots": {
            "Sn": "standing",
            "St": "sitting",
            "Wk": "walking ",
            "Rn": "running",
            "Cl": "climbing",
            "Jp": "jumping",
            "Sw": "swimming",
            "Ly": "lying",
            "Fy": "flying",
            "Ni": "kneeling",
            "Cr": "crouching",
            "Su": "squatting",
            "Ln": "leaning",
            "Rd": "riding",
            "Pc": "pinching",
            "Gp": "gripping",
            "Pu": "pulling",
        }
    }
}

export const attributes = {
    "o": {
        "category": "qualitative attributes",
        "roots": {
            "ox": "existence",
            "oa": "the nature of what it is",
            "ob": "presence",
            "oc": "availability",
            "od": "truthfulness",
            "oe": "explainability",
            "og": "knowability",
            "oi": "visibility",
            "oj": "ownability",
            "ol": "mobility",
            "om": "clarity",
            "op": "peacefulness",
            "os": "correctness",
            "ou": "normality",
            "ov": "naturalness"
        }
    },

    "a": {
        "category": "status attributes",
        "roots": {
            "ab": "state",
            "ac": "trend",
            "ad": "age",
            "af": "temperature",
            "ag": "position / location",
            "aj": "direction",
            "am": "weather",
            "an": "date / time",
            "ao": "content",
            "ap": "name / code-name",
            "ar": "speed",
            "ay": "meaning",
            "az": "value"
        }
    },

    "b": {
        "category": "material attributes",
        "roots": {
            "bd": "plasticity",
            "be": "ductility",
            "bf": "toughness",
            "bg": "elasticity",
            "bi": "hardness",
            "bj": "transparency",
            "bk": "light emission",
            "bl": "volatility",
            "bm": "solubility",
            "bn": "corrosiveness",
            "bo": "flammability",
            "bp": "viscosity",
            "bs": "diffusibility",
            "bt": "fluidity",
            "bu": "coverage",
            "bv": "electricity"
        }
    },

    "c": {
        "category": "experiential attributes",
        "roots": {
            "ca": "hunger",
            "cb": "thirst",
            "cd": "tiredness",
            "cf": "sleepiness",
            "cg": "pain",
            "ci": "itch",
            "cj": "nausea"
        }
    },

    "d": {
        "category": "emotional attributes",
        "roots": {
            "da": "pleasure",
            "db": "guiltiness",
            "dc": "loneliness",
            "de": "comfort",
            "df": "belonging",
            "dg": "security",
            "dh": "accomplishment",
            "di": "anxiety",
            "dj": "intimacy",
            "dl": "calmness",
            "dm": "romance",
            "dn": "freedom",
            "dp": "certainty",
            "dr": "fearfulness",
            "ds": "anger"
        }
    },

    "f": {
        "category": "attitudinal attributes",
        "roots": {
            "fa": "favorability",
            "fc": "lovability",
            "fd": "supportiveness",
            "fg": "trustworthiness",
            "fj": "familiarity",
            "fl": "expectancy",
            "fn": "gratefulness"
        }
    },

    "g": {
        "category": "ability attributes",
        "roots": {
            "ga": "ability",
            "gb": "intelligence",
            "gc": "creativity",
            "gd": "skill",
            "gf": "talent",
            "gh": "adaptability",
            "gi": "communication",
            "gj": "leadership",
            "gl": "strength",
            "gm": "potential",
            "gn": "endurance",
            "go": "sensibility",
            "gp": "consciousness",
            "gr": "memory"
        }
    },

    "h": {
        "category": "personal status attributes",
        "roots": {
            "ha": "health",
            "hb": "mood",
            "hc": "gender",
            "hd": "posture",
            "hf": "habit",
            "hg": "level of experience",
            "hj": "energy"
        }
    },
    "i": {
        "category": "personality attributes",
        "roots": {
            "ib": "kindness",
            "ic": "aggression",
            "id": "shyness",
            "ig": "greediness",
            "ih": "honesty",
            "ij": "cowardice",
            "il": "decisiveness",
            "im": "generosity",
            "in": "gentleness",
            "io": "helpfulness",
            "ip": "confidence",
            "ir": "reliability",
            "is": "attractiveness",
            "it": "aggressiveness",
            "iu": "inclusiveness",
            "iv": "responsibility",
            "iw": "friendliness",
            "iz": "maliciousness"
        }
    },

    "j": {
        "category": "system attributes",
        "roots": {
            "ja": "complexity",
            "jb": "stability",
            "jc": "robustness",
            "jd": "scalability",
            "je": "density",
            "jf": "sustainability",
            "jg": "predictability",
            "ji": "survivability",
            "jl": "operability",
            "jm": "completeness",
            "jo": "wholeness",
            "jp": "runnability",
            "jr": "maturity",
            "js": "orderliness",
            "jt": "diversity",
            "ju": "openness"
        }
    },

    "l": {
        "category": "logical attributes",
        "roots": {
            "la": "identity",
            "lb": "equality",
            "lc": "similarity",
            "ld": "relatedness",
            "lf": "specificity",
            "lg": "consistency"
        }
    },

    "m": {
        "category": "evaluative attributes",
        "roots": {
            "ma": "value(worth)",
            "mb": "price",
            "mc": "cost",
            "md": "credibility",
            "me": "enjoyability",
            "mf": "usefulness",
            "mg": "edibility",
            "mr": "freshness",
            "mi": "drinkability",
            "mj": "playability",
            "ml": "artistry",
            "mm": "controllability",
            "mn": "feasibility",
            "mo": "quality",
            "mp": "controversiality",
            "ms": "excessiveness",
            "mt": "importance",
            "mu": "interestingness",
            "mv": "symbolicity",
            "mx": "suitability",
            "mz": "popularity"
        }
    },

    "n": {
        "category": "action attributes",
        "roots": {
            "na": "effectiveness",
            "nb": "efficiency",
            "nc": "risk",
            "nd": "frequency",
            "nf": "repetitiveness",
            "ng": "way",
            "nh": "directness",
            "ni": "advisability",
            "nm": "executability",
            "np": "legality"
        }
    },

    "r": {
        "category": "structure attributes",
        "roots": {
            "rx": "structure",
            "ro": "mode",
            "rb": "rhythm",
            "rc": "melody",
            "rd": "type"
        }
    },

    "s": {
        "category": "qualitative attributes",
        "roots": {
            "sa": "physical state",
            "sc": "appearance",
            "sd": "color",
            "sf": "shape",
            "sg": "texture",
            "si": "taste",
            "sj": "smell",
            "sl": "sound",
            "sm": "brightness"
        }
    },

    "t": {
        "category": "physical attributes",
        "roots": {
            "ta": "length",
            "tb": "area",
            "tc": "volume",
            "td": "weight",
            "te": "mass",
            "tj": "distance",
            "tl": "diameter",
            "tm": "width",
            "tn": "height",
            "tv": "depth",
            "tw": "capacity",
            "tx": "height above the ground",
            "ty": "duration"
        }
    },

    "z": {
        "category": "degree attributes",
        "roots": {
            "zb": "rate",
            "zd": "possibility",
            "ze": "threshold",
            "zf": "phase",
            "zi": "degree",
            "zj": "probability",
            "zl": "quantity",
            "zn": "offset",
            "zm": "index",
            "zx": "level"
        }
    }
}


export const occurrences = {
    "o": {
        "category": "make the attribute show itself",
        "words": {
            "occ": {
                "meaning": "occur",
                "roots": {
                    "ot": {"meaning": "the object of the action"},
                    "sb": {"meaning": "the subject of the action"},
                    "ia": {"meaning": "the medium that enables the action"},
                    "ku": {"meaning": "the component that the action depend on"},
                    "tf": {"meaning": "starting point, from who(what) or where"},
                    "tg": {"meaning": "target, to who(what) or where"},
                    "sn": {"meaning": "the sign of the action"},
                    "dt": {"meaning": "the product of the action"},
                    "pc": {"meaning": "the place where this action take place."},
                    "tm": {"meaning": "the time when the action occurs"},
                    "pr": {"meaning": "the purpose of the action"},
                    "nk": {"meaning": "the obstacle of the action"},
                },
            },

            "oox": {
                "meaning": "exist",
                "roots": {
                    "sb": {"meaning": "thing"},
                    "ia": {"meaning": "time"},
                    "sn": {"meaning": "event"},
                    "pc": {"meaning": "position/location"},
                    "tm": {"meaning": "date"},
                    "tg": {"meaning": "world"},
                    "dt": {"meaning": "nothingness"},
                },
            },

            "oji": {
                "meaning": "live",
                "roots": {
                    "sb": {
                        "meaning": "living organisms",
                        "roots": {
                            "Hu": {"meaning": "human"},
                            "Ai": {"meaning": "AI"},
                            "Mo": {
                                "meaning": "animal",
                                "roots": {
                                    "Mi": {"meaning": "cat"},
                                    "Wo": {"meaning": "dog"},
                                    "Fi": {"meaning": "fish"},
                                    "Ka": {"meaning": "kangaroo"},
                                    "Zi": {"meaning": "mouse"},
                                    "Le": {"meaning": "elephant"},
                                    "Li": {"meaning": "lion"},
                                    "Ti": {"meaning": "tiger"},
                                    "Ft": {"meaning": "turtle"},
                                    "Ho": {"meaning": "horse"},
                                    "Co": {"meaning": "cow"},
                                    "Bi": {"meaning": "bird"},
                                    "Pg": {"meaning": "pig"},
                                    "Ch": {"meaning": "chicken"},
                                    "Dk": {"meaning": "duck"},
                                    "Gt": {"meaning": "goat"},
                                    "Sh": {"meaning": "sheep"},
                                    "Br": {"meaning": "bear"},
                                    "Mk": {"meaning": "monkey"},
                                    "Dr": {"meaning": "deer"},
                                    "Rb": {"meaning": "rabbit"},
                                    "Pn": {"meaning": "penguin"},
                                    "Ns": {"meaning": "insect"},
                                    "Di": {"meaning": "crocodile"},
                                    "Fx": {"meaning": "fox"},
                                    "Cl": {"meaning": "camel"}
                                },
                            },
                            "Pt": {
                                "meaning": "plant",
                                "roots": {
                                    "Tr": {"meaning": "tree"},
                                    "Hb": {"meaning": "herbal"},
                                    "Bs": {"meaning": "bush"},
                                    "Vc": {"meaning": "vine"},
                                    "Ct": {"meaning": "cactus"},
                                    "Bm": {"meaning": "bamboo"},
                                    "Mo": {"meaning": "moss"}
                                },
                            },
                            "Fg": {"meaning": "fungus"},
                            "Mc": {
                                "meaning": "microorganisms",
                                "roots": {
                                    "Ba": {"meaning": "bacteria"},
                                    "Fu": {"meaning": "fungi"},
                                    "Vx": {"meaning": "virus"}
                                },
                            },
                        },
                    },
                    "ia": {"meaning": "daily necessities"},
                    "sn": {"meaning": "life"},
                    "pc": {"meaning": "home"},
                },
            },

            "ojp": {
                "meaning": "make something start up",
                "roots": {
                    "ot": {"meaning": "system"},
                    "ia": {"meaning": "button / switch"},
                    "ku": {"meaning": "heart, engine, motor"},
                },
            },

            "osm": {
                "meaning": "make something shine",
                "roots": {
                    "ot": {"meaning": "lamp"},
                    "sn": {"meaning": "light"},
                },
            },

            "oju": {
                "meaning": "make something open",
                "roots": {
                    "ot": {"meaning": "door"},
                    "ia": {"meaning": "key"},
                    "pc": {"meaning": "park"},
                },
            },

            "obo": {
                "meaning": "make something burn",
                "roots": {
                    "ot": {"meaning": "fuel / combustibles"},
                    "ia": {
                        "meaning": "ignition sources",
                        "roots": {
                            "Mt": {"meaning": "matches"},
                            "Lr": {"meaning": "lighter"},
                        }
                    },
                    "sn": {"meaning": "fire"},
                    "dt": {"meaning": "ash"},
                    "nk": {"meaning": "fire extinguisher"}
                },
            },

            "obu": {
                "meaning": "cover",
                "roots": {
                    "ia": {
                        "meaning": "cover(n.)",
                        "combinations": {
                            "coxotBo-": {"meaning": "blanket/ quilt"}
                        }
                    },
                },
            },

            "obv": {
                "meaning": "make something generate electricity",
                "roots": {
                    "ot": {"meaning": "generator"},
                }
            },

            "oag": {
                "meaning": "fix",
                "roots": {
                    "sn": {"meaning": "point"},
                }
            },

            "ota": {
                "meaning": "extend",
                "roots": {
                    "sn": {"meaning": "line"},
                }
            },

            "otb": {
                "meaning": "expand",
                "roots": {
                    "sn": {"meaning": "surface"},
                }
            },

            "otc": {
                "meaning": "occupy",
                "roots": {
                    "ot": {"meaning": "space"},
                    "sn": {"meaning": "volume"},
                    "dt": {
                        "meaning": "regions",
                        "roots": {
                            "Ga": {"meaning": "galaxy"},
                            "Pl": {"meaning": "planet"},
                            "Ct": {"meaning": "continent"},
                            "Cn": {"meaning": "country"},
                            "St": {"meaning": "state"},
                            "Pr": {"meaning": "province"},
                            "Cu": {"meaning": "county"},
                            "Ci": {"meaning": "city"},
                            "Di": {"meaning": "district"},
                            "Tn": {"meaning": "town"},
                            "Vi": {"meaning": "village"},
                            "Ro": {"meaning": "street"},
                            "Bc": {"meaning": "block"},
                            "Co": {"meaning": "community"},
                            "Ho": {"meaning": "household"},
                        },
                    },
                },
            },

            "otw": {
                "meaning": "make something contained",
                "roots": {
                    "ia": {
                        "meaning": "container",
                        "roots": {
                            "Bo": {"meaning": "bottle"},
                            "Bs": {"meaning": "basin"},
                            "Bx": {"meaning": "box"}
                        }
                    },
                }
            },

            "ooe": {
                "meaning": "explain",
            },

            "ogr": {
                "meaning": "memorize",
                "roots": {
                    "sn": {"meaning": "memory"},
                }
            },

            "old": {
                "meaning": "make contact with",
            },

            "oaj": {
                "meaning": "face(v.)",
                "roots": {
                    "sn": {
                        "meaning": "direction",
                        "roots": {
                            "Ab": {"meaning": "above"},
                            "Bl": {"meaning": "below"},
                            "Tp": {"meaning": "top"},
                            "Bt": {"meaning": "bottom"},
                            "Lt": {"meaning": "left"},
                            "Ri": {"meaning": "right"},
                            "Fn": {"meaning": "front"},
                            "Bn": {"meaning": "behind"},
                            "Na": {"meaning": "near"},
                            "Fa": {"meaning": "far"},
                            "In": {"meaning": "inside"},
                            "Ot": {"meaning": "outside"},
                            "Sr": {"meaning": "center"},
                            "Am": {"meaning": "among"},
                            "Dg": {"meaning": "edge"},
                            "Rd": {"meaning": "surrounding"},
                        }
                    },
                }
            },
        },
    },

    "a": {
        "category": "through the act of creating, the attribute appear",
        "words": {
            "aox": {
                "meaning": "create / make something exist",
                "roots": {
                    "sb": {"meaning": "creator"},
                    "ia": {"meaning": "inspiration"},
                    "pc": {"meaning": "studio"},
                },
            },

            "amf": {
                "meaning": "produce",
                "roots": {
                    "sb": {"meaning": "worker"},
                    "ia": {
                        "meaning": "material",
                        "roots": {
                            "Wd": {"meaning": "woo"},
                            "Ga": {"meaning": "glass"},
                            "Pa": {"meaning": "plastic"},
                            "Lx": {"meaning": "electronic"},
                            "Tn": {"meaning": "stone"},
                            "Mt": {"meaning": "metal"},
                            "Fa": {"meaning": "fabric"},
                            "Rb": {"meaning": "rubber"},
                            "Ce": {"meaning": "ceramic"},
                            "Cn": {"meaning": "concrete"}
                        },
                    },
                    "dt": {"meaning": "product"},
                    "pc": {"meaning": "factory"},
                },
            },

            "amg": {
                "meaning": "cook/ make some food",
                "roots": {
                    "ia": {
                        "meaning": "cooking ingredients",
                        "roots": {
                            "Sl": {"meaning": "salt"},
                            "Sg": {"meaning": "sugar"},
                            "Sd": {"meaning": "salad"},
                            "Pp": {"meaning": "pepper"},
                            "Jm": {"meaning": "jam"},
                            "Li": {"meaning": "chili powder"},
                            "Sc": {"meaning": "soy sauce"},
                            "Vn": {"meaning": "vinegar"},
                            "Wn": {"meaning": "cooking wine"},
                            "Oi": {"meaning": "oil"},
                            "Lv": {"meaning": "leaven"},
                            "So": {"meaning": "shortening"},
                            "Ht": {"meaning": "hot sauce"},
                            "Fi": {"meaning": "flavor"},
                            "Fl": {"meaning": "flour"},
                            "Oa": {"meaning": "oats"},
                            "Ri": {"meaning": "rice"},
                            "Bt": {"meaning": "butter"},
                            "Cm": {"meaning": "whipping cream"},
                            "Cs": {"meaning": "cheese"},
                            "Eg": {"meaning": "egg"},
                            "Mt": {"meaning": "meat"},
                            "Fu": {
                                "meaning": "fruit",
                                "roots": {
                                    "Ap": {"meaning": "apple"},
                                    "Pr": {"meaning": "pear"},
                                    "Pc": {"meaning": "peach"},
                                    "Wt": {"meaning": "watermelon"},
                                    "Ct": {"meaning": "cantaloupe"},
                                    "Na": {"meaning": "banana"},
                                    "On": {"meaning": "orange"},
                                    "Dr": {"meaning": "durian"},
                                    "Lm": {"meaning": "lemon"},
                                    "Ju": {"meaning": "jujube"},
                                    "Br": {"meaning": "strawberry"},
                                    "Pn": {"meaning": "pineapple"},
                                    "Gr": {"meaning": "grape"},
                                },
                            },
                            "Vg": {
                                "meaning": "vegetable",
                                "roots": {
                                    "To": {"meaning": "tomato"},
                                    "Eg": {"meaning": "eggplant"},
                                    "Li": {"meaning": "chili"},
                                    "Po": {"meaning": "potato"},
                                    "On": {"meaning": "onion"},
                                    "Ca": {"meaning": "carrot"},
                                    "Cl": {"meaning": "cauliflower"},
                                    "Bm": {"meaning": "bamboo shoots"},
                                    "Lt": {"meaning": "lettuce"},
                                    "Bn": {"meaning": "bean"},
                                },
                            },
                            "Fg": {
                                "meaning": "edible fungi",
                                "roots": {
                                    "Ms": {"meaning": "mushrooms"},
                                    "Tf": {"meaning": "tree fungus"},
                                },
                            },
                        }
                    }
                }
            },

            "alb": {
                "meaning": "copy",
                "roots": {
                    "ot": {"meaning": "original"},
                    "sb": {"meaning": "plagiarist"},
                    "ku": {"meaning": "RNA"},
                    "dt": {"meaning": "duplicate"},
                },
            },

            "ald": {
                "meaning": "derive",
                "roots": {
                    "ku": {
                        "meaning": "rootss",
                        "roots": {
                            "Hr": {"meaning": "hair"},
                            "Nl": {"meaning": "nail"},
                        },
                    },
                },
            },

            "abp": {
                "meaning": "secrete",
                "roots": {
                    "ku": {"meaning": "glands"},
                    "dt": {
                        "meaning": "secretions",
                        "roots": {
                            "Li": {"meaning": "saliva"},
                            "Ni": {"meaning": "runny nose"},
                            "Ti": {"meaning": "tears"},
                            "Mk": {"meaning": "milk"}
                        },
                    },
                },
            },

            "aao": {
                "meaning": "write",
                "roots": {
                    "sb": {"meaning": "writer"},
                    "ia": {
                        "meaning": "writing tools",
                        "roots": {
                            "Pi": {
                                "meaning": "pen",
                                "roots": {
                                    "Cl": {"meaning": "pencil"},
                                    "Kb": {"meaning": "carbon Pen"},
                                    "Mk": {"meaning": "Marker pen"}
                                },
                            },
                            "Pr": {"meaning": "paper"},
                            "Ri": {"meaning": "eraser"}
                        },
                    },
                    "sn": {"meaning": "word"},
                    "dt": {"meaning": "written works"},
                }
            },

            "asd": {
                "meaning": "render",
                "roots": {
                    "sb": {"meaning": "painter"},
                    "ia": {
                        "meaning": "painting tools",
                        "roots": {
                            "Ca": {"meaning": "pigment"},
                            "Br": {"meaning": "brush"}
                        },
                    },
                    "ku": {"meaning": "renderer"},
                    "dt": {"meaning": "painting"},
                },
            },

            "asf": {
                "meaning": "outline(v.)",
                "roots": {
                    "dt": {"meaning": "sketch"}
                }
            },
            "asg": {
                "meaning": "engrave",
                "roots": {
                    "dt": {
                        "meaning": "sculpture",
                        "combinations": {
                            "coxotBo-": {"meaning": "tattoo"},
                        },
                    },
                }
            },

            "aml": {
                "meaning": "make art",
                "roots": {
                    "sb": {"meaning": "artist"},
                    "dt": {"meaning": "art"},
                },
            },

            "arc": {
                "meaning": "make music",
                "roots": {
                    "sb": {"meaning": "musician"},
                    "dt": {"meaning": "music"},
                    "ia": {
                        "meaning": "musical instruments",
                        "roots": {
                            "Tr": {
                                "meaning": "string instruments",
                                "roots": {
                                    "Ln": {"meaning": "violin"},
                                    "Gt": {"meaning": "guitar"},
                                    "Hp": {"meaning": "harp"},
                                    "Gu": {"meaning": "guzheng"},
                                }
                            },
                            "Kb": {
                                "meaning": "keyboard instruments",
                                "roots": {
                                    "Po": {"meaning": "piano"},
                                    "Og": {"meaning": "organ"},
                                    "Kb": {"meaning": "keyboard"}
                                }
                            },
                            "Wn": {
                                "meaning": "Wind instruments",
                                "roots": {
                                    "Fu": {"meaning": "flute"},
                                    "Ob": {"meaning": "oboe"},
                                    "Sx": {"meaning": "saxophone"},
                                    "Tu": {"meaning": "trumpet"},
                                    "Bg": {"meaning": "bagpipes"},
                                    "Hr": {"meaning": "harmonica"},
                                    "Ac": {"meaning": "accordion"}
                                }
                            },
                            "Pk": {
                                "meaning": "percussion instruments",
                                "roots": {
                                    "Dm": {"meaning": "drum"},
                                    "Cm": {"meaning": "cymbals"},
                                    "Ml": {"meaning": "marimba"},
                                    "Lo": {"meaning": "xylophone"},
                                    "Tg": {"meaning": "triangle"}
                                }
                            },
                        }
                    }
                }
            },
        },
    },
    "b": {
        "category": "make the attribute disappear",
        "words": {
            "box": {
                "meaning": "make something disappear / clean something up",
                "roots": {
                    "ot": {"meaning": "stains"},
                    "sb": {"meaning": "cleaner"},
                    "ia": {
                        "meaning": "cleaning tools",
                        "roots": {
                            "Mb": {"meaning": "mop"},
                            "Bm": {"meaning": "broom"},
                            "Dv": {"meaning": "dustpan"},
                            "Vx": {"meaning": "vacuum"},
                            "Sw": {"meaning": "soap"},
                            "Sh": {"meaning": "shampoo"},
                            "Tb": {"meaning": "toothbrush"},
                            "Tp": {"meaning": "toothpaste"},
                            "Tg": {"meaning": "towel"},
                            "Ds": {"meaning": "dishwashing liquid"},
                            "Ws": {"meaning": "washing machine"},
                        },
                    },
                },
            },

            "bob": {
                "meaning": "discard",
                "roots": {
                    "ia": {"meaning": "garbage can"},
                    "dt": {"meaning": "garbage"},
                    "pc": {"meaning": "garbage dump"},
                },
            },

            "boj": {
                "meaning": "lose",
            },

            "bji": {
                "meaning": "kill/ make something(or someone) die",
                "roots": {
                    "sb": {"meaning": "killer"},
                    "sn": {"meaning": "death"},
                    "dt": {"meaning": "corpses"},
                },
            },

            "bmf": {
                "meaning": "consume",
                "roots": {
                    "ot": {"meaning": "resource"},
                    "sb": {"meaning": "consumer"},
                },
            },

            "bnc": {
                "meaning": "prevent / avoid",
                "roots": {
                    "ia": {"meaning": "vaccine"},
                    "ku": {"meaning": "spleen"},
                }
            },

            "bjf": {
                "meaning": "make something stop",
                "roots": {
                    "pc": {
                        "meaning": "station",
                        "combinations": {
                            "cagiaCa-": {"meaning": "car park"},
                            "cagiaSb-": {"meaning": "subway station"},
                            "cagiaBs-": {"meaning": "bus station"},
                            "cagiaAr-": {"meaning": "airport"},
                            "cagiaTn-": {"meaning": "train station"},
                            "cagiaBt-": {"meaning": "dock"},
                        },
                    },
                }
            },

            "bju": {
                "meaning": "make something close",
            },

            "bol": {
                "meaning": "imprison",
                "roots": {
                    "ia": {"meaning": "cage"},
                    "pc": {"meaning": "prison cell"},
                },
            },


            "bmr": {
                "meaning": "rot",
                "roots": {
                    "nk": {"meaning": "preservative"},
                },
            },

            "bfa": {
                "meaning": "make something bad",
            },

            "bgp": {
                "meaning": "coma",
            },

            "bgr": {
                "meaning": "forget",
            },

            "btj": {
                "meaning": "go",
                "roots": {
                    "ku": {"meaning": "foot"},
                }
            },

            "bmn": {
                "meaning": "give up",
            },
        },
    },

    "c": {
        "category": "change the attribute to the next state",
        "words": {
            "cab": {
                "meaning": "change something",
            },

            "cag": {
                "meaning": "make something move / transport",
                "roots": {
                    "ot": {"meaning": "goods"},
                    "sb": {"meaning": "driver"},
                    "ia": {
                        "meaning": "transportation",
                        "roots": {
                            "Ca": {"meaning": "car"},
                            "Bk": {"meaning": "bike"},
                            "Sb": {"meaning": "subway"},
                            "Bs": {"meaning": "bus"},
                            "Ar": {"meaning": "airplane"},
                            "Tn": {"meaning": "train"},
                            "Tk": {"meaning": "truck"},
                            "Sc": {"meaning": "scooter"},
                            "Mb": {"meaning": "motorbike"},
                            "Sk": {"meaning": "skateboard"},
                            "Bt": {"meaning": "boat"},
                            "Tx": {"meaning": "taxi"},
                        },
                    },
                    "nk": {"meaning": "obstacle"},
                    "pc": {"meaning": "road"}
                },
            },

            "caj": {
                "meaning": "turn",
                "roots": {
                    "ia": {"meaning": "gear"},
                    "pc": {"meaning": "turning point / corner"},
                    "ku": {"meaning": "joint"},
                },
            },

            "cro": {
                "meaning": "evolve",
                "roots": {
                    "sb": {
                        "meaning": "evolver",
                        "roots": {
                            "Se": {"meaning": "society"},
                            "Na": {"meaning": "nature"}
                        },
                    },
                    "dt": {"meaning": "nation"},
                },
            },

            "csf": {
                "meaning": "flow",
                "roots": {
                    "pc": {"meaning": "channel"},
                    "ku": {"meaning": "blood / juice"}
                },
            },

            "cdm": {
                "meaning": "marry",
                "roots": {
                    "sn": {"meaning": "wedding"},
                    "dt": {"meaning": "marriage"},
                    "pc": {"meaning": "wedding hall"},
                },
            },

            "cla": {
                "meaning": "convert",
                "roots": {
                    "ku": {"meaning": "converter"}
                },
            },

            "cob": {
                "meaning": "absorb",
                "roots": {
                    "ot": {"meaning": "nutrition"},
                },
            },

            "czl": {
                "meaning": "add",
            },

            "ctx": {
                "meaning": "make something rise",
            },

            "cjm": {
                "meaning": "build",
                "roots": {
                    "ot": {"meaning": "building"},
                    "sb": {"meaning": "builder"},
                    "pc": {"meaning": "construction sites"},
                },
            },

            "cmo": {
                "meaning": "improve",
            },

            "czi": {
                "meaning": "raise",
            },

            "cjo": {
                "meaning": "develop",
                "roots": {
                    "ot": {"meaning": "app"},
                    "sb": {"meaning": "developer"},
                }
            },

            "cjr": {
                "meaning": "cultivate",
                "roots": {
                    "ot": {
                        "meaning": "cultivated things",
                        "combinations": {
                            "ojisbMo-": {"meaning": "livestock"},
                            "ojisbPt-": {"meaning": "crop"},
                        },
                    },
                    "sb": {"meaning": "peasant"},
                    "ia": {
                        "meaning": "feed",
                        "combinations": {
                            "ojisbMo-": {"meaning": "animal feed"},
                            "ojisbPt-": {"meaning": "fertilizers"},
                        },
                    },
                    "pc": {
                        "meaning": "farm",
                        "combinations": {
                            "ojisbMcBa-": {"meaning": "petri dish"},
                        },
                    },
                },
            },

            "cox": {
                "meaning": "grow",
                "roots": {
                    "ot": {
                        "meaning": "body part",
                        "roots": {
                            "He": {"meaning": "head"},
                            "Bo": {"meaning": "body"},
                            "Nk": {"meaning": "neck"},
                            "Am": {"meaning": "arm"},
                            "Lg": {"meaning": "leg"},
                            "As": {"meaning": "ass"},
                            "Ws": {"meaning": "waist"},
                            "Wr": {"meaning": "wrist"},
                            "Ab": {"meaning": "abdomen"},
                            "Br": {"meaning": "breast / udder"},
                            "Ti": {"meaning": "tail"},
                            "Ro": {"meaning": "root"},
                            "St": {"meaning": "stem"},
                            "Lf": {"meaning": "leaf"},
                            "Lr": {"meaning": "flower"},
                            "Fo": {"meaning": "fruit"},
                            "Sd": {"meaning": "seed"}
                        },
                    },
                }
            },

            "ctj": {
                "meaning": "get away",
            },

            "caf": {
                "meaning": "heat",
                "roots": {
                    "ia": {"meaning": "oven"}
                }
            },

            "cbv": {
                "meaning": "charge(electric)",
                "roots": {
                    "ot": {"meaning": "battery"},
                    "ia": {"meaning": "charger"},
                    "pc": {"meaning": "plug"},
                }
            },

            "cja": {
                "meaning": "process",
                "roots": {
                    "ku": {"meaning": "liver"},
                }
            },

            "cbu": {
                "meaning": "wrap",
            },
        }
    },

    "d": {
        "category": "restore the attribute",
        "words": {
            "dha": {
                "meaning": "treat",
                "roots": {
                    "ot": {"meaning": "patient, injured"},
                    "sb": {"meaning": "doctor"},
                    "ia": {
                        "meaning": "medical equipment",
                        "roots": {
                            "Dg": {"meaning": "medicine"},
                            "Bd": {"meaning": "bandage"},
                            "Ap": {"meaning": "antiseptic"},
                        },
                    },
                    "pc": {"meaning": "hospital"},
                },
            },

            "dmf": {
                "meaning": "repair",
                "roots": {
                    "ot": {"meaning": "broken things"},
                    "sb": {"meaning": "repairman"},
                    "ia": {
                        "meaning": "repair tools",
                        "roots": {
                            "Wr": {"meaning": "wrench"},
                            "Pi": {"meaning": "pliers"},
                            "Si": {"meaning": "screws"},
                            "Sd": {"meaning": "screwdriver"},
                            "Ha": {"meaning": "hammer"},
                            "Tp": {"meaning": "tape"},
                        },
                    },
                    "pc": {"meaning": "repair shop"},
                },
            },

            "dgr": {
                "meaning": "remind",
            },

            "doa": {
                "meaning": "mention",
            },
        },
    },

    "f": {
        "category": "decrease the attribute",
        "words": {
            "ftc": {
                "meaning": "shrink",
            },

            "fjm": {
                "meaning": "dismantle",
            },

            "fzl": {
                "meaning": "remove",
            },

            "ftj": {
                "meaning": "get closer",
            },

            "fdn": {
                "meaning": "limit",
            },

            "faf": {
                "meaning": "cool down",
                "roots": {
                    "ia": {"meaning": "refrigerator"}
                }
            },

            "fzi": {
                "meaning": "reduce",
            },

            "ftx": {
                "meaning": "make something fall",
            },
        },
    },

    "g": {
        "category": "through the act of binding, the attribute shows itself",
        "words": {
            "gob": {
                "meaning": "storage, save",
                "roots": {
                    "ia": {"meaning": "cabinet"},
                    "ku": {"meaning": "fat"},
                    "pc": {
                        "meaning": "archives",
                        "combinations": {
                            "tmbia-": {"meaning": "bank"},
                            "gaodt-": {"meaning": "archives"},
                            "saoiaBo-": {"meaning": "library"},
                        },
                    },
                },
            },

            "gao": {
                "meaning": "record",
                "roots": {
                    "ku": {"meaning": "DNA, recorder"},
                    "dt": {"meaning": "records / data"},
                    "pc": {"meaning": "file"},
                },
            },

            "gag": {
                "meaning": "mark / anchor",
                "roots": {
                    "dt": {"meaning": "mark / sign"},
                },
            },

            "gap": {
                "meaning": "name(v.) / code name",
                "roots": {
                    "sn": {"meaning": "name"},
                },
            },

            "gsc": {
                "meaning": "take photo",
                "roots": {
                    "sb": {"meaning": "photographer"},
                    "ia": {"meaning": "camera"},
                    "dt": {"meaning": "photo"},
                },
            },

            "gzl": {
                "meaning": "count(v.)",
                "roots": {
                    "ia": {"meaning": "counter"},
                    "dt": {"meaning": "count(n.)"},
                }
            },

            "gju": {
                "meaning": "lock(v.)",
                "roots": {
                    "ia": {"meaning": "lock(n.)"},
                }
            },

            "gng": {
                "meaning": "decide",
                "roots": {
                    "dt": {"meaning": "decision"},
                }
            },
        }
    },


    "i": {
        "category": "keep the attribute as it is",
        "words": {

            "iac": {
                "meaning": "continue to do",
            },

            "iha": {
                "meaning": "maintain",
                "roots": {
                    "pc": {
                        "meaning": "maintenance salon",
                        "combinations": {
                            "sscku-": {"meaning": "beauty salons"},
                            "aldkuHr-": {"meaning": "barbershops"},
                            "aldkuNl-": {"meaning": "nail salon"},
                            "coxotBo-asgdt-": {"meaning": "tattoo parlor"},
                            "coxotBo-": {"meaning": "massage clinic"}
                        },
                    },
                },
            },

            "idg": {
                "meaning": "protect",
                "roots": {
                    "sb": {"meaning": "bodyguard"}
                },
            },

            "iag": {
                "meaning": "stay",
                "roots": {
                    "sb": {"meaning": "resident"},
                    "ia": {"meaning": "chair"},
                    "pc": {"meaning": "room"}
                },
            },

            "ijp": {
                "meaning": "run(system)",
                "roots": {
                    "ia": {"meaning": "electricity"},
                    "nk": {"meaning": "error"}
                },
            },

            "iox": {
                "meaning": "have",
            },

            "ioj": {
                "meaning": "own",
                "roots": {
                    "sb": {"meaning": "owner"},
                }
            },

            "iob": {
                "meaning": "carry",
                "roots": {
                    "ia": {"meaning": "bag"},
                    "sb": {"meaning": "carrier"}
                },
            },

            "iit": {
                "meaning": "fight",
                "roots": {
                    "sb": {"meaning": "soldier"},
                    "sn": {"meaning": "war"}
                }
            },

            "inf": {
                "meaning": "do something repeatedly",
            },

            "iov": {
                "meaning": "make something disorderly",
                "roots": {
                    "ot": {
                        "meaning": "natural objects",
                        "roots": {
                            "Wn": {"meaning": "wind"},
                            "Ri": {"meaning": "rain"},
                            "So": {"meaning": "snow"},
                            "Ky": {"meaning": "sky"},
                            "Ln": {"meaning": "land"},
                            "Sg": {"meaning": "mountain"},
                            "St": {"meaning": "river"},
                            "Lk": {"meaning": "lake"},
                            "Sx": {"meaning": "sea"},
                            "Bz": {"meaning": "beach"},
                            "Kn": {"meaning": "canyon"},
                            "Ds": {"meaning": "desert"},
                            "Cl": {"meaning": "cloud"},
                            "Fg": {"meaning": "fog"},
                            "Wt": {"meaning": "water"},
                        }
                    },
                }
            },

            "iaj": {
                "meaning": "go straight",
            },
        },
    },

    "j": {
        "category": "through the act of acting upon something or someone, the attribute shows itself",
        "words": {
            "jab": {
                "meaning": "act on",
            },

            "jio": {
                "meaning": "help",
                "roots": {
                    "ot": {"meaning": "help seekers"},
                    "sb": {"meaning": "helper"},
                },
            },

            "jit": {
                "meaning": "attack",
                "roots": {
                    "ot": {"meaning": "enemy"},
                    "sb": {"meaning": "warrior"},
                    "ia": {"meaning": "weapon"},
                },
            },

            "jaj": {
                "meaning": "lead",
                "roots": {
                    "sb": {
                        "meaning": "leader",
                        "combinations": {
                            "tgdpc-": {"meaning": "school principal"},
                            "otcdtCn-": {"meaning": "president"},
                            "otcdtSt-": {"meaning": "governor"},
                            "otcdtCi-": {"meaning": "mayor"},
                        },
                    },
                },
            },

            "jmm": {
                "meaning": "control",
                "roots": {
                    "ot": {"meaning": "machine"},
                    "ia": {"meaning": "power, authority"},
                    "ku": {"meaning": "brain, controller"}
                },
            },

            "jnm": {
                "meaning": "command(v.)",
                "roots": {
                    "sn": {"meaning": "command(n.)"},
                }
            },

            "jmf": {
                "meaning": "use",
                "roots": {
                    "ot": {"meaning": "tools"},
                    "sb": {"meaning": "user"},
                    "ku": {"meaning": "hand"}
                },
            },

            "jmj": {
                "meaning": "play",
                "roots": {
                    "ot": {
                        "meaning": "toy or game",
                        "roots": {
                            "Bo": {
                                "meaning": "ball",
                                "roots": {
                                    "Fo": {"meaning": "football / soccer"},
                                    "Bt": {"meaning": "basketball"},
                                    "Vo": {"meaning": "volleyball"},
                                    "Tn": {"meaning": "tennis"},
                                    "Bd": {"meaning": "badminton"},
                                    "Tb": {"meaning": "table tennis"},
                                    "Bs": {"meaning": "baseball"},
                                    "Rg": {"meaning": "rugby"},
                                    "Gf": {"meaning": "golf"},
                                    "Bl": {"meaning": "billiard"},
                                    "Bn": {"meaning": "bowling"},
                                    "Sf": {"meaning": "softball"},
                                }
                            },
                            "Fr": {"meaning": "frisbee"},
                            "Gm": {"meaning": "video games"},
                            "Cd": {"meaning": "playing card"}
                        },
                    },
                    "sb": {"meaning": "player"},

                    "sn": {"meaning": "hobby"},
                    "pc": {"meaning": "playground"},
                },
            },

            "jis": {
                "meaning": "tempt",
            },

            "jfd": {
                "meaning": "support (emotional)",
                "roots": {
                    "sb": {"meaning": "supporter"},
                },
            },

            "jde": {
                "meaning": "serve",
                "roots": {
                    "sb": {"meaning": "server"},
                }
            },

            "jaf": {
                "meaning": "adjust the temperature",
                "roots": {
                    "ia": {"meaning": "air conditioner"},
                }
            },

            "jag": {
                "meaning": "put",
                "roots": {
                    "tg": {"meaning": "table"},
                }
            },

            "job": {
                "meaning": "capture",
                "roots": {
                    "sb": {
                        "meaning": "police",
                        "combinations": {
                            "ojisbMo-": {"meaning": "hunter"},
                        },
                    },
                }
            },

            "jmg": {
                "meaning": "feed",
                "roots": {
                    "ku": {"meaning": "nipple / teat"}
                }
            },

            "jfg": {
                "meaning": "think something is real / believe",
            },

            "jfl": {
                "meaning": "hope doing something",
                "roots": {
                    "sn": {"meaning": "hope(n.)"}
                }
            },

            "jni": {
                "meaning": "suggest doing something",
                "roots": {
                    "sn": {"meaning": "suggestion"}
                }
            },

            "jtv": {
                "meaning": "drill / dig",
                "roots": {
                    "sn": {"meaning": "hole"},
                }
            },
        },
    },

    "l": {
        "category": "through the act of accepting or taking on something, the attribute shows itself",
        "words": {
            "laj": {
                "meaning": "follow",
                "roots": {
                    "sb": {"meaning": "follower"},
                },
            },

            "lnm": {
                "meaning": "execute",
                "roots": {
                    "sb": {"meaning": "executor"},
                    "sn": {"meaning": "step"},
                    "ku": {"meaning": "muscle"},
                }
            },

            "lis": {
                "meaning": "be obsessed with",
            },


            "lrx": {
                "meaning": "support (physical) / prop up",
                "roots": {
                    "ot": {"meaning": "tent"},
                    "ia": {"meaning": "frame"},
                    "ku": {"meaning": "skeleton"},
                }
            },

            "lab": {
                "meaning": "react",
            },
        },
    },
    "m": {
        "category": "through the act of structuring, the attribute shows itself",
        "words": {
            "mox": {
                "meaning": "gestate",
                "roots": {
                    "ot": {"meaning": "baby"},
                    "sb": {"meaning": "pregnant women"},
                    "ku": {"meaning": "uterus"},
                },
            },

            "mmn": {
                "meaning": "plan(v.)",
                "roots": {
                    "sb": {"meaning": "planner"},
                    "dt": {"meaning": "plan(n.)"},
                    "nk": {"meaning": "trouble"}
                },
            },

            "mom": {
                "meaning": "think",
                "roots": {
                    "ot": {"meaning": "content of thought"},
                    "sb": {"meaning": "thinker"},
                    "dt": {"meaning": "thought, idea"},
                },
            },

            "mjs": {
                "meaning": "organize",
                "roots": {
                    "sb": {
                        "meaning": "organizer",
                        "combinations": {
                            "smlsn-": {"meaning": "director"},
                        },
                    },
                    "ia": {"meaning": "rule"},
                    "dt": {"meaning": "structure"},
                    "pc": {"meaning": "company"}
                },
            },

            "mro": {
                "meaning": "design",
                "roots": {
                    "sb": {
                        "meaning": "designer",
                        "combinations": {
                            "smlsn-": {"meaning": "screenwriter"},
                        },
                    },
                    "dt": {"meaning": "design"},
                },
            },

            "mjp": {
                "meaning": "program(v.)",
                "roots": {
                    "sb": {"meaning": "programmer"},
                    "ia": {"meaning": "editor"},
                    "dt": {"meaning": "program(n.)"},
                    "sn": {"meaning": "code(n.)"},
                    "nk": {"meaning": "bug"}
                },
            },

            "mmv": {
                "meaning": "hold ceremony for ...",
                "roots": {
                    "sn": {
                        "meaning": "ceremony",
                        "combinations": {
                            "bjisn-": {"meaning": "funeral"},
                        },
                    }
                }
            },

            "may": {
                "meaning": "understand",
            },
        },
    },

    "n": {
        "category": "through the act of exploring, the attribute may show itself",
        "words": {
            "nag": {
                "meaning": "find",
                "roots": {
                    "ia": {"meaning": "path"},
                }
            },

            "nog": {
                "meaning": "explore",
                "roots": {
                    "ot": {"meaning": "problem"},
                    "sn": {"meaning": "knowledge"},
                    "pr": {"meaning": "truth"},
                }
            },

            "nod": {
                "meaning": "research",
                "roots": {
                    "ot": {
                        "meaning": "subject",
                        "roots": {
                            "Ms": {"meaning": "math"},
                            "Ph": {"meaning": "physics"},
                            "Cm": {"meaning": "chemical"},
                            "Ar": {"meaning": "art subject"},
                            "Mu": {"meaning": "music subject"},
                            "Lt": {"meaning": "literature"},
                            "Hs": {"meaning": "history"},
                            "So": {"meaning": "sociology"},
                            "Pl": {"meaning": "politics"}
                        },
                    },
                    "sb": {"meaning": "researcher"},
                    "ia": {"meaning": "research materials"},
                    "dt": {"meaning": "report"},
                    "pc": {"meaning": "institute"},
                },
            },

            "nao": {
                "meaning": "ask(a question)",
                "roots": {
                    "ot": {"meaning": "question"},
                    "sb": {"meaning": "asker"},
                    "dt": {"meaning": "answer"},
                },
            },

            "nos": {
                "meaning": "verify",
            },

            "naf": {
                "meaning": "measure the temperature",
                "roots": {
                    "ia": {"meaning": "thermometer"},
                }
            },

            "nhg": {
                "meaning": "travel",
                "roots": {
                    "sb": {"meaning": "traveler"},
                },
            },

            "ndp": {
                "meaning": "choose",
            },

            "ngr": {
                "meaning": "recall",
            },

            "nro": {
                "meaning": "observe",
                "roots": {
                    "sb": {"meaning": "observer"},
                    "pc": {"meaning": "observatory"},
                }
            },

            "nld": {
                "meaning": "someone derives A from B",
                "roots": {
                    "ia": {"meaning": "formula"},
                    "sn": {"meaning": "derivation"},
                }
            },

            "nay": {
                "meaning": "discuss / talk",
                "roots": {
                    "sn": {"meaning": "topic"},
                }
            },

            "naz": {
                "meaning": "compute",
            },
        },
    },

    "p": {
        "category": "through aggregation, the attribute shows itself",
        "words": {

            "plg": {
                "meaning": "unite",
                "roots": {
                    "ia": {"meaning": "slogan"},
                    "dt": {"meaning": "team"},
                    "nk": {"meaning": "conflict"}
                },
            },

            "pjm": {
                "meaning": "combine",
                "roots": {
                    "sn": {"meaning": "combinations"},
                    "nk": {"meaning": "difference"},
                }
            },

            "pmx": {
                "meaning": "be with",
            },

            "pld": {
                "meaning": "relate; association",
                "roots": {
                    "ot": {
                        "meaning": "related roles",
                        "roots": {
                            "Ln": {"meaning": "landlord"},
                            "Em": {"meaning": "employer"},
                            "Ep": {"meaning": "employees"},
                            "Ca": {"meaning": "classmates"},
                            "Co": {"meaning": "colleagues"},
                            "Fr": {"meaning": "friend"},
                            "Lv": {"meaning": "lover"},
                            "Md": {"meaning": "dad"},
                            "Ms": {"meaning": "Mom"},
                            "Gd": {"meaning": "grandfather"},
                            "Gs": {"meaning": "grandmother"},
                            "Cl": {"meaning": "child"},
                            "Ad": {"meaning": "uncle"},
                            "As": {"meaning": "aunt"},
                            "Rd": {"meaning": "brother"},
                            "Rs": {"meaning": "sister"},
                            "Pt": {"meaning": "pet"},
                        },
                    },
                    "sb": {"meaning": "intermediary"},
                    "sn": {"meaning": "relationship"},
                    "dt": {"meaning": "family / community"},
                    "pc": {"meaning": "interface"},
                    "nk": {"meaning": "psychological gap"}
                },
            },

            "pob": {
                "meaning": "attend",
                "roots": {
                    "sb": {"meaning": "attendee"}
                }
            },

            "poj": {
                "meaning": "join",
                "roots": {
                    "sn": {"meaning": "member"},
                }
            },

            "pjt": {
                "meaning": "blend / mix",
                "roots": {
                    "ia": {"meaning": "blender"},
                    "ku": {"meaning": "stomach"},
                }
            },

            "psc": {
                "meaning": "meet",
                "roots": {
                    "sn": {"meaning": "meeting"},
                }
            },
        },
    },

    "r": {
        "category": "through dispersion, the attribute disappear",
        "words": {
            "rlg": {
                "meaning": "disband",
            },

            "rla": {
                "meaning": "crush",
                "roots": {
                    "ia": {"meaning": "crusher"},
                    "dt": {"meaning": "fragments"},
                    "ku": {"meaning": "tooth"},
                },
            },

            "rol": {
                "meaning": "isolate",
                "roots": {
                    "ia": {"meaning": "insulated box"},
                    "ku": {"meaning": "skin, isolator"},
                },
            },

            "rjt": {
                "meaning": "filter(v.)",
                "roots": {
                    "ia": {"meaning": "filter(n.)"},
                    "dt": {"meaning": "impurities"},
                    "ku": {"meaning": "kidney"},
                },
            },

            "rlc": {
                "meaning": "differentiate",
                "roots": {
                    "dt": {"meaning": "category"},
                },
            },

            "rjo": {
                "meaning": "break / cut",
                "roots": {
                    "ia": {"meaning": "scissors"},
                }
            },
        },
    },

    "s": {
        "category": "through the act of outward-directed actions, the attribute shows itself",
        "words": {
            "sob": {
                "meaning": "give / send / transmit",
                "roots": {
                    "ia": {"meaning": "mail"},
                    "pc": {"meaning": "port"},
                    "ku": {"meaning": "nerves"},
                },
            },

            "ssc": {
                "meaning": "exhibit, show / make the appearance presented",
                "roots": {
                    "pc": {"meaning": "exhibition hall"},
                    "ku": {"meaning": "face"},
                    "nk": {"meaning": "flaw"}
                },
            },

            "say": {
                "meaning": "express",
                "roots": {
                    "ot": {"meaning": "content expressed"},
                    "ia": {"meaning": "language"},
                    "pc": {"meaning": "podium"},
                },
            },

            "smp": {
                "meaning": "debate",
                "roots": {
                    "sb": {"meaning": "debater"},
                    "sn": {"meaning": "dispute"},
                    "dt": {"meaning": "conclusion"},
                },
            },

            "smb": {
                "meaning": "sell",
                "roots": {
                    "ot": {"meaning": "products / things for sale"},
                    "sb": {"meaning": "seller"},
                    "dt": {"meaning": "income"},
                    "pc": {
                        "meaning": "shop / store",
                        "combinations": {
                            "ojiia-": {"meaning": "daily necessities store"},
                            "tmgot-": {"meaning": "restaurant"},
                            "tmgotFu-": {"meaning": "fruit shop"},
                            "tmgotBr-": {"meaning": "bakery"},
                            "tmiotCf-": {"meaning": "coffee shop"},
                            "coxotLr-": {"meaning": "flower shop"},
                            "asddt-": {"meaning": "gallery"},
                            "tbuot-": {"meaning": "clothing store"},
                            "tmiotOc-": {"meaning": "bar"},
                        },
                    },
                },
            },

            "sbs": {
                "meaning": "release",
            },

            "sms": {
                "meaning": "excrete",
                "roots": {
                    "ot": {
                        "meaning": "excretion",
                        "roots": {
                            "Sg": {"meaning": "shit"},
                            "St": {"meaning": "pee"},
                            "Sx": {"meaning": "fart"},
                            "Sw": {"meaning": "sweat"},
                            "Vu": {"meaning": "vomit"},
                        },
                    },
                    "ia": {"meaning": "toilet paper"},
                    "pc": {"meaning": "restroom"},
                    "tg": {"meaning": "toilet"},
                    "ku": {"meaning": "anus"}
                },
            },

            "shb": {
                "meaning": "vent",
            },

            "ssl": {
                "meaning": "make sound",
                "roots": {
                    "ku": {"meaning": "throat, sound player"},
                }
            },

            "sdm": {
                "meaning": "do sex-act",
                "roots": {
                    "ia": {"meaning": "sex toys"},
                    "dt": {"meaning": "gametes"},
                    "ku": {"meaning": "genitals"}
                },
            },

            "sgd": {
                "meaning": "teach(something)",
                "roots": {
                    "sb": {"meaning": "teacher"},
                    "ia": {"meaning": "teaching materials"},
                },
            },

            "sao": {
                "meaning": "play media / make the content presented",
                "roots": {
                    "ot": {
                        "meaning": "content form",
                        "roots": {
                            "Tx": {"meaning": "text"},
                            "Im": {"meaning": "image"},
                            "Ad": {"meaning": "audio"},
                            "Vd": {"meaning": "video"},
                        }
                    },
                    "ia": {
                        "meaning": "media",
                        "roots": {
                            "Bo": {"meaning": "book"},
                            "Nu": {"meaning": "newspaper"},
                            "Fn": {"meaning": "phone"},
                            "Cp": {"meaning": "computer"},
                            "Tv": {"meaning": "TV"},
                            "Rd": {"meaning": "radio"},
                            "Vd": {"meaning": "video player"},
                        },
                    },
                    "sn": {"meaning": "content"},
                },
            },

            "sml": {
                "meaning": "perform",
                "roots": {
                    "sb": {"meaning": "performer / actor"},
                    "ia": {"meaning": "script"},
                    "sn": {
                        "meaning": "performance",
                        "roots": {
                            "Rm": {"meaning": "drama"},
                            "Mv": {"meaning": "movie"},
                            "Tv": {"meaning": "TV drama"},
                            "So": {"meaning": "song"},
                        },
                    },
                    "pc": {"meaning": "performance venue"},
                },
            },

            "sod": {
                "meaning": "prove",
                "roots": {
                    "sb": {"meaning": "witness"},
                    "ia": {"meaning": "certificate"}
                }
            },

            "sbt": {
                "meaning": "exhale",
            },

            "stb": {
                "meaning": "unfold(physically)",
            },

            "sjt": {
                "meaning": "list(v.)",
                "roots": {
                    "ot": {"meaning": "item"},
                    "dt": {
                        "meaning": "list",
                        "combinations": {
                            "tmgot-": {"meaning": "menu"},
                            "saosn-": {"meaning": "table of contents"}
                        }
                    }
                },
            },

            "shj": {
                "meaning": "do some exercise / sport",
                "roots": {
                    "ot": {
                        "meaning": "sport(n.)",
                        "roots": {
                            "Yg": {"meaning": "yoga"},
                            "Sf": {"meaning": "surfing"},
                            "Sn": {"meaning": "snorkeling"},
                            "Dv": {"meaning": "diving"},
                            "Wo": {"meaning": "work out"},
                            "Cb": {"meaning": "combat sports"},
                            "Ic": {"meaning": "ice skating"},
                            "Hk": {"meaning": "hike"}
                        }
                    },
                    "sb": {"meaning": "athlete"},
                }
            },

            "sni": {
                "meaning": "recommend",
                "roots": {
                    "sn": {"meaning": "recommendation"}
                }
            },

            "sfa": {
                "meaning": "like",
            },

            "sfc": {
                "meaning": "love",
            },

            "sfg": {
                "meaning": "trust",
                "roots": {
                    "sb": {"meaning": "believer"},
                    "sn": {"meaning": "trust(n.)"}
                }
            },

            "sfn": {
                "meaning": "be grateful to",
            },

            "siu": {
                "meaning": "invite",
            },

            "sag": {
                "meaning": "point to",
                "roots": {
                    "ku": {"meaning": "finger"},
                }
            },
        },
    },

    "t": {
        "category": "through the act of inward-directed actions, the attribute shows itself",
        "words": {
            "tob": {
                "meaning": "get / provide",
            },

            "tiu": {
                "meaning": "accept",
            },

            "tjm": {
                "meaning": "someone make something be incorporated into ...",
            },

            "tjr": {
                "meaning": "harvest, reap",
                "roots": {
                    "sb": {
                        "meaning": "reaper",
                        "combinations": {
                            "ojisbMo-": {"meaning": "butcher"},
                            "ojisbPtTr-": {"meaning": "lumberjack"},
                        },
                    },
                },
            },

            "tmb": {
                "meaning": "buy",
                "roots": {
                    "sb": {"meaning": "customer"},
                    "ia": {"meaning": "money"},
                },
            },

            "tgo": {
                "meaning": "feel",
                "roots": {
                    "sn": {"meaning": "feeling"},
                }
            },

            "tsc": {
                "meaning": "see / look",
                "roots": {
                    "ia": {
                        "meaning": "tools for seeing",
                        "roots": {
                            "Gl": {"meaning": "glasses"},
                            "Df": {"meaning": "magnifier"},
                            "Mc": {"meaning": "microscope"},
                            "Tl": {"meaning": "telescope"},
                        }
                    },
                    "ku": {"meaning": "eye"},
                    "pc": {"meaning": "window"}
                },
            },

            "tsl": {
                "meaning": "listen",
                "roots": {
                    "ot": {"meaning": "sound"},
                    "sb": {"meaning": "listener"},
                    "ia": {"meaning": "earphone"},
                    "ku": {"meaning": "ear"},
                },
            },

            "tmg": {
                "meaning": "eat",
                "roots": {
                    "sb": {"meaning": "eater"},
                    "ot": {
                        "meaning": "food",
                        "roots": {
                            "Br": {"meaning": "bread"},
                            "Hb": {"meaning": "hamburger"},
                            "Sa": {"meaning": "sandwich"},
                            "Ri": {"meaning": "rice"},
                            "Nd": {"meaning": "noodles"},
                            "Ck": {"meaning": "cake"},
                            "Pz": {"meaning": "pizza"},
                            "Ss": {"meaning": "sushi"},
                            "Dp": {"meaning": "dumpling"},
                            "Cr": {"meaning": "curry"},
                            "Su": {"meaning": "soup"},
                            "Eg": {"meaning": "egg"},
                            "Mt": {"meaning": "meat"},
                            "Nk": {"meaning": "snack"},
                            "Sf": {"meaning": "seafood"},
                            "Cd": {"meaning": "candy"},
                            "Ct": {"meaning": "chocolate"},
                            "Do": {"meaning": "donut"},
                            "Fu": {
                                "meaning": "fruit",
                                "roots": {
                                    "Ap": {"meaning": "apple"},
                                    "Pr": {"meaning": "pear"},
                                    "Pc": {"meaning": "peach"},
                                    "Wt": {"meaning": "watermelon"},
                                    "Ct": {"meaning": "cantaloupe"},
                                    "Na": {"meaning": "banana"},
                                    "On": {"meaning": "orange"},
                                    "Dr": {"meaning": "durian"},
                                    "Lm": {"meaning": "lemon"},
                                    "Ju": {"meaning": "jujube"},
                                    "Br": {"meaning": "strawberry"},
                                    "Pn": {"meaning": "pineapple"},
                                    "Gr": {"meaning": "grape"},
                                },
                            },
                            "Vg": {
                                "meaning": "vegetable",
                                "roots": {
                                    "To": {"meaning": "tomato"},
                                    "Eg": {"meaning": "eggplant"},
                                    "Li": {"meaning": "chili"},
                                    "Po": {"meaning": "potato"},
                                    "On": {"meaning": "onion"},
                                    "Ca": {"meaning": "carrot"},
                                    "Cl": {"meaning": "cauliflower"},
                                    "Bm": {"meaning": "bamboo shoots"},
                                    "Lt": {"meaning": "lettuce"},
                                    "Bn": {"meaning": "bean"},
                                },
                            },
                            "Fg": {
                                "meaning": "edible fungi",
                                "roots": {
                                    "Ms": {"meaning": "mushrooms"},
                                    "Tf": {"meaning": "tree fungus"},
                                },
                            },
                        },
                    },
                    "ia": {
                        "meaning": "kitchenware",
                        "roots": {
                            "Pn": {"meaning": "plate"},
                            "Bw": {"meaning": "bowl"},
                            "Bn": {"meaning": "spoon"},
                            "Fk": {"meaning": "fork"},
                            "Pt": {"meaning": "pot"},
                            "Kn": {"meaning": "knife"},
                        },
                    },
                    "pc": {"meaning": "dining room"},
                    "ku": {"meaning": "mouth"}
                },
            },

            "tmi": {
                "meaning": "drink",
                "roots": {
                    "ot": {
                        "meaning": "drink",
                        "roots": {
                            "Wt": {"meaning": "drinking water"},
                            "Sp": {"meaning": "sparkling water"},
                            "Sd": {"meaning": "soda"},
                            "Jc": {"meaning": "juice"},
                            "Mk": {"meaning": "milk"},
                            "Cf": {"meaning": "coffee"},
                            "Ti": {"meaning": "tea"},
                            "Mt": {"meaning": "milk tea"},
                            "Oc": {
                                "meaning": "alcoholic drinks",
                                "roots": {
                                    "Wn": {"meaning": "wine"},
                                    "Br": {"meaning": "beer"},
                                    "Cl": {"meaning": "cocktails"},
                                    "Gn": {"meaning": "gin"},
                                    "Rm": {"meaning": "rum"},
                                    "Vt": {"meaning": "vodka"},
                                    "Ws": {"meaning": "whisky"},
                                    "As": {"meaning": "absinthe"},
                                    "Sk": {"meaning": "sake"},
                                    "Sj": {"meaning": "soju"},
                                }
                            },
                        },
                    },
                    "sb": {"meaning": "drinker"},
                    "ia": {"meaning": "cup"},
                },
            },

            "tsj": {
                "meaning": "smell",
                "roots": {
                    "ku": {"meaning": "nose, olfactory organs"},
                },
            },

            "tsi": {
                "meaning": "taste",
                "roots": {
                    "ku": {"meaning": "tongue, taste organs"},
                },
            },

            "tbt": {
                "meaning": "inhale",
                "roots": {
                    "ot": {"meaning": "cigarette"},
                },
            },

            "tbu": {
                "meaning": "wear",
                "roots": {
                    "ot": {
                        "meaning": "clothing",
                        "roots": {
                            "In": {"meaning": "underwear"},
                            "Tp": {"meaning": "top"},
                            "Ps": {"meaning": "pants(trousers)"},
                            "Dr": {"meaning": "dress"},
                            "Su": {"meaning": "shoe"},
                            "Ht": {"meaning": "hat"},
                            "Gt": {"meaning": "glove"},
                        },
                    },
                },
            },

            "tgd": {
                "meaning": "study / learn",
                "roots": {
                    "sb": {"meaning": "learner, student"},
                    "dt": {
                        "meaning": "academic degree",
                        "roots": {
                            "Ab": {"meaning": "bachelor"},
                            "Ac": {"meaning": "master"},
                            "Ax": {"meaning": "doctor"},
                        },
                    },
                    "pc": {
                        "meaning": "school",
                        "roots": {
                            "Ai": {"meaning": "kindergarten"},
                            "Bi": {"meaning": "primary school"},
                            "Ci": {"meaning": "secondary school"},
                            "Di": {"meaning": "university"},
                            "Dx": {"meaning": "college"},
                            "Ex": {"meaning": "learning center"}
                        },
                    },
                },
            },

            "tao": {
                "meaning": "get information(read / watch/ know) from ...",
                "roots": {
                    "sb": {"meaning": "reader / audience"},
                    "sn": {"meaning": "information"},
                    "dt": {"meaning": "informed person"},
                }
            },

            "tfl": {
                "meaning": "need",
            },
        },
    },

    "u": {
        "category": "through the act of immersion, the attribute shows itself",
        "words": {
            "uab": {
                "meaning": "be in the state",
            },

            "uda": {
                "meaning": "pleasure",
                "roots": {
                    "sn": {"meaning": "pleasure/joy"}
                }
            },

            "ude": {
                "meaning": "relax",
                "roots": {
                    "pc": {"meaning": "lounge"},
                },
            },

            "udc": {
                "meaning": "be in loneliness",
            },

            "udf": {
                "meaning": "be in belonging",
            },

            "udg": {
                "meaning": "be in security",
            },

            "uds": {
                "meaning": "be in anger",
            },

            "udb": {
                "meaning": "be in guiltiness",
            },

            "ubt": {
                "meaning": "breathe",
                "roots": {
                    "ot": {"meaning": "air"},
                    "ia": {"meaning": "ventilator"},
                    "ku": {"meaning": "lung"},
                }
            },

            "uhg": {
                "meaning": "experience(v.)",
                "roots": {
                    "sn": {"meaning": "experience(n.)"},
                }
            },

            "ume": {
                "meaning": "enjoyability",
            },

            "ucf": {
                "meaning": "sleep",
                "roots": {
                    "ia": {"meaning": "bed"},
                    "sn": {"meaning": "dream"},
                    "pc": {"meaning": "bedroom"},
                    "nk": {"meaning": "alarm clock"},
                },
            },
        }
    },

    "v": {
        "category": "through the act of imitation, the attribute are forged",
        "words": {
            "vod": {
                "meaning": "cheat",
                "roots": {
                    "ia": {"meaning": "lie"},
                    "sb": {"meaning": "cheat"},
                },
            },

            "vos": {
                "meaning": "forged",
                "roots": {
                    "dt": {"meaning": "imitation"},
                }
            },
            "vsc": {
                "meaning": "roleplay",
                "roots": {
                    "ot": {"meaning": "role"},
                }
            }
        }
    },
}

export const references = {
    ".ae": "I / Me",
    ".ax": "We / Us",
    ".yo": "You",
    ".yx": "You(complex)",
    ".it": "The subject of the previous domain",
    ".ix": "Similar to 'it', if the main object of the preceding or outer sentence is a combination of multiple objects, then 'ix' is used.",
    ".ex": "Everything at present (including time, location, weather. etc)",
    ".ts": "The content of the previous sentence"
}


export function find(word) {

    function findOccObj(word) {
        const obj = occurrences[word[0]];
        if (obj === undefined) {
            return null;
        }
        const words = obj["words"];
        if (words === undefined) {
            return null;
        }
        const occObj = words[word]
        if (occObj === undefined) {
            return null;
        }
        return occObj
    }

    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const len = word.length
    let ipa = null
    let meaning = null
    let buildIpaFunc = buildIPA

    switch (len) {
        case 2: {
            if (lower.includes(word[1])) {
                const obj = attributes[word[0]];
                if (obj === undefined) {
                    return null;
                }
                const roots = obj["roots"];
                if (roots === undefined) {
                    return null;
                }
                meaning = roots[word];
                if (meaning === undefined) {
                    return null;
                }
                break
            }
            meaning = units[word]
            if (meaning === undefined) {
                return null;
            }
            buildIpaFunc = buildPorn
            break;
        }
        case 3: {
            if (word.includes(".")) {
                meaning = references[word]
                if (meaning === undefined) {
                    return null;
                }
                break
            }

            const subObj = findOccObj(word);
            if (subObj === null) {
                return null;
            }
            meaning = subObj["meaning"];
            if (meaning === undefined) {
                return null;
            }
            break
        }
        case 4: {
            const obj = values[word.slice(0, 2)];
            if (obj === undefined) {
                return null;
            }
            const roots = obj["roots"];
            if (roots === undefined) {
                return null;
            }
            meaning = roots[word.slice(2)];
            if (meaning === undefined) {
                return null;
            }
            break
        }

        default: {
            function findSubObj(word) {
                if (!len > 4 || len % 2 === 0) {
                    return null;
                }
                const occ = word.slice(0, 3)
                let subObj = findOccObj(occ);
                if (subObj === null) {
                    return null;
                }
                let others = word.slice(3)

                for (let i = 0; i < others.length; i += 2) {
                    const roots = subObj["roots"];
                    if (roots === undefined) {
                        return null;
                    }
                    const root = others.slice(i, i + 2);
                    subObj = roots[root];
                    if (subObj === undefined) {
                        return null;
                    }
                }
                return subObj;
            }

            if (word.includes("-")) {
                const wordArr = word.split("-")
                const lastSubWord = wordArr.at(-1)
                const subArr = wordArr.slice(0, -1)
                const mainSubWord = subArr.join("-") + "-"

                const subObj = findSubObj(lastSubWord);
                if (subObj === null) {
                    return null;
                }
                const combinations = subObj["combinations"];
                if (combinations === undefined) {
                    return null
                }
                const combinationObj = combinations[mainSubWord];
                if (combinationObj === undefined) {
                    return null;
                }
                meaning = combinationObj["meaning"];
                if (meaning === undefined) {
                    return null;
                }
                break
            }

            const subObj = findSubObj(word);

            if (subObj === null) {
                return null;
            }

            meaning = subObj["meaning"];
            if (meaning === undefined) {
                return null;
            }
            break
        }
    }

    ipa = buildIpaFunc(word);

    return {"word": word, "meaning": meaning, "ipa": ipa};
}

