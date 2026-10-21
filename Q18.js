import java.util.Scanner;

public class Solution {
    public static int binaryToDecimal(String binary, int index) {
        if (index == binary.length() - 1) {
            return binary.charAt(index) - '0';
        }
        int powerOfTwo = (int) Math.pow(2, binary.length() - 1 - index);
        return (binary.charAt(index) - '0') * powerOfTwo + binaryToDecimal(binary, index + 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNext()) {
            String binary = sc.next();
            System.out.println(binaryToDecimal(binary, 0));
        }
        sc.close();
    }
}
