type MenuOptions = '' | 'all' | 'Brasil' | 'EstadosUnidos' | 'Europa';

export const createMenuObject = (activeMenu: MenuOptions) => {
  let returnObject = {
    all: false,
    Brasil: false,
    EstadosUnidos: false,
    Europa: false,
  };

  if (activeMenu != ''){
    returnObject[activeMenu] = true;
  }

  return returnObject;
}