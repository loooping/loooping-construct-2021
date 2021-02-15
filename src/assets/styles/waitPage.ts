import styled from 'styled-components';

const theme = {
  spacer: 8,
  primaryColor: '#608EF9',
  secondaryColor: '#AFCCF9',
};

export const TopFullWidth = styled.div`
  display: flex;
  height: 50vh;

  @media (max-width: 768px) {
    padding: ${theme.spacer * 4}px;
    height: 35vh;
  }

  .container {
    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: ${theme.spacer * 4}px;

      a {
        img {
          width: 100%;
          max-width: 450px;
        }
      }

      h1 {
        font-size: 28px;
        width: 100%;
        max-width: 450px;
        text-align: center;
        font-weight: 500;
        margin: ${theme.spacer}px;
        padding: 0;
        color: #141414;

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
            font-weight: 500;
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
