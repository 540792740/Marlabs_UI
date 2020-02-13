package src;

import java.util.Random;

public class Java_basic_random {
    public static void main(String[] args){
        Random r = new Random();
        for(int i = 0; i < 3; i++){
            int number = r.nextInt(10);
            System.out.println(number);
        }
    }
}
