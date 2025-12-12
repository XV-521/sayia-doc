import {chart} from "../mini-comps/chart.js";
import {customTable} from "../mini-comps/table.js";


const aspectTypes = {
    ":": {"meaning": "objective fact", "ipa": "[]"},
    "pi:": {"meaning": "past (has happened)", "ipa": "[pi]"},
    "ac:": {"meaning": "ongoing (is happening)", "ipa": "[ak]"},
    "wl:": {"meaning": "future (will happen)", "ipa": "[wəl]"}
}


export function PhrasePage() {
    return (
        `
<section>
    <p>
        A phrase is composed of blocks, divided into State Phrase and Occurrence Phrase.
    </p>
    ${chart([2, 3])}
</section>
<section id="state-phrase">
    <h2>Phrase Stem</h2>
    <section id="state-phrase-stem">
        <h3>State Phrase Stem</h3>
        <p>
            A State Phrase Stem consists of an Object Block and a Description Block, forming a state.
            Its core structure is:</p>
        <code class="fmt">[OBJECT]#DESCRIPTION#</code>
        <p>Example:</p>
        <figure class="example">
        	<pre>
<span class="comment">this product with a high price</span>
<span class="sayia">[z:smbot]#ziGx^mb#</span>
        	</pre>
        </figure>
        <p>
            State Phrases may also stack multiple descriptions:
        </p>
        <code class="fmt">[OBJECT]#DESCRIPTION0##DESCRIPTION1#</code>
        <p>This because [OBJECT]#DESCRIPTION0# becomes a new object. It differs semantically from:</p>
        <code class="fmt">[OBJECT]#DESCRIPTION0 && DESCRIPTION1#</code>
        <p>Example:</p>
        <figure class="example">
        	<pre>
<span class="comment">this orange product is expensive</span>
<span class="sayia">[z:smbot]#sdOr^sd##ziGx^mb#</span>

<span class="comment">this product is orange and expensive</span>
<span class="sayia">[z:smbot]#sdOr^sd && ziGx^mb#</span>
        	</pre>
        </figure>
    </section>
    <section id="occurrence-phrase-stem">
        <h3>Occurrence Phrase Stem</h3>
        <p>An Occurrence Phrase Stem is simply an Occurrence Block. It represents an Occurrence. Example:</p>
        <figure class="example">
        	<pre>
<span class="comment">I buy this product</span>
<span class="sayia">tmb([z:smbot],sb:.ae)</span>
        	</pre>
        </figure>
        <p>
            An Occurrence Phrase may also be modified using #DESCRIPTION#. This is because
            an occurrence itself can be treated as an object. In Sayia, any word may become an object.
            Example:</p>
        <figure class="example">
        	<pre>
<span class="comment">I frequently shop in a good mood</span>
<span class="sayia">tmb(sb:.ae)#faPi^hb##ziGx^nd#</span>
        	</pre>
        </figure>
    </section>
</section>
<section id="action-phrase">
    <h2>Aspect Marker</h2>
    <p>
        A phrase must include a Aspect Marker, which indicates temporal or factual status.
        There are 4 types:</p>
    ${customTable(aspectTypes, "<tr><th>Type</th><th>Meaning</th><th>IPA</th></tr>")}
    <p>State Example:</p>
    <figure class="example">
    	<pre>
:<span class="sayia">[z:smbot]#ziGx^mb#</span>  <span class="comment">// this product is high priced</span>
pi:<span class="sayia">[z:smbot]#ziGx^mb#</span>  <span class="comment">// this product was high priced</span>
ac:<span class="sayia">[z:smbot]#ziGx^mb#</span>  <span class="comment">// this product is high priced now</span>
wl:<span class="sayia">[z:smbot]#ziGx^mb#</span>  <span class="comment">// this product will be high priced</span>
    	</pre>
    </figure>
    <p>Occurrence Example:</p>
    <figure class="example">
    	<pre>
:<span class="sayia">tmb([z:smbot],sb:.ae)</span>  <span class="comment">// I buy this product</span>
pi:<span class="sayia">tmb([z:smbot],sb:.ae)</span>  <span class="comment">// I bought this product</span>
ac:<span class="sayia">tmb([z:smbot],sb:.ae)</span>  <span class="comment">// I'm buying this product</span>
wl:<span class="sayia">tmb([z:smbot],sb:.ae)</span>  <span class="comment">// I will buy this product</span>
    	</pre>
    </figure>
</section>
        `
    )
}