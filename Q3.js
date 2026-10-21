import java.util.Scanner;

public class Solution {
    public static void printEven(int current, int n) {
        if (current > n) return;
        System.out.print(current + " ");
        printEven(current + 2, n);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        printEven(2, n);
        sc.close();
    }
}
