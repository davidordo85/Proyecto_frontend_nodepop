
function getAds() {
    return [
            
        {
            name: 'xbox controller',
            precio: '60.00',
            compra: 'true',
            image: 'controller.jpg'
        },
        {
            name: 'apple-tv',
            precio: '160.00',
            compra: 'false',
            image: 'apple-tv.jpg'
        },
        {
            name: 'chromeCast',
            precio: '25.00',
            compra: 'true',
            image: 'chromecast.jpg'
        },
        {
            name: 'radio-despertador',
            precio: '10.00',
            compra: 'false',
            image: 'despertador.jpg'
        },
    ];
}



export default {
    getAdvertisements: () => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const ads = getAds();
                if (ads.length === 0) {
                    reject(ads);
                } else {
                    resolve(ads);
                }
            }, Math.random() * 5000)
        });
        return promise
    }
};