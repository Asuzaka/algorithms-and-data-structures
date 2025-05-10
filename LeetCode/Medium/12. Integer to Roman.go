// Status PASSED 0 ms
package leetcode

// Solution 1 PASSED 0ms
func intToRoman(num int) string {
	an := ""
	th, h, te, o := num/1000, (num%1000)/100, (num%100)/10, num%10
	for th > 0 {
		an += "M"
		th--
	}
	for h > 0 {
		if h == 9 {
			an += "CM"
			break
		}
		if h >= 5 {
			an += "D"
			h -= 5
			continue
		}
		if h == 4 {
			an += "CD"
			break
		}
		an += "C"
		h--
	}
	for te > 0 {
		if te == 9 {
			an += "XC"
			break
		}
		if te >= 5 {
			an += "L"
			te -= 5
			continue
		}
		if te == 4 {
			an += "XL"
			break
		}
		an += "X"
		te--
	}
	for o > 0 {
		if o == 9 {
			an += "IX"
			break
		}
		if o >= 5 {
			an += "V"
			o -= 5
			continue
		}
		if o == 4 {
			an += "IV"
			break
		}
		an += "I"
		o--
	}
	return an
}

// Solution 2

var RV = []struct {
	value  int
	symbol string
}{
	{1000, "M"},
	{900, "CM"},
	{500, "D"},
	{400, "CD"},
	{100, "C"},
	{90, "XC"},
	{50, "L"},
	{40, "XL"},
	{10, "X"},
	{9, "IX"},
	{5, "V"},
	{4, "IV"},
	{1, "I"},
}

// Solution 2 PASSED 0ms
func intToRoman2(num int) string {
	result := ""
	for _, r := range RV {
		for num >= r.value {
			result += r.symbol
			num -= r.value
		}
	}
	return result
}

// Solution 2 Optimized by GPT 0ms
func intToRoman2M(num int) string {
	result := make([]byte, 0, 15)
	for _, r := range RV {
		for num >= r.value {
			result = append(result, r.symbol...)
			num -= r.value
		}
		if num == 0 {
			break
		}
	}
	return string(result)
}

var (
	_ = intToRoman
	_ = intToRoman2
	_ = intToRoman2M
)
