export function BorrowingPage() {
    return (
        `
<section>
    <h2>Local Borrowing</h2>
    <p>
        Sayia’s vocabulary cannot cover all possible words—especially proper nouns—so borrowing from
        other languages is supported. Borrowed words must be enclosed in <strong>\`\`</strong> and
        annotated with a language code compliant with <a href="https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes"
                                                         target="_blank" rel="noopener noreferrer">ISO 639-1</a>. Reference Words cannot be borrowed.
        Proper names such as Alice, America, or Earth do not require Borrowing, they are treated as
        direct references to unique entities. Example:
    </p>
    <figure class="example">
    	<pre>
<span class="sayia">:ac:tgd(\`en:topology\`, sb:.ae)</span>  <span class="comment">// borrowing from English</span>
<span class="sayia">:ac:tgd(\`ja:トポロジー\`, sb:.ae)</span>  <span class="comment">// borrowing from Japanese</span>
    	</pre>
    </figure>
</section>
<section>
    <h2>Global Borrowing</h2>
    <p>
        Writing language codes repeatedly can be inconvenient. Global borrowing enables full-text
        borrowing using the <strong>LANG</strong> keyword. In the format <strong>LANG:A,B</strong>,
        where A is the default language and B is the borrowing language. Example:
    </p>
    <figure class="example">
    	<pre>
<span class="comment">The Rabbit noticed Alice, as she went hunting 
about, and called out to her in an angry tone, 
'Why, Mary Ann, what are you doing out here? Run 
home this moment, and fetch me a pair of gloves 
and a fan! Quick, now!'</span>

<span class="sayia">LANG:EN,SAYIA;</span>  <span class="comment">// Default: English; Borrowing: Sayia</span>

:ac:notice(Alice,sb:[z:Rabbit]) 
=> :ac:say(sb:[z:Rabbit],tg:Alice)#\`<span class="sayia">oxTu^ds</span>\`#;
"%?:ac:thing#:ac:do<span class="sayia">(.it,sb:.yo)</span>#;
cmd:ac:go(tg:home)#\`<span class="sayia">ziHx^ar</span>\`# 
=> ::give([z:gloves]&&fan#\`<span class="sayia">1gB\`#,tg:.ae</span>)";
::[z:\`<span class="sayia">sayot\`] == .ts</span>


<span class="sayia">LANG:SAYIA,EN;</span>  <span class="comment">// Default: Sayia; Borrowing: English</span>

<span class="sayia">:ac:ssc(Alice,tg:[z:ojisbMoRb]) 
=> :ac:say(sb:[z:ojisbMoRb],tg:Alice)#oxTu^ds#;
"%?:ac:occot#:ac:occ(.it,sb:.yo)#;
cmd:ac:btj(tg:ojipc)#ziHx^ar# 
=> ::sob([z:tbuotHt]&&</span>\`fan\`<span class="sayia">#1gB#,tg:.ae)";
::[z:sayot] == .ts</span>
    	</pre>
    </figure>
</section>
<section>
    <h2>Borrowing from ISO</h2>
    <p>
        Borrowing also supports standardized ISO notation. <a href="https://en.wikipedia.org/wiki/ISO_80000"
                                                              target="_blank" rel="noopener noreferrer">ISO 80000</a> defines units and quantities, <a
            href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank" rel="noopener noreferrer">ISO 8601</a>
        specifies date and time formats, and <a href="https://en.wikipedia.org/wiki/ISO_4217" target="_blank"
                                                rel="noopener noreferrer">ISO 4217</a> provides currency codes. When using expressions in ISO
        format, prefix them with <strong>\`i:\`</strong>. Example:</p>
    <figure class="example">
    	<pre>
\`i:1 km\` <span class='comment'>// 1 km</span>
\`i:10 USD\` <span class='comment'>// 10 USD</span>
\`i:2100-01-02\` <span class='comment'>// 2100-01-02</span>
    	</pre>
    </figure>
</section>
        `
    )
}