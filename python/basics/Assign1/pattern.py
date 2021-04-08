# Pattern Program

""" # --------------------PATTERN 1-------------------
print('\n', '--------------------PATTERN 1-------------------')

for x in range(20):
    print('*', end='')

print('\n', '--------------------PATTERN 2-------------------')
# --------------------PATTERN 2-------------------

for x in range(3):
    print('A' * 3)

# --------------------PATTERN 3-------------------
print('\n', '--------------------PATTERN 3-------------------')

for x in range(3):
    print('*' * 5)

# --------------------PATTERN 4-------------------
print('\n', '--------------------PATTERN 4-------------------')

val = int(input('Enter the value '))
p_val = str(val)
for x in range(val):
    print(p_val * val)


# --------------------PATTERN 5-------------------
print('\n', '--------------------PATTERN 5-------------------')

num = 1
val = int(input('Enter the value '))
for i in range(val):
    for j in range(val):
        print(num, end='')

    num = num + 1
    print('\n')


# --------------------PATTERN 6-------------------
print('\n', '--------------------PATTERN 6-------------------')

val = int(input('Enter the value   '))
num = val
for i in range(val, 0, -1):
    for j in range(val):
        print(num, end='')

    num = num - 1
    print('\n')




# --------------------PATTERN 7-------------------
print('\n', '--------------------PATTERN 7-------------------')

for x in range(5):
    print('*'*x)

# --------------------PATTERN 8-------------------
print('\n', '--------------------PATTERN 8-------------------')

for x in range(5):
    print('A'*x)


# --------------------PATTERN 9-------------------
print('\n', '--------------------PATTERN 9-------------------')

for x in range(5, 0, -1):
    print('*'*x)


# --------------------PATTERN 10-------------------
print('\n', '--------------------PATTERN 10-------------------')

num = 65

for i in range(0, 5):
    for j in range(0, i + 1):
        char = chr(num)
        print(char, end='')

    num = num+1
    print('\n')


# --------------------PATTERN 11-------------------
print('\n', '--------------------PATTERN 11-------------------')

num = 1

for i in range(0, 5):
    for j in range(0, i + 1):

        print(num, end='')

    num = num+1
    print('\n')



# --------------------PATTERN 13-------------------
print('\n', '--------------------PATTERN 13-------------------')


for i in range(0, 5):

    for j in range(0, i):
        num = j+65
        char = chr(num)
        print(char, end='')

    print('\n')


# --------------------PATTERN 14-------------------
print('\n', '--------------------PATTERN 14-------------------')


val = int(input('Enter the value   '))
for i in range(val, 0, -1):
    for j in range(i):
        print(j+1, end='')

    print('\n')



# --------------------PATTERN 15-------------------
print('\n', '--------------------PATTERN 15-------------------')

row = 5
col = 20

for i in range(1, row+1):
    for j in range(1, col+1):
        if (i == 1 or i == row or j == 1 or j == col):
            print('*', end="")

        else:
            print(' ', end='')

    print('\n')



# --------------------PATTERN 16-------------------
print('\n', '--------------------PATTERN 16-------------------')

num = 65

for i in range(5, 0, -1):
    for j in range(0, i):
        num = j+65
        char = chr(num)
        print(char, end='')

    print('\n')


# --------------------PATTERN 17-------------------
print('\n', '--------------------PATTERN 17-------------------')


for i in range(0, 5):
    for j in range(5, i, -1):
        print(j, end='')

    print('\n')



# --------------------PATTERN 18-------------------
print('\n', '--------------------PATTERN 18-------------------')

for i in range(0, 5):
    for j in range(5, i, -1):
        num = (j-1)+65
        char = chr(num)
        print(char, end='')
    print('\n')




# --------------------PATTERN 19-------------------
print('\n', '--------------------PATTERN 19-------------------')


name = "Python"
x = ""
for i in name:
    x += i
    print(x)


# --------------------PATTERN 20-------------------
print('\n', '--------------------PATTERN 20-------------------')

A = 65

for i in range(5, 0, -1):
    for j in range(5, i, -1):
        char = chr(A)
        print(char, end='')

        A = A + 1

    print('\n')





# --------------------PATTERN 21-------------------
print('\n', '--------------------PATTERN 21-------------------')

A = 1

for i in range(5, 0, -1):
    for j in range(5, i, -1):
        print(A, end='')

        A = A + 1

    print('\n')

"""

# --------------------PATTERN 22-------------------
print('\n', '--------------------PATTERN 22-------------------')

num = int(input("Enter the value "))

for row in range(num):
    val = row + 1
    dec = num - 1
    for col in range(row + 1):
        print(format(val, '<4'), end='')
        val = val + dec
        dec = dec - 1

    print()
