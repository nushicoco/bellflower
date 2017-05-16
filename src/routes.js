import Search from "./components/search";
import Fabrics from "./components/fabrics";


export const routes = [

    {
        'path':'/',
        'component': Search,
        'exact' : true
    },
    {
        'path':'/bellflower/search',
        'component': Search,
    },
    {
        'path':'/bellflower/results',
        'component': Fabrics,
    },

]