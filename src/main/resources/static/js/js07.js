// 입력한 숫자까지 합을 구해라
var input = Number(prompt("처음 숫자를 입력하세요"));
var input2 = Number(prompt("마지막 숫자를 입력하세요."))
for(var i=1; i<=input; i+2){
    sum += i;
}
// 1, 100 100 , 1
// Math.min(), Math.max()
// var num, var num2
var num = Math.min(input,input2);
var num2 = Math.max(input,input2);
//삼항식
/*
num = (input<input2)?input:input2;
num2 = (input>input2)?input:input2;
*/

var sum = 0;

document.write("1부터 ", input, "까지 숫자들 중 홀수들만의 합: ", sum);
//

/*
└── src
    ├── main
    │   ├── java
    │   │   └── com
    │   │       └── example
    │   │           └── myapp
    │   │               ├── config       // 프로젝트에 필요한 추가 설정 클래스들
    │   │               ├── controller   // 웹 요청 처리를 담당하는 컨트롤러 클래스들
    │   │               ├── dto          // Controller와 Service 사이에서 데이터를 전달하는 DTO(Data Transfer Object) 클래스들
    │   │               ├── domain       // 데이터베이스와 매핑될 도메인 클래스들
    │   │               ├── repository   // 데이터베이스 접근을 담당하는 레포지토리 인터페이스들
    │   │               ├── service      // 비즈니스 로직을 담당하는 서비스 클래스들
    │   │               ├── utils        // 여러 곳에서 사용되는 유틸리티 클래스들
    │   │               └── Application.java // 메인 어플리케이션 클래스
    │   ├── resources
    │   │   ├── static
    │   │   │   ├── css
    │   │   │   ├── images
    │   │   │   └── js
    │   │   ├── templates // Thymeleaf 등의 서버 사이드 템플릿 엔진이 사용하는 html 파일들
    │   │   ├── application.properties // 스프링 부트 설정 파일
    │   │   └── db // SQL 스크립트 파일들
    └── test  // 단위 테스트를 위한 코드
        └── java
            └── com
                └── example
                    └── myapp
                        ├── controller  // 컨트롤러 테스트 코드
                        ├── service     // 서비스 테스트 코드
                        └── repository  // 레포지토리 테스트 코드


*  */