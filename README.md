# typescript-101
hi this is a piece of code i learned when i was just getting started with typescript


### Step one a brief summary
1. type script allows us to write javascript more efficiently
2. javascript actually loves us very much and runs all code even an undefined expression or error
3. typescript gives us information about errors and allows us to solve problems in a shorter time, at the same time we do type checking in our code
 
### Step two the differences

 1. only javascript
 
 ```js
function sum(val1, val2) {
    return val1 + val2;
}

console.log(sum(1))
```
### let's add some type! :tada:

 1. only typescript

```js
function sum(val1:number, val2:number):number {
    return val1 + val2;
}

console.log(sum(1,2))
```

### let's go a little deeper

 1. interface ?
 
 Fear not, the interface in TypeScript is basically nothing more than a type definition. We can think of it as class and functions define the behavior of objects, while interfaces define the types of objects.

#### sample => :ninja:


```js


const api = {
    status: '200',
    data: {
        name: 'OrnekApi',
        description: 'bu Ornek2',
        version: '1.0.0'
    },
};

interface apiType {
    status: string,
    data: {
        name: string,
        description: string,
        version: string
    },
}

function getApiData(api:apiType) {
    if (api.status == '200') {
        return 'harika  ' + api.data.name + ' calısıyor !';
    }
}

console.log(getApiData(api));

```


thank you for reading my post :heart:
