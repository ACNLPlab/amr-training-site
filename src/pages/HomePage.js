import React from 'react';
import "./HomePage.css";
import homebg from '../assets/homepageimg.png';

const HomePage = () => {

  const backgroundStyle = {
    backgroundImage: `url(${homebg})`,
  };

  return (
    <div className="homepage">
        <section className="title-section" style={backgroundStyle}>
            <h1 className="title-heading">
                TrAinMR
            </h1>
            <p className="title-subtitle">Abstract Meaning Representation Annotation Training Website</p>
        </section>

        <div className="body">
            <div className="column">
                <div className="section left">
                    <h1>Welcome to TrAinMR</h1>
                    <p>Learn how to annotate your own AMR graphs!</p>

                    <div className="content">
                        <p><em>Sentence: "Training in Abstract Meaning Representation"</em></p>
                        <p><em>AMR Graph:</em></p>
                    </div>

                    <pre className="samplegraph">
                        {`  (`}
                        <span className="amr-highlight-var" data-tooltip="variable">t</span>
                        {` / `}
                        <span className="amr-highlight-concept" data-tooltip="concept">train-01</span>
                        {"\n    "}
                    </pre>
                    <pre className="samplegraphlines">
                        <span className="amr-highlight-role" data-tooltip="role">:ARG1</span>
                        {` (`}
                        <span className="amr-highlight-var" data-tooltip="variable">r</span>
                        {` / `}
                        <span className="amr-highlight-concept" data-tooltip="concept">representation-02</span>
                        {"\n        "}
                        <span className="amr-highlight-role" data-tooltip="role">:ARG1</span>
                        {` (`}
                        <span className="amr-highlight-var" data-tooltip="variable">m</span>
                        {` / `}
                        <span className="amr-highlight-concept" data-tooltip="concept">mean-01</span>
                        {` )`}
                        {"\n        "}
                        <span className="amr-highlight-role" data-tooltip="role">:mod</span>
                        {` (`}
                        <span className="amr-highlight-var" data-tooltip="variable">a</span>
                        {` / `}
                        <span className="amr-highlight-concept" data-tooltip="concept">abstract</span>
                        {`)))`}
                    </pre>  

                </div>
            
                <div className="section right">
                    <h2 className="howto-header">HOW TO USE TrAinMR</h2>
                    <ol className="howto-list">
                        <li>Navigate to the Tutorial page to learn more about AMR</li>
                        <li>Go to the Annotation Practice page to practice writing your own annotations</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

  );
};

export default HomePage;