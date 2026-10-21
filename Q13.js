import java.util.Scanner;

public class Solution {
    public static long power(long a, long b) {
        if (b == 0) return 1;
        return a * power(a, b - 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long a = sc.nextLong();
        long b = sc.nextLong();
        System.out.println(power(a, b));
        sc.close();
    }
}
