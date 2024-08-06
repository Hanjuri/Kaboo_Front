import React from 'react';
import * as main from './/styled/home_main';
import Header from './/home_header';


function HomeMain() {
    return (
        <main.Container>
            <main.Header>
                <Header/>
            </main.Header>
            <main.Main>
                <p>메인페이지</p>
            </main.Main>
            <main.Footer>
                <main.FooterWrapper>
                    <main.FooterText>카카오 부트캠프 2조 {':'} 춘식2</main.FooterText>
                    <main.FooterText2>박세호 박지혁 안태진 정은채 한주리</main.FooterText2>
                    <main.FooterText2>04177 서울 마포구 마포동 418-1 (마포타워빌딩) 7층(마포타워빌딩) 대표자 {':'} 정은채 </main.FooterText2>
                </main.FooterWrapper>
            </main.Footer>
        </main.Container>
    )
  }
  
  export default HomeMain;
  