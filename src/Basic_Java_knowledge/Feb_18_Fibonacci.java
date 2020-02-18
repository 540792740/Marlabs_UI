package src.Basic_Java_knowledge;

public class Feb_18_Fibonacci {

    public static int fibo(int a){
        if(a == 0){return 0;}
        if(a == 1){return 1;}
        if(a == 2){return 1;}
        int a1 = 1, a2 =1;
        while (a >= 2){
            int temp = a1 + a2;
            a1 = a2;
            a2 = temp + a2;
            a--;
            System.out.print(a1 + " ");
        }
        return a1;
    }
    public static int fibo1(int a){
        if(a == 0){return 0;}
        if(a == 1){return 1;}
        if(a == 2){return 1;}
        else{
            return fibo1(a - 1) + fibo1(a - 2);
        }

    }




        public static void main(String[] args){
        System.out.println(fibo(10));
//        System.out.println(fibo1(50));

    }
}
