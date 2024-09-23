import './Interface.css';
import styled from 'styled-components';


/* 윈도우창, 타이틀바, 컨테이너 */
export function Window({ 닫기, tabText, children, ...props }) {
  return (
    <div className="Window" {...props}>
      <div id="Titlebar">
        <Restore />
        <Minimize />
        <Close onClick={닫기} />
        <div id="Tab">
          {tabText}
          <button onClick={닫기}></button>
        </div>
      </div>
      <div id="Searchbar">
        <Left />
        <Right />
        <div></div>
      </div>
      {children}
    </div>
  );
}
/* 스타일 컴포넌트 */
const Restore = styled.button`
  height: 100%; aspect-ratio: 1.2 / 1;
  display: grid;
  place-items: center;
  background: url(${process.env.PUBLIC_URL}/img/icon/restore.png) center/34% no-repeat;

  &:hover {
    background-color: #ccc;
  }
`
const Minimize = styled.button`
  height: 100%; aspect-ratio: 1.2 / 1;
  display: grid;
  place-items: center;
  background: url(${process.env.PUBLIC_URL}/img/icon/minimize.png) center/34% no-repeat;

  &:hover {
    background: url(${process.env.PUBLIC_URL}/img/icon/maximize.png) center/34% no-repeat;
    background-color: #ccc;
  }
`
const Close = styled.button`
  height: 100%; aspect-ratio: 1.2 / 1;
  display: grid;
  place-items: center;
  background: url(${process.env.PUBLIC_URL}/img/icon/close_blk.png) center/34% no-repeat;

  &:hover {
    background: url(${process.env.PUBLIC_URL}/img/icon/close.png) center/34% no-repeat;
    background-color: #F05A5A;
  }
`
const Left = styled.button`
  background: url(${process.env.PUBLIC_URL}/img/icon/chevron_l_blk_b.png) center/40% no-repeat;
`
const Right = styled.button`
  background: url(${process.env.PUBLIC_URL}/img/icon/chevron_r_blk_b.png) center/40% no-repeat;
`