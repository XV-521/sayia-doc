
export function LabeledFormatPage () {
    return (
        `
<section>
    <h2>Labeled Format</h2>
    <p>
        Labeled Format is an auxiliary writing style used alongside normal
        Sayia sentences. It provides a convenient way to attach contextual
        information such as time, location, speaker, notes, or narrative
        metadata. Format</p>
    <code class="fmt">Field: Object;</code>
    <p>Example:</p>
    <figure class="example">
    	<pre>
<span class="comment">Location: Hawaii
Date: 2025-11-07

Alice said, "Are you traveling?"
Bob said, "Yes."
Bob thought, "Maybe she knows where to go to have fun."</span>    

<span class="sayia">ag: Hawaii;
an: oD2024.oF10.oI6;

sayot@Alice: "?:ac:nhg(sb:.yo)";
sayot@Bob: "::.ts == true";
momot@Bob: "m::iox(momdt$'%?::ooxpc#oxTu^me#',
            sb:[z:ojisbHu])"</span>
    	</pre>
    </figure>
</section>
        `
    )
}