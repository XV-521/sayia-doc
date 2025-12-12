import {chart} from "../mini-comps/chart.js";

export function LearnPage() {
    return (
        `
<section id="learn">
    <h1>Learn</h1>
    <p>Two main features define <span translate="no">Sayia</span>:</p>
    <ul>
        <li>Everything is built around states and occurrences.</li>
        <li>The meaning of words, phrases, and sentences comes from explicit types, not sentence structure.</li>
    </ul>
    <p>The diagram below shows how the elements of <span translate="no">Sayia</span> fit together.
        To start learning <span translate="no">Sayia</span>, begin with <a href="/learn/state-and-occurrence" class="inner-link">State & Occurrence</a>.</p>
    ${chart([0, 5])}
</section>
        `
    )
}
