import React from 'react'

const SaveOutputToTxt = (props) => {

    const saveToTxt = () => {

        const blob = new Blob([props.outputText], { type: "text/plain;charset=utf-8" })
        const fileName = 'output.txt'
        let newLink = document.createElement('a')
        newLink.download = fileName

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(blob);
        }
        else {
            newLink.href = window.URL.createObjectURL(blob);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 

    }

    return (
        <>
        <button onClick={saveToTxt}>save output to .txt</button>
        </>
    )
}

export default SaveOutputToTxt