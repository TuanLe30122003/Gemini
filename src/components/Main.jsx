import React from 'react'
import { assets } from '../assets/assets'
import styled from 'styled-components';

const Main = () => {
    return (
        <MainStyled>
            <div className='nav'>
                <p>Gemimi</p>
                <img src={assets.user_icon} alt='' />
            </div>

            <div className='main-container'>
                <div className='greet'>
                    <p><span>Hello, ...</span></p>
                    <p>How can I help you today ?</p>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <p>Suggest beautiful places to vist</p>
                        <img src={assets.compass} />
                    </div>
                    <div className='card'>
                        <p>Suggest beautiful places to vist</p>
                        <img src={assets.compass} />
                    </div>
                    <div className='card'>
                        <p>Suggest beautiful places to vist</p>
                        <img src={assets.compass} />
                    </div>
                    <div className='card'>
                        <p>Suggest beautiful places to vist</p>
                        <img src={assets.compass} />
                    </div>
                </div>

                <div className='main-bottom'>
                    <div className='search-box'>
                        <input type='text' placeholder='Enter a prompt here!' />
                        <div>
                            <img src={assets.gallery_icon} alt='' />
                            <img src={assets.mic_icon} alt='' />
                            <img src={assets.send_icon} alt='' />
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gemini may display incorrect info, so double-check is recommended
                    </p>
                </div>
            </div>


        </MainStyled>
    )
}

const MainStyled = styled.div`
    flex: 1;
    min-height: 100vh;
    padding-bottom: 15vh;
    position: relative;
    .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 22px;
        padding: 20px;
        color: #585858;
    }
    
    .nav img {
        width: 40px;
        border-radius: 50%;
    }

    .main-container {
        max-width: 900px;
        margin: auto;
    }

    .greet {
        margin: 50px 0;
        font-size: 56px;
        color: #c4c7c5;
        font-weight: 500;
        padding: 20px;
    }

    .greet span {
        background: -webkit-linear-gradient(16deg, #4b90ff, #ff5564);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 15px;
        padding: 20px;
    }

    .card {
        height: 200px;
        padding: 15px;
        background-color: #f0f4f9;
        border-radius: 10px;
        position: relative;
        cursor: pointer;
    }

    .card img {
        width: 35px;
        padding: 5px;
        position: absolute;
        background-color: white;
        border-radius: 20px;
        bottom: 10px;
        right: 10px;
    }

    .card p {
        color: #585858;
        font-size: 17px;
    }

    .card:hover {
        background-color: #dfe4ea;
    }

    .main-bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        max-width: 900px;
        padding: 0 20px;
        margin: auto;
    }

    .search-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        background-color: #f0f4f9;
        border-radius: 50px;
        padding: 10px 20px;
    }

    .search-box img {
        width: 24px;
        cursor: pointer;
    }

    .search-box input {
        flex: 1;
        background: transparent;
        border: none;
        outline: none;
        padding: 8px;
        font-size: 18px;
    }

    .search-box div {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .bottom-info {
        font-size: 13px;
        margin: 15px auto;
        text-align: center;
        font-weight: 300;
    }
`;

export default Main
