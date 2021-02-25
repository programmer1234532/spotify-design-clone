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
                <MoreOptions tabIndex={0}></MoreOptions>
            </FirstDiv>
            <SecondDiv>
                <IconAndParagraph icon="fas fa-home" words="Home"/>
                <IconAndParagraph icon="fas fa-archive" words="Browse"/>
                <IconAndParagraph icon="fas fa-broadcast-tower" words="Radio"/>
            </SecondDiv>
            <PlaylistsDiv>
                <PlaylistDiv>
                    <PlaylistHeader>YOUR PLAYLISTS</PlaylistHeader>
                    <PlaylistSongs tabIndex={0}>Albums</PlaylistSongs>
                    <PlaylistSongs tabIndex={0}>Liked Songs fssssssssssssssssssssssss</PlaylistSongs>
                    <PlaylistSongs tabIndex={0}>RaPlaylistSongs</PlaylistSongs>
                    <PlaylistSongs tabIndex={0}>EDM</PlaylistSongs>
                    <PlaylistSongs tabIndex={0}>The best of 2018</PlaylistSongs>
                    <PlaylistSongs tabIndex={0}>Country Music</PlaylistSongs>
                </PlaylistDiv>
                <PlaylistDiv>
                    <PlaylistHeader>YOUR PLAYLISTS</PlaylistHeader>
                    <PlaylistSongs tabIndex={0}>Albums</PlaylistSongs>
                    <PlaylistSongs tabIndex={0}>Liked Songs</PlaylistSongs>
                    <PlaylistSongs tabIndex={0}>RaPlaylistSongs</PlaylistSongs>
                    <PlaylistSongs tabIndex={0}>EDM</PlaylistSongs>
                    <PlaylistSongs tabIndex={0}>The best of 2018</PlaylistSongs>
                    <PlaylistSongs tabIndex={0}>Country Music</PlaylistSongs>
                </PlaylistDiv>
                <PlaylistDiv>
                    <PlaylistHeader>YOUR PLAYLISTS</PlaylistHeader>
                    <PlaylistSongs tabIndex={0}>Albums</PlaylistSongs>
                    <PlaylistSongs tabIndex={0}>Liked Songs</PlaylistSongs>
                    <PlaylistSongs tabIndex={0}>RaPlaylistSongs</PlaylistSongs>
                    <PlaylistSongs tabIndex={0}>EDM</PlaylistSongs>
                    <PlaylistSongs tabIndex={0}>The best of 2018</PlaylistSongs>
                    <PlaylistSongs tabIndex={0}>Country Music</PlaylistSongs>
                </PlaylistDiv>
                <PlaylistDiv>
                    <PlaylistHeader>YOUR PLAYLISTS</PlaylistHeader>
                    <PlaylistSongs tabIndex={0}>Albums</PlaylistSongs>
                    <PlaylistSongs tabIndex={0}>Liked Songs</PlaylistSongs>
                    <PlaylistSongs tabIndex={0}>RaPlaylistSongs</PlaylistSongs>
                    <PlaylistSongs tabIndex={0}>EDM</PlaylistSongs>
                    <PlaylistSongs tabIndex={0}>The best of 2018</PlaylistSongs>
                    <PlaylistSongs tabIndex={0}>Country Music</PlaylistSongs>
                </PlaylistDiv>
            </PlaylistsDiv>
            <NewPlaylistDiv>
                <AddPlaylistDiv>
                        <NewPlaylistIcon tabIndex={0} className="fas fa-plus-circle"></NewPlaylistIcon>
                        <NewPlaylistParagraph>New Playlist</NewPlaylistParagraph>
                </AddPlaylistDiv>
            </NewPlaylistDiv>
        </LeftSideDiv>
    )
}

export default LeftSide;
