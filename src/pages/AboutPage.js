import React from 'react';

const AboutPage = () => {
  return (
    <div>
        <h1>More about the project</h1>
            <p>This website trains users to make annotations.
            </p>
            
            <a href="https://aclanthology.org/W13-2322.pdf" target="_blank">
                Link to AMR article
            </a>
            <p></p>
            <a href="https://github.com/amrisi/amr-guidelines/blob/master/amr.md" target="_blank">
                Link to AMR guidelines
            </a>
            <p></p>
            <a href="https://github.com/nschneid/amr-tutorial/tree/master/slides" target="_blank">
                Link to AMR demonstration slides
            </a>
            <p></p>
            <a href="https://doi.org/10.35111/44cy-bp51" target="_blank">
                Link to AMR 3.0 dataset
            </a>
            <p></p>
            <a href="https://github.com/ACNLPlab/amr-training-website" target="_blank">
                Link to GitHub for this website
            </a>
    </div>
  );
};

export default AboutPage;