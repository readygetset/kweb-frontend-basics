const isValidNumber = num => {
    if (num%1==0){
        return 0<num<10
    }
    else if(parseInt(num)%1==0){
        return 0<parseInt(num)<10
    }
    else return false
} 