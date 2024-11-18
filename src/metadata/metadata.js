module.exports = {
  name: '이진규',
  title: '백엔드 · 데브옵스 엔지니어',
  facts: {
    'Email': '<a href="mailto:zlot1112@gmail.com">zlot1112@gmail.com</a>',
    'Phone': '01063173488',
  },
  channels: {
  },
  skills: [
    ['Spring', '+++'],
    ['Java', '+++'],
    ['go', '+++'],
    ['git', '+++'],
    ['CI/CD', '+++'],
    ['RDB', '+++'],
    ['Python', '++'],
    ['vue.js', '++'],
    ['javascript', '++'],
    ['aws', '++'],
    ['k8s', '++'],
    ['kafka', '+'],
    ['elk', '+'],
    ['terraform', '++'],
  ],
  plays: [
    {
      title: '한샘',
      date: '2023.08 ~ 현재(1년 3개월)',
      written: '기간계시스템 개발팀/차장',
      projects: [
        {
          name: '기간계시스템 개발/운영',
          date: '2023.08 ~ 현재(1년 3개월) / PM',
          badges: {
            backend: ['Spring', 'Java'],
            db: ['Sql Server'],
            etc: ['on-prem' ,'git', 'redis', 'jenkins', 'airflow', 'spring batch', 'nexus']
          },
          contents:
            `
* 아키텍쳐 설계  
  - _[On-prem] Prometheus + Grafana + Loki + Tempo + Promtail + Opentelemetry (Log,Metric,Trace)모니터링 아키텍처 설계/구축_ -> **POC**
  - _[On-prem] Airflow 데이터 파이프라인 아키텍처 설계 및 구축_ -> **전사확대적용**
  - _Github + Jenkins + Nexus 등을 사용한 Tag 배포전략수립 및 구축_   
* Application 개발   
  - _ 레거시(java 6, struts2) 배치 현대화(with Airflow), Spring Batch App 설계/개발(30개 이상, 50~70% 속도개선)_
  - _ Airflow Dag 공통 개발_
* Devops
  - _exporter(node, apache, ngnix, redis, otel 등) 메트릭을 활용한 대쉬보드 개발/제공_
  - _알림 Application 개발_
  - _Trace, Log 등을 활용하여 API 통계 개발/제공_
  `
        }
      ],
    },
    {
      title: '파스토',
      date: '2021.05 ~ 2023.07(1년3개월)',
      written: 'Devops 팀/Lead',
      projects: [
        {
          name: '풀필먼트 Management System 개발/운영',
          date: '2022.05 ~ 2023.07(1년3개월) / Lead',
          badges: {
            backend: ['Go gin', 'Go'],
            db: ['Mysql', 'DynamoDB'],
            etc: ['AWS' ,'git', 'Kafka', 'k8s', 'grpc', 'ArgoCD', 'gitops', 'github actions']
          },
          contents:
            `
* 아키텍쳐 설계/Devops  
  - _AWS + k8s(EKS) + istio + keycloak 아키텍처 설계/구축_
  - _Kafka(MSK)를 이용한 event driven 아키텍처 설계/구축_              
  - _Github flow등을 사용한 커스텀 배포전략수립 및 구축_   
  - _gRPC 아키텍처 설계/구축_   
  - _github actions + AWS ECR + ArgoCD CI/CD 아키텍처 설계/구축(gitops)_   
  - _Prometheus(thanos) + Grafana + Loki + Tempo + Promtail + Opentelemetry (Log,Metric,Trace)모니터링 아키텍처 설계/구축_   
* BackEnd 개발   
  - _Go MSA 구조 설계 및 공통/회원 RestAPI 개발_   
  - _Go gRPC , Server 및 Client 공통개발_   
  - _Go Kafka , Producer 및 Consumer 공통개발_
  - _Go Devops Management RestAPI 개발(AWS Resource 탐색, Log관리 등)_
* Devops
  - _Terraform을 이용한, AWS Resource 프로비저닝 구조설계/개발(일부)_
  - _Application Helm Chart 설계/개발_
  `
        }
      ],
    },
    {
      title: '베스핀글로벌',
      date: '2021.01 ~ 2022.05(1년5개월)',
      written: 'Devops 1팀/Manager',
      projects: [
        {
          name: '삼성전자 글로벌 권리지원 개발/운영',
          date: '2021.01 ~ 2022.05(1년5개월) / PL',
          badges: {
            backend: ['Spring', 'Java'],
            frontend: ['Javascript','vue.js'],
            db: ['Mysql', 'Mybatis'],
            etc: ['AWS' ,'git', 'Tomcat', 'Nginx', 'ElasticSearch', 'Logstash', 'kibana']
          },
          contents:
            `
* Lagacy 배포시스템 개선   
  - _CircleCI + AWS CodeDeploy CI/CD 설계 및 구축_
  - _GIT flow 전략수립 및 적용_
  - _프로젝트 관리툴 변경 , Ant > Maven_ 
* ElasticSearch + Logstash + Kibana 운영   
  - _ElasticSearch Java Search API 공통개발_   
  - _ElasticSearch Index Lifecycle Management 정책 설계_              
* 관리자 웹페이지 개발  
  - _대용량(100만건이상) Excel Download 속도개선 및 OOM 이슈 해결_          
  - _MySQL SlowQuery 튜닝 및 Daily Batch 성능개선(30% 이상)_   
* Application 보안 개선
  - _AWS SDK 사용 보안개선(Access Key 제거)_
  - _AWS Secrets Manager 적용_
   `
        }
      ],
    },
    {
      title: '크림솔루션',
      date: '2015.10 ~ 2020.12(5년2개월)',
      written: 'SI&SM 사업부/과장',
      projects: [
        {
          name: 'SK네트웍스 [민팃](https://www.mintit.co.kr/)+ SK텔링크 [바른폰](http://www.newstnt.com/news/articleView.html?idxno=40961) 통합 구축',
          date: '2020.11 ~ 2020.12(2개월)',
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
          date: '2020.03 ~ 2020.11(8개월)',
          badges: {
            backend: ['Spring Boot', 'Java'],
            frontend: ['Javascript','vue.js', 'x2framework'],
            db: ['Oracle',],
            etc: ['svn', 'Apache', 'Tomcat']
          },
          contents:
            `
- Google, Apple, Onestore 등 결제 REST API 운영/개발   
- 신규 관리자 사이트 프로젝트 설계 및 개발   
- 청구서/결제/SMS 등 레거시 연동 API 운영/개발   
- 결제 일/월 대사 File 다운로드 배치 개발         
            `
        },
        {
          name: 'SK텔링크 [바른폰](http://www.newstnt.com/news/articleView.html?idxno=40961) 플랫폼 구축/운영  ',
          date: '2019.06 ~ 2020.03(10개월)',
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
- Front/Backend 운영/개발 , 연동 API 개발   
- Google 애널리틱스 연동/설계/개발
- Front/ Backend   
            `
        },
        {
          name: 'SK텔레콤 5G T view for parking',
          date: '2019.03 ~ 2019.05(3개월)',
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
          name: 'SK텔레콤 [T아이디](https://www.skt-id.co.kr) 운영/개발',
          date: '2016.08 ~ 2019.02(2년 7개월)',
          badges: {
            backend: ['Spring', 'Spring boot',  'Java'],
            frontend: ['Javascript', 'JSP', 'Jquery', ''],
            db: ['Oracle', 'MyBatis', 'IMDG'],
            etc: ['Oauth2.0', 'git', 'Apache', 'Tomcat']
          },
          contents:
            `
- front/backend 웹프로젝트 개발/운영(1,500만 유져)
- OAuth2 기반 인증 API 운영  
- 기간계 시스템 API 연동 개발  
- 클릭 통계 설계/개발 
- 개인정보 보호법 처리관련 Batch 설계/개발 
- Front/Backend 채널연동 개발 
- IMDG(In Memory Data grid) DB migration(to Oracle) 데이터검증/배치모듈 개발
- Application Monitoring System 개발(Oracle OGG를 이용한 ETL 배치 설계/개발)
`
        },
        {
          name: '[크라우드펀딩](https://www.ycrowdy.com/) 사이트 구축',
          date: '2015.10 ~ 2016.06(8개월)',
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
      date: '2010.09 ~ 2015.08(5년)',
      written: '운영개발팀/대리',
      projects: [
        {
          name: 'SK그룹 [모바일 서비스 플랫폼](https://m.toktok.sk.com/) 운영/개발',
          date: '2010.09  ~ 2015.08(5년)',
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
      name: '신한대학교(3년)',
      major: '소프트웨어개발'
    }
  ],
  cert: [
    {
      date: '2022.01 ~ 2025.02',
      name: 'CKAD (Certified Kubernetes Application Developer)',
      major: 'linux foundation'
    },
    {
      date: '2021.11 ~ 2024.11(만료)',
      name: 'CKA (Certified Kubernetes Administrator)',
      major: 'linux foundation'
    },
    {
      date: '2022.03 ~ 2024.03(만료)',
      name: 'CKS (Certified Kubernetes Security Specialist)',
      major: 'linux foundation'
    },
    {
      date: '2021.06 ~ 2024.06(만료)',
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
