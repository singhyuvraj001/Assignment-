import java.util.Scanner;

public class Solution {
    public static int countDigits(int n) {
        if (n == 0) return 1; // Special case for input 0
        return countDigitsHelper(Math.abs(n));
    }

    private static int countDigitsHelper(int n) {
        if (n == 0) return 0;
        return 1 + countDigitsHelper(n / 10);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(countDigits(n));
        sc.close();
    }
}
