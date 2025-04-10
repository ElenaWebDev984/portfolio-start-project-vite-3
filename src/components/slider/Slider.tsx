import {S} from './Slider_Styles.ts'
import {FlexWrapper} from "../FlexWrapper.tsx";
import * as React from "react";


type SliderPropsType = {
    text?: string
    name?: string
}

export const Slider: React.FC<SliderPropsType> = (props: SliderPropsType) => {
    return (
        <S.Slider>
            <FlexWrapper>
                <S.Slide>
                    <S.Text>{props.text}</S.Text>
                    <S.Name>{props.name}</S.Name>
                </S.Slide>
            </FlexWrapper>
            <S.Pagination>
                <span></span>
                <span className={'active'}></span>
                <span></span>
            </S.Pagination>
        </S.Slider>
    );
};

