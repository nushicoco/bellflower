import Search from "./components/search";
import Fabrics from "./components/fabrics";


export const routes = [

    {
        'path':'/',
        'component': Search,
        'exact' : true
    },
    {
        'path':'/search',
        'component': Search,
    },
    {
        'path':'/results',
        'component': Fabrics,
    },

]