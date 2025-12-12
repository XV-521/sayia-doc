export function StateAndOccurrencePage() {
    return (
        `
<!--suppress HtmlUnknownAnchorTarget -->
<section xmlns="http://www.w3.org/1999/html">
    <p>
        <span translate="no">Sayia</span> builds words and phrases around <strong>State</strong> and <strong>Occurrence</strong>. This is a bit like
        event-focused languages such as Inuktitut or Navajo. Below is a quick introduction to these two ideas. If any examples feel unfamiliar, don’t
        worry — everything will be explained in detail in the <a href="/learn/grammar" class="inner-link">Grammar</a> section.
    </p>
</section>

<section>
    <h2>State</h2>
    <p>
        In <span translate="no">Sayia</span>, a State pairs an object with a description.
        The basic format for a <a href="/learn/grammar/phrase/#state-phrase" class="inner-link">State Phrase</a> is
        <strong>[OBJECT]#DESCRIPTION#</strong>, represents snapshot of a moment. Example:
    </p>
    <figure class="example">
    	<pre>
<span class="comment">The bread tastes good.</span>
<span class="sayia">::[z:tmgotBr]#faPi^si#</span>
    	</pre>
    </figure>
    <p>Or, focusing on the taste itself:</p>
    <figure class="example">
    	<pre>
<span class="comment">The taste of the bread is good.</span>
<span class="sayia">::si@[z:tmgotBr]#faPi#</span>
    	</pre>
    </figure>
</section>

<section>
    <h2>Occurrence</h2>
    <p>
        An Occurrence is a change of state. The basic format for an
        <a href="learn/grammar/phrase/#occurrence-phrase-stem" class="inner-link">Occurrence Phrase</a> is
        <strong>[OBJECT]#~DESCRIPTION#</strong>, where "~" means "change to".
        Example:
    </p>
    <figure class="example">
    	<pre>
<span class="comment">The taste of the bread has worsened.</span>
<span class="sayia">:pi:[si@z:tmgotBr]#~faDn#</span>
    	</pre>
    </figure>
    <p>
        Some situations are too complex to model with state changes alone, so <span translate="no">Sayia</span> provides
        dedicated <a href="learn/word-formation/word-categories/#occurrence-and-entity-word" class="inner-link">Occurrence words</a>.
        For example, "I'm making bread":
    </p>
    <figure class="example">
    	<pre>
<span class="comment">I'm making bread.</span>
<span class="sayia">:ac:amg(tmgotBr,sb:.ae)</span>
    	</pre>
    </figure>
    <p>
        In <span translate="no">Sayia</span>, an Occurrence is understood as something happening, rather than "who does what".
        Example:
    </p>
    <figure class="example">
    	<pre>
<span class="comment">English way of thinking:</span>
I am eating bread.

<span class="comment"><span translate="no">Sayia</span>'s perspective:</span>
Eating bread is happening, by me.

<span class="comment">in <span translate="no">Sayia</span>:</span>
<span class="sayia">:ac:tmg(tmgotBr,sb:.ae)</span>
    	</pre>
    </figure>
    <p>
        This is why there is no active/passive distinction: the occurrence itself takes precedence over the subject.
        When describing that something happened, the subject and object may be omitted, they are optional parameters.
    </p>
</section>
        `
    )
}