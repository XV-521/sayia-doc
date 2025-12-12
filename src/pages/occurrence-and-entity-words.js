import {buildIPA, occurrences} from "../basic/words.js";


function occurrencesAndEntitiesTable() {
    let table = `<table class="ref-table top-table small-table"><colgroup>
                        <col class="col-desc"><col class="col-desc"><col class="col-desc"><col class="col-desc">
                        <col class="col-desc"><col class="col-desc"><col class="col-desc">
                        </colgroup><tbody>
                        <tr><th colspan="4">Occurrences</th><th colspan="3">Entities</th></tr>
                        <tr><th>Category</th><th>Words</th><th>Meaning</th><th>IPA</th><th>Words</th><th>Meaning</th><th>IPA</th></tr>`


    function findSubWords(baseWord, obj) {
        let baseTable=""
        let count=0

        function fn(baseWord, obj) {
            const roots = obj["roots"]
            const combinations = obj["combinations"]

            if (roots !== undefined) {
                for (const [root, subObj] of Object.entries(roots)) {
                    count += 1
                    const word = baseWord + root
                    baseTable += `<tr><td>${word}</td><td>${subObj["meaning"]}</td><td class="ipa">${buildIPA(word)}</td></tr>`
                    fn(word, subObj)
                }
            }

            if (combinations !== undefined) {
                for (const [subWord, subObj] of Object.entries(combinations)) {
                    count += 1
                    const word = subWord + baseWord
                    baseTable += `<tr><td>${word}</td><td>${subObj["meaning"]}</td><td class='ipa'>${buildIPA(word)}</td></tr>`
                }
            }

        }

        fn(baseWord, obj)

        let subHigh = count

        if (baseTable === "") {
            baseTable = "<tr><td class='nil'></td><td class='nil'></td><td class='nil'></td></tr>"
            subHigh += 1
        }

        return {subTable: baseTable, subCount: count, subHigh: subHigh}

    }

    let occCount = 0
    let derAndComCount = 0

    for (const [_, group] of Object.entries(occurrences)) {
        const words = Object.entries(group["words"])

        let lCount = 0
        let sub = ""

        let high = 0
        for (const [w, o] of words) {

            occCount += 1

            const theIPA = buildIPA(w)

            const result = findSubWords(w, o)

            high += result.subHigh
            derAndComCount += result.subCount

            let row = ""

            row += `<td rowspan="${result.subHigh}">${w}</td>
                    <td rowspan="${result.subHigh}">${o["meaning"]}</td>
                    <td rowspan="${result.subHigh}" class="ipa">${theIPA}</td>`

            row += result.subTable.slice(4)

            if (lCount === 0) {
                sub += `${row}`
            } else {
                sub += `<tr>${row}`
            }

            lCount += 1
        }

        sub = `<tr><td rowspan="${high}">${group["category"]}</td>` + sub

        table += sub
    }

    table += `</tbody></table>`
    return `<p>Total Occurrences: ${occCount}</p>
            <p>Total Entities: ${derAndComCount}</p>` + table
}


export function OccurrenceAndEntityWordsPage() {
    return (
        ` 
        <section>
        ${occurrencesAndEntitiesTable()}
        </section>
        `
    )
}