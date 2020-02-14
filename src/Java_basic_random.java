package src;

import java.util.Random;
import java.util.Scanner;

public class Java_basic_random {
    public static void main(String[] args){
        Random r = new Random();
        int number = r.nextInt(10);

        // Guess Number Game
        while (true){
            System.out.println("Input your number");
            Scanner sc = new Scanner(System.in);
            int guess = sc.nextInt();
            if (guess == number){
                System.out.println("Right");
                break;
            }
            else if (guess > number){System.out.println("Find a small number");}

            else if (guess < number){System.out.println("Find a large number");}
        }
    }
}
