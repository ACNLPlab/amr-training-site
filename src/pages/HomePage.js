import React from 'react';

const HomePage = () => {
  return (
    <div>
        <h1>TrAinMR: Abstract Meaning Representation Annotation Training Website</h1>
        <h2>Welcome to AMR Training</h2>

        <p>Learn how to annotate your own AMR graphs!</p>

        <h2>Navigate to the Tutorial page to learn more about 
            how AMR works, then go to the Annotation Practice page to practice writing 
            your own annotations.</h2>
            
        {/* <p>Insert interactive mini AMR:</p> */}

        <p>Sentence: "Training in Abstract Meaning Representation"</p>
        <p>AMR Graph:</p>
        <pre className="samplegraph">
          {`(t / train-01
          :ARG1 (r / representation-02
              :ARG1 (m / mean-01 )
              :mod (a / abstract)))`}
        </pre>
        
    </div>

  );
};

export default HomePage;