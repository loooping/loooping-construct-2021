import styled from 'styled-components';

const theme = {
  spacer: 8,
  primaryColor: '#17181C',
  secondaryColor: '#1177C9',
};

export const TopFullWidth = styled.div`
  display: flex;
  height: 50vh;

  .container {
    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: ${theme.spacer * 4}px;

      a {
        margin-bottom: ${theme.spacer * 3}px;

        img {
          width: 100%;
          max-width: 180px;
        }
      }

      h1,
      h2 {
        font-size: 16px;
        width: 100%;
        text-align: center;
        margin: ${theme.spacer}px;
        padding: 0;
        color: ${theme.primaryColor};
        text-transform: uppercase;
        line-height: ${theme.spacer}px;

        @media (max-width: 768px) {
          font-size: 20px;
        }
      }
    }
  }
`;

export const BottomFullWidth = styled.div`
  display: flex;
  background: ${theme.primaryColor};
  height: 50vh;

  @media (max-width: 768px) {
    padding: 0 ${theme.spacer * 2}px;
    height: 65vh;
  }

  .container {
    main {
      width: 100%;
      max-width: 780px;

      p {
        text-align: center;
        color: white;

        &:last-child {
          font-size: 14px;
        }
      }

      ul {
        list-style: none;
        margin: ${theme.spacer * 4}px 0;
        padding: 0;

        @media (min-width: 769px) {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        li {
          @media (max-width: 768px) {
            margin-bottom: ${theme.spacer * 2}px;

            &:last-child {
              margin-bottom: 0;
            }
          }

          @media (min-width: 769px) {
            margin-right: ${theme.spacer}px;

            &:last-child {
              margin-right: ${theme.spacer}px;
            }
          }

          a {
            display: flex;
            align-items: center;
            padding: ${theme.spacer}px;
            border-radius: ${theme.spacer}px;
            font-weight: 600;
            background: white;
            color: ${theme.primaryColor};

            @media (max-width: 768px) {
              justify-content: center;
            }

            @media (min-width: 1024px) {
              &:hover {
                background: ${theme.secondaryColor};
                color: white;
              }
            }

            small {
              margin-right: ${theme.spacer / 2}px;
            }

            svg {
              margin-right: ${theme.spacer}px;
            }
          }
        }
      }
    }
  }
`;
