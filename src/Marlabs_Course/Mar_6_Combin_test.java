package src.Marlabs_Course;

public class Mar_6_Combin_test {
    public static void main(String[] args) {
        new Mar_6_Combin_test().calculate(new StringBuffer(), 1, 0, 0, 1);
    }

    private void calculate(StringBuffer sb, int i, int r, int n, int f) {
        sb.append(i);
        n = n * 10 + i;
        if (i == 9) {
            if (r + f * n == 100) {
                System.out.print(sb);
                System.out.println("=100");
            }
            sb.deleteCharAt(sb.length() - 1);
            return;
        }
        // 1:跟""
        calculate(sb, i + 1, r, n, f);
        if (sb.charAt(sb.length() - 1) == '+' || sb.charAt(sb.length() - 1) == '-')
            return;
        r += f * n;

        // 2:跟"+"
        sb.append('+');
        calculate(sb, i + 1, r, 0, 1);

        // 3:跟"-"
        sb.setCharAt(sb.length() - 1, '-');
        calculate(sb, i + 1, r, 0, -1);
        sb.deleteCharAt(sb.length() - 1);
        sb.deleteCharAt(sb.length() - 1);
    }
}
