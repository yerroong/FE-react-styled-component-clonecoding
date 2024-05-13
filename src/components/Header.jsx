import styled from "styled-components";
import cameraImg from "../assets/camera.svg";
import hambugerImg from "../assets/hamburger.svg";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 55px;
  background-color: #343A30;
`;

const CameraIcon = styled.img`
  width: 25px;
  height: 25px;
  color: white;
  padding-left: 100px;
  justify-content: space-between;
`;

const HamburgerIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 100px;
  cursor: pointer; /* 커서 모양 변경 */
  border: 1px solid gray;
  border-radius: 20%;
`;

const Title = styled.h2`
  font-size: 15px;
  color: white;
  margin-right: auto;
  margin-left: 10px;
`;
const AlbumLink = styled.a`
  text-decoration: none; 
  color: inherit; 
`;

const Header = () => {
  return (
    <Wrapper>
      <a href="/">
        <CameraIcon src={cameraImg} />
      </a>
      <Title>
        <AlbumLink href="/">
          <h2>Album</h2>
        </AlbumLink>
      </Title>
      <HamburgerIcon src={hambugerImg} />
    </Wrapper>
  );
};

export default Header;
