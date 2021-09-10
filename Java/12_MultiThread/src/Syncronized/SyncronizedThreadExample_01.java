package Syncronized;

class CalcThread extends Thread{
    SharedArea1 sharedArea;


    public void run(){
        double total = 0.0;
        for(int cnt=1;cnt<10000;cnt+=2){
            if(cnt/2%2==0)
                total+=1.0/cnt;
            else
                total-=1.0/cnt;
        };
        sharedArea.result= total*4;
        sharedArea.isReady = true;
    }
}

class PrintThread extends Thread{
    SharedArea1 sharedArea;

    public void run(){
       while(sharedArea.isReady != true)
        continue;

            System.out.println(sharedArea.result);
    }
}

class SharedArea1{
    double result;
    boolean isReady;
}


public class SyncronizedThreadExample_01 {

    public static void main(String[] args) {


    SharedArea1 obj = new SharedArea1();
    CalcThread thread1 = new CalcThread();
    PrintThread thread2 = new PrintThread();

    thread1.sharedArea =obj;
    thread2.sharedArea =obj;

    thread1.start();
    thread2.start();

    //PrintThread에 while 문이 없으면 출력 값이 0.0이 나온다.
    // why?
        // CalcThread가 완료되기도 전에 PrintThread가 SharedArea의 result값을 가져가서 출력해버리기 때문
        // 운이좋아서 완료된 후에 가져갈수도 있긴하다.
    //Why use this while loop?
        // CalcThread가 for loop를 완료할 때 까지
        // while loop가 무한루프를 유지해서 PrintThread가 종료되지 않게 해준다.
        // CalcThread가 종료되서 SharedArea로 result 및 true 값을 넘기면
        // isReady가 true가 되면서 while loop 종료되고 PrintThread는 SharedAread의 result 값을 받아 출력문을 출력한다.

    //is it Problem?
        // CalcThread가 완료될 때 까지 PrintThread의 while문이 반복을 계속 유지하는데,
        // 이러한 방식은 무의미하게 계속 PrintThread가 작동하기 때문에 자원낭비이다.
    //how to resolve?
        // syncronized 블록이나 메소드를 이용한다
}
}
