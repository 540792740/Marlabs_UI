package src;

public class Feb_13_static {
    private String name;
    private int age;
    private int sid;

    public static int numberOfStudent = 0;
    public Feb_13_static(String name, int age){
        this.name = name;
        this.age = age;
        this.sid = ++numberOfStudent;
    }
    public void show(){
        System.out.print(name);
        System.out.print(age);
        System.out.print( "  " + sid);
        System.out.println();
    }


    public static void main(String[] args) {
        Feb_13_static f1 = new Feb_13_static("Li", 23);
        Feb_13_static f2 = new Feb_13_static("wj", 26);
        Feb_13_static f3 = new Feb_13_static("ks", 25);
        Feb_13_static f4 = new Feb_13_static("sv", 22);

        f1.show();
        f2.show();
        f3.show();
        f4.show();
    }

}
