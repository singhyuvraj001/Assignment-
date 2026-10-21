import java.util.Scanner;

public class Solution {
    public static String removeChar(String str, char c, int index) {
        if (index >= str.length()) return "";
        char current = str.charAt(index);
        if (current == c) {
            return removeChar(str, c, index + 1);
        }
        return current + removeChar(str, c, index + 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextLine()) {
            String str = sc.nextLine();
            char c = sc.nextLine().charAt(0);
            System.out.println(removeChar(str, c, 0));
        }
        sc.close();
    }
}
