import java.util.Scanner;

public class Solution {
    public static String replaceChar(String str, char c1, char c2, int index) {
        if (index >= str.length()) return "";
        char current = str.charAt(index);
        if (current == c1) current = c2;
        return current + replaceChar(str, c1, c2, index + 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextLine()) {
            String str = sc.nextLine();
            char c1 = sc.next().charAt(0);
            char c2 = sc.next().charAt(0);
            System.out.println(replaceChar(str, c1, c2, 0));
        }
        sc.close();
    }
}
