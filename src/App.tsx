import React from 'react';
import { FiMail } from 'react-icons/fi';

import GlobalStyle from './assets/styles/global';

import { TopFullWidth, BottomFullWidth } from './assets/styles/waitPage';

import logoImage from './assets/images/loooping.svg';

const App: React.FC = () => (
  <>
    <GlobalStyle />

    <TopFullWidth>
      <div className="container">
        <header>
          <a href="/">
            <img src={logoImage} alt="Loooping Web Development+" />
          </a>

          <h1>Web and Mobile Development+</h1>
          <h2>Digital Consultancy+</h2>
          <h2>Cloud Hosting</h2>
        </header>
      </div>
    </TopFullWidth>

    <BottomFullWidth>
      <div className="container">
        <main>
          <p>
            Our new site is currently in development please reach us using the
            contact below
          </p>

          <ul>
            <li>
              <a href="mailto:contato@loooping.com.br?Subject=Hello%20there">
                <FiMail size={28} />
                contato@loooping.com.br
              </a>
            </li>
          </ul>

          <p>CNPJ: 32.423.323/0001-84</p>
        </main>
      </div>
    </BottomFullWidth>
  </>
);

export default App;
