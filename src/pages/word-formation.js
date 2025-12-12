import {chart} from "../mini-comps/chart.js";

export function WordFormationPage() {
    return (
        `
<section>
    <h2>Word Formation</h2>
    <p>
        In <span translate="no">Sayia</span>, basic words are grouped into five categories.
        Each category behaves differently. The <a href="/learn/word-formation/word-categories" class="inner-link">
        Word Categories</a> section below introduces them.
    </p>
    ${chart([0, 1])}
</section>
        `
    )
}