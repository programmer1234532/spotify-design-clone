import React,{useState,useEffect} from 'react';
import
    {
        FirstBottomDiv,
        ImageDiv,
        SongInfo,
        MidBottomDiv,
        Controls,
        MidSecondBottomDiv,
        MidRightDiv
} from "../styled-components/BottomSideStyledComponents";

const BottomSide = () =>
{
    const [heartButton, setHeartButton] = useState( false );
    const [playButton, setPlayButton] = useState( false );
    const [volumeButton, setVolumeButton] = useState( false );

    useEffect(() => {
        
    }, [volumeButton])

    return (
       <>
            <FirstBottomDiv>
                <ImageDiv>
                    <img src="https://m.media-amazon.com/images/I/71hWV613MiL._SS500_.jpg"></img>
                </ImageDiv>
                <SongInfo>
                    <h4>Thiago Silva</h4>
                    <p>M Huncho</p>
                </SongInfo>
                <div style={{paddingBottom:"15px"}}>
                    <i  onClick={() => setHeartButton(!heartButton) } className={heartButton ? "fas fa-heart" : "far fa-heart"}/>
                </div>
            </FirstBottomDiv>
            <MidBottomDiv>
                <Controls>
                    <i style={{color:"#5c5b5b"}} className="fas fa-random"></i>
                    <i className="fas fa-step-backward"></i>
                    <i style={{fontSize:"32px"}} onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></i>
                    <i className="fas fa-step-forward"></i>
                    <i style={{color:"#5c5b5b"}} className="fas fa-redo"></i>
                </Controls>
                <MidSecondBottomDiv>
                    <p>0:38</p>
                    <progress  value="2" max="10"></progress>
                    <p>-2:37</p>
                </MidSecondBottomDiv>
            </MidBottomDiv>
            <MidRightDiv>
                <i className="fas fa-align-right"></i>
                <i className="fas fa-desktop"></i>
                <i style={{minWidth:"16px"}} onClick={() => setVolumeButton(!volumeButton) } className={volumeButton ? "fas fa-volume-mute" : "fas fa-volume-down"}></i>
                <progress value="6" max="10"></progress>
                <i className="fas fa-expand-alt"></i>
            </MidRightDiv>
        </>
    )
}

export default BottomSide;
