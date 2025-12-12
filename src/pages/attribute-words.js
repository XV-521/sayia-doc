import { buildIPA, attributes} from "../basic/words.js";


function attributesTable() {
    let table = `<table class="ref-table top-table"><tbody><tr><th>Category</th><th>Word</th><th>Meaning</th><th>IPA</th></tr>`

    let count = 0

    for (const [_, group] of Object.entries(attributes)) {
        const rootsEntries = Object.entries(group["roots"])
        const len = rootsEntries.length

        let first = true
        let sub = ""

        for (const [w, m] of rootsEntries) {
            const theIPA = buildIPA(w)

            let row = ""

            if (first) {
                row += `<td rowspan="${len}">${group["category"]}</td>`
                first = false
            }

            row += `<td>${w}</td><td>${m}</td><td class="ipa">${theIPA}</td>`
            sub += `<tr>${row}</tr>`
            count++
        }

        table += sub
    }

    table += `</tbody></table>`
    return `<p>Total Attributes: ${count}</p>` + table
}


export function AttributeWordsPage() {
    return (
        `
        <section>
        ${attributesTable()}
        </section>
        `
    )
}