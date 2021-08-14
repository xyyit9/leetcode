const defer = () => new Promise((resolve) => setTimeout(resolve, 1000));

retry(
    defer, 5
).then(()=>{console.log('success')},()=>{console.log('reject')})

function retry(func, count){
    if(count === 0 ){
        return Promise.resolve()
    }else{
        return func().then(retry(func, count-1))
    }
}

