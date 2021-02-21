import React,{useState,useEffect} from 'react';
import
    {
        ArrowIcon,
        MidFirstDiv,
        MidSectionDiv,
        SearchBarICon,
        SearchBarInput,
        SearchDiv,
        SearchBarDiv,
        AccountDiv,
        AccountImage,
        AccountName,
        DownArrow,
        MidSecondDiv,
        Title,
        Container,
        Row,
        TopPart,
        BottomPart,
        PlaylistsTitle,
        PlaylistsArrows,
        ImageAndTextDiv,
        ImageDiv,
        TextDiv,
        PlaylistName,
        Image,
        PlaylistDescription,
        PlaylistFollowers,
        SettingsDiv,
        IconsDiv,
        PlayButton,
        IconDiv,
} from '../styled-components/MidSectionStyledComponents';
import {motion} from "framer-motion";

const MidSection = () =>
{
    const [deleteButton, setDeleteButton] = useState( false );
    const [playButton, setPlayButton] = useState( false );
    const [heartButton, setHeartButton] = useState( false );
    const [changeColors, setChangeColors] = useState( false );

    useEffect(() => {
        
    }, [])

    const checkDeleteButton = (e) =>
    {
        if ( e.target.value.length > 0 )
        {
            setDeleteButton( true );
        }
        else
        {
            setDeleteButton( false );
        }
    }

    const handleScroll = (e) =>
    {
        if ( e.target.scrollTop > 0 )
        {
            setChangeColors( true );
        }
        else
        {
            setChangeColors( false );
        }
    }

    const searchBarVariants = {
        start: {
            background: "#373737",
            paddingTop: "2%",
            display: "flex",
            alignItems:"center",
            position:"sticky",
            zIndex:"1",
            width: " 100%",
            height:"8%",
            top:"0%"
        },
        finish: {
            background: "black",
            zIndex: "999",
            paddingTop: "2%",
            top: "0%",
            height:"8%"
        }
    };

    const animationVariants = {
        start: {
            display: "flex",
            alignItems: "flex-end",
            zIndex: "1",
            paddingLeft: "2.5%",
            paddingRight: "2.5%",
            paddingTop:"12%",
            position: "sticky",
            top: "0%",
            fontSize: "30px",
            border: "0px solid black",
            background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(55,55,55,1) 100%)"
        },
        finish: {
            display: "flex",
            paddingLeft: "2.5%",
            paddingRight: "2.5%",
            paddingTop:"2%",
            alignItems: "center",
            zIndex: "999",
            borderBottom: "1px solid rgba(232,230,230,0.25)",
            fontSize: "17px",
            top: "6%",
            background: "black",
        }
    };

    return (
        <MidSectionDiv onScroll={handleScroll} >
            <motion.MidFirstDiv variants={searchBarVariants} transition={{duration:.2} } initial="start" animate={changeColors ? "finish" : "start" }>
                <SearchDiv>
                    <ArrowIcon color="#5c5b5b" className="fas fa-chevron-left"></ArrowIcon>
                    <ArrowIcon hover className="fas fa-chevron-right"></ArrowIcon>
                    <SearchBarDiv>
                            <SearchBarICon className="fas fa-search"></SearchBarICon>
                            <SearchBarInput onChange={checkDeleteButton} bottom={deleteButton ? "0px" : "50px"} placeholder="Search"></SearchBarInput>
                        {deleteButton &&
                                <SearchBarICon delete className="fas fa-times"></SearchBarICon>
                        }
                    </SearchBarDiv>
                </SearchDiv>
                <AccountDiv>
                    <AccountImage src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"></AccountImage>
                    <AccountName>Evan Peterson</AccountName>
                    <DownArrow className="fas fa-chevron-down"></DownArrow>
                </AccountDiv>
            </motion.MidFirstDiv>
            <motion.MidSecondDiv variants={animationVariants} transition={{duration:.3} } initial="start" animate={changeColors ? "finish" : "start" }>
                <Title>Home</Title>
            </motion.MidSecondDiv>
            <Container>
                <Row>
                    <TopPart>
                        <PlaylistsTitle>
                            <h2>Shortcuts</h2>
                        </PlaylistsTitle>
                        <PlaylistsArrows>
                            <ArrowIcon color="#5c5b5b" className="fas fa-chevron-left"></ArrowIcon>
                            <ArrowIcon hover className="fas fa-chevron-right"></ArrowIcon>
                        </PlaylistsArrows>
                    </TopPart>
                    <BottomPart>
                        <ImageAndTextDiv>
                            <ImageDiv>
                                <Image src="https://daily-mix.scdn.co/covers/backtracks/PZN_Repeat_Rewind_LARGE-en.jpg"></Image>
                                <SettingsDiv>
                                    <IconsDiv>
                                        <IconDiv >
                                            <i  onClick={() => setHeartButton(!heartButton) } className={heartButton ? "fas fa-heart" : "far fa-heart"}></i>
                                        </IconDiv>
                                        <IconDiv relative>
                                            <PlayButton onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></PlayButton>
                                        </IconDiv>
                                        <IconDiv>
                                            <i class="fas fa-ellipsis-h"></i>
                                        </IconDiv>
                                    </IconsDiv>
                                </SettingsDiv>
                            </ImageDiv>
                            <TextDiv>
                                <PlaylistName>On Repeat</PlaylistName>
                                <PlaylistDescription>The songs you can't get enough of right now</PlaylistDescription>
                                <PlaylistFollowers>1 FOLLOWER</PlaylistFollowers>
                            </TextDiv>
                        </ImageAndTextDiv>
                        <ImageAndTextDiv secondImage>
                            <ImageDiv>
                                <Image src="https://smartcdn.prod.postmedia.digital/windsorstar/wp-content/uploads/2018/08/trippie-redd-cover.jpg"></Image>
                                    <SettingsDiv>
                                    <IconsDiv>
                                            <IconDiv >
                                                <i  onClick={() => setHeartButton(!heartButton) } className={heartButton ? "fas fa-heart" : "far fa-heart"}></i>
                                            </IconDiv>
                                            <IconDiv>
                                                <PlayButton onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></PlayButton>
                                            </IconDiv>
                                            <IconDiv>
                                                <i class="fas fa-ellipsis-h"></i>
                                            </IconDiv>
                                        </IconsDiv>
                                    </SettingsDiv>
                            </ImageDiv>
                            <TextDiv>
                                <PlaylistName>On Repeat</PlaylistName>
                                <PlaylistDescription>The songs you can't get enough of right now</PlaylistDescription>
                                <PlaylistFollowers>1 FOLLOWER</PlaylistFollowers>
                            </TextDiv>
                        </ImageAndTextDiv>
                        <ImageAndTextDiv thirdImage>
                            <ImageDiv >
                                <Image src="https://smartcdn.prod.postmedia.digital/windsorstar/wp-content/uploads/2018/08/trippie-redd-cover.jpg"></Image>
                                    <SettingsDiv>
                                        <IconsDiv>
                                            <IconDiv >
                                                <i  onClick={() => setHeartButton(!heartButton) } className={heartButton ? "fas fa-heart" : "far fa-heart"}></i>
                                            </IconDiv>
                                            <IconDiv>
                                                <PlayButton onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></PlayButton>
                                            </IconDiv>
                                            <IconDiv>
                                                <i class="fas fa-ellipsis-h"></i>
                                            </IconDiv>
                                        </IconsDiv>
                                    </SettingsDiv>
                            </ImageDiv>
                            <TextDiv>
                                <PlaylistName style={{textAlign:"center"}}>Bad Bunny</PlaylistName>
                                <PlaylistDescription></PlaylistDescription>
                                <PlaylistFollowers></PlaylistFollowers>
                            </TextDiv>
                        </ImageAndTextDiv>
                        <ImageAndTextDiv lastImage>
                            <ImageDiv>
                                <Image src="https://i.pinimg.com/736x/bf/0b/66/bf0b663faf1994e149414e34b6a2a5ef.jpg"></Image>
                                    <SettingsDiv>
                                    <IconsDiv>
                                            <IconDiv >
                                                <i  onClick={() => setHeartButton(!heartButton) } className={heartButton ? "fas fa-heart" : "far fa-heart"}></i>
                                            </IconDiv>
                                            <IconDiv>
                                                <PlayButton onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></PlayButton>
                                            </IconDiv>
                                            <IconDiv>
                                                <i class="fas fa-ellipsis-h"></i>
                                            </IconDiv>
                                        </IconsDiv>
                                    </SettingsDiv>
                            </ImageDiv>
                            <TextDiv>
                                <PlaylistName>On Repeat</PlaylistName>
                                <PlaylistDescription>The songs you can't get enough of right now</PlaylistDescription>
                                <PlaylistFollowers>1 FOLLOWER</PlaylistFollowers>
                            </TextDiv>
                        </ImageAndTextDiv>
                    </BottomPart>
                </Row>
                <Row>
                    <TopPart>
                        <PlaylistsTitle>
                            <h2>Shortcuts</h2>
                        </PlaylistsTitle>
                        <PlaylistsArrows>
                            <ArrowIcon color="#5c5b5b" className="fas fa-chevron-left"></ArrowIcon>
                            <ArrowIcon hover className="fas fa-chevron-right"></ArrowIcon>
                        </PlaylistsArrows>
                    </TopPart>
                    <BottomPart>
                        <ImageAndTextDiv>
                            <ImageDiv>
                                <Image src="https://smartcdn.prod.postmedia.digital/windsorstar/wp-content/uploads/2018/08/trippie-redd-cover.jpg"></Image>
                                    <SettingsDiv>
                                    <IconsDiv>
                                            <IconDiv >
                                                <i  onClick={() => setHeartButton(!heartButton) } className={heartButton ? "fas fa-heart" : "far fa-heart"}></i>
                                            </IconDiv>
                                            <IconDiv>
                                                <PlayButton onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></PlayButton>
                                            </IconDiv>
                                            <IconDiv>
                                                <i class="fas fa-ellipsis-h"></i>
                                            </IconDiv>
                                        </IconsDiv>
                                    </SettingsDiv>
                            </ImageDiv>
                            <TextDiv>
                                <PlaylistName>On Repeat</PlaylistName>
                                <PlaylistDescription>The songs you can't get enough of right now</PlaylistDescription>
                                <PlaylistFollowers>1 FOLLOWER</PlaylistFollowers>
                            </TextDiv>
                        </ImageAndTextDiv>
                        <ImageAndTextDiv secondImage>
                            <ImageDiv>
                                <Image src="https://i.pinimg.com/736x/bf/0b/66/bf0b663faf1994e149414e34b6a2a5ef.jpg"></Image>
                                    <SettingsDiv>
                                    <IconsDiv>
                                            <IconDiv >
                                                <i  onClick={() => setHeartButton(!heartButton) } className={heartButton ? "fas fa-heart" : "far fa-heart"}></i>
                                            </IconDiv>
                                            <IconDiv>
                                                <PlayButton onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></PlayButton>
                                            </IconDiv>
                                            <IconDiv>
                                                <i class="fas fa-ellipsis-h"></i>
                                            </IconDiv>
                                        </IconsDiv>
                                    </SettingsDiv>
                            </ImageDiv>
                            <TextDiv>
                                <PlaylistName>On Repeat</PlaylistName>
                                <PlaylistDescription>The songs you can't get enough of right now</PlaylistDescription>
                                <PlaylistFollowers>1 FOLLOWER</PlaylistFollowers>
                            </TextDiv>
                        </ImageAndTextDiv>
                        <ImageAndTextDiv thirdImage>
                            <ImageDiv style={{clipPath:"circle(50%)"}}>
                                <Image src="https://pyxis.nymag.com/v1/imgs/3a1/590/8f5ebf7b0b37bed6b276e98597f3fc5bd2-bad-bunny-covid.rsquare.w1200.jpg"></Image>
                                    <SettingsDiv>
                                        <IconsDiv>
                                            <IconDiv >
                                                <i  onClick={() => setHeartButton(!heartButton) } className={heartButton ? "fas fa-heart" : "far fa-heart"}></i>
                                            </IconDiv>
                                            <IconDiv>
                                                <PlayButton onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></PlayButton>
                                            </IconDiv>
                                            <IconDiv>
                                                <i class="fas fa-ellipsis-h"></i>
                                            </IconDiv>
                                        </IconsDiv>
                                    </SettingsDiv>
                            </ImageDiv>
                            <TextDiv>
                                <PlaylistName style={{textAlign:"center"}}>Bad Bunny</PlaylistName>
                                <PlaylistDescription></PlaylistDescription>
                                <PlaylistFollowers></PlaylistFollowers>
                            </TextDiv>
                        </ImageAndTextDiv>
                        <ImageAndTextDiv lastImage>
                            <ImageDiv>
                                <Image src="https://i.pinimg.com/736x/bf/0b/66/bf0b663faf1994e149414e34b6a2a5ef.jpg"></Image>
                                    <SettingsDiv>
                                        <IconsDiv>
                                            <IconDiv >
                                                <i  onClick={() => setHeartButton(!heartButton) } className={heartButton ? "fas fa-heart" : "far fa-heart"}></i>
                                            </IconDiv>
                                            <IconDiv>
                                                <PlayButton onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></PlayButton>
                                            </IconDiv>
                                            <IconDiv>
                                                <i class="fas fa-ellipsis-h"></i>
                                            </IconDiv>
                                        </IconsDiv>
                                    </SettingsDiv>
                            </ImageDiv>
                            <TextDiv>
                                <PlaylistName>On Repeat</PlaylistName>
                                <PlaylistDescription>The songs you can't get enough of right now</PlaylistDescription>
                                <PlaylistFollowers>1 FOLLOWER</PlaylistFollowers>
                            </TextDiv>
                        </ImageAndTextDiv>
                    </BottomPart>
                </Row>
                <Row>
                    <TopPart>
                        <PlaylistsTitle>
                            <h2>Shortcuts</h2>
                        </PlaylistsTitle>
                        <PlaylistsArrows>
                            <ArrowIcon color="#5c5b5b" className="fas fa-chevron-left"></ArrowIcon>
                            <ArrowIcon hover className="fas fa-chevron-right"></ArrowIcon>
                        </PlaylistsArrows>
                    </TopPart>
                    <BottomPart>
                        <ImageAndTextDiv>
                            <ImageDiv>
                                <Image src="https://i.pinimg.com/736x/bf/0b/66/bf0b663faf1994e149414e34b6a2a5ef.jpg"></Image>
                                    <SettingsDiv>
                                        <IconsDiv>
                                            <IconDiv >
                                                <i  onClick={() => setHeartButton(!heartButton) } className={heartButton ? "fas fa-heart" : "far fa-heart"}></i>
                                            </IconDiv>
                                            <IconDiv>
                                                <PlayButton onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></PlayButton>
                                            </IconDiv>
                                            <IconDiv>
                                                <i class="fas fa-ellipsis-h"></i>
                                            </IconDiv>
                                        </IconsDiv>
                                    </SettingsDiv>
                            </ImageDiv>
                            <TextDiv>
                                <PlaylistName>On Repeat</PlaylistName>
                                <PlaylistDescription>The songs you can't get enough of right now</PlaylistDescription>
                                <PlaylistFollowers>1 FOLLOWER</PlaylistFollowers>
                            </TextDiv>
                        </ImageAndTextDiv>
                        <ImageAndTextDiv secondImage>
                            <ImageDiv>
                                <Image src="https://i.pinimg.com/736x/bf/0b/66/bf0b663faf1994e149414e34b6a2a5ef.jpg"></Image>
                                    <SettingsDiv>
                                        <IconsDiv>
                                            <IconDiv >
                                                <i  onClick={() => setHeartButton(!heartButton) } className={heartButton ? "fas fa-heart" : "far fa-heart"}></i>
                                            </IconDiv>
                                            <IconDiv>
                                                <PlayButton onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></PlayButton>
                                            </IconDiv>
                                            <IconDiv>
                                                <i class="fas fa-ellipsis-h"></i>
                                            </IconDiv>
                                        </IconsDiv>
                                    </SettingsDiv>
                            </ImageDiv>
                            <TextDiv>
                                <PlaylistName>On Repeat</PlaylistName>
                                <PlaylistDescription>The songs you can't get enough of right now</PlaylistDescription>
                                <PlaylistFollowers>1 FOLLOWER</PlaylistFollowers>
                            </TextDiv>
                        </ImageAndTextDiv>
                        <ImageAndTextDiv thirdImage>
                            <ImageDiv>
                                <Image src="https://i.pinimg.com/736x/bf/0b/66/bf0b663faf1994e149414e34b6a2a5ef.jpg"></Image>
                                    <SettingsDiv>
                                        <IconsDiv>
                                            <IconDiv >
                                                <i  onClick={() => setHeartButton(!heartButton) } className={heartButton ? "fas fa-heart" : "far fa-heart"}></i>
                                            </IconDiv>
                                            <IconDiv>
                                                <PlayButton onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></PlayButton>
                                            </IconDiv>
                                            <IconDiv>
                                                <i class="fas fa-ellipsis-h"></i>
                                            </IconDiv>
                                        </IconsDiv>
                                    </SettingsDiv>
                            </ImageDiv>
                            <TextDiv>
                                <PlaylistName>On Repeat</PlaylistName>
                                <PlaylistDescription>The songs you can't get enough of right now</PlaylistDescription>
                                <PlaylistFollowers>1 FOLLOWER</PlaylistFollowers>
                            </TextDiv>
                        </ImageAndTextDiv>
                        <ImageAndTextDiv lastImage>
                            <ImageDiv>
                                <Image src="https://daily-mix.scdn.co/covers/backtracks/PZN_Repeat_Rewind_LARGE-en.jpg"></Image>
                                    <SettingsDiv>
                                        <IconsDiv>
                                            <IconDiv >
                                                <i  onClick={() => setHeartButton(!heartButton) } className={heartButton ? "fas fa-heart" : "far fa-heart"}></i>
                                            </IconDiv>
                                            <IconDiv>
                                                <PlayButton onClick={() => setPlayButton(!playButton) } className={playButton ? "far fa-pause-circle" : "far fa-play-circle"}></PlayButton>
                                            </IconDiv>
                                            <IconDiv>
                                                <i class="fas fa-ellipsis-h"></i>
                                            </IconDiv>
                                        </IconsDiv>
                                    </SettingsDiv>
                            </ImageDiv>
                            <TextDiv>
                                <PlaylistName>On Repeat</PlaylistName>
                                <PlaylistDescription>The songs you can't get enough of right now</PlaylistDescription>
                                <PlaylistFollowers>1 FOLLOWER</PlaylistFollowers>
                            </TextDiv>
                        </ImageAndTextDiv>
                    </BottomPart>
                </Row>
            </Container>
        </MidSectionDiv>
    )
}

export default MidSection;
