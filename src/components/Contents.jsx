import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 80%;
  max-width: 800px;
  padding: 15px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.div` //Album example
  color: #343a40;
  font-weight: 300;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.div` //아래 내용
  font-size: large;
  color: #6c757d;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const Button = styled.button`
  width: 160px;
  height: 37px;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  color: white;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  margin: 8px 5px 0;
  border: none;
  cursor: pointer;

  &:nth-child(1) {
    background-color: #007bff;
  }

  &:nth-child(2) {
    background-color: #6c757d;
  }
`;

const Content = () => {
  return (
    <Container>
      <ContentWrapper>
        <Title>Album example</Title>
        <Subtitle>
          Something short and leading about the collection below—its contents, <br/>
          the creator, etc. Make it short and sweet, but not too short so folks
          don’t <br/>simply skip over it entirely.
        </Subtitle>
        <ButtonContainer>
          <Button>Main call to action</Button>
          <Button>Secondary action</Button>
        </ButtonContainer>
      </ContentWrapper>
    </Container>
  );
};

export default Content;
