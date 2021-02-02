import React from 'react';
import
    {
        LeftSideDiv,
        FirstDiv,
        MoreOptions,
        SecondDiv,
        PlaylistsDiv,
        NewPlaylistDiv,
        PlaylistDiv,
        PlaylistHeader,
        PlaylistSongs,
        AddPlaylistDiv,
        NewPlaylistIcon,
        NewPlaylistParagraph,
    } from '../styled-components/LeftSideStyledComponents';
import IconAndParagraph from "./IconAndParagraph";

const LeftSide = () => {

    
    return (
        <LeftSideDiv>
            <FirstDiv>
                <MoreOptions></MoreOptions>
            </FirstDiv>
            <SecondDiv>
                <IconAndParagraph icon="fas fa-home" words="Home"/>
                <IconAndParagraph icon="fas fa-archive" words="Browse"/>
                <IconAndParagraph icon="fas fa-broadcast-tower" words="Radio"/>
            </SecondDiv>
            <PlaylistsDiv>
                <PlaylistDiv>
                    <PlaylistHeader>YOUR PLAYLISTS</PlaylistHeader>
                    <PlaylistSongs>Albums</PlaylistSongs>
                    <PlaylistSongs>Liked Songs</PlaylistSongs>
                    <PlaylistSongs>RaPlaylistSongs</PlaylistSongs>
                    <PlaylistSongs>EDM</PlaylistSongs>
                    <PlaylistSongs>The best of 2018</PlaylistSongs>
                    <PlaylistSongs>Country Music</PlaylistSongs>
                </PlaylistDiv>
                <PlaylistDiv>
                    <PlaylistHeader>YOUR PLAYLISTS</PlaylistHeader>
                    <PlaylistSongs>Albums</PlaylistSongs>
                    <PlaylistSongs>Liked Songs</PlaylistSongs>
                    <PlaylistSongs>RaPlaylistSongs</PlaylistSongs>
                    <PlaylistSongs>EDM</PlaylistSongs>
                    <PlaylistSongs>The best of 2018</PlaylistSongs>
                    <PlaylistSongs>Country Music</PlaylistSongs>
                </PlaylistDiv>
                <PlaylistDiv>
                    <PlaylistHeader>YOUR PLAYLISTS</PlaylistHeader>
                    <PlaylistSongs>Albums</PlaylistSongs>
                    <PlaylistSongs>Liked Songs</PlaylistSongs>
                    <PlaylistSongs>RaPlaylistSongs</PlaylistSongs>
                    <PlaylistSongs>EDM</PlaylistSongs>
                    <PlaylistSongs>The best of 2018</PlaylistSongs>
                    <PlaylistSongs>Country Music</PlaylistSongs>
                </PlaylistDiv>
                <PlaylistDiv>
                    <PlaylistHeader>YOUR PLAYLISTS</PlaylistHeader>
                    <PlaylistSongs>Albums</PlaylistSongs>
                    <PlaylistSongs>Liked Songs</PlaylistSongs>
                    <PlaylistSongs>RaPlaylistSongs</PlaylistSongs>
                    <PlaylistSongs>EDM</PlaylistSongs>
                    <PlaylistSongs>The best of 2018</PlaylistSongs>
                    <PlaylistSongs>Country Music</PlaylistSongs>
                </PlaylistDiv>
            </PlaylistsDiv>
            <NewPlaylistDiv>
                <AddPlaylistDiv>
                        <NewPlaylistIcon className="fas fa-plus-circle"></NewPlaylistIcon>
                        <NewPlaylistParagraph>New Playlist</NewPlaylistParagraph>
                </AddPlaylistDiv>
            </NewPlaylistDiv>
        </LeftSideDiv>
    )
}

export default LeftSide;
