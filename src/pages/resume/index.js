import * as React from "react"


import Layout from "../../components/layout"
import Seo from "../../components/seo"

import "./resume.scss"

const Index = ({ data, location }) => {
  
  const siteTitle = ''

  

  

  return (
    <div>
      {/* <header>
        header
      </header> */}

      <Layout location={location} title={siteTitle}>
        <main className="resume">
          <section>              
            <h1>
              안녕하세요,<br/>
              웹애플리케이션 개발자,<br/>
              김정빈입니다.
            </h1>
            <p className="big">  
            6년차 웹 개발자로서 다양한 기술을 활용하여<br/>
            사용자 친화적이고 세련된 인터페이스 구현과<br/>
            더 나은 사용자 경험, 효율적인 솔루션을 제공하기 위해 <br/>
            끊임없이 노력하고 있습니다.              
            </p>

            {/* <p className="big">              
            프론트엔드 백엔드 둘다 작업이 가능하고,<br/> 
            더 선호하는 업무는 프론트엔드 입니다.<br/>
            업무 능력에 뒤쳐지지 않고, 개발 지식을 함양하기 위해<br/>
            최신 기술 동향에 관심을 가지고 따라가려 노력합니다.         
            </p> */}
          </section>

          <section>
            <h2>Skills</h2>

            <div className="item">
              <div className="left">
                <h3>Language</h3>
              </div>
              <div>
                <h4>
                  Javascript / Python / Java<br/>
                  HTML / CSS<br/>                   
                  SQL
                  </h4>
                <p>
                  웹 애플리케이션 개발에 필요한 언어를 주로 사용합니다.<br/>
                  서버측 개발언어 보다 클라이언트측 개발언어 사용이 익숙합니다.
                </p>                
              </div>
            
            </div>

            <div className="item">
              <div className="left">
                <h3>Frontend</h3>
              </div>
              <div>
                <h4>
                  Vue.js / React / Svelte<br/>
                  jQuery
                </h4>
                <p>
                  모던한 웹 개발을 위한 SPA 프레임워크를 사용하여 개발하는것을 선호합니다.<br/>
                  클라이언트측 개발을 할 때 가장 흥미를 느끼며 업무에 임합니다.
                </p>                
              </div>
            
            </div>

            <div className="item">
              <div className="left">
                <h3>Backend</h3>
              </div>
              <div>
                <h4>
                  Django / Spring Framework / Node.js / Firebase
                </h4>
                <p>
                  서버의 세팅이나, 성능향상 등의 백엔드 개발이나 지식에 조예가 깊은편은 아니나, 
                  서비스단의 비즈니스 로직 작성 및 기능구현에 필요한것을 찾아서 해결합니다.
                </p>                
              </div>
            
            </div>

            <div className="item">
              <div className="left">
                <h3>Devops</h3>
              </div>
              <div>
                  <h4>
                  Docker, AWS, Git
                  </h4>
                <p>
                  AWS EC2, S3, RDS 사용 경험 및 Docker 작성 및 배포 경험이 있습니다.
                </p>                
              </div>
            
            </div>                                                         
              
          </section>
          

          <section className="work">
            <h2>Work Experience</h2>

            <div className="item">
              <div className="left">
                <h3>Mintsage</h3>
                <div className="period">2018.11 ~ 2023. 10</div>
                <div className="role">Frontend, Backend</div>
              </div>
              <div className="right">
                <h4>스칼라십커먼즈</h4>
                <p>
                  장학업무 통합관리 플랫폼,<br/>
                  장학금의 운영과 신청 선발 등의 장학 업무를 통괄하는 서비스
                </p>
                <h5>Tech Stack.</h5>
                <p>Django, Vue.js, jQuery, Gulp, Postgresql, AWS EC2, S3, Docker, nginX</p>
                
              </div>
            </div>

            <div className="item">
              <div className="left">
                <h3>DAEHAN I&S</h3>
                <div className="period">2017.04 ~ 2018. 10</div>
                <div className="role">Frontend, Backend</div>

              </div>
              <div className="right">

                <h4>농심 백산수 생산 모니터링 시스템</h4>
                <p>
                  생산라인의 생산현황과<br/>
                  시설의 상태를 나타내는 수치들을 모니터링하여<br/>
                  생산률 증진 및 시설 관리를 보조하는 시스템 
                </p>
                <h5>Tech Stack.</h5>
                <p>Spring, jQuery, Vue.js, Oracle, Apache Tomcat </p>      

                <h4>정식품 베지밀 식품안전 플랫폼</h4>
                <p>
                  식품생산시 이물검사기 데이터를 기반으로<br/>
                  보조지표를 만들어 시각화해 보여주는 시스템
                </p>
                <h5>Tech Stack.</h5>
                <p>Spring, jQuery, Vue.js, Oracle, Apache Tomcat </p>

                <h4>선진사료 설비종합효율 시스템</h4>
                <p>
                  생산설비의 가동률,불량률등을 계산하여<br/>
                  생산 설비의 효율 개선에 도움을 주는 시스템
                </p>
                <h5>Tech Stack.</h5>
                <p>Spring, jQuery, Vue.js, Oracle, Apache Tomcat </p>

                <h4>선진사료 물류터미널 입출고 시스템</h4>
                <p>
                  물류센터의 입출고와 상하차를 보조하는 <br/>
                  키오스크와 바코드 스캐너 안드로이드 앱.
                </p>
                <h5>Tech Stack.</h5>
                <p>Spring, Vue.js, Cordova, Apache Tomcat </p>

              </div>
            </div>

          </section>
        </main>
      </Layout>


      {/* <footer>
        footer
      </footer> */}
    </div>
  )
}
  
export default Index

export const Head = () => <Seo title="Resume" />