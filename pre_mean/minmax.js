var arr = [1, -2, 9, 4]

function maxMinAvg(arr){
    var max, min, total = arr[0]

    for (var i =1; i < arr.length; i++){
        total += arr[i]
        if (arr[i] > max){
            max = arr[i]
        }
        else if (arr[i]< min){
            min = arr[i]
        }
    }
    avg = total/arr.length
    return 'The minimum is ${min}, the maximum is ${max}, and the average is ${avg}.'
}

console.log(maxMinAvg(arr))
