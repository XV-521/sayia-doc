import {symbolPriority} from "../mini-comps/symbol-priority.js";

export function LogicalSymbolsPage() {
    return (
        `
<section>
    <p>Logical symbols operate on words, phrases, or sentences
        to express logical relationships.</p>
</section>

<section>
    <h2>&&</h2>
    <p>IPA: [ənd]</p>
    <p>"&&" means "and". Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">The park is very large and close. 
I will go there and do exercise.</span>   

<span class="sayia">::[z:ojupc]#ziGx^tb && ziBx^tj#;
:wl:btj(sb:.ae,tg:.it) && shj()</span>
    	</pre>
    </figure>
</section>

<section>
    <h2>||</h2>
    <p>IPA: [ɔr]</p>
    <p>"||" means "or". Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">I'll get to the park or stay at home.</span>   
<span class="sayia">:wl:btj(sb:.ae,tg:[z:ojupc]) || iag(pc:ojipc)</span>
    	</pre>
    </figure>
</section>

<section>
    <h2>!</h2>
    <p>IPA: [nat]</p>
    <p>"!" means "not", Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">I don't want to help you.</span>  
<span class="sayia">h!::jio(.yo,sb:.ae)</span>

<span class="comment">You can't not help me.</span>  
<span class="sayia">s!::!jio(.ae,sb:.yo)</span>
    	</pre>
    </figure>
    <p>When "!" is applied to an entity block, it means any entity other than this one. Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">This person is male, the other one is female.</span> 
<span class="sayia">::[z:ojisbHu]#hcMl^hc#; ::[z:!.it]#hcFm^hc#</span>

<span class="comment">This person is male, the others is female.</span> 
<span class="sayia">::[z:ojisbHu]#hcMl^hc#; ::[e:!.it]#hcFm^hc#</span>
    	</pre>
    </figure>
</section>
<section>
    <h2>*</h2>
    <p>IPA: [ˈoʊnli]</p>
    <p>"*" indicates "only", emphasizing specificity. Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">I only like this game.</span>     
<span class="sayia">::sfa(*[z:jmjot],sb:.ae)</span>
    	</pre>
    </figure>
</section>

<section>
    <h2>++ and --</h2>
    <p>IPA: [æls]; [dɪls]</p>
    <p>"++" / "--" means "more than" / "less than". Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">More than 1000 people attended the wedding, 
but it lasted less than an hour.
</span>    
<span class="sayia">::zl@pobsb@[z:cdmsn]#1000++# {
but ty@[z:cdmsn]#60--oK#}</span>
    	</pre>
    </figure>
    <p>"++n" / "--n" means "n more than" / "n less than". Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">The price of the first item is 3 USD higher 
than the price of the second item.</span>

<span class="sayia">::mb@smbot0#mb@smbot1++3&lt;USD>#</span>
    	</pre>
    </figure>
</section>
<section>
    <h2>>></h2>
    <p>IPA: [oʊst]</p>
    <p>
        ">>" represents an offset, meaning shifting relative to the current
        item to obtain another one. Sayia does not use "next" as a standalone
        concept; "next" is simply an offset of +1. Example:
    </p>
    <figure class="example">
    	<pre>
<span class="sayia">si@.ex>>+1</span>  <span class="comment">// tomorrow</span>
<span class="sayia">si@.ex>>-1</span>  <span class="comment">// yesterday</span>
<span class="sayia">si@.ex>>-2</span>  <span class="comment">// the day before yesterday</span>
<span class="sayia">[z:sjtot]>>+1</span>  <span class="comment">// the next item</span>
    	</pre>
    </figure>
</section>
<section>
    <h3>Logical Symbols Priority</h3>
    <p>The priority of <strong>logical symbols</strong> is:</p>
    ${symbolPriority(false, true)}
    <p>The priority of symbols including both <strong>relation symbols</strong>
        and <strong>logical symbols</strong> is:</p>
    ${symbolPriority(true, true)}
    <p>To override the default priority, group expressions explicitly with []. Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">Only Alice and Kai joined the team.</span>
<span class="sayia">:pi:poj([z:plgdt],sb:*[Alice && Kai])</span>
    	</pre>
    </figure>
</section>
        `
    )
}