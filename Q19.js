import java.util.Scanner;

public class Solution {
    public static int countChar(String str, char c, int index) {
        if (index >= str.length()) return 0;
        int count = (str.charAt(index) == c) ? 1 : 0;
        return count + countChar(str, c, index + 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextLine()) {
            String str = sc.nextLine();
            char c = sc.nextLine().charAt(0);
            System.out.println(countChar(str, c, 0));
        }
        sc.close();
    }
}
