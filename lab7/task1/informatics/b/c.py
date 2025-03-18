system_answer, student_answer = map(int, input().split())

if (system_answer == 1 and student_answer == 1) or (system_answer != 1 and student_answer != 1):
    print("YES")
else:
    print("NO")
