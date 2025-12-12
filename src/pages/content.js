export function ContentPage() {
    return (
        `
<section id="content">
    <h2>Content</h2>
    <p>
        In Sayia, content is treated as an object. Dialogue, thoughts, quotations,
        and similar expressions are handled as content objects. A content object
        can be written using <strong>CONT ... CONTEND</strong>, <strong>"..."</strong>,
        or <strong>'...'</strong>. Example:
    </p>
    <figure class="example">
    	<pre>
<span class="comment">The person's name is Alice. 
She says her money is missing.
</span>    
<span class="sayia">::ap@[z:ojisbHu] == "Alice"; 
::say(":pi:boj(tmbia@.ae)",sb:Alice)</span>
    	</pre>
    </figure>
    <p>When inserting algebraic expressions, code, or text in other languages,
        quotation marks ("...") may be used. Such content is treated as a paragraph
        object and does not need to follow Sayia grammar, vocabulary, or symbols.
        Example:</p>
    <figure class="example">
    	<pre>
<span class="sayia">nldsn</span>: "
    ∂²ψ/∂t² = c² × ∇²ψ
    ψ(x,t) = A × sin(kx − ωt)
    v = ω / k 
";
    	</pre>
    </figure>
    <p>
        If the content itself contains quotation marks, or if the content spans
        multiple lines, use the <strong>CONT...CONTEND</strong> form to avoid
        ambiguity. Example:</p>
    <figure class="example">
    	<pre>
<span class="sayia">mjpsn</span>: CONT

    package main
    
    import "fmt"
    
    func main() {
        fmt.Println("Hello Sayia")
    }
    
CONTEND;
    	</pre>
    </figure>
</section>
        `
    )
}