# 1) hello_name
def hello_name(name):
  return f"Hello {name}!"

# 2) make_abba
def make_abba(a, b):
  return a + b + b + a

# 3) make_tags
def make_tags(tag, word):
  return f"<{tag}>{word}</{tag}>"

# 4) make_out_word
def make_out_word(out, word):
  return out[:2] + word + out[2:]

# 5) extra_end
def extra_end(s):
  return s[-2:] * 3

# 6) first_two
def first_two(s):
  return s[:2]

# 7) first_half
def first_half(s):
  return s[:len(s)//2]

# 8) without_end
def without_end(s):
  return s[1:-1]

# 9) combo_string
def combo_string(a, b):
  return a + b + a if len(a) < len(b) else b + a + b

# 10) non_start
def non_start(a, b):
  return a[1:] + b[1:]

# 11) left2
def left2(s):
  return s[2:] + s[:2]
