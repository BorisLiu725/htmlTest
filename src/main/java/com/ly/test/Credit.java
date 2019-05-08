package com.ly.test;

public class Credit {
    private Long ranking;

    private Double source;

    public Credit(){

    }
    public Credit(Long ranking,Double source){
        this.ranking = ranking;
        this.source = source;
    }

    @Override
    public String toString(){
        return "排名："+ranking + "分数:"+source;
    }

}
