import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Article, TypeTitle} from "../../styles/BlockStyles";
import {FlexWrapper} from "../../components/FlexWrapper";
import {notesData, NoteBlock} from "../en-components/data/notesData";


type NotesListProps = {
    categoryKey: keyof typeof notesData;
    title: string
}


export const Notes = ({categoryKey}: NotesListProps) => {


    const [categoryNotes, setCategoryNotes] = useState(notesData[categoryKey]);

    useEffect(() => {
        setCategoryNotes(notesData[categoryKey]);
    }, [categoryKey]);


    return (
        <NotesBlock>
            <TypeTitle>{categoryNotes.title}</TypeTitle>

            <Article>
                <FlexWrapper
                    gap={'20px'}
                    margin={'0 0 20px 0'}
                    justify={'end'}
                    position={'relative'}
                >
                    {/* сюда потом добавим кнопки, фильтры, режимы */}
                </FlexWrapper>

                {categoryNotes.blocks.map((block, index) => renderBlock(block, index))}
            </Article>
        </NotesBlock>
    );
};

const renderBlock = (block: NoteBlock, index: number) => {
    switch (block.type) {
        case "h2":
            return <H2 key={index}>{block.content}</H2>;
        case "p":
            return <P key={index}>{block.content}</P>;
        case "ul":
            return (
                <Ul key={index}>
                    {block.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </Ul>
            );

        case "table":
            return (
                <TableWrapper key={index}>
                    <StyledTable>
                        <thead>
                        <tr>
                            {block.headers.map((header, idx) => (
                                <th key={idx}>{header}</th>
                            ))}
                        </tr>
                        </thead>

                        <tbody>
                        {block.rows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </StyledTable>
                </TableWrapper>
            );
        default:
            return null;
    }
};

const NotesBlock = styled.div`
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
`;

const H2 = styled.h2`
    margin: 20px 0 10px;
    font-size: 22px;
    font-weight: 600;
`;

const P = styled.p`
    margin: 10px 0;
    font-size: 16px;
    line-height: 1.6;
`;

const Ul = styled.ul`
    margin: 10px 0 20px 20px;

    li {
        margin-bottom: 6px;
        list-style: disc;
    }
`;


const TableWrapper = styled.div`
    overflow-x: auto;
    margin: 20px 0;
`;

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 15px;

    th,
    td {
        padding: 10px 12px;
        border: 1px solid #ddd;
        text-align: left;
        vertical-align: top;
    }

    th {
        background-color: #f3f3f3;
        font-weight: 600;
    }

    tbody tr:nth-child(even) {
        background-color: #fafafa;
    }
`;

