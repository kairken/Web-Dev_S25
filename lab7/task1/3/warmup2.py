# 1) string_times
def string_times(s, n):
  return s * n

# 2) front_times
def front_times(s, n):
  return s[:3] * n

# 3) string_bits
def string_bits(s):
  return s[::2]

# 4) string_splosion
def string_splosion(s):
  return ''.join(s[:i+1] for i in range(len(s)))

# 5) last2
def last2(s):
  if len(s) < 2:
      return 0
  last_two = s[-2:]
  return sum(1 for i in range(len(s) - 2) if s[i:i+2] == last_two)

# 6) array_count9
def array_count9(nums):
  return nums.count(9)

# 7) array_front9
def array_front9(nums):
  return 9 in nums[:4]

# 8) array123
def array123(nums):
  return any(nums[i:i+3] == [1, 2, 3] for i in range(len(nums) - 2))

# 9) string_match
def string_match(a, b):
  return sum(1 for i in range(min(len(a), len(b)) - 1) if a[i:i+2] == b[i:i+2])
