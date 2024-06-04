import React from 'react'

const AboutSection = () => {
  return (
    <section id="about">
      <div>
        <h1>About Me</h1>
      </div>
      <div>
        <h1>Get to know me</h1>
        <p>I&#39;m a Software Engineer with a background in Biology, looking to be part of {" "}
            <span className="font-bold">{"ambitious projects "}</span>
            to improve the 
            <span className="font-bold">{" health care industry."}</span>
            </p>
        <ul>
            <li>
                <span>E-mail</span>
                <a href="eugeniavuong7@gmail.com">eugeniavuong7@gmail.com</a>
            </li>
            <li>
                <span>Locations</span>
                UK, London (Currently) and USA
            </li>
            <li>
                <span>Current role(s)</span>
                Back-end Developer and Web-Developer at
            </li>
            <li>
                <a href="https://www.publicissapient.com/locations/digital-transformation-in-united-kingdom" target="">Publicis Sapient</a>
                &nbsp;&&nbsp;
                <a href="https://www.linkedin.com/company/codeaid-london/?originalSubdomain=uk">Sapient led CodeAid Charity Org</a>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutSection
