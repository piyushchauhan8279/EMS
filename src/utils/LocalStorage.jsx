const employees=[
    {
      "id": 1,
      "email": "emp1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Fix login bug",
          "taskDescription": "Resolve authentication issue in user login.",
          "date": "2025-09-03",
          "category": "Bug Fix",
          "accepted": true,
          "newTask": false,
          "failed": false,
          "completed": true
        },
        {
          "taskTitle": "Update UI",
          "taskDescription": "Revamp dashboard layout with modern design.",
          "date": "2025-09-01",
          "category": "UI/UX",
          "accepted": true,
          "newTask": false,
          "failed": false,
          "completed": false
        },
        {
          "taskTitle": "Write unit tests",
          "taskDescription": "Add test cases for user service APIs.",
          "date": "2025-09-02",
          "category": "Testing",
          "accepted": false,
          "newTask": true,
          "failed": false,
          "completed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "emp2@example.com",
      "password": "456",
      "tasks": [
        {
          "taskTitle": "Database backup",
          "taskDescription": "Perform weekly backup of production database.",
          "date": "2025-08-30",
          "category": "Maintenance",
          "accepted": true,
          "newTask": false,
          "failed": false,
          "completed": true
        },
        {
          "taskTitle": "Optimize query",
          "taskDescription": "Improve performance of search API.",
          "date": "2025-09-03",
          "category": "Backend",
          "accepted": true,
          "newTask": false,
          "failed": false,
          "completed": false
        },
        {
          "taskTitle": "Prepare report",
          "taskDescription": "Generate weekly analytics report for sales team.",
          "date": "2025-09-02",
          "category": "Analytics",
          "accepted": false,
          "newTask": true,
          "failed": false,
          "completed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "emp3@example.com",
      "password": "789",
      "tasks": [
        {
          "taskTitle": "Fix CSS issue",
          "taskDescription": "Correct header alignment on mobile view.",
          "date": "2025-09-01",
          "category": "Frontend",
          "accepted": true,
          "newTask": false,
          "failed": false,
          "completed": true
        },
        {
          "taskTitle": "Add notifications",
          "taskDescription": "Implement push notifications for new messages.",
          "date": "2025-09-04",
          "category": "Feature",
          "accepted": true,
          "newTask": true,
          "failed": false,
          "completed": false
        },
        {
          "taskTitle": "Fix API docs",
          "taskDescription": "Update outdated API documentation.",
          "date": "2025-08-31",
          "category": "Documentation",
          "accepted": false,
          "newTask": false,
          "failed": true,
          "completed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "emp4@example.com",
      "password": "321",
      "tasks": [
        {
          "taskTitle": "Server monitoring",
          "taskDescription": "Check logs for unusual activities.",
          "date": "2025-09-02",
          "category": "DevOps",
          "accepted": true,
          "newTask": false,
          "failed": false,
          "completed": true
        },
        {
          "taskTitle": "Improve caching",
          "taskDescription": "Implement Redis cache for product details.",
          "date": "2025-09-01",
          "category": "Backend",
          "accepted": true,
          "newTask": false,
          "failed": false,
          "completed": false
        },
        {
          "taskTitle": "Email template",
          "taskDescription": "Design promotional email template.",
          "date": "2025-09-03",
          "category": "Marketing",
          "accepted": false,
          "newTask": true,
          "failed": false,
          "completed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "emp5@example.com",
      "password": "654",
      "tasks": [
        {
          "taskTitle": "Customer feedback",
          "taskDescription": "Collect and analyze user feedback forms.",
          "date": "2025-08-29",
          "category": "Support",
          "accepted": true,
          "newTask": false,
          "failed": false,
          "completed": true
        },
        {
          "taskTitle": "Bug triage",
          "taskDescription": "Review and prioritize bug reports.",
          "date": "2025-09-01",
          "category": "Bug Fix",
          "accepted": true,
          "newTask": false,
          "failed": false,
          "completed": false
        },
        {
          "taskTitle": "Security patch",
          "taskDescription": "Apply latest security updates.",
          "date": "2025-09-03",
          "category": "Security",
          "accepted": false,
          "newTask": true,
          "failed": false,
          "completed": false
        }
      ]
    }
  ]


const admin=[
  {
    "id": 101,
    "email": "admin@example.com",
    "password": "999"
  }
]

export const setLocalStorage=()=>{
  localStorage.setItem("employees",JSON.stringify(employees))
  localStorage.setItem("admin",JSON.stringify(admin))
}

export const getStorage=()=>{
  const employeesData=JSON.parse(localStorage.getItem("employees"))
  const adminData=JSON.parse(localStorage.getItem("admin"))

  console.log(employeesData);
  console.log(adminData);
  
}