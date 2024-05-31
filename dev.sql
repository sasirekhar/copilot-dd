-- define a select statement to get all students enrolled in a course
SELECT students.student_id, students.first_name, students.last_name, students.email, students.phone, students.city, students.state, students.zip_code
FROM courses.students
JOIN courses.registrations
ON students.student_id = registrations.student_id
JOIN courses.registration_items
ON registrations.registration_id = registration_items.registration_id
WHERE registration_items.course_id = 1;

-- write an index to improve the performance of the query
CREATE INDEX idx_course_id
ON courses.registration_items (course_id);

-- write a query to get the total number of students enrolled in a course
SELECT COUNT(DISTINCT students.student_id) AS total_students
FROM courses.students
JOIN courses.registrations
ON students.student_id = registrations.student_id
JOIN courses.registration_items
ON registrations.registration_id = registration_items.registration_id
WHERE registration_items.course_id = 1;


-- define a table for student attendance to capture attendance by class
CREATE TABLE courses.attendance (
    attendance_id INT IDENTITY (1, 1) PRIMARY KEY,
    registration_id INT NOT NULL,
    attendance_date DATE NOT NULL,
    attendance_status tinyint NOT NULL,
    -- Attendance status: 1 = Present; 2 = Absent; 3 = Late
    FOREIGN KEY (registration_id) REFERENCES courses.registrations (registration_id) ON DELETE CASCADE ON UPDATE CASCADE
);


-- select all staff members who are instructors
SELECT staff_id, first_name, last_name, email, phone
FROM courses.staffs
WHERE instructor_id IS NOT NULL;



-- define a stored procedure to get course enrollment by location
CREATE PROCEDURE GetCourseEnrollmentByLocation
    @location VARCHAR(100)
AS
BEGIN
    SELECT students.student_id, students.first_name, students.last_name, students.email, students.phone, students.city, students.state, students.zip_code
    FROM courses.students
    JOIN courses.registrations
    ON students.student_id = registrations.student_id
    JOIN courses.registration_items
    ON registrations.registration_id = registration_items.registration_id
    WHERE registration_items.course_id = 1
    AND students.city = @location;
END;


# define a stored procedure to get course enrollment by location
CREATE PROCEDURE GetCourseEnrollmentByLocation
    @location VARCHAR(100)
AS
BEGIN
    SELECT students.student_id, students.first_name, students.last_name, students.email, students.phone, students.city, students.state, students.zip_code
    FROM courses.students
    JOIN courses.registrations
    ON students.student_id = registrations.student_id
    JOIN courses.registration_items
    ON registrations.registration_id = registration_items.registration_id
    WHERE registration_items.course_id = 1
    AND students.city = @location;
END;


select * from courses.registrations where year(registration_date) = 2023 and month(registration_date) = 9;

SELECT * 
FROM courses.registrations 
WHERE registration_date >= '2023-09-01' AND registration_date < '2023-10-01';