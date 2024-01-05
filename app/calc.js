// export default class {
//     addition(arg1, arg2, arg3){
//       //  addition(arg1, arg2,...args){ tous les arguments après arg1 et arg2
//         if(arg3 == undefined) arg3 = 0;
//         return arg1+arg2+arg3;
//     }
// }

export default class {
    addition(arg1, arg2, ...args){ // tous les arguments après arg1 et arg2
        let sum = 0;
        if(args.length > 0) sum = args.reduce((accumulator, current) => accumulator + current);
        return arg1 + arg2 + sum;
    }

    // soustraction(arg1, arg2){
    //     return arg1 - arg2;
    // }
    soustraction(arg1, arg2, ...args){
        let sum = 0;
        if(args.length > 0) sum = args.reduce((accumulator, current) => accumulator + current);
        return arg1 - arg2 - sum;
    }
    
    // multiplication(arg1, arg2){
    //     return arg1 * arg2;
    // }
    multiplication(arg1, arg2, ...args){
        let sum = 1;
        if(args.length > 0) sum = args.reduce((accumulator, current) => accumulator * current);
        return arg1 * arg2 * sum;
    }

    division(arg1, arg2){
        return arg1 / arg2;
    }
}