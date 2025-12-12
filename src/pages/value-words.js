import {buildIPA, values} from "../basic/words.js";


function valuesTable() {
    let table = `<table class="ref-table top-table"><tbody><tr><th>Category</th><th>Words</th><th>Meaning</th><th>IPA</th></tr>`

    let count = 0

    for (const [p, group] of Object.entries(values)) {
        const rootsEntries = Object.entries(group["roots"])
        const len = rootsEntries.length

        let first = true
        let sub = ""

        for (const [w, m] of rootsEntries) {

            const theIPA = buildIPA(p + w)

            let row = ""

            if (first) {
                row += `<td rowspan="${len}">${group["category"]}</td>`
                first = false
            }

            row += `<td>${p + w}</td><td>${m}</td><td class="ipa">${theIPA}</td>`
            sub += `<tr>${row}</tr>`
            count++
        }

        table += sub
    }

    table += `</tbody></table>`
    return `<p>Total Values: ${count}</p>` + table
}


export function ValueWordsPage() {
    return (
        `
        <section>
        ${valuesTable()}
        </section>
        `
    )
}