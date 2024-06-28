// QUESTION NO 1
function fetchGreeting(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve('Hello,World!');
        },2000);
    })
}

// QUESTION NO 2
function stimulateTask() {
    console.log("Task started");
    setTimeout(() => {
        console.log("Task completed");
    },1000);
}

// QUESTION NO 3
function fetchData1():Promise<string>{
    return new Promise((resolve)=> {
        setTimeout(() =>{
            resolve("Data fetched successfully!");
        },1000);
    });
}
// QUESTION NO 4
function fetchWithError(): Promise<string>
{
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            const rand = Math.random();
            if(rand <0.5) {
                resolve ("Data fetch failed!");
            }
        },1000);
    });
}
fetchWithError()
.then(data => console.log(data))
.catch(error =>console.error(error));

// QUESTION NO 5
function fetchData():Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Data fetched');
        },1000);
    });
}
function processData(data: string):
Promise<string> {
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve('Data processed:' +data);
        },1000);
    });
}

function executeSequentially() {
    fetchData()
    .then(data => {
        console.log(data);
        return processData(data);
    })
.then(processedData => {
    console.log(processedData);
});
}
 executeSequentially();
