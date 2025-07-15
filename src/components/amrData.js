
//each object is a single sentence to be shown one at a time for the Demo.

 export const amrData = [
    { 
        order: 1, 
        sentence: "Champagne and dessert followed.", 
        goldAMR: `(f / follow-01
        :ARG1 (a / and
                :op1 (c / champagne)
                :op2 (d / dessert)))`, 
        explanation: "The focus of the sentence is `follow-01` (\"followed\"). The entity that followed (`:ARG1`) is a coordinated phrase, represented by `and`. The \"and\" conjunction connects two operands: `:op1` is champagne and `:op2` is dessert (\"champagne and dessert\").",
        breakdown: [
            { id: 1, indentation: 0, amr: '(f / follow-01', sentence: 'To follow' },
            { id: 2, indentation: 1, amr: ':ARG1 (a / and', sentence: 'The thing that followed is and' },
            { id: 3, indentation: 2, amr: ':op1 (c / champagne)', sentence: 'The thing that followed is champagne and' },
            { id: 4, indentation: 2, amr: ':op2 (d / dessert)))', sentence: 'The thing that followed is champagne and dessert' },
        ],
        source: "Source: ::id nw.wsj_0010.8 (amr-release-3.0-amrs-consensus.txt)",
        filename: "amr-release-3.0-amrs-consensus.txt",
        id: "::id nw.wsj_0010.8"
    },
    {
        order: 2,
        sentence: "It's the same old problem.",
        goldAMR: `(p / problem
            :ARG1-of (s / same-01
                :ARG2 (i / it))
            :mod (o / old))`,
        explanation: "The focus of the AMR is `problem`, which is modified by the concept `old`. The inverse relation `ARG1-of` tells us that `problem` takes the ARG1 role of `same-01` (becoming one of the compared items). \"It\" is the `ARG2` of `same-01` (the other compared item). A non-inverted structure would have a sentence such as \"the old problem is the same as it\".",
        breakdown: [
            { id: 1, indentation: 0, amr: '(p / problem', sentence: 'The problem' },
            { id: 2, indentation: 1, amr: ':ARG1-of (s / same-01', sentence: 'The problem is the same' },
            { id: 3, indentation: 2, amr: ':ARG2 (i / it)', sentence: 'The problem is the same as it' },
            { id: 4, indentation: 1, amr: ':mod (o / old))', sentence: 'It is the same old problem' }  
        ],
        source: "Source: ::id wb.eng_0003.41 (amr-release-3.0-amrs-test-consensus.txt)",
        filename: "amr-release-3.0-amrs-test-consensus.txt",
        id: "::id wb.eng_0003.41"
    },
    {
        order: 3,
        sentence: "Smoke and clouds chase the flying waves",
        goldAMR: `(c / chase-01
        :ARG0 (a / and
            :op1 (s / smoke)
            :op2 (c2 / cloud))
        :ARG1 (w / wave
            :ARG1-of (f / fly-01)))`,
        explanation: "The focus of the AMR is `chase-01` (\"chase\"). The agent (`ARG0`) is a coordinated phrase represented by `and`, which connects two operands: `:op1` is smoke and `:op2` is cloud (\"smoke and clouds\"). The thing being chased (`ARG1`) is a wave, which has an action associated with it (`ARG1-of`) indicating that the wave is flying (`fly-01` used for \"the flying waves\").",
        breakdown: [
            { id: 1, indentation: 0, amr: '(c / chase-01', sentence: 'To chase' },
            { id: 2, indentation: 1, amr: ':ARG0 (a / and', sentence: 'The thing that chases is and' },
            { id: 3, indentation: 2, amr: ':op1 (s / smoke)', sentence: 'The thing that chases is smoke and' },
            { id: 4, indentation: 2, amr: ':op2 (c2 / cloud)', sentence: 'The thing that chases is smoke and clouds' },
            { id: 5, indentation: 1, amr: ':ARG1 (w / wave', sentence: 'The thing that is chased is a wave' },
            { id: 6, indentation: 2, amr: ':ARG1-of (f / fly-01))', sentence: 'The thing that is chased is a wave that flies' }
        ],
        source: "Source: ::id bolt12_6455_6562.19 (amr-release-3.0-amrs-test-bolt.txt)",
    },
    {
        order: 4,
        sentence: "The meeting has been fruitful.",
        goldAMR: `(f / fruitful
        :domain (m / meet-03))`,
        explanation: "The focus of the AMR is `fruitful`, which is a quality. The `:domain` relation indicates that this quality applies to the action `meet-03` (\"the meeting\").",
        breakdown: [
            { id: 1, indentation: 0, amr: '(f / fruitful', sentence: 'To be fruitful' },
            { id: 2, indentation: 1, amr: ':domain (m / meet-03))', sentence: 'The meeting was fruitful' }
        ],
        source: "Source: ::id PROXY_AFP_ENG_20020517_0035.13 (amr-release-3.0-amrs-proxy.txt)",
    },
    {
        order: 5,
        sentence: "I have no desire to live in any city,",
        goldAMR: `(d / desire-01
        :ARG0 (i / i)
        :ARG1 (l / live-01
            :ARG0 i
            :location (c / city
                :mod (a / any)))
        :polarity -)`,        
        explanation: "The focus of the AMR is `desire-01`. The `:polarity` relation marks the negation of `desire-01` (“no desire”). The experiencer of this desire (`ARG0`) is `i`. The thing desired (`ARG1`) is the action `live-01`. The agent (`ARG0`) of `live-01` is also `i`. The action `live-01` is further specified with `:location`, which is a city modified by `any` (\"in any city\").",
        breakdown: [
            { id: 1, indentation: 0, amr: '(d / desire-01', sentence: 'To desire' },
            { id: 2, indentation: 1, amr: ':ARG0 (i / i)', sentence: 'I desire' },
            { id: 3, indentation: 1, amr: ':ARG1 (l / live-01', sentence: 'I desire to live' },
            { id: 4, indentation: 2, amr: ':ARG0 i)', sentence: 'I desire to live in' },
            { id: 5, indentation: 2, amr: ':location (c / city', sentence: 'I desire to live in a city' },
            { id: 6, indentation: 3, amr: ':mod (a / any)))', sentence: 'I desire to live in any city' },
            { id: 7, indentation: 1, amr: ':polarity -))', sentence: 'I have no desire to live in any city' }
        ],
        source: "Source: ::id wb.eng_0003.87 (amr-release-3.0-amrs-test-consensus.txt)",
    },
    { 
        order: 6, 
        sentence: "Her performance was 303.00 points.", 
        goldAMR: `(p2 / point :quant 303.00
        :domain (p / perform-01
            :ARG0 (s / she)))`, 
        explanation: "The focus of the AMR is the concept `point`, which has a quantified (`:quant`) by 303.00 (\"303.00 points\"). The `:domain` relation indicates that this point is describing the action `perform-01` (\"performance\"). The agent (`ARG0`) of `perform-01` is `she` (\"her performance\").",
        breakdown: [
            { id: 1, indentation: 0, amr: '(p2 / point', sentence: 'The point' },
            { id: 2, indentation: 1, amr: ':quant 303.00', sentence: 'The point is 303.00' },
            { id: 3, indentation: 1, amr: ':domain (p / perform-01', sentence: 'The performance is 303.00 points' },
            { id: 4, indentation: 2, amr: ':ARG0 (s / she)))', sentence: 'Her performance is 303.00 points' }
        ],
        source: "Source: ::id nw.chtb_0325.6 (amr-release-3.0-amrs-test-xinhua.txt)",
    },
    { 
        order: 7, 
        sentence: "Why the bodyguards?", 
        goldAMR: `(b / bodyguard
        :ARG1-of (c / cause-01
            :ARG0 (a / amr-unknown)))`, 
        explanation: "The focus of the AMR is `bodyguard`, which is the concept being questioned. The `:ARG1-of` relation indicates that this bodyguard concept is the result (`ARG1`) of some cause (`cause-01`). The agent of this cause (`ARG0` of `cause-01`) is marked as `amr-unknown`, which is how AMR represents a \"why\" question when the caues is not stated.",
        breakdown: [
            { id: 1, indentation: 0, amr: '(b / bodyguard', sentence: 'The bodyguard' },
            { id: 2, indentation: 1, amr: ':ARG1-of (c / cause-01', sentence: 'The bodyguard is caused by' },
            { id: 3, indentation: 2, amr: ':ARG0 (a / amr-unknown)))', sentence: 'Why the bodyguards?' }
        ],
        source: "Source: ::id wb.eng_0009.13 (amr-release-3.0-amrs-wb.txt)",
    },
    { 
        order: 8, 
        sentence: "The only thing that surprises me is how rapidly this is happening.", 
        goldAMR: `(s / surprise-01
        :ARG0 (r / rapid
            :manner-of (t / this)
            :mod (o / only))
        :ARG1 (i / i))`, 
        explanation: "The focus of the AMR is `surprise-01` (\"surprises\"). The cause of the surprise (`ARG0`) is the concept `rapid`, which describes the manner in which `this` is happening (\"how rapidly this is happening\"). The modified concept `only` is also attached to `rapid` because the rapidity is the only thing causing surprise. The person who is surprised (`ARG1`) is `i` (\"me\").",
        breakdown: [
            { id: 1, indentation: 0, amr: '(s / surprise-01', sentence: 'To surprise' },
            { id: 2, indentation: 1, amr: ':ARG0 (r / rapid', sentence: 'The thing that surprises is rapid' },
            { id: 3, indentation: 2, amr: ':manner-of (t / this)', sentence: 'The thing that surprises is how rapid this is' },
            { id: 4, indentation: 2, amr: ':mod (o / only))', sentence: 'The only thing that surprises is how rapid this is' },
            { id: 5, indentation: 1, amr: ':ARG1 (  i / i))', sentence: 'The only thing that surprises me is how rapid this is' }
        ], 
        source: "Source: ::id wb.eng_0003.18 (amr-release-3.0-amrs-test-consensus.txt)",
    },
    { 
        order: 9, 
        sentence: "Come on folks!!", 
        goldAMR: `(c / come-on-25
        :ARG1 (f / folk)
        :mode imperative)`, 
        explanation: "The focus of the AMR is the phrasal verb `come-on-25`, which is a command or request as shown by `:mode imperative` (\"Come on\"). The `:ARG1` relation indicates that the command is addressed to `folk` (\"folks\").",
        breakdown: [
            { id: 1, indentation: 0, amr: '(c / come-on-25', sentence: 'To come on' },
            { id: 2, indentation: 1, amr: ':ARG1 (f / folk)', sentence: 'Come on folk' },
            { id: 3, indentation: 1, amr: ':mode imperative)', sentence: 'Come on folks!' }
        ],
        source: "Source: ::id wb.eng_0003.54 (amr-release-3.0-amrs-test-consensus.txt)",
    },
    { 
        order: 10, 
        sentence: "They still lack experience in international competitions.", 
        goldAMR: `(l / lack-01
        :ARG0 (t / they)
        :ARG1 (e / experience-01
            :ARG0 t
            :ARG1 (c / compete-01
                :mod (i / international)))
        :time (s / still))`, 
        explanation: "The focus of the AMR is `lack-01` (\"lack\"). The agent (`ARG0`) is `they`. The thing that is lacking (`ARG1`) is `experience-01`, which has an agent (`ARG0`) of `they` and a modifier (`:ARG1`) indicating that this experience is related to `compete-01` (\"competitions\") with a modifier of `international`. The time of the action is marked by `still`.",
        breakdown: [ 
            { id: 1, indentation: 0, amr: '(l / lack-01', sentence: 'To lack' },
            { id: 2, indentation: 1, amr: ':ARG0 (t / they)', sentence: 'They lack' },
            { id: 3, indentation: 1, amr: ':ARG1 (e / experience-01', sentence: 'They lack experience' },
            { id: 4, indentation: 2, amr: ':ARG0 t  ', sentence: 'They still lack experience' },
            { id: 5, indentation: 2, amr: ':ARG1 (c / compete-01', sentence: 'They still lack experience in competitions' },   
            { id: 6, indentation: 3, amr: ':mod (i / international))', sentence: 'They still lack experience in international competitions' },
            { id: 7, indentation: 1, amr: ':time (s / still))', sentence: 'They still lack experience in international competitions' }
        ],
    },
    { 
        order: 11, 
        sentence: "To help the survivors of the Gulf.", 
        goldAMR: `(h / help-01
        :ARG1 (p / person
            :ARG0-of (s / survive-01)
            :location (c / country-region :wiki "Gulf_Coast_of_the_United_States" :name (n / name :op1 "Gulf"))))`, 
            explanation: "The focus of the AMR is `help-01` (\"to help\"). The thing being helped (`ARG1`) is a person (`person`) who has survived (`ARG0-of survive-01`). The location of these survivors is specified as a country-region, which is the Gulf Coast of the United States, with a name modifier `Gulf`.",
        breakdown: [
            { id: 1, indentation: 0, amr: '(h / help-01', sentence: 'To help' },
            { id: 2, indentation: 1, amr: ':ARG1 (p / person', sentence: 'To help a person' },
            { id: 3, indentation: 2, amr: ':ARG0-of (s / survive-01)', sentence: 'To help a person who survived' },
            { id: 4, indentation: 2, amr: ':location (c / country-region', sentence: 'To help a person who survived in the Gulf' },
            { id: 5, indentation: 3, amr: ':wiki "Gulf_Coast_of_the_United_States"', sentence: 'To help a person who survived in the Gulf Coast of the United States' },
            { id: 6, indentation: 3, amr: ':name (n / name :op1 "Gulf"))))', sentence: 'To help the survivors of the Gulf' }
        ],
        },
    { 
        order: 12, 
        sentence: "The policy is a matter of national sovereignty and security.", 
        goldAMR: `(m / matter
        :topic (a / and
            :op1 (s / sovereignty
                :mod (n / nation))
            :op2 (s2 / security
                :mod n))
        :domain (p / policy-01))`, 
        explanation: "The focus of the AMR is `matter`, which is a topic. The topic is a conjunction (`and`) that connects two concepts: `sovereignty` (which is modified by `nation`, indicating national sovereignty) and `security` (which is also modified by `nation`). The domain of this matter is `policy-01` (\"policy\").",
        breakdown: [
            { id: 1, indentation: 0, amr: '(m / matter', sentence: 'The matter' },
            { id: 2, indentation: 1, amr: ':topic (a / and', sentence: 'The matter is a topic of' },
            { id: 3, indentation: 2, amr: ':op1 (s / sovereignty', sentence: 'The matter is a topic of sovereignty' },
            { id: 4, indentation: 3, amr: ':mod (n / nation)', sentence: 'The matter is a topic of national sovereignty' },
            { id: 5, indentation: 2, amr: ':op2 (s2 / security', sentence: 'The matter is a topic of security' },
            { id: 6, indentation: 3, amr: ':mod n))', sentence: 'The matter is a topic of national security' },
            { id: 7, indentation: 1, amr: ':domain (p / policy-01))', sentence: 'The policy is a matter of national sovereignty and security' }
        ], 
    },
    { 
        order: 13, 
        sentence: "a group of people of nine professions", 
        goldAMR: `(g / group
        :consist-of (p / person
            :ARG0-of (h / have-org-role-91
                  :ARG2 (p2 / profession :quant 9))))`, 
        explanation: "The focus of the AMR is `group`, which consists of people (`person`). The people have an organizational role (`have-org-role-91`) that is associated with a profession (`profession`) quantified by 9 (\"nine professions\"). The `:consist-of` relation indicates that the group is made up of these people.",
        breakdown: [
            { id: 1, indentation: 0, amr: '(g / group', sentence: 'A group' },
            { id: 2, indentation: 1, amr: ':consist-of (p / person', sentence: 'A group consists of people' },
            { id: 3, indentation: 2, amr: ':ARG0-of (h / have-org-role-91', sentence: 'A group consists of people who have an organizational role' },
            { id: 4, indentation: 3, amr: ':ARG2 (p2 / profession :quant 9)))', sentence: 'A group consists of people of nine professions' }
        ],
    },
    { 
        order: 14, 
        sentence: "The Japanese delegation will fly to Beijing on the 2nd.", 
        goldAMR: `(f / fly-01
        :ARG1 (d2 / delegation
            :mod (c3 / country :wiki "Japan"
                :name (n / name :op1 "Japan")))
        :destination (c4 / city :wiki "Beijing"
            :name (n2 / name :op1 "Beijing"))
        :time (d3 / date-entity :day 2))
`, 
        explanation: "The focus of the AMR is `fly-01` (\"fly\"). The agent (`ARG1`) is a delegation (`delegation`) that is modified by `country` (Japan) and has a name (`name`) of `Japan`. The destination of the flight (`destination`) is a city (`city`) which is Beijing, also with a name modifier. The time of the flight is specified as a date entity with a day of 2.",
        breakdown: [
            { id: 1, indentation: 0, amr: '(f / fly-01', sentence: 'To fly' },
            { id: 2, indentation: 1, amr: ':ARG1 (d2 / delegation', sentence: 'The delegation that will fly' },
            { id: 3, indentation: 2, amr: ':mod (c3 / country', sentence: 'The delegation that will fly from Japan' },
            { id: 4, indentation: 3, amr: ':wiki "Japan"', sentence: 'The delegation that will fly from Japan' },
            { id: 5, indentation: 3, amr: ':name (n / name :op1 "Japan"))', sentence: 'The Japanese delegation that will fly' },
            { id: 6, indentation: 1, amr: ':destination (c4 / city', sentence: 'The Japanese delegation will fly to a city' },
            { id: 7, indentation: 2, amr: ':wiki "Beijing"', sentence: 'The Japanese delegation will fly to Beijing' },
            { id: 8, indentation: 2, amr: ':name (n2 / name :op1 "Beijing"))', sentence: 'The Japanese delegation will fly to Beijing' },
            { id: 9, indentation: 1, amr: ':time (d3 / date-entity :day 2))', sentence: 'The Japanese delegation will fly to Beijing on the second day.' }
        ],
    },
    { 
        order: 15, 
        sentence: "Where's Homer Simpson when you need him?", 
        goldAMR: `(b / be-located-at-91
        :ARG1 (p / person :wiki "Homer_Simpson"
            :name (h / name :op1 "Homer" :op2 "Simpson"))
        :ARG2 (a / amr-unknown)
        :time (n / need-01
            :ARG0 (y / you)
            :ARG1 p))`, 
        explanation: "The focus of the AMR is `be-located-at-91` (\"Where's\"). The person being referred to (`ARG1`) is `Homer Simpson`, which is represented as a `person` with a `wiki` link and a name consisting of two parts (`name`). The `ARG2` is marked as `amr-unknown`, indicating that the location is not specified. The time of the action is given by `need-01`, where the agent (`ARG0`) is `you` and the thing needed (`ARG1`) is `Homer Simpson`.",
        breakdown: [
            { id: 1, indentation: 0, amr: '(b / be-located-at-91', sentence: 'Where is' },
            { id: 2, indentation: 1, amr: ':ARG1 (p / person', sentence: 'Where is a person' },
            { id: 3, indentation: 2, amr: ':wiki "Homer_Simpson"', sentence: 'Where is Homer Simpson' },
            { id: 4, indentation: 2, amr: ':name (h / name :op1 "Homer" :op2 "Simpson"))', sentence: 'Where is Homer Simpson?' },
            { id: 5, indentation: 1, amr: ':ARG2 (a / amr-unknown)', sentence: 'Where is Homer Simpson when' },
            { id: 6, indentation: 1, amr: ':time (n / need-01', sentence: 'Where is Homer Simpson when you need' },
            { id: 7, indentation: 2, amr: ':ARG0 (y / you)', sentence: 'Where is Homer Simpson when you need' },
            { id: 8, indentation: 2, amr: ':ARG1 p))', sentence: 'Where is Homer Simpson when you need him?' }
        ],
    },
    { 
        order: 16, 
        sentence: "This theory can also be applied to cooking.", 
        goldAMR: `(p / possible-01
        :ARG1 (a / apply-02
            :ARG1 (t / theory
               :mod (t2 / this))
            :ARG2 (c / cook-01)
            :mod (a2 / also)))`, 
        explanation: "The focus of the AMR is `possible-01` (\"can\"). The action that is possible (`ARG1`) is `apply-02` (\"apply\"). The thing being applied (`ARG1`) is a theory (`theory`), which is modified by `this` (\"this theory\"). The action of applying has an additional argument (`ARG2`) indicating that it can be applied to cooking. The modifier `also` indicates that this application is in addition to something else.",
        breakdown: [
            { id: 1, indentation: 0, amr: '(p / possible-01', sentence: 'It is possible' },
            { id: 2, indentation: 1, amr: ':ARG1 (a / apply-02', sentence: 'The thing that is possible is to apply' },
            { id: 3, indentation: 2, amr: ':ARG1 (t / theory', sentence: 'The thing that is possible is to apply theory' },
            { id: 4, indentation: 3, amr: ':mod (t2 / this))', sentence: 'The thing that is possible is to apply this theory' },
            { id: 5, indentation: 2, amr: ':ARG2 (c / cook-01)', sentence: 'The thing that is possible is to apply this theory to cooking' },
            { id: 6, indentation: 2, amr: ':mod (a2 / also)))', sentence: 'The thing that is possible is to also apply this theory to cooking' },
        ],
    },
    { 
        order: 17, 
        sentence: "Why is it so hard to understand?", 
        goldAMR: `(h / hard-02
        :ARG1 (u / understand-01
            :ARG1 (i / it))
        :ARG1-of (c / cause-01
            :ARG0 (a / amr-unknown))
        :degree (s / so))`, 
        explanation: "The focus of the AMR is `hard-02` (\"hard\"). The thing that is hard to do (`ARG1`) is `understand-01`, which has an argument (`ARG1`) of `it`. The cause of this difficulty (`ARG1-of cause-01`) is marked as `amr-unknown`, indicating that the reason is not specified. The degree of difficulty is specified by `so` (\"so hard\").",
        breakdown: [
            { id: 1, indentation: 0, amr: '(h / hard-02', sentence: 'To be hard' },
            { id: 2, indentation: 1, amr: ':ARG1 (u / understand-01', sentence: 'To be hard to understand' },
            { id: 3, indentation: 2, amr: ':ARG1 (i / it))', sentence: 'To be hard to understand it' },
            { id: 4, indentation: 1, amr: ':ARG1-of (c / cause-01', sentence: 'To be hard to understand is caused by' },
            { id: 5, indentation: 2, amr: ':ARG0 (a / amr-unknown))', sentence: 'To be hard to understand is caused by an unknown reason' },
            { id: 6, indentation: 1, amr: ':degree (s / so))', sentence: 'To be so hard to understand' }
        ],
    },
    { 
        order: 18, 
        sentence: "Break your work into manageable chunks.", 
        goldAMR: `(b / break-01 :mode imperative
        :ARG0 (y / you)
        :ARG1 (t / thing
            :ARG1-of (w / work-01
                :ARG0 y))
        :ARG3 (c / chunk
            :ARG1-of (m / manage-01
                :ARG0 y
                :ARG1-of (p / possible-01))))`, 
        explanation: "The focus of the AMR is `break-01` (\"break\"). The command is in the imperative mood (`:mode imperative`). The agent (`ARG0`) is `you`. The thing being broken (`ARG1`) is a `thing`, which is derived from `work-01` (\"work\") that has an agent of `you`. The chunks into which the work is broken are represented by `chunk`, which has an action associated with it (`manage-01`) that is possible (`possible-01`).",
        breakdown: [
            { id: 1, indentation: 0, amr: '(b / break-01', sentence: 'To break' },
            { id: 2, indentation: 1, amr: ':mode imperative', sentence: 'Break' },
            { id: 3, indentation: 1, amr: ':ARG0 (y / you)', sentence: 'Break your' },
            { id: 4, indentation: 1, amr: ':ARG1 (t / thing', sentence: 'Break your work into' },
            { id: 5, indentation: 2, amr: ':ARG1-of (w / work-01', sentence: 'Break your work into manageable chunks' },
            { id: 6, indentation: 3, amr: ':ARG0 y))', sentence: 'Break your work into manageable chunks' },
            { id: 7, indentation: 1, amr: ':ARG3 (c / chunk', sentence: 'Break your work into chunks' },
            { id: 8, indentation: 2, amr: ':ARG1-of (m / manage-01', sentence: 'Break your work into manageable chunks' },
            { id: 9, indentation: 3, amr: ':ARG0 y', sentence: 'You manage the chunks' },
            { id: 10, indentation: 3, amr: ':ARG1-of (p / possible-01)))', sentence: 'You can manage the chunks' }
        ],
    },
    { 
        order: 19, 
        sentence: "The acquisition is expected to be completed before April.", 
        goldAMR: `(e / expect-01
        :ARG1 (c / complete-01
            :ARG1 (a / acquire-01)
            :time (b / before
                :op1 (d / date-entity :month 4))))`, 
        explanation: "The focus of the AMR is `expect-01` (\"expected\"). The thing being expected (`ARG1`) is `complete-01`, which has an action of `acquire-01` (\"acquisition\"). The time of completion is specified by `before`, which has a date entity with a month of 4 (April).",
        breakdown: [
            { id: 1, indentation: 0, amr: '(e / expect-01', sentence: 'To expect' },
            { id: 2, indentation: 1, amr: ':ARG1 (c / complete-01', sentence: 'To expect to complete' },
            { id: 3, indentation: 2, amr: ':ARG1 (a / acquire-01))', sentence: 'To expect to complete the acquisition' },
            { id: 4, indentation: 1, amr: ':time (b / before', sentence: 'To expect to complete before' },
            { id: 5, indentation: 2, amr: ':op1 (d / date-entity :month 4)))', sentence: 'To expect to complete before April' }
        ],
    },
    { 
        order: 20, 
        sentence: "Lots of Austin relief efforts and fundraising events listed here.", 
        goldAMR: `(l / list-01
        :ARG1 (a / and
            :op1 (e / effort-01
                :ARG1 (r / relieve-01)
                :quant (l2 / lot)
                :location (c / city :wiki "Austin,_Texas" :name (n / name :op1 "Austin")))
            :op2 (e2 / event
                :purpose (f / fundraise-04)))
        :location (h / here))`, 
        explanation: "The focus of the AMR is `list-01` (\"listed\"). The thing being listed (`ARG1`) is a conjunction (`and`) that connects two concepts: `effort-01` (\"relief efforts\") and `event` (\"fundraising events\"). The relief efforts have an action of `relieve-01`, are quantified by `lot`, and are located in the city of Austin, which has a wiki link and a name modifier. The fundraising events have a purpose of `fundraise-04`. The location of the listing is specified as `here`.",
        breakdown: [
            { id: 1, indentation: 0, amr: '(l / list-01', sentence: 'To list' },
            { id: 2, indentation: 1, amr: ':ARG1 (a / and', sentence: 'Lots of' },
            { id: 3, indentation: 2, amr: ':op1 (e / effort-01', sentence: 'Lots of relief efforts' },
            { id: 4, indentation: 3, amr: ':ARG1 (r / relieve-01)', sentence: 'Lots of Austin relief efforts' },
            { id: 5, indentation: 4, amr: ':quant (l2 / lot))', sentence: 'Lots of Austin relief efforts' },
            { id: 6, indentation: 3, amr: ':location (c / city', sentence: 'Lots of Austin relief efforts in the city' },
            { id: 7, indentation: 4, amr: ':wiki "Austin,_Texas"', sentence: 'Lots of Austin relief efforts in Austin' },
            { id: 8, indentation: 4, amr: ':name (n / name :op1 "Austin"))', sentence: 'Lots of Austin relief efforts listed here' },
            { id: 9, indentation: 2, amr: ':op2 (e2 / event', sentence: 'and fundraising events' },
            { id: 10, indentation: 3, amr: ':purpose (f / fundraise-04))', sentence: 'and fundraising events listed here' },
            { id: 11, indentation: 1, amr: ':location (h / here))', sentence: 'Listed here.' }
        ],
    },
    { 
        order: 21, 
        sentence: "During a time of prosperity and happiness, such a big earthquake suddenly struck.", 
        goldAMR: `(s / strike-01
        :ARG2 (e / earthquake
                :mod (b / big
                    :mod (s2 / such)))
        :time (t / time
                :op1 (p / prosper-01)
                :op2 (h / happiness))
        :manner (s3 / sudden))`, 
        explanation: "The focus of the AMR is `strike-01` (\"struck\"). The thing that struck (`ARG2`) is an `earthquake`, which is modified by `big` and `such`. The time of the action is specified by a `time` entity that has two parts: `prosper-01` (\"prosperity\") and `happiness`. The manner in which the earthquake struck is described by `sudden`.",
        breakdown: [
            { id: 1, indentation: 0, amr: '(s / strike-01', sentence: 'To strike' },
            { id: 2, indentation: 1, amr: ':ARG2 (e / earthquake', sentence: 'An earthquake struck' },
            { id: 3, indentation: 2, amr: ':mod (b / big', sentence: 'A big earthquake struck' },
            { id: 4, indentation: 3, amr: ':mod (s2 / such))', sentence: 'Such a big earthquake struck' },
            { id: 5, indentation: 1, amr: ':time (t / time', sentence: 'During a time of' },
            { id: 6, indentation: 2, amr: ':op1 (p / prosper-01)', sentence: 'During a time of prosperity' },
            { id: 7, indentation: 2, amr: ':op2 (h / happiness))', sentence: 'During a time of prosperity and happiness' },
            { id: 8, indentation: 1, amr: ':manner (s3 / sudden))', sentence: 'Suddenly struck.' }
        ],
    },
    { 
        order: 22, 
        sentence: "He can't seem to help himself from apologizing for anything and everything.", 
        goldAMR: `(p / possible-01 :polarity -
      :ARG1 (s / seem-01
            :ARG1 (h / help-02
                  :ARG0 (h2 / he)
                  :ARG1 (a / apologize-01
                        :ARG0 h2
                        :ARG1 (a2 / and
                              :op1 (a3 / anything)
                              :op2 (e / everything))))))`, 
        explanation: "The focus of the AMR is `possible-01` (\"can\"). The negation is indicated by `:polarity -`. The action that seems possible (`ARG1`) is `seem-01`, which has an argument (`ARG1`) of `help-02` (\"help\"). The agent of this help (`ARG0`) is `he`. The thing being helped (`ARG1`) is an apology (`apologize-01`), which has an agent of `he` and is connected to two concepts by `and`: `anything` and `everything`.",
        breakdown: [
            { id: 1, indentation: 0, amr: '(p / possible-01', sentence: 'It is not possible' },
            { id: 2, indentation: 1, amr: ':polarity -', sentence: 'He can\'t' },
            { id: 3, indentation: 1, amr: ':ARG1 (s / seem-01', sentence: 'He seems to help himself' },
            { id: 4, indentation: 2, amr: ':ARG1 (h / help-02', sentence: 'He seems to help himself' },
            { id: 5, indentation: 3, amr: ':ARG0 (h2 / he))', sentence: 'He seems to help himself from apologizing' },
            { id: 6, indentation: 2, amr: ':ARG1 (a / apologize-01', sentence: 'He seems to help himself from apologizing for' },
            { id: 7, indentation: 3, amr: ':ARG0 h2', sentence: 'He apologizes for' },
            { id: 8, indentation: 3, amr: ':ARG1 (a2 / and', sentence: 'He apologizes for anything and everything' },
            { id: 9, indentation: 4, amr: ':op1 (a3 / anything)', sentence: 'He apologizes for anything' },
            { id: 10, indentation: 4, amr: ':op2 (e / everything)))', sentence: 'He apologizes for anything and everything.' }
        ],
    },
    { 
        order: 23, 
        sentence: "In recently years, Finland has been keeping an obvious trade surplus in this region.", 
        goldAMR: `(k / keep-01
      :ARG0 (c / country :wiki "Finland"
            :name (n / name :op1 "Finland"))
      :ARG1 (s / surplus
            :mod (t / trade-01)
            :ARG1-of (o / obvious-01))
      :time (y / year
            :mod (r / recent))
      :location (r2 / region
            :mod (t2 / this)))`, 
        explanation: "The focus of the AMR is `keep-01` (\"keeping\"). The agent (`ARG0`) is a country (`country`) which is Finland, represented with a wiki link and a name modifier. The thing being kept (`ARG1`) is a surplus (`surplus`), which is modified by `trade-01` (\"trade\") and has an action of `obvious-01`. The time of the action is specified as `year`, which is modified by `recent`. The location of the surplus is specified as a region (`region`), which is modified by `this`.",
        breakdown: [
            { id: 1, indentation: 0, amr: '(k / keep-01', sentence: 'To keep' },
            { id: 2, indentation: 1, amr: ':ARG0 (c / country', sentence: 'Finland has been keeping' },
            { id: 3, indentation: 2, amr: ':wiki "Finland"', sentence: 'Finland has been keeping' },
            { id: 4, indentation: 2, amr: ':name (n / name :op1 "Finland"))', sentence: 'Finland has been keeping an obvious trade surplus in this region' },
            { id: 5, indentation: 1, amr: ':ARG1 (s / surplus', sentence: 'Finland has been keeping a surplus' },
            { id: 6, indentation: 2, amr: ':mod (t / trade-01)', sentence: 'Finland has been keeping a trade surplus' },
            { id: 7, indentation: 2, amr: ':ARG1-of (o / obvious-01))', sentence: 'Finland has been keeping an obvious trade surplus' },
            { id: 8, indentation: 1, amr: ':time (y / year', sentence: 'In recent years' },
            { id: 9, indentation: 2, amr: ':mod (r / recent))', sentence: 'In recent years, Finland has been keeping' },
            { id: 10, indentation: 1, amr: ':location (r2 / region', sentence: 'In this region' },
            { id: 11, indentation: 2, amr: ':mod (t2 / this)))', sentence: 'In this region.' }
        ],
    },
    { 
        order: 24, 
        sentence: "Tolerance is certainly not fear, and sincerity does not have to be cowardice.", 
        goldAMR: `(a / and
      :op1 (f / fear :polarity -
            :manner (c / certain)
            :domain (t / tolerance))
      :op2 (o / obligate-01 :polarity -
            :ARG2 (c2 / cowardice
                  :domain (s / sincerity))))`, 
        explanation: "The focus of the AMR is `and`, which connects two concepts. The first concept (`op1`) is `fear`, which has a negative polarity (`:polarity -`), is modified by `certain` (indicating certainty), and has a domain of `tolerance`. The second concept (`op2`) is `obligate-01`, which also has a negative polarity and has an argument (`ARG2`) of `cowardice`, with a domain of `sincerity`.",
        breakdown: [
            { id: 1, indentation: 0, amr: '(a / and ', sentence: 'and' },
            { id: 2, indentation: 1, amr: ':op1 (f / fear', sentence: 'Fear' },
            { id: 3, indentation: 2, amr: ':polarity -', sentence: 'Fear is not' },
            { id: 4, indentation: 2, amr: ':manner (c / certain)', sentence: 'Fear is certainly not' },
            { id: 5, indentation: 2, amr: ':domain (t / tolerance))', sentence: 'Fear is not tolerance' },
            { id: 6, indentation: 1, amr: ':op2 (o / obligate-01', sentence: 'Sincerity does not have to be cowardice' },
            { id: 7, indentation: 2, amr: ':polarity -', sentence: 'Sincerity does not have to be' },
            { id: 8, indentation: 2, amr: ':ARG2 (c2 / cowardice', sentence: 'Sincerity does not have to be cowardice' },
            { id: 9, indentation: 3, amr: ':domain (s / sincerity)))', sentence: 'Sincerity does not have to be cowardice.' }
        ],
    },
    { 
        order: 25, 
        sentence: "He felt that, there were more new competitors from our country participating in this competition.", 
        goldAMR: `(f / feel-02
      :ARG0 (h / he)
      :ARG1 (p / person
            :quant (m / more)
            :ARG0-of (c / compete-01)
            :ARG1-of (n / new-01)
            :source (c2 / country
                  :poss (w / we))
            :ARG0-of (p2 / participate-01
                  :ARG1 (c3 / compete-01
                        :mod (t / this)))))`, 
        explanation: "The focus of the AMR is `feel-02` (\"felt\"). The agent (`ARG0`) is `he`. The thing felt (`ARG1`) is a person (`person`) who is quantified by `more` (indicating more than one). This person has an action of `compete-01` (\"compete\") with an argument of `new-01` (\"new competitors\"). The source of these competitors is a country (`country`) that is possessed by `we`. The action of participating in the competition is represented by `participate-01`, which has an argument of `compete-01` modified by `this`.",
        breakdown: [
            { id: 1, indentation: 0, amr: '(f / feel-02', sentence: 'He felt' },
            { id: 2, indentation: 1, amr: ':ARG0 (h / he)', sentence: 'He felt that' },
            { id: 3, indentation: 1, amr: ':ARG1 (p / person', sentence: 'He felt that there were more competitors' },
            { id: 4, indentation: 2, amr: ':quant (m / more)', sentence: 'He felt that there were more new competitors' },
            { id: 5, indentation: 2, amr: ':ARG0-of (c / compete-01', sentence: 'He felt that there were more new competitors competing' },
            { id: 6, indentation: 3, amr: ':ARG1-of (n / new-01))', sentence: 'He felt that there were more new competitors from our country' },
            { id: 7, indentation: 2, amr: ':source (c2 / country', sentence: 'He felt that there were more new competitors from our country' },
            { id: 8, indentation: 3, amr: ':poss (w / we))', sentence: 'He felt that there were more new competitors from our country participating in this competition' },
            { id: 9, indentation: 1, amr: ':ARG0-of (p2 / participate-01', sentence: 'He felt that there were more new competitors participating in this competition' },
            { id: 10, indentation: 2, amr: ':ARG1 (c3 / compete-01', sentence: 'in this competition' },
            { id: 11, indentation: 3, amr: ':mod (t / this)))', sentence: 'in this competition.' }
        ],
    }
  ];
  