//UC3 Function Employee Hours
{
    const IS_PART_TIME = 1;
    const IS_Full_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR=20;
    let empCheck=Math.floor(Math.random() * 10)%3;
    function getEmpHrs(){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
    
        case IS_Full_TIME:
            return FULL_TIME_HOURS;
            break;
        default:
            return 0;
        }
    }
    let empHrs=getEmpHrs();
    
    let empWage = empHrs*WAGE_PER_HOUR;
    console.log("UC3- Emp Wage "+empWage);
}