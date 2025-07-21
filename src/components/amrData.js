
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
        explanation: "The focus of the AMR is `problem`, which is modified by the concept `old` (\"old problem\"). The `problem` is described as being the same (`:ARG1` of `same-01`) as the concept `it` (`:ARG2`). A non-inverted structure would have a sentence such as \"the old problem is the same as it\". We use the inverted structure here because the sentence focuses on the problem, rather than how similar something is.",
        breakdown: [
            { id: 1, indentation: 0, amr: '(p / problem', sentence: 'The problem' },
            { id: 2, indentation: 1, amr: ':ARG1-of (s / same-01', sentence: 'The problem is the same' },
            { id: 3, indentation: 2, amr: ':ARG2 (i / it))', sentence: 'The problem is the same as it' },
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
        explanation: "The focus of the AMR is `chase-01` (\"chase\"). The agent doing the chasing (`:ARG0`) is a combination of smoke and cloud (\"smoke and clouds chase\"). The thing being chased (`:ARG1`) is the concept `wave`. This wave is further described as \"flying\", represented as being the `:ARG1` of the `fly-01` action (\"the flying waves\").",
        breakdown: [
            { id: 1, indentation: 0, amr: '(c / chase-01', sentence: 'To chase' },
            { id: 2, indentation: 1, amr: ':ARG0 (a / and', sentence: 'The thing that chases is and' },
            { id: 3, indentation: 2, amr: ':op1 (s / smoke)', sentence: 'The thing that chases is smoke and' },
            { id: 4, indentation: 2, amr: ':op2 (c2 / cloud))', sentence: 'The thing that chases is smoke and cloud' },
            { id: 5, indentation: 1, amr: ':ARG1 (w / wave', sentence: 'Smoke and cloud chase the wave' },
            { id: 6, indentation: 2, amr: ':ARG1-of (f / fly-01)))', sentence: 'Smoke and cloud chase the wave that flies' }
        ],
        source: "Source: ::id bolt12_6455_6562.19 (amr-release-3.0-amrs-test-bolt.txt)",
    },
    {
        order: 4,
        sentence: "The meeting has been fruitful.",
        goldAMR: `(f / fruitful
        :domain (m / meet-03))`,
        explanation: "The focus of the AMR is the concept `fruitful`, which is a quality. The `:domain` relation, which is an inverse of mod, indicates that this fruitful quality applies to the event `meet-03` (\"the meeting\").",
        breakdown: [
            { id: 1, indentation: 0, amr: '(f / fruitful', sentence: 'Is fruitful' },
            { id: 2, indentation: 1, amr: ':domain (m / meet-03))', sentence: 'Meeting is fruitful' }
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
        explanation: "The focus of the AMR is `desire-01`. The `:polarity` relation marks the negation of `desire-01` (“no desire”). The experiencer of this desire (`:ARG0`) is `i`. The thing desired (`:ARG1`) is the action `live-01`. The agent (`:ARG0`) of `live-01` is also `i`. The action `live-01` is further specified with `:location`, which is a city modified by `any` (\"in any city\").",
        breakdown: [
            { id: 1, indentation: 0, amr: '(d / desire-01', sentence: 'To desire' },
            { id: 2, indentation: 1, amr: ':ARG0 (i / i)', sentence: 'I desire' },
            { id: 3, indentation: 1, amr: ':ARG1 (l / live-01', sentence: 'I desire to live' },
            { id: 4, indentation: 2, amr: ':ARG0 i', sentence: 'I desire to live' },
            { id: 5, indentation: 2, amr: ':location (c / city', sentence: 'I desire to live in a city' },
            { id: 6, indentation: 3, amr: ':mod (a / any)))', sentence: 'I desire to live in any city' },
            { id: 7, indentation: 1, amr: ':polarity -)', sentence: 'I do not desire to live in any city' }
        ],
        source: "Source: ::id wb.eng_0003.87 (amr-release-3.0-amrs-test-consensus.txt)",
    },
    { 
        order: 6, 
        sentence: "Her performance was 303.00 points.", 
        goldAMR: `(p2 / point :quant 303.00
        :domain (p / perform-01
            :ARG0 (s / she)))`, 
        explanation: "The focus of the AMR is the concept `point`. This concept is given a quantity (`:quant`) of 303.00 (\"303.00 points\"). The `:domain` relation indicates that this point is describing the event `perform-01` (\"performance\"). The agent (`:ARG0`) of `perform-01` is `she` (\"her performance\").",        breakdown: [
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
        explanation: "The focus of the AMR is `bodyguard`. The `:ARG1-of` relation indicates that this bodyguard concept is the result (`:ARG1`) of some cause (`cause-01`). The agent of this cause (`:ARG0` of `cause-01`) is marked as `amr-unknown`, which is how AMR represents a \"why\" question when the cause is not stated.",
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
        explanation: "The focus of the AMR is `surprise-01` (\"surprises\"). The cause of the surprise (`:ARG0`) is the concept `rapid`. This `rapid` concept describes how `this` is happening (\"how rapidly this is happening\"). The inverse of the :manner role (`:manner-of`) is used since rapidity is the `:ARG0` of `surprise-01`, rather than `this`. The modified concept `only` is also attached to `rapid` because the rapidity is the only thing causing surprise. The person who is surprised (`:ARG1`) is `i` (\"me\").",
        breakdown: [
            { id: 1, indentation: 0, amr: '(s / surprise-01', sentence: 'To surprise' },
            { id: 2, indentation: 1, amr: ':ARG0 (r / rapid', sentence: 'The thing that surprises is rapid' },
            { id: 3, indentation: 2, amr: ':manner-of (t / this)', sentence: 'The thing that surprises is how rapid this is' },
            { id: 4, indentation: 2, amr: ':mod (o / only))', sentence: 'The only thing that surprises is how rapid this is' },
            { id: 5, indentation: 1, amr: ':ARG1 (i / i))', sentence: 'The only thing that surprises me is how rapid this is' }
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
        explanation: "The focus of the AMR is `lack-01` (\"lack\"). The entity that lacks something (`:ARG0`) is `they`. The thing that is lacked (`:ARG1`) is the concept `experience-01` (\"lack experience\"). The one having the experience (`:ARG0` of `experience-01`) is also `they`, so the concept label `t` is reused. The thing experienced (`:ARG1`) is `compete-01` (\"experience in competitions\"), which is further modified by `international` (\"international competitions\"). The `:time` relation is marked by `still` (\"still lack\").",
        breakdown: [ 
            { id: 1, indentation: 0, amr: '(l / lack-01', sentence: 'To lack' },
            { id: 2, indentation: 1, amr: ':ARG0 (t / they)', sentence: 'They lack' },
            { id: 3, indentation: 1, amr: ':ARG1 (e / experience-01', sentence: 'They lack experience' },
            { id: 4, indentation: 2, amr: ':ARG0 t', sentence: 'They lack experience (they are experiencing)' },
            { id: 5, indentation: 2, amr: ':ARG1 (c / compete-01', sentence: 'They lack experience in competitions' },   
            { id: 6, indentation: 3, amr: ':mod (i / international)))', sentence: 'They lack experience in international competitions' },
            { id: 7, indentation: 1, amr: ':time (s / still))', sentence: 'They still lack experience in international competitions' }
        ],
        source: "Source: ::id nw.chtb_0324.13 (amr-release-3.0-amrs-test-xinhua.txt)"
    },
    { 
        order: 11, 
        sentence: "To help the survivors of the Gulf.", 
        goldAMR: `(h / help-01
        :ARG1 (p / person
            :ARG0-of (s / survive-01)
            :location (c / country-region :wiki "Gulf_Coast_of_the_United_States" :name (n / name :op1 "Gulf"))))`, 
        explanation: "The focus of the AMR is `help-01` (\"to help\"). The thing being helped (`:ARG1`) is a person (`person`) who has survived (`:ARG0-of survive-01`) (\"survivors\"). The location of these survivors is specified as a country-region, which is the Gulf Coast of the United States, with a name modifier `Gulf`.",
        breakdown: [
            { id: 1, indentation: 0, amr: '(h / help-01', sentence: 'To help' },
            { id: 2, indentation: 1, amr: ':ARG1 (p / person', sentence: 'To help a person' },
            { id: 3, indentation: 2, amr: ':ARG0-of (s / survive-01)', sentence: 'To help survivors' },
            { id: 4, indentation: 2, amr: ':location (c / country-region', sentence: 'To help survivors in' },
            { id: 5, indentation: 3, amr: ':wiki "Gulf_Coast_of_the_United_States"', sentence: 'To help survivors in the Gulf Coast of the United States' },
            { id: 6, indentation: 3, amr: ':name (n / name :op1 "Gulf"))))', sentence: 'To help survivors in the Gulf' }
        ],
        source: "Source: ::id ENG_DF_000170_20050903_C00020J0V_0001.2 (amr-release-3.0-amrs-test-lorelei.txt)"
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
        explanation: "The focus of the AMR is `matter`. The `:topic` of the matter is a conjunction (`and`) that connects two concepts: `sovereignty` (which is modified by `nation` (\"national sovereignty\")) and `security` (which is also modified by `nation`). The domain of this matter is `policy-01` (\"policy\").",
        breakdown: [
            { id: 1, indentation: 0, amr: '(m / matter', sentence: 'The matter' },
            { id: 2, indentation: 1, amr: ':topic (a / and', sentence: 'The matter is a topic of' },
            { id: 3, indentation: 2, amr: ':op1 (s / sovereignty', sentence: 'The matter is a topic of sovereignty' },
            { id: 4, indentation: 3, amr: ':mod (n / nation))', sentence: 'The matter is a topic of national sovereignty' },
            { id: 5, indentation: 2, amr: ':op2 (s2 / security', sentence: 'The matter is a topic of national sovereignty and security' },
            { id: 6, indentation: 3, amr: ':mod n))', sentence: 'The matter is a topic of national sovereignty and national security' },
            { id: 7, indentation: 1, amr: ':domain (p / policy-01))', sentence: 'The policy is a matter of national sovereignty and national security' }
        ], 
        source: "Source: ::id PROXY_NYT_ENG_20040724_0084.28 (amr-release-3.0-amrs-test-proxy.txt)"
    },
    { 
        order: 13, 
        sentence: "a group of people of nine professions", 
        goldAMR: `(g / group
        :consist-of (p / person
            :ARG0-of (h / have-org-role-91
                  :ARG2 (p2 / profession :quant 9))))`, 
        explanation: "The focus of the AMR is `group`, which consists of people (`person`). The people are defined by the inverted role `:ARG-of`. The people have an organizational role (`have-org-role-91`). The role they have (`:ARG2`) is a profession quantified by 9 (\"nine professions\").",
        breakdown: [
            { id: 1, indentation: 0, amr: '(g / group', sentence: 'A group' },
            { id: 2, indentation: 1, amr: ':consist-of (p / person', sentence: 'A group consists of people' },
            { id: 3, indentation: 2, amr: ':ARG0-of (h / have-org-role-91', sentence: 'A group consists of people who have an organizational role' },
            { id: 4, indentation: 3, amr: ':ARG2 (p2 / profession :quant 9))))', sentence: 'A group consists of people of nine professions' }
        ],
        source: "Source: ::id bolt12_91455_5317.1 (amr-release-3.0-amrs-test-bolt.txt)"
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
        :time (d3 / date-entity :day 2))`, 
        explanation: "The focus of the AMR is `fly-01` (\"fly\"). The thing that flies (`:ARG1`) is a delegation (`delegation`) that is modified by `country` (Japan) and has a name of `Japan` (\"Japanese delegation\"). The `destination` of the flight is a city which is Beijing, also with a `:wiki` page and name modifier. The time of the flight is specified as a date entity with a day of 2 (\"the 2nd\").",
        breakdown: [
            { id: 1, indentation: 0, amr: '(f / fly-01', sentence: 'To fly' },
            { id: 2, indentation: 1, amr: ':ARG1 (d2 / delegation', sentence: 'The delegation flies' },
            { id: 3, indentation: 2, amr: ':mod (c3 / country :wiki "Japan"', sentence: 'The delegation from a country flies' },
            { id: 4, indentation: 3, amr: ':name (n / name :op1 "Japan")))', sentence: 'The Japanese delegation flies' },
            { id: 5, indentation: 1, amr: ':destination (c4 / city :wiki "Beijing"', sentence: 'The Japanese delegation flies to a city' },
            { id: 6, indentation: 2, amr: ':name (n2 / name :op1 "Beijing"))', sentence: 'The Japanese delegation flies to Beijing' },
            { id: 7, indentation: 1, amr: ':time (d3 / date-entity :day 2))', sentence: 'The Japanese delegation flies to Beijing on the second day.' }
        ],
        source: "Source: ::id nw.chtb_0318.12 (amr-release-3.0-amrs-test-xinhua.txt)"
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
        explanation: "The focus of the AMR is `be-located-at-91` as the sentence questions the location of something (\"Where's\"). The one whose location is questioned (`:ARG1`) is `person` identified as `Homer Simpson` with a `:wiki` link (\"Where's Homer Simpson\"). The location itself (`:ARG2`) is marked as `amr-unknown`, indicating that the location is not specified. The time of the query is given by `need-01`, where `you` (`:ARG0`) is the one needing the previously mentioned person, `p`, (`:ARG1`) (\"when you need him\").",        
        breakdown: [
            { id: 1, indentation: 0, amr: '(b / be-located-at-91', sentence: 'Something is located' },
            { id: 2, indentation: 1, amr: ':ARG1 (p / person :wiki "Homer_Simpson"', sentence: 'Person is located' },
            { id: 3, indentation: 2, amr: ':name (h / name :op1 "Homer" :op2 "Simpson"))', sentence: 'Homer Simpson is located' },
            { id: 4, indentation: 1, amr: ':ARG2 (a / amr-unknown)', sentence: 'Where is Homer Simpson located?' },
            { id: 5, indentation: 1, amr: ':time (n / need-01', sentence: 'Where is Homer Simpson when need?' },
            { id: 6, indentation: 2, amr: ':ARG0 (y / you)', sentence: 'Where is Homer Simpson when you need?' },
            { id: 7, indentation: 2, amr: ':ARG1 p))', sentence: 'Where is Homer Simpson when you need him?' }
        ],
        source: "Source: ::id wb.eng_0003.13 (amr-release-3.0-amrs-test-consensus.txt)"
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
        explanation: "The focus of the AMR is `possible-01` (\"can\"), which is a modal. The thing that is possible (`:ARG1`) is `apply-02` (\"applied\"). The thing being applied (`:ARG1`) is a theory which is modified by `this` (\"this theory\"). The `:ARG2` role of applying represents that it is applied to cooking, modified by `also` (\"also be applied to cooking\").",
        breakdown: [
            { id: 1, indentation: 0, amr: '(p / possible-01', sentence: 'It is possible' },
            { id: 2, indentation: 1, amr: ':ARG1 (a / apply-02', sentence: 'The thing that is possible is to apply' },
            { id: 3, indentation: 2, amr: ':ARG1 (t / theory', sentence: 'The thing that is possible is to apply theory' },
            { id: 4, indentation: 3, amr: ':mod (t2 / this))', sentence: 'The thing that is possible is to apply this theory' },
            { id: 5, indentation: 2, amr: ':ARG2 (c / cook-01)', sentence: 'The thing that is possible is to apply this theory to cooking' },
            { id: 6, indentation: 2, amr: ':mod (a2 / also)))', sentence: 'The thing that is possible is to also apply this theory to cooking' },
        ],
        source: "Source: ::id wb.c2e_0044.8 (amr-release-3.0-amrs-wb.txt)"
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
        explanation: "The focus of the AMR is `hard-02` (\"hard\"). The thing that is hard to do (`:ARG1`) is `understand-01`, which has an argument (`:ARG1`) of `it`. It being hard is described as a result of a cause (`:ARG1-of`), where the cause (`:ARG0`) is `amr-unknown`, representing the \"Why?\" question. The degree of difficulty is specified by `so` (\"so hard\").",
        breakdown: [
            { id: 1, indentation: 0, amr: '(h / hard-02', sentence: 'To be hard' },
            { id: 2, indentation: 1, amr: ':ARG1 (u / understand-01', sentence: 'To be hard to understand' },
            { id: 3, indentation: 2, amr: ':ARG1 (i / it))', sentence: 'To be hard to understand it' },
            { id: 4, indentation: 1, amr: ':ARG1-of (c / cause-01', sentence: 'The difficulty in understanding is caused by' },
            { id: 5, indentation: 2, amr: ':ARG0 (a / amr-unknown))', sentence: 'Why is it hard to understand?' },
            { id: 6, indentation: 1, amr: ':degree (s / so))', sentence: 'Why is it so hard to understand?' }
        ],
        source: "Source: ::id wb.eng_0003.62 (amr-release-3.0-amrs-test-consensus.txt)"
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
        explanation: "The focus of the AMR is `break-01` (\"break\"). The command is in the imperative mood (`:mode imperative`). The agent of the command (`:ARG0`) is `you`. The thing being broken (`:ARG1`) is a `thing`, which is the thing (`:ARG1-of`) that is worked on (`work-01`) by `you`. The end state (`:ARG3`) of the breaking action is `chunk`, which is described as \"manageable\". This is broken down into being the thing (`:ARG1-of`) that is possible to be managed by you (\"manageable chunks\").",
        breakdown: [
            { id: 1, indentation: 0, amr: '(b / break-01', sentence: 'To break' },
            { id: 2, indentation: 1, amr: ':mode imperative', sentence: 'Break' },
            { id: 3, indentation: 1, amr: ':ARG0 (y / you)', sentence: 'You break' },
            { id: 4, indentation: 1, amr: ':ARG1 (t / thing', sentence: 'Break a thing' },
            { id: 5, indentation: 2, amr: ':ARG1-of (w / work-01', sentence: 'Break thing that is worked on' },
            { id: 6, indentation: 3, amr: ':ARG0 y))', sentence: 'Break thing that you worked on' },
            { id: 7, indentation: 1, amr: ':ARG3 (c / chunk', sentence: 'Break your work into chunks' },
            { id: 8, indentation: 2, amr: ':ARG1-of (m / manage-01', sentence: 'Break your work into chunks that are managed' },
            { id: 9, indentation: 3, amr: ':ARG0 y', sentence: 'Break your work into chunks that you manage' },
            { id: 10, indentation: 3, amr: ':ARG1-of (p / possible-01))))', sentence: 'Break your work into chunks that you can manage' }
        ],
        source: "Source: ::id DF-200-192400-625_6304.20 (amr-release-3.0-amrs-test-dfa.txt)"
    },
    { 
        order: 19, 
        sentence: "The acquisition is expected to be completed before April.", 
        goldAMR: `(e / expect-01
        :ARG1 (c / complete-01
            :ARG1 (a / acquire-01)
            :time (b / before
                :op1 (d / date-entity :month 4))))`, 
        explanation: "The focus of the AMR is `expect-01` (\"is expected\"). The thing being expected (`:ARG1`) is `complete-01`. The thing being completed (`:ARG1` of `complete-01`)is `acquire-01` (\"the acquisition\"). The time of the completion is marked by `:time`, which is `before` the `date-entity` of month 4 (\"completed before April\").",
        breakdown: [
            { id: 1, indentation: 0, amr: '(e / expect-01', sentence: 'To expect' },
            { id: 2, indentation: 1, amr: ':ARG1 (c / complete-01', sentence: 'To expect to complete' },
            { id: 3, indentation: 2, amr: ':ARG1 (a / acquire-01)', sentence: 'To expect to complete the acquisition' },
            { id: 4, indentation: 2, amr: ':time (b / before', sentence: 'To expect to complete the acquisition before' },
            { id: 5, indentation: 3, amr: ':op1 (d / date-entity :month 4))))', sentence: 'To expect to complete the acquisition before April' }
        ],
        source: "Source: ::id wb.c2e_0008.4 ::date 2012-11-16T09:33:54 (amr-release-3.0-amrs-wb.txt)"
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
        explanation: "The focus of the AMR is `list-01` (\"listed\"). The things  listed (`:ARG1`) are a coordination using (`and`). The first operand (`:op1`) is `effort-01`. The argument `:ARG1` represents the concept `relieve-01` as the thing effort is put into (\"relief efforts\"). These efforts are quantified by `lot`, and are located in the city of Austin (\"Lots of Austin relief efforts\"). The second operand (`:op2`) is `event`, and the purpose of these events is `fundraise-04` (\"fundraising events\"). The location of the listing is `here`.",
        breakdown: [
            { id: 1, indentation: 0, amr: '(l / list-01', sentence: 'To list' },
            { id: 2, indentation: 1, amr: ':ARG1 (a / and', sentence: 'To list and' },
            { id: 3, indentation: 2, amr: ':op1 (e / effort-01', sentence: 'To list effort and' },
            { id: 4, indentation: 3, amr: ':ARG1 (r / relieve-01)', sentence: 'To list effort to relieve and' },
            { id: 5, indentation: 3, amr: ':quant (l2 / lot)', sentence: 'To list lots of effort to relieve and' },
            { id: 6, indentation: 3, amr: ':location (c / city :wiki "Austin,_Texas" :name (n / name :op1 "Austin")))', sentence: 'To list lots of Austin efforts to relieve and' },
            { id: 7, indentation: 2, amr: ':op2 (e2 / event', sentence: 'To list lots of Austin efforts to relieve and event' },
            { id: 8, indentation: 3, amr: ':purpose (f / fundraise-04)))', sentence: 'To list lots of Austin efforts to relieve and fundraising events' },
            { id: 9, indentation: 1, amr: ':location (h / here))', sentence: 'Lots of Austin relief efforts and fundraising events listed here' }
        ],
        source: "Source: ::id ENG_DF_000170_20050903_C00020J0V_0001.20 (amr-release-3.0-amrs-test-lorelei.txt)"
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
        explanation: "The focus of the AMR is `strike-01` (\"struck\"). The instrument of the strike (`:ARG2`) is an earthquake, which is modified by `big`, which is modified by `such` (\"such a big earthquake\"). The time of the strike is specified by the concepts `prosper-01` and `happiness` (\"time of prosperity and happiness\"). The manner in which the earthquake struck is described as `sudden` (\"suddenly struck\").",
        breakdown: [
            { id: 1, indentation: 0, amr: '(s / strike-01', sentence: 'To strike' },
            { id: 2, indentation: 1, amr: ':ARG2 (e / earthquake', sentence: 'An earthquake struck' },
            { id: 3, indentation: 2, amr: ':mod (b / big', sentence: 'A big earthquake struck' },
            { id: 4, indentation: 3, amr: ':mod (s2 / such)))', sentence: 'Such a big earthquake struck' },
            { id: 5, indentation: 1, amr: ':time (t / time', sentence: 'Such a big earthquake struck during a time' },
            { id: 6, indentation: 2, amr: ':op1 (p / prosper-01)', sentence: 'Such a big earthquake struck during a time of prosperity' },
            { id: 7, indentation: 2, amr: ':op2 (h / happiness))', sentence: 'Such a big earthquake struck during a time of prosperity and happiness' },
            { id: 8, indentation: 1, amr: ':manner (s3 / sudden))', sentence: 'Such a big earthquake suddenly struck during a time of prosperity and happiness' }
        ],
        source: "Source: ::id bolt12_10474_1831.1 (amr-release-3.0-amrs-bolt.txt)"
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
        explanation: "The focus of the AMR is `possible-01`, which is negated by `:polarity -` (\"can't\"). The thing that isn't possible (`:ARG1`) is `seem-01`. The thing that seems to be the case (`:ARG1` of `seem-01`) is the event `help-02` (\"can't seem to help\"). The agent of this help (`:ARG0`) is `he`. What he can't help (`:ARG1`) is the action `apologize-01`, which has the same agent (`himself`). The thing being apologized for (`:ARG1`) is \"anything and everything\".",
        breakdown: [
            { id: 1, indentation: 0, amr: '(p / possible-01', sentence: 'It is possible' },
            { id: 2, indentation: 1, amr: ':polarity -', sentence: 'It is not possible' },
            { id: 3, indentation: 1, amr: ':ARG1 (s / seem-01', sentence: 'Can\'t seem' },
            { id: 4, indentation: 2, amr: ':ARG1 (h / help-02', sentence: 'Can\'t seem to help' },
            { id: 5, indentation: 3, amr: ':ARG0 (h2 / he)', sentence: 'He can\'t seem to help' },
            { id: 6, indentation: 3, amr: ':ARG1 (a / apologize-01', sentence: 'He can\'t seem to help apologizing' },
            { id: 7, indentation: 4, amr: ':ARG0 h2', sentence: 'He can\'t seem to help himself from apologizing' },
            { id: 8, indentation: 4, amr: ':ARG1 (a2 / and', sentence: 'He can\'t seem to help himself from apologizing for and' },
            { id: 9, indentation: 5, amr: ':op1 (a3 / anything)', sentence: 'He can\'t seem to help himself from apologizing for anything and' },
            { id: 10, indentation: 5, amr: ':op2 (e / everything))))))', sentence: 'He can\'t seem to help himself from apologizing for anything and everthing' }
        ],
        source: "Source: ::id DF-170-181103-888_2097.1 (amr-release-3.0-amrs-dfa.txt)"
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
        explanation: "The focus of the AMR is `keep-01` (\"keeping\"). The agent (`:ARG0`) is the country Finland (\"Finland has been keeping\"). The thing being kept (`:ARG1`) is a surplus. This surplus is modified by `trade-01` and is described as being `obvious-01`, represented by the inverted role `:ARG1-of` (\"obvious trade surplus\"). The keeping takes place at a time of \"recent years\" and in a location described as \"this region\".",
        breakdown: [
            { id: 1, indentation: 0, amr: '(k / keep-01', sentence: 'To keep' },
            { id: 2, indentation: 1, amr: ':ARG0 (c / country :wiki "Finland"', sentence: 'A country has been keeping' },
            { id: 3, indentation: 2, amr: ':name (n / name :op1 "Finland"))', sentence: 'Finland has been keeping' },
            { id: 4, indentation: 1, amr: ':ARG1 (s / surplus', sentence: 'Finland has been keeping a surplus' },
            { id: 5, indentation: 2, amr: ':mod (t / trade-01)', sentence: 'Finland has been keeping a trade surplus' },
            { id: 6, indentation: 2, amr: ':ARG1-of (o / obvious-01))', sentence: 'Finland has been keeping an obvious trade surplus' },
            { id: 7, indentation: 1, amr: ':time (y / year', sentence: 'In years Finland has been keeping an obvious trade surplus' },
            { id: 8, indentation: 2, amr: ':mod (r / recent))', sentence: 'In recent years, Finland has been keeping an obvious trade surplus' },
            { id: 9, indentation: 1, amr: ':location (r2 / region', sentence: 'In recent years, Finland has been keeping an obvious trade surplus in the region' },
            { id: 10, indentation: 2, amr: ':mod (t2 / this)))', sentence: 'In recent years, Finland has been keeping an obvious trade surplus in this region' }
        ],
        source: "Source: ::id nw.chtb_0324.12 (amr-release-3.0-amrs-xinhua.txt)"
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
        explanation: "The focus of the AMR is `and`, which connects two concepts. The first concept (`:op1`) is `fear`, which has a negative polarity (`:polarity -`) (\"not fear\"). This concept has a manner of `certain` and has a domain of `tolerance` (\"tolerance is certainly not fear\"). The second concept (`:op2`) is `obligate-01`, which also has a negative polarity (\"does not have to be\"). The obligation (`:ARG2`) refers to `cowardice`, with a domain of `sincerity` (\"sincerity does not have to be cowardice\").",
        breakdown: [
            { id: 1, indentation: 0, amr: '(a / and ', sentence: 'and' },
            { id: 2, indentation: 1, amr: ':op1 (f / fear', sentence: 'Fear' },
            { id: 3, indentation: 2, amr: ':polarity -', sentence: 'Not fear' },
            { id: 4, indentation: 2, amr: ':manner (c / certain)', sentence: 'Certainly not fear' },
            { id: 5, indentation: 2, amr: ':domain (t / tolerance))', sentence: 'Tolerance is certainly not fear' },
            { id: 6, indentation: 1, amr: ':op2 (o / obligate-01', sentence: 'Tolerance is certainly not fear and obligated' },
            { id: 7, indentation: 2, amr: ':polarity -', sentence: 'Tolerance is certainly not fear and not obligated' },
            { id: 8, indentation: 2, amr: ':ARG2 (c2 / cowardice', sentence: 'Tolerance is certainly not fear and not obligated to be cowardice' },
            { id: 9, indentation: 3, amr: ':domain (s / sincerity))))', sentence: 'Tolerance is certainly not fear and sincerity is not obligated to be cowardice' }
        ],
        source: "Source: ::id bolt12_6455_6561.24 (amr-release-3.0-amrs-test-bolt.txt)"
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
        explanation: "The focus of the AMR is `feel-02` (\"felt\"). The experiencer (`:ARG0`) is `he` (\"he felt\"). The thing felt (`:ARG1`) is a person. This person is quantified as `more` and is described as competitors (`:ARG0-of` of `compete-01`). These people are also new (`:ARG1-of` `new-01`) (\"more new competitors\"), their source is from \"our country\", and they are participants (`:ARG0-of` `participate-01`) in \"this competition\" (`compete-01` is modified by `this`).",
        breakdown: [
            { id: 1, indentation: 0, amr: '(f / feel-02', sentence: 'To feel' },
            { id: 2, indentation: 1, amr: ':ARG0 (h / he)', sentence: 'He felt that' },
            { id: 3, indentation: 1, amr: ':ARG1 (p / person', sentence: 'He felt that people' },
            { id: 4, indentation: 2, amr: ':quant (m / more)', sentence: 'He felt that there were more people' },
            { id: 5, indentation: 2, amr: ':ARG0-of (c / compete-01', sentence: 'He felt that there were more competitors' },
            { id: 6, indentation: 2, amr: ':ARG1-of (n / new-01))', sentence: 'He felt that there were more new competitors' },
            { id: 7, indentation: 2, amr: ':source (c2 / country', sentence: 'He felt that there were more new competitors from country' },
            { id: 8, indentation: 3, amr: ':poss (w / we))', sentence: 'He felt that there were more new competitors from our country' },
            { id: 9, indentation: 2, amr: ':ARG0-of (p2 / participate-01', sentence: 'He felt that there were more new competitors participating' },
            { id: 10, indentation: 3, amr: ':ARG1 (c3 / compete-01', sentence: 'He felt that there were more new competitors participating in competition' },
            { id: 11, indentation: 4, amr: ':mod (t / this)))', sentence: 'He felt that there were more new competitors participating in this competition' }
        ],
        source: "Source: ::id nw.chtb_0324.12 (amr-release-3.0-amrs-test-xinhua.txt)"
    }
  ];
  