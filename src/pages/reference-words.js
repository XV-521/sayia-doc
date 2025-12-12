import {buildIPA, references} from "../basic/words.js";

function referencesTable() {
    let table = `<table class="ref-table top-table"><colgroup>
                        <col class="col-key"><col class="col-desc"><col class="col-desc">
                        </colgroup><tbody><tr><th>Words</th><th>Meaning</th><th>IPA</th></tr>`
    let count = 0

    for (const [w, m] of Object.entries(references)) {
        count += 1
        const theIPA = buildIPA(w)
        table += `<tr><td>${w}</td><td>${m}</td><td class="ipa">${theIPA}</td></tr>`
    }

    table += `</tbody></table>`
    return `<p>Total References: ${count}</p>` + table
}


export function ReferenceWordsPage() {
    return (
        `
        <section>
        ${referencesTable()}
        </section>
        `
    )
}