export function DialogueExamplesPage() {
    return (
        `
<section>
    <p>This section provides 10 examples to demonstrate how Sayia
        is expressed in daily life.</p>
</section>
<section>
    <h3>Example 1</h3>
    <p>A conversation about buying things:</p>
    <figure class="example">
    	<pre>
<span class="comment">Customer：Hi, how much is this hat?    
Shopkeeper：It's 20 dollars.
Customer：That’s a bit expensive. Can you give me a discount?
Shopkeeper：15 dollars, final price.
Customer：Deal! Thank you.</span>
        
<span class="sayia">sayot@tmbsb: "%?::mb@[z:tbuotHt]";
sayot@smbsb: "::.it#\`i:20 USD\`#";
sayot@tmbsb: "::[z:mb]#ziFx#; ?c::fzi(.it)";
sayot@smbsb: "c::[z:mb]#\`i:15 USD\`#; c!::iac(fzi)";
sayot@tmbsb: "c::tiu(); :ac:sfn(.yo)";</span>
    	</pre>
    </figure>
</section>
<section>
    <h3>Example 2</h3>
    <p>A conversation about weekend plans:</p>
    <figure class="example">
    	<pre>
<span class="comment">A: Do you have any plans for this weekend?
B: Not really. Why?
A: I’m thinking about going hiking if the weather is good.
B: That sounds nice. Do you have a plan?
A: I want to go camping by the lake on Saturday and hike the on Sunday.
B: Are you going alone?
A: I might ask a friend to join. Would you like to come too?
B: Yeah, I’d like to. Let’s go together.
A: Let’s meet on Saturday morning.
B: See you on Saturday!</span>

<span class="sayia">sayot@A: "?:pi:mmn(sb:.yo,pr:zf@[z:oG]#zfEd#)";
sayot@B: "!:pi:gng(); %?::ay#h::say(.it)";
sayot@A: "h::shj(shjotHk) {if ::[z:am]#faPi#}";
sayot@B: "::.it#oxTu^fa#; ?:pi:mmn(sb:.yo)";
sayot@A: "h::oji(pc:oajsnNa@[z:iovotLk],tm:oH5) && shj(shjotHk,tm:oH6)";
sayot@B: "?h::btj(sb:*.yo)";
sayot@A: "m::siu(1pldotFr); ?h::btj(sb:.yo)";
sayot@B: "::.ts == true; h::pmx(.yo,sb:.ae)";
sayot@A: "cmd::psc(tm:zf@oH5#zfAr#)";
sayot@B: ":wl:psc(.yo,tm:oH5)";</span>
    	</pre>
    </figure>
</section>
<section>
    <h3>Example 3</h3>
    <p>A conversation about asking for directions:</p>
    <figure class="example">
    	<pre>
<span class="comment">A: Excuse me, where is the restroom?
B: There's one down this street.
A: How do I get there?
B: Go straight ahead. You’ll see a coffee shop on your right. 
   After you pass the shop, turn left at the corner. The restroom 
   will be on your left.
A: What does the sign of the shop look like?
B: It’s a brown sign with a white coffee cup on it.
A: Got it, thank you!
B: You’re welcome. </span>

<span class="sayia">sayot@A: ":ac:udb(tg:.yo); %?::ag@smspc";
sayot@B: "::oox(pc:[z:otcdtRo])";
sayot@A: "%?::ng@btj(tg:[z:smspc])";
sayot@B: "s::iaj() 
         => :wl:ssc(1tmiotCf-smbpc,pc:oajsnRi@.yo)
         => ::caj(pc:cajpc)
         => :wl:ssc([z:smspc],pc:oajsnLt@.yo)";
sayot@A: "%?::sc@gagdt@[z:smbpc]";
sayot@B: "::.it#sdBn^sd# && iox(sc$1tmiotCf-tmiia#sdWt^sd#, sb:.it)";
sayot@A: ":pi:tao(.ts); :ac:sfn(.yo)";
sayot@B: "!::tfl()";</span>
    	</pre>
    </figure>
</section>
<section>
    <h3>Example 4</h3>
    <p>A conversation about ordering food:</p>
    <figure class="example">
    	<pre>
<span class="comment">Customer: Hi, do you have a menu?
Server: Here you go.
Customer: Thanks. What do you recommend?
Server: Our most popular dish is the chicken rice.
Customer: That sounds good. Does it come with vegetables?
Server: Yes, it comes with a side of vegetables.
Customer: Okay, I’ll have that. And a glass of water, please.
Server: Still or sparkling?
Customer: Still, please.
Server: Anything else?
Customer: No thanks.
</span>
 
<span class="sayia">sayot@tmbsb: "?::iox(tmgot-sjtdt)";
sayot@jdesb: ":ac:sob(tg:.yo)";
sayot@tmbsb: ":ac:sfn(); %?::sjtot#sni(.it,sb:.yo)#";
sayot@jdesb: "::tmgot#ziIx^mz# == ojisbMoCh-tmgotMt-tmgotRi";
sayot@tmbsb: "::.it#oxTu^fa#; ?::iox(tmgotVg,sb:.it)";
sayot@jdesb: "::.ts == true";
sayot@tmbsb: "h::iox(.it&&tmiot#tw@tmiia#,sb:.ae)";
sayot@jdesb: "%?::sjtot@[tmiotWt&&tmiotSp]";
sayot@tmbsb: "h::iox(tmiotSp)";
sayot@jdesb: "?::tfl([s:tmgot]#!:pi:doa(.ix)#)";
sayot@tmbsb: "::.ts == false; :ac:sfn()";</span>
    	</pre>
    </figure>
</section>
<section>
    <h3>Example 5</h3>
    <p>An instruction on milking cows:</p>
    <figure class="example">
    	<pre>
<span class="comment">Make sure the cow is calm and comfortable. Then clean the 
udder with warm water. Next, place a clean bucket under 
the udder. After that, gently squeeze the teat and pull 
downward to let the milk flow. Keep repeating the motion 
until the milk slows down. When you’re done, cover the milk.
</span>
<span class="sayia">cmd::{if [z:ojisbMoCo]#oxTu^dl && oxTu^de#} iac()
=> cmd::box(boxot@[z:coxotBr], ia:iovotWt#ziFx^af#) 
=> cmd::jag(1otwia, tg:oajsnBl@[z:coxotBr])
=> cmd::jab([z:jmgku])#hdPc^hd && hdPu^hd##ziDx^gl#
=> :wl:ftx(abpdtMk); {if :pi:bjf(.it)} cmd::obu(abpdtMk)</span>
    	</pre>
    </figure>
</section>
<section>
    <h3>Example 6</h3>
    <p>A line from "The Matrix":</p>
    <figure class="example">
    	<pre>
<span class="comment">You take the blue pill, the story ends. You wake up in 
your bed and believe whatever you want to believe. You 
take the red pill, you stay in Wonderland, and I show you 
how deep the rabbit hole goes.</span>      

<span class="sayia">{if :ac:tmg(dhaiaDg#sdBu^sd#, sb:.yo)}
:wl:bjf([z:occ]) 
=> :wl:bjf(ucf, pc:ucfia@.yo, sb:.yo) 
=> :wl:jfg([e:ooxsb]#h::jfg(.ix, sb:.yo)#, sb:.yo);
{if :ac:tmg(dhaiaDg#sdRe^sd#)}
:wl:iag(pc:Wonderland) 
=> :wl:ssc(tv@[z:ojisbMo-jtvsn])</span>
    	</pre>
    </figure>
</section>
<section>
    <h3>Example 7</h3>
    <p>An introduction to donuts from
        <a href="https://en.wikipedia.org/wiki/Doughnut" target="_blank" rel="noopener noreferrer">
            wikipedia</a>:</p>
    <figure class="example">
    	<pre>
<span class="comment">Doughnuts are usually deep fried from a flour dough, 
but other types of batters can also be used. Various 
toppings and flavors are used for different types, 
such as sugar, chocolate or maple glazing. Doughnuts 
may also include water, leavening, eggs, milk, sugar, 
oil, shortening, and natural or artificial flavors.
</span>
<span class="sayia">::amgia@tmgotDo == pjmsn@[amgiaFl&&tmiotWt]#ziCx^zl||
ziGx^zl#; s::amg(tmgotDo, ia:amgiaOi#ziGx^af#); {for 
[e:rd]@tmgotDo]} c::pmx(amgiaSg||tmgotCt||amgiaJm,
sb:.it); c::pjt(tmiotWt||amgiaLv||tmgotEg||tmiotMk||
amgiaSg||amgiaOi||amgiaSo||amgiaFi,sb:tmgotDo)</span>
    	</pre>
    </figure>
</section>
<section>
    <h3>Example 8</h3>
    <p>A translation of a dialogue from "The Truman Show":</p>
    <figure class="example">
    	<pre>
<span class="comment">Truman: Who are you?
Christof: I am the creator of a television show that gives 
    hope and joy and inspiration to millions.
Truman: Then who am I?
Christof: You are the star.
Truman: Was nothing real?
Christof: You were real. That’s what made you so good to watch.
</span>
<span class="sayia">sayot@Truman: "%?::vscot@.yo";
sayot@Christof: "::.it == aoxsb@[1smlsnTv#c::sob(jflsn&&udasn
                &&aoxia, tg:10^6++taosb, ia:.it)#]";
sayot@Truman: "%?::vscot@.ae";
sayot@Christof: "::.it == smlsb";   
sayot@Truman: "?::[n:ooxsb]#oxTu^od#";
sayot@Christof: "::.yo#oxTu^od# {soa ::tao(.yo)#oxTu^mu#}";</span>
    	</pre>
    </figure>
</section>
<section>
    <h3>Example 9</h3>
    <p>An introduction to the observation of 3I/ATLAS,
        from <a href="https://science.nasa.gov/blogs/planetary-defense/2025/07/02/nasa-discovers-interstellar-comet-moving-through-solar-system/"
                target="_blank" rel="noopener noreferrer">NASA</a>:</p>
    <figure class="example">
    	<pre>
<span class="comment">On July 1, the NASA-funded ATLAS survey telescope in 
Rio Hurtado, Chile, first reported observations of a 
comet that originated from interstellar space. Arriving 
from the direction of the constellation Sagittarius, the 
interstellar comet has been officially named 3I/ATLAS. 
It is currently located about 420 million miles (670 
million kilometers) away.
</span>
<span class="sayia">LANG:SAYIA,EN;

:pi:nro(1\`comet\`&lt;A&gt;, sb:tsciaTl#::jfd(sb:NASA,pc:
[Rio Hurtado]@Chile,ia:.it)##"ATLAS"^ap#) => :pi:ssc(
noddt$.A, sb:nrosb, tf:\`interstellar space\`,tm:oF6.oI0
)#gN1#; ::btj(tf:\`constellation Sagittarius\`,sb:.A) 
&& ap@.A =="3I/ATLAS"; ::.A/[z:nropc]#6.7*10^10++cC#</span>
    	</pre>
    </figure>
</section>
<section>
    <h3>Example 10</h3>
    <p>A message from a Sayia alien:</p>
    <figure class="example">
    	<pre>
<span class="comment">My name is Sayia312. I am a traveler from Sayia, a small and 
peaceful planet. We wish to make contact with the people of 
Earth, so we have left behind the Sayia language. If one day 
you visit our planet, you can use it to speak with our residents. 
Hope to see you again, Earthling.
</span>
<span class="sayia">::ap@.ae == "Sayia312";
:pi:nhg(sb:.ae,tf:otcdtPl#"Sayia"^ap##ziCx^tc && oxTu^op#);
h::old(ojisbHu@Earth,sb:.ax) {soa :pi:jag(Sayia, tg:Earth)};
{if :wl:btj(tg:otcdtPl@.ax, sb:.yo)} c::say(tg:iagsb@.ax,ia:
Sayia); h::psc(.yo#oa@ojisb@Earth#)#[z:gN]>>+1#</span>
    	</pre>
    </figure>
</section>
        `
    )
}