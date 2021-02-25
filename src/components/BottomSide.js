import React,{useState} from 'react';
import
    {
        FirstBottomDiv,
        ImageDiv,
        SongInfo,
        MidBottomDiv,
        Controls,
        MidSecondBottomDiv,
        MidRightDiv,
        MobilePlayButton
} from "../styled-components/BottomSideStyledComponents";

const BottomSide = () =>
{
    const [heartButton, setHeartButton] = useState( false );
    const [playButton, setPlayButton] = useState( false );
    const [volumeButton, setVolumeButton] = useState( false );

    return (
       <>
            <FirstBottomDiv>
                <ImageDiv mageDiv>
                    <img src="https://m.media-amazon.com/images/I/71hWV613MiL._SS500_.jpg"></img>
                </ImageDiv>
                <SongInfo>
                    <h4 tabIndex={0}>Thiago Silva</h4>
                    <a tabIndex={0}>M Huncho</a>
                </SongInfo>
                <div style={{paddingBottom:"15px"}}>
                    <i tabIndex={0}   onClick={() => setHeartButton(!heartButton) } className={heartButton ? "fas fa-heart" : "far fa-heart"}/>
                </div>
            </FirstBottomDiv>
            <MidBottomDiv>
                <Controls>
                    <i tabIndex={0}  style={{color:"#5c5b5b"}} className="fas fa-random"></i>
                    <i tabIndex={0}  className="fas fa-step-backward"></i>
                    <i tabIndex={0}  style={{fontSize:"32px"}} onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></i>
                    <i tabIndex={0}  className="fas fa-step-forward"></i>
                    <i tabIndex={0}  style={{color:"#5c5b5b"}} className="fas fa-redo"></i>
                </Controls>
                <MidSecondBottomDiv>
                    <p>0:38</p>
                    <progress  value="2" max="10"></progress>
                    <p>-2:37</p>
                </MidSecondBottomDiv>
                <MobilePlayButton onClick={() => setPlayButton(!playButton) } className={playButton ? "fas fa-pause" : "fas fa-play"}></MobilePlayButton>
            </MidBottomDiv>
            <MidRightDiv>
                <i tabIndex={0}  className="fas fa-align-right"></i>
                <i tabIndex={0}  className="fas fa-desktop"></i>
                <i tabIndex={0}  playButton style={{minWidth:"16px"}} onClick={() => setVolumeButton(!volumeButton) } className={volumeButton ? "fas fa-volume-mute" : "fas fa-volume-down"}></i>
                <progress value="6" max="10"></progress>
                <i tabIndex={0}  className="fas fa-expand-alt"></i>
            </MidRightDiv>
        </>
    )
}

export default BottomSide;
