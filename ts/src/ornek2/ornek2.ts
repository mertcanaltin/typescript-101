

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
