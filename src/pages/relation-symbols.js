import {symbolPriority} from "../mini-comps/symbol-priority.js";


export function RelationSymbolsPage() {
    return (
        `
<section>
    <p>Relation Symbols specify how two words combine and what the resulting meaning is.</p>
</section>
<section>
    <h2>A-B</h2>
    <p>IPA: [];</p>
    <p>
        A-B forms a compound word that represents a subcategory of B.
        This is not the same as English-style compounding. A can be an
        Entity Word, an Attribute Word or an Occurrence Word, B must
        be an Entity Word. This means the ot parameter of the occurrence
        underlying B is A. Example:
    </p>
    <figure class="example">
    	<pre>
<span class="sayia">tbuot-smbpc</span>  <span class="comment">// clothing store</span>
    	</pre>
    </figure>
    <p>It's equivalent to:</p>
    <figure class="example">
    	<pre>
<span class="sayia">smbpc@smb(tbuot)</span>
    	</pre>
    </figure>
</section>
<section>
    <h2>A^B</h2>
    <p>IPA: [];</p>
    <p>A^B means that A defines or modifies B. Logical rule:</p>
    <ul>
        <li>A Value can define an Attribute</li>
        <li>Value^Attribute can define an Occurrence or an Entity</li>
    </ul>
    <p>Example:</p>
    <figure class="example">
    	<pre>
<span class="sayia">faPi^si</span>  <span class="comment">// good taste</span>
<span class="sayia">faPi^si^tmgotBr</span>  <span class="comment">// delicious bread</span>
    	</pre>
    </figure>
</section>
<section>
    <h2>A$B</h2>
    <p>IPA: [ˈboto];</p>
    <p>
        "$" expresses correlation or topical relation. A$B
        means that A is linked to the topic of B. Example:
    </p>
    <figure class="example">
    	<pre>
<span class="sayia">asddt$tmgot</span>  <span class="comment">// a painting about food</span>
    	</pre>
    </figure>
</section>
<section>
    <h2>A.B and B@A</h2>
    <p>IPA: [dot], [boˈlən];</p>
    <p>
        "." marks a broad relationship of belonging or association
        between two objects. This includes ownership, part–whole relations,
        inherent characteristics, and various social or conceptual links. A.B
        corresponds to "A's B" in English, where A is the possessor and B
        is the possessed entity. Example:
    </p>
    <figure class="example">
    	<pre>
<span class="sayia">[z:ojupc].gapsn</span>  <span class="comment">// the park's name</span>
    	</pre>
    </figure>
    <p><strong>"@"</strong> expresses the reverse relation, <strong>A.B</strong>
        is equivalent to <strong>B@A</strong>. Example:</p>
    <figure class="example">
    	<pre>
<span class="sayia">gapsn@[z:ojupc]</span>  <span class="comment">// the name of the park</span>
    	</pre>
    </figure>
</section>
<section>
    <h2>A/B</h2>
    <p>IPA: [ˈɹela];</p>
    <p>
        The symbol "/" expresses relativity. A/B means "A relative to B",
        indicating that B is the reference or baseline for describing A.
        Example:
    </p>
    <figure class="example">
    	<pre>
<span class="comment">there are similarities between you and me</span>
<span class="sayia">lc@[.ae/.yo]#oxTu#</span>  

<span class="comment">my distance from you is 1 km</span>
<span class="sayia">tj@[.ae/.yo]#1cC#</span>  
    
<span class="comment">my distance from you changed from 1 km to 2 km</span>
<span class="sayia">tj@[.ae/.yo]#1cC~2cC#</span>  
    	</pre>
    </figure>
</section>
<section>
    <h2>Symbol in Number</h2>
    <p>
        When symbols occur between numbers, their meanings follow ordinary mathematical
        conventions and are unrelated to the relation symbols used between words in <span translate="no">Sayia</span>.
        Example:</p>
    <figure class="example">
    	<pre>
<span class="sayia">4 * 10 ^ 3 / 2</span>  <span class="comment">// 2000</span>
    	</pre>
    </figure>
    <p>
        Here * means multiplication and ^ means exponentiation, ordinary math usage. Because
        mathematical symbols vary across fields and contexts, any domain-specific notation
        should be placed inside a <a href="/learn/grammar/content" class="inner-link">Content</a> ,
        to avoid ambiguity.
    </p>
</section>
<section>
    <h2>Relation Symbols Priority</h2>
    <p>
        Relation symbols in <span translate="no">Sayia</span> follow a fixed precedence order. The table below lists
        them from highest to lowest priority:</p>
    ${symbolPriority(true, false)}
    <p>
        To override the default precedence, square brackets [] can be used to group
        expressions explicitly. Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">the coffee shop is 1 km from my gallery</span>
<span class="sayia">tj@[tmiotCf-smbpc/asddt-smbpc@.ae]#1cC#</span>  
    	</pre>
    </figure>
    <p>It's equivalent to:</p>
    <figure class="example">
    	<pre>
<span class="sayia">tj@[[tmiotCf-smbpc]/[[asddt-smbpc]@.ae]]#1cC#</span>
    	</pre>
    </figure>
</section>
        `
    )
}