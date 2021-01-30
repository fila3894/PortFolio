import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Collapse from 'react-bootstrap/Collapse'
import { Button } from 'react-bootstrap';
//css
import '../Css/Home.css'

// 홈화면
function Home(){
    const [open, setOpen] = useState(false);
    return(
      <div className="홈">
        <div class="wrap">
        <div class="line">
            <div class="left">
              <div class="content">
                <span class="spanSlow">YANG</span>
              </div>
            </div>
              <div class="right">
              <div class="content">
                <span class="spanSlow">YANG</span>
              </div>
            </div>
          </div>
          <div class="line">
            <div class="left">
              <div class="content">
                <span class="spanSlow">PORT</span>
              </div>
            </div>
              <div class="right">
              <div class="content">
                <span class="spanSlow">PORT</span>
              </div>
            </div>
          </div>
          <div class="line">
            <div class="left">
              <div class="content">
                <span class="spanSlow">FOLIO</span>
              </div>
            </div>
              <div class="right">
              <div class="content">
                <span class="spanSlow">FOLIO</span>
              </div>
            </div>
          </div>
      </div>
        <div className="버튼">
          <>
            <Button variant="secondary"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              이동
            </Button>
            <blockquote></blockquote>
            <Collapse in={open}>
              <div id="example-collapse-text">
                <Link to="/portfolio"><Button variant="secondary">포트폴리오</Button></Link>
                <blockquote></blockquote>
                <Link to="/description"><Button variant="secondary">자기소개서</Button></Link>
                <blockquote></blockquote>
                <a href="https://github.com/fila3894"><Button variant="success">GitHub</Button></a>
              </div>
            </Collapse>
          </>
        </div>
      </div>
    )
  }

export default Home;
