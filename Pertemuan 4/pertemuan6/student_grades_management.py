students = [
    {"name": "Alice", "NIM": "119140001", "midterm_score": 85, "final_score": 90, "assignment_score": 80},
    {"name": "Bob", "NIM": "119140002", "midterm_score": 70, "final_score": 75, "assignment_score": 80},
    {"name": "Charlie", "NIM": "119140003", "midterm_score": 60, "final_score": 65, "assignment_score": 70},
    {"name": "David", "NIM": "119140004", "midterm_score": 50, "final_score": 55, "assignment_score": 60},
    {"name": "Eve", "NIM": "119140005", "midterm_score": 40, "final_score": 45, "assignment_score": 50}
]

def calculate_final_score(student):
    return round(0.3 * student["midterm_score"] + 0.4 * student["final_score"] + 0.3 * student["assignment_score"], 2)

def determine_grade(score):
    if score >= 80:
        return "A"
    elif score >= 70:
        return "B"
    elif score >= 60:
        return "C"
    elif score >= 50:
        return "D"
    else:
        return "E"

def display_students(student_list):
    headers = ["Name", "NIM", "Midterm", "Final", "Assignment", "Final Score", "Grade"]
    # Calculate column widths
    col_widths = [len(header) for header in headers]
    rows = []
    for s in student_list:
        final_score = calculate_final_score(s)
        grade = determine_grade(final_score)
        row = [s["name"], s["NIM"], str(s["midterm_score"]), str(s["final_score"]),
               str(s["assignment_score"]), str(final_score), grade]
        rows.append(row)
        col_widths = [max(col_widths[i], len(row[i])) for i in range(len(headers))]

    # Print header
    header_row = " | ".join([headers[i].ljust(col_widths[i]) for i in range(len(headers))])
    separator = "-+-".join(['-' * col_widths[i] for i in range(len(headers))])
    print(header_row)
    print(separator)

    # Print rows
    for row in rows:
        print(" | ".join([row[i].ljust(col_widths[i]) for i in range(len(row))]))

# Function to find highest or lowest scoring student
def find_extreme_student(student_list, find_max=True):
    if not student_list:
        return None
    extreme_student = student_list[0]
    extreme_score = calculate_final_score(extreme_student)
    for s in student_list[1:]:
        score = calculate_final_score(s)
        if (find_max and score > extreme_score) or (not find_max and score < extreme_score):
            extreme_score = score
            extreme_student = s
    return extreme_student

def add_student(student_list):
    name = input("Enter student name: ")
    NIM = input("Enter student NIM: ")
    midterm_score = float(input("Enter midterm score: "))
    final_score = float(input("Enter final score: "))
    assignment_score = float(input("Enter assignment score: "))
    student_list.append({
        "name": name,
        "NIM": NIM,
        "midterm_score": midterm_score,
        "final_score": final_score,
        "assignment_score": assignment_score
    })
    print(f"Student {name} added successfully!")

def filter_by_grade(student_list, grade):
    return [s for s in student_list if determine_grade(calculate_final_score(s)) == grade]

def class_average(student_list):
    if not student_list:
        return 0.0
    total = sum(calculate_final_score(s) for s in student_list)
    return round(total / len(student_list), 2)

def main():
    while True:
        print("\n--- Student Grades Management ---")
        print("1. Display all students")
        print("2. Add new student")
        print("3. Find highest score")
        print("4. Find lowest score")
        print("5. Filter by grade")
        print("6. Show class average")
        print("7. Exit")
        choice = input("Choose an option: ")

        if choice == "1":
            display_students(students)
        elif choice == "2":
            add_student(students)
        elif choice == "3":
            student = find_extreme_student(students, find_max=True)
            print(f"Highest scoring student: {student['name']} with final score {calculate_final_score(student)}")
        elif choice == "4":
            student = find_extreme_student(students, find_max=False)
            print(f"Lowest scoring student: {student['name']} with final score {calculate_final_score(student)}")
        elif choice == "5":
            grade = input("Enter grade to filter (A/B/C/D/E): ").upper()
            filtered = filter_by_grade(students, grade)
            if filtered:
                display_students(filtered)
            else:
                print(f"No students found with grade {grade}")
        elif choice == "6":
            print(f"Class average final score: {class_average(students)}")
        elif choice == "7":
            print("Exiting program. Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()

