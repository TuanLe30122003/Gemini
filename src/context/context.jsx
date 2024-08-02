import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const processResponse = (response) => {
        let responseArray = response.split("**")
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i]
            } else {
                newResponse += "<b>" + responseArray[i] + "</b>"
            }
        }

        let newResponse2 = newResponse.split('*').join('<br>');

        let newResponse3 = newResponse2.split(' ')

        return newResponse3
    }

    const onSent = async (prompt) => {
        setResultData('') // remove previous result
        setLoading(true)
        setShowResult(true)
        let response
        if (prompt !== undefined) {
            response = await run(prompt)
            setRecentPrompt(prompt)
        } else {
            setPreviousPrompt(prev => [...prev, input])
            setRecentPrompt(input)
            response = await run(input)
        }

        let finalResponse = processResponse(response)

        for (let i = 0; i < finalResponse.length; i++) {
            const nextWord = finalResponse[i]
            delayPara(i, nextWord + " ");
        }

        // setResultData(finalResponse)
        setLoading(false)
        setInput('')
    }

    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev + nextWord)
        }, 75 * index)
    }

    const handleNewChat = () => {
        setLoading(false)
        setShowResult(false)
    }

    const [input, setInput] = useState('');
    const [recentPrompt, setRecentPrompt] = useState('');
    const [previousPrompt, setPreviousPrompt] = useState([])
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState('');


    const contextValue = {
        previousPrompt,
        setPreviousPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        handleNewChat,
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;