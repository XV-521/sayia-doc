import {basicTable} from "../mini-comps/table.js";

const attrs = {
    "mb": "price",
    "ml": "artistry",
    "ag": "position / location"
}

const vals = {
    "ziAx": "lowest",
    "ziBx": "very low",
    "ziCx": "low",
    "ziDx": "slightly low",
    "ziEx": "medium",
    "ziFx": "slightly high",
    "ziGx": "high",
    "ziHx": "very high",
    "ziIx": "highest",
}

const occs = {
    "tmb": "buy",
    "smb": "sell",
    "sml": "perform",
    "cag": "make something move / transport",
}

const entities0 = {
    "tmbsb": "customer",
    "tmbia": "money"
}


const entities1 = {
    "cagot": "goods",
    "cagsb": "driver",
    "cagia": "transportation",
    "cagiaCa": "car",
    "cagiaBk": "bike",
    "cagiaSb": "subway",
    "cagiaBs": "bus",
    "cagiaAr": "airplane",
    "cagiaTn": "train",
    "cagiaTk": "truck",
    "cagiaSc": "scooter",
    "cagiaMb": "motorbike",
    "cagiaSk": "skateboard",
    "cagiaBt": "boat",
    "cagiaTx": "taxi",
    "cagnk": "obstacle",
    "cagpc": "road"
}

const entities2 = {
    "smb": "sell",
    "smbpc": "shop / store",
    "ojiia": "daily necessities",
    "ojiia-smbpc": "daily necessities store",
    "tmgot": "food",
    "tmgot-smbpc": "restaurant",
    "tmiotCf": "coffee",
    "tmiotCf-smbpc": "coffee shop",
    "coxotLr": "flower",
    "coxotLr-smbpc": "flower shop",
    "asddt": "painting",
    "asddt-smbpc": "gallery",
    "tmiotOc": "alcoholic drinks",
    "tmiotOc-smbpc": "bar",
}


const refs = {
    ".ae": "I / Me",
    ".ax": "We / Us",
    ".yo": "You",
    ".yx": "You(complex)",
    ".it": "<!--suppress HtmlUnknownAnchorTarget -->The subject of the previous <a href='/learn/grammar/sentence/#about-domain-and-clause' class='inner-link'>domain</a>",
    ".ix": "Similar to 'it', if the main object of the preceding or outer sentence is a combination of multiple objects, then 'ix' is used.",
    ".ex": "Everything at present (including time, location, weather. etc)",
    ".ts": "The content of the previous sentence"
}

function valueAndAttribute() {
    return `
<section>
    <h2>Value & Attribute Word</h2>

    <section>
        <h3>Attribute Word</h3>
        <p>
        An Attribute Word represents an attribute and consists of 2 characters. <span translate="no">Sayia</span> 
        doesn’t have adjectives; instead, it uses state descriptions, which are usually based on attributes. Example:
        </p>
        ${basicTable(attrs)}
    </section>

    <section>
        <h3>Value Word</h3>
        <p>
        A Value Word represents a specific value. It always consists of 4 characters in camelCase, 
        and can be used to quantify or qualify an attribute. Example:</p>
        ${basicTable(vals)}
        <p>Value Words can combine with Attribute Words to form a description. Example:</p>
        <figure class="example">
        	<pre>
<span class="sayia">ziGx^mb</span>  <span class="comment">// high price</span>
<span class="sayia">ziGx^ml</span>  <span class="comment">// high artistry</span>
        	</pre>
        </figure>
    </section>
</section>
`
}


function occurrenceAndEntity() {
    return `
<section id="occurrence-and-entity-word">
    <h2>Occurrence & Entity Word</h2>
    <section id="occurrence-word">
        <h3>Occurrence Word</h3>
        <p>
        An Occurrence Word represents an action or event. It's 3 characters long, 
        formed from a 1-character Occurrence Prefix plus a 2-character Attribute 
        Word. Example:
        </p>
        ${basicTable(occs)}
    </section>
    <section id="entity-word">
        <h3>Entity Word</h3>
        <p>
        An Entity Word is derived from an Occurrence Word. Every Occurrence Word supports 12 
        suffixes, each marking a specific participant or element of the action:
        </p>
        <ul>
            <li>-ot: object of the action</li>
            <li>-sb: subject of the action</li>
            <li>-ia: medium that enables the action</li>
            <li>-ku: component that the action depends on</li>
            <li>-tf: starting point (what, where, when)</li>
            <li>-tg: target (what, where, when)</li>
            <li>-sn: sign of the action</li>
            <li>-dt: product or outcome of the action</li>
            <li>-pc: place where the action occurs</li>
            <li>-tm: time when the action occurs</li>
            <li>-pr: purpose of the action</li>
            <li>-nk: obstacle to the action</li>
        </ul>
        <p>Combining an Occurrence Word with one of these suffixes produces an Entity Word. Example:</p>
        ${basicTable(entities0)}
        <p>An Entity Word can itself be further derived, yielding more specific categories. Example:</p>
        ${basicTable(entities1)}
        <p>
        Although Sayia prefers category-based derivation, compound words are sometimes used. The rule is 
        simple:
        </p>
        <ul>
            <li>If the meaning depends on the structure of the category, derive it.</li>
            <li>If the meaning depends on external content, group it.</li>
        </ul>
        <p>Example:</p>
        ${basicTable(entities2)}
    </section>
</section>
    `
}

function aboutNumberAndUnit() {
    return (
        `
<!--suppress HtmlUnknownTarget -->
<section id="about-number-and-unit">
    <h2>About Number and Unit</h2>
    <section>
        <h3>About Number</h3>
        <p>A number in Sayia is a type of value. Numbers interact with words in 2 ways:</p>
        <ul>
            <li><strong>num + word:</strong> denotes a quantity of that word</li>
            <li><strong>word + num:</strong> denotes the item at index num in context</li>
        </ul> 
        <p>Indexing in Sayia starts at 0, since the first item naturally has an offset of 0.
        Example:</p>
        <figure class="example">
        	<pre>
<span class="sayia">2ojisbHu</span>  <span class="comment">// 2 people</span>
<span class="sayia">ojisbHu1 </span> <span class="comment">// person 2</span>
        	</pre>
        </figure>
    </section>
    <section>
        <h3>About Unit</h3>
    </section>
    <p>
    A unit can combine with a number to form a value. Units may come from
    <a href="https://en.wikipedia.org/wiki/SI_base_unit" target="_blank" rel="noopener noreferrer">SI base units</a>, 
    <a href="https://en.wikipedia.org/wiki/SI_derived_unit" target="_blank" rel="noopener noreferrer">SI derived units</a>, 
    and 
    <a href="https://en.wikipedia.org/wiki/Non-SI_units_mentioned_in_the_SI" target="_blank" rel="noopener noreferrer">
    SI accepted units</a>, all of which are also defined in 
    <a href="https://en.wikipedia.org/wiki/ISO_80000" target="_blank" rel="noopener noreferrer">ISO 80000</a>.
    <a href="https://en.wikipedia.org/wiki/ISO_4217" target="_blank" rel="noopener noreferrer">ISO 4217 
    currency units</a> may also be used. 
    When using SI/ISO units, the entire value must be wrapped in \`i: \` (this syntax is explained later in the   
    <a href="/learn/word-formation/borrowing" class="inner-link">Borrowing</a> section). Pronunciation should follow the 
    original English unit name, making it distinct from Sayia words. Example:</p>
    <figure class="example">
    	<pre>
<span class="sayia">\`i:2 h\`</span> <span class="comment">// 2 hours</span>
    	</pre>
    </figure>
    <p>
    Sayia also defines a set of special, commonly used units called eUnits, each consisting of one lowercase + one 
    uppercase character. These units do not always correspond to physical dimensions (e.g., set, stage). Some eUnits 
    overlap semantically with SI/ISO units, but only eUnits may be used in indexed expressions.
    </p>
    <ul>
        <li><strong>num + eUnit:</strong> a quantity of that unit</li>
        <li><strong>eUnit + num:</strong> the (num + 1)-th instance</li>
    </ul>
    <p>Example:</p>
    <figure class="example">
    	<pre>
<span class="sayia">2oJ</span>  <span class="comment">// 2 hours</span>
<span class="sayia">oJ1</span>  <span class="comment">// second hour</span>
<span class="sayia">1gB</span>  <span class="comment">// 1 set</span>
<span class="sayia">gB0</span>  <span class="comment">// first set</span>
    	</pre>
    </figure>
    <p>
    Months and weekdays are also expressed as eUnit + num. The week starts on 
    Monday, following 
    <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank" rel="noopener noreferrer">ISO 8601</a>. 
    Example:
    </p>
    <figure class="example">
    	<pre>
<span class="sayia">oF0</span>  <span class="comment">// January</span>
<span class="sayia">oF5</span>  <span class="comment">// June</span>
<span class="sayia">oH0</span>  <span class="comment">// Monday</span>
<span class="sayia">oH5</span>  <span class="comment">// Saturday</span>
    	</pre>
    </figure>
    <p>
    Inside descriptive expressions:
    </p>
    <ul>
        <li><strong>num + unit:</strong> the object with num units (the related attribute may be omitted)</li>
        <li><strong>unit + num:</strong> refers to a specific segment or instance (this pattern applies only to eUnits)</li>
    </ul>
    <figure class="example">
    	<pre>
<span class="sayia">[z:tj]#\`i:2 h\`#</span>  <span class="comment">// the duration is 2 hours</span>
<span class="sayia">tmgotSs#1gB#</span>  <span class="comment">// 1 set of sushi</span>
<span class="sayia">tmgotSs#gB0#</span>  <span class="comment">// the first set of sushi</span>
    	</pre>
    </figure>
    <p>When <strong>eUnit</strong>, <strong>num + eUnit</strong>, or <strong>eUnit + num</strong> 
    appear as objects, the eUnit functions as an Entity Word, representing an instance of that 
    unit, onsistent with the rules in 
    <a href="/learn/word-formation/word-categories#about-number-and-unit" class="inner-link">About Number</a>. Example:</p>
    <figure class="example">
    	<pre>
<span class="sayia">2oJ#oxTu^ou#</span>  <span class="comment">// 2 normal hours</span>
<span class="sayia">gB0#ziIx^fa#</span>  <span class="comment">// the first set that I like best</span>
    	</pre>
    </figure>
</section>
    `
    )
}


function reference () {

    return `
<section>
    <h2>Reference Word</h2>
    <p>
        Reference words are dynamic, context-dependent elements that function similarly to pronouns.
        They are divided into <strong>Context References</strong> and <strong>Alias References</strong>.
    </p>
    <section>
        <h3>Context References</h3>
        <p>These references point to values stored in the current Context (CTX):</p>
        ${basicTable(refs)}
        <p>When using them, you can read .ae as shorthand for CTX.ae. Example:</p>
        <figure class="example">
        	<pre>
<span class="sayia">:ac:tmg(sb:.ae)</span>  <span class="comment">// I'm eating</span>
        	</pre>
        </figure>
    </section>
    <section>
        <h3>Alias References</h3>
        <p>
        Alias references are used to bind temporary aliases. Since excessive 
        aliasing can cause ambiguity, it is recommended to limit alias names to 
        A, B, and C. The binding syntax is:
        </p>
        <code class="fmt">Word&lt;A(B/C)&gt;</code>
        <p>It read as <strong>Word alias A(B/C)</strong>. Alias bindings are temporary 
        and may be overridden by later bindings. Example:</p>
        <figure class="example">
        	<pre>
<span class="comment">A worker was eating a pizza. 
Then, a friend came over. The worker 
set the pizza down on the table, and 
the friend took out a piece of fruit. 
The worker took it.</span>

<span class="sayia">:ac:tmg(1tmgotPz&lt;A&gt;,sb:1amfsb&lt;B&gt;)
=> :ac:btj(tg:.ex.ag,sb:1pldotFr@.B&lt;C&gt;)
=> :ac:jag(.A,tg:1jagtg,sb:.B)
=> :ac:sob(1tmgotFu&lt;A&gt;,sb:.C)
=> :ac:tiu(.A,sb:B)</span>
        	</pre>
        </figure>
        <p>It's equivalent to:</p>
        <figure class="example">
        	<pre>
<span class="sayia">:ac:tmg(1tmgotPz,sb:1amfsb)
=> :ac:btj(tg:.ex.ag,1pldotFr@[z:amfsb])
=> :ac:jag([z:tmgotPz],tg:1jagtg,sb:[z:amfsb])
=> :ac:sob(1tmgotFu,sb:[z:pldotFr])
=> :ac:tiu([z:tmgotFu],sb:[z:amfsb])</span>    
        	</pre>
        </figure>
    </section>
</section>`
}

export function WordCategoriesPage() {
    return (
        `
        ${valueAndAttribute()}
        ${occurrenceAndEntity()}
        ${aboutNumberAndUnit()}
        ${reference()}
        `
    )
}