import {Unity, useUnityContext} from "react-unity-webgl";

function Game4() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/CloudBuid3.loader.js",
        dataUrl: "/CloudBuid3.data",
        frameworkUrl: "/CloudBuid3.framework.js",
        codeUrl: "/CloudBuid3.wasm",
    });

    function handleClickRestartLevel() {
        sendMessage("GameManager", "RestartLevel");
    }
    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">React + Unity / Tecsup</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />

                    <div className="centered-content">
                        <button onClick={handleClickRestartLevel}>Restart Level</button>
                    </div>

                </div>
            </div>

        </>
    );
}


export default Game4