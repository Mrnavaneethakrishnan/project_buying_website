import java.util.Scanner;
import java.util.Arrays;

public class Untitled {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] days = new int[n];

        for (int i = 0; i < n; i++) {
            days[i] = sc.nextInt();
        }
        Arrays.sort(days);
        int maxSavedFriendships = 0;
        boolean[] used = new boolean[366];

        for (int i = 0; i < n; i++) {
            int currentDay = days[i];
            for (int j = currentDay; j >= 1; j--) {
                if (!used[j]) {
                    used[j] = true;
                    maxSavedFriendships++;
                    break;
                }
            }
        }
        System.out.println(maxSavedFriendships);

    }
}