import React from 'react';
import { Button } from 'react-bootstrap'

import 네비게이션바 from "./Nav.js"

// 이미지
import 작품1 from '../img/portfolio1.png';
import 작품2 from '../img/portfolio2.png';
import 작품3 from '../img/portfolio3.png';
import 작품4 from '../img/portfolio4.png';
import 작품5 from '../img/portfolio5.png';
import 작품6 from '../img/portfolio6.png';
import 요약1 from '../img/post1.png'
import 요약2 from '../img/post2.png'
import 요약3 from '../img/post3.png'
import 요약4 from '../img/post4.png'
import 요약5 from '../img/post5.png'
import 요약6 from '../img/post6.png'
// css
import '../Css/Portfolio.css'


// 포트폴리오 화면
function PortFolio(){
    return (
      // JSX 문법 (데이터 바인딩 매우 간편)
      <div>
        <div>
          <네비게이션바></네비게이션바>
        </div>
        <div class="container">
          <div class="post-wrap"> 
                <div class="post"> 
                    <div class="post-front">
                        <div class="post-img"><img src={ 작품1 }></img></div>
                        <div class="post-info">
                            <span>2020년 7월~2020년 11월</span>
                            <h2>객체 추출 지원 웹사이트</h2>
                        </div>
                    </div>
                    <div class="post-back">
                        <div class="post-except">
                            <h2>작품설명</h2>
                            <p>
                                <img src={ 요약1 }/>
                            </p>
                            
                        </div>
                        
                        <a href="https://github.com/fila3894/DjangoProj"><Button variant="success">GitHub</Button></a>
                    </div>
                </div>
            </div>
          <div className="post-wrap"> 
              <div className="post"> 
                  <div className="post-front">
                      <div className="post-img"><img src={ 작품2 }></img></div>
                      <div className="post-info">
                          <span>2020년 9월~2020년 11월</span>
                          <h2>학교 주변 식당 안내 웹사이트</h2>
                      </div>
                  </div>
                  <div class="post-back">
                      <div class="post-except">
                          <h2>작품설명</h2>
                            <p>
                                <img src={ 요약2 }/>
                            </p>
                        </div>
                        <a href="https://github.com/fila3894/NodeJSProj"><Button variant="success">GitHub</Button></a>
                  </div>
              </div>
          </div>
          <div className="post-wrap"> 
                <div className="post"> 
                    <div className="post-front">
                        <div className="post-img"><img src={ 작품3 }></img></div>
                        <div className="post-info">
                            <span>2019년 공모전</span>
                            <h2>2019 LINC+ 창업 아이디어 경진대회</h2>
                        </div>
                    </div>
                    <div class="post-back">
                        <div class="post-except">
                            <h2>아이디어 요약</h2>
                            <p>
                                <img src={ 요약3 }/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          <div className="post-wrap"> 
              <div className="post"> 
                  <div className="post-front">
                      <div className="post-img"><img src={ 작품4 }></img></div>
                      <div className="post-info">
                          <span>2020년 공모전</span>
                          <h2>2020 Business Skill-Up</h2>
                      </div>
                  </div>
                  <div class="post-back">
                      <div class="post-except">
                          <h2>아이디어 요약</h2>
                            <p>
                                <img src={ 요약4 }/>
                            </p>
                        </div>
                        <a href="https://github.com/fila3894/Android-Studio"><Button variant="success">GitHub</Button></a>
                  </div>
              </div>
          </div>
          <div class="post-wrap">
              <div class="post">
                  <div class="post-front">
                      <div class="post-img"><img src={ 작품5 }></img></div>
                      <div class="post-info">
                          <span>2019년 연구원 프로젝트</span>
                          <h2>머신러닝 기반 미디어 배경제거 및 변환</h2>
                      </div>
                  </div>
                  <div class="post-back">
                      <div class="post-excerpt">
                          <h2>프로젝트 설명</h2>
                            <p>
                                <img src={ 요약5 }/>
                            </p>
                        </div>
                  </div>
              </div>
          </div>
          <div class="post-wrap">
              <div class="post">
                  <div class="post-front">
                      <div class="post-img"><img src={ 작품6 }></img></div>
                      <div class="post-info">
                          <span>2020년 연구원 프로젝트</span>
                          <h2>얼굴인식 기능 출입 헬스 게이트</h2>
                      </div>
                  </div>
                  <div class="post-back">
                      <div class="post-except">
                          <h2>프로젝트 설명</h2>
                            <p>
                                <img src={ 요약6 }/>
                            </p>
                        </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
      )
}

export default PortFolio;
