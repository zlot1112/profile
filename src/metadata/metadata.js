module.exports = {
  name: '이진규',
  title: '백엔드 · 프론트 · 데브옵스 엔지니어',
  facts: {
    'Email': '<a href="mailto:zlot1112@gmail.com">zlot1112@gmail.com</a>',
    'Phone': '-',
  },
  channels: {
    'Github': `<a href="https://github.com/zlot1112">
                  <span class="print">https://github.com/zlot1112</span>
                  <span class="screen">https://github.com/zlot1112</span>
                </a>`,
    'facebook': `<a href="https://facebook.com/leeggung">
                  <span class="print">https://facebook.com/leeggung</span>
                  <span class="screen">https://facebook.com/leeggung</span>
                </a>`,
  },
  skills: [
    ['Spring', '+++'],
    ['Java', '+++'],
    ['git', '+++'],
    ['CI/CD', '+++'],
    ['RDB', '+++'],
    ['Python', '++'],
    ['vue.js', '++'],
    ['javascript', '++'],
    ['terraform', '+'],
    ['aws', '+'],
    ['k8s', '+'],
    ['elk', '+'],
  ],
  plays: [
    {
      title: '베스핀글로벌',
      date: '2021.01 ~ 현재',
      written: 'Devops 1팀/Manager',
      projects: [
        {
          name: '삼성전자 글로벌 권리지원 개발/운영',
          date: '2021.01 ~ 현재 / PL',
          badges: {
            backend: ['Spring', 'Java'],
            frontend: ['Javascript','vue.js'],
            db: ['Mysql', 'Mybatis', 'ElasticSearch', 'Logstash', 'kibana'],
            etc: ['AWS' ,'git', 'Tomcat', 'Nginx']
          },
          contents:
            `
* Lagacy 배포시스템 개선   
  - _CircleCI + AWS CodeDeploy CI/CD 설계 및 구축_
  - _GIT flow 전략수립 및 적용_
* ElasticSearch + Logstash + Kibana 운영   
  - _ElasticSearch Java Search API 공통개발_   
  - _ElasticSearch Index Lifecycle Management 정책 설계_              
* 관리자 웹페이지 개발  
  - _대용량(100만건이상) Excel Download 속도개선 및 OOM 이슈 해결_          
  - _MySQL SlowQuery 튜닝 및 Daily Batch 성능개선(30% 이상)_   
  - _AWS SDK 사용 보안개선(Access Key 방식 제거)_
            `
        }
      ],
    },
    {
      title: '크림솔루션',
      date: '2015.10 ~ 2020.12',
      written: 'SI&SM 사업부/과장',
      projects: [
        {
          name: 'SK네트웍스 [민팃](https://www.mintit.co.kr/)+ SK텔링크 [바른폰](http://www.newstnt.com/news/articleView.html?idxno=40961) 통합 구축',
          date: '2020.11 ~ 2020.12',
          badges: {
            backend: ['Spring Boot', 'Java', 'Django', 'python'],
            frontend: ['Javascript','vue.js'],
            db: ['PostgreSQL', 'Django ORM'],
            etc: ['AWS', 'git', 'Nginx', 'Tomcat']
          },
          contents:
            `
- 민팃+바른폰 프로젝트 통합 구축 설계
- Backend 언어 변경(Java to Python) 및 프로젝트 통합  
- jquery to vue.js 웹페이지 통합 및 개발   
            `
        },
        {
          name: 'SK텔레콤 DCB(휴대폰결제) 운영/개발',
          date: '2020.03 ~ 2020.11',
          badges: {
            backend: ['Spring Boot', 'Java'],
            frontend: ['Javascript','vue.js', 'x2framework'],
            db: ['Oracle',],
            etc: ['svn', 'Apache', 'Tomcat']
          },
          contents:
            `
- Google(주), Apple, Onestore 등 결제 REST API 운영/개발   
- 신규 관리자 사이트 프로젝트 설계 및 개발   
- 청구서/결제/SMS 등 레거시 연동 API 운영/개발   
- 결제 일/월 대사 File 다운로드 배치 개발         
            `
        },
        {
          name: 'SK텔링크 [바른폰](http://www.newstnt.com/news/articleView.html?idxno=40961) 운영/개발',
          date: '2019.10 ~ 2020.03',
          badges: {
            backend: ['Spring Boot', 'Java', 'Django', 'python'],
            frontend: ['Javascript','vue.js'],
            db: ['PostgreSQL', 'Django ORM'],
            etc: ['AWS', 'git', 'Nginx', 'Tomcat']
          },
          contents:
            `
- Front/ Backend 운영/개발   
- Toss 중고폰 판매 API 및 웹페이지 연동/개발   
            `
        },
        {
          name: 'SK텔링크 [바른폰](http://www.newstnt.com/news/articleView.html?idxno=40961) 플랫폼 구축',
          date: '2019.10 ~ 2020.03',
          badges: {
            backend: ['Spring Boot', 'Java', 'Django', 'python'],
            frontend: ['Javascript','vue.js'],
            db: ['PostgreSQL', 'Django ORM'],
            etc: ['AWS', 'git', 'Nginx', 'Tomcat']
          },
          contents:
            `
- 이니시스 결제연동 설계/개발   
- 중고폰 판매 프로세스 페이지 설계/개발   
- Front/Backend 연동 API 개발   
- Google 애널리틱스 연동/설계/개발         
            `
        },
        {
          name: 'SK텔레콤 5G T view for parking',
          date: '2019.03 ~ 2019.05',
          badges: {
            backend: [],
            frontend: ['Javascript' , 'Fabric.js'],
            db: [],
            etc: ['git']
          },
          contents:
            `
- HTML5 Canvas / 주차장 Map Web Editor 개발
            `
        },
        {
          name: 'SK텔레콤 [T아이디 채널포탈](https://chp.skt-id.co.kr/) 고도화',
          date: '2018.10 ~ 2019.02',
          badges: {
            backend: ['Spring boot', 'Java'],
            frontend: ['Javascript' , 'Angular'],
            db: ['Oracle', 'MyBatis'],
            etc: ['git', 'Apache', 'Tomcat']
          },
          contents:
            `
- Front/Backend 채널연동 개발
            `
        },
        {
          name: 'SK텔레콤 [T아이디](https://www.skt-id.co.kr) Monitoring System 개발',
          date: '2018.04 ~ 2018.10',
          badges: {
            backend: ['Spring boot', 'Java'],
            frontend: ['Javascript', 'JSP', 'Jquery'],
            db: ['Oracle', 'MyBatis'],
            etc: ['git', 'Apache', 'Tomcat']
          },
          contents:
            `
- Oracle OGG를 이용한 ETL 배치 설계/개발
- 어플리케이션 모니터링 데몬 설계/개발      
            `
        },
        {
          name: 'SK텔레콤 [T아이디](https://www.skt-id.co.kr) IMDG 데이터 검증 및 DB migration',
          date: '2017.11 ~ 2018.03',
          badges: {
            backend: ['Spring', 'Java'],
            frontend: [],
            db: ['Oracle', 'MyBatis', 'IMDG'],
            etc: ['git']
          },
          contents:
            `
- IMDG(In Memory Data grid) DB 데이터 정합성검증
- IMDG -> Oracle DB migration 배치모듈 개발 및 무중단 배포      
            `
        },
        {
          name: 'SK텔레콤 [T아이디](https://www.skt-id.co.kr) 운영/개발',
          date: '2016.08 ~ 2017.10',
          badges: {
            backend: ['Spring', 'Java'],
            frontend: ['Javascript', 'JSP', 'Jquery'],
            db: ['Oracle', 'MyBatis'],
            etc: ['Oauth2.0', 'git', 'Apache', 'Tomcat']
          },
          contents:
            `
- front/backend 웹프로젝트 개발/운영(1,500만 유져)
- OAuth2 기반 인증 API 운영  
- 기간계 시스템 API 연동 개발  
- 클릭 통계 설계/개발 
- 개인정보 보호법 처리관련 Batch 설계/개발
            `
        },
        {
          name: '[크라우드펀딩](https://www.ycrowdy.com/) 사이트 구축',
          date: '2015.10 ~ 2016.06',
          badges: {
            backend: ['Spring', 'Java'],
            frontend: ['Javascript', 'JSP', 'Jquery'],
            db: ['MySQL', 'MyBatis'],
            etc: ['svn', 'Apache', 'Tomcat']
          },
          contents:
            `
- 펀딩 등록 프로세스를 포함한 전체적인 웹 개발   
- 한국 예탁 결제원 연동 모듈 개발   
- 일/월 통계 배치 개발      
            `
        }
      ],
    },
    {
      title: '포커스원',
      date: '2010.09 ~ 2015.08',
      written: '운영개발팀/대리',
      projects: [
        {
          name: 'SK그룹 [모바일 서비스 플랫폼](https://m.toktok.sk.com/) 운영/개발',
          date: '2011.09  ~ 2015.08',
          badges: {
            backend: ['Spring', 'Java'],
            frontend: ['Javascript','Jsp', 'Jquery'],
            db: ['Mysql', 'ibatis'],
            etc: ['svn', 'Apache', 'Tomcat']
          },
          contents:
            `
- 모바일 그룹웨어 사용자/관리자 Spring 웹페이지 기능 개발
- 모바일 그룹웨어 App 연동 Spring REST API 개발/운영  
> Mobile App과 ragacy간의 Gateway 서버 API 개발    
> 임직원 정보 동기화, 통계 배치 등 JAVA Batch/Daemon 개발    
- 장애 발생 대응   
> Application Log 수집 및 분석 Fail, Error 모니터링 알람 JAVA 프로그램 개발
            `
        }
      ],
    },
  ],
  edus: [
    {
      date: '2011.05 - 2012.02',
      name: '학점은행제',
      major: '컴퓨터공학'
    },
    {
      date: '2005.03 - 2011.02',
      name: '신흥전문대학(3년)',
      major: '소프트웨어개발'
    }
  ],
  cert: [
    {
      date: '2022.01 ~ 2025.01',
      name: 'CKAD (Certified Kubernetes Application Developer)',
      major: 'linux foundation'
    },
    {
      date: '2021.12 ~ 2023.06',
      name: 'Oracle Cloud Database Services 2021 Certified Specialist',
      major: 'Oracle'
    },
    {
      date: '2021.12 ~ 2023.06',
      name: 'Oracle Cloud Database Migration and Integration Specialist',
      major: 'Oracle'
    },
    {
      date: '2021.12 ~ 2023.06',
      name: 'ORACLE Certified Architect Associate',
      major: 'Oracle'
    },
    {
      date: '2021.12 ~ 2023.06',
      name: 'ORACLE Certified Operations Associate',
      major: 'Oracle'
    },
    {
      date: '2021.11 ~ 2024.11',
      name: 'CKA (Certified Kubernetes Administrator)',
      major: 'linux foundation'
    },
    {
      date: '2021.06 ~ 2024.06',
      name: 'AWS Certified Data Analytics - Specialty',
      major: 'AWS'
    },
    {
      date: '2010.08',
      name: '정보처리기사,산업기사',
      major: '한국산업인력공단',
      link: ''
    },
    {
      date: '2010.06',
      name: '리눅스마스터 2급',
      major: '한국정보통신산업협회'
    }
  ]
};
