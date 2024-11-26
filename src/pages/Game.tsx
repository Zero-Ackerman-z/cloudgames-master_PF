import {Unity, useUnityContext} from "react-unity-webgl";

function Game() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/CloudBuild1.loader.js",
        dataUrl: "/CloudBuild1.data",
        frameworkUrl: "/CloudBuild1.framework.js",
        codeUrl: "/CloudBuild1.wasm",
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
                        <button onClick={handleClickRestartLevel}> Restart Level</button>
                    </div>

                </div>
            </div>

        </>
    );
}


export default Game