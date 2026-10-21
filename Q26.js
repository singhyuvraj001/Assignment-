import java.util.Scanner;

public class Solution {
    public static int binarySearch(int[] arr, int target, int left, int right) {
        if (left > right) return -1;
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            // Find the first occurrence
            int firstInLeft = binarySearch(arr, target, left, mid - 1);
            return (firstInLeft != -1) ? firstInLeft : mid;
        }
        if (arr[mid] > target) {
            return binarySearch(arr, target, left, mid - 1);
        }
        return binarySearch(arr, target, mid + 1, right);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int target = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();

        System.out.println(binarySearch(arr, target, 0, n - 1));
        sc.close();
    }
}
