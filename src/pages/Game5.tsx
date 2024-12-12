import {Unity, useUnityContext} from "react-unity-webgl";

function Game5() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/CloudBuid4.loader.js",
        dataUrl: "/CloudBuid4.data",
        frameworkUrl: "/CloudBuid4.framework.js",
        codeUrl: "/CloudBuid4.wasm",
    });

    function handleClickRestartLevel() {
        sendMessage("GameManager5", "ResetScene");
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


export default Game5