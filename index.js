var arr = [1,6,8,9,3,4,45,90];
let max=arr[0];
for(var i=0; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max);