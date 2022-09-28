import { Brasil } from "../../controllers/pagecontroller";

type viagenstype = 'Brasil' | 'EstadosUnidos' | 'Europa';

type local = {
    type: viagenstype,
    img: string,
    name: string,
    color: string,
    tamanho: Int16Array;
}

const data: local = [
   {
    type: 'Brasil',
    img: 'Brasil.jpg',
    name: 'Brasil',
    color: 'azul'
   }
];

export const local: = {
   
    getALL: () =>{
        return data,
    },
},

