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

          <h1>
          안녕하세요<br/>
          웹 애플리케이션 개발자 <br/>
          김정빈 입니다.
          </h1>       

          <section>              
            <h2>소개</h2>
            <p>              
              만 6년차 개발자로서 사용자 친화적이고 세련된 인터페이스 구현과
              더 나은 사용자 경험,<br/>
              효율적인 솔루션을 제공하기 위해
              끊임없이 노력하고 있습니다.
            </p>                

            <p>
            포지션에 구애받지 않고 작업이 가능하지만 좀 더 선호하는 업무는 프론트엔드 개발 입니다.
            유저가 서비스를 이용하면서 어려움을 겪지 않도록 자연스러운 동선을 유도하고, 
            서비스를 이탈하지 않도록 좋은 경험을 주는 것, 작업한 결과물을 바로 보여줄 수 있다는 점과 
            사용자와 직접 상호작용하는 부분을 개발한다는 점들에 매력을 느껴,
            클라이언트 측 개발을 할 때 가장 흥미를 느끼며 업무에 임합니다.
            </p>

            <p>

            </p>

          </section>

          <section>              
            <h2 style={{marginBottom:"0px"}}>기술</h2>            
            <span className="sub-text">*실무에서 사용 경험이 있거나, 사용하는데 어려움이 없는 수준</span>
            <ul>

              <li>
                <h3>언어</h3>
                <ul className="badge-list">
                  <li>Javascript</li>
                  <li>Java</li>
                  <li>Python</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SQL</li>
                </ul>                
                <p className="description">
                  - 마크업, 클라이언트, 서버 모두 작업이 가능합니다.
                </p>                
              </li>      

              <li>
                <h3>프론트엔드</h3>
                <ul className="badge-list">
                  <li>React</li>
                  <li>Vue.js</li>
                  <li>jQuery</li>
                  <li>Svlete</li>
                </ul>                  
                <p className="description">
                마크업, 인터랙션 구현에 능숙합니다. 마크업을 할 때 눈에 보이는 부분 뿐만 아니라 코드가 시맨틱한 구조를 가지도록 작성합니다.<br/>  
                모던한 웹 개발을 위한 SPA 프레임워크, 컴포넌트 기반의 개발환경을 선호합니다.<br/>  
                클라이언트사이드 렌더링, 서버사이드 렌더링에 대한 이해가 있고 개발 경험이 있습니다.<br/>                  
                JSP, jQuery 등의 레거시 기반의 환경이나 그 외 템플릿엔진 환경에서도 작업이 가능합니다.<br/>  
                </p>   
              </li>

              <li>
                <h3>백엔드</h3>
                <ul className="badge-list">
                  <li>Django</li>
                  <li>SpringFramework</li>
                </ul>                  
                <p className="description">
                SpringFramework, Django 를 활용한 백엔드 개발 경험이 있습니다.<br/>
                서버의 세팅이나, 성능향상 등의 백엔드 개발이나 지식에 조예가 깊은편은 아니나,<br/>
                서비스단의 비즈니스 로직 작성 및 요구사항 구현에 필요한것을 찾아서 해결합니다.<br/>
                RestAPI 개발 경험이 있습니다. 
                </p>                   
              </li>

              <li>
                <h3>데이터베이스</h3>
                <ul className="badge-list">
                  <li>Oracle</li>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                  <li>Firebase</li>
                </ul>                   
                <p className="description">
                RDBMS 및 NoSQL 데이터베이스 사용 경험이 있습니다.
                </p>                  
              </li>

              <li>
                <h3>그 외</h3>
                <ul className="badge-list">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS EC2</li>
                  <li>AWS S3</li>
                  <li>AWS RDS</li>
                  <li>AWS ELB</li>
                </ul>                  
                <p className="description">
                Git, SVN을 통한 버전 관리 경험이 있습니다.<br/>
                Docker를 작성해 환경을 만들고 배포를 한 경험이 있습니다.<br/>
                AWS를 인프라로 활용해 서비스를 구축한 경험이 있습니다.
                </p>                    
              </li>                                   
            </ul>
            
          </section>

          <section>              
            <h2>프로젝트 경험</h2>
            <ul>
              <li>
                <h3>스칼라십커먼즈</h3>
                <p className="description">                  
                  장학업무 통합관리 플랫폼,  장학금의 운영과 신청 선발 등의 장학 업무를 통괄하는 서비스   
                </p>
                <p className="description">
                  <div className="sub-text">주요업무</div>
                  설계와 디자인 요구사항에 맞는 화면 마크업<br/>
                  DjangoTemplate, jQuery, Vue.js 등의 기술을 활용하여 유저 인터페이스 및 기능 개발<br/>
                  Django, DajngoRestframework 등의 기술을  활용하여 비즈니스 로직 구현 및 API 개발<br/>
                  AWS EC2, S3, RDS, ELB 프로덕션 환경 구성<br/>
                  Docker파일 작성 및 배포환경 구축<br/>               
                </p>
              </li>
              <li>
                <h3>정식품 베지밀 식품안전 플랫폼</h3>
                <p className="description">                  
                식품생산시 이물검사기 데이터를 기반으로 지표를 만들어 시각화하여 보여주는 시스템
                </p>
                <p className="description">
                  <div className="sub-text">주요업무</div>
                  웹 소켓과 차트 라이브러리를 활용하여 실시간 검사 종합 모니터링 기능 개발<br/>
                  JSP, jQuery, Vue.js 등의 기술을 활용하여  화면 및 기능 개발<br/>
                  SpringFramework 등의 기술을 활용하여 서버측 비즈니스로직 구현 및 API 개발           
                </p>
              </li>
              <li>
                <h3>농심 백산수 생산 모니터링 시스템</h3>
                <p className="description">                  
                생산라인의 생산현황과 설비의 상태를 나타내는 수치들을 모니터링 하여 생산성 증진 및 설비 관리에 도움을 주는 시스템  
                </p>
                <p className="description">
                  <div className="sub-text">주요업무</div>
                  현장 측정데이터 모니터링, 가동률 리포트, 검사데이터 통합관리 기능 개발<br/>
                  JSP, jQuery, Vue.js 등의 기술을 활용하여  화면 및 기능 개발<br/>
                  SpringFramework 등의 기술을 활용하여 서버측 비즈니스로직 구현 및 API 개발       
                </p>
              </li>
              <li>
                <h3>선진 물류터미널 관리 시스템</h3>
                <p className="description">                  
                물류센터의 입출고 및 상하차 업무를 보조하는 시스템
                </p>
                <p className="description">
                  <div className="sub-text">주요업무</div>
                  입출고 키오스크 프로그램 , 바코드스캐너 안드로이드 하이브리드 앱 개발<br/>
                  Vue.js 등의 기술을  활용하여 앱 화면개발 및 기능개발<br/>
                  cordova 를 활용하여 웹앱 래핑 및 배포파일 생성 및 배포             
                </p>
              </li>
              <li>
                <h3>선진 설비종합효율 시스템</h3>
                <p className="description">                  
                생산설비의 가동률,불량률등을 계산하여  생산의 추이를 파악하고 생산 설비의 효율 개선에 도움을 주는 시스템
                </p>
                <p className="description">
                  <div className="sub-text">주요업무</div>
                  생산성 통합모니터링 기능 개발<br/>
                  차트 라이브러리를 활용하여 통합 화면 개발<br/>
                  JSP, jQuery, Vue.js 등의 기술을 활용하여  화면 및 기능 개발<br/>
                  SpringFramework 등의 기술을 활용하여 서버측 비즈니스로직 구현 및 API 개발               
                </p>
              </li>                                                        
            </ul>
          </section>              

          <section>              
            <h2>경력</h2>
            <ul>
              <li>
                <h3>Mintsage</h3>                        
                <div className="sub-text">2018. 10 ~ 2023. 10</div>                                              
                <p className="description">
                웹 프론트앤드, 백엔드 개발 
                </p>
              </li>
              <li>
                <h3>Daehan I&S</h3>
                <span className="sub-text">2017. 04 ~ 2018. 10</span>
                <p className="description">
                웹 프론트앤드, 백엔드 개발 
                </p>                
              </li>              
            </ul>
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

export const Head = () => 
  <Seo title="Resume" description="웹 애플리케이션 개발자 김정빈 이력서"/>