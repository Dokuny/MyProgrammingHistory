# IO
## IO 개념 
   * 입력스트림 = 데이터를 입력 받는 흐름
   * 출력스트림 = 데이터를 보내는 흐름  

```markdown
출발지                   |      프로그램      |                    도착지
1. 키보드  (InputStream) |                   | (OutputStream)    1.모니터
2. 파일          =>      |  도착지     출발지 |        =>         2.파일
3. 프로그램              |                   |                   3.프로그램
```
* 항상 프로그램을 기준으로 데이터가 들어오면 Input, 나가면 Output  

* Stream class는 크게 두 종류 
  * byte 기반 (모든 종류의 데이터 주고받기 가능)   
   `` InputStream``,``OutputStream``
  * Character 기반 (문자만 가능하도록 특화)  
  ``Reader``,``Writer`` 

### 1. InputStream 클래스
* 바이트 기반 입력 스트림의 ``최상위 클래스,추상 클래스``
* InputStream의 하위클래스 
  * FileInputStream, BufferedInputStream,DataInputStream 클래스
* 메소드
  * int read() : 1byte 읽고 4byte int타입으로 리턴
  * int read(byte[]) : 배열의 길이만큼 읽고 배열에 저장후 읽은 byte 수를 리턴
    * 입력 스트림으로부터 읽을 바이트가 없다면 -1 리턴 
  * int read(byte[],int off,int len) : len만큼 읽고 배열의 인덱스 off부터 저장.len보다 배열의 길이가 짧다면 배열만큼리턴 
    * 위와 마찬가지로 읽을게 없다면 -1 리턴 
  * void close() : InputStream에서 사용했던 시스템 자원을 풀어줌.

### 2. OutputStream 클래스
* byte기반 출력 스트림의 ``최상위 클래스,추상클래스``  
* OutputStream의 하위클래스
  * FileOutputStream, BufferedOutputStream,DataOutputStream,PrintStream 클래스
* 메소드
  * void write(int b) : 주어진 매개변수 int값에서 1byte만 출력 스트림으로 보낸다
  * void write(byte[] b) : 주어진 바이트 배열의 모든 바이트를 출력 스트림으로 보낸다
  * void write(byte[],int off,int len) : b[off] 부터 len개의 바이트를 출력스트림으로 보낸다
  * void flush() : 버퍼에 남아있는 데이터를 모두 출력시키고 버퍼를 비우는 역할
  * void close() : 시스템 자원을 풀어줌

### 3. Reader 클래스
* 문자 기반 입력 스트림의 ``최상위 클래스,추상클래스``
* Reader의 하위클래스
  * FileReader,BufferedReader,InputStreamReader
* 메소드 (InputStream하고 동일함 매개변수 타입만 다름)
   * int read() : 2byte 읽고 4byte int 타입으로 리턴, 리턴된 int값을 char타입으로 변환하면 읽은 문자 얻을 수 있음
   * int read(char[] cbuf)
   * int read(byte[],int off,int len) 
   * void close() 

### 4. Writer 클래스
* 문자 기반 출력 스트림의 ``최상위 클래스,추상클래스``
* Writer의 하위클래스
  * FileWriter,BufferedWriter,OutputStreamReader,PrintWriter
* 메소드
   * void write(int c) 
   * void write(char[] cbuf)
   * void write(char[] cbuf,int off,int len) 
   * void write(String str) : 문자열 전부 보낸다
   * void write(String str,int off,int len) 
   * void flush() 
   * void close() 
***

## 콘솔 입출력

* 콘솔(Console)은 시스템을 사용하기 위해 키보드로 입력받고 화면에 출력하는 소프트웨어
* 유닉스,리눅스 -> ``terminal`` /  Windows -> ``cmd(명령 프롬프트)``
* 자바는 콘솔로부터 데이터를 입력받을 때 ``System.in`` 사용 / 콘솔에 데이터 출력 시 ``System.out``

### 1. System.in 필드
* 자바는 프로그램이 콘솔로부터 데이터를 입력받을 수 있도록 System 클래스에 InputStream 타입의 in 정적필드 제공
* InputStream의 read()로 키보드로부터 어떤 키가 입력되었는지 확인 가능(리턴되는 int는 아스키코드)
* 한글을 read()로 받을 시 한글은 2byte짜리 유니코드이기 때문에 byte[] 로 받고 String 객체 생성하면된다.
```java
InputStream is = System.in;
int asciiCode = is.read();
char inputChar = (char)is.read(); // 문자로 얻고 싶을 시

byte[] byteData = new byte[15];
int readByteNo = System.in.read(byteData); // readByteNo은 읽은 byte 수

// byte 배열 문자열로 변환 시
String strData = new String(byteData,0,readByteNo-2);  //(byte배열,시작인덱스,읽은바이트 수-2)
                                                       // -2인 이유는 배열 마지막에 저장된 엔터를 뜻하는 캐리지리턴과 라인피드를 제외하기 위함

```

### 2. System.out 필드
* 콘솔로 데이터를 출력하기 위해서는 System 클래스의 PrintStream 타입의 out 정적필드 사용  
(PrintStream은 OutputStream의 하위 클래스이니 OutputStream 타입으로 변환가능)
* 한글을 출력하려면 한글을 byte[]로 받고 write(byte[])로 출력

```java
OutputStream os= System.out;

byte b= 97; // 아스키코드 97 = 'a'
os.write(b); // 콘솔에 'a' 출력
os.flush();

String name = "도쿠니";
byte[] nameBytes = name.getBytes(); // getByte()는 String을 byte로 변환해서 배열에 넣어줌
os.write(nameBytes);
os.flush;
```

### 3. Console 클래스

* 자바에선 콘솔에서 입력받은 문자열을 쉽게 읽을 수 있도록 java.io.Console 클래스를 제공
* Console 객체를 얻기 위해서는 System의 정적메소드인 console()이용
* 메소드
  * String readLine() : Enter키를 입력하기 전의 모든 문자열을 읽음
  * char[] readPassword() : 키보드 입력문자를 콘솔에 보여주지 않고 문자열을 읽음(비밀번호처럼)

```java
Console console = System.console(); // 명령프롬프트에서 실행할 것 IDE말고

String id = console.readLine(); //readLine()으로 문자열읽어서 id에 넣는 것
char[] charPass = console.readPassword();
String strPwd = new String(charPass); // 문자열로 전환
```

### 4. Scanner 클래스
* Console 클래스는 콘솔로부터 문자열을 읽을 수 있지만 기본타입을 바로 읽을 수는 없음
* 이때 Scanner 클래스 사용(기본타입을 바로 읽을 수 있음)
***

## 파일 입출력
### 1. File 클래스  
* java.io에서 제공하는 File 클래스는 ``파일의 정보(크기,속성,이름 등)``를 얻어내는 기능과 파일 ``생성`` 및 ``삭제`` 기능을 제공
* 디렉토리 생성 및 디렉토리 내부의 파일 리스트 확인 기능 제공
* 파일의 ``데이터를 읽고 쓰는 기능은 지원 X`` (파일 생성,삭제,확인만 가능하지 수정불가) -> 스트림 사용
```java
File file = new File("C:/Temp/file.txt"); // C:/Temp 디렉토리의 file.txt를 File 객체로 생성
```
* File 객체를 생성했다하더라도 파일이나 디렉토리가 생성되는 것은 아님
* 생성자 매개값으로 주어진 경로가 유효하지 않더라도 컴파일에러나 예외발생 X
* 그러므로 실존하는지 확인하려면 exists() 호출
```java
boolean isExist = file.exists();  // 존재하면 true 없으면 false
```
* 메소드 정리
  * 파일 정보관련
      * boolean exists() : 실제로 파일이 있는지 확인
      * boolean canExecute() : 실행할 수 있는 파일인지
      * boolean canRead() : 읽을 수 있는 파일인지
      * boolean canWrite() : 수정 및 저장할 수 있는 파일인지
      * String getName() : 파일이름 리턴
      * String getParent() : 부모 디렉토리 리턴
      * File getParentFile) : 부모 디렉토리를 File객체로 생성 후 리턴
      * String getPath() : 전체 경로 리턴
      * boolean isDirectory() : 디렉토리인지
      * boolean isFile() : 파일인지
      * boolean isHidden() : 숨김 파일인지
      * long lastModified() : 마지막 수정 날짜 및 시간 리턴
      * long length() : 파일 크기 리턴
      * String[] list() : 디렉토리에 포함된 파일 및 서브 디렉토리 목록 전부를 String 배열로 리턴
      * String[] list(FilenameFilter filter) : FilenameFilter에 맞는 것만 배열로 리턴
      * File[] listFiles() : 디렉토리에 포함된 전부를 File 배열로 리턴
      * File[] listFiles(FilenameFilter filter) : 필터에 맞는것만 배열로 리턴
  * 파일 생성 관련 
      * boolean createNewFile() : 새로운 파일 생성
      * boolean mkdir() : 새로운 디렉토리 생성
      * boolean mkdirs() : 경로상에 없는 모든 디렉토리를 생성
  * 파일 삭제 관련 
    * boolean delete() : 파일 또는 디렉토리 삭제

### 2. FileInputStream
* 파일로부터 byte 단위로 읽어들일 때 사용하는 byte 기반 입력 스트림
* byte단위로 읽기 때문에 모든 종류의 파일 가능
```java
FileInputStream fis = new FileInputStream("C:/Temp/image.gif"); //방법 1

File file = new File("C:/Temp/image.gif");
FileInputStream fis = new FileInputStream(file);                //방법 2
```
* FileInputStream 객체가 생성될 때 파일과 직접 연결되는데 이때 파일이 실존하지 않으면 ``FileNotFoundException`` 발생
  * try-catch 문으로 예외처리해줘야함
* InputStream과 사용방법이 동일

### 3. FileOutputStream
* byte 단위로 데이터를 파일에 저장할 때 사용
```java
FileOutputStream fis = new FileOutputStream("C:/Temp/image.gif"); //방법 1

File file = new File("C:/Temp/image.gif");
FileOutputStream fis = new FileOutputStream(file);  
```
* 파일이 이미 존재할 경우, 데이터를 출력하면 파일을 덮어 씌운다(파일 안에 있던 기존의 내용은 사라짐)
  * 기존의 파일 내용 끝에 데이터를 추가할 경우 FileOutputStream 생성자의 두번째 매개값을 true로.
  ```java
  FileOutputStream fos = new FileOutputStream("C:/Temp/data.txt,true");
  ```
* OutputStrema하위 클래스니 flush() 사용.


### 4. FileReader
* ``텍스트 파일``을 프로그램으로 읽어들일 때 사용하는 문자기반 스트림
```java
FileReader fr = new FileReader("C:/Temp/file.txt");

// FileInputStream 하고 동일하다.
```
* 실존 파일이 없을 경우 에러발생, try-catch로 처리해줘야함

### 5. FileWriter
* ``텍스트 데이터``를 파일에 저장할 때 사용
* 생성하는 방법은 FileOutputStream 과 동일
* 얘도 파일을 덮어 씌우는데 매개변수로 true 주면된다.

***
## 보조 스트림
* 다른 스트림과 연결되어 여러가지 편리한 기능을 제공해주는 스트림
* 보조 스트림 자체적으로 입출력을 수행할 수 없기 때문에 다른 스트림에 연결해서 사용해야한다.
```java
보조스트림 변수 = new 보조스트림(연결스트림);
//예시
InputStream is = System.in;
InputStreamReader reader = new InputStreamReader(is); // InputStreamReader는 문자변환 보조 스트림
BufferdReader br = new BufferdReader(reader); // BufferdReader 는 성능 향상 보조스트림
```

### 1. 문자 변환 보조 스트림
* 소스 스트림이 바이트기반 스트림이면서 입출력 데이터가 문자라면 Reader와 Writer로 변환해서 사용하는 것이 좋음
  * 바이트기반보다 편리하고 문자셋의 종류를 지정할 수 있기 때문
  
#### InputStreamReader
* 바이트입력 스트림에 연결되어 문자 입력 스트림인 Reader로 변환
```java
Reader reader = new InputStreamReader(바이트 입력스트림);
```

#### OutputStreamWriter
* 바이트 출력 스트림에 연결되어 문자 출력 스트림인 Writer로 변환
```java
Writer wirter = new OutputStreamWriter(바이트출력스트림);
```
### 2. 성능 향상 보조 스트림
* 프로그램의 실행 성능은 입출력이 가장 늦은 장치를 따라감 
  * 예시) cpu,메모리가 좋아도 하드 디스크 입출력이 늦으면 프로그램 실행 성능은 하드디스크 처리속도에 맞춰짐(네트워크도 마찬가지)
* 조금의 해결책은 프로그램이 입출력 소스와 직접 작업하지않고 중간에 ``메모리 버퍼(buffer)``와 작업함으로써 성능향상
  * 버퍼는 데이터가 쌓이기를 기다렸다 꽉차면 데이터를 한번에 하드디스크로 보내면서 출력 횟수를 줄여준다.
* 이러한 메모리 버퍼를 제공하는 스트림이 성능 향상 보조 스트림
#### BufferedInputStream 과 BufferedReader
* 전자는 바이트 입력 스트림에 연결, 후자는 문자입력 스트림에 연결
* 자신의 내부버퍼 크기만큼 데이터를 미리 읽고 버퍼에 저장(최대 8192 byte / 8192 문자)
```java
BufferedInputStream bis = new BufferedInputStream(바이트입력스트림);
BufferedReader br = new BufferedReader(문자입력스트림);
```
* 사용방법은 소스스트림과 동일하나 BufferedReader는 readLine()으로 캐리지 리턴과 라인피드로 구분된 행단위의 문자열을 한번에 읽을 수 있음
```java
Reader reader = new InputStreamReader(System.in); // 어차피 System.in 리턴값이 InputStream이다.
BufferedReader br = new BufferedReader(reader);
String inputStr = br.readLine(); // 라인 단위로 끊어서 inputStr에 넣어줌
```
#### BufferdOutputStream 과 BufferedWriter
* 특징은 BufferdInput 쪽과 동일
* 버퍼가 가득 찼을 때만 출력하기 때문에 남은 데이터가 목적지로 가지못하고 버퍼에 남아있을 수 있음
  * flush() 사용해서 출력
### 3. 기본 타입 입출력 보조 스트림
  * 바이트 스트림은 바이트 단위로 입출력해서 기본타입 단위로 입출력 X
  * ``DataInputStream`` 과 ``DataOutputStream`` 연결하면 가능
```java
DataInputStream dis = new DataInputStream(바이트입력스트림);
DataOutputStream dos = new DataOutputStream(바이트출력스트림);
```
* 메소드
  * readXXX() : XXX에 기본타입 넣기 + UTF 가능
  * writeXXX() : 위와 동일

### 4. 프린터 보조 스트림
* PrintSteam,PrintWriter : 출력 스트림과 연결
  * print(), println(), printf() 를 가짐
```java
PrintStream ps = new PrintStrema(바이트출력스트림);
PrintWriter pw = new PrintWriter(문자출력스트림);
```

### 5. 객체 입출력 보조 스트림
* 객체는 **문자가 아니기 때문에** 바이트 기반 스트림으로 입력,출력
* 자바는 메모리에 생성된 객체를 파일,네트워크로 출력 가능 
  * 출력 시 ``객체 직렬화(serialization)`` 해야함   
      -> 객체의 데이터(=``필드값``)을 일렬로 늘어선 연속적인 ``바이트``로 ``변경``하는 것
* 파일에 저장되거나 네트워크 전송된 객체를 읽기 가능
  * 읽을 시 ``역직렬화(deserialization)``   
  -> 읽어들인 연속적인 ``바이트``를 ``객체``로 ``복원``하는 것
* 객체는 **문자가 아니기 때문에** 바이트 기반 스트림으로 출력

#### ObjectInputStream 과 ObjectInputStream
```java
ObjectInputStream ois= new ObjectInputStream(바이트 입력 스트림);
ObjectOutputStream oos= new ObjectOutputStream(바이트 출력 스트림);
```
* 객체 직렬화를 위해서는 ``writeObject(객체)`` 사용
* 역직렬화는 객체를 복원하는 것이므로 객체를 생성해야함   
  = ``객체타입 변수 = (객체타입)ois.readObject();``
* 복수의 객체를 저장할 경우, 출력된 객체 순서와 동일한 순서로 객체를 읽어야한다.

#### 직렬화가 가능한 클래스(Serializable)
* 자바는 Serializable 인터페이스를 구현한 클래스만 직렬화 할 수 있도록 제한하고 있음
* ``Serializable``은 필드나 메소드가 없는 빈 인터페이스 
* 직렬화할 때 private 필드를 포함한 모든 필드를 바이트로 변환해도 좋다는 ``표식역할``을 함
* 직렬화 시 ``필드만 변환``되고 생성자 및 메소드는 직렬화에 포함 X
* 필드는 ``static,transient`` 가 붙어있으면 ``직렬화 X``

#### serialVersionUID 필드
* 직렬화된 객체를 역직렬화할 때는 직렬화했을 때와 같은 클래스를 사용해야함
  * 클래스의 이름이 같더라도 내용이 변경되어있으면 역직렬화 실패 
    * -> ``serialVersionUID``가 달라서
  
* serialVersionUID는 Serializable 인터페이스 구현한 클래스를 컴파일하면 ``자동``적으로 ``정적필드``로 ``추가``
  * 클래스를 ``재컴파일``하면  ``값이 달라짐``
  * 네트워크로 객체를 직렬화 하여 전송하는 경우, 보내는 쪽과 받는 쪽 모두 같은 serialVersionUID를 가져야함
  * 한쪽에서 클래스 변경해서 재컴파일하면 다른 serialVersionUID를 가짐 -> 역직렬화 실패
  * ``불가피하게 클래스의 수정``이 필요하다면 클래스 작성 시 serialVersionUID를 명시적(``상수``)으로 ``선언``
  ```java
  public class XXX implements Serializable  {
    static final long serialVersionUID = 정수값;  // 그래도 클래스마다 다른값을 갖도록 하는 것이 좋다
  }
  ```
#### writeObject() 와 readObject() 메소드
* 상속관계인 두 클래스 중 부모 클래스가 Serializable을 구현하고 있으면 자식은 구현하지않아도 자식 객체를 직렬화하면 부모필드 및 자식필드 모두 직렬화된다
* 그 반대는 부모필드는 제외되고 자식 필드만 직렬화된다.
* 둘다 하고싶다면?
  * 부모 클래스가 Serializable 구현하도록 한다
  * 자식클래스에서 writeObject()와 readObject() 메소드를 선언해서 부모객체의 필드를 직접 출력시킨다.
  ```java
  private void writeObject(ObjectOutputStream out) throws IOException {
    out.writeXXX(부모필드);     // 부모 객체의 필드값을 출력함, 부모 필드 수만큼 메소드추가해주자
    out.defaultWriteObject(); // 자식 객체의 필드값을 직렬화
  }
  private void readObject(ObjectInputStream in) throws IOException {
    부모필드 = in.readXXX();     // 부모 객체의 필드값을 출력함, 부모 필드 수만큼 메소드추가해주자
    in.defaultReadObject();   // 자식 객체의 필드값을 역직렬화
  }
  ```
  * 반드시 ``private`` 붙여줄 것
  * XXX에는 부모 필드 타입에 맞는 것을 선택해 사용
*** 