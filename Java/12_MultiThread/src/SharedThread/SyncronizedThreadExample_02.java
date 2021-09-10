package SharedThread;

class Account{
    String accountNo,ownerName;
    int balance;

    public Account(String accountNo, String ownerName, int balance) {
        this.accountNo = accountNo;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    void deposit(int amount){
        balance+=amount;
    }

    void withdraw(int amount){
        if(balance<amount)
            return;
        balance -=amount;
    }
}

class SharedArea2{
    Account account1;
    Account account2;
}

class TransferThread extends Thread{
    SharedArea2 sharedArea;

    TransferThread(SharedArea2 area){
        sharedArea=area;
    }

    public void run(){
        for(int cnt=0;cnt<3;cnt++){
            synchronized (sharedArea) {
                sharedArea.account1.withdraw(1000000);
                System.out.println("이몽룡 계좌:100만원 인출");
                sharedArea.account2.deposit(1000000);
                System.out.println("성춘향 계좌:100만원 입금");
            }
        }
    }
}

class PrintThread2 extends Thread{
    SharedArea2 sharedArea;

    PrintThread2(SharedArea2 area){
        sharedArea= area;
    }

    public void run(){
        for(int cnt=0;cnt<3;cnt++){
            synchronized (sharedArea) {   //syncronized 블록을 통해서 sharedArea 객체를 중복이용하지 못하게 만들어준다.
                int sum = sharedArea.account1.balance + sharedArea.account2.balance;
                System.out.println("계좌잔액 합계 :" + sum);
            }
                try {
                    Thread.sleep(1);
                } catch (InterruptedException e) {
                    System.out.println(e.getMessage());
                }

        }
    }
}

public class SyncronizedThreadExample_02 {
     public static void main(String[] args){
        SharedArea2 area = new SharedArea2();
        area.account1=new Account("111-111-1111","이몽룡",30000000);
        area.account2=new Account("222-222-2222","성춘향",30000000);


        TransferThread thread1 = new TransferThread(area);
        PrintThread2 thread2 = new PrintThread2(area);

        thread1.start();
        thread2.start();

     }

}
