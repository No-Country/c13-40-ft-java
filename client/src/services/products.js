const getProducts = () => fetch('http://comfy.us-east-1.elasticbeanstalk.com/products').then((res) => res.json());

export default getProducts;