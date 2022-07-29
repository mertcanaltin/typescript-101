const api = {
    status: '200',
    data: {
        name: 'OrnekApi',
        description: 'bu Ornek2',
        version: '1.0.0'
    },
};

function getApiData(api) {
    if (api.status == '200') {
        return 'harika  ' + api.data.name + ' calısıyor !';
    }
}

console.log(getApiData(api));
