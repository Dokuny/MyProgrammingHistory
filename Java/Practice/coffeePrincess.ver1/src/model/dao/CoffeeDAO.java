package model.dao;

import model.vo.Coffee;

import java.io.*;
import java.util.ArrayList;

public class CoffeeDAO {

    public ArrayList<Coffee> openList() {
        ArrayList<Coffee> list = new ArrayList<Coffee>();
        try(ObjectInputStream in=new ObjectInputStream(new FileInputStream("coffee.dat"))){
            while(in.available() != -1){
                list.add((Coffee)in.readObject());
            }
        } catch (EOFException e) {
            System.out.println("불러오기에 성공하였습니다");
        } catch(IOException e){
            System.out.println(e.getMessage());
        } catch(ClassNotFoundException e){
            System.out.println(e.getMessage());
        }

        return list;
    }

    public int saveList(ArrayList<Coffee> list){
        int result=-1;

        try(ObjectOutputStream out= new ObjectOutputStream(new FileOutputStream("coffee.dat"))){
            for(Coffee co:list){
                out.writeObject(co);

            }
            result =1;
       }catch(IOException e){
            System.out.println(e.getMessage());

        }
        return result;
    }

    public void outStream(ObjectOutputStream out,Coffee co){
        try{
            out.writeObject(co);
        }catch(IOException e){
            System.out.println(e.getMessage());
        }
    }
}
