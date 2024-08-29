import styled from 'styled-components';
import { useState } from 'react';


/* 아이콘셋 */
export function Iconset({ 포트폴리오열기, 폴더열기, 콘택트열기 }) {

  const [hoverState, setHoverState] = useState({
      portfolio: true,
      folder: true,
      works: true,
      stacks: true,
      contact: true,
  });
  const handleMouseEnter = (icon) => {
      setHoverState((prevState) => ({
          ...prevState,
          [icon]: false
      }));
  };
  const handleMouseLeave = (icon) => {
      setHoverState((prevState) => ({
          ...prevState,
          [icon]: true
      }));
  };

  return (
    <IconContainer>
      <Icon
        onClick={포트폴리오열기}
        onMouseEnter={() => handleMouseEnter('portfolio')} 
        onMouseLeave={() => handleMouseLeave('portfolio')}
      >
        <Upper>
          <IconPerson face></IconPerson>
          <IconPerson chest hover={hoverState.portfolio}></IconPerson>
        </Upper>
        <Lower>Portfolio</Lower>
      </Icon>
      <Icon 
        onClick={폴더열기}
        onMouseEnter={() => handleMouseEnter('folder')} 
        onMouseLeave={() => handleMouseLeave('folder')}
      >
        <Upper>
          <IconForder hover={hoverState.folder}/>
          <Content />
        </Upper>
        <Lower>Folder</Lower>
      </Icon>
      <Icon 
        onMouseEnter={() => handleMouseEnter('stacks')} 
        onMouseLeave={() => handleMouseLeave('stacks')}
      >
        <Upper>
          <IconGraph>
            <Piece hover={hoverState.stacks}/>
          </IconGraph>
        </Upper>
        <Lower>Stacks</Lower>
      </Icon>
      <Icon 
        onClick={콘택트열기}
        onMouseEnter={() => handleMouseEnter('contact')} 
        onMouseLeave={() => handleMouseLeave('contact')}
      >
        <Upper>
          <IconContact first hover={hoverState.contact}></IconContact>
          <IconContact second hover={hoverState.contact}></IconContact>
        </Upper>
        <Lower>Contact</Lower>
      </Icon>
    </IconContainer>
  );
}
/* 스타일 컴포넌트 */
const IconContainer = styled.div`
  position: absolute;
  left: 50%; top: 25%;
  transform: translate(-50%);
  width: fit-content;
  // border: 1px solid #fff;
  gap: 8px;
  display: flex;
`
const Icon = styled.button`
  position: relative;
  width: 100px; aspect-ratio: 1;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background-color: rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(10px);
  display: grid;
  grid-template-rows: 7fr 3fr;
  cursor: pointer;
  
  &:hover {
    border: 1px solid #fff;
  }
`
const Upper = styled.div`
  position: relative;
  height: 100%;
  text-align: center;

  ${props => props.ifit && `
    background: url(../public/img/icon/ifit.png) center 12px/48% no-repeat;
  `}
`
const Lower = styled.div`
  padding: 4px;
  color: #fff;
  font-size: 13px;
  display: grid;
  place-items: center;

  ${props => props.fontColor && `
    color: #000;
  `}
`
const IconPerson = styled.div`
  position: absolute;
  transform: translate(-50%);
  width: 16px; height: 16px;
  border-radius: 50%;
  background-color: #eee;

  ${props => props.face && `
    left: 50%; bottom: 34px;
  `}

  ${props => props.chest && `
    left: 50%; bottom: 12px;
    width: ${props.hover ? '' : '36px'};
    height: ${props.hover ? '' : '18px'};
    border-radius: ${props.hover ? '' : '100% 100% 50% 50%'};
  `}

`
const IconForder = styled.div`
  position: absolute;
  left: 50%; bottom: 12px;
  transform: translate(-50%);
  width: 54px; height: 36px;
  border-radius: 0 4px 4px 4px;
  background-color: ${({ hover }) => (hover ? '#eee' : 'rgba(255, 255, 255, 0.4)')};
  
  &::before {
    position: absolute;
    left: 0; top: -6px;
    content: "";
    width: 40%; height: 6px;
    background-color: #ddd;
    border-radius: 4px 4px 0 0;
  }
`
const IconGraph = styled.div`
  position: absolute;
  left: 50%; bottom: 8px;
  transform: translate(-50%);
  width: 50%; aspect-ratio: 1;
  background-color: #eee;
  border-radius: 50% 0 50% 50%;

  &::before {
    position: absolute;
    right: -1px; top: 0;
    content: "";
    width: 50%; aspect-ratio: 1;
    background-color: rgb(23, 23, 23);
  }
`
const IconContact = styled.div`
  position: absolute;
  width: 36px; aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid #fff;
  backdrop-filter: blur(10px);

  ${props => props.first && `
    left: 50%; bottom: 24px;
    transform: translate(-75%);
    z-index: ${props.hover ? '1' : '0'};
    background-color: ${props.hover ? '' : '#eee'};
  `}

  ${props => props.second && `
    left: 50%; bottom: 4px;
    transform: translate(-25%);
    z-index: ${props.hover ? '0' : '1'};
    background-color: ${props.hover ? '#eee' : ''};
  `}
`
const Content = styled.div`
  position: absolute;
  left: 50%; bottom: 17px;
  transform: translate(-50%);
  width: 44px; height: 26px;
  border-radius: 4px;
  background-color: #eee;
`
const Piece = styled.div`
  position: absolute;
  right: ${({ hover }) => (hover ? '0' : '-6px')};
  top: ${({ hover }) => (hover ? '0' : '-6px')};
  width: 50%; height: calc(50% + 1px);
  border-radius: 0 100% 0 0;
  border: ${({ hover }) => (hover ? '' : '1px solid #eee')};
  background-color: ${({ hover }) => (hover ? '#eee' : 'transprent')};
  transition: all 0.2s;
`
