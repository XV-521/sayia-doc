import {chart} from "../mini-comps/chart.js";
import {customTable} from "../mini-comps/table.js";

const declarativeTypes = {
    ":": {"meaning": "basic statement", "ipa": "[]"},
    "c:": {"meaning": "indicates that it can happen", "ipa": "[ˈkan]"},
    "h:": {"meaning": "indicates hope or desire for it to happen", "ipa": "[ˈhop]"},
    "s:": {"meaning": "indicates that it should happen", "ipa": "[ˈsod]"},
    "m:": {"meaning": "indicates that it may happen", "ipa": "[ˈmaj]"},
}

const interrogativeTypes = {
    "?": {
        "meaning": `yes/no question. Prefix ? to any sentence 
                    keyword to ask whether it is true.`,
        "ipa": "[ˈkwes]"
    },
    "%?": {
        "meaning": `special question, used to ask what the object is 
                    like. This is Sayia's equivalent of "what" questions. 
                    Sayia has no "where/when/how" words because they are 
                    all simply "what ...": "where" corresponds to 
                    "what location"; "when" corresponds to "what time"; 
                    "how" corresponds to "what way".`,
        "ipa": "[wətˈkwes]"
    },
}

const commandTypes = {
    "cmd": {"meaning": "basic command", "ipa": "[kəˈmand]"},
    "cmk": {"meaning": "repeated execution", "ipa": "[kəˈmank]"},
    "cmr": {"meaning": "continued execution", "ipa": "[kəˈmanɹ]"},
}


export function SentencePage() {
    return (
        `
<section>
    <p>
        A sentence consists of a <strong>phrase</strong> and a <strong>sentence type</strong>.
        Sentences are separated by <strong>";"</strong>. The structure of the phrase itself
        never changes; the sentence type determines the meaning. Sentences fall into three
        categories: Declarative, Interrogative, and Command.
    </p>
    ${chart([3,4])}
</section>
<section>
    <h2>Declarative Sentence</h2>
    <p>Declarative sentences come in five types:</p>
    ${customTable(declarativeTypes, "<tr><th>Type</th><th>Meaning</th><th>IPA</th></tr>")}
    <p>Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">Phrase (core):</span>
<span class="sayia">:tmb([z:smbot],sb:.ae)</span>  <span class="comment">// I buy this product</span>
    
<span class="comment">Declarative forms:</span>
<span class="sayia">::tmb([z:smbot],sb:.ae)</span>  <span class="comment">// I buy this product.</span>  
<span class="sayia">c::tmb([z:smbot],sb:.ae)</span>  <span class="comment">// I can buy this product.</span> 
<span class="sayia">h::tmb([z:smbot],sb:.ae)</span>  <span class="comment">// I hope to buy this product.</span>
<span class="sayia">s::tmb([z:smbot],sb:.ae)</span>  <span class="comment">// I should buy this product.</span>
<span class="sayia">m::tmb([z:smbot],sb:.ae)</span>  <span class="comment">// I might buy this product.</span>
    	</pre>
    </figure>
</section>
<section>
    <h2>Interrogative Sentence</h2>
    <p>Interrogatives are formed by taking a declarative sentence and adding a question marker.
        There are two kinds:</p>
    ${customTable(interrogativeTypes, "<tr><th>Type</th><th>Meaning</th><th>IPA</th></tr>")}
    <p>Example:</p>
    <figure class="example">
    	<pre>
<span class="sayia">?c::tmb([z:smbot],sb:.ae)</span>  <span class="comment">// Can I buy this product?</span> 
<span class="sayia">%?::mb@[z:smbot]</span>  <span class="comment">// What is the price of this product?</span> 
<span class="sayia">%?::smbot#h::tmb(.it,sb:.yo)#</span>  <span class="comment">Which product do you want to buy?</span>
    	</pre>
    </figure>
    <p>Adding ! after a sentence keyword negates it:</p>
    <figure class="example">
    	<pre>
<span class="sayia">!::tmb([z:smbot],sb:.ae)</span>  <span class="comment">// I don't buy this product.</span> 
<span class="sayia">c!::tmb([z:smbot],sb:.ae)</span>  <span class="comment">// I can't buy this product.</span>    
<span class="sayia">?c!::tmb([z:smbot],sb:.ae)</span>  <span class="comment">// Can't I buy this product?</span>           
    	</pre>
    </figure>
</section>
<section>
    <h2>Command Sentence</h2>
    <p>Commands issue instructions. They come in three forms:</p>
    ${customTable(commandTypes, "<tr><th>Type</th><th>Meaning</th><th>IPA</th></tr>")}
    <figure class="example">
    	<pre>
<span class="sayia">cmd::tmb([z:smbot],sb:.yo)</span>  <span class="comment">// Buy this product.</span>  
<span class="sayia">cmk::tmb([z:smbot],sb:.yo)</span>  <span class="comment">// Continue to buy this product.</span>
<span class="sayia">cmr::tmb([z:smbot],sb:.yo)</span>  <span class="comment">// Buy this product repeatedly.</span>  
    	</pre>
    </figure>
    <p>Negation is also allowed:</p>
    <figure class="example">
    	<pre>
<span class="sayia">cmd!::tmb([z:smbot],sb:.yo)</span>  <span class="comment">// Don't buy this product.</span>     
    	</pre>
    </figure>
</section>
<section id="about-domain-and-clause">
    <h2>About Domain and Clause</h2>
    <section>
        <h3>Domain</h3>
        <p>
            Every phrase stem has a domain. "The previous domain" refers to either: the domain of
            the immediately preceding phrase, if none exists, the domain of the outer phrase.</p>
        <p>Example 1:</p>
        <figure class="example">
        	<pre>
<span class="comment">This person is friendly, I like this person.</span>
<span class="sayia">::[z:ojisbHu]#oxTu^iw#; ::sfa(.it,sb:.ae)</span>
        	</pre>
        </figure>
        <p>Two domains:</p>
        <ul>
            <li>::[z:ojisbHu]#oxTu^iw#</li>
            <li>::sfa(.it,sb:.ae), where .it refers to the object in domain 1.</li>
        </ul>
        <p>Example 2:</p>
        <figure class="example">
        	<pre>
<span class="comment">My turning is happening.</span>
<span class="sayia">:ac:occ(caj(sb:.ae))</span>
        	</pre>
        </figure>
        <p>Here:</p>
        <ul>
            <li>occ(caj(sb:.ae)) is one domain</li>
            <li>caj(sb:.ae) is its local domain, its "previous domain" is the occ(...) domain</li>
        </ul>
        <p>Example 3:</p>
        <figure class="example">
        	<pre>
<span class="comment">This food smells good, 
I like it, and I want to buy it.</span>

<span class="sayia">::[z:tmgot]#faPi^sj#;</span> 
<span class="sayia">::sfa(.it,sb:.ae) && h::tmb(.it)</span>   
        	</pre>
        </figure>
        <p>Sentences connected by && or || share one domain. Domains:</p>
        <ul>
            <li>[z:tmgot]#faPi^sj#</li>
            <li>the combined sfa(...) and tmb(...)</li>
        </ul>
        <p>Example 4:</p>
        <figure class="example">
        	<pre>
<span class="comment">I like the thing you're selling, the one 
everyone wants.</span>

<span class="sayia">::sfa(ooxsb#:ac:smb(.it,sb:.yo)##h::iox(.it, 
sb:[e:ojisbHu])#, sb:.ae)</span>
        	</pre>
        </figure>
        <p>Two parallel Description Blocks also share one domain. Domains:</p>
        <ul>
            <li>sfa(...)</li>
            <li>ooxsb#...##...#</li>
            <li>the combined smb(...) and iox(...)</li>
        </ul>
    </section>
    <section id="clause">
        <h3>Clause</h3>
        <p>
            A Clause places an object into the context of an inner domain, defining it.
            Example:
        </p>
        <figure class="example">
        	<pre>
<span class="comment">What do you want to buy?</span>
<span class="sayia">%?::ooxsb#h::tmb(.it,sb:.yo)#</span>
        	</pre>
        </figure>
        <p>.it refers to the object of the previous domain ooxsb#...#. The clause h::tmb(.it,sb:.yo)
            defines that object by embedding it. Another example:</p>
        <figure class="example">
        	<pre>
<span class="comment">I want to buy the food that you want to eat.</span>
<span class="sayia">h::tmb(tmgot#h::tmg(.it,sb:.yo)#,sb:.ae)</span>
        	</pre>
        </figure>
        <p>Inside the Description Block, it refers to tmgot, and the clause h::tmg(.it,sb:.yo) defines
            the meaning of tmgot.</p>
    </section>
</section>
        `
    )
}