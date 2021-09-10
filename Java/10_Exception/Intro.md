## Exception Concept(예외 개념정리)

개념만 간단히 요약하고 Example 파일에서 자세히 다룬다.
### 1. Exception(예외)   
   **에러**는 하드웨어의 오작동이나 고장으로 인해 오류가 발생  
   **예외**는 사용자의 잘못된 조작이나 잘못된 코딩으로 발생  


  * 종류  
     * 일반예외(Exception,컴파일러 체크예외)  
       컴파일러가 컴파일 과정에서 예외처리 코드가 필요한지 검사  
     -> 없으면 컴파일  오류 발생하여 강제적으로 예외처리코드를 작성하도록 요구
     
     * 실행예외(Runtime Eception)  
       컴파일러가 컴파일 과정에서 예외처리 코드를 검사 X  
     -> 무슨 예외가 발생했는지 모르기 때문에 개발자가 경험을 바탕으로 예외처리코드를 작성해야함
***
 ### 2. 자주 발생하는 실행 예외
* NullPointerException (객체 참조가 없는 상태(객체=null)인데 사용하려 했을 때)
* ArrayIndexOutOfBoundsException (배열에서 인덱스 범위를 초과하였을 시)
* NumberFormatException (숫자로 변환될 수 없는 문자를 변환시키려고 할 때)
* ClassCastException (상속이나 인터페이스 관계가 아닌데 억지로 캐스팅하려할 때)
***
### 3. 예외 처리 코드
자바 컴파일러는 소스 파일을 컴파일할 때 일반 예외가 발생할 가능성이 있는 코드를 발견하면 컴파일 오류를 발생 시켜 개발자가 강제적으로 예외 처리코드를 작성하도록 한다.  
그러나 실행 예외는 컴파일러가 체크해주지 않기 때문에 예외처리코드를 개발자의 경험을 바탕으로 작성해야한다.

* 예외처리는 try-catch-finally 블록  사용
* 다양한 종류의 예외 발생 시 다중 catch (순서는 위에서 아래로, 예외 발생하면 나머지 예외 무시하고 즉시 멈춤)
* 하나의 catch 블록에서 동일하게 처리할 예외들을 처리 : multi catch 
***
### 4. 자동 리소스 닫기
* try-with-resources 사용  
이를 사용 하면 예외 발생 여부와 상관없이 사용했던 리소스 객체(각종IO stream,서버 소켓 등) 의 close() 메소드를 호출해서 안전하게 리소스를 닫아준다.
```java
// ()안에 작성한 것을 finally 에서 close 해줄 필요가 없어짐
try(FileInputStream fis = new FileInputStream("file.txt")){
        ...
}catch (IOException e){
    ...
}
```
***
### 5. 예외 떠넘기기
* **try-catch**로 예외를 처리하는 것이 **기본**이지만, 경우에 따라서 **throws** 키워드를 통해 메소드 호출한 곳으로 예외를 떠넘길 수  있다.  

```java
리턴타입 메소드명() throws 예외클래스1, 예외클래스2 {}

public void method() throws Exception{}
//method() 호출한 곳으로 예외떠넘김, 호출한 곳에선 try-catch로 처리해줘야함
```
* throws 키워드가 붙어있는 메소드는 반드시 try 블록 내에서 호출되어야 하며 catch 블록에서 예외를 처리한다.  
* main() 메소드에서 throws Exception 하는 것은 좋지않은 예외처리 방법이다.
***
### 6. 사용자 정의 예외
* 일반예외로 선언할지 실행예외로 선언할지 상속을 통해 선택
* 예외 클래스 이름은 Exception으로 끝나는 것 Best
* 생성자는 두개를 선언 하는 것이 일반적(기본 생성자,예외메시지를 매개변수로 가지는 생성자)
* 예외메시지의 용도는 catch 블록의 예외처리 코드에서 사용하기 위함 (getMessage()이용)
```java
public class XXXException extends [Exception | RuntimeException]{
    public XXXException(){ }
    public XXXException(String message){ super(message);}    
}
```
***
### 7. 예외 발생시키기
* throw 이용
* 예외 발생 코드를 가진 메소드는 내부에서 try-catch 할 수 있지만, 대부분은 throws를 통해 호출한 곳으로 떠넘긴다.
```java
throw new XXXException();
thorw new XXXException("메시지");

public void method() throws XXXException{
    throw new XXXException();
}
```
***
### 8. 예외 정보 얻기
```java
try{
    예외객체 생성
} catch(예외클래스 e){
    //예외가 가지고 있는 예외 메시지 얻기
    String message = e.getMessage();
    //예외 발생 경로 추적(출력해줌)
    e.printStackTrace();    
}
```