const getDivisors = num => {
    let cnt=0;
    let index=1;
    let arr=[];
    while(index<=num){
        if(num%index==0) {
            arr[cnt]=index
            cnt+=1
        }
        index+=1
    }
    return arr
}