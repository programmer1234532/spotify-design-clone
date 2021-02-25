import React,{useState} from 'react';
import
    {
        ButtonDiv,
        FriendActivity,
        FriendsAccount,
        FriendsDiv,
        FriendsImageDiv,
        RightSideDiv,
        SongDescription,
    } from '../styled-components/RightSideStyledComponents';

const RightSide = () =>
{
    const [playButton, setPlayButton] = useState( false );

    return (
        <RightSideDiv>
            <FriendActivity>
                <h3>Friend Activity</h3>
            </FriendActivity>
            <FriendsDiv>
                <FriendsAccount>
                    <FriendsImageDiv>
                        <img src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"></img>
                        <i onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></i>
                    </FriendsImageDiv>
                    <SongDescription>
                        <h4 tabIndex={0}>jotino14</h4>
                        <a tabIndex={0}>Decode</a>
                        <a tabIndex={0}>Paramore</a>
                        <a tabIndex={0}>
                            <i className="fab fa-itunes-note"></i> Danni's Ultimate Playlist
                        </a>
                    </SongDescription>
                    <div style={{marginRight:"15px"}}>
                        <i className="fas fa-volume-up"></i>
                    </div>
                </FriendsAccount>
                <FriendsAccount>
                    <FriendsImageDiv>
                        <img src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"></img>
                        <i onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></i>
                    </FriendsImageDiv>
                    <SongDescription>
                        <h4 tabIndex={0}>jotino14</h4>
                        <a tabIndex={0}>Decode</a>
                        <a tabIndex={0}>Paramore</a>
                        <a tabIndex={0}>
                            <i className="fab fa-itunes-note"></i> Danni's Ultimate Playlist
                        </a>
                    </SongDescription>
                    <div style={{marginRight:"15px"}}>
                        <i className="fas fa-volume-up"></i>
                    </div>
                </FriendsAccount>
                <FriendsAccount>
                    <FriendsImageDiv>
                        <img src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"></img>
                        <i onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></i>
                    </FriendsImageDiv>
                    <SongDescription>
                        <h4 tabIndex={0}>jotino14</h4>
                        <a tabIndex={0}>Decode</a>
                        <a tabIndex={0}>Paramore</a>
                        <a tabIndex={0}>
                            <i className="fab fa-itunes-note"></i> Danni's Ultimate Playlist fsfsfsfsfsffsfsfsfsfsfsfsfsf
                        </a>
                    </SongDescription>
                    <div style={{marginRight:"15px"}}>
                        <i className="fas fa-volume-up"></i>
                    </div>
                </FriendsAccount>
                <FriendsAccount>
                    <FriendsImageDiv>
                        <img src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"></img>
                        <i onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></i>
                    </FriendsImageDiv>
                    <SongDescription>
                        <h4 tabIndex={0}>jotino14</h4>
                        <a tabIndex={0}>Decode</a>
                        <a tabIndex={0}>Paramore</a>
                        <a tabIndex={0}>
                            <i className="fab fa-itunes-note"></i> Danni's Ultimate Playlist
                        </a>
                    </SongDescription>
                    <div style={{marginRight:"15px"}}>
                        <i className="fas fa-volume-up"></i>
                    </div>
                </FriendsAccount>
                <FriendsAccount>
                    <FriendsImageDiv>
                        <img src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"></img>
                        <i onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></i>
                    </FriendsImageDiv>
                    <SongDescription>
                        <h4 tabIndex={0}>jotino14</h4>
                        <a tabIndex={0}>Decode</a>
                        <a tabIndex={0}>Paramore</a>
                        <a tabIndex={0}>
                            <i className="fab fa-itunes-note"></i> Danni's Ultimate Playlist
                        </a>
                    </SongDescription>
                    <div style={{marginRight:"15px"}}>
                        <i className="fas fa-volume-up"></i>
                    </div>
                </FriendsAccount>
                <FriendsAccount>
                    <FriendsImageDiv>
                        <img src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"></img>
                        <i onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></i>
                    </FriendsImageDiv>
                    <SongDescription>
                        <h4 tabIndex={0}>jotino14</h4>
                        <a tabIndex={0}>Decode</a>
                        <a tabIndex={0}>Paramore</a>
                        <a tabIndex={0}>
                            <i className="fab fa-itunes-note"></i> Danni's Ultimate Playlist
                        </a>
                    </SongDescription>
                    <div style={{marginRight:"15px"}}>
                        <i className="fas fa-volume-up"></i>
                    </div>
                </FriendsAccount>
                <FriendsAccount>
                    <FriendsImageDiv>
                        <img src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"></img>
                        <i onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></i>
                    </FriendsImageDiv>
                    <SongDescription>
                        <h4 tabIndex={0}>jotino14</h4>
                        <a tabIndex={0}>Decode</a>
                        <a tabIndex={0}>Paramore</a>
                        <a tabIndex={0}>
                            <i className="fab fa-itunes-note"></i> Danni's Ultimate Playlist
                        </a>
                    </SongDescription>
                    <div style={{marginRight:"15px"}}>
                        <i className="fas fa-volume-up"></i>
                    </div>
                </FriendsAccount>
                <FriendsAccount>
                    <FriendsImageDiv>
                        <img src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"></img>
                        <i onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></i>
                    </FriendsImageDiv>
                    <SongDescription>
                        <h4 tabIndex={0}>jotino14</h4>
                        <a tabIndex={0}>Decode</a>
                        <a tabIndex={0}>Paramore</a>
                        <a tabIndex={0}>
                            <i className="fab fa-itunes-note"></i> Danni's Ultimate Playlist
                        </a>
                    </SongDescription>
                    <div style={{marginRight:"15px"}}>
                        <i className="fas fa-volume-up"></i>
                    </div>
                </FriendsAccount>
                <FriendsAccount>
                    <FriendsImageDiv>
                        <img src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"></img>
                        <i onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></i>
                    </FriendsImageDiv>
                    <SongDescription>
                        <h4 tabIndex={0}>jotino14</h4>
                        <a tabIndex={0}>Decode</a>
                        <a tabIndex={0}>Paramore</a>
                        <a tabIndex={0}>
                            <i className="fab fa-itunes-note"></i> Danni's Ultimate Playlist
                        </a>
                    </SongDescription>
                    <div style={{marginRight:"15px"}}>
                        <i className="fas fa-volume-up"></i>
                    </div>
                </FriendsAccount>
                <FriendsAccount>
                    <FriendsImageDiv>
                        <img src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"></img>
                        <i onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></i>
                    </FriendsImageDiv>
                    <SongDescription>
                        <h4 tabIndex={0}>jotino14</h4>
                        <a tabIndex={0}>Decode</a>
                        <a tabIndex={0}>Paramore</a>
                        <a tabIndex={0}>
                            <i className="fab fa-itunes-note"></i> Danni's Ultimate Playlist
                        </a>
                    </SongDescription>
                    <div style={{marginRight:"15px"}}>
                        <i className="fas fa-volume-up"></i>
                    </div>
                </FriendsAccount>
                <ButtonDiv>
                    <button tabIndex={0}>Find Friends</button>
                </ButtonDiv>
            </FriendsDiv>
        </RightSideDiv>
    )
}

export default RightSide;
