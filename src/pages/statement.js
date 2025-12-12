import {chart} from "../mini-comps/chart.js";

export function StatementPage() {
    return (
        `
<section>
    <p>
        Sayia provides several statement structures that describe logical relationships between
        sentences. These structures allow complex reasoning, sequencing, contrast, and conditionality.
    </p>
    ${chart([4, 5])}
</section>
<section>
    <h2>If Statement</h2>
    <p>IPA: [ɪf]</p>
    <p>
        The If statement expresses conditional logic, means "... if ... else ...", where
        the "else" part can be omitted. Format:
    </p>
    <code class="fmt">
        ...{if ...} -&gt; ... OR {if ...}... -&gt; ...
    </code>
    <p>Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">I will get to the library if 
it's open; otherwise I will stay 
at home. </span>   
 
<span class="sayia">:wl:btj(tg:[z:saoiaBo-gobpc],sb:.ae){
if ::[z:saoiaBo-gobpc]#oxTu^ju#} 
-> :wl:iag(pc:ojipc,sb:.ae)</span>

<span class="comment">If the library is open, I 
will get to it; otherwise I will 
stay at home. </span>   

<span class="sayia">{if ::[z:saoiaBo-gobpc]#oxTu^ju#} 
:wl:btj(tg:.it,sb:.ae)
-> :wl:iag(pc:ojipc,sb:.ae)</span>
    	</pre>
    </figure>
    <p>
        To emphasize uniqueness, the format is:
    </p>
    <code class="fmt">...{*if...} -> ...</code>
    <p>This means "... only if ... else ...". Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">Only if the library is open, I 
will get to it. </span>      
    
<span class="sayia">{*if ::[z:saoiaBo-gobpc]#oxTu^ju#} 
:wl:btj(tg:.it,sb:.ae)</span>
    	</pre>
    </figure>
</section>
<section>
    <h2>For Statement</h2>
    <p>IPA: [fə]</p>
    <p>The For Statement performs an action once for each item in a range. Format:</p>
    <code class="fmt">
        {for...}...
    </code>
    <p>Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">For each person on the list, find him/her </span>   
<span class="sayia">{for [e:ojisbHu]@[z:sjtdt]} cmd::nag(.it)</span>
    	</pre>
    </figure>
</section>
<section>
    <h2>Cuz Statement and Soa Statement</h2>
    <p>IPA: [kʌz]; [soʊ]</p>
    <p>
        The Cuz Statement expresses causation, means "... because ...". Format:
    </p>
    <code class="fmt">...{cuz ...}</code>
    <p>Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">I want to buy a bicycle because 
my bicycle is no longer usable.</span>   
    
<span class="sayia">h::tmb(1cagiaBk,sb:.ae){
cuz ::[z:cagiaBk]@.ae#oxFs^mf#}</span>
    	</pre>
    </figure>
    <p>The Soa Statement expresses a consequence, means "...so...". Format:</p>
    <code class="fmt">...{soa ...}</code>
    <p>Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">My bicycle is no longer usable, so 
I want to buy a bicycle. </span>   

<span class="sayia">::[z:cagiaBk]@.ae#oxFs^mf#{
soa h::tmb(1cagiaBk,sb:.ae)}</span>
    	</pre>
    </figure>
</section>
<section>
    <h2>But Statement and Tho Statement</h2>
    <p>IPA: [bɔt]; [ðoʊ]</p>
    <p>
        The But Statement expresses contrast, means "..., but ...". Format:
    </p>
    <code class="fmt">...{but ...}</code>
    <p>Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">It is raining, but I will 
get to the library.</span>

<span class="sayia">::am@.ex#amRi#{
but :wl:btj(tg:saoiaBo-gobpc,sb:.ae)}</span>        
    	</pre>
    </figure>
    <p>The Tho Statement expresses concession, means "..., though ...". Format:</p>
    <code class="fmt">...{tho ...}</code>
    <p>Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">I will get to the library, 
though it is raining.</span>

<span class="sayia">:wl:btj(tg:saoiaBo-gobpc,sb:.ae){
tho ::am@.ex#amRi#}</span>
    	</pre>
    </figure>
</section>
<section>
    <h2>Is Statement</h2>
    <p>IPA: [ɪz]; [ɪz nat]</p>
    <p>
        The Is Statement asserts identity between two specific objects (==) or the lack of identity (!=). Format:
    </p>
    <code class="fmt">... == ... / ... != ...</code>
    <p>Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">He/She is the student you’re looking for.</span>
<span class="sayia">::[z:ojisbHu] == [z:tgdsb]#:ac:nag(.it,sb:.yo)#</span>

<span class="comment">He/She is not the student you’re looking for.</span>
<span class="sayia">::[z:ojisbHu] != [z:tgdsb]#:ac:nag(.it,sb:.yo)#</span>
    	</pre>
    </figure>
    <p>The Is Statement accepts three truth keywords: <strong>true</strong>, <strong>false</strong>,
        and <strong>unknown</strong>, these evaluate the truthfulness of a statement. When these keywords
        are used, the attribute od ("truthfulness") of the expression on the left side of "==" / "!=" is
        implicitly referenced. Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">Do you want to buy some food?
Yes.</span>
<span class="sayia">?h::tmb([s:tmgot],sb:.yo);
::.ts == true;</span>    
    
<span class="comment">Do you want to buy some drinks?
No.</span>
<span class="sayia">?h::tmb([s:tmiot],sb:.yo);
::.ts == false;</span>

<span class="comment">Do you want to buy some clothing?
I don't know.</span>
<span class="sayia">?h::tmb([s:tbuot],sb:.yo);
::.ts == unknown;</span>
    	</pre>
    </figure>
    <p>
        The Is Statement is not equivalent to the English verb "is".
        In Sayia, both sides of "==" must be concrete objects, and the
        statement only states whether they are the same instance.
        It never expresses class-membership, nor attribute assignment,
        nor general description. Example:
    </p>
    <figure class="example">
    	<pre>
<span class="comment">I'm a driver.</span>  
<span class="sayia">::.ae == 1cagsb</span> <span class="comment">// incorrect</span>
<span class="sayia">::.ae#oa@cagsb#</span> <span class="comment">// correct</span>

<span class="comment">The book is red. </span>
<span class="sayia">::[z:saoiaBo] == sdRe^sd</span> <span class="comment">// incorrect</span>
<span class="sayia">::[z:saoiaBo]#sdRe^sd#</span> <span class="comment">// correct</span>
    	</pre>
    </figure>
</section>
<section>
    <h2>Cnp Statement</h2>
    <p>IPA: [kənp]</p>
    <p>The Cnp Statement expresses relative comparison, means "... compared to ...". Format:</p>
    <code class="fmt">...{cnp ...}</code>
    <p>Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">Cars are more expensive compared to bicycles.</span>    
<span class="sayia">::cagiaCa#ziGx^mb# {cnp cagiaBk}</span>    

<span class="comment">I prefer pizza to bread. </span>  
<span class="sayia">::tmgotPz#ziGx^fa# {cnp tmgotBr}</span>   
    	</pre>
    </figure>
</section>
<section>
    <h2>Then Statement</h2>
    <p>IPA: [ðen]</p>
    <p>The Then Statement expresses sequentiality, means "... then ...". Format:</p>
    <code class="fmt">... => ...</code>
    <p>Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">I will wake up, then eat, and then go to the company.</span>
<span class="sayia">:wl:bjf(ucf,sb:.ae) => :wl:tmg() => :wl:btj(tg:mjspc)</span>
    	</pre>
    </figure>
</section>
        `
    )
}