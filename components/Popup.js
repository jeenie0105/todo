import React, { useState } from 'react'
import "./Popup.css";

const Popup = ({title, body}) => {
    const [show, setShow] = useState(true);

    const openHandle = () => {
        setShow(false);
        // 닫기 버튼 클릭시만 닫힘
    };

    const checkHandle = (event) => {
      // event를 처리하는 함수 (event handler) : 첫번째 파라미터로 event를 전달 받음 
      console.log(event.target.checked);
    };

  return (
    <div className='popup'
        style={{ display : show ? "block" : "none"}}
    >
      <div>
        <div className='popup_title'>{title}</div>
        <div className='popup_body'>{body}</div>
        <div className='popup_foot'>
            <label htmlFor='oneday'>오늘 하루 열지 않음</label>
            {/* <input type="checkbox" id='oneday' onClick={checkHandle}></input> */}
            <input type="checkbox" id='oneday' onClick={(event) => checkHandle(event)}></input>
            <input type="button" id='close' value="닫기" onClick={openHandle}></input>
        </div>
      </div>
    </div>
  )
}

export default Popup