package controller;

import java.util.ArrayList;

import model.dao.CoffeeDao;
import model.exception.CoffeeException;
import model.vo.Coffee;

public class CoffeeManager {
	private Coffee[] orderArr; // 커피 배열
	private int count; // 현재 주문 수량
	private ArrayList<Coffee> orderList; // 주문 리스트
	private CoffeeDao coDao; // 주문 정보를 저장,불러올 객체
	
	public CoffeeManager() {
		orderArr=new Coffee[10];// 커피 주문을 10개 받는 객체 배열
		coDao=new CoffeeDao();
		orderList=coDao.openList();
	}
	
	public Coffee insertCoffee(Coffee coffee) { // 커피 주문 정보 등록하기
		coffee.setOrderNo(count+1);// 현재 주문된 커피의 주문 번호 등록
		orderArr[count++]=coffee;// 주문 리스트에 현재 주문을 추가하기
		
		return coffee;
	}
	
	public Coffee verifyCoffee(int orderNo)throws CoffeeException{
		if(orderNo > count) {
			throw new CoffeeException("잘못된 주문 정보입니다.");
		}
		
		return orderArr[orderNo-1];//
	}
	
	public void updateCoffee(int orderNo,Coffee coffee) {
		coffee.setOrderNo(orderNo);
		orderList.set(orderNo-1,coffee);
	}
	
	public void deleteCoffee(int idx) {
		orderList.remove(idx);
		// 주문번호 변경
		if(idx != orderList.size()) {
			for(int i=idx;i<orderList.size();i++) {
				orderList.get(i).setOrderNo(i+1);
			}
		}
	}

	public ArrayList<Coffee> getOrderList(){
		return orderList;
	}

	public void setOrderList(ArrayList<Coffee> orderList) {
		this. orderList = orderList;
	}

	public void close(){
		coDao.saveList(orderList);
	}
}