/* Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police. */

package LeetCode;

public class HouseRobber {
    
    public static int rob(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }
        if (nums.length == 1) {
            return nums[0];
        }

        int n = nums.length;
        int[] dp = new int[n];

        // Base cases
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        // Fill the dp array
        for (int i = 2; i < n; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        }

        return dp[n - 1];
    }

    public static void main(String[] args) {
        int[] nums1 = {1, 2, 3, 1};
        int[] nums2 = {2, 7, 9, 3, 1};

        System.out.println("Maximum amount of money you can rob from nums1: " + rob(nums1));  // Output: 4
        System.out.println("Maximum amount of money you can rob from nums2: " + rob(nums2));  // Output: 12
    }
}

