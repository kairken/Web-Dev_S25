# 1) count_evens
def count_evens(nums):
  return sum(1 for num in nums if num % 2 == 0)

# 2) big_diff
def big_diff(nums):
  return max(nums) - min(nums)

# 3) centered_average
def centered_average(nums):
  nums.sort()
  return sum(nums[1:-1]) // len(nums[1:-1])

# 4) sum13
def sum13(nums):
  total = 0
  i = 0
  while i < len(nums):
    if nums[i] == 13:
      i += 2
    else:
      total += nums[i]
      i += 1
  return total

# 5) sum67
def sum67(nums):
  total = 0
  ignore = False
  for num in nums:
    if num == 6:
      ignore = True
    elif num == 7 and ignore:
      ignore = False
    elif not ignore:
      total += num
  return total

# 6) has22
def has22(nums):
  for i in range(len(nums) - 1):
    if nums[i] == 2 and nums[i + 1] == 2:
      return True
  return False
