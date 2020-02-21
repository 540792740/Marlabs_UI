package src.Basic_Java_knowledge;

import java.lang.reflect.Array;
import java.util.ArrayList;

class Student{
    int id;
    Student(int id){
        this.id = id;
    }
}

public class Class {
    // Construction
    public Student[] student;

    public Class(int n){
        this.student = new Student[n];

        for (int i = 0; i < n; i++) {
            this.student[i] = new Student(i);
        }
    }

}

class test{
    public static void main(String[] args) {
        Class cls = new Class(4);
        System.out.println(cls.student[2]);
    }
}