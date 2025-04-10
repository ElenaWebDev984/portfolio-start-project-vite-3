import {S} from './Main_Styles.ts'
import photo from '../../../assets/images/foto.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import {BtnGradient} from "../../../components/BtnGradient.tsx";
import * as React from "react";


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper justifyContent={'space-between'} alignItems={'center'} gap={'20px'} wrap={'wrap'}>
                    <S.ContentMain>
                        <S.Greeting>Hi there! 👋</S.Greeting>
                        <S.MainTitle>I'm <span>Elena</span><br/>a <span>web developer</span></S.MainTitle>
                        <S.MainText>I craft responsive websites where technologies meet creativity</S.MainText>
                        <S.ButtonWrapper>
                            <Button as='a' href={'#'} padding={'8px 16px'} width={'150px'} height={'40px'}
                                    btnType={'primary'}>Contact me!!!</Button>
                            <BtnGradient as='a' href={'#'} padding={'8px 16px'} width={'150px'} height={'40px'}>Download
                                CV</BtnGradient>
                        </S.ButtonWrapper>
                    </S.ContentMain>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="web developer portfolio"/>
                        {/*<AbstractSvg src={abstract} alt="frontend developer"/>*/}
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
