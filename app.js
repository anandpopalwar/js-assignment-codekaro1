let allStudents=[]
let rollno=0

function submit(){
    let sName= document.getElementById('name').value;
   let sEmail= document.getElementById('email').value;
   
   
   let studentList = allStudents.filter((x)=>{
    return x.email==sEmail
 })
      if(studentList.length==0){
        rollno++
      let students ={
         name  : sName,
         email : sEmail,
         rollno:rollno,
      }
      allStudents.push(students)
      let addedstudent=allStudents.map((x)={
         allStudents:allStudents++
      })
      console.log('*new student registered in database')
      console.log(allStudents)
   } 
 else{
    console.log('*student already registred in the database and cannot register again ')
   
 }
   
}