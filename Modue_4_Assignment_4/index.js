var arr= new Array(); 
arr[0]="Yaakov";
arr[1]="john";
arr[2]="jen";
arr[3]="jason";
arr[4]="paul";
arr[5]="frank";
arr[6]="larry";
arr[7]="paula";
arr[8]="laura";
arr[9]="jim";
arr[10]="krishna";




for(var i=0 ;i<arr.length;i++){
if(arr[i].charAt(0)==='j' || arr[i].charAt(0)==='J'){

	console.log("GOODBYE "+arr[i]);

}
else{
console.log("HELLO "+arr[i]);
}
}