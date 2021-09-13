package view;

import java.util.Scanner;

import controller.CoffeeManager;
import model.exception.CoffeeException;
import model.vo.Coffee;

public class CoffeeMenu {
    public static CoffeeManager cm = new CoffeeManager();

    public static void showMenu() {
        Scanner sc = new Scanner(System.in);

        // # 1. 변수 사용
		/*
		System.out.println("== 길동이의 커피 프린세스 버전 1 ==");
		System.out.println("---------------------------------");
		System.out.println("1. 아메리카노");
		System.out.println("2. 카페라떼");
		System.out.println("3. 카푸치노");
		System.out.print("메뉴를 선택하세요 : ");
		int sel = sc.nextInt();
		System.out.print("주문 할 잔의 수 : ");
		int cups = sc.nextInt();

		String coffeeName = null;
		int price = 0;

		switch(sel) {
		case 1 :
			coffeeName = "아메리카노";
			price = 3000;
			break;
		case 2 :
			coffeeName = "카페라떼";
			price = 3500;
			break;
		case 3 :
			coffeeName = "카푸치노";
			price = 4000;
			break;
		}

		System.out.println("주문하신 커피는 " + coffeeName + "이며");
		System.out.println("총 "+ cups + "잔이고");
		System.out.println("가격은 " + (price*cups) + "원 입니다.");
		*/

        // # 2. 배열 사용
		/*
		int[] cup = new int[3];
		System.out.println("== 길동이의 커피 프린세스 버전 1 ==");
		System.out.println("---------------------------------");
		System.out.println("1. 아메리카노");
		System.out.println("2. 카페라떼");
		System.out.println("3. 카푸치노");
		System.out.print("메뉴를 선택하세요 : ");
		cup[0] = sc.nextInt();
		System.out.print("주문 할 잔의 수 : ");
		cup[1] = sc.nextInt();

		String coffeeName = null;
		int price = 0;

		switch(cup[0]) {
		case 1 :
			coffeeName = "아메리카노";
			cup[2] = 3000;
			break;
		case 2 :
			coffeeName = "카페라떼";
			cup[2] = 3500;
			break;
		case 3 :
			coffeeName = "카푸치노";
			cup[2] = 4000;
			break;
		}

		System.out.println("주문하신 커피는 " + coffeeName + "이며");
		System.out.println("총 "+ cup[1] + "잔이고");
		System.out.println("가격은 " + (cup[2]*cup[1]) + "원 입니다.");
		*/

        // # 3. Coffee 객체를 사용

		/*initMenu(2.0);
		System.out.print("메뉴를 선택하세요 : ");
		int sel = sc.nextInt();

		System.out.print("주문 할 잔의 수 : ");
		int cup = sc.nextInt();

		Coffee cf = new Coffee(sel, cup);

		System.out.println("주문하신 커피의 정보입니다.");
		System.out.println(cf);
		*/

        // # 4. 객체 배열을 이용

        do {
            initMenu(3.0);
            System.out.print("메뉴 확인 : ");
            int sel = sc.nextInt();

            switch(sel) {
                case 1 :
                    insertCoffee();
                    break;
                case 2 :
                    selectCoffeeOne();
                    break;
                case 3 :
                    updateCoffee();
                    break;
                case 4 :
                    deleteCoffee();
                    break;
                case 5 :
                    sleectCoffeeAll();
                    break;
                case 6 :
                    System.out.print("정말 종료 하시겠습니까?(Y/N) : ");
                    if(sc.next().toUpperCase().charAt(0) == 'Y') {
                        sc.close();
                        return;
                    }
                    else
                        System.out.println("메뉴를 다시 불러 옵니다.");
            }

        }while(true);

    }



    // 주문 조회용 메소드
    public static void initMenu(double version) {
        System.out.println("== 길동이의 커피 프린세스 버전 " + version + "==");
        System.out.println("---------------------------------");
        System.out.println("1. 커피 주문");
        System.out.println("2. 주문 번호 확인");
        System.out.println("3. 주문 내용 변경");
        System.out.println("4. 주문 취소");
        System.out.println("5. 주문 전체 내역 확인");
        System.out.println("6. 프로그램 종료");

    }

    public static void insertCoffee() {
        Scanner sc = new Scanner(System.in);

        System.out.println("---- 메뉴 ----");
        System.out.println("1. 아메리카노");
        System.out.println("2. 카페라떼");
        System.out.println("3. 카푸치노");

        System.out.println("메뉴 확인 : ");
        int sel = sc.nextInt();

        System.out.println("주문 잔 수 : ");
        int cups = sc.nextInt();

        System.out.println("주문 정보 확인 : ");
        System.out.println(cm.insertCoffee(new Coffee(sel, cups)));

    }

    public static void selectCoffeeOne() {
        Scanner sc = new Scanner(System.in);
        System.out.print("주문 번호 확인 : ");
        int orderNo = sc.nextInt();

        try {
            System.out.println("현재 주문 내역 : ");
            System.out.println(cm.verifyCoffee(orderNo));
        }catch(CoffeeException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void updateCoffee() {
        Scanner sc = new Scanner(System.in);
        System.out.print("주문 번호 확인 : ");
        int orderNo = sc.nextInt();

        try {
            System.out.println("주문 내역 확인");
            System.out.println(cm.verifyCoffee(orderNo));
            System.out.println("---- 메뉴 ----");
            System.out.println("1. 아메리카노");
            System.out.println("2. 카페라떼");
            System.out.println("3. 카푸치노");
            System.out.println("메뉴 확인 : ");
            int sel = sc.nextInt();
            System.out.println("주문 잔 수 : ");
            int cups = sc.nextInt();
            cm.updateCoffee(orderNo, new Coffee(sel, cups));
        }catch(CoffeeException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void deleteCoffee() {
        Scanner sc = new Scanner(System.in);
        System.out.print("주문 번호 확인 : ");
        int orderNo = sc.nextInt();

        try {
            System.out.println("주문 내역 확인");
            System.out.println(cm.verifyCoffee(orderNo));
            System.out.println("정말 취소하시겠습니까?(Y,N)");
            if(sc.next().toUpperCase().charAt(0) == 'Y') {
                cm.deleteCoffee(orderNo-1);
                System.out.println("주문이 정상적으로 삭제되었습니다.");
            }else {
                System.out.println("메인으로 돌아갑니다.");
            }
        }catch(CoffeeException e) {
            System.out.println(e.getMessage());
        }

    }
}


