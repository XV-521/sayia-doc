import {buildIPA} from "../basic/words.js";

export function basicTable(obj) {
    let table = `<table class="ref-table top-table"><colgroup>
                        <col class="col-key"><col class="col-desc"><col class="col-desc">
                        </colgroup><tbody><tr><th>Word</th><th>Meaning</th><th>IPA</th></tr>`

    for (const [w, m] of Object.entries(obj)) {
        const clearW = w.replace(":", "");
        const theIPA = buildIPA(clearW)
        table += `<tr><td>${w}</td><td>${m}</td><td class="ipa">${theIPA}</td></tr>`
    }

    table += `</tbody></table>`
    return table
}

export function customTable(obj, header) {
    let table = `<table class="top-table"><tbody>${header}`

    for (const [w, o] of Object.entries(obj)) {
        table += `<tr><td>${w}</td><td>${o["meaning"]}</td><td class="ipa">${o["ipa"]}</td></tr>`
    }

    table += `</tbody></table>`
    return table
}
