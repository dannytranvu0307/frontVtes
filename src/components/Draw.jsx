// import draw from "../functional/draw";
import { useState,useEffect } from "react"
const Draw = () =>{
    // draw();
    const [context,setContext] = useState(null)
    // 画像読み込み完了トリガー
    const [loaded,setLoaded] = useState(false)
    // コンポーネントの初期化完了後コンポーネント状態にコンテキストを登録
    useEffect(()=>{
        const canvas = document.getElementById("canvas")
        const canvasContext = canvas.getContext("2d")
        setContext(canvasContext)
    },[])
    // useEffect(()=>{
    //     if(context!==null)
    //     {
    //         const img = new Image()
    //         img.src = "../static/VTI_logo.png" // 描画する画像など
    //         img.onload = () => {
    //             context.drawImage(img,0,0)
    //             // 更にこれに続いて何か処理をしたい場合
    //             setLoaded(true)
    //         }
    //     }
    // },[context])
    useEffect(()=>{
        if(loaded)
        {
            // それに続く処理
        }
    },[loaded])
    return (
        // <div>
        //     <div>
        //       <canvas
        //         id="canvas"
        //         width="500"
        //         height="200"
        //         style={{border: "1px solid black"}}
        //       ></canvas>
        //     </div>
        //     <div style={{marginTop: "5px"}}>
        //       <span>Size: </span>
        //       <input
        //         type="range"
        //         min="1"
        //         max="50"
        //         value={"25"}
        //         className="size"
        //         id="sizeRange"
        //       />
        //     </div>
        //     <div style={{marginTop: "5px"}}>
        //       <span>Color: </span>
        //       <input type="radio" name="colorRadio" value="black" checked />
        //       <label for="black">Black</label>
        //       <input type="radio" name="colorRadio" value="white" />
        //       <label for="black">White</label>
        //       <input type="radio" name="colorRadio" value="red" />
        //       <label for="black">Red</label>
        //       <input type="radio" name="colorRadio" value="green" />
        //       <label for="black">Green</label>
        //       <input type="radio" name="colorRadio" value="blue" />
        //       <label for="black">Blue</label>
        //     </div>
        //     <div style={{marginTop: "5px"}}>
        //       <button id="clear">Clear</button>
        //     </div>
        //     <br />
        //     <input id="upload" type="file" accept="image/*" />
        //     <p>
        //       Start drawing on the blank canvas, or upload an image and use the brush to
        //       draw on it
        //     </p>
        // </div>
        <canvas width="1280" height="720" style={{border: "1px solid black"}} id="canvas"></canvas>
        )
}
export default Draw;