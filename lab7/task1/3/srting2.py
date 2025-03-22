# 1) double_char
def double_char(s):
  return ''.join(c * 2 for c in s)

# 2) count_hi
def count_hi(s):
  return s.count("hi")

# 3) cat_dog
def cat_dog(s):
  return s.count("cat") == s.count("dog")

# 4) count_code
def count_code(s):
  return sum(1 for i in range(len(s) - 3) if s[i:i+2] == "co" and s[i+3] == "e")

# 5) end_other
def end_other(a, b):
  a, b = a.lower(), b.lower()
  return a.endswith(b) or b.endswith(a)

# 6) xyz_there
def xyz_there(s):
  return s.replace(".xyz", "").count("xyz") > 0
