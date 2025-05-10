// Status PASSED 0ms
package leetcode

func maxArea(height []int) int {
	left, right, maxArea := 0, len(height)-1, 0

	for left < right {
		h := min(height[left], height[right])
		w := right - left
		a := w * h

		if a > maxArea {
			maxArea = a
		}

		if height[left] < height[right] {
			left++
		} else {
			right--
		}
	}
	return maxArea
}

func min(a int, b int) int {
	if a < b {
		return a
	}
	return b
}

var _ = maxArea
