var month=parseInt(prompt('enter the month'));   //input will be in string so convert ir into integer then get input
switch(month)
{
    case 1:
        document.write("january");
        break;
    case 2:
        document.write('feburary');
        break;
    case 3:
        document.write('march');
        break;
    default:
        document.write('enter values between 1 and 3');
}