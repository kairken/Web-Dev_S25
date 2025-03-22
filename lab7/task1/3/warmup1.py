# 1)sleep_in
def sleep_in(weekday, vacation):
  return not weekday or vacation

# 2)monkey_trouble
def monkey_trouble(a_smile, b_smile):
  return a_smile == b_smile

# 3)sum_double
def sum_double(a, b):
  return (a + b) * 2 if a == b else a + b

# 4)diff21
def diff21(n):
  return abs(n - 21) * 2 if n > 21 else abs(n - 21)

# 5)parrot_trouble
def parrot_trouble(talking, hour):
  return talking and (hour < 7 or hour > 20)

# 6)makes10
def makes10(a, b):
  return a == 10 or b == 10 or (a + b == 10)

# 7)near_hundred
def near_hundred(n):
  return abs(100 - n) <= 10 or abs(200 - n) <= 10

# 8)pos_neg
def pos_neg(a, b, negative):
  return (a < 0 and b < 0) if negative else (a < 0) != (b < 0)

# 9)not_string
def not_string(s):
  return s if s.startswith("not") else "not " + s

# 10)missing_char
def missing_char(s, n):
  return s[:n] + s[n+1:]

# 11)front_back
def front_back(s):
  return s if len(s) <= 1 else s[-1] + s[1:-1] + s[0]

# 12)front3
def front3(s):
  return s[:3] * 3
