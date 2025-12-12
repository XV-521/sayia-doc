let relationSymbols = {
    "0": ["-"],
    "1": [".", "@", "$"],
    "3": ["^"],
    "6": ["/"]
}

let logicalSymbols = {
    "2": ["++", "--", ">>"],
    "4": ["!", "*"],
    "5": ["&&", "||"],
}


export function symbolPriority(
    includeRelation = false,
    includeLogical = false
) {

    let table = `<table class="ref-table"><colgroup><col class="col-key"><col class="col-desc">
                        </colgroup><tbody><tr><th>level</th><th>symbols</th></tr>`
    const lvs = Object()
    const finalLvs = Object()

    for (let i = 0; i < 7; i++) {
        lvs[String(i)] = []
    }

    for (let i = 0; i < 7; i++) {

        if (includeRelation) {
            const arr = relationSymbols[String(i)]
            if (arr !== undefined) {
                lvs[String(i)].push(...arr)
            }
        }
        if (includeLogical) {
            const arr = logicalSymbols[String(i)]
            if (arr !== undefined) {
                lvs[String(i)].push(...arr)
            }
        }
    }

    let key = 0
    for (const [_, v] of Object.entries(lvs)) {
        if (v.length === 0) continue
        finalLvs[String(key)] = v
        key += 1
    }

    for (const [k, v] of Object.entries(finalLvs)) {
        let symbols = ""
        for (const i of v) {
            symbols += `${i}, `
        }
        table += `<tr><td>${k}</td><td>${symbols.slice(0, -2)}</td></tr>`
    }

    table += `</tbody></table>`
    return table
}