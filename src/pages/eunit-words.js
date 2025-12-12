import {buildPorn, units} from "../basic/words.js";

function unitsTable() {
    let table = `<table class="ref-table top-table"><colgroup>
                        <col class="col-key"><col class="col-desc"><col class="col-desc">
                        </colgroup><tbody><tr><th>Words</th><th>Meaning</th><th>IPA</th></tr>`
    let count = 0

    for (const [w, m] of Object.entries(units)) {
        count += 1
        const theIPA = buildPorn(w)
        table += `<tr><td>${w}</td><td>${m}</td><td class="ipa">${theIPA}</td></tr>`
    }

    table += `</tbody></table>`
    return `<p>Total EUnits: ${count}</p>` + table
}


export function EUnitWordsPage() {
    return (
        `
        <section>
        ${unitsTable()}
        </section>
        `
    )
}