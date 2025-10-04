import React from 'react';
import firstgraph from '../assets/buygraph.png';
import secondgraph from '../assets/plangraph.png';
import propbank from '../assets/propbank.png';
import { Link } from 'react-router-dom';
import '../pages/InstructionPage.css';


const CodeBlock = ({ children }) => (
    <pre className="code-block">
        <code>{children}</code>
    </pre>
);

const Example = ({ number, title, sentence, penman, graph, children }) => (
    <div className="example-block">
      <h4 className="example-title">Example {number}: "{title}"</h4>
      {sentence && <p className="paragraphs">{sentence}</p>}
      {penman && (
        <>
          <p className="paragraphs font-medium">PENMAN notation:</p>
          <CodeBlock>{penman}</CodeBlock>
        </>
      )}
      {graph && (
          <>
              <p className="paragraphs font-medium">Graph notation:</p>
          </>
      )}
      {children && <div className="paragraphs">{children}</div>}
    </div>
  );


export default function InstructionsPage() {
    return (
      <div className="instruction-container">
        <div className="title-block">
           <h1>AMR Tutorial</h1>
        </div>
        
        <p className="minitext">Reminder: References to sources are listed in the About page.</p>
  
        <h1 className="section-title">How to Create AMR Annotations</h1>
        
        <p className="paragraphs">
          <strong>Abstract Meaning Representation (AMR)</strong> is a method of representing the basic meaning of a sentence in a single structure, namely a graph that is rooted and directed. AMR is primarily concerned with English and does not annotate every single word in a sentence, allowing for abstraction. We will learn how to create AMR graphs in PENMAN notation.
        </p>
  
        {/* Basic PENMAN Notation Section */}
        <section className="section">
          <h2 className="subheaders">Basic PENMAN Notation</h2>
          <p className="paragraphs">
            First, AMRs have a root which represents the focus of the sentence. The root goes at the top of the AMR. Each edge of an AMR graph represents a relation, and the leaves are labeled with concepts. Concepts include PropBank framesets (such as "buy-01"), English words (such as "house"), and other keywords.
          </p>
          <Example number={1} title="The house.">
            <p className="paragraphs">PENMAN notation:</p>
            <CodeBlock>(h / house)</CodeBlock>
            <p className="paragraphs">Here, "house" is the root and a concept.</p>
          </Example>
          <Example number={2} title="She bought a house." penman={`(b / buy-01\n  :ARG0 (s / she)\n  :ARG1 (h / house))`} graph>
            <img src={firstgraph} width="250" height="150" alt="AMR graph of the sentence 'She bought a house.'" />
              <p className="paragraphs">
                  Since buying is the main point of the sentence, "buy-01" is the root. Notice that grammatical details such as punctuation, tense, plurality, and articles are ignored since they do not add much to our understanding of the sentence. Most prepositions are ignored as well, unless they add meaning. Demonstrative pronouns are kept (ie: "that") in AMRs.
              </p>
              <p className="paragaphs">
                  As you can see in the graph, buy-01 is the root. Instances are variables that represent concepts, such as "b" for "buy-01". As you can see, every concept is at the leaf of the graph. :ARG1 and :ARG0 show the relationship between the root "buy-01" to the entities "she" and "house". Also note the placement of the open and closed parentheses.
              </p>
          </Example>
           <p className="paragaphs">
              Note that if a single entity has several roles in a sentence, the instance can be reused. In the following example, <strong>poss</strong> represents possession.
          </p>
          <Example number={3} title="The boy called his dog." penman={`(c / call-02\n  :ARG0 (b / boy)\n  :ARG1 (d / dog\n    :poss b))`} />
          <Example number={4} title="The child plans to find a star." penman={`(p / plan-01\n  :ARG0 (c / child)\n  :ARG1 (f / find-01\n    :ARG0 c\n    :ARG1 (s / star)))`} graph>
            <img src={secondgraph} width="300" height="250" alt="AMR graph of the sentence 'The child plans to find a star.'" />
               <p className="paragraphs">Notice that in the graph, one concept has multiple edges pointing to it. This is called reentrancy, which is further explained in the official documentation. In PENMAN notation, this can appear as a concept label being reused, such as the "c" for "child". However, we want to make sure that we use different concept labels for different concepts. So if there was a sentence "The child plans to find a cool star", then the concept labels for "child" and "cool" would have to be different (i.e.: c / child, c1 / cool).</p>
          </Example>
        </section>
  
        {/* PropBank Frames Section */}
        <section className="section">
          <h2 className="subheaders">PropBank Frames</h2>
          <p className="paragraphs">
              Link to PropBank Framesets: <a href="https://propbank.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://propbank.github.io/</a> (You can go to "Searchable Frame Files" to conveniently view them on the web, or go to the "Frame Files repository" to view the individual XML files for each frame).
          </p>
    
          <p className="paragraphs">
            There are well over 3,000 frames in PropBank, which are heavily relied on to create AMR graphs. They come in the format of a 'verb-XX'. The sense ID, or the 2-digit number after the dash, distinguishes the specific meaning of that verb. For example, the sentence "The show ran until last year" uses "run-13" (noted as "progression over a specific (maybe time) span" in PropBank) while the sentence "I run a mile everyday" uses "run-02" (noted as "walk quickly, a course or contest, run/jog, run for office").
          </p>
          <p className="paragraphs">
            Also note that the same frame is generally used across different parts of speech as long as it has the same basic form (ie: "happiness" and "I am happy" both use happy-01).
          </p>
          <p className="paragraphs">
          There are more details and example sentences for each frame in the PropBank GitHub. Here's a snapshot of what you can see in the Searchable Frame Files:
          </p>
          <img src={propbank} width="530" height="350" alt="Searchable PropBank Framesets website, showing 'buy.01'." />
        </section>
  
        {/* Nouns and Adjectives Section */}
        <section className="section">
          <h2 className="subheaders">Nouns and Adjectives</h2>
          <p className="paragraphs">
            Note that nouns, especially those that end in "-er" or are nominalizations of verbs, may be represented by PropBank framesets. For example,
          </p>
          <Example number={5} title="A transcriber." penman={`(p / person\n  :ARG0-of (t / transcribe-01))`}>
            <p className="paragraphs">
              Here we use <strong>:ARG0-of</strong>, which is the inverse form of :ARG0. This will be further explained later, but if we don't use the inverse, then we get a meaning closer to "The person transcribed" as expressed in the following:
            </p>
            <CodeBlock>{`(t / transcribe-01\n  :ARG0 (p / person))`}</CodeBlock>
          </Example>
          <Example number={6} title="The lawyer's justification of the case." penman={`(j / justify-01\n  :ARG0 (l / lawyer)\n  :ARG1 (c / case))`}>
            <p className="paragraphs">This AMR can also be interpreted as "The lawyer justified the case," "The justification of the case by the lawyer", etc.</p>
          </Example>
          <p className="paragraphs">
            Also note that adjectives, especially those that end in "-ed" or are participles, may use PropBank framesets. See the following example.
          </p>
          <Example number={7} title="The squirrel hid foraged acorns." penman={`(h / hide-01\n  :ARG0 (s / squirrel)\n  :ARG1 (a / acorn\n    :ARG1-of (f / forage-01)))`}>
            <p className="paragraphs">The use of <strong>:ARG1-of</strong> suggests foraging happened before hiding the acorns. The relation <strong>:mod</strong> could also be used here to describe the acorns. Plurality is ignored ("acorn").</p>
          </Example>
          <Example number={8} title="He found a sparkling gem." penman={`(f / find-01\n  :ARG0 (h / he)\n  :ARG1 (g / gem\n    :ARG1-of (s / sparkle-01)))`} />
        </section>
        
        {/* Roles and Relations Section */}
        <section className="section">
          <h2 className="subheaders">Roles and Relations</h2>
          <p className="paragraphs">We will only be going through the most common roles used in AMR. For more details, refer to the <a href="https://github.com/amrisi/amr-guidelines/blob/master/amr.md" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AMR guidelines</a>.</p>
          
          <h3 className="subsection-title">Frame Arguments</h3>
          <p className="paragraphs">:ARG roles come from PropBank framesets and include :ARG0, :ARG1, :ARG2, :ARG3, :ARG4, and :ARG5. It is often the case that :ARG0 is used for the agent, or the one doing the action, and :ARG1 is used for the one receiving the action. There is more variation in how :ARG2 through :ARG5 roles are used, however some examples of usages include representing the quantity or other attribute, the starting or ending point, etc. PropBank frames have more information on what each argument, or slot, should look like (as you can see in the buy-01 image under "Roles"). Be sure to reference these rolesets when creating AMRs.</p>
          <Example number={9} title="The mother gave her child a bag." penman={`(g / give-01\n  :ARG0 (m / mother)\n  :ARG1 (b / bag)\n  :ARG2 (c / child))`} />
  
          <h3 className="subsection-title">Other Common Relations</h3>
          <p className="paragaphs">Some common general relations are <strong>:domain, :location, :mod, :name</strong>, and <strong>:time</strong>.</p>
          <Example number={10} title="The dog is cute." penman={`(c / cute\n  :domain (d / dog))`} />
          <Example number={11} title="The beaver is at the river." penman={`(b / beaver\n  :location (r / river))`} />
          <Example number={12} title="The tired student slept at dawn." penman={`(s / sleep-01\n  :ARG0 (s2 / student\n    :mod (t / tired))\n  :time (d / dawn))`}>
              <p className="paragaphs">The relation <strong>:mod</strong> is used to describe things, such as the quality of an object. The relation <strong>:domain</strong> serves as the inverse of :mod. Often, what comes after mod is a specific feature of the object. What comes after domain is the noun or what is being described. :domain is also used for copulas ("is"). :mod can also be used before demonstrative pronouns such as "this".</p>
          </Example>
          <Example number={13} title="This dress." penman={`(d / dress\n  :mod (t / this))`} />
          <p className="paragaphs">The next example shows the use of <strong>:quant</strong>, which is one way of representing quantity.</p>
          <Example number={14} title="The staff prepared 13 servings." penman={`(p / prepare-01\n  :ARG0 (s / staff)\n  :ARG1 (s2 / serving\n    :quant 13))`}>
              <p className="paragaphs">The <strong>:quant</strong> relation is called a constant because the value it represents does not have a variable. Other constants exist as well, such as <strong>:name</strong> and <strong>:polarity</strong>.</p>
          </Example>
          <p className="paragaphs">There are multiple ways to show date relations, one of which is <strong>:year</strong>.</p>
          <Example number={15} title="She graduated in 2022." penman={`(g / graduate-01\n  :ARG0 (s / she)\n  :time (d / date-entity\n    :year 2022))`} />
        
          <h3 className="subsection-title">Listing Entities</h3>
          <p className="paragaphs">We list ordered items with :opX (:op1, :op2, :op3, ...). Example use cases are listing grocery items or writing the first and last name of someone.</p>
          <Example number={16} title="Funk and soul." penman={`(a / and\n  :op1 (f / funk)\n  :op2 (s / soul))`} />
          <Example number={17} title="Springfield." penman={`(c / city\n  :name (n / name\n    :op1 "Springfield"))`}>
              <p className="paragaphs">You can read more about the special annotation, <strong>:wiki</strong>, and named entities in the guidelines.</p>
          </Example>
  
          <h3 className="subsection-title">Inverse Relations</h3>
          <p className="paragaphs">Inverse relations provide a way to show passive structure, such as "the girl who ate" rather than "the girl ate." The focus is on the girl rather than the action of eating. Inverse relations are also often used for nominalizations ("the smiling face"), quantities, and relative pronouns. We use "-of" to represent the inverse of a relation.</p>
          <div className="example-block">
            <p className="paragraphs">For example, the sentence "The butterfly that flew" would be represented using an inverse relation as seen in the following AMR:</p>
            <CodeBlock>{`(b / butterfly\n  :ARG0-of (f / fly-01))`}</CodeBlock>
            <p className="paragraphs">while the sentence "The butterfly flies" is shown as:</p>
            <CodeBlock>{`(f / fly-01\n  :ARG0 (b / butterfly))`}</CodeBlock>
          </div>
          <p className="paragraphs">Here are some more examples of inverse relations being used.</p>
          <Example number={18} title="The book that sold." penman={`(b / book\n  :ARG1-of (s / sell-01))`} />
          <Example number={19} title="The market where customers bartered." penman={`(m / market\n  :location-of (b / barter-01\n    :ARG0 (c / customer)))`} />
          <Example number={20} title="The book that I wrote." penman={`(b / book\n  :ARG1-of (w / write-01\n  :ARG0 (i / i)))`} />

  
          <h3 className="subsection-title">Negations</h3>
          <p className="paragaphs">We negate using <strong>:polarity -</strong>.</p>
          <Example number={21} title="The bird did not fly." penman={`(f / fly-01\n  :ARG0 (b / bird)\n  :polarity -)`} />
  
        </section>
  
        <section className="section">
          <h3 className="subheaders">Modals</h3>
          <p className="paragaphs">Modals are helping verbs that express ideas like possibility, ability, permission, and obligation (i.e.: "should", "could"). We use concepts to represent modals (more examples in the guidelines).</p>
          <Example number={22} title="Max may not sled down the big hill." penman={`(p / permit-01\n  :ARG1 (s / sled-01\n    :ARG0 (p / person\n      :name "Max")\n    :ARG2 (h / hill\n      :mod (b / big)))\n  :polarity -)`} />
          <Example number={23} title="It's possible the cat does not climb tall trees." penman={`(p / possible-01\n  :ARG1 (c / climb-01\n    :ARG0 (c2 / cat)\n    :ARG1 (t / tree\n      :mod (t2 / tall))\n    :polarity -))`} />
        </section>
  
        <section className="section">
          <h2 className="subheaders">Questions</h2>
          <p className="paragaphs">Interrogative words (who, what, where, why, when) are marked by the concept "amr-unknown". Some possible examples of corresponding relations are:</p>
          <ul align="left" className="custom-list">
            <li><strong>"Why"</strong> - :purpose</li>
            <li><strong>"What"</strong> - :domain or :ARGX</li>
            <li><strong>"Where"</strong> - :location</li>
            <li><strong>"How"</strong> - :manner</li>
            <li><strong>"How many"</strong> - :quant</li>
            <li><strong>"Whose"</strong> - :poss</li>
          </ul>
          <Example number={24} title="Why did he turn around?" penman={`(t / turn-around-23\n  :ARG0 (h / he)\n  :purpose (a / amr-unknown))`} />
          <Example number={25} title="What movie did you watch?" penman={`(w / watch-01\n  :ARG0 (y / you)\n  :ARG1 (a / amr-unknown\n    :ARG1-of (m / movie)))`} />
          <p className="paragaphs">The concept "amr-unknown" is attached to :ARG1 because :ARG1 of watch-01 is the thing being watched (which is a movie).</p>
          <p className="paragaphs">Choice questions use the concept "amr-choice" and list the options with :opX. Yes-no questions use polarity (a / amr-unknown).</p>
          <Example number={26} title="Does she like strawberries?" penman={`(l / like-01\n  :ARG0 (s / she)\n  :ARG1 (s2 / strawberry)\n  :polarity (a / amr-unknown))`} />
        </section>
  
        <section className="section">
          <h2 className="subheaders">Reifications</h2>
          <p className="paragaphs">Reifications are used to make a relation into a concept or to modify relations. There is a list of reifications in the AMR guidelines.</p>
          <Example number={27} title="The neighbor was not at the house." penman={`(b / be-located-at-91\n  :ARG1 (n / neighbor)\n  :ARG2 (h / house)\n  :polarity -)`} />
        </section>
  
        <section className="section">
          <h2 className="subheaders">More Examples</h2>
          <p className="paragaphs">Here are some more examples for fun!</p>
          <Example number={28} title={`The American sitcom "The Golden Girls" had seven seasons.`} penman={`(s / sitcom\n  :name (n / name :op1 "The" :op2 "Golden" :op3 "Girls")\n  :mod (c / country\n    :wiki "United_States"\n    :name (n2 / name\n      :op1 "America"))\n  :domain (s2 / season\n    :quant 7))`} />
          <Example number={29} title="The dog barked at the squirrel as it climbed up a tree." penman={`(b / bark-01\n  :ARG0 (d / dog)\n  :ARG2 (s / squirrel)\n  :time (c / climb-01\n    :ARG0 s\n    :ARG1 (t / tree)))`} />
          <Example number={30} title="She could not believe that the stranger knew her." penman={`(p / possible-01\n  :ARG1 (b / believe-01\n    :ARG0 (s / she)\n    :ARG1 (k / know-02\n      :ARG0 (s2 / stranger)\n      :ARG1 s))\n  :polarity -)`} />
          <Example number={31} title="The singer, who the friend I talked to yesterday likes a lot, announced she would be leaving the famous agency because of ongoing rumors." penman={`(a / announce-01\n  :ARG0 (s / singer\n    :ARG1-of (l / like-01\n      :ARG0 (f / friend\n        :ARG2-of (t / talk-01\n          :ARG0 (i / i)\n          :time (y / yesterday)))\n      :quant (l2 / lot)))\n  :ARG1 (l3 / leave-15\n    :ARG0 s\n    :ARG1 (a2 / agency\n      :mod (f2 / famous))\n    :ARG1-of (c / cause-01\n      :ARG0 (g / go-on-15\n        :ARG1 (r / rumor)))))`} />
        </section>
  
        <footer className="footer">
          <p className="footer-text">Now you know how to create AMRs for basic sentences. Move on to the <Link to="/demo">demo page</Link> to practice (and don't forget to read the instructions at the top of the page!).</p>
        </footer>
      </div>
    );
  }