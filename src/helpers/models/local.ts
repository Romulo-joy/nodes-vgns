import { type } from "os";
import { isTemplateExpression } from "typescript";
import { Brasil } from "../../controllers/pagecontroller";

type viagenstype = 'Brasil' | 'EstadosUnidos' | 'Europa';

type local = {
    type: viagenstype,
    img: string,
    name: string,
    color: string,
    tamanho: Int16Array;
}

const data: local[] = [];

export const local: = {
    getALL: () => {
        return data;
    },

    getFronType: (type: viagenstype): local[] =>{
        return data.filter((item) => {
            if(item.type == type){
                return true;
            }else{
                return false;
            }
        })
    }
};

  getFromName: (name: string): local[] => {
       return data.filter((item)) =>{
          if(
            item.name.tolocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1
        ){
            return true;
        }else{
            return false;
        }


      }); 
  };
};

