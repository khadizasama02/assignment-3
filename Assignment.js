// a program for coverting kilometer to meter
function kilometerToMeter(distance)
{
    if(distance<0)
    {
        return "Distance can't be negetive.";
    }
    else{
        var totalMeter = distance*1000;
        return totalMeter;
    }
}
//  var result = kilometerToMeter(5);
//  console.log( result);

// a program to find budget
function budgetCalculator(watch,phone,laptop)
{
    var total = 0;
   if(watch>0 && phone>0 && laptop<0)
   {
        var watchTotal = watch*50;
        var phoneTotal = phone*100;
        var total = watchTotal+phoneTotal;
       
      
   }
   else  if(watch>0 && phone<0 && laptop>0)
   {
        var watchTotal = watch*50;
        var laptopTotal = laptop*500;
        var total = watchTotal+laptopTotal;
        
      
   }
   else if(watch<0 && phone>0 && laptop>0)
   {
        var phoneTotal = phone*100;
        var laptopTotal = laptop*500;
        var total = phoneTotal+laptopTotal;
        
   }
   else if(watch<0 && phone<0 && laptop>0)
   {
        
        var laptopTotal = laptop*500;
        var total = laptopTotal;
       
   }
   else if(watch>0 && phone<0 && laptop<0)
   {
        var watchTotal = watch*50;
        
        var total = watchTotal;
        
   }
   else if(watch<0 && phone>0 && laptop<0)
   {
        var phoneTotal = phone*100;
        
        var total = phoneTotal;
        
   }
   else if(watch<0 && phone<0 && laptop<0){
       return 'dont be a  miser';

   }
   else{
    var watchTotal = watch*50;
    var phoneTotal = phone*100;
    var laptopTotal = laptop*500;
    var total = watchTotal+phoneTotal+laptopTotal;
    
   }
   return total;
}
// var result = budgetCalculator(2,0,0);
// console.log(result);


// a program to find totalcost
function hotelCost(days)
{
    var totalCost = 0;
    if(days<=0)
    {
        return 'stay for some days'
    }
    else if(days<=10)
    {
        totalCost = days*100;
        
    }
    else if(days<=20)
    {
        var firstTenDays = 10*100;
        var remainingDays = days - 10;
        var secondTenDays = remainingDays*80;
        totalCost = firstTenDays+secondTenDays;
        
    }
    else{
        var firstTenDays = 10*100;
        var secondTenDays = 10*80;
        var leftDays = days - 20;
        var thirdPart = leftDays*50;
        totalCost = firstTenDays + secondTenDays + thirdPart;
       
        

    }
    return totalCost;
    
    
}
// var result = hotelCost(35);
// console.log(result);

// a program to find largest string
function megaFriend(name)
{
    var largest='';
    if(name.length == 0)
    {
        return 'Be friend with someone';
    }
    
    else{
    for(var i= 0 ; i<name.length;i++)
    {
        if(name[i].length>largest.length)
    {
        largest=name[i];
    }
    }
    
    }
    return largest;
    

}
// var result =megaFriend(['dfhgn','mfjfnhvf','hdbhncmnjc m','','12']);
// console.log(result);



       
     
