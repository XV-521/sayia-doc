import {chart} from "../mini-comps/chart.js";

export function GrammarPage() {
    return (
        `
<section id="grammar">
    <h1>Grammar</h1>
    <p>
    This chapter describes the structural elements of Sayia: Blocks, Phrases, Sentences, and Statements, 
    and how they interact. The chapter begins with <a href="/learn/grammar/block" class="inner-link">Blocks</a>.
    </p>
</section>
${chart([0, 5])}
        `
    )
}