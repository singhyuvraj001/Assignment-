import java.util.Scanner;

public class Solution {
    public static void print1ToN(int n, int current) {
        if (current > n) return;
        System.out.print(current + " ");
        print1ToN(n, current + 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        print1ToN(n, 1);
        sc.close();
    }
}
