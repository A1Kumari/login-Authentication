import React from 'react';
import "./homepage.css"
import  { useNavigate, Link } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='homepage'>
        <h1>hello Homepage</h1>
        <div className='main-button small' onClick={() => navigate("/login")}>Login</div>
        
      </div>
      <div className='gradient1'>
        <p>editing system. Its editors are known as Wikipedians. Wikipedia is the largest and most-read reference work in history.[3] It is consistently one of the 10 most popular websites ranked by Similarweb and formerly Alexa; as of 2022, Wikipedia was ranked the 7th most popular site.[3][4] It is hosted by the Wikimedia Foundation, an American non-profit organization funded mainly through donations.

On January 15, 2001, Jimmy Wales and Larry Sanger launched Wikipedia. Sanger coined its name as a blend of wiki and encyclopedia.[5][6] Wales was influenced by the "spontaneous order" ideas associated with Friedrich Hayek and the Austrian School of economics after being exposed to these ideas by the libertarian economist Mark Thornton.[7] Initially available only in English, versions in other languages were quickly developed. Its combined editions comprise more than 59 million articles, attracting around 2 billion unique device visits per month and more than 17 million edits per month (1.9 edits per second) as of November 2020.[8][9] In 2006, Time magazine stated that the policy of allowing anyone to edit had made Wikipedia the "biggest (and perhaps best) encyclopedia in the world".[10]

Wikipedia has been praised for its enablement of the democratization of knowledge, extent of coverage, unique structure, culture, and reduced degree of commercial bias; but criticism for exhibiting systemic bias, particularly gender bias against women and alleged ideological bias.[11][12] The reliability of Wikipedia was frequently criticized in the 2000s, but has improved over time, as Wikipedia has been generally praised in the late 2010s and early 2020s.[3][11][13] The website's coverage of controversial topics such as American politics and major events like the COVID-19 pandemic and the Russian invasion of Ukraine has received substantial media attention.[citation needed] It has been censored by world governments, ranging from specific pages to the entire site. In April 2018, Facebook and YouTube announced that they would help users detect fake news by 
suggesting fact-checking links to related Wikipedia articles. Articles on breaking news are often accessed as a source of frequently updated information about those events.
        </p>
      </div>
    </>
  );
}

export default Homepage;
