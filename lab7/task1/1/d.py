# A task
# n = int(input())
# arr = list(map(int, input().split()))
# for num in arr:
#   if num % 2 == 0:
#     print(num, end=" ")


# B task
# n = int(input())
# arr = list(map(int, input().split()))
# for num in arr:
#   if num % 2 == 0:
#     print(num, end=" ")


# C task
# num = int(input())
# arr = list(map(int, input().split()))
# sum = 0
# for num in arr:
#   if(num > 0):
#     sum += 1
# print(sum, end=" ")



# D task
# num = int(input())
# arr = list(map(int, input().split()))
# sum = 0
# for num in arr:
#   if(num < num+1):
#     sum +=1
# print(sum-1)



# E task
# n = int(input())
# arr = list(map(int, input().split()))
# for i in arr:
#   if (arr[i] > 0 and arr[i + 1] > 0) or (arr[i] < 0 and arr[i + 1] < 0):
#     print('YES')
#     break
#   else:
#     print('NO')
    


# F task
# n = int(input())
# arr = list(map(int, input().split()))
# count = 0
# for i in range(1, n- 1):
#   if arr[i] > arr[i - 1] and arr[i] > arr[i + 1]:
#     count += 1
# print(count)


# G task
n = int(input())
arr = list(map(int, input().split()))

for i in reversed(arr):
  print(i, end= " ")
