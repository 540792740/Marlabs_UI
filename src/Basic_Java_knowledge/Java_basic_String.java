package src.Basic_Java_knowledge;

public class Java_basic_String {
    public static void main(String[] args){
        String str = "abc";
        char data[] = {'a', 'b', 'c'};
        String s = new String(data);
        System.out.println(s.equals(str));

        // Byte to string
        byte bytes[] = {97, 98, 99};
        String str1 = new String(bytes);
        System.out.println(str1);

        // equal
        String s1 = "aBc";
        String s3 = "abc";
        System.out.println(s1.equalsIgnoreCase(s3));

        // concat
        System.out.println(s1.concat(s3));

        //Fist show up Index
        System.out.println(s1.indexOf("b"));

        // Substring
        System.out.println(s1.substring(0, s1.length() - 1));

        // Transfer string to char array
        String string =  "abcdefghigk";

        char[] chs = string.toCharArray();
        for(int i = 0; i < chs.length; i++){
            System.out.print(chs[i]+ " ");
        }

        byte[] bytes1 = string.getBytes();
        for(int i = 0; i < bytes1.length; i++){
            System.out.print(bytes1[i] + " ");
        }

        // Replace
        String replace = string.replace("abc", "ABC");
        System.out.println(replace);

        // Split
        String string1 = "ab cd ed sa";
        String[] str_arr = string1.split(" ");
        for (int i = 0; i < str_arr.length; i++){
            System.out.println(str_arr[i]);
        }

        int arr[] = {1, 2 ,3};
        String s4 = arrayToString(arr);
        System.out.println(s4);
    }
    private static String arrayToString(int[] arr){
        String s = new String("[");
        for (int x = 0; x < arr.length; x++){
            if (x == arr.length - 1){
                s = s.concat(arr[x] + "]");
            }
            else{
                s = s.concat(arr[x] + "");
            }
        }
        return s;

    }
}
