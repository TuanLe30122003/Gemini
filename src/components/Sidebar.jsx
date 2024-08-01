import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { assets } from '../assets/assets'
import { Context } from '../context/context'

const Sidebar = () => {

    const [extended, setExtended] = useState(false)
    const { onSent, previousPrompt, setRecentPrompt } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    const handleExtend = () => {
        setExtended(!extended);
    }

    return (
        <SidebarStyled>
            <div className='sidebar'>
                <div className='top'>
                    <img className='menu' src={assets.menu_icon} alt='' onClick={handleExtend} />
                    <div className='new-chat'>
                        <img src={assets.plus_icon} alt='' />
                        {extended ? <p>New Chat</p> : null}
                    </div>

                    {extended ?
                        <div className='recent'>
                            <p className='recent-title'>
                                Recent
                            </p>

                            {
                                previousPrompt.map((item, index) => {
                                    return (
                                        <div onClick={() => loadPrompt(item)} className='recent-entry'>
                                            <img src={assets.message_icon} alt='' />
                                            <p>{item.slice(0, 18)} ...</p>
                                        </div>
                                    )
                                })
                            }


                        </div>
                        : null
                    }
                </div>
                <div className='bottom'>
                    <div className='bottom-item recent-entry'>
                        <img src={assets.question_icon} alt='' />
                        {extended ? <p>Help</p> : null}
                    </div>

                    <div className='bottom-item recent-entry'>
                        <img src={assets.history_icon} alt='' />
                        {extended ? <p>Activity</p> : null}
                    </div>

                    <div className='bottom-item recent-entry'>
                        <img src={assets.setting_icon} alt='' />
                        {extended ? <p>Settings</p> : null}
                    </div>
                </div>
            </div>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    .sidebar {
        min-height: 100vh;
        display: inline-flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #f0f4f9;
        padding: 25px 15px;
    }

    .sidebar img {
        width: 20px;
    }

    .sidebar .menu {
        display: block;
        margin-left: 10px;
        cursor: pointer;
    }

    .sidebar .new-chat {
        margin-top: 50px;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 10px 15px;
        background-color: #e6eaf1;
        border-radius: 50px;
        font-size: 14px;
        cursor: pointer;
        color: grey;
    }

    .sidebar .recent {
        display: flex;
        flex-direction: column;
    }

    .sidebar .recent-title {
        margin-top: 30px;
        margin-bottom: 20px;
    }

    .sidebar .recent-entry {
        display: flex;
        align-items: start;
        gap: 10px;
        padding: 10px;
        padding-right: 40px;
        border-radius: 50px;
        color: #282828;
        cursor: pointer;
    }

    .sidebar .recent-entry:hover {
        background-color: #e2e6eb;
    }

    .sidebar .bottom {
        display: flex;
        flex-direction: column;
    }

    .bottom-item {
        padding-right: 10px;
        cursor: pointer;
    }
`;

export default Sidebar
