import React from 'react';

// 컴포넌트
import 네비게이션바 from "./Nav.js"
import SimpleSlider from "./Slider.js"

// 자기소개 화면(description)
function 자기소개() {
    return(
        <div>
            <네비게이션바></네비게이션바>
            <SimpleSlider></SimpleSlider>
        </div>
    )
}

export default 자기소개;