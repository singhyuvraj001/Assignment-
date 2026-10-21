import java.util.Scanner;

public class Solution {
    public static int fibonacci(int n) {
        if (n == 0) return 0;
        if (n == 1) return 1;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    public static void printFibonacciSeries(int n, int current) {
        if (current >= n) return;
        System.out.print(fibonacci(current) + " ");
        printFibonacciSeries(n, current + 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        printFibonacciSeries(n, 0);
        sc.close();
    }
}
