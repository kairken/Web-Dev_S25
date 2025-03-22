# 1)
n = int(input())
if n % 2 == 1 or (n % 2 == 0 and 6 <= n <= 20):
  print("Weird")
else:
  print("Not Weird")

# 2)
def is_leap(year):
  return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)


#3) Division
a, b = int(input()), int(input())
print(a // b)
print(a / b)

# 4)
n = int(input())
for i in range(n):
  print(i ** 2)

# 5)
s, sub = input(), input()
count = sum(1 for i in range(len(s)) if s[i:].startswith(sub))
print(count)


#6) List Comprehension
x, y, z, n = (int(input()) for _ in range(4))
print([[i, j, k] for i in range(x+1) for j in range(y+1) for k in range(z+1) if i + j + k != n])


# 7) Tuple
n = int(input())
t = tuple(map(int, input().split()))
print(hash(t))

# 8) Score
n = int(input())
records = {name: list(map(float, marks)) for name, *marks in (input().split() for _ in range(n))}
print(f"{sum(records[input()])/len(records[input()]):.2f}")

# 9) Runner-up Score
n, scores = int(input()), list(map(int, input().split()))
print(sorted(set(scores))[-2])

# 10) sWAP cASE
def swap_case(s):
    return s.swapcase()
print(swap_case(input()))
