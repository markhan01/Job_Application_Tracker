import React from 'react'
import main from '../assets/images/main.svg'
import styled from 'styled-components'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
  <Wrapper>
    <nav>
        <Logo />
    </nav>
    <div className="container page">
        {/* info */}
        <div className="info">
            <h1>
                job <span>tracking</span> app
            </h1>
            <p>
                I'm baby yuccie locavore cardigan 8-bit cliche knausgaard photo booth four dollar toast, try-hard mukbang. Subway tile bespoke keytar raw denim selfies, fam organic chia roof party edison bulb truffaut. Schlitz vibecession pickled, synth vexillologist scenester four dollar toast shabby chic tonx hell of tousled jawn coloring book. Jean shorts poutine sustainable Brooklyn.
            </p>
            <Link to="/register" className="btn btn-hero">
                Login/Register
            </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
    </div>
  </Wrapper>
  )
}

// styled component to wrap entire landing page
const Wrapper = styled.main`
    nav{
        width: var(--fluid-width);
        max-width: var(--max-width);
        margin: 0 auto;
        height: var(--nav-height);
        display: flex;
        align-items: center;
    }
    .page {
        min-height: calc(100vh - var(--nav-height));
        display: grid;
        align-items: center;
        margin-top: -3rem;
    }
    h1 {
        font-weight: 700;
        span{
            color: var(--primary-500);
        }
    }
    p {
        color: var(--grey-600);
    }

    // only display img when width is larger than 992px
    .main-img {
        display: none;
    }
    @media (min-width:992px) {
        // info div and img in grid column layout
        .page{
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }
        .main-img {
            display: block;
        }
    }
`

export default Landing
