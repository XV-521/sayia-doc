import {chart} from "../mini-comps/chart.js";
import {customTable} from "../mini-comps/table.js";

const variations = {
    "[OBJECT]": {"meaning": "the type of OBJECT; \"[]\" may be omitted", "ipa": "[]"},
    "[z:OBJECT]": {"meaning": "a specific instance", "ipa": "[z]"},
    "[r:OBJECT]": {"meaning": "a random instance", "ipa": "[ɹ]"},
    "[e:OBJECT]": {"meaning": "all / each instance", "ipa": "[e]"},
    "[s:OBJECT]": {"meaning": "some / any instances", "ipa": "[s]"},
    "[n:OBJECT]": {"meaning": "no instance", "ipa": "[n]"},
    "[g:OBJECT]": {"meaning": "the concept", "ipa": "[g]"},
}

export function BlockPage() {
    return (
        `
<section>
    <p>Blocks come in three types:</p>
    <ul>
        <li>Object Block: represents an object</li>
        <li>Description Block: represents a description of the object</li>
        <li>Occurrence Block: represents the occurrence of an action</li>
    </ul>
    ${chart([0, 2])}
</section>
<section>
    <h2>Object Block</h2>
    <p>
        An Object Block represents an object. Any word category can function as an
        Object Block. It has the form:
    </p>
    <code class="fmt">[OBJECT]</code>
    <p>It with 7 variations:</p>
    ${customTable(variations, "<tr><th>Variation</th><th>Meaning</th><th>IPA</th></tr>")}
    <p>Example:</p>
    <figure class="example">
    	<pre>
<span class="sayia">[smbot]</span>  <span class="comment">// products</span>  
<span class="sayia">[z:smbot]</span>  <span class="comment">// the product</span>
<span class="sayia">[r:smbot]</span>  <span class="comment">// random products</span>
<span class="sayia">[e:smbot]</span>  <span class="comment">// each product</span>
<span class="sayia">[s:smbot]</span>  <span class="comment">// some products</span>
<span class="sayia">[n:smbot]</span>  <span class="comment">// no product</span>
<span class="sayia">[g:smbot]</span>  <span class="comment">// the concept of products</span>
    	</pre>
    </figure>
</section>
<section>
    <h2>Description Block</h2>
    <p>A Description Block is written as:</p>
    <code class="fmt">#DESCRIPTION#</code>
    <p>The marker is pronounced [ˈdəsk]. When combined with an Object
        Block to form:</p>
    <code class="fmt">
        [OBJECT]#DESCRIPTION#
    </code>
    <p>It represents a state. Rules:</p>
    <ul>
        <li>If OBJECT is an Attribute, the Description must be a Value.</li>
        <li>
            <p>If OBJECT is an Occurrence or Entity, the Description must
                be the defined Attribute, in one of these forms:</p>
            <ul>
                <li>#Value^Attribute#</li>
                <li>#Attribute@OBJECT#</li>
            </ul>
        </li>
    </ul>
    <p>Example:</p>
    <figure class="example">
    	<pre>
<span class="sayia">#ziGx^bi#</span>  <span class="comment">// high hardness</span>
<span class="sayia">#bi@amfiaTn#</span>  <span class="comment">// the hardness of the stone</span>
    	</pre>
    </figure>
    <p>
        Description blocks can also be used in <a href="/learn/grammar/sentence/#about-domain-and-clause" class="inner-link">Clauses</a>.
        Sayia embeds clauses inside the Description Block. Within a clause:
    </p>
    <ul>
        <li>.it refers to the OBJECT</li>
        <li>the clause is defined inside a sentence</li>
    </ul>
    <p>Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">the product you want to buy</span>
<span class="sayia">[z:smbot]#h::tmb(.it,sb:.yo)#</span>
    	</pre>
    </figure>
</section>
<section>
    <h2>Occurrence Block</h2>
    <p>An Occurrence Block represents an occurrence of an action, formatted as:</p>
    <code class="fmt">OccurrenceWord(ot:..., sb:..., ia:..., ...)</code>
    <p>Occurrence suffixes in the<a href="/learn/word-formation/word-categories/#entity-word" class="inner-link">
        Entity section</a> can also be used here as parameters. Rules:</p>
    <ul>
        <li>All parameters are optional</li>
        <li>The order is free</li>
        <li>If an <strong>ot</strong> parameter is present, its keyword may be omitted, but it must appear first</li>
    </ul>
    <p>Available parameters:</p>
    <ul>
        <li>ot: object of the action</li>
        <li>sb: subject of the action</li>
        <li>ia: medium that enables the action</li>
        <li>ku: component that the action depends on</li>
        <li>tf: starting point (what, where, when)</li>
        <li>tg: target (what, where, when)</li>
        <li>sn: sign of the action</li>
        <li>dt: product or outcome of the action</li>
        <li>pc: place where the action occurs</li>
        <li>tm: time when the action occurs</li>
        <li>pr: purpose of the action</li>
        <li>nk: obstacle to the action</li>
    </ul>
    <p>Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">I show paintings to some friends in bedroom</span>
<span class="sayia">ssc(asddt,sb:.ae,tg:[s:pldotFr],pc:ucfpc)</span>
    	</pre>
    </figure>
</section>
        `
    )
}