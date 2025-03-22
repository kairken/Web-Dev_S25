# 1) first_last6
def first_last6(nums):
  return nums[0] == 6 or nums[-1] == 6

# 2) same_first_last
def same_first_last(nums):
  return len(nums) > 0 and nums[0] == nums[-1]

# 3) make_pi
def make_pi():
  return [3, 1, 4]

# 4) common_end
def common_end(a, b):
  return a[0] == b[0] or a[-1] == b[-1]

# 5) sum3
def sum3(nums):
  return sum(nums)

# 6) rotate_left3
def rotate_left3(nums):
  return nums[1:] + nums[:1]

# 7) reverse3
def reverse3(nums):
  return nums[::-1]

# 8) max_end3
def max_end3(nums):
  max_val = max(nums[0], nums[-1])
  return [max_val] * 3

# 9) sum2
def sum2(nums):
  return sum(nums[:2])

# 10) middle_way
def middle_way(a, b):
  return [a[1], b[1]]

# 11) make_ends
def make_ends(nums):
  return [nums[0], nums[-1]]

# 12) has23
def has23(nums):
  return 2 in nums or 3 in nums
