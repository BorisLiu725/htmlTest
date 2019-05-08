package com.ly.test;

public class User {

    private String name;

    private String password;
    private Credit credit;

    public  User (Credit credit){
        this.credit = credit;
    }

    public void getResult(){
//        System.out.println(this.credit);

    }

    public void setData(String name){
        this.name = name ;

    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
