import React from 'react';
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
        SettingsDiv
    } from '../styled-components/MidSectionStyledComponents';

const MidSection = () => {
    return (
        <MidSectionDiv>
            <MidFirstDiv>
                <SearchDiv>
                    <ArrowIcon className="fas fa-chevron-left"></ArrowIcon>
                    <ArrowIcon className="fas fa-chevron-right"></ArrowIcon>
                    <SearchBarDiv>
                        <SearchBarICon className="fas fa-search"></SearchBarICon>
                        <SearchBarInput placeholder="Search"></SearchBarInput> 
                    </SearchBarDiv>
                </SearchDiv>
                <AccountDiv>
                    <AccountImage src="data:image/jpeg;base64,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"></AccountImage>
                    <AccountName>Evan Peterson</AccountName>
                    <DownArrow className="fas fa-chevron-down"></DownArrow>
                </AccountDiv>
            </MidFirstDiv>
            <MidSecondDiv>
                <Title>Home</Title>
            </MidSecondDiv>
            <Container>
                <Row>
                    <TopPart>
                        <PlaylistsTitle>
                            <h2>Shortcuts</h2>
                        </PlaylistsTitle>
                        <PlaylistsArrows>
                            <ArrowIcon className="fas fa-chevron-left"></ArrowIcon>
                            <ArrowIcon className="fas fa-chevron-right"></ArrowIcon>
                        </PlaylistsArrows>
                    </TopPart>
                    <BottomPart>
                        <ImageAndTextDiv>
                            <ImageDiv>
                                <Image src="https://i.pinimg.com/736x/bf/0b/66/bf0b663faf1994e149414e34b6a2a5ef.jpg"></Image>
                                <SettingsDiv>
                                        Hello
                                </SettingsDiv>
                            </ImageDiv>
                            <TextDiv>
                                <PlaylistName>On Repeat</PlaylistName>
                                <PlaylistDescription>The songs you can't get enough of right now</PlaylistDescription>
                                <PlaylistFollowers>1 FOLLOWER</PlaylistFollowers>
                            </TextDiv>
                        </ImageAndTextDiv>
                        <ImageAndTextDiv>
                            <ImageDiv>
                            <Image src="https://i.pinimg.com/736x/bf/0b/66/bf0b663faf1994e149414e34b6a2a5ef.jpg"></Image>
                            </ImageDiv>
                            <TextDiv>
                                <PlaylistName>On Repeat</PlaylistName>
                                <PlaylistDescription>The songs you can't get enough of right now</PlaylistDescription>
                                <PlaylistFollowers>1 FOLLOWER</PlaylistFollowers>
                            </TextDiv>
                        </ImageAndTextDiv>
                        <ImageAndTextDiv>
                            <ImageDiv>
                            <Image src="https://i.pinimg.com/736x/bf/0b/66/bf0b663faf1994e149414e34b6a2a5ef.jpg"></Image>
                            </ImageDiv>
                            <TextDiv>
                                <PlaylistName>On Repeat</PlaylistName>
                                <PlaylistDescription>The songs you can't get enough of right now</PlaylistDescription>
                                <PlaylistFollowers>1 FOLLOWER</PlaylistFollowers>
                            </TextDiv>
                        </ImageAndTextDiv>
                        <ImageAndTextDiv lastImage>
                            <ImageDiv>
                            <Image src="https://i.pinimg.com/736x/bf/0b/66/bf0b663faf1994e149414e34b6a2a5ef.jpg"></Image>
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
                            <ArrowIcon className="fas fa-chevron-left"></ArrowIcon>
                            <ArrowIcon className="fas fa-chevron-right"></ArrowIcon>
                        </PlaylistsArrows>
                    </TopPart>
                    <BottomPart>
                    <ImageAndTextDiv>
                            <ImageDiv>
                                <Image src="https://i.pinimg.com/736x/bf/0b/66/bf0b663faf1994e149414e34b6a2a5ef.jpg"></Image>
                            </ImageDiv>
                            <TextDiv>
                                <PlaylistName>On Repeat</PlaylistName>
                                <PlaylistDescription>The songs you can't get enough of right now</PlaylistDescription>
                                <PlaylistFollowers>1 FOLLOWER</PlaylistFollowers>
                            </TextDiv>
                        </ImageAndTextDiv>
                        <ImageAndTextDiv>
                            <ImageDiv>
                            <Image src="https://i.pinimg.com/736x/bf/0b/66/bf0b663faf1994e149414e34b6a2a5ef.jpg"></Image>
                            </ImageDiv>
                            <TextDiv>
                                <PlaylistName>On Repeat</PlaylistName>
                                <PlaylistDescription>The songs you can't get enough of right now</PlaylistDescription>
                                <PlaylistFollowers>1 FOLLOWER</PlaylistFollowers>
                            </TextDiv>
                        </ImageAndTextDiv>
                        <ImageAndTextDiv>
                            <ImageDiv>
                            <Image src="https://i.pinimg.com/736x/bf/0b/66/bf0b663faf1994e149414e34b6a2a5ef.jpg"></Image>
                            </ImageDiv>
                            <TextDiv>
                                <PlaylistName>On Repeat</PlaylistName>
                                <PlaylistDescription>The songs you can't get enough of right now</PlaylistDescription>
                                <PlaylistFollowers>1 FOLLOWER</PlaylistFollowers>
                            </TextDiv>
                        </ImageAndTextDiv>
                        <ImageAndTextDiv lastImage>
                            <ImageDiv>
                            <Image src="https://i.pinimg.com/736x/bf/0b/66/bf0b663faf1994e149414e34b6a2a5ef.jpg"></Image>
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
                            <ArrowIcon className="fas fa-chevron-left"></ArrowIcon>
                            <ArrowIcon className="fas fa-chevron-right"></ArrowIcon>
                        </PlaylistsArrows>
                    </TopPart>
                    <BottomPart>
                    <ImageAndTextDiv>
                            <ImageDiv>
                            <Image src="https://i.pinimg.com/736x/bf/0b/66/bf0b663faf1994e149414e34b6a2a5ef.jpg"></Image>
                            </ImageDiv>
                            <TextDiv>
                                <PlaylistName>On Repeat</PlaylistName>
                                <PlaylistDescription>The songs you can't get enough of right now</PlaylistDescription>
                                <PlaylistFollowers>1 FOLLOWER</PlaylistFollowers>
                            </TextDiv>
                        </ImageAndTextDiv>
                        <ImageAndTextDiv>
                            <ImageDiv>
                            <Image src="https://i.pinimg.com/736x/bf/0b/66/bf0b663faf1994e149414e34b6a2a5ef.jpg"></Image>
                            </ImageDiv>
                            <TextDiv>
                                <PlaylistName>On Repeat</PlaylistName>
                                <PlaylistDescription>The songs you can't get enough of right now</PlaylistDescription>
                                <PlaylistFollowers>1 FOLLOWER</PlaylistFollowers>
                            </TextDiv>
                        </ImageAndTextDiv>
                        <ImageAndTextDiv>
                            <ImageDiv>
                            <Image src="https://i.pinimg.com/736x/bf/0b/66/bf0b663faf1994e149414e34b6a2a5ef.jpg"></Image>
                            </ImageDiv>
                            <TextDiv>
                                <PlaylistName>On Repeat</PlaylistName>
                                <PlaylistDescription>The songs you can't get enough of right now</PlaylistDescription>
                                <PlaylistFollowers>1 FOLLOWER</PlaylistFollowers>
                            </TextDiv>
                        </ImageAndTextDiv>
                        <ImageAndTextDiv lastImage>
                            <ImageDiv>
                            <Image src="https://i.pinimg.com/736x/bf/0b/66/bf0b663faf1994e149414e34b6a2a5ef.jpg"></Image>
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
