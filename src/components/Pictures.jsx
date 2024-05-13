import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    background-color: #f8f9fa;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 3rem 1rem;
`
const Thumbnail = styled.div`
    width: 100%;
    height: 220px;
    background-size: cover;
    background-position: center;
    border-radius: 0.5rem; 
    background-image: url('/src/assets/zzz.jpg');
`

const MainWrapper = styled.div`
    width: calc(33.33% - 20px);
    margin: 0.5; 
    border: 1px solid lightgray;
    border-radius: 0.5rem;
`

const WordWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    padding-top: 0px;
    padding-bottom: 15px;
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: none;
`
const Button = styled.button`
    background-color: #f8f9fa;
    padding: 7px;
    border: none;
    cursor: pointer;
    color: #565d63;
    border-top-left-radius: ${props => props.edit ? '0' : '0.5rem'};
    border-bottom-left-radius: ${props => props.edit ? '0' : '0.5rem'};
    border-top-right-radius: ${props => props.view ? '0' : '0.5rem'};
    border-bottom-right-radius: ${props => props.view ? '0' : '0.5rem'};
    margin-right: ${props => props.edit ? '5px' : '0'};
    border: 1px solid gray; // 테두리 색상
    position: relative;
    &:hover {
        background-color: gray; // 호버시 배경색 변경
        color: white;
    }
 
`;


const Time = styled.span`
    font-size: 13px;
    color:#565d63; 
    margin-left: 5px;
`
const P = styled.p`
    color: black;
    padding: 1rem;
`;

const Pictures = ()=>{
    return(
        <Wrapper>
            <Card /><Card /><Card />
            <Card /><Card /><Card />
            <Card /><Card /><Card />
        </Wrapper>
    )
}


const Card = ()=>{
    return(
        <MainWrapper>
            <Thumbnail></Thumbnail>
            <P>This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.</P>
            <WordWrapper>
                <ButtonWrapper>
                    <Button>View</Button>
                    <Button>Edit</Button>
                </ButtonWrapper>
                
                <Time>9 mins</Time>
            </WordWrapper>
        </MainWrapper>
    )
}

export default Pictures;