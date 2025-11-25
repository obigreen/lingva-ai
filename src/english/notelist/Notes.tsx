import React from 'react';
import styled from "styled-components";
import {Article, TypeTitle} from "../../styles/BlockStyles";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Button} from "../en-components/button/Button";
import {WrappButton} from "../wrapper/WrappButton";


export const Notes = () => {

    return (
        <NotesBlock>
            <TypeTitle></TypeTitle>

            <Article>
                <FlexWrapper gap={'20px'} margin={'0 0 20px 0'} justify={'end'} position={'relative'}>

                </FlexWrapper>


            </Article>

        </NotesBlock>
    )

}

const NotesBlock = styled.div`
`