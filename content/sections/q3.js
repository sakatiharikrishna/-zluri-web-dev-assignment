import React, { useState } from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";


const Q3 = () => {
    const [showddOption, setShowddOption] = useState(false);
    const [ddValue, setDdValue] = useState("Select Option");
    const selectDropdown = () => {
        setShowddOption(!showddOption);
    }
    const listSelect = (value) => {
        if (value) {
            setDdValue(value);
            setShowddOption(!showddOption);
        }
    }
    return (
        <StyledWrapper>
            <StyledContainer >
                <Title>
                    <h3>
                        <span>Task 3:</span> Build a dropdown
                    </h3>
                    <p>Your objective is to replicate the design and functionality of the given Figma design. Pay attention to details such as colors, fonts, and spacing to achieve a faithful representation of the design.</p>
                </Title>
                <QuestionsGrid>
                    <AnswerDiv>
                        <a href="https://www.figma.com/file/kPxYk2EWTMsBmx4lAc92ni/Web-Dev-Assignment?type=design&node-id=16-26&mode=design&t=LMCvfVQBL3S5dApY-0" target="_blank" ><FigmaButton>Figma</FigmaButton></a>
                        <a href="https://www.figma.com/proto/kPxYk2EWTMsBmx4lAc92ni/Web-Dev-Assignment?type=design&node-id=36-670&t=56Qr3ehXorgFodbH-1&scaling=min-zoom&page-id=36%3A647&starting-point-node-id=36%3A670" target="_blank" ><PrototypeButton>Prototype</PrototypeButton></a>
                    </AnswerDiv>
                </QuestionsGrid>
                <SelectDropdownDiv>
                    <div className="dd-select">
                        <button className={`${ddValue !==
                             "Select Option" && "dd-inputselected" } ${showddOption && "dd-inputclicked" } dd-input`} onClick={selectDropdown}>
                            {ddValue} {showddOption ?<span> &#9206; </span> : <span>  &#9207;</span>}

                        </button>
                        {showddOption ?
                            <div className="dd-list">
                                <ul>
                                    <li onClick={() => listSelect("Mountain")}>Mountain</li>
                                    <li onClick={() => listSelect("Forest")}>Forest</li>
                                    <li onClick={() => listSelect("Desert")}>Desert</li>
                                    <li onClick={() => listSelect("Ocean")}>Ocean</li>
                                </ul>
                            </div> : ""
                        }
                    </div>
                </SelectDropdownDiv>
            </StyledContainer>
        </StyledWrapper>
    )
}

export default Q3

const StyledWrapper = styled(Wrapper)`
`
const Title = styled.div`
h3{
    font-size: 32px;
font-family: Lexend Medium;
font-style: normal;
font-weight: 500;
line-height: 40px;
letter-spacing: -0.4px;
    span{
        background:#FAE090;
    }
}
p{
    font-size: 18px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`

const SelectDropdownDiv = styled.div`

    button{
        padding:10px;
 background:#ffffff;
 border:solid 1px #f3f3f3;
 width:200px;
 border-radius:4px;
 text-align:left;
 margin:10px 10px 0px 10px;
 cursor:pointer;
 span{
    font-size:20px;
    float:right;
 }
    }
    button:hover{
        border:solid 1px blue;
    }
    .dd-inputselected{
        background:#e1e8f8;
    }
    .dd-inputclicked{
        border:solid 1px blue;
    }
    .dd-list{
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        width:200px;
        margin:0px 10px;
        ul{
            margin: 0px;
            list-style: none;
            padding: 5px 0px;
            li{
                margin: 5px 10px;
                padding: 5px 10px;
            }
            li:hover{
                margin: 5px 10px;
                padding: 5px 10px;
                background:#e1e8f8;
                border-radius:4px;
            }
        }
     }

`
const QuestionsGrid = styled.div`
 select{
    width:200px;
    padding: 5px;
    margin:10px;
    height:32px;
    border-radius:4px;
    .fsdsgd{
        width:200px;
        padding: 5px;
        margin:10px;
        height:32px;
        border-radius:4px;
    }
 }

`
const StyledContainer = styled(Container)`
margin-top:0;
`

const AnswerDiv = styled.div`
align-self:center;
display: flex;
flex-direction:row;
button{
    margin:0 10px;
}
`
const FigmaButton = styled.button`
border-radius: 40px;
border: 1px solid #2684FE;
background: #2684FE;
min-width:150px;
height: 54px;
padding: 6px 14px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
color: #FFF;
text-align: center;
font-size: 16px;
font-family: Lexend Bold;
font-style: normal;
font-weight: 700;
line-height: 160%;
cursor:pointer;
`
const PrototypeButton = styled.button`
border-radius: 40px;
border: 1px solid #2684FE;
background: #FFFFFF;
min-width:150px;
height: 54px;
padding: 6px 14px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
color: #2684FE;
text-align: center;
font-size: 16px;
font-family: Lexend Bold;
font-style: normal;
font-weight: 700;
line-height: 160%;
cursor:pointer;
`