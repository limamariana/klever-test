export const useLocalStorage = () => {
  const getToken = (id) => {
    const token = localStorage.getItem(id);
    if (token) {
      return JSON.parse(token);
    }
    return null;
  };

  const addOrUpdateToken = (token) => {
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        const localStorageToken = JSON.parse(localStorage[key]);
        if (
          localStorage.hasOwnProperty(key) &&
          localStorageToken.tokenName === token.tokenName &&
          token.id !== localStorageToken.id
        ) {
          return false;
        }
      }
    }
    token.tokenName = token.tokenName.toUpperCase();
    const tokenToString = JSON.stringify(token);
    localStorage.setItem(token.id, tokenToString);

    return true;
  };

  const removeToken = (id) => {
    const tokenToBeRemove = getToken(id);
    if (!tokenToBeRemove) {
      return false;
    }
    localStorage.removeItem(tokenToBeRemove.id);
    return true;
  };
  return { getToken, addOrUpdateToken, removeToken };
};
