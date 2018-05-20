export class Calculator{
    count:number=0;
    increment(){
        this.count=this.count+1;
        return this.count;
    }
    decrement(){
        this.count= this.count-1;
        return this.count;
    }
}