import java.util.Scanner;

public class Solution {
    public static String decimalToBinary(int n) {
        if (n == 0) return "0";
        if (n == 1) return "1";
        return decimalToBinary(n / 2) + (n % 2);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(decimalToBinary(n));
        sc.close();
    }
}
