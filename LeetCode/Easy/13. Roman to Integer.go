// Status PASSED 0ms
package leetcode

var romanMap = map[byte]int{
	'I': 1,
	'V': 5,
	'X': 10,
	'L': 50,
	'C': 100,
	'D': 500,
	'M': 1000,
}

// Solution 1 PASSED 3ms
func romanToInt(s string) int {
	vs := []int{}
	sum := 0
	for i := 0; i < len(s); i++ {
		for k, v := range romanMap {
			if s[i] == k {
				vs = append(vs, v)
			}
		}
	}
	for i := 0; i <= len(vs)-1; i++ {
		if i+1 < len(vs) {
			if vs[i] < vs[i+1] {
				sum += vs[i+1] - vs[i]
				i++
				continue
			}
		}
		sum += vs[i]
	}
	return sum
}

// Solution 2 PASSED 0ms
func romanToInt2(s string) int {
	sum := 0
	n := len(s)
	for i := 0; i < n; i++ {
		val := romanMap[s[i]]
		if i+1 < n && val < romanMap[s[i+1]] {
			sum -= val
		} else {
			sum += val
		}
	}
	return sum
}

var _ = romanToInt
var _ = romanToInt2
