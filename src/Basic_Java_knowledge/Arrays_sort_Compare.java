package src.Basic_Java_knowledge;

import java.util.Arrays;
import java.util.Comparator;

public class Arrays_sort_Compare {
    public static void main(String[] args){
        Integer[] a = {9,2,4,7,1,4,7,2};

        Comparator c1 = new Mycomparator();

        Arrays.sort(a, c1);

        for(int i = 0; i < a.length; i++){
            System.out.print(a[i] + " ");
        }
    }
}

class Mycomparator implements Comparator<Integer>{

    @Override
    public int compare(Integer o1, Integer o2) {
        if (o1 < o2){return 1;}
        else if(o1 > o2){return -1;}
        else{return 0;}
    }
}