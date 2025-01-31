type NestedObject = {
  group_no_from_student_database: string;
  manifesto_grade_from_student_manifesto: string;
  classes_missed_nov_dec: number | "";
  program_attendance_rating: number | "";
  jan_sept_2024_total_classes_attended: number | "";
  submitted_make_up_tasks: number | "";
  not_graded_makeup_task: number | "";
  school_fees_status: "";
  first_middle_last_name: string;
  last_modified: string;
  jan_sept_2024_total_no_of_classes_held: number | "";
  key_broadcast: string;
  application_status: string;
  cum_total_classes_missed: number | "";
  required_mt_to_graduate: number | "";
  jan_sept_2024_total_classes_missed: number | "";
  matric_number: string;
  group_no_from_student_database: string;
  student_category: string;
  rejected_makeup_task_submissions: number | "";
  phone: string;
  student_database: string;
  email_address: string;
  cum_total_classes_attended: number | "";
  classes_attended_nov_dec: number | "";
  test_filter: string;
  make_up_task: string;
  status_notes: string;
  [key: string]: any;
};

type schoolFeesType = {
  [key: string]: any;
};

type faq = {
  question: string;
  answer: string;
};

interface GraduationProps {
  data: NestedObject;
}

type overallStatusType = {
  group_no_from_student_database: string;
  manifesto_grade_from_student_manifesto: string;
  classes_missed_nov_dec: number | "";
  program_attendance_rating: number | "";
  jan_sept_2024_total_classes_attended: number | "";
  submitted_make_up_tasks: number | "";
  not_graded_makeup_task: number | "";
  school_fees_status: "";
  first_middle_last_name: string;
  last_modified: string;
  jan_sept_2024_total_no_of_classes_held: number | "";
  key_broadcast: string;
  application_status: string;
  cum_total_classes_missed: number | "";
  required_mt_to_graduate: number | "";
  jan_sept_2024_total_classes_missed: number | "";
  matric_number: string;
  group_no_from_student_database: string;
  student_category: string;
  rejected_makeup_task_submissions: number | "";
  phone: string;
  student_database: string;
  email_address: string;
  cum_total_classes_attended: number | "";
  classes_attended_nov_dec: number | "";
  test_filter: string;
  make_up_task: string;
  status_notes: string;
  [key: string]: any;
};

type MakeupTaskType = {
  topic_code: string;
  date: string; // ISO string date format: '2024-01-18T23:00:00.000Z'
  notes: string;
  topic_title: string;
  phone: number;
  moderator: string;
  name: string;
  faculty_add_any_guests: string;
  email: string;
  make_up_grade: string;
  theme: string;
  confirmation: boolean;
  attendance_record: string;
  reviewer: string;
  matric_number: string;
  total_missed_classes: number;
  student_category: string;
  reviewer_comments: string;
  [key: string]: any;
};

type MakeupTaskListType = MakeupTaskType[];

type AssignmentType = {
  matric_number: string;
  upload_your_assignment: string; // ISO string date format: '2024-01-18T23:00:00.000Z'
  assignment_type: string;
  group_no_name: string;
  which_faculty_s_assignment_are_you_submitting: number;
  [key: string]: any;
};

type AssignmentListType = AssignmentType[];


type AttendanceType = {
  date: string,
  course_code: string,
  theme: string,
  status: StatusOptions,
  in_class: number
  month:string
};

type StatusOptions =
  | "None"
  | "T - Re-watch Class (Sent SLO an absence Notification)"
  | "Waived by FLO but watch class"
  | "Attended Class"
  | "Not Required"
  | "Missed Class - Spent below 2hrs  in Class - Re-Watch Class & Take Makeup Test"
  | "Did not attend class - Watch Class & Take Makeup Test"
  | "M-  Taken Make-up class, (Makeup Accepted)";

type AttendanceListType = AttendanceType[];
