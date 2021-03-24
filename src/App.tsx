import React from 'react';
import { FiMail, FiPhoneCall } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

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
            <img src={logoImage} alt="Loooping Desenvolvimento Web" />
          </a>

          <h1>Desenvolvimento Web/Mobile &</h1>
          <h2>Consultoria Digital &</h2>
          <h2>Cloud Hosting &</h2>
        </header>
      </div>
    </TopFullWidth>

    <BottomFullWidth>
      <div className="container">
        <main>
          <p>
            Nosso novo site está em desenvolvimento, se você precisa desenvolver
            ou manter um projeto entre em contato conosco
          </p>

          <ul>
            <li>
              <a href="mailto:contato@loooping.com.br?Subject=Quero%20falar%20sobre%20um%20novo%20projeto">
                <FiMail size={28} />
                contato@loooping.com.br
              </a>
            </li>

            <li>
              <a href="tel:+5511998109325">
                <FiPhoneCall size={28} />
                <small>(11)</small>
                99810-9325
              </a>
            </li>

            <li>
              <a href="https://t.me/loooping">
                <FaTelegramPlane size={28} />
                loooping
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
